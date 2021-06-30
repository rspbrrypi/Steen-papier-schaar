// speler 1
var speler = 0;
var score = 0;

// bepaal even of onneven
const isEven = num => num % 2 === 0;

let speler1 = "Speler 1, kies je optie!";
let speler2 = "Speler 2, kies je optie!";
var keuzeSpeler1 = 0;
var keuzeSpeler2 = 0;

const selecteerSpeler = document.querySelector("h3");
const winnaar = document.querySelector("h2");

function veranderSpeler() {
    if (isEven(speler)) {
        selecteerSpeler.innerHTML = speler1;
    } else {
        selecteerSpeler.innerHTML = speler2;
    }
}
// keuze = aantal punten
function speel(keuze) {
    if (speler == 0) {
        keuzeSpeler1 = keuze;
    } else {
        keuzeSpeler2 = keuze;
    }
    score += keuze;
    speler += 1;
    veranderSpeler();
    bereken();
}

// puntentelling
// steen=1, papier=2, schaar=4
// uitkomsten:
// 0 =>spel moet nog beginnen
// gelijkspel:
// steen + steen = 2
// papier + papier = 4
// schaar + schaar = 8
// steen + papier  = 3, papier wint
// steen + schaar  = 5, steen wint
// papier + schaar = 6, schaar wint
// bereken
function bereken() {
    // steen + papier
    if (score == 3) {
        console.log(score);
        // papier wint
        if (keuzeSpeler1 == 2) {
            document.body.innerHTML = "<h1>Speler 1 wint!</h1>";
            window.setTimeout(function () { window.location.reload(); }, 3000);
        } else {
            document.body.innerHTML = "<h1>Speler 2 wint!</h1>";
            window.setTimeout(function () { window.location.reload(); }, 3000);
        }
    } else

    // steen + schaar
    if (score == 5) {
        console.log(score);
        // steen wint
        if (keuzeSpeler1 == 1) {
            document.body.innerHTML = "<h1>Speler 1 wint!</h1>";
            window.setTimeout(function () { window.location.reload(); }, 3000);
        } else {
            document.body.innerHTML = "<h1>Speler 2 wint!</h1>";
            window.setTimeout(function () { window.location.reload(); }, 3000);
        }
    } else

    // papier + schaar
    if ((speler == 2) && (score == 6)) {
        console.log(speler);
        // schaar wint
        if (keuzeSpeler1 == 4) {
            document.body.innerHTML = "<h1>Speler 1 wint!</h1>";
            window.setTimeout(function () { window.location.reload(); }, 3000);
        } else {
            document.body.innerHTML = "<h1>Speler 2 wint!</h1>";
            window.setTimeout(function () { window.location.reload(); }, 3000);
        }
    } else {
        // gelijkspel
        console.log("speler: ", speler);
        console.log("score: ", score);
        if (((speler == 2) && (score == 2)) || ((speler == 2) && (score == 4)) || ((speler == 2) && (score == 8))) {
            document.body.innerHTML = "<h1>Gelijkspel</h1>";
            window.setTimeout(function () { window.location.reload(); }, 3000);
        }
    }
}