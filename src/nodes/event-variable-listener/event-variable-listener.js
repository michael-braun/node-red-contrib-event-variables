const EventEmitter = require('../../constants/event-emitter');

module.exports = function(RED) {
    function EventVariableListener(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        EventEmitter.on(`${this.variable}_update`, (data) => {
            node.send({
                payload: data.value,
            });
        });

        node.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase();
            node.send(msg);
        });
    }
    RED.nodes.registerType('event-variable-listener', EventVariableListener);
}
