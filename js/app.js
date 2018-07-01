$('.expandListUl').hide();

$('.foldButton').click(function(){
    let navList = $('.expandListUl');
    navList.slideToggle();
});


$('#scrollTop').click(function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});
