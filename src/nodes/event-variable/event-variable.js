module.exports = function(RED) {
    function EventVariable(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        node.on('input', function(msg) {
            msg.eventVariableId = config.variable;
            node.send(msg);
        });
    }
    RED.nodes.registerType('event-variable', EventVariable);
}
