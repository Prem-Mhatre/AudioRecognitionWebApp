function startClassifier(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/rHuhnOiO5/", model_ready);
}
function model_ready(){
    classifier.classify(gotReady);
}