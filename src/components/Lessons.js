import React from "react";
import swal from "sweetalert";

function Lessons({
  lesson,
  setLessons,
  lessons,
  toggleForm,
  drafts,
  setDrafts,
  setEdit,
}) {
  function removeLesson() {
    if (lesson[0].draft) {
      let mod = [...drafts];
      let index = mod.indexOf(lesson[0]);
      mod.splice(index, 1);
      setDrafts(mod);
      localStorage.setItem("drafts", JSON.stringify(mod));
      toggleForm();
      swal("Success!", "Lesson deleted!", "success");
    } else {
      let mod = [...lessons];
      let index = mod.indexOf(lesson[0]);
      mod.splice(index, 1);
      setLessons(mod);
      localStorage.setItem("lessons", JSON.stringify(mod));
      toggleForm();
      swal("Success!", "Lesson deleted!", "success");
    }
  }

  function editBtn() {
    setEdit(lesson);
    toggleForm();
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

            <div className="d-flex justify-content-start my-5">
              <button className="btn btn-primary mr-2" onClick={editBtn}>
                Edit
              </button>
              <button className="btn btn-danger mx-2" onClick={removeLesson}>
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
