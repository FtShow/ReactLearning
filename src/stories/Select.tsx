import React from 'react';

import { Header } from './Header';
import './page.css';
import {SelectList, SelectListPropsType} from "../Components/SelectList/SelectList";
import {Meta} from "@storybook/react";
import {Button} from "./Button";
//
//
// const meta: Meta<typeof SelectListPropsType> = {
//   title: 'select',
//   component: SelectList,
//   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
//  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//
// };
const testState = [
  {title: "Misha", value: crypto.randomUUID()},
  {title: "Dima", value:  crypto.randomUUID()},
  {title: "Nasty", value:  crypto.randomUUID()},
  {title: "Lol", value:  crypto.randomUUID()},
  {title: "KEK", value:  crypto.randomUUID()},
]
type User = {
  name: string;
};


const test1 = () => {
  return (
   <SelectList list={testState}/>
  )
}
