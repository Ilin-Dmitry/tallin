import { closePopup } from "./showPopup"

const form = document.querySelector('.form')

function handleSubmit(evt) {
    evt.preventDefault()
    closePopup()
}

form.addEventListener('submit', handleSubmit)