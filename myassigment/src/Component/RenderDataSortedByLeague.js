import React, { useState } from "react";
import Game from "./Game";
import League from "./League";
import Match from "./Match";
import Slide from "react-reveal/Slide";

function RenderDataSortedByLeague(props) {
  // toggling arrow icon so that is shows up or down
  const [toggleArrow, setToggleArrow] = useState(false);
  // toggling the league so that matches can be shown and hidden
  const [toggleLeague, setToggleLeague] = useState(!false);
  return (
    <>
      <Slide right duration={1000}>
        <div
          className="game_name"
          onClick={() => {
            setToggleArrow(!toggleArrow);
          }}
        >
          <h2>
            <Game game={props[0]} />
          </h2>
          <button
            onClick={() => {
              setToggleArrow(!toggleArrow);
            }}
          >
            {toggleArrow ? (
              <img className="arrow" alt="+" src="icons8-sort-down-26.png" />
            ) : (
              <img className="arrow" alt="-" src="icons8-sort-up-26.png" />
            )}
          </button>
        </div>
        {toggleArrow ? (
          <div>
            <table className="table">
              <tbody className="table" onClick={() => {
                        setToggleLeague(!toggleLeague);
                      }}>
                <tr className="table_row" >
                  <td className="td_table" >
                    <button
                      onClick={() => {
                        setToggleLeague(!toggleLeague);
                      }}
                      className="toggle_button"
                    >
                      {toggleLeague ? (
                        <img className="arrow" alt="+" src="caret-down.png" />
                      ) : (
                        <img
                          className="arrow"
                          alt="-"
                          src="caret-arrow-up.png"
                        />
                      )}
                    </button>
                    <tr className="table_name">
                      <League league={props[0]} />
                    </tr>
                  </td>
                </tr>

                <tr className="table_data">
                  <th>1</th>
                  <th>X</th>
                  <th>1</th>
                </tr>
              </tbody>
            </table>
            {props[1].map((match, i) => (
              <Match key={i} match={match} toggleLeague={toggleLeague} />
            ))}
          </div>
        ) : (
          ""
        )}
      </Slide>
    </>
  );
}

export default RenderDataSortedByLeague;
