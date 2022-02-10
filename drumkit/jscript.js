function handleKeydown(drumtype) {
  new Audio(`${drumtype}.wav`).play();
  document.getElementById(`${drumtype}`).style.backgroundColor =
    "rgba(255, 166, 0, 0.3)";
}
function handleKeyup(drumtype) {
  document.getElementById(`${drumtype}`).style.backgroundColor =
    "rgba(255, 166, 0, 0)";
}

window.addEventListener("keydown", (e) => {
  if (e.key === "d") {
    handleKeydown("kick");
  }
  if (e.key === "f") {
    handleKeydown("snare");
  }
  if (e.key === "r") {
    handleKeydown("clap");
  }
  if (e.key === "k") {
    handleKeydown("hihat");
  }
  if (e.key === "l") {
    handleKeydown("openhat");
  }
  if (e.key === "i") {
    handleKeydown("ride");
  }
  if (e.key === "o") {
    handleKeydown("tink");
  }
  if (e.key === "p") {
    handleKeydown("tom");
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key === "d") {
    handleKeyup("kick");
  }
  if (e.key === "f") {
    handleKeyup("snare");
  }
  if (e.key === "r") {
    handleKeyup("clap");
  }
  if (e.key === "k") {
    handleKeyup("hihat");
  }
  if (e.key === "l") {
    handleKeyup("openhat");
  }
  if (e.key === "i") {
    handleKeyup("ride");
  }
  if (e.key === "o") {
    handleKeyup("tink");
  }
  if (e.key === "p") {
    handleKeyup("tom");
  }
});
