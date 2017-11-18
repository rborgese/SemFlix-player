goog.provide('semFlix.component.Player');

/**
 * The Player component
 *
 * @constructor
 * @param {Element} element The element of this component
 */
semFlix.component.Player = function(element) {
    goog.base(this);

    /**
     * @type {Element}
     * @private
     */
    this.componentElement = element;

    this.init();
};

/**
 * Inits the player
 */
semFlix.component.Player.prototype.init = function() {
    console.log('Player initiated for object', this.componentElement);
};
