const mongoose = require('mongoose');
const Connection = async()=>{
    try {
        mongoose.connect(`mongodb+srv://sumitjadav2525:qalBZcfk2YZA9sCa@generic.lc9yph3.mongodb.net/?appName=generic`);
        console.log('Database Connection Success...');
    } catch (error) {
        console.log('Database Connection Failed !!!!');
    }
}

module.exports = Connection;
