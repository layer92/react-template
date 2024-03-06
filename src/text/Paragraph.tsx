import "styled-components/macro";
import Text from "./Text";
import { css } from "styled-components/macro";
import { TranslationKey } from "../translation/TranslationKey";

export default function Paragraph(
    {
        children,
        textKey
    }:
    {
        children?:any,
        textKey?:TranslationKey,
    }
){
    return <div css={Css}>
        {textKey ? <Text textKey={textKey}/> : children}
    </div>;
}


const Css = css`
    font-size: 1.2em;
    margin: .5em;
    width: 45ch;
    max-width: 100%;
    word-wrap: break-word;
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
`;