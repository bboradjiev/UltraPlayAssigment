import React from "react";
import { processDate } from "../utils";

function Match({ toggleLeague, startDate, matchName, bet, odd }) {
  return (
    <>
      {toggleLeague ? (
        <table className="table_small">
          <tbody>
            <tr className="table_row">
              <th className="table_name">{processDate(startDate)}</th>
              <th className="table_name">{matchName}</th>
              <th className="table_data">
                <p>
                  {bet !== undefined ? (
                    bet
                  ) : (
                    <img alt="lock" src="padlock.png" />
                  )}
                </p>
                <p>
                  {odd !== undefined ? (
                    odd
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
