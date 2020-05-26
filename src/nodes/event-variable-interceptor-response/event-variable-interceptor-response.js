const changeState = require('../../utils/changeState');

module.exports = function(RED) {
    function EventVariableListener(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        node.on('input', (msg) => {
            if (!msg.interceptedEventVariable) {
                return;
            }

            changeState(msg.interceptedEventVariable, msg.payload, msg.actor || null, false);
        });
    }

    RED.nodes.registerType('event-variable-interceptor-response', EventVariableListener);
}
