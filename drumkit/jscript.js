function handleKeydown(drumtype) {
  new Audio(`${drumtype}.wav`).play();
  document.getElementById(`${drumtype}`).style.backgroundColor =
    "rgba(255, 166, 0, 0.3)";
}
function handleKeyup(drumtype) {
  document.getElementById(`${drumtype}`).style.backgroundColor =
    "rgba(255, 166, 0, 0)";
}

let keyBinds = new Map();

keyBinds.set("d", "kick");
keyBinds.set("f", "snare");
keyBinds.set("r", "clap");
keyBinds.set("k", "hihat");
keyBinds.set("l", "openhat");
keyBinds.set("i", "ride");
keyBinds.set("o", "tink");
keyBinds.set("p", "tom");

window.addEventListener("keydown", (e) => {
  if (keyBinds.has(e.key)) {
    handleKeydown(keyBinds.get(e.key));
  }
});
window.addEventListener("keyup", (e) => {
  if (keyBinds.has(e.key)) {
    handleKeyup(keyBinds.get(e.key));
  }
});
