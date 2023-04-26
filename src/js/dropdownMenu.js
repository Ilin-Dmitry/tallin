const dropdown = document.querySelector('.form__dropdown')
const dropdownButton = document.querySelector('.form__select-button')
const dropdownButtonArrow = document.querySelector('.form__select-button-arrow')
const optionList = document.querySelectorAll('.form__label_type_radio')

function toggleDropdown() {
  setActiveOption()
  dropdown.classList.toggle('form__dropdown_inactive')
}

function handleOptionClick(e) {
  const currentOption = e.target
  toggleDropdown()
  dropdownButton.innerText = currentOption.innerText
  clearOptionStyle()
  styleActiveOption(currentOption)
}

function clearOptionStyle() {
  optionList.forEach(option => {
    option.style.backgroundColor = '#fff'
    option.style.color = 'rgba(35, 35, 35, 0.4)'
  })
}

function styleActiveOption(opt) {
  opt.style.backgroundColor = '#659DBD'
  opt.style.color = '#fff'
}

function hideDropdown() {
  dropdown.classList.add('form__dropdown_inactive')
}

function setActiveOption() {
  optionList.forEach((option) => {
    if (option.innerText === dropdownButton.innerText) {
      styleActiveOption(option)
    }
  })
}

dropdownButton.addEventListener('click', toggleDropdown)
dropdownButtonArrow.addEventListener('click', (evt) => {
  toggleDropdown()
  evt.stopPropagation();
  
})

optionList.forEach(option => {
  option.addEventListener('mouseover', () => {
    clearOptionStyle()
    styleActiveOption(option)
  })
  option.addEventListener('mouseout', () => {
    if (option.innerText !== dropdownButton.innerText) {
      clearOptionStyle()
    }
  })
  option.addEventListener('click', handleOptionClick)
})

document.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
    hideDropdown()
  }
})

document.addEventListener('click',(evt) => {
  if (evt.target !== dropdownButton) {
    hideDropdown()
  }
})
