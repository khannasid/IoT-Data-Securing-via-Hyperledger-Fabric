# Blockchain part!!

0. First create the crypto-materials by invoking create-artifacts.sh file.

1. To up the peers of hyperledger, we will run
"docker-compose up -d" in `BasicNetwork-2.0/artifacts folder`.

2. then we go back to main "BasicNetwork-2.0" folder and run the 
"createChannel.sh" shell file which will create channels and bind all the peers together.

3. Then, we will run the "deployChaincode.sh" shell script which will 
deploy the chaincode to all the peers and run a basic function at the end
which will store some predefined data.

4. Add a js file on BasicNetwork-2.0 folder which contains function to subscribe and
automatically sending data to hyperledger fabric.

5. Run the 'npm i mqtt' for downloading the required package.

6. And run the file at the end when hyperledger is running(and before that, 
Try to change the deployChaincode.sh file so that only 'Create Car' function
run while running the shell file.)
