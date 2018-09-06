let express = require('express');
let router = express.Router();

let log4js = require('log4js');
let logger = log4js.getLogger('blockchainQuickStart');
logger.level = 'DEBUG';

let fabric = require('./fabric-op');


/* GET home page. */
router.get('/', express.static('public'));

router.post('/channel/create', async function (req, res) {
  let channelName = req.body.channelName;
  if (typeof channelName === 'undefined') {
    let errMessage = "Request Error, parameter \"channelName\" doesn't exist";
    logger.error(errMessage);
    res.status(400).json({"result": "failed", "error": errMessage});
    return;
  }
  logger.debug("Get channel name: \"" + channelName + "\"");

  let orgName = req.body.orgName;
  if (typeof orgName === 'undefined') {
    let errMessage = "Request Error, parameter \"orgName\" doesn't exist";
    logger.error(errMessage);
    res.status(400).json({"result": "failed", "error": errMessage});
    return;
  }
  logger.debug("Get org name: \"" + orgName + "\"");

  let createResult = await fabric.createChannel(channelName, orgName);
  logger.debug(createResult);
  if (createResult[0]===true) {
    res.status(200).json({"result": "success"});
  } else {
    res.status(500).json({"result": "failed", "error": createResult[1]});
  }

});

router.post('/channel/join', async function (req, res) {
  let channelName = req.body.channelName;
  if (typeof channelName === 'undefined') {
    let errMessage = "Request Error, parameter \"channelName\" doesn't exist";
    logger.error(errMessage);
    res.status(400).json({"result": "failed", "error": errMessage});
    return;
  }
  logger.debug("Get channel name: \"" + channelName + "\"");

  let orgName = req.body.orgName;
  if (typeof orgName === 'undefined') {
    let errMessage = "Request Error, parameter \"orgName\" doesn't exist";
    logger.error(errMessage);
    res.status(400).json({"result": "failed", "error": errMessage});
    return;
  }
  logger.debug("Get org name: \"" + orgName + "\"");

  let peers = req.body.peers;
  if (typeof peers === 'undefined') {
    let errMessage = "Request Error, parameter \"peers\" doesn't exist";
    logger.error(errMessage);
    res.status(400).json({"result": "failed", "error": errMessage});
    return;
  }
  logger.debug("Get peers names: \"" + peers + "\"");

  let joinResult = await fabric.joinChannel(channelName, orgName, peers);
  logger.debug(joinResult);
  if (joinResult[0]===true) {
    res.status(200).json({"result": "success"});
  } else {
    res.status(500).json({"result": "failed", "error": joinResult[1]});
  }

});

router.post('/chaincode/install', async function (req, res) {
  let chaincodeName = req.body.chaincodeName;
  if (typeof chaincodeName === 'undefined') {
    let errMessage = "Request Error, parameter \"chaincodeName\" doesn't exist";
    logger.error(errMessage);
    res.status(400).json({"result": "failed", "error": errMessage});
    return;
  }
  logger.debug("Get chaincode name: \"" + chaincodeName + "\"");

  let chaincodePath = req.body.chaincodePath;
  if (typeof chaincodePath === 'undefined') {
    let errMessage = "Request Error, parameter \"chaincodePath\" doesn't exist";
    logger.error(errMessage);
    res.status(400).json({"result": "failed", "error": errMessage});
    return;
  }
  logger.debug("Get chaincode path: \"" + chaincodePath + "\"");

  let chaincodeType = req.body.chaincodeType;
  if (typeof chaincodeType === 'undefined') {
    let errMessage = "Request Error, parameter \"chaincodeType\" doesn't exist";
    logger.error(errMessage);
    res.status(400).json({"result": "failed", "error": errMessage});
    return;
  }
  logger.debug("Get chaincode type: \"" + chaincodeType + "\"");

  let chaincodeVersion = req.body.chaincodeVersion;
  if (typeof chaincodeVersion === 'undefined') {
    let errMessage = "Request Error, parameter \"chaincodeVersion\" doesn't exist";
    logger.error(errMessage);
    res.status(400).json({"result": "failed", "error": errMessage});
    return;
  }
  logger.debug("Get chaincode version: \"" + chaincodeVersion + "\"");

  let orgName = req.body.orgName;
  if (typeof orgName === 'undefined') {
    let errMessage = "Request Error, parameter \"orgName\" doesn't exist";
    logger.error(errMessage);
    res.status(400).json({"result": "failed", "error": errMessage});
    return;
  }
  logger.debug("Get org name: \"" + orgName + "\"");

  let peers = req.body.peers;
  if (typeof peers === 'undefined') {
    let errMessage = "Request Error, parameter \"peers\" doesn't exist";
    logger.error(errMessage);
    res.status(400).json({"result": "failed", "error": errMessage});
    return;
  }
  logger.debug("Get peers names: \"" + peers + "\"");

  let installResult = await fabric.installChaincode(chaincodeName,
    chaincodePath, chaincodeType, chaincodeVersion, orgName, peers);
  logger.debug(installResult);
  if (installResult[0]===true) {
    res.status(200).json({"result": "success"});
  } else {
    res.status(500).json({"result": "failed", "error": installResult[1]});
  }

});

