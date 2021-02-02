import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import swal from "sweetalert";

function AddNew({
  lessons,
  drafts,
  setLessons,
  setDrafts,
  edit,
  setEdit,
  setSelected,
  setSingleDisplay,
  setFormDisplay,
}) {
  const [change, setChange] = useState("");
  const [draftCheck, setDraftCheck] = useState(false);
  let updatedId = null;
  let updatedLessons = lessons;
  let updatedDrafts = drafts;

  useEffect(() => {
    setChange(edit[0]);
  }, [edit]);

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
    addLesson();
    setChange("");
    setDraftCheck(false);
  }

  function editBtn(e) {
    e.preventDefault();
    addLesson();
    setChange("");
    setDraftCheck(false);
    setEdit("");
    e.target.reset();
    removeLesson();
    selectOne();
  }

  function selectOne() {
    let resDraft = updatedDrafts.filter(function (el) {
      return el.id === updatedId;
    });
    let resLes = updatedLessons.filter(function (el) {
      return el.id === updatedId;
    });
    if (resDraft.length === 0) {
      setSelected(resLes);
    } else {
      setSelected(resDraft);
    }
    setSingleDisplay(true);
    setFormDisplay(false);
  }

  function addLesson() {
    if (draftCheck) {
      let cTemp = { ...change };
      cTemp = { ...change, draft: draftCheck, id: uuidv4() };
      let temp = [...drafts];
      temp = [...temp, cTemp];
      setDrafts(temp);
      updatedId = cTemp.id;
      updatedDrafts = temp;
      localStorage.setItem("drafts", JSON.stringify(temp));
      swal("Success!", "Lesson saved as draft.", "success");
    } else {
      let cTemp = { ...change };
      cTemp = { ...change, draft: draftCheck, id: uuidv4() };
      let temp = [...lessons];
      temp = [...temp, cTemp];
      setLessons(temp);
      updatedId = cTemp.id;
      updatedLessons = temp;
      localStorage.setItem("lessons", JSON.stringify(temp));
      swal("Success!", "New lesson added!", "success");
    }
  }

  function removeLesson() {
    if (edit[0].draft) {
      let res = updatedDrafts.filter(function (el) {
        return el.id !== edit[0].id;
      });
      setDrafts(res);
      localStorage.setItem("drafts", JSON.stringify(res));
    } else {
      let res = updatedLessons.filter(function (el) {
        return el.id !== edit[0].id;
      });
      setLessons(res);
      localStorage.setItem("lessons", JSON.stringify(res));
    }
  }

  if (window.innerHeight < 700) {
    console.log("ok go");
  }
  return (
    <div className="">
      <form onSubmit={edit ? editBtn : submitBtn}>
        <div className="row">
          <div className="col-md-9 mt-2">
            <label className="form-label d-flex justify-content-start">
              Subject Name
            </label>
          </div>
        </div>

        <div className="row mt-1">
          <div className="d-flex align-items-center justify-content-between">
            <div className="col-9">
              <input
                type="text"
                onChange={changeHandler}
                placeholder="Enter subject..."
                name="subject"
                id="subject"
                className="form-control"
                defaultValue={edit ? edit[0].subject : null}
                required
              />
            </div>

            <div className="col-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="draft"
                name="draft"
                checked={draftCheck}
                onChange={checkBox}
              />
              <label className="form-check-label mx-2">Draft</label>
            </div>
          </div>
          {/* <div className="col-lg-2 d-flex align-items-center draft-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="draft"
              name="draft"
              checked={draftCheck}
              onChange={checkBox}
            />
            <label className="form-check-label">Draft</label>
          </div> */}
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <label className="form-label d-flex justify-content-start">
              Date
            </label>
            <input
              type="date"
              onChange={changeHandler}
              placeholder="Enter task..."
              name="date"
              id="date"
              className="form-control"
              defaultValue={edit ? edit[0].date : null}
              required
            />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12">
            <label className="form-label d-flex justify-content-start">
              Lesson Content
            </label>
            <textarea
              name="content"
              onChange={changeHandler}
              className="form-control"
              id="content"
              rows="20"
              defaultValue={edit ? edit[0].content : null}
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
              {edit ? "Edit" : "Save"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddNew;
