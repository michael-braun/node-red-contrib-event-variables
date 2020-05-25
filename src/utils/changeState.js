const DataStore = require('../constants/data-store');
const EventEmitter = require('../constants/event-emitter');

module.exports = function changeState(variableId, value, author) {
    DataStore[variableId] = {
        value,
        author,
    };

    EventEmitter.emit(`${variableId}_update`, {
        author,
        value,
    });
}
