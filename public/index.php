<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>SemFlix Player</title>
        <link rel="stylesheet" href="/media/css/app.css">
    </head>
    <body>
      <div class="test-position-el">s</div>
      <div class="video delayed-module js-video-container">
        <div class="video__overlay delayed-module js-video-overlay">
        </div>
        <div class="video__container delayed-module js-video-player">
          <video class="video__container-element" loop autoplay control src="/media/video/caminandes-full-hd.mp4">
        </div>
        <div class="video__controls delayed-module js-video-controls">
          <div class="video__controls-container">
            <div class="video__controls-item video__controls-item--small video__controls-item--border-right">
              <svg class="svg-icon--pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 43"><style>.st0{fill:#A0A0A0;}</style><path class="st0" d="M0 0h11.3v43H0zM18.6 0H30v43H18.5z"/></svg>
            </div>
            <div class="video__controls-item video__controls-item--small video__controls-item--border-right">
              <svg class="svg-icon--sound-on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 41"><style>.st0{fill:#A0A0A0;}</style><path class="st0" d="M24.5.4L10.9 11.5l-7.6.7c-1.6.2-2.8 1.5-2.8 3v10.3c0 1.6 1.2 2.9 2.8 3l7.6.7 13.6 11.1c1.1.9 2.8.1 2.8-1.3V1.7c0-1.4-1.7-2.2-2.8-1.3zM37.4 8c-.4-.5-1.1-.6-1.5-.2L34 9.5c-.4.4-.5 1-.1 1.4 2.1 2.6 3.3 5.9 3.3 9.4s-1.2 6.9-3.3 9.4c-.4.4-.3 1.1.1 1.4l1.9 1.7c.5.4 1.1.4 1.5-.2 2.7-3.4 4.4-7.7 4.4-12.4S40.2 11.4 37.4 8z"/><path class="st0" d="M43.1 2.8c-.4-.5-1.1-.5-1.5-.1l-1.9 1.7c-.4.4-.5 1-.1 1.4 3.3 4 5.3 9.1 5.3 14.6S42.9 31 39.6 35c-.4.5-.3 1.1.1 1.4l1.9 1.7c.4.4 1.1.4 1.5-.1 4-4.8 6.4-10.9 6.4-17.7S47.1 7.6 43.1 2.8z"/></svg>
            </div>
            <div class="video__controls-item video__controls-item--info video__controls-item--border-right video__controls-item--large">
              <span class="video__controls-info video__controls-info--main">Show Title</span>
              <span class="video__controls-info video__controls-info--sub">Season 1: Ep 11 Episode Name Here</span>
            </div>
            <div class="video__controls-item video__controls-item--small js-fullscreen-btn">
              <svg class="svg-icon--fullscreen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 44"><style>.st0{fill:#A0A0A0;}</style><path class="st0" d="M17.6 44H0V27.3h3.2V41h14.4zM3.2 16.7h-3V0h16.6v3H3.2zM61 16.7h-3.2V3H44.2V0H61zM61 44H43.4v-3h14.4V27.3H61z"/><path class="st0" d="M8.4 8.4h44v27h-44z"/></svg>
            </div>
          </div>
        </div>
      </div>
      <!-- App JS -->
      <script src="/media/js/build.js"></script>
    </body>
</html>
