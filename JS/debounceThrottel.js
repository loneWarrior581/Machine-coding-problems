// Ques1 : 
/** Create a button UI and add debounce 
 * => show button pressed "x times" every time button is pressed 
 * => increase triggered "y times" after 800ms of debounce 
 */


const btn = document.querySelector('.increment');
const btnPressed = document.querySelector('.increment_pressed');
const count = document.querySelector('.increment_count');
var pressedCount = 0;
var triggeredCount = 0;

const debounceImplement = debounce(() => {
    count.innerHTML = ++triggeredCount;
}, 800)

btn.addEventListener('click', () => {
    btnPressed.innerHTML = ++pressedCount;
    debounceImplement();
});
