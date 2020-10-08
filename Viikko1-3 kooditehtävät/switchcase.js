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
      piste++;
      break;

    case 'b':
    case 'B':
      piste+=2;
      break;

    case 'c':
    case 'C':
      piste+=3;
      break;

    case 'd':
    case 'D':
      piste+=4;
      break;

    case 'E':
    case 'e':
      piste+=7;
      break;

    case 'f':
    case 'F':
      piste+=10;
      break;

    case 'g':
    case 'G':
    case 'h':
    case 'H':
      piste+=15;
      break;

default:
      piste+=20;
      break;
    }
  }
  /*Lopuksi koodi kertoo annetun sanan/lauseen pistemäärän*/
    document.getElementById('kerropisteet').innerHTML = " Sanasi " + annettusana + " pistemäärä on " + piste;
}


/*Tehtävä 2*/
function arvolotto()
  {
    var t2numero1 = Math.floor(Math.random()*7)+1;
    var t2numero2 = Math.floor(Math.random()*7)+1;
    var t2numero3 = Math.floor(Math.random()*7)+1;
    var t2numero4 = Math.floor(Math.random()*7)+1;
    var t2numero5 = Math.floor(Math.random()*7)+1;
    var t2numero6 = Math.floor(Math.random()*7)+1;
    var t2numero7 = Math.floor(Math.random()*7)+1;

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
