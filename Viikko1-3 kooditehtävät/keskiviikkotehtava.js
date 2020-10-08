/*Tehtävä 1*/
function jarjesta()
{
  var luku1, luku2, luku3;
  luku1 = parseInt(document.getElementById('yksi').value);
  luku2 = parseInt(document.getElementById('kaksi').value);
  luku3 = parseInt(document.getElementById('kolme').value);

  if(luku1 < luku2 && luku1 < luku3)
{
    if(luku2 < luku3)
    {
      document.write("Lukujen järjestys on " + luku1 + ' ' + luku2 + ' ' + luku3);
    }
    else {
      document.write("Lukujen järjestys on " + luku1 + ' ' + luku3 + ' ' + luku2);
    }
}

else if(luku2 < luku1 && luku2 < luku3)
{
    if(luku1<luku3)
    {
      document.write("Lukujen järjestys on " + luku2 + ' ' + luku1 + ' ' + luku3);
    }
    else {
      document.write("Lukujen järjestys on " + luku2 + ' ' + luku3 + ' ' + luku1);

  }
}

else if(luku3 < luku1 && luku3 < luku2)
{
      if(luku1 < luku2)
      {
        document.write("Lukujen järjestys on " + luku3 + ' ' + luku1 + ' ' + luku2);
      }
      else {
        document.write("Lukujen järjestys on " + luku3 + ' ' + luku2 + ' ' + luku1);

      }
    }
  }

/*Tehtävä 2*/
function etsiSuurin()
{
    var luku1, luku2, luku3, luku4, luku5, suurin;
    l1 = parseInt(document.getElementById('luku1').value);
    l2 = parseInt(document.getElementById('luku2').value);
    l3 = parseInt(document.getElementById('luku3').value);
    l4 = parseInt(document.getElementById('luku4').value);
    l5 = parseInt(document.getElementById('luku5').value);
    if(l1 < l2 && l3 < l2 && l4 < l2 && l5 < l2)
    {
      suurin = l2;
    }
    else if(l1 < l3 && l4 < l3 && l5 < l3)
    {
      suurin = l3;
    }
    else if(l1 < l4 && l5 < l4)
    {
      suurin = l4;
    }
    else if(l1 < l5)
    {
      suurin = l5;
    }
    else {
      suurin = l1;
    }
    document.write("Suurin luku on" + " " + suurin);
}

/*Tehtävä 3*/
function tarkista()
{
    var arvo;
    arvo = parseInt(document.getElementById('luku').value);

if(arvo%2 == 0)
{
      document.write("Lukusi on parillinen");
    }
    else {
      document.write("Lukusi on pariton");
    }
}

/*Tehtvä 4*/
function ajoneuvo()
{
    var ika = parseInt(document.getElementById('ika').value);
    if(ika < 16)
    {
      document.write("Sinulla ei ole ikää ajaa mitään moottoriajoneuvoa");
    }
    else if(ika < 18)
    {
      document.write("Sinulla on ikää ajaa mopoa");
    }
    else {
      document.write("Sinulla on ikää ajaa autoa");
    }
}

/*Tehtävä 5*/
function kaanna()
{
  var lang = document.getElementById('kieli').value;
    if(lang == 'enkku')
      {
        document.write("Hello world!");
      }

else if(lang == 'ruotsi')
  {
    document.write("Hej World!");
  }

else if(lang == 'espanja')
  {
    document.write("Hola World!");
  }

else if(lang == 'suomi')
  {
    document.write("Morotukset maailmalle");
  }
}
