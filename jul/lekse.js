// 1. Lag to arrays med en lengde på 10. Den ene skal inneholde oddetall og den andre partall.

let evens = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let odds = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// 2. Legg disse sammen, vis dem med et komma som seperator.

// legger sammen arrays og sorterer i samme slengen.
let numbers = evens.concat(odds).sort(function (a, b) {
  return a - b;
});

console.log(numbers);

// 3. Trekk ut tallene i index 8 til 13 og legg de inn i en ny array.

let numSlice = numbers.slice(8, 13);
console.log(numSlice);

// 4. Sjekk om ditt nye array inneholder tallet 4.

//funksjon som tar i mot to parametere, array og hva den skal søke etter
//gir enten beskjed om at verdien ikke finnes, eller index av first hit
//ternary if/else for smoothness
function numberChecker(num, array) {
  array.findIndex((i) => i == num) == -1
    ? console.log("No value of " + num + " in this array")
    : console.log(
        num + " located at index " + array.findIndex((i) => i == num)
      );
}
//vi caller funksjonen på numSlice og søker etter 4
numberChecker(4, numSlice);

// 5. Sjekk om ditt nye array har noen positive tall.

//Vi bruker .some(). Ved true har arrayet minst 1 positivt tall
console.log(numSlice.some((i) => i > 0));

// 6. Dobble verdien av alle tall i den nye arrayen din.

// Vi bruker .map() og legger resultatet i nytt array
const numSliceDoubled = numSlice.map((i) => i * 2);
console.log(numSliceDoubled);

// 7. Legg alle arrayene sammen og finn ut den totale summen av disse

// Vi concatter numbers sammen med numSlice og numSliceDoubled
let summedArrays = numbers.concat(numSlice, numSliceDoubled);

//Vi bruker .reduce() for å legge sammen alle verdiene i summedArrays
let total = summedArrays.reduce((a, b) => a + b, 0);
// Vi printer totalen
console.log(total);

// 8. lag en array som inneholder alt du trenger for å lage en bil. (bilsete, bildører o.l). La denne inneholde minst 10 elementer.

let carParts = [
  "wheels",
  "doors",
  "backseat",
  "frontseat",
  "engine",
  "fueltank",
  "steering wheel",
  "gas pedal",
  "windows",
  "brakes",
];

// 9. Legg en person til i starten av ditt array.

//unshift() for å legge til element i begynnelsen
carParts.unshift("driver");
console.log(carParts);

// 10. Ta bort personen og legg dem til i indexen før førersetet.

//.slice() for å kutte frem til index 1
carParts = carParts.slice(1);
//.splice() for å legge til verdi i gitt index
carParts.splice(3, 0, "driver");
//vi logger for å sjekke at alt går greit for seg. Det gjør det.
console.log(carParts);

// 11. Fjern det som ligger i index 7.

//.splice() igjen for å kutte en index
carParts.splice(7, 1);
console.log(carParts);

// 12. Legg en kråke til i slutten av arrayet.

//.push() for å legget til element på slutten av arrayet
carParts.push("crow");
console.log(carParts);

// 13. Fjern kråken igjen.

//.pop() for å fjerne siste element
carParts.pop();
console.log(carParts);

// 14. Lag en variabel med Pi (så nøyaktig Pi du kan finne), og en med Euler's number.

//Vi bruker bare JavaScript sin innebygde Math til å finne disse tallene
let pi = Math.PI;
let eulers = Math.E;

// 15. Lag to strings, en som sier "This is Euler's number" og en som sier "and this is Pi"

let eulerString = "This is Euler's number";
let piString = "and this is Pi";

// 16. Finn Pi opp til 5. desimal.

//Bruker .toPrecision for å sette antall desimaler i en float
pi = pi.toPrecision(6);
console.log(pi);

// 17. Sett Euler's number til å bare ha 4 siffer totalt.

//Samme her
eulers = eulers.toPrecision(5);
console.log(eulers);

// 18. Sett disse to tallene sammen ved hjelp av en funksjon.

//vi bruker en funksjon som tar imot tallene våre
//bruker parseFloat for å summere, og toFixed for å
//angi ønsket antall desimaler på summen.

function numAdder(a, b) {
  return (parseFloat(a) + parseFloat(b)).toFixed(6);
}
console.log(numAdder(pi, eulers));

// 19. Concatinate

let numDeclare = eulerString + ": " + eulers + ", " + piString + ": " + pi;
console.log(numDeclare);
