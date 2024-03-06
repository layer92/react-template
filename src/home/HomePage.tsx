import "styled-components/macro";
import { css } from "styled-components/macro";
import { Page } from "../pages/Page";

export function HomePage(){
    
    return <Page>
        <div css={MainCss}>
            Home Page.
        </div>
    </Page>;
}

const MainCss = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 1em;
    box-sizing: border-box;
`;
