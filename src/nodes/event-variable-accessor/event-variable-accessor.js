const DataStore = require('../../constants/data-store');

module.exports = function(RED) {
    function EventVariableAccessor(config) {
        RED.nodes.createNode(this, config);
        const node = this;
        node.on('input', function(msg) {
            const data = DataStore[this.variable];

            if (data) {
                msg.payload = data.value;
                node.send(msg);
            }
        });
    }
    RED.nodes.registerType('event-variable-accessor', EventVariableAccessor);
}
