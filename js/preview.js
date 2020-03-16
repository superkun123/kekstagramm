function pictureShow (pictureClone, imgPicture) {
//   Открывает маленькие картинки в большом окне 
        pictureClone.addEventListener('click', function () {
            var bigPicture = document.querySelector('.gallery-overlay')
            var bigPictureImg = document.querySelector('.gallery-overlay-image')
            var bigPictureClose = document.querySelector('.gallery-overlay-close')
            event.preventDefault();
            show(bigPicture)
            bigPictureImg.src = event.target.src
            bigPictureImg.style.filter =  imgPicture.style.filter

// Закрывает большое окно с картинкой

            bigPictureClose.addEventListener ('click', function () {
                hide(bigPicture)
            })


        });

    }


