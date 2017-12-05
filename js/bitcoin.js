var btc = document.getElementById('btc');

btc.addEventListener('click', function() {
  var PriceRequest = new XMLHttpRequest();
  PriceRequest.open('GET', 'https://api.coinbase.com/v2/prices/BTC-USD/sell');
  PriceRequest.onload = function() {
    if(PriceRequest.status >= 200 && PriceRequest.status < 400){
      var PriceData = JSON.parse(PriceRequest.responseText);
      alert(PriceData['data']['amount']);
    } else {
      console.log("Returning NULL !");
    }
  };

  PriceRequest.onerror = function() {
    console.log("Connection ERROR !");
  }
  PriceRequest.send();
});
