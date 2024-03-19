
var body = document.getElementById('body')
var darkmodeButton = document.getElementById('darkmodeButton')


function darkMode(){

    body.classList = [];
    body.classList.add('darkMode');


    document.getElementById('darkmode').innerHTML =/*HTML*/`
                
    <img id="darkmodeButton" onclick="lightMode()" src="img/drkmdOn.png"><br>
`;

}

function lightMode(){

    body.classList = [];
    body.classList.add('lightMode');


    document.getElementById('darkmode').innerHTML =/*HTML*/`
                
    <img id="darkmodeButton" onclick="darkMode()" src="img/drkmd.png"><br>

`;

}
