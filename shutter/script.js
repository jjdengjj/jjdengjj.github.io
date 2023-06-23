let switching = false;

function updateGallery() {
  $('.gallery__core img, .gallery__bg img').attr('src',galleryItems[0].url);
  $('.gallery__track').empty();
  $.each(galleryItems,function(index,item){
    $('.gallery__track').append('<div class="gallery__track__item '+(index==0 ? 'active' : '')+'"><img src="'+item.thumb+'" data-full="'+item.url+'" alt=""></div>');
  });
}

function getNewImages() {
  (async () => {
    const response = await fetch('https://api.github.com/repos/jjdengjj/jjdengjj.github.io/contents/shutter/moment');
    const data = await response.json();
    let items = [];
    for (let file of data) {
      let newItem = {
        id: file.name,
        url: "https://www.rand2ai.org/shutter/moment/".concat(file.name),
        thumb: "https://www.rand2ai.org/shutter/moment/".concat(file.name)
        }
      items.push(newItem);
    }
    galleryItems = items;
    updateGallery();
  })();
}

// $('.gallery__search input').on('keyup',debounce(() => getNewImages()));
$('.gallery__track').on('click','.gallery__track__item',function(){
  if (!switching) {
    switching = true;
    $(this).addClass('active').siblings().removeClass('active');
    // animate in new core image and background image
    const $oldBGImg = $('.gallery__bg img'); 
    const $oldImg = $('.gallery__core img');
    const newImg = $(this).find('img').data('full');
    const $newImg = $('<img class="slide-in" src="'+newImg+'">');
    const $newBGImg = $('<img class="fade-in" src="'+newImg+'">');
    $('.gallery__core').append($newImg);
    $('.gallery__bg').append($newBGImg);
    setTimeout(function(){
      $newImg.addClass('shift-up');
      $oldImg.addClass('shift-up');
      $oldBGImg.addClass('fade-out');
      $newBGImg.addClass('fading');
      setTimeout(function(){
        $('.gallery__core img').eq(0).remove();
        $('.gallery__bg img').eq(0).remove();
        $('.slide-in').removeClass('slide-in shift-up');
        $('.fade-in').removeClass('fade-in fading');
        switching = false;
      },400);
    },10);
  }
});

let galleryItems = [
  {
    id:'None',
    url: "https://www.rand2ai.org/img/favicon.ico",
    thumb: "https://www.rand2ai.org/img/favicon.ico"
  }
];

getNewImages();
updateGallery(); // once on load

// function debounce(func, timeout = 300){
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => { func.apply(this, args); }, timeout);
//   };
// }