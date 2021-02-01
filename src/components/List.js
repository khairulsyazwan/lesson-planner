import React from "react";

function List({ lessons, drafts }) {
  return (
    <div>
      <h1>Lessons</h1>
      {lessons.map((lesson) => {
        return (
          <li key={lesson.id}>
            {lesson.subject} {lesson.date} {lesson.comments}
          </li>
        );
      })}

      <h1>Drafts</h1>
      {drafts.map((draft) => {
        return (
          <li key={draft.id}>
            {draft.subject} {draft.date} {draft.comments}
          </li>
        );
      })}
    </div>
  );
}

export default List;
