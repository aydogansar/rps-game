// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Choices } from "models/Choices";
import { play, getRandomInt } from "utils";

type Data = {
  result: string;
  computerChoice: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { userChoice } = req.body;

  const maxLength = Object.keys(Choices).length / 2;

  const computerChoice = getRandomInt(maxLength);

  if (userChoice === computerChoice) {
    return res.status(200).json({ result: "draw", computerChoice });
  }

  const win = play(userChoice, computerChoice) ? "win" : "lose";

  res.status(200).json({ result: win, computerChoice });
}
