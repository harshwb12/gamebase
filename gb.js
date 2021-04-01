const gamelist = document.querySelector('.games');
const loggedout = document.querySelectorAll('.main-div');
const loggedin = document.querySelectorAll('.loggedin-div');

const setupui = (user) =>{
    if(user) {
        //toggle ui elements
        
        loggedin.forEach(item => item.style.display = 'block');
        loggedout.forEach(item => item.style.display = 'none');
        filterSelection('all');
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
    const div = `
    
    <div class="filterDiv ${game.category}">
    <a id="line" href="${game.link}" target="_blank" >
    <img src="${game.image}" alt="${game.name}">
    <p>${game.name}</p>
    </a> 
    
    </div>
    
    `; 
    html += div
    });
    gamelist.innerHTML = html;
} else{
  gamelist.innerHTML = '';
}
}


function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) {AddClass(x[i], "show");}
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
function searchFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("div");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}
//dropdown category
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function ctgFunction() {
  document.getElementById("myBtnContainer").classList.toggle("shown");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('shown')) {
        openDropdown.classList.remove('shown');
      }
    }
  }
}
function addgameFunction() {
  document.getElementById("addgame").classList.toggle("seen");
}
