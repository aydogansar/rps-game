import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { fetcher, calculateScore } from "utils";

type Choice = number | null;

interface Store {
  score: number;
  increaseScore: () => void;
  decreaseScore: () => void;

  result: null | "win" | "lose" | "draw";
  win: null | "win" | "lose" | "draw";
  computerChoice: Choice;
  choice: Choice;
  setChoice: (userChoice: Choice) => void;
  setComputerChoice: (computerChoice: Choice) => void;
  handlePlay: (userChoice: Choice) => void;
  playAgain: () => void;
}

const useStore = create<Store>()(
  devtools(
    persist(
      (set) => ({
        score: 0,
        increaseScore: () => set((state) => ({ score: state.score + 1 })),
        decreaseScore: () => set((state) => ({ score: state.score - 1 })),

        result: null,
        win: null,

        choice: null,
        setChoice: async (userChoice: Choice) => set({ choice: userChoice }),

        computerChoice: null,
        setComputerChoice: (computerChoice: Choice) => set({ computerChoice }),

        handlePlay: async (userChoice: Choice) => {
          set({ choice: userChoice });

          if (typeof userChoice === "number") {
            const res = await fetcher("/api/play", {
              method: "POST",
              body: {
                userChoice,
              },
            });

            setTimeout(() => {
              if (res) {
                set((state) => ({
                  ...res,
                  win: res.result,
                  score: calculateScore(res.result, state.score),
                }));
              }
            }, 1000);
          }
        },
        playAgain: () => {
          set({ result: null });

          setTimeout(() => {
            set({ choice: null, computerChoice: null, win: null });
          }, 1000);
        },
      }),
      {
        name: "store",
      }
    )
  )
);

export default useStore;
