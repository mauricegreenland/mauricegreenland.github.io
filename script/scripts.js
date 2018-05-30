//Add event listener for mouseover twitter icon
document.querySelector('.iconImg').addEventListener('mouseover', function () {

    //    document.querySelector('.iconTwitter').src = 'myicons/2x/logo-twitter-hover@2x.png';

    //Get Element id name
    var iconDomId = document.querySelector('.iconImg').id;

    //Swith statement - case is the icons id 
    switch (iconDomId) {
        case 'twitterId':
            //change twitter image
            document.querySelector('.iconTwitter').src = 'myicons/2x/logo-twitter-hover@2x.png';
            console.log(iconDomId);
            break;

        case 'linkedinId':
            //change linkedin image
            document.querySelector('.iconLinkedin').src = 'myicons/2x/logo-linkedin@2x.png';
            break;

    }

});

//Add event listener for mouseout twitter icon
document.querySelector('.iconImg').addEventListener('mouseout', function () {

    document.querySelector('.iconTwitter').src = 'myicons/2x/logo-twitter@2x.png';

});
