const clock = document.querySelector(".clock");
const full_date = document.querySelector(".date");

function getTime() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  full_date.innerText = `${year} . ${month} . ${day}`;
  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

getTime();
setInterval(getTime, 1000);
