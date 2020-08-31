/*Tehtävä 1*/

function laskepisteet() {
var pisteet = 0;
var sana = document.getElementById('scsana').value;
for(var i = 0; i < sana.length; i++)
}

  switch (sana[i])
  {
    case 'a':
    case 'A':
      pisteet++;
      break;
    case 'b':
    case 'B':
      pisteet++2;
      break;
    case 'c':
    case 'C':
      pisteet++3;
      break;
    case 'd':
    case 'D':
      pisteet++4;
      break;
    case 'E':
    case 'e':
      pisteet++7;
      break;
    case 'f':
    case 'F':
      pisteet++10;
      break;
    case 'g':
    case 'G':
    case 'h':
    case 'H':
      pisteet++15;
      break;
default:
      pisteet++20;
      break;
  }
  document.getElementById('scrabble').innerHTML = "<p>Sanan " + sana + " pisteet ovat: " + pisteet + "</p>";



/*Tehtävä 2*/

function arvonumerot()
{
  
}
