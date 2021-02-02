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
      id: "l1",
      draft: false,
    },
    {
      subject: "Math",
      date: "2021-02-14",
      content: "Test 2",
      id: "l2",
      draft: false,
    },
    {
      subject: "Music",
      date: "2021-02-25",
      content: "Test 3",
      id: "l3",
      draft: false,
    },
  ]);
  const [drafts, setDrafts] = useState([]);
  const [formDisplay, setFormDisplay] = useState(true);
  const [draftDisplay, setDraftDisplay] = useState(false);
  const [singleDisplay, setSingleDisplay] = useState(false);
  const [selected, setSelected] = useState([]);

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
    if (select.includes("l")) {
      let res = lessons.filter(function (el) {
        return el.id === select;
      });
      setSelected(res);
      setSingleDisplay(true);
      setFormDisplay(false);
    } else {
      let res = drafts.filter(function (el) {
        return el.id === select;
      });
      setSelected(res);
      setSingleDisplay(true);
      setFormDisplay(false);
    }
  }

  return (
    <div className="App">
      <Header />

      <div className="row mt-2">
        <div className="col-md-5">
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
            <div className="container">
              <div>
                {!formDisplay && (
                  <button
                    className="btn btn-primary btn-block"
                    onClick={toggleFormDisplay}
                  >
                    Add New
                  </button>
                )}
              </div>
              <div className="mt-2">
                {draftDisplay ? (
                  <button
                    className="btn btn-info btn-block"
                    onClick={toggleDraftDisplay}
                  >
                    View Lessons ({lessons.length})
                  </button>
                ) : (
                  <button
                    className="btn btn-primary btn-block"
                    onClick={toggleDraftDisplay}
                  >
                    View Drafts ({drafts.length})
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-7">
          {formDisplay && (
            <AddNew
              setLessons={setLessons}
              lessons={lessons}
              drafts={drafts}
              setDrafts={setDrafts}
            />
          )}

          {singleDisplay && (
            <Lessons lesson={selected} setLessons={setLessons} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
