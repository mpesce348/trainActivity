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

    database = firebase.database();

  $("#submitForm").on("click", function(event){
    event.preventDefault();

    train = $("#trainNameInput").val().trim();
    destination = $("#destinationInput").val().trim();
    time = $("#trainTimeInput").val().trim();
    frequency = $("#frequencyInput").val().trim();

    database.ref().push({
      "train": train,
      "destination": destination,
      "time": time,
      "frequency": frequency
    });

    //addRow(empName, empRole, empStart, empRate);

  })