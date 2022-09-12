export enum Choices {
  Scissors,
  Spock,
  Lizard,
  Rock,
  Paper,
}

export const winAgainst = [
  [Choices.Paper, Choices.Lizard], // Scissors
  [Choices.Scissors, Choices.Rock], // Spock
  [Choices.Spock, Choices.Paper], // Lizard
  [Choices.Lizard, Choices.Scissors], // Rock
  [Choices.Rock, Choices.Spock], // Paper
];
