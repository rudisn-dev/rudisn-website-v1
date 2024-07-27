const nodemailer = require("nodemailer");

const { emailConfig } = require("../data/data");

const { EMAIL_FROM, EMAIL_TO, SMTP_HOST, SMTP_PASS, SMTP_PORT, SMTP_USER } =
  emailConfig;

const emailSender = async (sentMessage) => {
  try {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Compose email message
    const message = {
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: "RUDISN CONTACT US",
      html: sentMessage,
    };

    // Send email
    await transporter.sendMail(message);

    // Log success
  } catch (error) {
    // Log and re-throw any errors that occur during sending
    console.error("Error sending email:", error);
    throw error;
  }
};

module.exports = emailSender;
