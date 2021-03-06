//DEPENDENCIES
const moment = require ('moment');
const fs     = require ('fs');

//CUSTOMIZABLES
const startDate = '20171023'; //year, month (2 digits), day (2 digits)
const zoom = 'https://generalassembly.zoom.us/j/598877415'


//BUILDING BLOCKS
var message = "";
var banner = "==========================================\n";
var nextDate = startDate;
var superMessage;


//Make the banners by weeks and days

//week loop
for (let i = 1; i <= 14; i++){
  week = i;
  //day loop
  for (let j = 1; j <=5; j++ ){
    //skip Saturdays and Sundays
    if (moment(nextDate.toString()).format('dddd')==='Friday'){
      addDays = 3;
    } else {addDays = 1;}
    day = j;
    //Build the Message
    message = "\n" +banner;
    message += "Good Morning!\n\n";
    // message += "Good Afternoon!\n\n";
    message += "W" + week + "D"+ j +"\n";
    message += moment(nextDate.toString()).format('dddd, MMMM Do YYYY');
    message += "\n"
    message += "\nZoom: " + zoom + "\n";
    message += banner;

    //compile all the messages into one big blob
    superMessage += message;
    nextDate = moment(nextDate.toString()).add(addDays,'days').toString()
  }
}
// console.log(superMessage)

//save it to a plain text file, not multiple calls will add to the file, not replace it
fs.writeFile("./spaceghost-morning",
// fs.writeFile("./spaceghost-afternoon",
superMessage, function(err){
  if(err){
    return console.log(err);
  }
  console.log("The file was saved")
})
