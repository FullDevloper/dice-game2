//Тоглогчийн ээлжийг хадгалах хувьсагч ,нэгдүгээр тоглогчийг A ,хоёрдугаар тоглогчийг Bгэж тэмдэглэе
var activePlayer = 1;
//Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var score = [0,0];
//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хуьсагч
var roundScore=0;
//Шооны алт талаараа буусныг хадгалах хувьсагч хэрэгтэй , 1-6 гэсэн утгыг энэ хувьсагчид снамсаргүйгээр үүсгэж өгнө.
var dice = Math.floor(Math.random()*6+1);
// <div class="player-score" id="score-0">43</div>

// HTML Хандах :
//document.querySelector('#score-1').innerHTML="<em> Yes!</em>";

document.querySelector('.dice')
console.log("Шоо "+dice);
//Эхлэхэд бэлтгэх:
// <div class="player-score" id="score-0">43</div>
document.querySelector('#score-0').textContent=0;
document.querySelector('#score-1').textContent=0;
//Шооны оноо 
//document.querySelector('score-0').textContent=dice;
//document.querySelector('score-1').textContent=dice;
//Шоо зураг хайх <img src="dice-5.png" alt="Dice" class="dice">
document.querySelector(".dice").style.display='none';
//авсан оноо 
//<div class="player-current-score" id="current-0">11</div>
document.querySelector('#current-0').textContent=0;
document.querySelector('#current-1').textContent=0;