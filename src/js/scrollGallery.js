const forwardButton = document.querySelector('.arrows__arrow_dir_right')
const backwardButton = document.querySelector('.arrows__arrow_dir_left')
const photoArray = document.querySelectorAll('.gallery__photo')
const gallery = document.querySelector('.gallery__images')
let shiftCount = 0
const firstImageLeft = photoArray[0].getBoundingClientRect().x

forwardButton.addEventListener('click', movePhotoForward)
backwardButton.addEventListener('click', movePhotoBackward)

function movePhotoForward() {
    const photoWidth = photoArray[0].offsetWidth
    const showedPhotos = Math.floor((window.innerWidth - firstImageLeft)/photoWidth)
    const marginGalleryRight = window.innerWidth - firstImageLeft - showedPhotos * photoWidth
    const paddingRightPhoto = parseInt(window.getComputedStyle(photoArray[0]).paddingRight)

    if (shiftCount + 1 < photoArray.length - showedPhotos) {
        shiftCount += 1
        const shiftSize = shiftCount * photoWidth
        photoArray.forEach(photo => {
            photo.style.transform =`translateX(-${shiftSize}px)`
        })
        
    } else if (shiftCount = photoArray.length - showedPhotos) {
        setButtonDisabled(forwardButton)
        const shiftSize = shiftCount * photoWidth
        photoArray.forEach(photo => {
            photo.style.transform =`translateX(-${shiftSize - marginGalleryRight - paddingRightPhoto}px)`
        })
    }
    setButtonEnabled(backwardButton)
}

function movePhotoBackward() {
    const photoWidth = photoArray[0].clientWidth 

    if (shiftCount <= 0) {
        photoArray.forEach((photo) => {
            photo.style.transform = `translate(0)`
        })
        setButtonDisabled(backwardButton)
        setButtonEnabled(forwardButton)
        shiftCount = 1

    } else {
        shiftCount = shiftCount - 1
        const shiftSize = photoWidth * shiftCount
        photoArray.forEach((photo) => {
            photo.style.transform = `translate(-${shiftSize}px)`
        })
        setButtonEnabled(forwardButton)
    }
}

function setButtonDisabled(btn) {
    btn.classList.add('arrows__arrow_inactive')
}

function setButtonEnabled(btn) {
    btn.classList.remove('arrows__arrow_inactive')
}