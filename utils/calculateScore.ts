function calculateScore(win: string, score: number): number {
  switch (win) {
    case "win":
      return score + 1;
    case "lose":
      return score - 1;
    default:
      return score;
  }
}
export default calculateScore;
