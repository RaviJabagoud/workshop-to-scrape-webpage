var scrape = require('./model');

module.exports.scrapePage  = async (event) => {
    try {
        return await scrape.scrapePage(event);
    } catch (err) {
        return err;
    }
};