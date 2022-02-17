function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = "API KEY";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.name, data.weather[0].main);
      const city = data.name;
      const weather = data.weather[0].main;
    });
}
function onGeoErr() {
  alert("No Geolocation Information, Weather Application Disabled");
}

console.log(navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr));
