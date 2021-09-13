import React, { useState } from "react";
import League from "./League";
import Match from "./Match";
import Slide from "react-reveal/Slide";

export default function RenderData(props) {
  // toggling arrow icon so that is shows up or down
  const [toggle, setToggle] = useState(false);
  // toggling the league so that matches can be shown and hidden
  const [toggleLeague, setToggleLeague] = useState(false);

  return (
    <>
      <Slide left duration={1000}>
        <table className="table">
          <tbody 
            className="table"
            onClick={() => {
              setToggle(!toggle);
              setToggleLeague(!toggleLeague);
            }}
          >
            <tr className="table_row">
              <td className="td_table">
                <button
                  onClick={() => {
                    setToggle(!toggle);
                    setToggleLeague(!toggleLeague);
                  }}
                  className="toggle_button"
                >
                  {toggle ? (
                    <img className="arrow" alt="+" src="caret-down.png" />
                  ) : (
                    <img className="arrow" alt="-" src="caret-arrow-up.png" />
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
      </Slide>
    </>
  );
}
