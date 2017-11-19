goog.provide('semFlix.component.VideoControls');

goog.require('goog.events.EventTarget');

/**
 * Video controls component (VideoControls). Controls all the controls from the
 * custom controlbar. Currently supported features are:
 * - Enable/disable fullscreen
 *
 * Future features are:
 * - Sound slider enabler on hover
 * - Sound mute/unmute on click
 * - Play/Pause main video object
 * - Show progress bar.
 *
 * @constructor
 * @param {Element} element The element of this component
 * @extends {semFlix.component.SimpleComponent}
 */
semFlix.component.VideoControls = function(element) {
    goog.base(this);

    this.fullScreenButton = goog.dom.getElementsByClass(this.getElement, 'js-fullscreen-btn');
    console.log(this.fullScreenButton);

};
goog.inherits(semFlix.component.VideoControls, semFlix.component.SimpleComponent);
