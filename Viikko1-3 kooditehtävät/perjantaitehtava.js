/*Tehtävä 1*/
function tarkastaluku()
{
  var t1luku = document.getElementById('t1luku').value;

if(t1luku >= 0)
  {
    document.getElementById('vastaust1').innerHTML = "Lukusi on positiivinen";
  }

else
  {
    document.getElementById('vastaust1').innerHTML = "Lukusi on negatiivinen";
  }
}

/*Tehtävä 2*/
function viikonpaiva()
{
var t2luku = document.getElementById('t2luku').value;

if(t2luku == 1)
  {
    document.getElementById('tulostat2').innerHTML = "Maanantai";
  }

else if(t2luku == 2)
  {
    document.getElementById('tulostat2').innerHTML = "Tiistai";
  }

else if(t2luku == 3)
  {
    document.getElementById('tulostat2').innerHTML = "Keskiviikko";
  }

else if(t2luku == 4)
  {
    document.getElementById('tulostat2').innerHTML = "Torstai";
  }

else if(t2luku == 5)
  {
    document.getElementById('tulostat2').innerHTML = "Perjantai";
  }

else if(t2luku == 6)
  {
    document.getElementById('tulostat2').innerHTML = "Lauantai";
  }

else if(t2luku == 7)
  {
    document.getElementById('tulostat2').innerHTML = "Sunnuntai";
  }

else
{
      document.getElementById('tulostat2').innerHTML = "Lukusi ei ole viikonpäivä";
  }
}

/*Tehtävä 3*/
function onkokarkausvuosi()
{
t3luku = document.getElementById('t3luku').value;

if(t3luku%4 == 0 && t3luku%100 != 0)
  {
    document.getElementById('tulostat3').innerHTML = "On karkausvuosi";
  }

else if(t3luku%400 ==0)
  {
    document.getElementById('tulostat3').innerHTML = "On karkausvuosi";
  }

else
  {
    document.getElementById('tulostat3').innerHTML = "Ei ole karkausvuosi";
  }
}

/*Tehtävä 4*/
function keskiarvo()
{
var l1, l2, l3, l4, l5, summa, keskiarvo;
  l1 = parseInt(document.getElementById('luku1').value);
  l2 = parseInt(document.getElementById('luku2').value);
  l3 = parseInt(document.getElementById('luku3').value);
  l4 = parseInt(document.getElementById('luku4').value);
  l5 = parseInt(document.getElementById('luku5').value);

  summa = l1 + l2 + l3 + l4 + l5;
  keskiarvo = summa / 5;
  document.getElementById('tulostat4').innerHTML = "Lukujesi summa on " + summa + " ja niiden keskiarvo on " + keskiarvo;
}

/*Tehtävä 5*/
function kertotaulu()
{
  var kerluku = document.getElementById('kerro').value;
  var taulu = kerluku + ' x 0 = '+ kerluku*0 + '';

  taulu += kerluku + ' x 1 = '+ kerluku*1 + '<br>';
  taulu += kerluku + ' x 2 = '+ kerluku*2 + '<br>';
  taulu += kerluku + ' x 3 = '+ kerluku*3 + '<br>';
  taulu += kerluku + ' x 4 = '+ kerluku*4 + '<br>';
  taulu += kerluku + ' x 5 = '+ kerluku*5 + '<br>';
  taulu += kerluku + ' x 6 = '+ kerluku*6 + '<br>';
  taulu += kerluku + ' x 7 = '+ kerluku*7 + '<br>';
  taulu += kerluku + ' x 8 = '+ kerluku*8 + '<br>';
  taulu += kerluku + ' x 9 = '+ kerluku*9 + '<br>';
  taulu += kerluku + ' x 10 = '+ kerluku*10 + '<br>';
  document.getElementById('tulosta5').innerHTML = taulu;
}
