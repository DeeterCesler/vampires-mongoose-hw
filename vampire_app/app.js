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
// Vampire.collection.insertMany(vampireArray, (err, data) => {
//     if(err){
//         console.log(err);
//         console.log("added vampire data");
//     } else {
//         console.log(data);
//         Vampire.find({name:"Dracula"});;
//     }
// });
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
// });
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
// Vampire.find({$or: [{location: "New York, New York, US"},{location: "New Orleans, Louisiana, US"}]}, (err, data) => {
//         if(err){
//             console.log(err);
//         } else {
//             console.log(data);
//         }
//     });
// love brooding or being tragic
// Vampire.find({$or: [{loves: "brooding"},{loves: "being tragic"}]}, (err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });
// have more than 1000 victims or love marshmallows
// Vampire.find({$or: [{victims: {$gt: 1000}},{loves: "marshmallows"}]}, (err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });
// have red hair or green eyes
// Vampire.find({$or: [{hair_color: "red"},{eye_color: "green"}]}, (err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });
/////////////////////////////////////////////////
//### Select objects that match one of several values
// Vampire.find({$or: [{"loves":"frilly shirtsleeves"}, {"loves": "frilly collars"}]}, (err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log("==========SON===========");
//         console.log(data);
//     }
// })
// Vampire.find({"loves":"brooding"}, (err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })
// Vampire.find({$or: [{"loves":"appearing innocent"}, {"loves": 'trickery'},{"loves": "lurking in rotting mansions"},{"loves":"R&B music"}]}, (err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })
// Vampire.find({$and: [{"loves":"fancy cloaks"}, {$nin: [{"loves": 'top hats'},{"loves": "virgin blood"}]}]}, (err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })
/////////////////////////////////////////////////
//### Negative Selection
// Vampire.find({$and: [{"loves":"ribbons"}, {$nin: [{"eye_color": 'brown'}]}]}, (err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })
// Vampire.find({$nin: [{"location": 'Rome, Italy'}]}, (err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })
// Vampire.find({$nin: [{"loves": ["fancy cloaks", "frilly shirtsleeves", "appearing innocent", "being tragic", "brooding"]},]}, (err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })
// Vampire.find({$not: {"victims": {$gt: 200}}}, (err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

// Vampire.findOneAndUpdate({"name": "Claudia"},{$set:{"name":"Eve","portrayed_by":"Tilda Swinton"}}, (err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("heyyyy")
//         console.log(data)
//     }
// });
// Vampire.findOneAndUpdate({"gender": "m"},{$set:{"name":"Guy Man","is_actually":"were-lizard"}},(err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE
// Vampire.findOneAndUpdate({"name": "Guy Man"},{$set:{"gender":"f"}},(err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// });
// Vampire.findOneAndUpdate({"name": "Eve"},{$set:{"gender":"m"}},(err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// });
// Vampire.findOneAndUpdate({"name": "Guy Man"},{$set:{"hates": ["clothes", "clothes"]}},(err, data)=>{
//     if(err){
//         console.log("=========DOGGIES==========")
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// });
Vampire.findOneAndUpdate({"name": "Guy Man"},{$push:{"hates":[..."alarm clocks","jackalopes"]}},(err, data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
});
Vampire.findOneAndUpdate({"name": "Eve"},{$rename:{"name":"moniker"}},(err, data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
});
Vampire.updateMany({"gender": "f"},{$set:{"gender":"fems"}},(err, data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
});

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

console.log("=≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠")
// Vampire.deleteMany({}, (err, data) =>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });
console.log("=≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠")

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