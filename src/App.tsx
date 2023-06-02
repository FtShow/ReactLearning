import React, {useCallback, useMemo, useState} from "react";
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
import {Clock} from "./Clock/Clock";


const Rating = React.memo(RatingComponent)
const Accordion = React.memo(AccordionComponent)
const SelectList = React.memo(SelectListComponent)
const UncontrolledAccordion = React.memo(UncontroledAccordionComponents)
const UncontrolledRatings = React.memo(UncontroledRatingsComponent)
const UncontrolledOnOff = React.memo(UncontroledOnOffComponent)
const OnOff = React.memo(OnOffComponent)
const BookSecret2 = React.memo(BookSecret)

//const books = ["book1", "book2", "book3", "book4"]

let a = [1,2,3,4,5]
function App() {

    const [ratingValue, setRatingValue] = useState<any>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [onOfValue, setOnOfValue] = useState(true);

    const onChangeHandler = () => {
        setOnOfValue(!onOfValue)
    }
    const changeRating = useCallback(
        (v: ratingValueType) => {
        setRatingValue(v)
    }, [ratingValue])

    let as = useMemo(()=>a, [ratingValue])

    const testState = [
        {title: "Misha", value: crypto.randomUUID()},
        {title: "Dima", value: crypto.randomUUID()},
        {title: "Nasty", value: crypto.randomUUID()},
        {title: "Lol", value: crypto.randomUUID()},
        {title: "KEK", value: crypto.randomUUID()},
    ]
    const [books, setBooks] = useState(["book1", "book2", "book3", "book4"])
    const items = [
        {value: "1", title: "Minsk"},
        {value: "2", title: "Moscow"},
        {value: "3", title: "Lissabon"}
    ]
    const [value, setValue] = useState("1")
    console.log("REnder APP")

    return (
        <div className="App">
            <Clock/>
            <BookSecret2 books={books}/>
            <LearnUsememo/>
            <hr/>
            <CustomSelect items={items} value={value} onChange={setValue}/>

            <Rating value={a} setRating={changeRating}/>
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