import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { store } from './Details'

const Student = () => {
  const [student] =useContext(store)
    return (
        <div>
              <h1>student </h1>
              <div ><Link to="/add-student" className="but-c"> ADD BUTTON </Link> </div>
                <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Course</th>
      <th scope="col">Batch</th>
      <th scope="col">Change</th>
    </tr>
  </thead>
  <tbody>

    {student.map((student)=> (
        <tr key={student.id}>
        <th scope="row">{student.Name}</th>
        <td>{student.Age}</td>
        <td>{student.Course}</td>
        <td>{student.Batch}</td>
        <td>{student.Change}</td>
        <td><Link to="/edit"> Edit </Link></td>
        
       

      </tr>

    ))}
  
   
  </tbody>
</table>
        </div>
    )
}

export default Student
