import React, { useEffect, useState } from 'react';
import StudentList from '../students/StudentList';
import './ListContainer.css'

const ListContainer = () => {
    const [students, setStudent] = useState([])
    useEffect (() => {
      fetch('data.json')
      .then(res => res.json())
      .then(data => setStudent(data))
    }, [])
    return (
        <div className='list container mt-5'>
           <div className=' container student-list'>
                <h3>Select Today's Reading {students.length}</h3>
                <div className="single-cart mt-5">

                    {
                        students.map(student => <StudentList
                            key={student.id}
                            student={student}
                        ></StudentList>)
                    }
                </div>
           </div>

           <div className="container cart">
               <div className="author-info">
               <h4 className='mt-5 font-bold'>Jalal Uddin Emon </h4>
               <p className='w-17 f-bold'>Chattogram, Bangladesh</p>
               <div className="others-info">
                <h5>wieght : 55 </h5>
                <h5>age : 22 </h5>
                <h5>hieght : 5.5 </h5>

               </div>
               <div className=" font-weight-bold mt-5 add-break">
                <h4>Add a Break</h4>
                <button className='btn btn-info'>10s</button>
                <button className='btn btn-info'>20s</button>
                <button className='btn btn-info'>30s</button>
                <button className='btn btn-info'>40s</button>
               </div>

               </div>


           </div>
        </div>
    );
};

export default ListContainer;