const request = require('request');
const cheerio = require('cheerio');
const HTML = require('node-html-parser');


const getRequestURLBody = async (url) => {
    return new Promise((resolve, reject) => {
        request.get(url, function (err, res, html) {
            if (err) {
                reject("Failed to read given input url");
            } else {
                resolve(html);
            }
        });
    })
}

const scrapeOGMetaDataTags = async (html) => {
    return new Promise((resolve, reject) => {
        const parsedDOM = HTML.parse(html);
        const imageTags = [];
        const scrapedData = {};
        parsedDOM.querySelectorAll('meta').forEach((metaData) => {
            switch (metaData.getAttribute('property')) {
                case 'og:title': scrapedData.title = metaData.getAttribute('content');
                    break;
                case 'og:description': scrapedData.description = metaData.getAttribute('content');
                    break;
                case 'og:keywords': scrapedData.keywords = metaData.getAttribute('content');
                    break;
                case 'og:url': scrapedData.url = metaData.getAttribute('content');
                    break;
                case 'og:type': scrapedData.type = metaData.getAttribute('content');
                    break;
                case 'og:image': imageTags.push(metaData.getAttribute('content'));
                    break;
                case 'og:image:url': imageTags.push(metaData.getAttribute('content'));
                    break;
                //We can add few more og tags if they are defined in some pages
                default: break;
            }

        });

        if (imageTags.length > 0) {
            scrapedData.images = imageTags;
        }

        (Object.keys(scrapedData).length > 0) ? resolve(scrapedData) : reject("No matching OG tag");

    });
}

const validateInputURL = function (url) {
    return url && /((http(s)?):\/\/[\w\.\/\-=?#]+)/i.test(url);
}

async function scrapePage(event) {
    try {
        const url = event.body.url;
        if (validateInputURL(url)) {
            let html = await getRequestURLBody(url);
            let data = await scrapeOGMetaDataTags(html);
            return ({
                success: true,
                data: data,
                message: "Data scraped successfully"
            });
        }
        else {
            return ({
                success: false,
                message: "Invalid input URL"
            });
        }
    } catch (error) {
        return ({ success: false, error: error });
    }
}


module.exports = {
    scrapePage,
    getRequestURLBody,
    scrapeOGMetaDataTags
}