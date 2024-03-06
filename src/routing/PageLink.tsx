import { Link } from "react-router-dom";
import { PagePath } from "./PagePath";

export function PageLink({
    to,
    children
}:{
    to:PagePath,
    children:any,
}){
    return <Link to={to}>{children}</Link>
}