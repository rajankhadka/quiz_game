

let register_button  = document.getElementById('register_button');

console.log(register_button);

register_button.addEventListener('click' ,event=>{
   let login = document.getElementById('login');
   let register = document.getElementById('register');

   register.style.display = "block";
   login.style.display = 'none';
});

export let username = '';

let login_button = document.getElementById("login_button");

login_button.addEventListener('click' ,event=>{
    let login = document.getElementById('login');
    let register = document.getElementById('register');

    register.style.display = "none";
    login.style.display = 'block';
});


let form_login = document.querySelectorAll('#form_login input');



console.log(form_login);

let  login_submit = document.getElementById('login_submit');

login_submit.addEventListener('click',event =>{
        for(let i = 0;i<form_login.length;i++){
        console.log(form_login[i].value);

    }
    let user = JSON.parse(window.localStorage.getItem(form_login[0].value));
      username = user  ;
    console.log(user);
    if((user['email'] === form_login[0].value) && (user['password'] === form_login[1].value)){
        console.log('login successful !!!');

        let action = document.getElementById('form_login');
        console.log(action);
        action.setAttribute('action','quiz.html');
        action.setAttribute('target','_parent');
    }


});


let form_register = document.querySelectorAll('#form_register input');
console.log(form_register);
// let registersubmit = document.getElementById("registersubmit");
//
console.log(form_register[4]);

form_register[4].addEventListener('click',event=>{
    let user ={};
   for(let i=0;i<form_register.length;i++){
       console.log(form_register[i].value);
   }

   if((form_register[3].value) === (form_register[2].value)){
       console.log('match!!');
       user["password"] = form_register[2].value;
       user["email"] = form_register[1].value;
       window.localStorage.setItem(form_register[1].value,JSON.stringify(user));
   }

});




// -------------------------------------------------quiz.js-------------------------





















