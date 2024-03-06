

export function TextInput({
    value,
    setValue,
    onEnterKeyDown
}:{
    value:string,
    setValue:(value:string)=>void,
    onEnterKeyDown?:()=>void|Promise<void>,
}){
    return <input
        value={value}
        onChange={e=>setValue(e.target.value)}
        onKeyDown= {e=>{
            if( onEnterKeyDown && e.key==="Enter" ){
                onEnterKeyDown();
            }
        }}
    />
}