import * as sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

type EmailFormData = {
  message: string;
  contactInfo: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { message, contactInfo }: EmailFormData = req.body;

    if (!message || !contactInfo) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

    const msg = {
      to: "land.elliot@gmail.com",
      from: "me@elliot-land.com",
      subject: "New Contact Form Submission",
      text: `Message: ${message}\n\nContact Info: ${contactInfo}`,
      html: `<strong>Message:</strong><br>${message}<br><br><strong>Contact Info:</strong><br>${contactInfo}`,
    };

    await sgMail.send(msg);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: "Error sending email", error: error instanceof Error ? error.message : 'Unknown error' });
  }
}