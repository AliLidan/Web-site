 /*//<script type="text/javascript">
    // we define answers
    var answers = ["It is certain", 
                   "It is decidedly so", 
                   "Without a doubt", 
                   "Yes - definitely",
                   "You may rely on it", 
                   "As I see it, yes", 
                   "Most likely", 
                   "Outlook good", 
                   "Yes", "Signs point to yes",
                   "Don't count on it", 
                   "My reply is no",
                   "My sources say no", 
                   "Outlook not so good",
                   "Very doubtful", 
                   "Reply hazy, try again", 
                   "Ask again later", 
                   "Better not tell you now",
                   "Cannot predict now", 
                   "Concentrate and ask again"];
    
   // window.onload = function() {
	function myFunction(){
       var eight = document.getElementById("eight");
       var answer = document.getElementById("answer");
       var eightball = document.getElementById("eightball");
     //  var question = document.getElementById("question");
       
       eightball.addEventListener("onclick", myFunction(){
       //  if (question.value.length < 1) {
        //   alert('Enter a question!');
       //  } else {
           //eight.innerText = "";
           var num = Math.floor(Math.random() * Math.floor(answers.length));
           answer.innerText = answers[num];
         //}
       });
    };
 // </script>
  
 // <style type="text/css">
 
 */

    var answers = [" Хорошего дня!", 
                   " У тебя все получится!", 
                   " Не сдавайся!", 
                   " Твой труд всех сразит.",
                   " Хороший день, чтобы сделать свою работу.", 
                   " Вижу твоё желание поработать тебя победит.", 
                   " Ты лучший программист и веб-разработчик и ...", 
                   " Сегодня твой день!", 
                   " Ты достигнишь своей цели!",
                   " Я верю в тебя!", 
                   " Будь здоров!",
                   " Счастье - залог успеха.", 
                   " Все будет хорошо.",
                   " Вперед!", 
                   " Этот день обещает быть продуктивным.", 
                   " Помоги сделать этот день лучше.", 
                   " Все получится.",
                   " Не забывай - сейчас какой-нибудь админ сайта думает о тебе.", 
                   " Побори свою лень!Давай :)",
				   " Если ты не сделаешь - никто не сможет!"];
    
    window.onload = function() {
       var eight = document.getElementById("eight");
       var answer = document.getElementById("answer");
       var eightball = document.getElementById("eight-ball");
       
       eightball.addEventListener("click", function() {
           var num = Math.floor(Math.random() * Math.floor(answers.length));
           answer.innerText = answers[num];
         
       });
    };