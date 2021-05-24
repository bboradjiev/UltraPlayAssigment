import React, { useState } from "react";
import League from "./League";
import { processDate } from "../utils";

export default function RenderData({
  gameName,
  leagueName,
  matchName,
  startDate,
  bet,
  odd,
}) {
  // state variable for toggling the up and down arrows
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <table className="table">
        <tbody className="table">
          <tr className="table_row">
            <td>
              <button
                onClick={() => {
                  setToggle(!toggle);
                }}
                className="toggle_button"
              >
                {toggle ? (
                  <img className="arrow" alt="+" src="caret-down.png" />
                ) : (
                  <img className="arrow" alt="-" src="caret-arrow-up.png" />
                )}
              </button>
            </td>
          </tr>
          <tr className="table_name">{leagueName}</tr>
          <tr className="table_data">
            <th>1</th>
            <th>X</th>
            <th>1</th>
          </tr>
        </tbody>
      </table>
      {toggle ? (
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
      ) : null}
    </>
  );
}
