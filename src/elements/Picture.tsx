import "styled-components/macro";
import { CSSProp, css } from "styled-components/macro";
import { useRef } from "react";
import { Expect } from "@layer92/core";
import { UseComponentDidMount } from "@layer92/react-utilities";

/** You can provide a variety of image-like elements and this component will display it. */
export function Picture({
    picture,
    onClick,
    addCss,
}:{
    picture:HTMLCanvasElement|HTMLImageElement,
    onClick?:()=>void|Promise<void>,
    addCss?:CSSProp,
}){
    const {width,height} = picture;
    const canvasRef = useRef<HTMLCanvasElement>(null);

    UseComponentDidMount(async ()=>{
        const canvas = canvasRef.current;
        Expect(canvas,`canvas was null`);
        const context = canvas.getContext("2d");
        Expect(context,`context was null`);
        context.drawImage(picture,0,0,width,height);
    });

    const isClickable = !!onClick;

    return <div css={`${ContainerCss};${addCss}`}>
        <canvas width={width} height={height} ref={canvasRef} onClick={onClick} css={CanvasCss(isClickable)}/>
    </div>;
}

const ContainerCss = css`
    width: 5em;
    height: 5em;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CanvasCss =(isClickable:boolean)=>css`
    ${isClickable?`cursor: pointer;`:``}
    max-width: 100%;
    max-height: 100%;
`;
