const DataStore = require('../constants/data-store');
const EventEmitter = require('../constants/event-emitter');

module.exports = function changeState(variableId, value, actor) {
    DataStore[variableId] = {
        actor,
        value,
    };

    EventEmitter.emit(`${variableId}_update`, {
        actor,
        value,
    });
}
