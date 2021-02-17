const signupBtn = document.querySelector('#signup-btn');
    signupBtn.addEventListener('click', e => {
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log('User signed up!');
  })
  .catch((error )=> {
    console.log(error.message);
   window.alert(error.message);
  })
  
});
const loginBtn = document.querySelector('#login-btn');
  loginBtn.addEventListener('click', e => {
  e.preventDefault();

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(cred => {
      console.log('Logged in user!');
    })
    .catch(error => {
      console.log(error.message);
     window.alert(error.message);
    })
});
const logoutBtn = document.querySelector('#logout-btn');
logoutBtn.addEventListener('click', e => {
  e.preventDefault();
  auth.signOut();
  console.log('User signed out!');
})
auth.onAuthStateChanged(user => {
  if (user) {
    console.log(user.email + " is logged in!");
    document.getElementById("user-div").style.display="block";
    document.getElementById("login-div").style.display="none";

  } else {
    console.log('User is logged out!');
    document.getElementById("user-div").style.display="none";
    document.getElementById("login-div").style.display="block";
  }
});