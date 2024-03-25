document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        const input = box.querySelector('input');
        const content = box.querySelector('.content');

        input.addEventListener('change', () => {
            if (input.checked) {
                content.classList.remove('hidden');
            } else {
                content.classList.add('hidden');
            }
        });
    });
});
