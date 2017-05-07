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
  var train = "";
  var destination = "";
  var time = "";
  var frequency = "";

  var database = firebase.database();
  // begins on click function to capture form info
  $("#submitForm").on("click", function(event) {
          //allows for input by enter key or on click
          event.preventDefault();
          //sets variables to the trimmed value of the corresponding
          //form data
          train = $("#trainNameInput").val().trim();
          destination = $("#destinationInput").val().trim();
          time = $("#trainTimeInput").val().trim();
          frequency = $("#frequencyInput").val().trim();

          //pushes vars to database and sets corresponding tags
          database.ref().push({
              "train": train,
              "destination": destination,
              "time": time,
              "frequency": frequency
          });

      })
      //begins function to take a snapshot of the database on 
      //any changed to the value
  database.ref().on("value", function(snap) {
      //sets variable as the value of snap
      var snapVal = snap.val();
      //sets variable as key element of the object snapVal
      var valKeys = Object.keys(snapVal);
      var objectLength = valKeys.length - 1;

      $("emptyTable").empty();

      valKeys.forEach(function(lineItem) {
          console.log(snapVal[lineItem].train, snapVal[lineItem]
              .destination, snapVal[lineItem].time, snapVal[lineItem]
              .frequency);
      })
  })

  function addRow(trn, dest, tme, freq) {
      var convertedFreq = moment(new Date(freq));

      $("emptyTable").append(
          '<tr>' +
          '<td>' + trn + '</td>' +
          '<td>' + dest + '</td>' +
          '<td>' + tme + '</td>' +
          '<td>' + freq + '</td>' +
          '</tr>'
      );
  }