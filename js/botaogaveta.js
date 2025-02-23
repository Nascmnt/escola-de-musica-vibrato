const accordions = document.querySelectorAll('.accordion');

accordions.forEach(acord => {
    acord.addEventListener('click', () => {
        const accordionBody = acord.querySelector('.accordion-body');
        accordionBody.classList.toggle('active');

        // Alternar a rotação da seta
        const arrow = acord.querySelector('.arrow');
        arrow.style.transform = accordionBody.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
    });
});