function StartClassifier(){
  //navigator.mediadevices.getUsermedia is to help to check the devices and get permision 
  //can recognize audio or not and get the permission from the user to access the device
navigator.mediaDevices.getUserMedia({
  audio: true
});

Classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/TR4_d9nR1/model.json", ModelReady)
}

function ModelReady(){
  Classifier.classify(gotResults);
}

function gotResults(error,result){
  if(error){
    console.log(error);
  }else{
    console.log(result);
    randum_number_r = Math.floor(Math.random()*255)
    randum_number_g = Math.floor(Math.random()*255)
    randum_number_b = Math.floor(Math.random()*255)

    document.getElementById("h1_hear").innerHTML = "I can hear " + result[0].label 

    document.getElementById("h1_hear").style.color = "rgb(" + randum_number_r + "," +randum_number_g+ "," +randum_number_b+ ")"

    document.getElementById("h1_accuracy").style.color = "rgb(" + randum_number_r + "," +randum_number_g+ "," +randum_number_b+ ")"

  }
}

