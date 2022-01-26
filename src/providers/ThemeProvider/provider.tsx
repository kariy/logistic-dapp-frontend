import { ThemeProvider as StyledThemeProvider } from "styled-components";

export enum ThemeEnum {
    light,
    dark,
}

type Color = string;

type ThemeColors = Partial<{
    white: Color;
    black: Color;
    primary: Color;
    secondary: Color;
    grey: Color;
    error: Color;
}>;

function getColors(mode: ThemeEnum): ThemeColors {
    return {
        white: "#FFFFFF",
        black: "#3E3E3E",

        // backgrounds / greys
        // primary: mode ? "#F2E9E4" : "#EF4A86",
        // secondary: mode ? "#4A4E69" : "#FFFFFF",
        grey: "#B1B1B1",
        error: "#c9184a",
    };
}

function getTheme(mode: ThemeEnum) {
    return {
        colors: { ...getColors(mode) },

        rounded: {
            sm: "4px",
            md: "6px",
            lg: "10px",
            full: "1000px",
        },
    };
}

export const ThemeProvider: React.FC = function ({ children }) {
    const themeObj = getTheme(ThemeEnum.light);

    return (
        <StyledThemeProvider theme={themeObj}>{children}</StyledThemeProvider>
    );
};
