//EVENT LISTENER - MOUSE OVER - HOME
document.getElementById('navIconHome').addEventListener('mouseover', function () {

    console.log('HOME');
    //REMOVE THE ID
    var homeDom = document.querySelector('#navIconHome');
    homeDom.removeAttribute('id');
    //ADD TEXT
    //Text node
    var homeTxt = document.createTextNode('Home');
    //Append text node to element
    homeDom.appendChild(homeTxt);

});

//EVENT LISTENER - MOUSE OUT - HOME
document.getElementById('navIconHome').addEventListener('mouseover', function () {

    console.log('HOME - OUT');
    //ADD THE ID
    var homeDom = document.querySelector('.home');
    homeDom.setAttribute('id','#navIconHome');
    //REMOVE TEXT
    //Text node
    var homeTxt = document.createTextNode('');
    homeDom.removeChild(homeTxt);

});
