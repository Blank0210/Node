const shortid  = require("shortid");
const URL = require("../models/url");

async function createShortUrl(req, res) {
    const body = req.body;

    if(!body.url){
        res.status(400)
        .json({
            error: "URL is required"
        })
    }

    const shortId = nanoid(8);
    await URL.create( {
        shortId: shortID,
        redirectUrl: body.url,
        visitHistrory: [],
    });

    return res.render("home",{ 
        id: shortID 
    });
}

async function getAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId })
    return res.json({ totalClicks: result.visitHistrory.length, 
                      analytics: result.visitHistrory });
}
module.exports = {
    createShortUrl,
    getAnalytics
}
