   (function () {
    var likes = document.querySelector('.likes-count')
    var comments = document.querySelector('.comments-count')
    var commentsContainer = document.querySelector('.gallery-overlay-controls-comments')
    var commentsSect = document.querySelector('#commentsTemp').content.querySelector('.social__comment')
    var avatarProfile = document.querySelector('#commentsTemp').content.querySelector('.social__picture')
    var textComment = document.querySelector('#commentsTemp').content.querySelector('.social__text')
    var commentUsers = ['Всё отлично', 'В целом всё неплохо, но не всё', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра', 'Я поскользнулся на банановой кожуре и уронип фотоаппарат на кота и у меня получилась фотография лучше', 'Лица у людей на фотке перекошены, как будто их избивают.']
    var descriptionMassive = ['Тестим новую камеру', 'Затусили с дурзьями на море', 'Отдыхаем...', 'Цените каждое мгновенье.', 'Вот это тачка']

    

   document.querySelector('.upload-input').addEventListener('change', function () {
        window.fileInputSelect = document.querySelector('.upload-input').files[0]
        window.url = URL.createObjectURL(fileInputSelect)
        previewImage.src = url
        show(editor)               
    })    

    

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}


    var usersPictures = [{
        url: () => `photos/${[getRandomInt(2, 25)]}.jpg`




    },
    {
        likes: getRandomInt(15, 200)
    },

    {
        comments: commentUsers[getRandomInt(1, 6)]

    },

    {
        description: descriptionMassive[getRandomInt(1, 6)]
    }
]

  

        
    textComment.textContent = usersPictures[2].comments
    avatarProfile.src = `./photos/${getRandomInt(0, 6)}.jpg`
    commentsContainer.append(commentsSect)
    comments.textContent = getRandomInt(0, 6)
    likes.textContent = usersPictures[1].likes




})()


