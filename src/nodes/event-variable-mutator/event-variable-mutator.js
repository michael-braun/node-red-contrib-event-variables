const changeState = require('../../utils/changeState');

module.exports = function(RED) {
    function EventVariableMutator(config) {
        RED.nodes.createNode(this, config);
        const node = this;
        node.on('input', function(msg) {
            changeState(this.variable, msg.payload, null);
        });
    }
    RED.nodes.registerType('event-variable-mutator', EventVariableMutator);
}
