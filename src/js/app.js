goog.provide('semFlixPlayer.init');

goog.require('goog.array');
goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('semFlix.component.Player');
goog.require('semFlix.component.VideoContainer');

semFlixPlayer.init = function() {
    // Get all elements that have a `delayed-module`-class on them
    var elements = goog.dom.getElementsByClass('delayed-module');

    /**
     * Loops through all the found elements and check if a delayed-module
     * exists for it. If it does, it tries to create a new instance of the
     * module. With the found element in it.
     */
    goog.array.forEach(elements, function (element) {
        var classes = goog.dom.classlist.get(element);

        /**
         * Loops through all the classes that are present on the element
         * and initiate the delayed modules that are associated with the
         * class names.
         */
         goog.array.forEach(classes, function (className) {

             /**
              * This switch maps JS-classes with JS-objects.
              * When a matching class is found, the JS-object
              * will be initiated with the element as parameter.
              */
             switch(className) {
                 case 'js-video-container':
                     new semFlix.component.VideoContainer(element);
                     return;
                 case 'js-video-player':
                     new semFlix.component.Player(element);
                     return;
                 case 'js-video-controls':
                     new semFlix.component.VideoControls(element);
                     return;
             }
        });
    });
};

// I still have to manually call this one? Weird.
semFlixPlayer.init();
