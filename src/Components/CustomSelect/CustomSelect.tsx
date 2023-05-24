import React, {KeyboardEvent, useEffect, useState} from "react";
import styles from "./Select.module.css"

type itemType = {
    value: string,
    title: string
}

type CustomSelectProps = {
    items: itemType[],
    value?: string
    onChange: (value: any) => void
}

export const CustomSelect: React.FC<CustomSelectProps> = ({items, value, onChange}) => {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElement] = useState(value)
    const selectedItem = items.find(el => el.value === value)
    const hoveredElement = items.find(el => el.value === hoveredElementValue)
    const toggleItems = () => setActive(!active)

    useEffect(() => {
        setHoveredElement(value)
    }, [value])

    const keyDownHover = (e: KeyboardEvent<HTMLDivElement>) => {

        if (e.code === "ArrowUp") {
            let iv = Number(value) > 1 ? (Number(value) - 1).toString() : "1"
            onChange(
                iv
            )

        } else if (e.code === "ArrowDown") {
            let iv = Number(value) < items.length ? (Number(value) + 1).toString() : items.length.toString()
            onChange(
                iv
            )
        } else if(e.code === 'Escape' || e.code === 'Enter'){
            onChange(hoveredElement?.value)
            console.log(hoveredElement?.value)
            setActive(false)
        }
    }
    const onItemClick = (value: any) => {
        onChange(value)
        toggleItems()
    }

    return (
        <>
            <div className={styles.select} onKeyDown={keyDownHover} tabIndex={0} autoFocus>
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active && <div className={styles.items}>
                    {items.map(el => {
                        return <div
                            onMouseEnter={() => setHoveredElement(el.value)}

                            className={hoveredElement === el ? styles.selected : ""}
                            key={el.value}
                            onClick={() => onItemClick(el.value)}>{el.title} </div>
                    })}
                </div>}

            </div>
        </>
    );
};
