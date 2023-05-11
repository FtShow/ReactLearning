import React, {useState} from "react";
import "./App.css";
import Accordion from "./Components/Accordion/Accordion";
import {UncontroledOnOff} from "./Components/uncontroledOnOff/UncontroledOnOff";
import {OnOff} from "./Components/OnOff/OnOff";
import {Rating, ratingValueType} from "./Components/Ratings/Rating";
import {UncontroledAccordion} from "./Components/UncontroledAccordion/UncontroledAccordion";
import {UncontroledRatings} from "./Components/UncontroledRatings/UncontroledRatings";
import {SelectList} from "./Components/SelectList/SelectList";


function App() {

    const [ratingValue, setRatingValue] = useState<any>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [onOfValue, setOnOfValue] = useState(true);
    const onChangeHandler = () => {
        setOnOfValue(!onOfValue)
    }
    const changeRating = (v: ratingValueType) => {
        setRatingValue(v)
    }
    const testState = [
        {title: "Misha", value: crypto.randomUUID()},
        {title: "Dima", value:  crypto.randomUUID()},
        {title: "Nasty", value:  crypto.randomUUID()},
        {title: "Lol", value:  crypto.randomUUID()},
        {title: "KEK", value:  crypto.randomUUID()},
    ]

    return (
        <div className="App">
            <Rating value={ratingValue} setRating={changeRating}/>
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       setCollapsed={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>

            <SelectList  list={testState}/>
            <UncontroledAccordion titleValue={"Need to Learn"}/>
            <UncontroledRatings/>
            <UncontroledOnOff state={onOfValue} setOnOfValue={onChangeHandler}/>
            <OnOff state={onOfValue}/>
        </div>

    );
}

export default App;