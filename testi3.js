function laske()
 {
var luku1, luku2;
  luku1 = parseInt(document.getElementById('eka').value);
  luku2 = parseInt(document.getElementById('toka').value);
  document.write("Lukujen summa on " + (luku1 + luku2));
}



function tarkastele()
{
var luku1, luku2;
  luku1 = parseInt(document.getElementById('eka').value);
  luku2 = parseInt(document.getElementById('toka').value);
  if(luku1 == luku2)
  {
    document.write("Luvut ovat yhtäsuuret");
  }
  if else(luku1 < luku2)
   {
     document.write("Luku 1 on suurempi kuin luku 2"):
  }
  if else(luku1 > luku2)
   {
     document.write("Luku 2 on suurempi kuin luku 1");
  }
}



function miinusta()
 {
var luku1, luku2;
  luku1 = parseInt(document.getElementById('eka').value);
  luku2 = parseInt(document.getElementById('toka').value);
  document.write("Lukujen erotus on " + (luku1 - luku2));
}



function kerro()
 {
var luku1, luku2;
  luku1 = parseInt(document.getElementById('eka').value);
  luku2 = parseInt(document.getElementById('toka').value);
  document.write("Lukujen tulo on " + (luku1 * luku2));
}



function jaa()
 {
  var luku1, luku2;
   luku1 = parseInt(document.getElementById('eka').value);
   luku2 = parseInt(document.getElementById('toka').value);
   document.write("Lukujen jako on " + (luku1 / luku2));
}
