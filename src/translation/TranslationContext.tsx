import { createContext, useContext } from "react";
import { TranslationKey } from "./TranslationKey";
import { TranslationsEn } from "./TranslationsEn";
import { UseLocalStorageValue } from "@layer92/react-utilities";
import { Expect, Iso6391LanguageCode, OnException } from "@layer92/core";

const DefaultLanguageCode:Iso6391LanguageCode = "en";

const Context = createContext({
    languageCode:DefaultLanguageCode as Iso6391LanguageCode,
    setLanguageCode:(iso6391LanguageCode:Iso6391LanguageCode)=>{},
});

/** Stores and provides global state. */
export function TranslationContextProvider({children}:{children:any}){
    const [languageCode,setLanguageCode] = UseLocalStorageValue<Iso6391LanguageCode>("iso6391LanguageCode",DefaultLanguageCode);
        
    return <Context.Provider value={{
        languageCode,
        setLanguageCode,
    }}>
        {children}
    </Context.Provider>;
}


function renderTranslation(key:TranslationKey,languageCode:Iso6391LanguageCode,onMissingTranslation?:OnException){
    const value = TranslationsEn[key];
    Expect(value,`Missing translation in language "${languageCode}" for key: "${key}"`,onMissingTranslation);
    return value;
}

/** Immediately returns: value if found, else returns the result of the fallback callback, else throws an error */
export function UseMakeRenderedTranslation<FallbackValueType extends string>(){
    const languageCode = UseTranslationLanguageCode();
    return function makeRenderedTranslation({ key, makeFallbackValue, onUnableToMake }: { key: TranslationKey; makeFallbackValue?: () => FallbackValueType; onUnableToMake?: OnException; }){
        let isMissingTranslation = false;
        try{
            return renderTranslation(key,languageCode,()=>isMissingTranslation=true);
        }catch(e){
            if(isMissingTranslation){
                if(makeFallbackValue){
                    return makeFallbackValue();
                }
                onUnableToMake?.();
            }
            throw e;
        }
    }
}

export function UseTranslationLanguageCode(){
    return useContext(Context).languageCode;
}

export function UseSetTranslationLanguageCode(){
    return useContext(Context).setLanguageCode;
}