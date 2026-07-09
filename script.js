const faqQ = document.querySelectorAll('.faq-question');

console.log(faqQ);

faqQ.forEach(q => {
    const item = q.parentElement;
    const ans = item.querySelector('.faq-answer');
    q.addEventListener('click', () => {
        ans.classList.toggle('active');
    })
})