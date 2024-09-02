import mail from '@sendgrid/mail';

mail.setApiKey(process.env.SENDGRID_API_KEY || '');

type WelcomeEmailData = {
  to: string;
  name: string;
};

export async function sendWelcomeEmail({ to, name }: WelcomeEmailData) {
  const message = `
    Hello ${name},\r\n
    Welcome to Tropical Landscaping! We're excited to have you on board.\r\n
    If you have any questions, feel free to reply to this email.\r\n
    Best regards,\r\n
    Tropical Landscaping Team
  `;

  const data = {
    to,
    from: 'welcome@tropicallandscaping.tech',
    subject: 'Welcome to Tropical Landscaping!',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  };

  try {
    await mail.send(data);
    console.log('Welcome email sent successfully.');
  } catch (error) {
    console.error('Error sending welcome email:', error);
  }
}
