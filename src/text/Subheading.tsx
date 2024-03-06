import "styled-components/macro";
import Text from "./Text";
import { css } from "styled-components/macro";
import { TranslationKey } from "../translation/TranslationKey";

export default function Subheading(
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
    font-size: 1.5em;
    margin: .5em;
    font-weight: bold;
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
`;