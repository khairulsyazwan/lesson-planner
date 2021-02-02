import moment from "moment";
import React from "react";

function List({ lessons, selectOne, setLessons }) {
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
    }
    if (sortType === "dAsc") {
      // ascending date
      let b = sortedLessons.sort(function (a, b) {
        let aDate = new Date(a.date);
        let bDate = new Date(b.date);
        return bDate - aDate;
      });
      setLessons(b);
    }
    if (sortType === "dDes") {
      // // decending date
      let a = sortedLessons.sort(function (a, b) {
        let aDate = new Date(a.date);
        let bDate = new Date(b.date);
        return aDate - bDate;
      });
      setLessons(a);
    }
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex justify-content-end">
            <div>Sort By:</div>
            <div className="mx-2">
              <i
                className="fas fa-sort-alpha-down"
                onClick={() => toggleSort("aDes")}
              ></i>
            </div>
            <div className="mx-2">
              <i
                className="fas fa-sort-alpha-up"
                onClick={() => toggleSort("aAsc")}
              ></i>
            </div>
            <div className="mx-2">
              <i
                className="fas fa-sort-numeric-down"
                onClick={() => toggleSort("dDes")}
              ></i>
            </div>
            <div className="mx-2">
              <i
                className="fas fa-sort-numeric-up-alt"
                onClick={() => toggleSort("dAsc")}
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
