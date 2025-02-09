const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function() {
    alert('Saber que eres y serás mi San Valentin por el resto de mi vida es una de las cosas más bonitas que me ha podido dar la vida. Contigo lo quiero todo, y quiero que me permitas amarte toda la vida ❤️ gracias por darme el privilegio de recibir tu amor y tu complicidad. Te amo mi amor bonito, mi reina piwicha.')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function() {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn .style .setProperty ( 'transformar' , `traducir(- ${ aleatorioX } % , - ${ aleatorioY } %) ` ) ;
} )