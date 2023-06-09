import React, {MouseEvent, useState} from "react";
import {Box, List, ListItemButton, ListItemText} from "@mui/material";

type itemSelectList = {
    title: string,
    value: any

}
export type SelectListPropsType = {
    list: itemSelectList[]
}

export const SelectListComponent: React.FC<SelectListPropsType> = (props) => {
    const [title, setTitle] = useState<string | null>("LIST FRIENDS")
    const [visibleList, setVisibleList] = useState(true)
    const onClickHandler = (e: MouseEvent<HTMLDivElement>) => {
        setTitle("Chosen friend:  " + e.currentTarget.textContent)

    }

    const displayList = props.list.map(listItem =>
        <ListItemButton onClick={onClickHandler}>
            <ListItemText sx={{
                textAlign: "center",
                "&:hover span": {
                    backgroundColor: "red",
                },
            }}
                          primary={listItem.title}/></ListItemButton>)
    return (

        <Box sx={{
            width: 200,
            bgcolor: "#333333",
            ":hover": "bgcolor: red",
            color: "white",
            position: "absolute"
        }}>
            <List sx={{
                textAlign: "center",
            }} onClick={() => setVisibleList(!visibleList)}>
                {visibleList ? title : displayList}
            </List>
        </Box>

    );
};
