var previewImage = document.querySelector('.effect-image-preview')
var editor = document.querySelector('.upload-overlay ')


function show(elem) {
    elem.classList.add('show')
    elem.classList.remove('hide')
}


function hide(elem) {
    elem.classList.remove('show')
    elem.classList.add('hidden')
}

