document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal animation using Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const slideUpElements = document.querySelectorAll('.slide-up');
    slideUpElements.forEach(el => {
        observer.observe(el);
    });
    
    // As cores agora são 100% controladas pelo CSS (Preto, Branco, Cinza Escuro) para manter o visual altamente profissional solicitado.
});

// YouTube IFrame API Setup para controle de áudio
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        videoId: 'WObHfVCaJkM',
        playerVars: {
            'autoplay': 1,
            'mute': 1,
            'loop': 1,
            'playlist': 'WObHfVCaJkM',
            'controls': 1,
            'rel': 0,
            'showinfo': 0,
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
    
    const muteToggleBtn = document.getElementById('mute-toggle-btn');
    if (muteToggleBtn) {
        muteToggleBtn.addEventListener('click', function() {
            if (player.isMuted()) {
                player.unMute();
                player.setVolume(100);
                muteToggleBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
                muteToggleBtn.style.background = 'rgba(29, 185, 84, 0.8)';
                muteToggleBtn.style.borderColor = 'rgba(29, 185, 84, 1)';
            } else {
                player.mute();
                muteToggleBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
                muteToggleBtn.style.background = 'rgba(0, 0, 0, 0.6)';
                muteToggleBtn.style.borderColor = 'rgba(255,255,255,0.4)';
            }
        });
    }
}
