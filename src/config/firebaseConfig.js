import firebase from 'firebase'


const config = {
	apiKey: "AIzaSyBJyptam_XjFc039LTcRHNTVd8DNG_rTaM",
	authDomain: "pabudi-9ac11.firebaseapp.com",
	databaseURL: "https://pabudi-9ac11.firebaseio.com",
}

firebase.initializeApp(config);

export function firebaseListener(func) {
	firebase.auth().onAuthStateChanged(function (user) {
	  if (user) {
	  	console.log("User log in success", user);
	    func(true, user)
	  } else {
	  	console.log("User log in failed", user);
	    func(false)
	  }
	}, function(error) {
	  console.log(error)
	});
}

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;