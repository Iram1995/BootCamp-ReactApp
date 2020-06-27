import React from 'react';

function Student(props) {
  return (
    <div>
      <h1>Student Name: {props.Name}</h1>
      <h1>Course Name: {props.Course}</h1>
    </div>
  );
}

export default Student;