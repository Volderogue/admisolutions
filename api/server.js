import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Configuration du transporteur d'email
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Route de santé
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Route pour l'envoi de formulaire de contact
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, company, message, service } = req.body;

    // Validation basique
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        error: 'Tous les champs obligatoires doivent être remplis',
      });
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Format d\'email invalide',
      });
    }

    // Préparation du contenu de l'email
    const emailContent = `
Nouvelle demande de contact depuis le site Admin Solution

Informations du contact :
━━━━━━━━━━━━━━━━━━━━━━━━━━
Nom : ${name}
Email : ${email}
Téléphone : ${phone}
${company ? `Entreprise : ${company}` : ''}
${service ? `Service souhaité : ${service}` : ''}

Message :
━━━━━━━━━━━━━━━━━━━━━━━━━━
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━
Date : ${new Date().toLocaleString('fr-FR')}
    `.trim();

    // Envoi de l'email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'contact@adminsolution.fr',
      subject: `Nouvelle demande de contact - ${name}`,
      text: emailContent,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    // Email de confirmation au client
    const confirmationEmail = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Nous avons bien reçu votre demande - Admin Solution',
      text: `
Bonjour ${name},

Nous avons bien reçu votre demande et vous en remercions.

Notre équipe va étudier votre demande et vous recontactera dans les plus brefs délais.

Récapitulatif de votre demande :
${service ? `Service : ${service}` : ''}
Message : ${message}

Cordialement,
L'équipe Admin Solution

━━━━━━━━━━━━━━━━━━━━━━━━━━
Admin Solution
2 Clos de Gally
78590 Noisy-le-Roi
Tél : +33 7 56 85 49 89
Email : contact@adminsolution.fr
      `.trim(),
    };

    await transporter.sendMail(confirmationEmail);

    res.json({
      success: true,
      message: 'Votre demande a été envoyée avec succès',
    });
  } catch (error) {
    console.error('Erreur lors de l\'envoi du formulaire:', error);
    res.status(500).json({
      success: false,
      error: 'Une erreur est survenue lors de l\'envoi de votre demande',
    });
  }
});

// Gestion des erreurs 404
app.use((req, res) => {
  res.status(404).json({ error: 'Route non trouvée' });
});

// Gestion globale des erreurs
app.use((err, req, res, next) => {
  console.error('Erreur serveur:', err);
  res.status(500).json({ error: 'Erreur serveur interne' });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`API Admin Solution démarrée sur le port ${PORT}`);
  console.log(`Health check disponible sur http://localhost:${PORT}/health`);
});


