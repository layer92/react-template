import "styled-components/macro";

import { css } from "styled-components/macro";
import { useSetThemeById, useTheme } from "../theme/ThemeContext";
import { AllThemes } from "../theme/Theme";

const ThemeIds = AllThemes.map(a=>a.id);

export function ThemeWidget(){
    const theme = useTheme();
    const setThemeById = useSetThemeById();
    const nextThemeId = ThemeIds[(ThemeIds.indexOf(theme.id)+1)%ThemeIds.length];

    return <div css={Css}>
        <a onClick={()=>setThemeById(nextThemeId)}>
            {nextThemeId} mode
        </a>
    </div>
}

const Css = css`
    cursor: pointer;
`;