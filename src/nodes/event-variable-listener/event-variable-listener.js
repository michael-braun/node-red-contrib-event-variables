const EventEmitter = require('../../constants/event-emitter');

module.exports = function(RED) {
    function EventVariableListener(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        const handler = (data) => {
            node.send({
                payload: data.value,
                actor: data.actor,
            });
        };

        EventEmitter.on(`${config.variable}_update`, handler);

        node.on('close', () => {
            EventEmitter.off(`${config.variable}_update`, handler);
        })
    }

    RED.nodes.registerType('event-variable-listener', EventVariableListener);
}
