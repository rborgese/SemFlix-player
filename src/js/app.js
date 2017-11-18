goog.provide('semFlixPlayer.init');

goog.require('goog.dom');

//var piBoards = {};
semFlixPlayer.init = function() {
    var elements = goog.dom.getElementsByClass('delayed-module');

    goog.array.forEach(elements, goog.bind(function (element) {
        new tip.component.CountdownTimer(element);
    }, this));



    /** this.nsApi = new piBoards.ns('Leiden');
    this.nsApi.getDepartures();
    this.pane = new piBoards.Component.panes({
        'class':'pane',
        'speed':'5000',
        'useinlinespeed': true
    }); **/
};

// I still have to manually call this one? Weird.
semFlixPlayer.init();
