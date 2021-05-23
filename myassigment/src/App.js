import "./App.css";
import { useState, useEffect } from "react";
import RenderDataSortedByDate from "./Component/RenderDataSortedByDate";
import RenderDataSortedByLeague from "./Component/RenderDataSortedByLeague";

function App() {
  const [data, setData] = useState([]);
  const [dataSortedByTime, setdataSortedByTime] = useState([]);
  const [dataSortedByLeague, setdataSortedByLeague] = useState([]);
  const [toggleBtn, setToggleBtn] = useState(true);

  useEffect(() => {
    getData();
    setdataSortedByTime(groupedDatabyLeague);
    setdataSortedByLeague(groupedDatabyLeague);
  }, []);

  const newData = [];
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
      match.bet = !matchesData[j].Bet
        ? undefined
        : matchesData[j].Bet[0].Odd[0].$.Value;
      match.odd = !matchesData[j].Bet
        ? undefined
        : matchesData[j].Bet[0].Odd[1].$.Value;

      newData.push(match);
    }
  }

  const sortedByMatchStartDate = newData.sort(function (d1, d2) {
    return new Date(d1.startDate) - new Date(d2.startDate);
  });

  const groupedDatabyGame = sortedByMatchStartDate.reduce((acc, obj) => {
    const property = obj.gameName;
    acc[property] = acc[property] || [];
    acc[property].push(obj);
    return acc;
  }, []);

  const groupedDatabyLeague = sortedByMatchStartDate.reduce((acc, obj) => {
    const property = obj.leagueName;
    acc[property] = acc[property] || [];
    acc[property].push(obj);
    return acc;
  }, []);

  // console.log(groupedDatabyGame);
  // console.log(groupedDatabyLeague);

  //move to separate file
  const getData = async () => {
    let responce = await fetch("http://localhost:8081/matches").then((res) =>
      res.json()
    );

    setData(responce.XmlSports.Sport[0].Event);
  };

  return (
    <div className="App">
      <header className="header">
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
      <div>
        {toggleBtn === true
          ? sortedByMatchStartDate.map((item) => (
              <RenderDataSortedByDate кеу={item.ID} {...item} />
            ))
          : sortedByMatchStartDate.map((item, i) => (
              <RenderDataSortedByLeague key={item.ID} {...item} />
            ))}
      </div>
    </div>
  );
}

export default App;
