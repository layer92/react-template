import { createContext, useContext } from "react";
import { AllThemes, ThemeId } from "./Theme";
import { UseLocalStorageValue } from "@layer92/react-utilities";
import { DoesBrowserPreferDarkMode } from "@layer92/browser-utilities";

const DefaultThemeId:ThemeId = DoesBrowserPreferDarkMode() ? "dark" : "light"
// const DefaultThemeId:ThemeId = "light";

const Context = createContext({
    theme:AllThemes[0],
    setThemeById:(themeId:ThemeId)=>{},
});

export function ThemeContextProvider({children}:{children:any}){
    const [themeId,setThemeId] = UseLocalStorageValue<ThemeId>("themeId",DefaultThemeId);
    const theme = AllThemes.find(a=>a.id===themeId) || AllThemes[0];

    function setThemeById(themeId:ThemeId){
        setThemeId(themeId);
    }
    
    return <Context.Provider value={{   
        theme,
        setThemeById,
    }}>
        {children}
    </Context.Provider>;
}

export function useTheme(){
    return useContext(Context).theme;
}

export function useSetThemeById(){
    return useContext(Context).setThemeById;
}