

import {accordionAC, accordionReducer, StateType} from "./AccordionReducer";


test('test for test', ()=>{
    const state: StateType = {
        collapsed: false
    }
    const testReducer = accordionReducer(state, accordionAC())
    expect(testReducer.collapsed).toBe(true)

    expect(() => {
        accordionReducer(state, { type: 'TOOGLE' })
    }).not.toThrow();

})