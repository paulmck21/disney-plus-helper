document.addEventListener('keydown', (e) => {
    if (e.code !== 'Space') {
        return;
    }
    const video = document.getElementsByTagName('video')[0];
    if (!video) {
        return;
    }
    video.paused ? video.play() : video.pause();
})
