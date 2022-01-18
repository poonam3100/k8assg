const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://poonam:OT8Ejct4c9VpmqQB@cluster0.ehcgo.mongodb.net/                                          ?retryWrites=true&w=majority'
    , (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;
