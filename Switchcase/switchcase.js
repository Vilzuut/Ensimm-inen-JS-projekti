/*Tehtävä 1*/

function laskepisteet() {
var pisteet = 0;
var sana = document.getElementById('scsana').value;
for(var i = 0; i < sana.length; i++)
{

/*Kirjainten pistemäärät*/
  switch (sana[i])
  {
    case 'a':
    case 'A':
      pisteet++;
      break;
    case 'b':
    case 'B':
      pisteet+=2;
      break;
    case 'c':
    case 'C':
      pisteet+=3;
      break;
    case 'd':
    case 'D':
      pisteet+=4;
      break;
    case 'E':
    case 'e':
      pisteet+=7;
      break;
    case 'f':
    case 'F':
      pisteet+=10;
      break;
    case 'g':
    case 'G':
    case 'h':
    case 'H':
      pisteet+=15;
      break;
default:
      pisteet+=20;
      break;
  }
}
/*Lopuksi koodi kertoo annetun sanan/lauseen pistemäärän*/
  document.getElementById('scrabble').innerHTML = " Sanan " + sana + " pisteet ovat: " + pisteet;

}


/*Tehtävä 2*/

function arvoNumerot()
{ /*Arpoo random numeron*/
 var arvottu = Math.floor(Math.random()*7)+1;
 document.getElementById('ltaulu').innerHTML = '<p>'+arvottu+'</p>';
}


/*tehtävä 3*/

function muunnaTaulukoksi()
{

}

/*Tehtävä 4*/

function annaKortit()
{
  var pakka = [''];
  /*Tekee numeroiden eteen kyseisen kortin maan kuvan*/
  var maat = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];
  var numerot = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  laskuri = 0;
  for(m = 0; m < maat.length; m++)
  {
    for(n = 0; n < numerot.length; n++)
    {
      if(m == maat.length-1 && n == numerot.length-1)
      {
        pakka[laskuri] = maat[m] + numerot[n];
      }
      else {
        pakka[laskuri] = maat[m]+numerot[n];
        laskuri++;
      }

    }
  }
  var kortit = [];
  for(l = 0; l < 5; l++)
  {
      temp = pakka[Math.floor(Math.random()*52)];
      kortit[l] = temp;
  }
  document.getElementById('pakka').innerHTML = '<p>'+kortit+'</p>';
}
