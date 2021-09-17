function startClassifier(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/rHuhnOiO5/model.json", model_ready);
}
function model_ready(){
    classifier.classify(gotResult);
}
function gotResult(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);

        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);

        document.getElementById("result_label").innerHTML = "Detected Voice Of - " + result[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy of Barking - " + (result["meowing"].confidence * 100).toFixed(2) + "%" + " Accuracy Of Meowing - " + (result[0].confidence * 100).toFixed(2) + "%"; 
        document.getElementById("result_confidence").style.color = "rgb("+r+","+g+", "+b+")";
        document.getElementById("result_label").style.color = "rgb("+r+","+g+", "+b+")";


        if(result[0].label == "meowing"){
            document.getElementById("img_result").src = "cat.png";
        }
        else if(result[0].label == "barking"){
            document.getElementById("img_result").src = "dog.png";
        }
        else{
            document.getElementById("img_result").src = "ear.png";
            document.getElementById("result_confidence").innerHTML = "";
            document.getElementById("result_label").innerHTML = "I Can Hear";
        }
    }
}