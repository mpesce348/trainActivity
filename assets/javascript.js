 
  $( document ).ready(function() {
    console.log( "ready" );
});
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
              "frequency": frequency,
             });

        })
      //begins function to take a snapshot of the database on 
      //any changed to the value
  database.ref().on("value", function(snap) {
      //sets variable as the value of snap
      var snapVal = snap.val();
      //sets variable as key element of the object snapVal
      var valKeys = Object.keys(snapVal);
      //sets variable as the number of valKeys minus 1
      var objectLength = valKeys.length - 1;
      //locates table with id emptyTable and epties it
      $("#emptyTable").empty();
      //starts functions lineItem  
      valKeys.forEach(function(lineItem) {
        //console logs 
          console.log(snapVal[lineItem].train, snapVal[lineItem]
              .destination, snapVal[lineItem].time, snapVal[lineItem]
              .frequency);
          addRow(snapVal[lineItem].train, snapVal[lineItem]
              .destination, snapVal[lineItem].time, snapVal[lineItem]
              .frequency);
      })
      //this is supposed to empty the form data when the on-click
      //function occurrs. currently non-functional.
          $(".input-group").empty();
          // $("#destinationInput").empty();
          // $("#trainTimeInput").empty();
          // $("#frequencyInput").empty();
  })
  

  function addRow(trn, dest, tme, freq) {
      var todayDate = moment(Date());
      console.log(todayDate);
      var todayTime = moment();
      console.log(todayTime);
      var firstTimeConverted = moment(time, "HH:HH").subtract(1, "years");
      console.log(firstTimeConverted);
      var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
      console.log(diffTime);
      var tRemainder = diffTime % frequency;
      console.log(tRemainder);
      var minutesAway = frequency - tRemainder;
      console.log(minutesAway);
      // var  = -(moment(nextArrival).diff(moment(), "minutes"));
      // var nextArrival = 


      //selects div with id emptyTable and appends  a new table row
      //with new tablecell with the objects for the train name,
      //destination, time and frequency. It is also supposed to append 
      //the new values for the calculated times for arrival but that
      //isnt working right now
      $("#emptyTable").append(
          '<tr>' +
          '<td>' + trn + '</td>' +
          '<td>' + dest + '</td>' +
          '<td>' + tme + '</td>' +
          '<td>Every ' + freq + ' minutes</td>' +
          '<td>' + "nextArrival" + '</td>' +
          '<td>' + minutesAway + '</td>' +
          '</tr>'
      );
  }