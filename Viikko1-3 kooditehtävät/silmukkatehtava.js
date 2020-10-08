/*Tehtävä 1*/
function naytaparilliset()
{
var pariluku = parseInt(document.getElementById('pariluku').value);
var t1luku = "";

for(var a = 2; a <= pariluku; a= a+2)
  {
    t1luku+=a;
    t1luku+="";
  }
  t1luku+="";
  document.getElementById('parilliset').innerHTML = t1luku;
}

/*Tehtävä 2*/
function muutasalasanaksi()
{
var t2sana = document.getElementById('salasana').value;
var salasana = "";

for(var a = 0; a < t2sana.length; a++)
  {
    salasana += t2sana[a] + 'Ö';
  }
  salasana += "";
  document.getElementById('kerrosalasana').innerHTML = salasana;
}

/*Tehtävä 3*/
function tarkistasana()
{
var t3sana = document.getElementById('t3sana').value;

for(var a = 0; a < t3sana.length; a++)
  {
if(t3sana[a] == 'A' || t3sana[a] == 'a')
  {
    vastaus = 'Sanassa on A kirjain';
  }
else
  {
    vastaus = 'Sanassa ei ole A kirjainta'
  }
  }
    document.getElementById('vastaus').innerHTML = ' ' + vastaus + ' ';
  }

/*Tehtävä 4*/
function kerroluku()
{
  var kerro = document.getElementById('kerro').value;
  var lasku = 1;
  for(var a = 1; a <= kerro; a++)
  {
    lasku*=a;
  }
  document.getElementById('kertovastaus').innerHTML = 'Luvun' + ' ' + kerro + ' kertoma on ' + ' ' + lasku;
}

/*Tehtävä 5*/
function hipheijaa()
{
var luvut = ' ';

for(var a = 1; a <= 100; a++)
    {

if(a%3==0 && a%5==0)
    {
      luvut+='hip heijaa';
    }

    else if(a%5 == 0)
    {
      luvut+='heijaa';
    }

    else if(a%3 == 0)
    {
      luvut+='hip';
    }

    else
    {
      luvut+=a+'';
    }
    document.getElementById('hipluvut').innerHTML = luvut;
  }
}

/*Tehtävä 6*/
function kymmenenekaa()
{

  var kymmenen = ' ';
  for(var a = 1; a <=10; a++)
  {
    kymmenen += a + ' ';
  }
    kymmenen += ' ';
    document.getElementById('kymmenenluvut').innerHTML = kymmenen;
}

/*Tehtävä 7*/
function t7yhteen()
{
t7yhteensa = 0;
for(var a = 1; a <=10; a++)

  {
  t7yhteensa += a;
  }
  document.getElementById('kymmenenyhteen').innerHTML = ' '+ t7yhteensa + ' ';
}

/*Tehtävä 8*/
  function potenssi()
  {
  var korotus = document.getElementById('t8korota').value;
  var potenssi = document.getElementById('t8potennsi').value;
  yhteensa = korotus;

for(var a = 1; a < potenssi; a++)
  {
    yhteensa *= korotus;
  }
    document.getElementById('t8potennsivastaus').innerHTML = ' ' + yhteensa + ' ';
  }

/*Tehtävä 10*/
  function teesalasana()
  {
    var ensimmainen, toinen;
    pw = document.getElementById('t10salasana').value;
    var taulu = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'x', 'y', 'z'];
    var temp = [ ];
    var lop= ' ';
    for(var a = 0; a < pw.length; a++)
    {
      ensimmainen = pw[a];
      temp.push(ensimmainen);
      var lisa = Math.floor(Math.random()*taulu.length);
      toinen = taulu[lisa];
      temp.push(toinen);
    }
    lop = temp.join(' ');
    document.getElementById('t10uusisalis').innerHTML = lop;
  }

  /*Tehtävä 11*/
  function naytaluvut()
  {
    var nro1, nro2, palku, ralku, psumma=0, rsumma=0, pluvut='', rluvut='';
    nro1 = parseInt(document.getElementById('pieninumero').value);
    nro2 = document.getElementById('isonumero').value;
    if(nro1%2 == 0)
    {
      palku = nro1;
    }
    else {
      palku = nro1+1;
    }
    for(var b = palku; b<=nro2; b+=2)
    {
      pluvut += b + ' ';
      psumma += b;
    }
    if(nro1%2 == 0)
    {
      ralku = nro1+1;
    }
    else {
      ralku = nro1;
    }
    for(var r = ralku; r<=nro2; r+=2)
    {
      rluvut += r + ' ';
      rsumma += r;
    }
    document.getElementById('lukuparit').innerHTML = 'Parilliset numerot: ' + pluvut +' ja niiden summa: ' + psumma + 'Parittomat luvut: ' + rluvut + ' ja niiden summa: '+ rsumma + ' ';
  }
