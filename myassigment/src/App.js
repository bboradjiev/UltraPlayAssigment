import "./App.css";
import { useState, useEffect } from "react";
import RenderDataSortedByDate from "./Component/RenderDataSortedByDate";
import RenderDataSortedByLeague from "./Component/RenderDataSortedByLeague";
import { getData } from "./utils";
import Loader from "react-loader-spinner";
import dummydata from "./dummydata.json";

function App() {
  const [data, setData] = useState([]);
  const [toggleBtn, setToggleBtn] = useState(true);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      // const fetchedData = getData();
      // fetchedData.then(function (result) {
      //   setData(result);
      //   setSpinner(!spinner);
      // });
      setSpinner(!spinner);
    }, 500);
    setSpinner(spinner);
  }, []);
  //creating new Array with chosen data for easier handling
  const newDataWithDates = [];
  for (let i = 0; i < data.length; i++) {
    let gameName = data[i].$.Name.split(",")[0];
    let leagueName = data[i].$.Name.split(", ")[1];
    let matchesData = data[i].Match;

    for (let j = 0; j < matchesData.length; j++) {
      const match = {};
      match.gameName = gameName;
      match.leagueName = leagueName;
      match.matchID = matchesData[j].$.ID;
      match.matchName = matchesData[j].$.Name;
      match.startDate = matchesData[j].$.StartDate;
      match.bet =
        matchesData[j].Bet === undefined
          ? undefined
          : matchesData[j].Bet[0].Odd[0].$.Value;
      match.odd =
        matchesData[j].Bet === undefined
          ? undefined
          : matchesData[j].Bet[0].Odd[1] === undefined
          ? undefined
          : matchesData[j].Bet[0].Odd[1].$.Value;

      newDataWithDates.push(match);
    }
  }
  //sorting data so that it is desplayed by date
  const sortedByMatchStartDate = newDataWithDates.sort(function (d1, d2) {
    return new Date(d1.startDate) - new Date(d2.startDate);
  });

  function groupBy(key) {
    return function group(arr) {
      return arr.reduce((acc, obj) => {
        const property = obj[key];
        acc[property] = acc[property] || [];
        acc[property].push(obj);
        return acc;
      }, []);
    };
  }
  const groupByName = groupBy("gameName")(dummydata);
  const groupByLeague = groupBy("leagueName")(dummydata);

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
          ? Object.entries(groupByName).map((key, i) => (
              <RenderDataSortedByDate key={i} {...key} />
            ))
          : Object.entries(groupByLeague).map((key, i) => (
              <RenderDataSortedByLeague key={i} {...key} />
            ))}
      </div>
    </div>
  );
}

export default App;
