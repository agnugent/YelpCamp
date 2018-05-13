var mongoose    = require('mongoose');
var Campground  = require('./models/campground');
var Comment     = require('./models/comment');

var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.pexels.com/photos/803226/pexels-photo-803226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        description: "orem ipsum dolor sit amet, dicam eruditi te mea. Cum falli commodo ut, vix ea paulo invidunt senserit. Partem noster id sea, wisi dicunt aperiam per ad. Et ludus primis ceteros sit, sit ferri molestie ex, et affert tibique consequuntur eam. Probo illum mei id. Sed copiosae atomorum inimicus ad."
    },
    {
        name: "Desert Mesa",
        image: "https://images.pexels.com/photos/260593/pexels-photo-260593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        description: "orem ipsum dolor sit amet, dicam eruditi te mea. Cum falli commodo ut, vix ea paulo invidunt senserit. Partem noster id sea, wisi dicunt aperiam per ad. Et ludus primis ceteros sit, sit ferri molestie ex, et affert tibique consequuntur eam. Probo illum mei id. Sed copiosae atomorum inimicus ad."
    },
    {
        name: "Canyon Floor",
        image: "https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        description: "orem ipsum dolor sit amet, dicam eruditi te mea. Cum falli commodo ut, vix ea paulo invidunt senserit. Partem noster id sea, wisi dicunt aperiam per ad. Et ludus primis ceteros sit, sit ferri molestie ex, et affert tibique consequuntur eam. Probo illum mei id. Sed copiosae atomorum inimicus ad."
    }
];

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err) {
            console.log(err);
        }
        console.log('REMOVED CAMPGROUNDS!');
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log('added a campground');
                    //create a comment
                    Comment.create(
                        {text: 'This place is great, but I wish there was internet',
                        author: "Homer"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        } else {
                        campground.comments.push(comment);
                        campground.save();
                        console.log("Created new comment");
                        }
                    });
                }
            });
        });
    });
    //add a few comments
}

module.exports = seedDB;