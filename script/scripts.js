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
document.getElementById('navIconHome').addEventListener('mouseout', function () {

    console.log('HOME - OUT');
    //ADD THE ID BACK
    var homeDom = document.querySelector('.home');
    homeDom.setAttribute('id','navIconHome');
    
var x = document.getElementById("navIconHome");
var y = x.childNodes[0];
var z = y.nodeValue;
    z += '';
    console.log(z);
    homeDom.removeChild(y);
});
