import Anthropic from "@anthropic-ai/sdk";
import { NextApiRequest, NextApiResponse } from "next";

type ChatData = {
    text: string;
  };

const anthropic = new Anthropic();


  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const { text }: ChatData = JSON.parse(req.body);

    const msg = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 1000,
        temperature: 0,
        system: "Respond only with short answers.",
        messages: [
            {
            "role": "user",
            "content": [
                {
                "type": "text",
                "text": text
                }
            ]
            }
        ]
        });
        
    res.status(201).json({ msg })
}
        
  