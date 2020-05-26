const DataStore = require('../constants/data-store');
const EventEmitter = require('../constants/event-emitter');

module.exports = function changeState(variableId, value, actor, allowInterception = true) {
    if (allowInterception && EventEmitter.listenerCount(`${variableId}_intercept`) > 0) {
        EventEmitter.emit(`${variableId}_intercept`, {
            actor,
            value,
        });

        return;
    }

    DataStore[variableId] = {
        actor,
        value,
    };

    EventEmitter.emit(`${variableId}_update`, {
        actor,
        value,
    });
}
