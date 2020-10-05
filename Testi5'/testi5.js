function luku()
{
  var lasku;
  lasku = parseInt(document.getElementById('numero').value);

  /*%2 = 0 jakaa annetun luvun kahdella josta saadaan selville että onko luku parillinen vai pariton*/
  if (lasku%2 == 0)
   {
  document.write("Parillinen");
  }
  else {
    document.write("Pariton")
  }
}
