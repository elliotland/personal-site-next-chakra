import * as sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

type EmailFormData = {
  text: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { text }: EmailFormData = JSON.parse(req.body);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

  const msg = {
    to: "land.elliot@gmail.com",
    from: "me@elliot-land.com",
    subject: "You got mail",
    text: text,
  };

  sgMail
    .send(msg)
    .then(() => res.status(201).json({ message: "OK" }))
    .catch((err) => res.status(500).json({ error: err }));
}
