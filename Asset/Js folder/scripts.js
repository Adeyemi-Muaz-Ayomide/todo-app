const inputValue = document.getElementById('todo-input')
const listContainer = document.getElementById('todo-list')
const btnSubmit = document.getElementById('submit')

btnSubmit.addEventListener('click' , () => {
    if (inputValue.value === '') {
        alert('you must input a todos')
    }
    else {
        let li = document.createElement('li')
        li.innerHTML = inputValue.value;
        listContainer.append(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.append(span)
        saveData()
    }
    inputValue.value = ''
})

listContainer.addEventListener('click' , (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed')
        saveData()
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        saveData()
    }
})

const saveData = () => localStorage.setItem('data' , listContainer.innerHTML)

const showData = () => listContainer.innerHTML = localStorage.getItem('data')

showData()