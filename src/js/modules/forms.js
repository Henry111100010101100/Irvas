const forms = () => {
    const form = document.querySelectorAll('form'),
            inputs = document.querySelectorAll('input');

    const messageStatus = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро с вами свяжется наш специалист',
        failure: 'Упс... Что-то пошло не так'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = messageStatus.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
       item.addEventListener('submit', (e) => {
        e.preventDefault();

       let formStatus = document.createElement('div');
       formStatus.classList.add('status');
       item.appendChild(formStatus);

       const formData = new FormData(item);

       postData('assets/server.php', formData)
           .then(res => {
               console.log(res);
               formStatus.textContent = messageStatus.success;
           })
           .catch(() => formStatus.textContent = messageStatus.failure)
           .finally(() => {
                clearInputs();
                setTimeout(() => {
                    formStatus.remove();
                }, 5000);
           });
       });
    });
};

export default forms;
