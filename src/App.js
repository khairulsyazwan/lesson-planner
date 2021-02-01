import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AddNew from "./components/AddNew";
import List from "./components/List";
import Header from "./components/Header";
import Drafts from "./components/Drafts";

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

  return (
    <div className="App">
      <Header />

      <div className="row mt-2">
        <div className="col-md-5">
          <List lessons={lessons} drafts={drafts} />
          <Drafts drafts={drafts} />
          <div className="row">
            <button className="btn btn-primary btn-block">Add New</button>
          </div>
          <div className="row mt-2">
            <button className="btn btn-info btn-block">View Drafts</button>
          </div>
        </div>

        <div className="col-md-7">
          <AddNew
            setLessons={setLessons}
            lessons={lessons}
            drafts={drafts}
            setDrafts={setDrafts}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
