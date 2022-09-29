import React from 'react';

const Question = () => {
    return (
        <div>
            <div className=" container question mt-5">
                <h3 className='text-danger'> What is React and how its work?</h3>
                <h5>
                    React is a declarative, efficient, and flexible JavaScript library for building user interface. it works with JSX(JavaScript XMl) extension, also uses diff and virtual DOM. facbook is developed by the React. at this time React is a popular Javascript library for building User interface. easy and useful also highly recomended for job sector
                </h5>
                <h3 className='text-danger mt-3'>
                    What are the differences between props and state ?
                </h3>
                <h5>
                    Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.Props are read-only.	State is both read and write. states can update inside the component. but props can not change in the outside.
                </h5>
                <h3 className='text-danger mt-3'>
                    what is useeffect in react or what is work without load Data?
                </h3>
                <h5>
                    UseEffect is a hook uses for side effect in component.A lifecycle, there are three main works MOunt, Update and Unmount uses callback and dependency inside the functional component being props or state values.Pure functions have the great benefit of being predictable, reliable, and easy to test.
                </h5>
            </div>
        </div>
    );
};

export default Question;