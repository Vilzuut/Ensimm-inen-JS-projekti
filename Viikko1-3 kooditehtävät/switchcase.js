/*Tehtävä 1*/

function laskepisteet()
{
    var piste = 0;
    var annettusana = document.getElementById('t1sana').value;
    for(var a = 0; a < annettusana.length; a++)

/*Kirjainten pistemäärät*/
  {
  switch (annettusana[a])
    {
    case 'a':
    case 'A':
    case 'e':
    case 'E':
    case 'i':
    case 'I':
    case 'n':
    case 'N':
    case 's':
    case 'S':
    case 't':
    case 'T':
      piste++;
      break;

    case 'o':
    case 'O':
    case 'ä':
    case 'Ä':
    case 'k':
    case 'K':
    case 'l':
    case 'L':
      piste+=2;
      break;

      case 'u':
      case 'U':
      case 'm':
      case 'M':
      piste+=3;
      break;

    case 'y':
    case 'Y':
    case 'h':
    case 'H':
    case 'j':
    case 'J':
    case 'p':
    case 'P':
    case 'r':
    case 'R':
    case 'V':
    case 'v':
      piste+=4;
      break;

    case 'ö':
    case 'Ö':
    case 'd':
    case 'D':
      piste+=7;
      break;

    case 'b':
    case 'B':
    case 'f':
    case 'F':
    case 'g':
    case 'G':
      piste+=8;
      break;

    case 'c':
    case 'C':
      piste+=10;
      break;

default:
      piste+=12;
      break;
    }
  }
  /*Lopuksi koodi kertoo annetun sanan/lauseen pistemäärän*/
    document.getElementById('kerropisteet').innerHTML = " Sanasi " + annettusana + " pistemäärä on " + piste;
}


/*Tehtävä 2*/
function arvolotto()
  {
    var t2numero1 = Math.floor(Math.random()*35)+1;
    var t2numero2 = Math.floor(Math.random()*35)+1;
    var t2numero3 = Math.floor(Math.random()*35)+1;
    var t2numero4 = Math.floor(Math.random()*35)+1;
    var t2numero5 = Math.floor(Math.random()*35)+1;
    var t2numero6 = Math.floor(Math.random()*35)+1;
    var t2numero7 = Math.floor(Math.random()*35)+1;

    document.getElementById('kerrolottonumero').innerHTML = ' ' + t2numero1 + ' ' + t2numero2 + ' ' + t2numero3 + ' ' + ' ' + t2numero4 + ' ' + ' ' + t2numero5 + ' ' + ' ' + t2numero6 + ' ' + ' ' + t2numero7 + ' ';
  }

/*tehtävä 3*/
function muunnaTaulukoksi()
{

}

/*Tehtävä 4*/

function arvokortit()
{
  var pakka = [' '];
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
  document.getElementById('naytakortit').innerHTML = ' ' + kortit + ' ';
}
