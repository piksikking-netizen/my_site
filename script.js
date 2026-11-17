// Глобальные переменные
let win = false
// ========== Общий Счет ==========

function getLikes_all() {
    const likeSpan = document.querySelector('#like-action')
    return +likeSpan.innerText
}

function setLikes_all(count) {
    const likeSpan = document.querySelector('#like-action')
    likeSpan.innerText = ""+count
}

// ========== КОТЫ ==========

function getLikes_cat() {
    const likeSpan = document.querySelector('#like-count-cat')
    return +likeSpan.innerText
}

function setLikes_cat(count) {
    const likeSpan = document.querySelector('#like-count-cat')
    likeSpan.innerText = ""+count
}

const likeBtn_cat = document.querySelector("#like-btn-cat")

likeBtn_cat.addEventListener('click', () => {
    setLikes_cat(getLikes_cat() + 1)
    if (getLikes_all() > 0) {
        setLikes_all(getLikes_all()-1)
    } else if (getLikes_all() == 0 && win == false) {
        win = true
        alert("Молодец")
    }
})

// ========== СОБАКИ ==========

function getLikes_dog() {
    const likeSpan = document.querySelector('#like-count-dog')
    return +likeSpan.innerText
}

function setLikes_dog(count) {
    const likeSpan = document.querySelector('#like-count-dog')
    likeSpan.innerText = ""+count
}

const likeBtn_dog = document.querySelector("#like-btn-dog")

likeBtn_dog.addEventListener('click', () => {
    setLikes_dog(getLikes_dog() + 1)
    if (getLikes_all() > 0) {
        setLikes_all(getLikes_all()-1)
    } else if (getLikes_all() == 0 && win == false) {
        win = true
        alert("Молодец")
    }
})

