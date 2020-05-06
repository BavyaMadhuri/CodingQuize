const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");

const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores=JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES =5;
//console.log(highScores);

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () =>{
    saveScoreBtn.disabled = !username.value;  
});

saveHighScore = e => {
    console.log("click on save button");
    e.preventDefault();
    var name1 =username.value.toUpperCase();
    const score ={
        score: mostRecentScore,
        name : name1
    };
  
  
    if([...highScores].some(score=>{
        return score.name == name1 ;
    }))
    {
        var score1;
         [...highScores].some(score=>{
           if(score.name == name1)
           {
              score1 = score;
           }
        });
        if(score1.score<mostRecentScore)
    highScores[highScores.indexOf(score1)]['score']=mostRecentScore;
    }
    else
    highScores.push(score);



    highScores.sort( (a,b) => b.score - a.score);
    /*
    highScores.sort(a,b)
    { return b.score - a.score; }
    */

    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
     window.location.assign("/index.html");
    //console.log(highScores);
};
