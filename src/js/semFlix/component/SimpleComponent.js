goog.provide('semFlix.component.SimpleComponent');

goog.require('goog.events.EventTarget');

/**
 * A simple component. This component is not to be called on its own.
 * Please use this to extend your components with.
 *
 * @constructor
 * @param {Element} element The element of this component
 * @extends {goog.events.EventTarget}
 */
semFlix.component.SimpleComponent = function(element) {
    goog.base(this);

    /**
     * @type {Element}
     * @private
     */
    this.componentElement = element;
};
goog.inherits(semFlix.component.SimpleComponent, goog.events.EventTarget);

/**
 * Gets the element of this component.
 * @return {Element} The element
 */
semFlix.component.SimpleComponent.prototype.getElement = function() {
    return this.componentElement;
};
