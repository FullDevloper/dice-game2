// Тоглогчийн ээлжийг халгалах хувьсагч  нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 2
var activePlayer=0;

// Тоглогчийн ээлжинд 
var score=[0,0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore=0;
// dice ali talaaraa 1-6 hurtel uusgeh
var dice=Math.floor(Math.random()*6)+1;

// Тоглогчийн оноог солих 
//<div class="player-score" id="score-0">43</div>
window.document.querySelector('#score-0').textContent=0;
window.document.querySelector('#score-1').textContent=0;
document.querySelector('#current-1').textContent=0;
document.querySelector('#current-0').textContent=0;
document.querySelector(".dice").style.display="none";


