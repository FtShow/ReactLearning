import styled from "styled-components";
import React, {useState} from "react";

const MyButton = styled.div`
  width: 200px;
  heigth: 100px;
  display: flex;
  justify-content: space-around;
`
const EnablerDiv = styled.div`
  width: calc(50% - 20px);;
  border: 1px solid black;
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`

const EnablerState = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.color};
`
type OnOffType = {
    state: boolean;
    setOnOfValue: ()=>void
}

export const UncontroledOnOffComponent: React.FC<OnOffType> = (props) => {
    const {state, setOnOfValue} = props;


    return (
        <>
            <MyButton onClick={setOnOfValue}>
                <EnablerDiv color={state ? "green" : "none"}>On</EnablerDiv>
                <EnablerDiv color={state ? "none" : "red"}>Off</EnablerDiv>
                <EnablerState color={state ? "green" : "red"}></EnablerState>
            </MyButton>

        </>
    )
}
