import React, { useState } from "react";

function AddNew({ lessons, drafts, setLessons, setDrafts }) {
  const [change, setChange] = useState("");
  const [draftCheck, setDraftCheck] = useState(false);

  function changeHandler(e) {
    setChange((change) => ({
      ...change,
      [e.target.name]: e.target.value,
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
      cTemp = { ...change, draft: draftCheck, id: `d${drafts.length + 1}` };
      let temp = [...drafts];
      temp = [...temp, cTemp];
      // console.log(temp);
      setDrafts(temp);
      localStorage.setItem("drafts", JSON.stringify(temp));
    } else {
      let cTemp = { ...change };
      cTemp = { ...change, draft: draftCheck, id: `l${lessons.length + 1}` };
      let temp = [...lessons];
      temp = [...temp, cTemp];
      // console.log(temp);
      setLessons(temp);
      localStorage.setItem("lessons", JSON.stringify(temp));
    }
  }

  return (
    <div className="container text-left">
      <form onSubmit={submitBtn}>
        <div className="row">
          <div className="col-md-9">
            <label
              for="subject"
              className="form-label d-flex justify-content-start"
            >
              Subject Name
            </label>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-md-10">
            <input
              type="text"
              onChange={changeHandler}
              placeholder="Enter subject..."
              name="subject"
              id="subject"
              className="form-control"
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
            <label class="form-check-label" for="draft">
              Draft
            </label>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-md-4 ">
            <label for="date" class="form-label d-flex justify-content-start">
              Date
            </label>
            <input
              type="date"
              onChange={changeHandler}
              placeholder="Enter task..."
              name="date"
              id="date"
              className="form-control"
            />
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-md-12">
            <label
              for="comments"
              class="form-label d-flex justify-content-start"
            >
              Lesson Content
            </label>
            <textarea
              name="content"
              onChange={changeHandler}
              class="form-control"
              id="content"
              rows="10"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button type="submit" class="btn mt-3 btn-primary btn-block ">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddNew;
