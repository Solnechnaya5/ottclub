let openers = document.querySelectorAll('.faq-item__top');
let faqAnswer = document.querySelectorAll('.faq-answer');
let faqArrow = document.querySelector('.faq-item__top img');
let faqSection = document.querySelector('.faq');

function removeOpenClass() {
    faqAnswer.forEach((faqAnswer) => faqAnswer.classList.remove('open'));
  }

for (let i = 0; i < openers.length; i++) {
    openers[i].onclick = function openAnswer() {
        
        openers[i].classList.toggle('transform');
        faqAnswer[i].classList.toggle('open');
        if (faqAnswer[i].classList.contains('open')) {
            console.log(55)
            faqSection.classList.add('open');
            
            }else{
                faqSection.classList.remove('open');
            }
    }
    

}