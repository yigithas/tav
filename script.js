const playBtn = document.getElementById('playBtn');
const videoContainer2 = document.getElementById('videoContainer2');
const videoContainer1 = document.getElementById('videoContainer1');
const myVideo2 = document.getElementById('myVideo2');
const myVideo1 = document.getElementById('myVideo1');
const body = document.getElementById('body')
const kapsayici = document.getElementById('kapsayici')
const buton1 = document.getElementById('buton1')
const baslik = document.getElementById('baslik')

playBtn.addEventListener('click', function() {
    
    videoContainer2.style.display = 'block';
    
   
    myVideo2.play();
    
    
    myVideo2.muted = false;
    myVideo2.volume = 1.0; 

    body.style.backgroundColor = 'black';
    body.style.margin = 0;
    body.style.backgroundImage = 'none'

    buton1.style.display = 'none';
    baslik.style.display = 'none';
    playBtn.style.width = 0;
    playBtn.style.height = 0;
    playBtn.style.fontSize = 0;
    

});

buton1.addEventListener('click', function() {
  
    videoContainer1.style.display = 'block';
    
   
    myVideo1.play();
    
    
    myVideo1.muted = false;
    myVideo1.volume = 0.8; 

    body.style.backgroundColor = 'black';
    body.style.margin = 0;
    body.style.backgroundImage = 'none'

    playBtn.style.display = 'none';
    baslik.style.display = 'none';
    buton1.style.width = 0;
    buton1.style.height = 0;
    buton1.style.fontSize = 0;
    

});