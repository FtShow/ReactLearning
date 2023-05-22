import React, {useState} from "react";
import "./App.css";
import {AccordionComponent} from "./Components/Accordion/Accordion";
import {UncontroledOnOffComponent} from "./Components/uncontroledOnOff/UncontroledOnOff";
import {OnOffComponent} from "./Components/OnOff/OnOff";
import {RatingComponent, ratingValueType} from "./Components/Ratings/Rating";
import {UncontroledAccordionComponents} from "./Components/UncontroledAccordion/UncontroledAccordion";
import {UncontroledRatingsComponent} from "./Components/UncontroledRatings/UncontroledRatings";
import {SelectListComponent} from "./Components/SelectList/SelectList";


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
        {title: "Dima", value: crypto.randomUUID()},
        {title: "Nasty", value: crypto.randomUUID()},
        {title: "Lol", value: crypto.randomUUID()},
        {title: "KEK", value: crypto.randomUUID()},
    ]

    const Rating = React.memo(RatingComponent)
    const Accordion = React.memo(AccordionComponent)
    const SelectList = React.memo(SelectListComponent)
    const UncontrolledAccordion = React.memo(UncontroledAccordionComponents)
    const UncontrolledRatings = React.memo(UncontroledRatingsComponent)
    const UncontrolledOnOff = React.memo(UncontroledOnOffComponent)
    const OnOff = React.memo(OnOffComponent)

    return (
        <div className="App">
            <Rating value={ratingValue} setRating={changeRating}/>
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       setCollapsed={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>

            <SelectList list={testState}/>
            <UncontrolledAccordion titleValue={"Need to Learn"}/>
            <UncontrolledRatings/>
            <UncontrolledOnOff state={onOfValue} setOnOfValue={onChangeHandler}/>
            <OnOff state={onOfValue}/>
        </div>

    );
}

export default App;