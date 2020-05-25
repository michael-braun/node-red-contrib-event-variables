const EventEmitter = require('../../constants/event-emitter');

module.exports = function(RED) {
    function EventVariableListener(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        EventEmitter.on(`${this.variable}_update`, (data) => {
            node.send({
                payload: data.value,
                actor: data.actor,
            });
        });
    }
    RED.nodes.registerType('event-variable-listener', EventVariableListener);
}
