var credentials = {
    username: 'yunki6227@gmail.com',
    password: '02Yjc020522!'
};

var Robinhood = require('robinhood')(credentials, function(err, data){

    //Robinhood is connected and you may begin sending commands to the api.

    console.log("bruh");

    Robinhood.quote_data('AAPL', function(error, response, body) {
        if (error) {
            console.error(error);
            process.exit(1);
        }
        console.log(body);
    });

});