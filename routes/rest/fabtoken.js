'use strict';

let express = require('express');
let router = express.Router();

let log4js = require('log4js');
let logger = log4js.getLogger('REST');
logger.level = 'DEBUG';

let fabric = require('../fabric-op');
let common = require('./common');

router.post('/fabtoken/issue', async function (req, res) {

  let checkResult = common.checkParameters(req.body, 'issuer', 'issueTo', 'issueType', 'issueQuantity',
    'channelName', 'orderers', 'peers', 'orgName');
  if (!checkResult[0]) {
    res.status(400).json({"result": "failed", "error": checkResult[1]});
    return;
  }

  let checkIssuerResult = common.checkParameters(req.body.issuer, 'username', 'orgMSPId', 'privateKeyPEM',
    'signedCertPEM');
  if (!checkIssuerResult[0]) {
    res.status(400).json({"result": "failed", "error": checkIssuerResult[1]});
    return;
  }

  let checkIssueToResult = common.checkParameters(req.body.issueTo, 'username', 'orgMSPId', 'privateKeyPEM',
    'signedCertPEM');
  if (!checkIssueToResult[0]) {
    res.status(400).json({"result": "failed", "error": checkIssueToResult[1]});
    return;
  }

  let issueResult = await fabric.issueFabtoken(req.body.issuer, req.body.issueTo, req.body.issueType,
    req.body.issueQuantity, req.body.channelName, req.body.orderers, req.body.peers, req.body.orgName);
  logger.debug(issueResult);
  if (issueResult[0] === true) {
    res.status(200).json({"result": "success"});
  } else {
    res.status(500).json({"result": "failed", "error": issueResult[1]});
  }
});

module.exports = router;