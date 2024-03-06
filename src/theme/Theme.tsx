
export type ThemeId = "light"|"dark";

export type Theme={
    id:ThemeId,
    backgroundColor:string,
    textColor:string,
    disabledTextColor:string,
    highlightedTextColor:string,
    fontFamily:string,
    errorTextColor:string,
}

const fontFamily = `"Nimbus Mono", monospace`;

const DarkTheme:Theme = {
    id:"dark",
    backgroundColor:"#444444",
    textColor:"#dddddd",
    disabledTextColor:"#dddddd88",
    highlightedTextColor:"#ffffff",
    fontFamily,
    errorTextColor:"#bd2a2a"
}

const LightTheme:Theme = {
    id:"light",
    backgroundColor:"#dddddd",
    textColor:"#444444",
    disabledTextColor:"#44444488",
    highlightedTextColor:"#ffffff",
    fontFamily,
    errorTextColor:"#bd2a2a"
}

export const AllThemes = [
    DarkTheme,
    LightTheme
];