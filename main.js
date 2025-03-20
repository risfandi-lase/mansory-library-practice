// external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Masonry
var grid = document.querySelector('.grid');

var msnry = new Masonry( grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});

imagesLoaded( grid ).on( 'progress', function() {
  // layout Masonry after each image loads
  msnry.layout();
});


document.querySelectorAll('.grid-item img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup-image').style.display = 'block'
        document.querySelector('.popup-image img').src = image.getAttribute('src')
    }
})

document.querySelector('.popup-image span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none'

}
