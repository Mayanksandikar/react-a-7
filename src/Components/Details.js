

import { createContext, useState } from "react"
import React  from 'react'


export const store = createContext()

const Details = (props) => {
    const [details ,setDetails] = useState([{

     "Name":"Pavan",
     "Age":"23",
     "Course":"mrean",
     "Batch":"oct",
     "id":"1"

    }
,
{

    "Name":"Shushil",
    "Age":"23",
    "Course":"mrean",
    "Batch":"march",
    "id":"2"

   },
   {

    "Name":"rushi",
    "Age":"23",
    "Course":"mrean",
    "Batch":"oct",
    "id":"3"

   },
   {

    "Name":"dinesh",
    "Age":"23",
    "Course":"mrean",
    "Batch":"oct",
    "id":"4"

   }])
    return (
        <div>
           <store.Provider value ={[details,setDetails]}> 
          {props.children}
           </ store.Provider >
        </div>
    )
}

export default Details
