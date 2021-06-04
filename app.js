
//Шооны алт талаараа буусныг хадгалах хувьсагч хэрэгтэй , 1-6 гэсэн утгыг энэ хувьсагчид снамсаргүйгээр үүсгэж өгнө.

// <div class="player-score" id="score-0">43</div>

// HTML Хандах :
//document.querySelector('#score-1').innerHTML="<em> Yes!</em>";

//document.querySelector('.dice')
//console.log("Шоо "+dice);
var activePlayer,score,roundScore;

//document.querySelector('#score-0').textContent=0;
//document.querySelector('#score-1').textContent=0;
//Шооны оноо 
//document.querySelector('score-0').textContent=dice;
//document.querySelector('score-1').textContent=dice;
//Шоо зураг хайх <img src="dice-5.png" alt="Dice" class="dice">
var diceDom = document.querySelector(".dice");
function initGame()
{

    //Тоглогчийн ээлжийг хадгалах хувьсагч ,нэгдүгээр тоглогчийг A ,хоёрдугаар тоглогчийг Bгэж тэмдэглэе
 activePlayer = 0;
//Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
 score = [0,0];
//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хуьсагч
 roundScore=0;
//Эхлэхэд бэлтгэх:
// <div class="player-score" id="score-0">43</div>
// Query gee iluu hurdan ajilladag
document.getElementById("score-0").textContent="0";
document.getElementById("score-1").textContent="0";
//<div class="player-current-score" id="current-0">11</div>
//document.querySelector('#current-0').textContent=0;
document.getElementById("current-0").textContent="0";
document.getElementById("current-1").textContent="0";
//document.querySelector('#current-1').textContent=0;
diceDom.style.display="none";
document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-0').textContent='Player 2';
}

//авсан оноо 

//Товч хийх шоо шидэх  эвент листенер

document.querySelector(".btn-roll").addEventListener("click",function ()
{
    //1-ээс 6 хүртэл санамсаргүй тоо буулгах
    var diceNumber = Math.floor(Math.random()*6+1);
    //Шоо зураг гаргаж ирнэ
    diceDom.style.display="block";
//Буусан санамсаргүй тоонд харгалзах шооны зургийг харуулна
    diceDom.src="dice-"+diceNumber+".png";
    //Буусан  тоо нэгээс ялгаатай бол  идэвхтэй тоглогчийн оноог  нэмэгдүүлнэ
    if(diceNumber!==1)
    {
        //1 ээс ялгаатай тоо буулаа
        roundScore=roundScore+diceNumber;
        document.getElementById("current-"+activePlayer).textContent=roundScore;
    }
    else
    {
        switchNextplayer();
    }

    
});
//Hold товч 
document.querySelector(".btn-hold").addEventListener("click",function()
{
    //Уг тоглогчийн ээлжийн оноог глобаль дээр харуулах
    score[activePlayer]+=roundScore;
    // Оноог дэлгэцэнд харуулах
    document.getElementById('score-'+activePlayer).textContent=score[activePlayer];

    // Toglogch hojson esehiig shalgah
    if(score[activePlayer]>=100)
    {
        // Yalagchiin nernii orond yalsan bichig
        document.getElementById('name-'+activePlayer).textContent='Winner';
    }
  else
  {
      switchNextplayer();
  }
    
});
// Тоглогчийн ээлжийг солих функц
function switchNextplayer()
{
    roundScore=0;
    //нэг ээлжинд олсон оноог 0 болгож өөрчиднө
    document.getElementById("current-"+activePlayer).textContent=0;
    //Тоглогчийн ээлжийг солих
    activePlayer===0?(activePlayer=1):(activePlayer =0);
    
   // Улаан цэгийг шилжүүлэх
   document.querySelector(".player-0-panel").classList.toggle("active");
   document.querySelector(".player-1-panel").classList.toggle("active");
   // Шоог түр алга болгох
   diceDom.style.display="none";
}

// Shineer ehluuleh
document.querySelector('.btn-new').addEventListener('click',initGame);
