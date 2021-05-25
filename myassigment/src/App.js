import "./App.css";
import { useState, useEffect } from "react";
import RenderDataSortedByDate from "./Component/RenderDataSortedByDate";
import RenderDataSortedByLeague from "./Component/RenderDataSortedByLeague";
import { getData } from "./utils";
import Loader from "react-loader-spinner";
import { dummyData } from "../src/dummyData";

function App() {
  const [data, setData] = useState([]);
  const [toggleBtn, setToggleBtn] = useState(true);
  const [spinner, setSpinner] = useState(true);
  console.log(dummyData);
  useEffect(() => {
    setTimeout(() => {
      setData(dummyData);
      setSpinner(!spinner);
      // const fetchedData = getData();
      // fetchedData.then(function (result) {
      //   setData(result);
      //   setSpinner(!spinner);
      // });
    }, 500);
    setSpinner(spinner);
  }, []);
  //creating new Array with chosen data for easier handling
  const newDataWithDates = [];
  // for (let i = 0; i < data.length; i++) {
  //   let gameName = data[i].$.Name.split(",")[0];
  //   let leagueName = data[i].$.Name.split(", ")[1];
  //   let matchesData = data[i].Match;

  //   for (let j = 0; j < matchesData.length; j++) {
  //     const match = {};
  //     match.gameName = gameName;
  //     match.leagueName = leagueName;
  //     match.matchID = matchesData[j].$.ID;
  //     match.matchName = matchesData[j].$.Name;
  //     match.startDate = matchesData[j].$.StartDate;
  //     match.bet =
  //       matchesData[j].Bet === undefined
  //         ? undefined
  //         : matchesData[j].Bet[0].Odd[0].$.Value;
  //     match.odd =
  //       matchesData[j].Bet === undefined
  //         ? undefined
  //         : matchesData[j].Bet[0].Odd[1] === undefined
  //         ? undefined
  //         : matchesData[j].Bet[0].Odd[1].$.Value;

  //     newDataWithDates.push(match);
  //   }
  // }
  //sorting data so that it is desplayed by date
  const sortedByMatchStartDate = newDataWithDates.sort(function (d1, d2) {
    return new Date(d1.startDate) - new Date(d2.startDate);
  });
  console.log(toggleBtn);

  return (
    <div className="App">
      <header className="header">
        <img className="joystick" alt="+" src="icons8-game-controller-64.png" />
        <h1>Esports</h1>
        <button
          onClick={() => {
            setToggleBtn(!toggleBtn);
          }}
          className="sorting_button"
        >
          {toggleBtn ? "Sort by League" : "Sort by Time"}
        </button>
      </header>

      {spinner ? (
        <div className="spinner">
          <div>
            <Loader type="TailSpin" color="#203850" height={200} width={200} />
          </div>
        </div>
      ) : null}

      <div>
        {toggleBtn === true
          ? dummyData.map((item, i) => (
              <RenderDataSortedByDate кеу={i} {...item} />
            ))
          : dummyData.map((item, i) => (
              <RenderDataSortedByLeague key={i} {...item} />
            ))}
      </div>
    </div>
  );
}

export default App;
