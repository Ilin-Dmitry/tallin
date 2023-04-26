const buttonClose = document.querySelector('.form__close-button')
const popup = document.querySelector('.popup')
const buttonOpen = document.querySelector('.description__button')

buttonClose.addEventListener('click', closePopup)
buttonOpen.addEventListener('click', openPopup)

function closePopup() {
    popup.classList.remove('popup_active')
}

function openPopup() {
    popup.classList.add('popup_active')
}

export {closePopup} 