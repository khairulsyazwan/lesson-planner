import React, { useState } from "react";

function AddNew({ addLesson, lessons, drafts }) {
  const [change, setChange] = useState("");
  const [draftCheck, setDraftCheck] = useState(false);

  function changeHandler(e) {
    if (draftCheck) {
      setChange((change) => ({
        ...change,
        [e.target.name]: e.target.value,
        id: `d${drafts.length + 1}`,
        draft: draftCheck,
      }));
    } else {
      setChange((change) => ({
        ...change,
        [e.target.name]: e.target.value,
        id: lessons.length + 1,
        draft: draftCheck,
      }));
    }

    console.log(change);
  }

  function checkBox(e) {
    setDraftCheck(!draftCheck);
    console.log(draftCheck);
  }

  function submitBtn(e) {
    e.preventDefault();
    e.target.reset();
    addLesson(change);
    setChange("");
    setDraftCheck(false);
  }

  return (
    <form onSubmit={submitBtn}>
      <label for="subject" class="form-label">
        Subject Name
      </label>
      <input
        type="text"
        onChange={changeHandler}
        placeholder="Enter subject..."
        name="subject"
        id="subject"
        class="form-control"
      />

      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value={draftCheck}
          id="draft"
          name="draft"
          onClick={checkBox}
        />
        <label class="form-check-label" for="draft">
          Draft
        </label>
      </div>

      <label for="date" class="form-label">
        Date
      </label>
      <input
        type="date"
        onChange={changeHandler}
        placeholder="Enter task..."
        name="date"
        id="date"
        class="form-control"
      />
      <label for="comments" class="form-label">
        Lesson Content
      </label>
      <textarea
        name="comments"
        onChange={changeHandler}
        class="form-control"
        id="comments"
      />
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default AddNew;
