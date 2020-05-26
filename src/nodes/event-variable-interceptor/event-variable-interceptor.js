const EventEmitter = require('../../constants/event-emitter');

module.exports = function(RED) {
    function EventVariableListener(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        const handler = (data) => {
            const oldData = DataStore[config.variable];

            node.send({
                payload: {
                    new: {
                        value: data.value,
                        actor: data.actor,
                    },
                    old: {
                        value: oldData.value,
                        actor: oldData.actor,
                    },
                },
            });
        };

        EventEmitter.on(`${config.variable}_intercept`, handler);

        node.on('close', () => {
            EventEmitter.off(`${config.variable}_intercept`, handler);
        })
    }

    RED.nodes.registerType('event-variable-interceptor', EventVariableListener);
}
