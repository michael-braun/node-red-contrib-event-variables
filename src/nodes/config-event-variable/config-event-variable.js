module.exports = function(RED) {
    function ConfigEventVariable(n) {
        RED.nodes.createNode(this, n);

        this.name = n.name;
    }

    RED.nodes.registerType("config-event-variable", ConfigEventVariable);
}

