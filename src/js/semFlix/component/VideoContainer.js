goog.provide('semFlix.component.VideoContainer');

goog.require('semFlix.component.SimpleComponent');
goog.require('goog.dom.classlist');

/**
 * The VideoContainer component. This component does some overall handling for
 * the video container. E.g. Show/hide controls
 *
 * @constructor
 * @extends {semFlix.component.SimpleComponent}
 * @param {Element} element The element of this component
 */
semFlix.component.VideoContainer = function(element) {
    goog.base(this, element);

    this.controlsTimeOut = null;

    goog.events.listen(
      this.getElement(),
      goog.events.EventType.MOUSEMOVE,
      this.showControls,
      false,
      this
    );

    this.mouseX = 0;

    this.mouseY = 0;

    this.init();
};
goog.inherits(
  semFlix.component.VideoContainer,
  semFlix.component.SimpleComponent
);

/**
 * Inits the player
 */
semFlix.component.VideoContainer.prototype.init = function() {
    console.log('VideoContainer initiated for object', this.getElement());
};

semFlix.component.VideoContainer.prototype.showControls = function(event) {
    goog.dom.classlist.add(this.getElement(), 'show-controls');

    this.mouseX = event.clientX;
    this.mouseY = event.clientY;

    this.createNewTimeOut();
};

semFlix.component.VideoContainer.prototype.createNewTimeOut = function() {
    if(this.timeout !== null) {
      // If timeout is set already remove timeout.
      clearTimeout(this.setTimeout);
      this.timeout = null;
    }

    // Create new timeout to hide controls
    this.setTimeout = setTimeout(goog.bind(this.hideControls, this), 3000);
};

semFlix.component.VideoContainer.prototype.hideControls = function() {
  var currentMouseElement = document.elementFromPoint(this.mouseX, this.mouseY);
  var ancestorElement = goog.dom.getAncestorByClass(currentMouseElement, 'video__controls');

  if(!ancestorElement) {
    // Only hide controls when user has not mouse on controls
    goog.dom.classlist.remove(this.getElement(), 'show-controls')
  }

};
