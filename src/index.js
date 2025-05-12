function displayPoem(response) {
  new Typewriter(".poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
  });
}

function newPoem(event) {
  event.preventDefault();
  let key = "a2t704ade1b003d643fa9333o6bb8862";
  let theme = document.querySelector("#theme-input").value;
  let prompt = `write a poem about ${theme}`;
  let context =
    "please limit the poem to 4 lines and follow the inputed theme, apply rhyme and rhythm. separate each line with a <br>. wirte '<strong>~SheCodes AI</strong> at the bottom as writer of the poem";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
  let poemElement = document.querySelector(".poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="waitingForConnection3">Your Poem about ${theme} is loading...</div>`;
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", newPoem);
