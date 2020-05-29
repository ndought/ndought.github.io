const copyRight = document.querySelector('.main-footer large');
const currentYear = new Date().getFullYear();
copyRight.innerText = copyRight.innerText.replace(
  '{{copyRightYear}}',
   currentYear
 );