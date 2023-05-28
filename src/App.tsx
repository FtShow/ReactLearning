import React, {useState} from "react";
import "./App.css";
import {AccordionComponent} from "./Components/Accordion/Accordion";
import {UncontroledOnOffComponent} from "./Components/uncontroledOnOff/UncontroledOnOff";
import {OnOffComponent} from "./Components/OnOff/OnOff";
import {RatingComponent, ratingValueType} from "./Components/Ratings/Rating";
import {UncontroledAccordionComponents} from "./Components/UncontroledAccordion/UncontroledAccordion";
import {UncontroledRatingsComponent} from "./Components/UncontroledRatings/UncontroledRatings";
import {SelectListComponent} from "./Components/SelectList/SelectList";
import {CustomSelect} from "./Components/CustomSelect/CustomSelect";
import {LearnUsememo} from "./Components/LearUsememo/LearnUsememo";
import {BookSecret} from "./Components/BookSecretusecallback/BookSecret";


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

    const items = [
        {value: "1", title: "Minsk"},
        {value: "2", title: "Moscow"},
        {value: "3", title: "Lissabon"}
    ]
    const [value, setValue] = useState('1')

    return (
        <div className="App">
            <BookSecret/>
            <LearnUsememo/>
            <hr/>
            <CustomSelect items={items} value={value} onChange={setValue}/>

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
            <OnOff state={true}/>
        </div>

    );
}

export default App;