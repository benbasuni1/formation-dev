// const { arrayHelper: utils, log, line } = require('../../__common/utils');
const logger = require('../_utils/logger');

const runningSum = nums => {
    let res = [];
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        res.push(sum += nums[i]);
    }

    return res;
}

