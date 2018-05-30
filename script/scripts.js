//Add event listener for mouseover twitter icon
document.querySelector('.iconImg').addEventListener('mouseover', function(){
    
    document.querySelector('.iconTwitter').src = 'myicons/2x/logo-twitter-hover@2x.png';
});

//Add event listener for mouseout twitter icon
document.querySelector('.iconImg').addEventListener('mouseout', function(){
    
    document.querySelector('.iconTwitter').src = 'myicons/2x/logo-twitter@2x.png';
    
});