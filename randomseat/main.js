let students = [
  "Kathrine",
  "Sharif",
  "Prescilla",
  "Kim-André",
  "Kjell Harald",
  "Rune",
  "Ahmad",
  "Cleide",
  "Glenn Remi",
  "Arild Bernhard",
  "Andreas",
  "Morten Alexander",
];
let seatedStudents = []; //["", "", "", "", "", "", "", "", "", "", "", ""];
let studentWrapper = document.querySelector(".studentwrapper");

function upDate() {
  for (let i = 1; i <= seatedStudents.length; i++) {
    document.querySelector(`.seat${i}`).textContent = seatedStudents[i - 1];
  }
  console.log(students);
  while (studentWrapper.firstChild) {
    studentWrapper.firstChild.remove();
  }
  students.forEach((studentName) => {
    let studentElem = document.createElement("p");
    studentElem.textContent = studentName;
    studentElem.classList.add("student");
    studentElem.addEventListener("click", (event) => {
      students.splice(students.indexOf(studentName), 1);
      while (true) {
        randomSeat = Math.floor(Math.random() * 12);
        if (!seatedStudents[randomSeat]) {
          seatedStudents[randomSeat] = studentName;
          break;
        }
      }
      console.log(seatedStudents);
      upDate();
    });
    studentWrapper.appendChild(studentElem);
  });
}
upDate();
