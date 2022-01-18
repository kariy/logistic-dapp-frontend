import { createContext, useContext } from "react";

type TUserContext = {
    address: string | null;
    set: React.Dispatch<React.SetStateAction<string | null>>;
};

export const UserContext = createContext<TUserContext | undefined>(undefined);

export function useUser() {
    return useContext(UserContext);
}
