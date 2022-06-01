

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useState} from 'react'
import { useContext} from 'react'
import { store } from './Details'
// import Student from './Student'

const AddStudent = () => {

    const [Name,setName]= useState("")
    const [Age,setAge]= useState("")
    const [Course,setCourse]= useState("")
    const [Batch,setBatch]= useState("")

    const [student,setStudent] =useContext(store)


    const ChangeHandler = (e) =>{
        setName(e.target.value)
    }   
    const ChangeHandler1 = (e) =>{
       setAge(e.target.value)
    }
    const ChangeHandler2 = (e) =>{
       setCourse(e.target.value)
    }
    const ChangeHandler3 = (e) =>{
       setBatch(e.target.value)
    }

    const submitHandler = () =>{
       setStudent([...student,{ Name:Name,Age:Age,Course:Course,Batch:Batch,id: new Date().getTime().toString()}])
    }
    return (
        <div>
            <div className="div">
            <label className="p">Name</label>
            <input className="div1" type="text" id="name" name="name" value={Name}  onChange={ChangeHandler}/>

            <label className="p">Age</label>
            <input className="div1" type="text" id="age" name="age" value={Age}  onChange={ChangeHandler1}/>

            <label className="p">Course</label>
            <input className="div1" type="text" id="course" name="course" value={Course}  onChange={ChangeHandler2}/>
            
            <label className="p">Batch</label>
            <input className="div1" type="text" id="batch" name="batch" value={Batch}  onChange={ChangeHandler3}/>
            </div>

            <div>
                <Link to="/student" className="but-c" onClick={submitHandler}>ADD DATA </Link><br/><br/><br/>
                <Link to="/student" className="but-c"> Cancel </Link>
               
            </div>
      
        </div>
    )
}

export default AddStudent
