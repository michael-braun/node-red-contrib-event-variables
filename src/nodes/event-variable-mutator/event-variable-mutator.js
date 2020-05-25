const changeState = require('../../utils/changeState');

module.exports = function(RED) {
    function EventVariableMutator(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        node.on('input', (msg) => {
            changeState(node.variable, msg.payload, msg.actor || null);
        });
    }

    RED.nodes.registerType('event-variable-mutator', EventVariableMutator);
}
