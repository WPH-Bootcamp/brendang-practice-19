import { create, type StoreApi, type UseBoundStore } from "zustand";

type DarkTheme = {
  darkTheme: boolean;
  updateDarkTheme: (value: boolean) => void;
};

const useDarkTheme: UseBoundStore<StoreApi<DarkTheme>> = create((set) => ({
  darkTheme: true,
  updateDarkTheme: (value: boolean) => set({ darkTheme: value }),
}));

export default useDarkTheme;
