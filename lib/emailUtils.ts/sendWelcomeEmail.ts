import mail from '@sendgrid/mail';

mail.setApiKey(process.env.SENDGRID_API_KEY || '');

type WelcomeEmailData = {
  to: string;
  name: string;
  customMessage?: string;  // Optional custom message
};

export async function sendWelcomeEmail({ to, name, customMessage }: WelcomeEmailData) {
  const data = {
    to,
    from: 'welcome@tropicallandscaping.tech',
    subject: 'Welcome to Tropical Landscaping!',
    templateId: "d-101234a2d3de47109dafcba3574a5279",
    dynamicTemplateData: {
      fullName: name,
      customMessage: customMessage || "We're excited to have you with us!",  // Default message if not provided
    },
  };

  try {
    await mail.send(data);
    console.log('Welcome email sent successfully.');
  } catch (error) {
    console.error('Error sending welcome email:');
  }
}
