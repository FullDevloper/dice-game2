// Тоглогчийн ээлжийг халгалах хувьсагч  нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 2
var activePlayer=0;

// Тоглогчийн ээлжинд 
var score=[0,0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore=0;


// Тоглогчийн оноог солих 
//<div class="player-score" id="score-0">43</div>
document.getElementById("score-0").textContent="0";
document.getElementById("score-1").textContent="0";
document.getElementById("current-0").textContent="0";
document.getElementById("current-1").textContent="0";
var DiceDom=document.querySelector(".dice");

DiceDom.style.display="none";
// Btn roll eventtei holboj ajluulah
document.querySelector(".btn-roll").addEventListener('click',function(){// dice ali talaaraa 1-6 hurtel uusgeh
    var diceNumber=Math.floor(Math.random()*6)+1;
    // Shoog buusan toogoor ni haruulah
    DiceDom.style.display="block";
    DiceDom.src = "dice-"+diceNumber + ".png";
    });



