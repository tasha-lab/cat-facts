import axios from "axios";
const factsInput = document.getElementById("number-facts");
const factsBtn = document.getElementById("btn-facts");
const theResult = document.getElementById("myoutput");
const imagesInput = document.getElementById("number-images");
const photosBtn = document.getElementById("btn-photos");

factsBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const theValue = factsInput.value;
  console.log(theValue);

  theResult.innerHTML = `<div class="loader"></div>`;

  try {
    const response = await axios.get(
      `https://meowfacts.herokuapp.com/?count=${theValue}`,
    );
    // console.log(response)

    if (theValue === "") {
      theResult.innerHTML = `<p>Please enter a valid input</p>`;
    }

    const myResult = response.data.data;
    // console.log(myResult)
    const output = myResult
      .slice(0, 50)
      .map(function (item) {
        return `<li>${item}</li>`;
      })
      .join("");
    // console.log(output)
    theResult.innerHTML = `<ol>${output}</ol>`;
  } catch {
    console.log("Something went wrong");
  }
});

photosBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const imagesValue = imagesInput.value;
  //   console.log(imagesValue);

  theResult.innerHTML = `<div class="loader"></div>`;

  if (imagesValue === "") {
    theResult.innerHTML = `<p>Please enter a valid input</p>`;
  }

  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=${imagesValue}`,
    );
    // console.log(response)

    const imagesResult = response.data;
    console.log(imagesResult);

    const imgOutput = imagesResult
      .map(function (items) {
        return `<div class ="bottom-section-images"><img src="${items.url}"></div>`;
      })
      .join("");

    theResult.innerHTML = `<div class="images">${imgOutput}</div>`;
  } catch {
    console.log("Something went wrong");
  }
});
