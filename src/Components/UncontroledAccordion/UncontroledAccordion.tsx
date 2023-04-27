import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string;

}

export function UncontroledAccordion(props: AccordionPropsType) {
    let {titleValue, ...otherProps} = props;
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const onclickHandler = () => {
        setCollapsed(!collapsed)
    }
    return (
        <div>
            <AccordionTitle onClick={onclickHandler} title={titleValue}/>
            {collapsed && <AccordionBody/>}
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
