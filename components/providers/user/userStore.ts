import { User } from "@/utils/data/models";
import { createStore } from "zustand/vanilla";

export type UserState = {
  user: User;
};

export type UserActions = {
  setUser: (user: User) => void;
};

export type UserStore = UserState & UserActions;

export const defaultInitState: UserState = {
  user: {
    fullName: "",
    email: "",
  },
};

export const createUserStore = (initState: UserState = defaultInitState) => {
  return createStore<UserStore>()((set) => ({
    ...initState,
    setUser: (user: User) => set(() => ({ user })),
  }));
};
