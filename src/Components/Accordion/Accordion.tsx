import React from "react";

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    setCollapsed: (e: boolean)=>void
}

export const AccordionComponent=(props: AccordionPropsType)=> {
    let {titleValue, collapsed, ...otherProps} = props;

        return (
            <div>
                <AccordionTitle setCollapsed={props.setCollapsed}
                                collapsed={props.collapsed}
                                title={titleValue}/>
                {collapsed && <AccordionBody/>}
            </div>
        )

    }


type AccordionPropsTitleType = {
    title: string;
    collapsed: boolean;
    setCollapsed: (e: boolean)=>void
}

function AccordionTitle(props: AccordionPropsTitleType) {

    return (
        <h3 onClick={()=>props.setCollapsed(!props.collapsed)}>{props.title}</h3>
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
