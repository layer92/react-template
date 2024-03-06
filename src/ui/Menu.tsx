import "styled-components/macro";
import { css } from "styled-components/macro";
import { PagePathBox } from "../routing/PagePathBox";
import { Theme } from "../theme/Theme";
import { useTheme } from "../theme/ThemeContext";
import { PageLink } from "../routing/PageLink";

export type MenuItem = {
    path:PagePathBox,
    iconImgSrc:string,
    text:string,
}


export function Menu(){
    return <>
        <Content shadow/>
        <Content/>
    </>;
}

function Content({shadow}:{shadow?:boolean}){
    const theme = useTheme();

    return <div css={shadow?ShadowCss(theme):Css(theme)}>
        <div css={TitleCss}>
            <PageLink to="/">
                {`{{TITLE}}`}
            </PageLink>
        </div>
        <div css={SloganCss}>
            {`{{DESCRIPTION}}`}
        </div>
    </div>;
}


const Css = (theme:Theme)=>css`
    background-color: ${theme.textColor}11;
    position: fixed;
    top: 0;
    width: calc(100% - 2em);
    box-sizing: border-box;
    
    padding: 1em 1em;
    margin: 1em;
    overflow-x: hidden;
    overflow-y: hidden;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;


const ShadowCss = (theme:Theme)=>css`
    ${Css(theme)}
    position: relative;
    visibility: hidden;
`;

const TitleCss = css`
    font-size: 4em;
`;

const SloganCss = css`
    font-size: 2em;
`;