window.addEventListener('load', function() {
    
    if (!document.getElementById('bgm-audio')) {
      const audio = document.createElement('audio');
    audio.id = 'background-music';
    audio.src = 'bgmm.mp3';
    audio.autoplay = true; 
    audio.loop = true; 
    audio.muted = false; 
    audio.style.display = 'none';
    document.body.appendChild(audio); 
    }
  });
