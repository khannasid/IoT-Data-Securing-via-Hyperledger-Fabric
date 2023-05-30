var mqtt = require('mqtt')
const { exec } = require('child_process');

var options = {
    host: '598ead8152004658b7f7188241113811.s2.eu.hivemq.cloud',
    port: 8883,
    protocol: 'mqtts',
    username: 'siddhant',
    password: 'raspberry'
}

// initialize the MQTT client
var client = mqtt.connect(options);

// setup the callbacks
client.on('connect', function () {
    console.log('Connected');
});

client.on('error', function (error) {
    console.log(error);
});

client.on('message', function (topic, message) {
    // called each time a message is received
    console.log('<<<<<<<<<<<<<<<<<<<<<=====================Received message=====================================>>>>>>>>>>>>>>>>', topic, message.toString());
    const t = message.toString();
    exec(`echo ${t}` , (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout:\n${stdout}`);
      });

});

// subscribe to topic 'my/test/topic'
client.subscribe('my/test/topic');

// publish message 'Hello' to topic 'my/test/topic'
client.publish('my/test/topic', 'Hello');

// User= siddharth
// Password= Shukla10