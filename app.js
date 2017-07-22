var mongo = require('mongodb').MongoClient();
var prompt = require('prompt-sync')();
var url = 'mongodb://localhost:27017/restaurant_db';

mongo.connect(url, function(err, db) {
  var collection = db.collection('restaurants');

  //All database methods have been commented out to avoid thoroughly messing up the database every time "node app.js" is run. The two homework prompts start at line 40. 

  //README Codealong
  // var allChoice = prompt('Type "all" and press enter to display all restaurants\'s names: ');
  // if (allChoice == 'all') {
  //   collection.find().toArray(function(error, docs) {
  //   console.log(docs);
  //   });
  // } else {
  //   console.log('Aw, you don\'t want to see the restaurants?');
  // }

  //Task 1: Finding A Specific Restaurant in the DB
  // var findChoice = prompt('Enter a restaurant.');
  // collection.find({"name": findChoice}).toArray(function(error, doc) {
  //     console.log(doc);
  // });
  
  //Task 2: Creating A Prompt To Add Restaurants to the DB
  // var name = prompt('To add a restaurant, type its name: ');
  // var address = {};
  // var stAddress = prompt('Enter that restaurant\'s street address: ');
  // var zipcode = prompt('Enter that restaurant\'s zipcode: ');
  // var yelpLink = prompt('Enter that restaurant\'s Yelp url: ');

  // collection.insert({name: name, address: {street: stAddress, zipcode: zipcode}, yelp: yelpLink}, function(err, doc) {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log(doc);
  // });

  // Homework 1: Create a prompt for users to edit restaurants
  // var rstrntToEdit = prompt('Which restaurant would you like to edit?');
  //   //BE PREPARED FOR YOUR TERMINAL TO YELL AT YOU REPEATEDLY HERE; COULDN'T FIGURE OUT WHY, BUT DON'T WORRY TOO MUCH, IT'LL STILL WORK!
  // var whetherToEdit = prompt('Okay, which field would you like to edit? You can enter "name", "street", "zipcode", "yelp", without quotes. If you changed your mind and don\'t actually want to edit anything, enter "exit" without quotes. ');
  //   editField();

  // function editField() {
  //   switch (whetherToEdit.toLowerCase()) {
  //     case 'name':
  //       var name = prompt('Cool! Enter the new name: ');
  //       collection.update({name: rstrntToEdit}, {$set: {name: name}}, function(err, doc) {
  //         if(err) {
  //           console.log(err);
  //         }
  //         console.log(rstrntToEdit + ' name edited! Ctrl+C to exit.');
  //       });
  //       break;
  //     case 'street': 
  //       var street = prompt('Okay, enter the new street adress: ');
  //       collection.update({name: rstrntToEdit}, {$set: {street: street}}, function(err, doc) {
  //         if(err) {
  //           console.log(err);
  //         }
  //         console.log(rstrntToEdit + ' street edited! Ctrl+C to exit.');
  //       });
  //       break;
  //     case 'zipcode':
  //       var zipcode = prompt('Noice! Enter the new zipcode: ');
  //       collection.update({name: rstrntToEdit}, {$set: {zipcode: zipcode}}, function(err, doc) {
  //         if(err) {
  //           console.log(err);
  //         }
  //         console.log(rstrntToEdit + ' zipcode edited! Ctrl+C to exit.');
  //       });
  //       break;
  //     case 'yelp': 
  //       var yelp = prompt('Sweet. Enter the new Yelp url: ');
  //       collection.update({name: rstrntToEdit}, {$set: {yelp: yelp}}, function(err, doc) {
  //         if(err) {
  //           console.log(err);
  //         }
  //         console.log(rstrntToEdit + ' Yelp URL edited! Ctrl+C to exit.');
  //       });
  //       break;
  //     case 'exit':
  //       console.log('Bye!');
  //       break;
  //     default: 
  //       console.log('Command not recognized. Ctrl+C to exit.');
  //   }
  // }

  //Homework 2: Create a prompt for users to delete restaurants
  // var rstrntToDelete = prompt('Which restaurant would you like to delete? WARNING: entering a restaurant\'s name and pressing ENTER will permanently delete all documents in the database with that name! ');

  // collection.remove({name: rstrntToDelete}, function(err, doc) {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log('Restaurant deleted. Ctrl + C to exit');
  // });
});
