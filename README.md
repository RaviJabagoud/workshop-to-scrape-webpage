# workshop-to-scrape-webpage


package.json - dependencies of the project are listed.

scrape - There are 2 files in scrape folder
         1. controller.js -> It is lambda handler. First function to be called once endpoint is hit. Controller inturn calles function in the model.
         2. model.js -> This file has all the code related to buisness logic. It returns response to controller based on the input value.

test - This folder has a file called scrapeTest.js
        1. scrapeTest.js -> This file has test cases written using chai. Fuctions defined in the model are called here to check possible scenarios.
