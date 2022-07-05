const express = require('express');
const https = require('https');
const router = express.Router();

router.get('/repos/:owner/:repo/issues', async (req, res) => {
    const owner = req.params.owner;
    const repo = req.params.repo;
    const per_page = req.query.per_page;
    const direction = req.query.direction;
    const sort = req.query.sort;
    const options = {
        hostname: 'api.github.com',
        path: encodeURI('/repos/' + owner + '/' + repo + '/issues?' + 'per_page= ' + per_page + '&' + 'direction=' + direction + '&' + 'sort=' + sort),
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
            'Accept': 'application/vnd.github+json',
            'Authorization': 'token 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',
        },
    }

    https.get(options, responseApi => {
        responseApi.pipe(res);
    }).on('error', (e) => {
        console.log(e.message);
        res.status(500).send('Что-то пошло не так!');
    })
})

module.exports = router;