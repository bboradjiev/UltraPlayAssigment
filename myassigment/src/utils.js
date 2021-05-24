//Fetching Data from Server
export const getData = async function () {
  let responce = await fetch("http://localhost:8081/matches").then((res) =>
    res.json().then((data) => {
      return data.XmlSports.Sport[0].Event;
    })
  );
  return responce;
};

//Strucuring recieved date per the needed format DATE/MONTH/HOUR
export function processDate(date) {
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
