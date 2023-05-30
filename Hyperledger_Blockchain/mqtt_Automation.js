var mqtt = require('mqtt')
const { exec } = require('child_process');

// credentials from hivemq cloud service.
var options = {
    host: '598ead8152004658b***********.s2.eu.hivemq.cloud', 
    port: 8883,
    protocol: 'mqtts',
    username: 'sidd***',
    password: 'ras***'
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

//on receiving message, exec will run ./deployChaincode.sh file
//before that, we will require to edit deployChaincode.sh file 
// so that only "createCar" function (present in 'chaincodeInvoke') should 
// run.
client.on('message', function (topic, message) {
    // called each time a message is received
    console.log('<<<<<<<<<<<<<<<<<<<<<=====================Received message=====================================>>>>>>>>>>>>>>>>', topic, message.toString());
    const t = message.toString();
    exec(`./deployChaincode.sh ${t}` , (error, stdout, stderr) => {
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
// client.publish('my/test/topic', 'Hello');
