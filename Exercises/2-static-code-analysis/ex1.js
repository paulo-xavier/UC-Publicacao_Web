function teste(){
  var a = 10;
  const b = 20;
  const c = a + b;

  if(a == 10){
    // eslint-disable-next-line no-console
    console.log("This is a debug message");


    /* eslint-disable no-console */

    console.log( 'O valor de a é 10' );
  }

  for(var i =0;i<10;i++){
    console.log(i);
  }

  /* eslint-enable no-console */

  function interna(){
    return;
    {
      valor: 1;
    }
  }

  var resultado = interna() ? true : false;

  const obj = {a:1,b:2,
    c:3};

  if (resultado)
    console.log('Resultado é verdadeiro');

  return c;
}

teste();
