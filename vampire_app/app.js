// 1. Require your node modules
const mongoose = require("mongoose");
// 2. Require your model (and possibly your extra data source);
const Vampire = require("./models/vampire")
// 3. Connect your database and collection name
const vampireArray = require("./populateVampires");
// 4. Open your mongoose connection
const connectionString = "mongodb://localhost/test";
mongoose.connect(connectionString);
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
Vampire.collection.insertMany(vampireArray, (err, data) => {
    if(err){
        console.log("added vampire data");
    } else {
        console.log(data);
        Vampire.find({name:"Dracula"});;
    }
});
// ### Add some new vampire data
// Vampire.create({name: "Deeter", hair_color: "brown", victims: 0,  gender: "m"}, (err, newVamp) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(newVamp);
//     }
// });
// Vampire.create({name: "ur mom", hair_color: "white", victims: 5,  gender: "f"}, (err, newVamp) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(newVamp);
//     }
// });
// Vampire.create({name: "ur da", hair_color: "none", victims: 1,  gender: "m"}, (err, newVamp) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(newVamp);
//     }
// });
// Vampire.create({name: "hammarabi", hair_color: "black", victims: 10000, gender: "f"}, (err, newVamp) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(newVamp);
//     }
// });
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// Vampire.find({gender: "f"}, (err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log("WAMEN");
//         console.log(data);
//     }
// // });
// Vampire.find({victims: {$gt: 500}}, (err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log("GREATER THAN 500");
//         console.log(data);
//     }
// });
// Vampire.find({victims: {$lt: 150}}, (err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log("MAXIMUM 150");
//         console.log(data);
//     }
// });
// Vampire.find({$or: [{victims: {$lt: 210234}}, {victims: {$gt: 210234}}]}, (err, data) => {
//     // I know I could've just done $lt 210234, but I wanted to figure out this functionality
//     if(err){
//         console.log(err);
//     } else {
//         console.log("EVERYONE BUT AKASHA");
//         console.log(data);
//     }
// });
// Vampire.find({victims: {$gt: 150, $lt: 501}}, (err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log("MINIMUM 151, maximum 500");
//         console.log(data);
//     }
// });
/////////////////////////////////////////////////
// ### Select by exists or does not exist
// Vampire.find({title: {$exists: true}}, (err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });
// Vampire.find({victims: {$exists: false}}, (err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });
// Vampire.find({$and: [{title: {$exists: true}}, {victims: {$exists: false}}]}, (err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });
// Vampire.find({victims: {$gt: 1000}}, (err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });
/////////////////////////////////////////////////
// ### Select with OR
// are from New York, New York, US or New Orleans, Louisiana, US
Vampire.find({$or: [{location: "New York, New York, US"},{location: "New Orleans, Louisiana, US"}]}, (err, data) => {
        if(err){
            console.log(err);
        } else {
            console.log(data);
        }
    });
// love brooding or being tragic
Vampire.find({$or: [{loves: "brooding"},{loves: "being tragic"}]}, (err, data) => {
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});
// have more than 1000 victims or love marshmallows
Vampire.find({$or: [{victims: {$gt: 1000}},{loves: "marshmallows"}]}, (err, data) => {
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});
// have red hair or green eyes
Vampire.find({$or: [{location: "New York, New York, US"},{location: "New Orleans, Louisiana, US"}]}, (err, data) => {
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});
/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// Vampire.deleteMany({}, (err, data) =>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// mongoose.connection.close();

/////////////////////////////////////////////////
/////////////////////////////////////////////////


mongoose.connection.on("connected", () => {
    console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on("disconnected", () => {
    console.log(`Mongoose is disconnected`);
});

mongoose.connection.on("error", (err) => {
    console.log(err, `Mongoose error`);
});