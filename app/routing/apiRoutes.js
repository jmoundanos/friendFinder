var friendData = require("../data/friends.js");

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		return res.json(friendData);
	});

	app.post("/api/friends", function(req, res) {
        //get friend scores from friends.js
        var friendScores = req.body.scores;
        //make new array to send the compared scores to
        var scoresArray = [];
        //set variable for best match
        var bestFriend = 0;

        //iterate through friends data
        for(var i=0; i<friendData.length; i++){
            var diffScores = 0;
            //compare scores
            for(var j=0; j<friendScores.length; j++){
                diffScores += (Mat.abs(parseInt(friendData[i].scores[j])- parseInt(friendScore[j])));
            }
            //push scores into array
            scoresArray.push(diffScores);
        }
        //find best friend match
        for(var i=0; i<scoresArray.length; i++){
            if(scoresArray[i] <= scoresArray[bestFriend]){
                bestFriend = i;
            }
        }
        //return best friend
        res.json(friendData[bestFriend]);
        friendData.push(req.body);
    });
    
};