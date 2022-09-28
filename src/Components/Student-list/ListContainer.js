import React, { useEffect, useState } from 'react';
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
           </div>

           <div className="cart">
                <h3>cart sexton</h3>
           </div>
        </div>
    );
};

export default ListContainer;