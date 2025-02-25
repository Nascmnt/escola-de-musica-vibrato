const accordions = document.querySelectorAll('.accordion');

accordions.forEach(acord => {
    acord.addEventListener('click', () => {
        const accordionBody = acord.querySelector('.accordion-body');
        const header = acord.querySelector('.accordion-header');
        const arrow = acord.querySelector('.arrow');

        // Alternar a classe active no corpo do accordion
        accordionBody.classList.toggle('active');
        header.classList.toggle('active');
        acord.classList.toggle('active');

        // Alternar a rotação da seta
        arrow.style.transform = accordionBody.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
    });
});