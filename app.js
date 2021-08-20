// Тоглогчийн ээлжийг халгалах хувьсагч  нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 2
var activePlayer=1;

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
document.querySelector(".btn-roll").addEventListener('click',function(){
    // dice ali talaaraa 1-6 hurtel uusgeh
    var diceNumber=Math.floor(Math.random()*6)+1;
    // Shoog buusan toogoor ni haruulah
    DiceDom.style.display="block";
    DiceDom.src = "dice-"+diceNumber + ".png";
    if(diceNumber!==1)
    {
        roundScore=roundScore+diceNumber;
        document.getElementById("current-"+activePlayer).textContent=roundScore;
    }
    else
    {
       SwitchNextPlayer();
    }
    });
    // Hold evenlist 
    document.querySelector('.btn-hold').addEventListener('click',function(){
        //Уг тоглогчийн цуглуулссан оноог глобалд нэмж өгнө.
    //     if(activePlayer===0)
        // {
            //score[0]=score[0]+roundScore;
        //}
        //else
        
        //    score[1]=score[1]+roundScore;
        score[activePlayer]=score[activePlayer]+roundScore;
       //score[activePlayer]=score[activePlayer]+roundScore;
       document.getElementById('score-'+activePlayer).textContent=score[activePlayer];
        // тоглогчийн ээлжийг солих ) болгох
        // Ялагчийг олох
        if(score[activePlayer]>=20)
        {
            document.getElementById('name-'+activePlayer).textContent="Winner !!!";
            document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
            document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
            

        }
        else
        {
            SwitchNextPlayer();
        }
     
     
        
    });
    function SwitchNextPlayer()
    {
        
          
        roundScore=0;
        document.getElementById("current-"+activePlayer).textContent=0;
        DiceDom.style.display="none";
        document.querySelector(".player-0-panel").classList.toggle("active"); 
        document.querySelector(".player-1-panel").classList.toggle("active");
        // Нэг буусан тохиолдолд тоглогчийн ээлжийг солино
        if(activePlayer===0)
        {
            activePlayer=1;
        }
        else
        {
            activePlayer=0;
        }
    }


    //Тоглоомыг шинээр эхлүүлэх эвент листенер
    

