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
    const response = await fetch('https://api.github.com/repos/jjdengjj/jjdengjj.github.io/contents/gallery/');
    const data = await response.json();
    let items = [];
    for (let file of data) {
      let newItem = {
        id: file.name,
        url: "https://www.rand2ai.org/gallery/".concat(file.name),
        thumb: "https://www.rand2ai.org/gallery/".concat(file.name)
        }
      items.push(newItem);
    }
    galleryItems = items;
    updateGallery();
  })();
}

$('.gallery__search input').on('keyup',debounce(() => getNewImages()));
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
        "id": "Id2f5Y9dq1g",
        "url": "https://images.unsplash.com/photo-1439189614644-ff891ff78aa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzI5Njd8MHwxfHNlYXJjaHw1fHxtb3VudGFpbnN8ZW58MHwyfHx8MTY0OTc4ODEwNg&ixlib=rb-1.2.1&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1439189614644-ff891ff78aa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzI5Njd8MHwxfHNlYXJjaHw1fHxtb3VudGFpbnN8ZW58MHwyfHx8MTY0OTc4ODEwNg&ixlib=rb-1.2.1&q=80&w=200"
    },
    {
        "id": "pzC7JfukhUM",
        "url": "https://images.unsplash.com/photo-1565475668349-0130bea1059b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzI5Njd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbnN8ZW58MHwyfHx8MTY0OTc4ODEwNg&ixlib=rb-1.2.1&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1565475668349-0130bea1059b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzI5Njd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbnN8ZW58MHwyfHx8MTY0OTc4ODEwNg&ixlib=rb-1.2.1&q=80&w=200"
    },
    {
        "id": "ystlZBTbKiY",
        "url": "https://images.unsplash.com/photo-1562207520-19c0ebd8264f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzI5Njd8MHwxfHNlYXJjaHwyfHxtb3VudGFpbnN8ZW58MHwyfHx8MTY0OTc4ODEwNg&ixlib=rb-1.2.1&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1562207520-19c0ebd8264f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzI5Njd8MHwxfHNlYXJjaHwyfHxtb3VudGFpbnN8ZW58MHwyfHx8MTY0OTc4ODEwNg&ixlib=rb-1.2.1&q=80&w=200"
    },
    {
        "id": "DOb-2jd0sbc",
        "url": "https://images.unsplash.com/photo-1460221584296-7b799eba9475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzI5Njd8MHwxfHNlYXJjaHwzfHxtb3VudGFpbnN8ZW58MHwyfHx8MTY0OTc4ODEwNg&ixlib=rb-1.2.1&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1460221584296-7b799eba9475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzI5Njd8MHwxfHNlYXJjaHwzfHxtb3VudGFpbnN8ZW58MHwyfHx8MTY0OTc4ODEwNg&ixlib=rb-1.2.1&q=80&w=200"
    },
    {
        "id": "k_4m9_0PO3Q",
        "url": "https://images.unsplash.com/photo-1454663501801-75a30ab23c6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzI5Njd8MHwxfHNlYXJjaHw0fHxtb3VudGFpbnN8ZW58MHwyfHx8MTY0OTc4ODEwNg&ixlib=rb-1.2.1&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1454663501801-75a30ab23c6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzI5Njd8MHwxfHNlYXJjaHw0fHxtb3VudGFpbnN8ZW58MHwyfHx8MTY0OTc4ODEwNg&ixlib=rb-1.2.1&q=80&w=200"
    },
    {
        "id": "NFB5zdUvb-c",
        "url": "https://images.unsplash.com/photo-1515739887843-45210db2c01a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzI5Njd8MHwxfHNlYXJjaHw2fHxtb3VudGFpbnN8ZW58MHwyfHx8MTY0OTc4ODEwNg&ixlib=rb-1.2.1&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1515739887843-45210db2c01a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzI5Njd8MHwxfHNlYXJjaHw2fHxtb3VudGFpbnN8ZW58MHwyfHx8MTY0OTc4ODEwNg&ixlib=rb-1.2.1&q=80&w=200"
    },
    {
        "id": "xsFxnW9_KZ0",
        "url": "https://images.unsplash.com/photo-1574786527860-f2e274867c91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzI5Njd8MHwxfHNlYXJjaHw3fHxtb3VudGFpbnN8ZW58MHwyfHx8MTY0OTc4ODEwNg&ixlib=rb-1.2.1&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1574786527860-f2e274867c91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzI5Njd8MHwxfHNlYXJjaHw3fHxtb3VudGFpbnN8ZW58MHwyfHx8MTY0OTc4ODEwNg&ixlib=rb-1.2.1&q=80&w=200"
    },
    {
        "id": "dSTalS8QzTg",
        "url": "https://images.unsplash.com/photo-1570032257806-7272438f38da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzI5Njd8MHwxfHNlYXJjaHw4fHxtb3VudGFpbnN8ZW58MHwyfHx8MTY0OTc4ODEwNg&ixlib=rb-1.2.1&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1570032257806-7272438f38da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzI5Njd8MHwxfHNlYXJjaHw4fHxtb3VudGFpbnN8ZW58MHwyfHx8MTY0OTc4ODEwNg&ixlib=rb-1.2.1&q=80&w=200"
    },
    {
        "id": "z7tQUhBVOrY",
        "url": "https://images.unsplash.com/photo-1447755086558-cb9e3830d677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzI5Njd8MHwxfHNlYXJjaHw5fHxtb3VudGFpbnN8ZW58MHwyfHx8MTY0OTc4ODEwNg&ixlib=rb-1.2.1&q=80&w=1080",
        "thumb": "https://images.unsplash.com/photo-1447755086558-cb9e3830d677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzI5Njd8MHwxfHNlYXJjaHw5fHxtb3VudGFpbnN8ZW58MHwyfHx8MTY0OTc4ODEwNg&ixlib=rb-1.2.1&q=80&w=200"
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