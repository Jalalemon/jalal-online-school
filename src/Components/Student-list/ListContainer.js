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
           <div className='student-list'>
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

           <div className="cart">
                <h3>cart sexton</h3>
           </div>
        </div>
    );
};

export default ListContainer;