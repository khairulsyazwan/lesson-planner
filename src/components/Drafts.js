import moment from "moment";
import React from "react";

function Drafts({ drafts, selectOne }) {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h2 className="drafts">Drafts</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="col-md-8">
                  Subject
                </th>
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
