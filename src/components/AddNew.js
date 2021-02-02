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

  console.log(window.innerHeight);
  useEffect(() => {
    setChange(edit[0]);
  }, [edit]);

  function changeHandler(e) {
    setChange((change) => ({
      ...change,
      [e.target.name]: e.target.value,
    }));
  }

  function editChangeHandler(e) {
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

  return (
    <div className="">
      <form onSubmit={edit ? editBtn : submitBtn}>
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
              onChange={edit ? editChangeHandler : changeHandler}
              placeholder="Enter subject..."
              name="subject"
              id="subject"
              className="form-control"
              defaultValue={edit ? edit[0].subject : null}
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
              onChange={edit ? editChangeHandler : changeHandler}
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
            <label
              for="comments"
              className="form-label d-flex justify-content-start"
            >
              Lesson Content
            </label>
            <textarea
              name="content"
              onChange={edit ? editChangeHandler : changeHandler}
              className="form-control"
              id="content"
              rows={window.innerHeight < 900 ? 10 : 20}
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
