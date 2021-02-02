import "./App.css";
import { useEffect, useState } from "react";
import AddNew from "./components/AddNew";
import List from "./components/List";
import Header from "./components/Header";
import Drafts from "./components/Drafts";
import Lessons from "./components/Lessons";

function App() {
  const [lessons, setLessons] = useState([
    {
      subject: "English",
      date: "2021-02-10",
      content: "Test 1",
      id: "37662e62-eafb-42ac-8c93-55416010dce0",
      draft: false,
    },
    {
      subject: "Math",
      date: "2021-02-14",
      content: "Test 2",
      id: "85cce76f-a15c-42c9-b62b-029f5a4c9ce4",
      draft: false,
    },
    {
      subject: "Music",
      date: "2021-02-25",
      content: "Test 3",
      id: "ad297239-20de-4fd4-8740-0c39145a1a1c",
      draft: false,
    },
  ]);
  const [drafts, setDrafts] = useState([]);
  const [formDisplay, setFormDisplay] = useState(true);
  const [draftDisplay, setDraftDisplay] = useState(false);
  const [singleDisplay, setSingleDisplay] = useState(false);
  const [selected, setSelected] = useState([]);
  const [edit, setEdit] = useState("");

  useEffect(() => {
    let a = localStorage.getItem("lessons");
    a && setLessons(JSON.parse(a));
    let b = localStorage.getItem("drafts");
    b && setDrafts(JSON.parse(b));
  }, []);

  function toggleDraftDisplay() {
    setDraftDisplay(!draftDisplay);
  }

  function toggleFormDisplay() {
    setFormDisplay(!formDisplay);
    setSingleDisplay(false);
  }

  function selectOne(e) {
    let select = e.target.classList.value;
    let resDraft = drafts.filter(function (el) {
      return el.id === select;
    });
    let resLes = lessons.filter(function (el) {
      return el.id === select;
    });
    if (resDraft.length === 0) {
      setSelected(resLes);
    } else {
      setSelected(resDraft);
    }
    setSingleDisplay(true);
    setFormDisplay(false);
  }

  function editClear() {
    setEdit("");
    toggleFormDisplay();
  }

  return (
    <div className="App">
      <Header />

      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-md-5">
            <div className="container py-3 border-dark rounded comp">
              {!draftDisplay && (
                <List
                  lessons={lessons}
                  drafts={drafts}
                  selectOne={selectOne}
                  setLessons={setLessons}
                />
              )}
              {draftDisplay && <Drafts drafts={drafts} selectOne={selectOne} />}

              <div className="row">
                <div className="container mt-2">
                  <div>
                    {!formDisplay && (
                      <button
                        className="btn btn-primary col-12"
                        onClick={editClear}
                      >
                        Add New
                      </button>
                    )}
                  </div>
                  <div className="mt-3">
                    {draftDisplay ? (
                      <button
                        className="btn btn-primary col-12"
                        onClick={toggleDraftDisplay}
                      >
                        View Lessons ({lessons.length})
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary col-12"
                        onClick={toggleDraftDisplay}
                      >
                        View Drafts ({drafts.length})
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-7 form-container">
            <div className="container py-3 border-dark rounded comp">
              {formDisplay && (
                <AddNew
                  setLessons={setLessons}
                  lessons={lessons}
                  drafts={drafts}
                  setDrafts={setDrafts}
                  edit={edit}
                  setEdit={setEdit}
                  setSelected={setSelected}
                  setSingleDisplay={setSingleDisplay}
                  setFormDisplay={setFormDisplay}
                />
              )}

              {singleDisplay && (
                <Lessons
                  lesson={selected}
                  setLessons={setLessons}
                  lessons={lessons}
                  toggleForm={toggleFormDisplay}
                  drafts={drafts}
                  setDrafts={setDrafts}
                  setEdit={setEdit}
                  edit={edit}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
