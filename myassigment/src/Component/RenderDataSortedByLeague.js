import React, { useState } from "react";

function RenderDataSortedByLeague({
  gameName,
  leagueName,
  matchName,
  startDate,
  bet,
  odd,
}) {
  const [toggle, setToggle] = useState(false);

  function processDate(date) {
    const months = [
      "empty",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let splitDate = date.split("-");
    let month = splitDate[1];
    let newDate = splitDate[2].split("T")[0];
    let newMonth = months[+month];
    let newHour = splitDate[2].split("T")[1].slice(0, 5);

    return `${newDate} ${newMonth} ${newHour}`;
  }

  return (
    <>
      <div className="game_name">
        <h2>{gameName}</h2>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? (
            <img alt="+" src="down-arrow.png" />
          ) : (
            <img alt="-" src="up-arrow.png" />
          )}
        </button>
      </div>
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
                  <img alt="+" src="caret-down.png" />
                ) : (
                  <img alt="-" src="caret-arrow-up.png" />
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

export default RenderDataSortedByLeague;
