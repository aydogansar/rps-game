import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Store {
  score: number;
  increaseScore: () => void;
  decreaseScore: () => void;

  choice: null | number;
  setChoice: (userChoice: number) => void;
}

const useStore = create<Store>()(
  devtools(
    persist(
      (set) => ({
        score: 0,
        increaseScore: () => set((state) => ({ score: state.score + 1 })),
        decreaseScore: () => set((state) => ({ score: state.score - 1 })),

        choice: null,
        setChoice: (userChoice: number) => set({ choice: userChoice }),
      }),
      {
        name: "store",
      }
    )
  )
);

export default useStore;
