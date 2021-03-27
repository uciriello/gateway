const { mqttClient } = require("./config/mqtts");
const { ER_CODE, ER_MSG, ER_TITLE } = require("./shared/errorCode");
const { println } = require("./shared/utils");
let reconnection = false;

mqttClient.on("connect", () => {
    if (!reconnection) {
        println("Broker connected!", "supersuccess");
    } else {
        println("Broker reconnected!", "supersuccess");
    }
    mqttClient.subscribe('presence', function (err) {
        if (!err) {
        mqttClient.publish('presence', 'Hello mqtt')
        }
    });
});

mqttClient.on("error", function(err) {
    println(err, "error");
    if (err && (err.code === "ECONNREFUSED" || err.code === "ECONNRESET")) {
        println(
            "Broker disconnected, with code " + err.code || "UNDEFINED",
            "error"
        );
        const error = {
            code:
                err.code === "ECONNREFUSED"
                    ? ER_CODE.ECONNREFUSED
                    : ER_CODE.ECONNRESET,
            title:
                err.code === "ECONNREFUSED"
                    ? ER_TITLE.ECONNREFUSED
                    : ER_TITLE.ECONNRESET,
            msg:
                err.code === "ECONNREFUSED"
                    ? ER_MSG.ECONNREFUSED
                    : ER_MSG.ECONNRESET
        };
        // sendGlobalMsg({ error: error }, globalWs);
    } else {
        const msg = {
            code: ER_CODE.UNKNOWN,
            title: ER_TITLE.UNKNOWN,
            msg: err ? err : ER_MSG.UNKNOWN
        };
        // sendGlobalMsg({ error: msg }, globalWs);
    }
});

mqttClient.on("offline", function() {
    println("Broker is OFFLINE", "error");
    const msg = {
        code: ER_CODE.OFFLINE,
        title: ER_TITLE.OFFLINE,
        msg: ER_MSG.OFFLINE
    };
    // sendGlobalMsg({ error: msg }, globalWs);
});

mqttClient.on("reconnect", function() {
    println("Reconnection attempt in progress...");
    reconnection = true;
    const msg = {
        code: ER_CODE.RECONNECTION,
        title: ER_TITLE.RECONNECTION,
        msg: ER_MSG.RECONNECTION
    };
    // sendGlobalMsg({ error: msg }, globalWs);
});

mqttClient.on("message", function(topic, message) {
    const topicAndMsg = "Topic: " + topic + " | Message: " + message.toString();
    print("<MQTT>", "primary");
    print(topicAndMsg, "primary");
    println("</MQTT>", "primary");
});

