document.addEventListener('DOMContentLoaded', () => {
    const showModalButtons = document.querySelectorAll('.showModal');
    const closeModalButtons = document.querySelectorAll('.closeModal');
    const modals = document.querySelectorAll('.modal');

    showModalButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            modals[index].showModal();
        });
    });

    closeModalButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            modals[index].close();
        });
    });
});