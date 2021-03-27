//const fs = require("fs");
const mqtt = require("mqtt");
// const broker = process.env.BROKER;
// const ipBroker = process.env.IP_BROKER;
// const brokerPort = process.env.BROKER_PORT || 8883;

// const CAfile = [fs.readFileSync(process.env.CRT_FOLDER + "ca-broker.crt")];

/*
const options = {
    host: ipBroker,
    // hostname: broker,
    port: parseInt(brokerPort),
    protocol: "mqtts",
    // protocolId: "MQIsdp",
    ca: CAfile,
    // key: KEY,
    // cert: CERT,
    // secureProtocol: "TLSv1_method",
    protocolId: "MQIsdp",
    protocolVersion: 3,
    clean: true,
    rejectUnauthorized: false
};
*/

let mqttClient = mqtt.connect('mqtt://test.mosquitto.org');

module.exports.mqttClient = mqttClient;