router.post('/chaincode/instantiate', async function (req, res) {
  let chaincodeName = req.body.chaincodeName;
  if (typeof chaincodeName === 'undefined') {
    let errMessage = "Request Error, parameter \"chaincodeName\" doesn't exist";
    logger.error(errMessage);
    res.status(400).json({"result": "failed", "error": errMessage});
    return;
  }
  logger.debug("Get chaincode name: \"" + chaincodeName + "\"");

  let chaincodeType = req.body.chaincodeType;
  if (typeof chaincodeType === 'undefined') {
    let errMessage = "Request Error, parameter \"chaincodeType\" doesn't exist";
    logger.error(errMessage);
    res.status(400).json({"result": "failed", "error": errMessage});
    return;
  }
  logger.debug("Get chaincode type: \"" + chaincodeType + "\"");

  let chaincodeVersion = req.body.chaincodeVersion;
  if (typeof chaincodeVersion === 'undefined') {
    let errMessage = "Request Error, parameter \"chaincodeVersion\" doesn't exist";
    logger.error(errMessage);
    res.status(400).json({"result": "failed", "error": errMessage});
    return;
  }
  logger.debug("Get chaincode version: \"" + chaincodeVersion + "\"");

  let channelName = req.body.channelName;
  if (typeof channelName === 'undefined') {
    let errMessage = "Request Error, parameter \"channelName\" doesn't exist";
    logger.error(errMessage);
    res.status(400).json({"result": "failed", "error": errMessage});
    return;
  }
  logger.debug("Get channel name: \"" + channelName + "\"");

  let functionName = req.body.functionName;
  if (typeof functionName === 'undefined') {
    logger.debug("Parameter \"functionName\" doesn't exist, set as null");
    functionName = "";
  } else {
    logger.debug("Get function name: \"" + functionName + "\"");
  }

  let args = req.body.args;
  if (typeof args === 'undefined') {
    logger.debug("Parameter \"args\" doesn't exist, set as null");
    args = [];
  } else {
    logger.debug("Get args: \"" + args + "\"");
  }

  let orgName = req.body.orgName;
  if (typeof orgName === 'undefined') {
    let errMessage = "Request Error, parameter \"orgName\" doesn't exist";
    logger.error(errMessage);
    res.status(400).json({"result": "failed", "error": errMessage});
    return;
  }
  logger.debug("Get org name: \"" + orgName + "\"");

  let peers = req.body.peers;
  if (typeof peers === 'undefined') {
    let errMessage = "Request Error, parameter \"peers\" doesn't exist";
    logger.error(errMessage);
    res.status(400).json({"result": "failed", "error": errMessage});
    return;
  }
  logger.debug("Get peers names: \"" + peers + "\"");

  let instantiateResult = await fabric.instantiateChaincode(chaincodeName,
    chaincodeType, chaincodeVersion, channelName, functionName, args, orgName, peers);
  logger.debug(instantiateResult);
  if (instantiateResult[0]===true) {
    res.status(200).json({"result": "success"});
  } else {
    res.status(500).json({"result": "failed", "error": instantiateResult[1]});
  }

});

