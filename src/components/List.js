import moment from "moment";
import React, { useState } from "react";

function List({ lessons, drafts }) {
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
                  <tr key={lesson.id} id={lesson.id}>
                    <td>{lesson.subject}</td>
                    <td>{moment(lesson.date).format("DD MMM YYYY")}</td>
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
