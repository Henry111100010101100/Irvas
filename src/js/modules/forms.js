const forms = () => {
    const form = document.querySelectorAll('form'),
            input = document.querySelectorAll('input');

    const messageStatus = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро с вами свяжется наш специалист',
        failure: 'Упс... Что-то пошло не так'
    };

    const postData = () => {
        document.querySelector('.status').textContent = messageStatus.loading;
    };

    form.forEach(item => {
       item.addEventListener('submit', (e) => {
        e.preventDefault();

       let formStatus = document.createElement('div');
       formStatus.classList.add('status');
       item.appendChild(formStatus);

       const formData = new FormData(item);
       });
    });
};

export default forms;
