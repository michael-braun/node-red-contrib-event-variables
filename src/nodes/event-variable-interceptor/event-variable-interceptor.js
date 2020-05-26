const EventEmitter = require('../../constants/event-emitter');

module.exports = function(RED) {
    function EventVariableListener(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        const handler = (data) => {
            node.send({
                interceptedEventVariable: config.variable,
                payload: data.value,
                actor: data.actor,
            });
        };

        EventEmitter.on(`${config.variable}_intercept`, handler);

        node.on('close', () => {
            EventEmitter.off(`${config.variable}_intercept`, handler);
        })
    }

    RED.nodes.registerType('event-variable-interceptor', EventVariableListener);
}
