import moment from "moment";
import React from "react";

function Drafts({ drafts, selectOne }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Drafts</h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Subject</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {drafts.map((draft) => {
                return (
                  <tr
                    key={draft.id}
                    id={draft.id}
                    className="table"
                    onClick={selectOne}
                  >
                    <td className={draft.id}>{draft.subject}</td>
                    <td className={draft.id}>
                      {moment(draft.date).format("DD MMM YYYY")}
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

export default Drafts;
