import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AddNew from "./components/AddNew";
import List from "./components/List";
import Header from "./components/Header";

function App() {
  const [lessons, setLessons] = useState([]);
  const [drafts, setDrafts] = useState([]);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <List lessons={lessons} drafts={drafts} />
          </div>

          <div className="col-md-8">
            <AddNew
              setLessons={setLessons}
              lessons={lessons}
              drafts={drafts}
              setDrafts={setDrafts}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
