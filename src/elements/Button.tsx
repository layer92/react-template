import "styled-components/macro";
import { CSSProp, css } from "styled-components/macro";
import Text from "../text/Text";
import { TranslationKey } from "../translation/TranslationKey";
import { useTheme } from "../theme/ThemeContext";
import { Theme } from "../theme/Theme";


export function Button(
    {
        onClick,
        children,
        textKey,
        addCss,
    }:
    {
        onClick?:()=>void|Promise<void>,
        children?:any,
        textKey?:TranslationKey,
        addCss?:CSSProp,
    }
){
    const theme = useTheme();
    return <button css={`${Css(theme)}${addCss}`} onClick={onClick}>
        {textKey ? <Text textKey={textKey}/> : children}
    </button>;
}

const Css = (theme:Theme)=>css`
    cursor: pointer;
    font-family: inherit;
    margin: 1em;
`;