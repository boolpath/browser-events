var BrowserEmitter = function () {
    var emitter = {
        events: []
    };

    emitter.on = (function (event, callback) {
        if (!(this.events[event] instanceof Array)) {
            this.events[event] = [];
        }
        return this.events[event].push(callback) - 1;
    }).bind(emitter);

    emitter.emit = (function (event) {
        var callbacks = this.events[event];
        if (callbacks) {
            callbacks.forEach(function (callback) {
                if (callback instanceof Function) {
                    callback();
                }
            });
        }
    }).bind(emitter);

    return emitter;
}