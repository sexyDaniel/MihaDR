let text = 'Батя, с денюхой тебя, с сорока с чем-то летия, нах. Это ещё не всё. Шоб у тебя всё было хорошо, а ещё чтобы всё было хорошо. Понял? Если да, то хорошо.& & &';

$('#audio').play;

let $text = $('#text');


let i = 0;                    

function myLoop (stopTime) {           
   setTimeout(function () {                    
        if (i < text.length) {  
            if(text[i]==='&' ){
                i++;
                $text.append('<sapan>&#128155</sapan>'); 
                myLoop(400);
            }
            $text.append(text[i]); 
            if(text[i]===',' || text[i]==='.'){
                i++;
                myLoop(700);
            }else {
                i++;
                myLoop(150);
            }          
        }                        
   }, stopTime)
}

myLoop(150);

