import React from "react";

export type ratingValueType = 0 | 1 | 2 | 3 | 4 | 5;

export type RatingPropsType = {
    value: ratingValueType
    setRating: (value: ratingValueType) => void
}

export function RatingComponent(props: RatingPropsType) {

    return (
        <div>
            <Star setRating={props.setRating} value={1} selected={props.value > 0}/>
            <Star setRating={props.setRating} value={2} selected={props.value > 1}/>
            <Star setRating={props.setRating} value={3} selected={props.value > 2}/>
            <Star setRating={props.setRating} value={4} selected={props.value > 3}/>
            <Star setRating={props.setRating} value={5} selected={props.value > 4}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean;
    setRating: (value: ratingValueType) => void
    value: ratingValueType

}

function Star(props: StarPropsType) {
    return <span onClick={() => props.setRating(props.value)}>{props.selected ? <b> Star </b> : " Star "}</span>
}
