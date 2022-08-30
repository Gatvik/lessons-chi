const decreaseBtns = document.querySelectorAll('.decrease');
const increaseBtns = document.querySelectorAll('.increase');

decreaseBtns.forEach(btn => {
   btn.addEventListener('click', e => {
       e.preventDefault();
       const input = btn.nextElementSibling;
       const value = +input.getAttribute('value');

       if (value <= 1) return;
       input.setAttribute('value', (value-1).toString());
   })
});

increaseBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        const input = btn.previousElementSibling;
        const value = +input.getAttribute('value');

        if (value >= 999) return;
        input.setAttribute('value', (value+1).toString());
    })
});