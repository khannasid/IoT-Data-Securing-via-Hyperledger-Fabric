#IoT part!!

0. Buy Raspberry Pi.

1. Download and install Raspberry Pi OS on any memory card using 
Raspberry Pi imager app. You should also add your local wifi credentials.

2. Use Advance IP finder app to find the ip of Raspberry pi, when you connect 
it with your wifi(by booting it).

3. Use the IP address to access the Raspberry Pi using Putty Software
that works on SSH.

4. When accessing the Pi, login with user name: pi, Password: raspberry

5. Update and Upgrade all the necessary pakages present in Pi, and then 
create a directory, name it mqtt_publisher.

6. Before that, check whether Node.js is present in Pi or not using 'node -v' command.

7. Create a javascript file using 'sudo nano main.js', which will open nano editor. Add the 
js contents provided in the GitHub IoT repo.

8. Run 'npm i mqtt' command to download node mqtt package. 

9. To run the file we can use 'node main.js' command which will start sending data to 
MQTT Broker (Cloud).
