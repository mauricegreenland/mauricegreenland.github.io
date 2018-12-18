$(document).ready(function () {

    //Navburger animation
    $('.navButton').click(function () {
        $('.navButton').toggleClass('change');
    });

    //Lightbox options
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });

    //Animation for profile and gallery rows- scroll method
    $(window).scroll(function () {
        let height = $(this).scrollTop();

        if (height >= 300) {
            $('.myProfile').addClass('slideIn');
            $('.myMenu').addClass('customNav');
        } else {
            $('.myProfile').removeClass('slideIn');
            $('.myMenu').removeClass('customNav');
        }

        if (height >= 450) {
            $('.gallery').addClass('animate');
        } else {
            $('.gallery').removeClass('animate');
        }
    });

    $('.galleryListItem').click(function () {
        let value = $(this).attr('data-filter');

        if (value === 'all') {
            $('.filter').show(300);
        } else {
            $('.filter').not('.' + value).hide(300);
            $('.filter').filter('.' + value).show(300);
        }
    });

    $('.galleryListItem').click(function () {
        $(this).addClass('activeItem').siblings().removeClass('activeItem');
    });

    //Click function to count how many times kit card is clicked
    $('.kitCard').click(function () {

        //Get the name of the card that has been clicked
        var theCard = this.id;

        if (theCard == 'cardCamera') {

            console.log(theCard);
            //initialize click variable
            //Get current clicks form website
            cardClicks = Number(document.getElementById('cameraClicksTotal').innerHTML);

            //Add click to cardClicks
            cardClicks += +1;

            //Add click to document
            document.getElementById('cameraClicksTotal').innerHTML = cardClicks;

        } else if (theCard === 'cardDrone') {

            console.log(theCard);
            //initialize click variable
            //Get current clicks form website
            var cardClicks = Number(document.getElementById('droneClicksTotal').innerHTML);

            //Add click to cardClicks
            cardClicks += +1;

            //Add click to document
            document.getElementById('droneClicksTotal').innerHTML = cardClicks;

        } else {

            console.log(theCard);
            //initialize click variable
            //Get current clicks form website
            var cardClicks = Number(document.getElementById('bagClicksTotal').innerHTML);

            //Add click to cardClicks
            cardClicks += +1;

            //Add click to document
            document.getElementById('bagClicksTotal').innerHTML = cardClicks;
        }
    });
    
    
});
