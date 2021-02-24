const gamelist = document.querySelector('.games');
const loggedout = document.querySelectorAll('.main-div');
const loggedin = document.querySelectorAll('.loggedin-div');

const setupui = (user) =>{
    if(user) {
        //toggle ui elements
        loggedin.forEach(item => item.style.display = 'block');
        loggedout.forEach(item => item.style.display = 'none');

    } else{
        //toggle ui elements
        loggedin.forEach(item => item.style.display = 'none');
        loggedout.forEach(item => item.style.display = 'block');

    }
}
// set up games
const setupgames = (data) =>{
    if(data.length){
    
    let html ='';
    data.forEach(doc => {
    const game = doc.data();
    const li = `
    <li>
    <div> <a href="${game.link}" target="_blank">${game.name}</a><br>${game.category}</div>
    </li>
    `; 
    html += li
    });
    gamelist.innerHTML = html;
} else{
    gamelist.innerHTML = '';
}
}