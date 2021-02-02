import moment from "moment";
import React, { useState } from "react";

function List({ lessons, selectOne, setLessons }) {
  const [aplhAscToggle, setAplhAscToggle] = useState(false);
  const [aplhDesToggle, setAplhDesToggle] = useState(false);
  const [dateAscToggle, setDateAscToggle] = useState(false);
  const [dateDesToggle, setDateDesToggle] = useState(false);

  function toggleSort(sortType) {
    let sortedLessons = [...lessons];
    if (sortType === "aDes") {
      // descending subject
      let c = sortedLessons.sort(function (a, b) {
        let aSub = a.subject.toLowerCase();
        let bSub = b.subject.toLowerCase();
        if (aSub < bSub) {
          return -1;
        }
        if (aSub > bSub) {
          return 1;
        }
        return 0;
      });
      setLessons(c);
      setAplhDesToggle(true);
      setAplhAscToggle(false);
      setDateAscToggle(false);
      setDateDesToggle(false);
    }
    if (sortType === "aAsc") {
      // ascending subject
      let d = sortedLessons.sort(function (a, b) {
        let aSub = a.subject.toLowerCase();
        let bSub = b.subject.toLowerCase();
        if (aSub < bSub) {
          return 1;
        }
        if (aSub > bSub) {
          return -1;
        }
        return 0;
      });
      setLessons(d);
      setAplhDesToggle(false);
      setAplhAscToggle(true);
      setDateAscToggle(false);
      setDateDesToggle(false);
    }
    if (sortType === "dAsc") {
      // ascending date
      let b = sortedLessons.sort(function (a, b) {
        let aDate = new Date(a.date);
        let bDate = new Date(b.date);
        return bDate - aDate;
      });
      setLessons(b);
      setAplhDesToggle(false);
      setAplhAscToggle(false);
      setDateAscToggle(true);
      setDateDesToggle(false);
    }
    if (sortType === "dDes") {
      // // decending date
      let a = sortedLessons.sort(function (a, b) {
        let aDate = new Date(a.date);
        let bDate = new Date(b.date);
        return aDate - bDate;
      });
      setLessons(a);
      setAplhDesToggle(false);
      setAplhAscToggle(false);
      setDateAscToggle(false);
      setDateDesToggle(true);
    }
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex justify-content-end mb-2">
            <div>Sort By:</div>
            <div className="mx-2">
              <i
                className="fas fa-sort-alpha-down"
                onClick={() => toggleSort("aDes")}
                style={{ color: aplhDesToggle && "rgba(68, 108, 179, 1)" }}
              ></i>
            </div>
            <div className="mx-2">
              <i
                className="fas fa-sort-alpha-up"
                onClick={() => toggleSort("aAsc")}
                style={{ color: aplhAscToggle && "rgba(68, 108, 179, 1)" }}
              ></i>
            </div>
            <div className="mx-2">
              <i
                className="fas fa-sort-numeric-down"
                onClick={() => toggleSort("dDes")}
                style={{ color: dateDesToggle && "rgba(68, 108, 179, 1)" }}
              ></i>
            </div>
            <div className="mx-2">
              <i
                className="fas fa-sort-numeric-up-alt"
                onClick={() => toggleSort("dAsc")}
                style={{ color: dateAscToggle && "rgba(68, 108, 179, 1)" }}
              ></i>
            </div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="col-md-7">
                  Subject
                </th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {lessons.map((lesson) => {
                return (
                  <tr
                    key={lesson.id}
                    id={lesson.id}
                    className="table"
                    onClick={selectOne}
                  >
                    <td className={lesson.id}>{lesson.subject}</td>
                    <td className={lesson.id}>
                      {moment(lesson.date).format("DD MMM YYYY")}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default List;
