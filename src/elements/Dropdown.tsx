import "styled-components/macro";
import { css } from "styled-components/macro";
import { useTheme } from "../theme/ThemeContext";
import { Theme } from "../theme/Theme";

export type DropdownOption = {
    value:string,
    text:string,
}

export function Dropdown(
    {
        options,
        value,
        setValue,
        disabled,
    }:
    {
        options:DropdownOption[],
        value:string,
        setValue:(value:string)=>void|Promise<void>,
        disabled?:boolean,
    }
){
    const theme = useTheme();
    return <select disabled={disabled} css={Css(theme)} value={value} onInput={(a)=>setValue(a.currentTarget.value)}>{options.map((a,i)=>
        <option key={i} value={a.value}>{a.text}</option>)}
    </select>;
}


const Css = (theme:Theme)=>css`
    color: ${theme.textColor};
    background-color: ${theme.backgroundColor};
    margin: 1em;
    cursor: pointer;
`;