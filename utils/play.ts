import { winAgainst } from "models/Choices";

function play(userChoice: number, computerChoice: number) {
  const result = winAgainst[userChoice].findIndex(
    (choice) => choice === computerChoice
  );

  return result > -1;
}

export default play;
