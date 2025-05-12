function generatePoem(event) {
  event.preventDefault();
  new Typewriter(".poem-text", {
    strings: "A New Poem is on the way!",
    autoStart: true,
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
