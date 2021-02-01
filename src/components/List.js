import moment from "moment";
import React from "react";

function List({ lessons, selectOne }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Subject</th>
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
