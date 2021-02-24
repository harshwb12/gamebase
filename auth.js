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
    category:createform['gamecategory'].value

  }).then(() =>{
createform.reset();
  }).catch(err =>{
      console.log(err.message);
  })
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
});
//logout
const logoutBtn = document.querySelector('#logout-btn');
logoutBtn.addEventListener('click', e => {
  e.preventDefault();
  auth.signOut();
 
})