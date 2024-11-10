window.addEventListener('load', function() {
    
    if (!document.getElementById('bgm-iframe')) {
      const iframe = document.createElement('iframe');
      iframe.src = 'bgm.html';
      iframe.style.display = 'none'; 
      iframe.width = '0'; 
      iframe.height = '0'; 
      iframe.id = 'bgm-iframe'; 
      document.body.appendChild(iframe); 
    }
  });