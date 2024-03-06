import "styled-components/macro";
import Text from "./Text";
import { css } from "styled-components/macro";
import { TranslationKey } from "../translation/TranslationKey";

export default function Heading(
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
    font-size: 2em;
    font-weight: bold;
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    /* padding-left: 1em; */
`;