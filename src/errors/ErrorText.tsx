import "styled-components/macro";

import { useState } from "react";
import Subheading from "../text/Subheading";
import { useTheme } from "../theme/ThemeContext";
import { css } from "styled-components";
import { TranslationKey } from "../translation/TranslationKey";
import { UseMakeRenderedTranslation } from "../translation/TranslationContext";

export function ErrorMessageText(
    {
        textKey
    }:
    {
        textKey?:TranslationKey
    }
){
    const theme = useTheme();
    const makeRenderedTranslation = UseMakeRenderedTranslation();
    const translatedValue =  textKey ? makeRenderedTranslation({ key: textKey }) : undefined;

    let contents = <>
        <Subheading textKey="ErrorText.Error"/>
        {translatedValue}
    </>

    const Css = css`
        color: ${theme.errorTextColor};
    `;

    return <span css={Css}>
        {contents}
    </span>;
}


/** Returns: [
 *  errorSnippet: a JSX component with the error text, or undefined if no error has been shown,
 *  showError: call this to show the error
 * ] */
export function useErrorText(){
    const [messageTextKey,setMessageTextKey] = useState<TranslationKey>();
    
    function showErrorMessageByKey(messageTextKey:TranslationKey){
        setMessageTextKey(messageTextKey);
    }

    return [
        messageTextKey ? <ErrorMessageText textKey={messageTextKey}/> : undefined,
        showErrorMessageByKey
    ] as const;
}
