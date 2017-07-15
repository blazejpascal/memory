(function() {
  var LICZBA_KAFELKOW = 20;
  var KAFELKI_POD_RZAD = 5;
  var kafelki = [];
  var pobraneKafelki = [];
  var liczbaRuchow = 0;
  var obrazkiKafelkow = [
     'title_1.png',
     'title_2.png',
     'title_3.png',
     'title_4.png',
     'title_5.png',
     'title_6.png',
     'title_7.png',
     'title_8.png',
     'title_9.png',
     'title_10.png'
  ];

})();
function startGame() {

  var plansza = $(".board").empty();

  kafelki = [];
  pobraneKafelki = [];
  moznaBrac = true;
  liczbaRuchow = 0;
  paryKafelkow = 0;

  for (var i=0; i<LICZBA_KAFELKOW; i++) {
    kafelki.push(Math.floor(i/2)); //return number smaller or equal
  }
  for (i=LICZBA_KAFELKOW-1; i>0; i--) {
    var swap = Math.floor(Math.randome()*i);
    var tmp = kafelki[i];
    kafelki[i] = kafelki[swap];
    kafelki[swap] = tmp;
  }
  for (i=1; i<LICZBA_KAFELKOW; i++) {
    var title = $('<div class="kafelek")></div>');
    board.append(tile);

    title.data('cardType',kafelki[i]);
    tilte.data('index', i);

    title.css({
      left : 5+(title.width()+5)*(i%KAFELKI_POD_RZAD)
    });
    title.css({
      top : 5+(title.height()+5)*(Math.floor(i/KAFELKI_POD_RZAD))
    });
    title.bind('clic', function() {
      klikniecieKafelka($(this))
    });
  }
  $('.moves').html(liczbaRuchow);






}
