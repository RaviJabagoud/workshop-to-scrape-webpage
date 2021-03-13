const { expect } = require('chai');
const model = require('../scrape/model');

describe('Scrape Feature Tests', () => {


    it('getRequestURLBody valid case', async () => {
        const results = await model.getRequestURLBody("https://www.flipkart.com/samsung-galaxy-f62-laser-green-128-gb/p/itm3659bc5ac2601?pid=MOBFZWSUEMTZDC7U&lid=LSTMOBFZWSUEMTZDC7UZERVOF&param=8879&otracker=clp_bannerads_1_3.bannerAdCard.BANNERADS_Samsung%2BF62_mobile-phones-store_VX3EJDP7REW9");
        expect(results).to.be.a('string');
    });


    it('getRequestURLBody invalid case', async () => {
        const results = await model.getRequestURLBody("https://www.ravi.com");
        expect(results).to.be.a('string');
    });

    it('scrapePage valid case to check success value', async () => {
        const results = await model.scrapePage({ "body": { "url": "https://www.flipkart.com/samsung-galaxy-f62-laser-green-128-gb/p/itm3659bc5ac2601?pid=MOBFZWSUEMTZDC7U&lid=LSTMOBFZWSUEMTZDC7UZERVOF&param=8879&otracker=clp_bannerads_1_3.bannerAdCard.BANNERADS_Samsung%2BF62_mobile-phones-store_VX3EJDP7REW9" } });
        expect(results).to.have.property('success').to.be.true
    });


    it('scrapePage valid case to check title property inside data', async () => {
        const {data} = await model.scrapePage({ "body": { "url": "https://www.flipkart.com/samsung-galaxy-f62-laser-green-128-gb/p/itm3659bc5ac2601?pid=MOBFZWSUEMTZDC7U&lid=LSTMOBFZWSUEMTZDC7UZERVOF&param=8879&otracker=clp_bannerads_1_3.bannerAdCard.BANNERADS_Samsung%2BF62_mobile-phones-store_VX3EJDP7REW9" } });
        expect(data).to.have.property('title')
    });

    it('scrapePage valid case to check description property inside data', async () => {
        const {data} = await model.scrapePage({ "body": { "url": "https://www.flipkart.com/samsung-galaxy-f62-laser-green-128-gb/p/itm3659bc5ac2601?pid=MOBFZWSUEMTZDC7U&lid=LSTMOBFZWSUEMTZDC7UZERVOF&param=8879&otracker=clp_bannerads_1_3.bannerAdCard.BANNERADS_Samsung%2BF62_mobile-phones-store_VX3EJDP7REW9" } });
        expect(data).to.have.property('description')
    });

    it('scrapePage valid case to check message', async () => {
        const response = await model.scrapePage({ "body": { "url": "https://www.flipkart.com/samsung-galaxy-f62-laser-green-128-gb/p/itm3659bc5ac2601?pid=MOBFZWSUEMTZDC7U&lid=LSTMOBFZWSUEMTZDC7UZERVOF&param=8879&otracker=clp_bannerads_1_3.bannerAdCard.BANNERADS_Samsung%2BF62_mobile-phones-store_VX3EJDP7REW9" } });
        console.log("RESPONSE ", JSON.stringify(response));
        expect(response).to.have.property('message')
    });

})