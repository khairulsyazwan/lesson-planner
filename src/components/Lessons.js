import React from "react";

function Lessons({ lesson }) {
  return (
    <div className="mt-2">
      {lesson.map((lesson) => {
        return (
          <div key={lesson.id}>
            {lesson.draft && <h4>Draft</h4>}
            <h5>Subject Name</h5>
            <h6>{lesson.subject}</h6>
            <h5>Date</h5>
            <h6>{lesson.date}</h6>
            <h5>Lesson Content</h5>
            <h6>{lesson.content}</h6>

            <div className="d-flex justify-content-start my-3">
              <button className="btn btn-info mr-2">Edit</button>
              <button className="btn btn-danger mx-2">Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Lessons;
