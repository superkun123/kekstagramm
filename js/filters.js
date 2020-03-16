(function () {

  var chromeFilter = document.querySelector('.upload-effect-label-chrome')
  var sepiaFilter = document.querySelector('.upload-effect-label-sepia')
  var invertFilter = document.querySelector('.upload-effect-label-marvin')
  var blurFilter = document.querySelector('.upload-effect-label-phobos')
  var brightFilter = document.querySelector('.upload-effect-label-heat') 
  var noFilter = document.querySelector('#upload-effect-none')
  var color = 0

  function pinResult(color) {
    var pin = document.querySelector('.upload-effect-level-pin')
    var pinContainer = document.querySelector('.upload-effect-level-val')
    var pinDialog = document.querySelector('.upload-effect-level')

    pin.addEventListener('mousedown', function (evt) {
        evt.preventDefault()
        console.log('тащишь')
      
          startCoords = {
              x: evt.clientX,
          }
      
          
          var onMouseMove = function (moveEvt) {
            moveEvt.preventDefault()

            var shift = {
              x: startCoords.x - moveEvt.clientX,
            }

            startCoords = {
              x: moveEvt.clientX,

            }

            pin.style.left = (pin.offsetLeft - shift.x) + 'px'
            scaleColor = startCoords.x/1000
            console.log(scaleColor)
            if (color != 'blur') {
              previewImage.style.filter = `${color}(${scaleColor })`
            } else {
              previewImage.style.filter = `${color}(${scaleColor }px)`
            }
          }
      
      
          var onMouseUp = function (upEvt) {
                  upEvt.preventDefault();
                  console.log('удалил')
                  pinDialog.removeEventListener('mousemove', onMouseMove)
                 pinContainer.removeEventListener('mouseup', onMouseUp)
          };
             
      
      
              pinDialog.addEventListener('mousemove', onMouseMove)
              pinDialog.addEventListener('mouseup', onMouseUp)
     
      
      
      })
    }
    

noFilter.addEventListener('click', function() {
 previewImage.style.filter = 'none'

})


chromeFilter.addEventListener('click', function() {
  color = 'grayscale'
 pinResult(color)
})

sepiaFilter.addEventListener('click', function() {
  color = 'sepia'
  pinResult(color) 

})

invertFilter.addEventListener('click', function () {
  color = 'invert'
  pinResult(color) 
})


blurFilter.addEventListener('click', function () {
  color = 'blur'
  pinResult(color) 
})

brightFilter.addEventListener('click', function () {
  color = 'brightness'
  pinResult(color) 

})
})()


