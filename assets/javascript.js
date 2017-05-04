  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCiyoAnxNTTLkpTi9s8jE2UL77rB4r3o2I",
    authDomain: "train-activity-db8ad.firebaseapp.com",
    databaseURL: "https://train-activity-db8ad.firebaseio.com",
    projectId: "train-activity-db8ad",
    storageBucket: "train-activity-db8ad.appspot.com",
    messagingSenderId: "136116915676"
  };
  firebase.initializeApp(config);

  //global variables 
  var train="";
  var destination="";
  var time="";
  var frequency="";