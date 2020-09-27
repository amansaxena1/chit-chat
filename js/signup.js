console.log("anything");

var name1, username1, password1, sign1;
	
name1 = document.getElementById('name');
username1 = document.getElementById('username');
password1 = document.getElementById('choosepassword');
sign1 = document.getElementById('sign');


const database = firebase.database();
const rootref = database.ref('accounts');
    
sign1.addEventListener('click', (e) => {
    e.preventDefault();
    rootref.child(username1.value).set({
        name: name1.value,
        username: username1.value,
        password: password1.value
    });
});
//     firebase.database().ref('accounts/'+username1).set({
//         name: name1,
//         username: username1,
//         password: password1
//     });
// }