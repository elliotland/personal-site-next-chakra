import * as sgMail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
  
  const msg = {
    to: 'land.elliot@gmail.com', // Change to your recipient
    from: 'me@elliot-land.com', // Change to your verified sender
    subject: 'This is a simple message',
    text: 'which contains some text',
    html: '<strong>and some html</strong>',
  }
  
  sgMail.send(msg)
}