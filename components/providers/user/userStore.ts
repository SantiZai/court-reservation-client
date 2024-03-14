import { createStore } from "zustand/vanilla";

export type UserState = {
  userId: string;
};

export type UserActions = {
  setUserId: () => void;
};

export type UserStore = UserState & UserActions;

export const defaultInitState: UserState = {
  userId: "",
};

export const createUserStore = (initState: UserState = defaultInitState) => {
  return createStore<UserStore>()((set) => ({
    ...initState,
    setUserId: () => set((state) => ({ userId: state.userId })),
  }));
};
