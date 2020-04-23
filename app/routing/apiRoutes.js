var friendData = require("../data/friends.js")
console.log(friendData)
module.exports = function(app) {
    app.get("/api/friends",function(req,res){
        res.json(friendData)
    })

    app.post("/api/friends",function(req,res){
        var newFriend = req.body;
        var bestie = {};
        var bestScore = 0;
        
        for(var i=0;i<friendData.length;i++){
            var totalScore = 0;
            for(var j=0;j<friendData[i].scores.length;j++) {
                totalScore = totalScore + Math.abs(friendData[i].scores[j]-newFriend.scores[j]);
            }
            if (i===0) {
                bestScore = totalScore;
                bestie = friendData[i]
            } else if(bestScore>totalScore) {
                bestScore = totalScore;
                bestie = friendData[i] 
            }
            
        }
        friendData.push(newFriend)
        res.json(bestie)

    })
}