// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Choices } from "models/Choices";
import { play, getRandomInt } from "utils";

type Data = {
  win: boolean;
  computerChoice: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const { userChoice } = req.body;

  const maxLength = Object.keys(Choices).length / 2;

  const computerChoice = getRandomInt(maxLength);

  const win = play(userChoice, computerChoice);

  res.status(200).json({ win, computerChoice });
}
