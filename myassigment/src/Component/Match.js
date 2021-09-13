import React from "react";
import { processDate } from "../utils";

function Match(props) {
  return (
    <>
      {props.toggleLeague ? (
        <table className="table_small">
          <tbody>
            <tr className="table_row">
              <th className="table_name">{processDate(props.match.startDate)}</th>
              <th className="table_name">{props.match.matchName}</th>
              <th className="table_data">
                <p>
                  {props.match.bet !== undefined ? (
                    props.match.bet
                  ) : (
                    <img alt="lock" src="padlock.png" />
                  )}
                </p>
                <p className="table_data_hidden_element">X</p>
                <p>
                  {props.match.odd !== undefined ? (
                    props.match.odd
                  ) : (
                    <img alt="lock" src="padlock.png" />
                  )}
                </p>
              </th>
            </tr>
          </tbody>
        </table>
      ) : (
        ""
      )}
    </>
  );
}

export default Match;
