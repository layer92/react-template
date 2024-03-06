
import { HomePage } from "../home/HomePage";
import { PrivacyPolicyPage } from "../boilerplate/PrivacyPolicyPage";
import { TermsOfUsePage } from "../boilerplate/TermsOfUsePage";

export const PageRoutesMap = {
    '/': HomePage,
    '/terms':TermsOfUsePage,
    '/privacy':PrivacyPolicyPage,
};