# workshop-to-scrape-webpage


package.json - dependencies of the project are listed.

scrape - There are 2 files in scrape folder
         1. controller.js -> It is lambda handler. First function called once endpoint is hit. Controller invokes function in the model.
         2. model.js -> Functions are defined in this file. It returns response to controller based on the input value.

test - This folder has a file called scrapeTest.js
        1. scrapeTest.js -> This file has test cases written using chai. Fuctions defined in the model are called here to check possible scenarios.
