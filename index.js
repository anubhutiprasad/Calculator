let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = ' ' ;
for(item of buttons)
   { item.addEventListener('click', (e)=>
      {  buttonText = e.target.innerText;  /* e.target.innerText returns the no. in the button */
         console.log('Button text is', buttonText);
         if(buttonText == 'X')
           {  buttonText = '*'
              screenValue += buttonText;
              screen.value = screenValue; /*screen.value means something that displays on screen*/
           }
         else if(buttonText == 'C')
           {  screenValue = ' '
              screen.value = screenValue ;
           }
         else if(buttonText == '=')
           {  screen.value = eval(screenValue); /* eval means evaluation */
             }
         else
           {   screenValue += buttonText;
               screen.value = screenValue; 
           }
      }
   )}
