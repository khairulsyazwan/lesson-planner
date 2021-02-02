import React from "react";

function Lessons({
  lesson,
  setLessons,
  lessons,
  toggleForm,
  drafts,
  setDrafts,
}) {
  function removeLesson(id) {
    if (lesson[0].draft) {
      let mod = [...drafts];
      let index = mod.indexOf(lesson[0]);
      mod.splice(index, 1);
      setDrafts(mod);
      localStorage.setItem("drafts", JSON.stringify(mod));
      toggleForm();
    } else {
      let mod = [...lessons];
      let index = mod.indexOf(lesson[0]);
      mod.splice(index, 1);
      setLessons(mod);
      localStorage.setItem("lessons", JSON.stringify(mod));
      toggleForm();
    }
  }

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
              <button className="btn btn-primary mr-2">Edit</button>
              <button
                className="btn btn-danger mx-2"
                onClick={() => removeLesson(lesson.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Lessons;
