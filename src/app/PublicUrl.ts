

export const PublicUrl = (()=>{
    let url = process.env.PUBLIC_URL;
    if(!url.endsWith("/")){
        url += "/";
    }
    return url;
})();