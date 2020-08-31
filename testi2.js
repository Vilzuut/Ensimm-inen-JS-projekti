function laskeMinuutit()
{
  var min, tun, laske;
  tun = document.getElementById('tunti').value;
  min = document.getElementById('minuutti').value;
  //tun = parseInt(tun);
  //min = parseInt(min);
  laske = tun*60 + min;
  document.write('Minuutteja on kulunut' + laske);
}
