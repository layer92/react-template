import "styled-components/macro";
import { TranslationKey } from "../translation/TranslationKey";
import { UseMakeRenderedTranslation } from "../translation/TranslationContext";

/** Placeholder for eventual translation. */
export default function Text(
    {
        textKey
    }:
    {
        textKey:TranslationKey,
    }
){
    const makeRenderedTranslation = UseMakeRenderedTranslation();
    const translatedValue = makeRenderedTranslation({ key: textKey });
    return <>{translatedValue}</>
}