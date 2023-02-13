import paho.mqtt.client as mqtt
import subprocess
import time

MQTT_ADDRESS = '192.168.0.8'
MQTT_USER = 'iotproject'
MQTT_PASSWORD = 'iotproject'
MQTT_TOPIC = 'home/+/+'

def on_connect(client, userdata, flags, rc):
    # The callback for when the client receives a CONNECT response from the server.
    print('Connected with result code '+ str(rc))
    client.subscribe(MQTT_TOPIC)

def on_message(client,userdata,msg):
    print("Message is recieved!")
    x = msg.payload
    ssid = x[0]
    data = x[1]
    proc = subprocess.Popen(['docker', 'exec', 'cli', 'peer', 'chaincode', 
    'invoke', '-C', 'mychannel','-n','telemetricfab','-c',
    '{"Args":["createTelemetry",%s,%s]}'%(ssid,data)],
    stdout=subprocess.PIPE, stderr=subprocess.PIPE,text=True,shell=True)
    while proc.poll() is None:
        print("Shell command is still running..!!")
        time.sleep(1)
    
    print(proc.poll())
    output, error = proc.communicate()
    print(output)
    print(error)

def main():
    mqtt_client = mqtt.Client()
    mqtt_client.username_pw_set(MQTT_USER,MQTT_PASSWORD)
    mqtt_client.on_connect = on_connect
    mqtt_client.on_message = on_message

    mqtt_client.connect(MQTT_ADDRESS, 1883)
    mqtt_client.loop_forever()

if __name__ == '__main__':
    print('MQTT connection start')
    main()