import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AddNew from "./components/AddNew";
import List from "./components/List";
import Header from "./components/Header";

function App() {
  const [lessons, setLessons] = useState([]);
  const [drafts, setDrafts] = useState([]);

  function addLesson(change) {
    if (change.draft) {
      let temp = [...drafts];
      temp = [...temp, change];
      setDrafts(temp);
    } else {
      let temp = [...lessons];
      temp = [...temp, change];
      setLessons(temp);
    }
  }
  return (
    <div className="App">
      <Header />
      <AddNew
        setLessons={setLessons}
        lessons={lessons}
        addLesson={addLesson}
        drafts={drafts}
      />
      <List lessons={lessons} drafts={drafts} />
    </div>
  );
}

export default App;