router.post('/invoke/:channelName/:chaincodeName', async function (req, res) {
  let channelName = req.params.channelName;
  let chaincodeName = req.params.chaincodeName;

  let args = req.body.args;
  if (typeof args === 'undefined') {
    let errMessage = "Request Error, parameter \"args\" doesn't exist";
    logger.error(errMessage);
    res.status(400).json({"result": "failed", "error": errMessage});
    return;
  }
  logger.debug("Get invoke args: \"" + args + "\"");

  let functionName = req.body.functionName;
  if (typeof functionName === 'undefined') {
    let errMessage = "Request Error, parameter \"functionName\" doesn't exist";
    logger.error(errMessage);
    res.status(400).json({"result": "failed", "error": errMessage});
    return;
  }
  logger.debug("Get function name: \"" + functionName + "\"");

  let orgName = req.body.orgName;
  if (typeof orgName === 'undefined') {
    let errMessage = "Request Error, parameter \"orgName\" doesn't exist";
    logger.error(errMessage);
    res.status(400).json({"result": "failed", "error": errMessage});
    return;
  }
  logger.debug("Get org name: \"" + orgName + "\"");

  let peers = req.body.peers;
  if (typeof peers === 'undefined') {
    let errMessage = "Request Error, parameter \"peers\" doesn't exist";
    logger.error(errMessage);
    res.status(400).json({"result": "failed", "error": errMessage});
    return;
  }
  logger.debug("Get peers names: \"" + peers + "\"");

  let invokeResut = await fabric.invokeChaincode(chaincodeName, channelName, functionName, args, orgName, peers);
  logger.debug(invokeResut);
  if (invokeResut[0]==='yes') {
    res.status(200).json({"result": "success"});
  } else {
    res.status(500).json({"result": "failed", "error": invokeResut[1]});
  }

});

router.post('/query/:channelName/:chaincodeName', async function (req, res) {
  let channelName = req.params.channelName;
  let chaincodeName = req.params.chaincodeName;

  let args = req.body.args;
  if (typeof args === 'undefined') {
    let errMessage = "Request Error, parameter \"args\" doesn't exist";
    logger.error(errMessage);
    res.status(400).json({"result": "failed", "error": errMessage});
    return;
  }
  logger.debug("Get query args: \"" + args + "\"");

  let functionName = req.body.functionName;
  if (typeof functionName === 'undefined') {
    let errMessage = "Request Error, parameter \"functionName\" doesn't exist";
    logger.error(errMessage);
    res.status(400).json({"result": "failed", "error": errMessage});
    return;
  }
  logger.debug("Get function name: \"" + functionName + "\"");

  let orgName = req.body.orgName;
  if (typeof orgName === 'undefined') {
    let errMessage = "Request Error, parameter \"orgName\" doesn't exist";
    logger.error(errMessage);
    res.status(400).json({"result": "failed", "error": errMessage});
    return;
  }
  logger.debug("Get org name: \"" + orgName + "\"");

  let peers = req.body.peers;
  if (typeof peers === 'undefined') {
    let errMessage = "Request Error, parameter \"peers\" doesn't exist";
    logger.error(errMessage);
    res.status(400).json({"result": "failed", "error": errMessage});
    return;
  }
  logger.debug("Get peers names: \"" + peers + "\"");

  let queryResult = await fabric.queryChaincode(chaincodeName, channelName, functionName, args, orgName, peers);
  logger.debug(queryResult);
  if (queryResult[0]===true) {
    res.status(200).json({"result": queryResult[1]});
  } else {
    res.status(500).json({"result": "failed", "error": queryResult[1]});
  }

});


module.exports = router;
