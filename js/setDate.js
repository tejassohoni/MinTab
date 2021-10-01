const userLang = (navigator.language || navigator.userLanguage) ?? "en-US";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function datetime() {
  const today = new Date();

  let hrs = today.getHours(),
    mins = today.getMinutes(),
    tt = "AM",
    day = today.getDay(),
    dd = today.getDate(),
    mm = today.getMonth() + 1,
    yy = today.getFullYear();

  if (mins < 10) mins = "0" + mins;
  if (hrs > 12) (hrs = hrs % 12), (tt = "PM");
  else tt = "AM";
  if (hrs < 10) hrs = "0" + hrs;

  if (dd < 10) dd = "0" + dd;

  document.getElementById("currentTime").innerHTML =
    hrs + ":" + mins + " " + tt +;
  document.getElementById("currentDate").innerHTML =
    days[day] + ", " + dd + " " + months[mm - 1] + " " + yy;
  setTimeout(datetime, 1000);
}

datetime();
