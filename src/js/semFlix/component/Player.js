goog.provide('semFlix.component.Player');

goog.require('semFlix.component.SimpleComponent');

/**
 * The Player component
 *
 * @constructor
 * @extends {semFlix.component.SimpleComponent}
 * @param {Element} element The element of this component
 */
semFlix.component.Player = function(element) {
    goog.base(this, element);

    this.init();
};
goog.inherits(semFlix.component.Player, semFlix.component.SimpleComponent);

/**
 * Inits the player
 */
semFlix.component.Player.prototype.init = function() {
    console.log('Player initiated for object', this.getElement());
};
