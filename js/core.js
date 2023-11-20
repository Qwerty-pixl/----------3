document.querySelector('.js-btn').addEventListener('click', function () { 
    document.querySelector('.js-btn').classList.add('active')
    document.querySelector('.js-btn').computedStyleMap.height = "200px"
    document.querySelector('.js-btn').textContent = "Текст кнопки изменен"
     
    let newhr = document.createElement('<p>Paragraph</p>');
})