import React, { useState } from "react";

function AddNew({ lessons, drafts, setLessons, setDrafts }) {
  const [change, setChange] = useState("");
  const [draftCheck, setDraftCheck] = useState(false);

  // console.log(draftCheck);
  function changeHandler(e) {
    // console.log(change);
    setChange((change) => ({
      ...change,
      [e.target.name]: e.target.value,
    }));
  }

  function checkBox(e) {
    setDraftCheck(e.target.checked);
    // console.log(draftCheck);
  }

  function submitBtn(e) {
    e.preventDefault();
    e.target.reset();
    addLesson(change);
    setChange("");
    setDraftCheck(false);
  }

  function addLesson(change) {
    if (draftCheck) {
      let cTemp = { ...change };
      cTemp = { ...change, draft: draftCheck, id: `d${drafts.length + 1}` };
      let temp = [...drafts];
      temp = [...temp, cTemp];
      console.log(temp);
      setDrafts(temp);
    } else {
      let cTemp = { ...change };
      cTemp = { ...change, draft: draftCheck, id: `l${lessons.length + 1}` };
      let temp = [...lessons];
      temp = [...temp, cTemp];
      console.log(temp);
      setLessons(temp);
    }
  }

  return (
    <div className="container text-left">
      <form onSubmit={submitBtn}>
        <div className="row">
          <div className="col-md-9">
            <label for="subject" class="form-label text-left">
              Subject Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="col-md-9">
            <input
              type="text"
              onChange={changeHandler}
              placeholder="Enter subject..."
              name="subject"
              id="subject"
              class="form-control"
            />
          </div>
          <div className="col-md-3 d-flex align-items-center">
            <input
              class="form-check-input"
              type="checkbox"
              id="draft"
              name="draft"
              checked={draftCheck}
              onChange={checkBox}
            />
            <label class="form-check-label" for="draft">
              Draft
            </label>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4"></div>
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
        <button type="submit" class="btn btn-primary mt-3">
          Save
        </button>
      </form>
    </div>
  );
}

export default AddNew;
