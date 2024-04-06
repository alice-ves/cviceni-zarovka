const bulb = document.querySelector('.bulb');

/*const lightOn = () => {
  bulb.classList.toggle('bulb--on');
};
document.addEventListener('keydown', lightOn);
*/

document.addEventListener('keydown', () => {
  bulb.classList.toggle('bulb--on');
});
