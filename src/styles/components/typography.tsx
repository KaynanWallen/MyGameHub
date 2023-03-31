import React from 'react';
import { Titleh1, Titleh2, Titleh3, Titleh4, Titleh5, Titleh6 } from '../typography';

interface iBaseTitleProps {
    children: React.ReactNode;
    classname?: string;
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    fontWeight: 400 | 700;
    fontSize: "lg" | "md" | "sm";
}

const BaseTitle = ({children, classname, tag}: iBaseTitleProps) => {
    return (
        <>
        {tag === "h1" && <Titleh1 className={classname}> {children} </Titleh1>}
        {tag === "h2" && <Titleh2 className={classname}> {children} </Titleh2>}
        {tag === "h3" && <Titleh3 className={classname}> {children} </Titleh3>}
        {tag === "h4" && <Titleh3 className={classname}> {children} </Titleh3>}
        {tag === "h5" && <Titleh3 className={classname}> {children} </Titleh3>}
        {tag === "h6" && <Titleh3 className={classname}> {children} </Titleh3>}
        </>
    )
}

export default BaseTitle;