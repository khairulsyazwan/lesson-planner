import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddNew({ lessons, drafts, setLessons, setDrafts }) {
  const [change, setChange] = useState("");
  const [draftCheck, setDraftCheck] = useState(false);

  function changeHandler(e) {
    setChange((change) => ({
      ...change,
      [e.target.name]: e.target.value,
      id: uuidv4(),
    }));
  }

  function checkBox(e) {
    setDraftCheck(e.target.checked);
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
      cTemp = { ...change, draft: draftCheck };
      let temp = [...drafts];
      temp = [...temp, cTemp];
      setDrafts(temp);
      localStorage.setItem("drafts", JSON.stringify(temp));
    } else {
      let cTemp = { ...change };
      cTemp = { ...change, draft: draftCheck };
      let temp = [...lessons];
      temp = [...temp, cTemp];
      setLessons(temp);
      localStorage.setItem("lessons", JSON.stringify(temp));
    }
  }

  return (
    <div className="">
      <form onSubmit={submitBtn}>
        <div className="row">
          <div className="col-md-9 mt-2">
            <label
              for="subject"
              className="form-label d-flex justify-content-start"
            >
              Subject Name
            </label>
          </div>
        </div>

        <div className="row mt-1">
          <div className="col-md-10">
            <input
              type="text"
              onChange={changeHandler}
              placeholder="Enter subject..."
              name="subject"
              id="subject"
              className="form-control"
              required
            />
          </div>
          <div className="col-md-2 d-flex align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              id="draft"
              name="draft"
              checked={draftCheck}
              onChange={checkBox}
            />
            <label className="form-check-label" for="draft">
              Draft
            </label>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <label
              for="date"
              className="form-label d-flex justify-content-start"
            >
              Date
            </label>
            <input
              type="date"
              onChange={changeHandler}
              placeholder="Enter task..."
              name="date"
              id="date"
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12">
            <label
              for="comments"
              className="form-label d-flex justify-content-start"
            >
              Lesson Content
            </label>
            <textarea
              name="content"
              onChange={changeHandler}
              className="form-control"
              id="content"
              rows="10"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button
              type="submit"
              className="btn mt-3 btn-primary"
              style={{ width: "100px" }}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddNew;
