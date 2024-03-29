// get data

//listen for auth changes
auth.onAuthStateChanged(user => 
  {if (user)
    
      { db.collection('games').onSnapshot(snapshot =>{
        setupgames(snapshot.docs);
        setupui(user);
      }); }
      
    
  else { 
    setupui();
    setupgames([]);
   }
    
});
//add new game
const createform = document.querySelector('#addgame-form');
createform.addEventListener('submit',(e)=>{
  e.preventDefault();
  
  db.collection('games').add({
    name:createform['gamename'].value,
    link:createform['gamelink'].value,
    category:createform['gamecategory'].value,
    image:createform['imglink'].value
  }).then(() =>{
createform.reset();
  }).catch(err =>{
    console.log(err.message);
    window.alert(err.message);})

})
//sign up
const signupBtn = document.querySelector('#signup-btn');
    signupBtn.addEventListener('click', e => {
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    auth.createUserWithEmailAndPassword(email, password).then(() => {
    console.log('User signed up!');
  })
  .catch((error )=> {
    console.log(error.message);
   window.alert(error.message);
  })
  
});
//login
const loginBtn = document.querySelector('#login-btn');
  loginBtn.addEventListener('click', e => {
  e.preventDefault();
    //get user info
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  auth.signInWithEmailAndPassword(email, password)
  
    .catch(error => {
      console.log(error.message);
     window.alert(error.message);
    })
    if(email=="harshgupta12122012@gmail.com") 
    {document.getElementById('addgame').style.display ='block';}
    
});
const searchform = document.querySelector('#search');
//logout
const logoutBtn = document.querySelector('#logout-btn');

logoutBtn.addEventListener('click', e => {
  e.preventDefault();
  createform.reset();
  searchform.reset();
  
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  document.getElementById("al").className += " active";
  document.getElementById('addgame').style.display ='none';
  auth.signOut();
 
})