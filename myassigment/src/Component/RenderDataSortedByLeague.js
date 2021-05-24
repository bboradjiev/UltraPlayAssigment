import React, { useState } from "react";
import Game from "./Game";
import League from "./League";
import Match from "./Match";

function RenderDataSortedByLeague({
  gameName,
  leagueName,
  matchName,
  startDate,
  bet,
  odd,
}) {
  const [toggleName, setToggleName] = useState(false);
  const [toggleLeague, setToggleLeague] = useState(false);

  return (
    <>
      <div className="game_name">
        <h2>
          <Game game={gameName} />
        </h2>
        <button
          onClick={() => {
            setToggleName(!toggleName);
          }}
        >
          {toggleName ? (
            <img className="arrow" alt="+" src="icons8-sort-down-26.png" />
          ) : (
            <img className="arrow" alt="-" src="icons8-sort-up-26.png" />
          )}
        </button>
      </div>
      {toggleName ? (
        <div>
          <table className="table">
            <tbody className="table">
              <tr className="table_row">
                <td>
                  <button
                    onClick={() => {
                      setToggleLeague(!toggleLeague);
                    }}
                    className="toggle_button"
                  >
                    {toggleLeague ? (
                      <img className="arrow" alt="+" src="caret-down.png" />
                    ) : (
                      <img className="arrow" alt="-" src="caret-arrow-up.png" />
                    )}
                  </button>
                </td>
              </tr>

              <tr className="table_name">
                <League league={leagueName} />
              </tr>
              <tr className="table_data">
                <th>1</th>
                <th>X</th>
                <th>1</th>
              </tr>
            </tbody>
          </table>
          <Match
            toggleLeague={toggleLeague}
            startDate={startDate}
            matchName={matchName}
            bet={bet}
            odd={odd}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default RenderDataSortedByLeague;
