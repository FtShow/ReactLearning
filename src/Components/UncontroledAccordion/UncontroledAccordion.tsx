import React, {useReducer, useState} from "react";
import {accordionAC, accordionReducer} from "./AccordionReducer";

type AccordionPropsType = {
    titleValue: string;

}

export function UncontroledAccordion(props: AccordionPropsType) {
    let {titleValue, ...otherProps} = props;
    const [collapsed, dispatch] = useReducer(accordionReducer, {collapsed: false})
    const onclickHandler = () => {
        console.log('12121212')
        dispatch(accordionAC())
    }
    return (
        <div>
            <AccordionTitle onClick={onclickHandler} title={titleValue}/>
            {collapsed.collapsed && <AccordionBody/>}
        </div>
    )

}


type AccordionPropsTitleType = {
    title: string;
    onClick: ()=>void
}

function AccordionTitle(props: AccordionPropsTitleType) {

    return (
        <h3 onClick={()=>props.onClick()}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
