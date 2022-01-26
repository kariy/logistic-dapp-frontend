import { createContext, useContext, useState } from "react";

type ToggleContext = {
    state: boolean;
    dispatch: React.Dispatch<React.SetStateAction<boolean>>;
};

const ParcelListToggleContext = createContext<ToggleContext | undefined>(
    undefined
);

export function useParceListToggle() {
    return useContext(ParcelListToggleContext);
}

export const ParcelListToggleProvider: React.FC = function ({ children }) {
    const [state, setState] = useState(false);

    return (
        <ParcelListToggleContext.Provider
            value={{
                state,
                dispatch: setState,
            }}
        >
            {children}
        </ParcelListToggleContext.Provider>
    );
};
