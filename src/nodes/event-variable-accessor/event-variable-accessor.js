const DataStore = require('../../constants/data-store');

module.exports = function(RED) {
    function EventVariableAccessor(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        node.on('input', function(msg) {
            const data = DataStore[config.variable];

            if (data) {
                msg.actor = data.actor;
                msg.payload = data.value;
                node.send(msg);
            } else {
                msg.actor = undefined;
                msg.payload = undefined;
                node.send(msg);
            }
        });
    }
    RED.nodes.registerType('event-variable-accessor', EventVariableAccessor);
}
