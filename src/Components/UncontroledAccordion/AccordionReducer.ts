export type StateType = {
    collapsed: boolean
}

export const accordionReducer = (state: StateType, action: accordionACType): StateType => {
    if (action.type === "TOOGLE") {
        return {
            ...state,
            collapsed: !state.collapsed
        }
    }
    return state
}



type accordionACType = ReturnType<typeof accordionAC>


export const accordionAC = () => {
    return {
        type: "TOOGLE",
    } as const
}