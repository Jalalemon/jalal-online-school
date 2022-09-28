import React from 'react';
import './StudentList.css'
const StudentList = (props) => {
    const {id, name, picture, time } = props.student
    return (
        <div className='all-student'>
         
            <img src={picture} alt="" />
            <h4>Name: {name} </h4>
            <h5>Time required: {time} </h5>
                <button className="btn btn-primary w-100">Add to List</button>
          
        </div>
    );
};

export default StudentList;