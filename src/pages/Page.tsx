import "styled-components/macro";

import { css } from "styled-components/macro";
import { Menu } from "../ui/Menu";
import { TranslationKey } from "../translation/TranslationKey";
import { UseMakeRenderedTranslation } from "../translation/TranslationContext";
import { DocumentTitle } from "@layer92/react-utilities";
import { useTheme } from "../theme/ThemeContext";
import { Theme } from "../theme/Theme";
import { Footer } from "../home/Footer";

export function Page({
    children,
    titleKey,
}:{
    children:any,
    titleKey?:TranslationKey,
}){
    const theme = useTheme();

    const makeRenderedTranslation = UseMakeRenderedTranslation();
    let title = "{{TITLE}}";
    if(titleKey){
        const translation = makeRenderedTranslation({ key: titleKey });
        title = translation+" | "+title;
    }
    return <div css={PageCss(theme)}>
        <Menu/>
        <DocumentTitle>
            {title}
        </DocumentTitle>
        {children}
        <Footer/>
    </div>;   
}


const PageCss = (theme:Theme)=>css`
    font-family: ${theme.fontFamily};
    width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    color: ${theme.textColor};
    background-color: ${theme.backgroundColor};
    a{
        color:inherit;
        text-decoration: none;
        :hover{
            text-decoration: underline;
        }
    };
`;