const axios = require('axios');
const payload = {
    text: process.env.SLACK_TEXT
};

(async () => await axios.post(
    process.env.WEBHOOK_URL,
    payload
))();
