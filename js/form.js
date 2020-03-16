(function () {
  var closerForm = document.querySelector('.upload-form-cancel')
  var incImgSize = document.querySelector('.upload-resize-controls-button-inc')
  var decImgSize = document.querySelector('.upload-resize-controls-button-dec')
  var controlValue = document.querySelector('.upload-resize-controls-value')
  var scale = 0
  var submitBtn =  document.querySelector('.upload-form-submit')


  submitBtn.addEventListener('click', function () {
    event.preventDefault()
    var pictureContent = document.querySelector('#picture-template').content.querySelector('.picture')
    var picturesContainer = document.querySelector('.pictures')
    var pictureClone = pictureContent.cloneNode(true)
    var imgPicture = pictureClone.querySelector('.picture-img')
    picturesContainer.append(pictureClone)
    imgPicture.src = url
    imgPicture.style.filter =  previewImage.style.filter
    hide(editor)
    pictureShow (pictureClone, imgPicture) 
  })


  closerForm.addEventListener('click', function () {
    hide(editor)
})


incImgSize.addEventListener('click', function() {
    if (scale < 100) {
    scale = scale + 25
    controlValue.value = scale
    previewImage.style.width = `${controlValue.value}%`
} else {
    scale = 100
}

    

})

decImgSize.addEventListener('click', function() {
    if (scale > 25) {
        scale = scale - 25
        controlValue.value = scale
        previewImage.style.width = `${controlValue.value}%`
    } else {
        scale = 25
    }
   
})



})()
   
