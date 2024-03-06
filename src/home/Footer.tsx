import "styled-components/macro";
import { css } from "styled-components/macro";
import { PageLink } from "../routing/PageLink";
import { Theme } from "../theme/Theme";
import { useTheme } from "../theme/ThemeContext";
import { ThemeWidget } from "./ThemeWidget";

export function Footer(){
    const theme = useTheme();
    return <div css={LittleCssInCorner(theme)}>
        <ThemeWidget/>
        <div>
            <PageLink to={"/terms"}>
                terms of use
            </PageLink>
        </div>
        <div>
            <PageLink to={"/privacy"}>
                privacy policy
            </PageLink>
        </div>
    </div>;
}

const LittleCssInCorner = (theme:Theme)=>css`
    position: absolute;
    right: 0;
    bottom: 0;
    display:flex;
    flex-direction:row;
    & > * {
        padding: .5em;
    }
    background-color: ${theme.backgroundColor}88;
`;