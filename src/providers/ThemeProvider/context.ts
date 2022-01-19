import { createContext, useContext } from "react";

type ThemeDispatchType = {
    toggle: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThemeDispatch = createContext<ThemeDispatchType | undefined>(
    undefined
);

export const useThemeDispatch = function () {
    return useContext(ThemeDispatch);
};
