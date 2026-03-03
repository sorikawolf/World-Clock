setInterval(function () {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment();

  losAngelesDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do YYYY");

  losAngelesTimeElement.innerHTML = losAngelesTime
    .tz("America/Los_Angeles")
    .format("h:mm:ss [<small>]A[</small>]");
}, 1000);

setInterval(function () {
  let torontoElement = document.querySelector("#toronto");
  let torontoDateElement = torontoElement.querySelector(".date");
  let torontoTimeElement = torontoElement.querySelector(".time");
  let torontoTime = moment();

  torontoDateElement.innerHTML = moment()
    .tz("America/Toronto")
    .format("MMMM Do YYYY");

  torontoTimeElement.innerHTML = torontoTime
    .tz("America/Toronto")
    .format("h:mm:ss [<small>]A[</small>]");
}, 1000);
