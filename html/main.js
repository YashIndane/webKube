function launch_pod(){

  if (document.contains(document.getElementById("f"))){
    document.getElementById("f").remove();
  }

  form_i = document.createElement("form");
  form_i.action = "http://13.233.156.27/cgi-bin/launch_pod.py"
  form_i.id = "f";

  name_field = document.createElement("input");
  name_field.placeholder = "pod name";
  name_field.name = "pn";
  name_field.style.position = "absolute";
  name_field.style.top = "370px";
  name_field.style.left = "25px";
  name_field.style.outline = "none";

  image_name = document.createElement("input");
  image_name.placeholder = "image name";
  image_name.name = "in";
  image_name.style.position = "absolute";
  image_name.style.top = "420px";
  image_name.style.left = "25px";
  image_name.style.outline = "none";

  sub_button = document.createElement("button");
  sub_button.style.position = "absolute";
  sub_button.style.top = "470px";
  sub_button.style.left = "25px";
  sub_button.type = "submit";
  sub_button.innerHTML = "Launch";


  form_i.appendChild(name_field);
  form_i.appendChild(image_name);
  form_i.appendChild(sub_button);
  document.body.appendChild(form_i);
  
  
}

function launch_deployment(){

  if (document.contains(document.getElementById("f"))){
    document.getElementById("f").remove();
  }


  form_i = document.createElement("form");
  form_i.action = "http://13.233.156.27/cgi-bin/launch_deployment.py"
  form_i.id = "f";

  name_field = document.createElement("input");
  name_field.placeholder = "deployment name";
  name_field.name = "dn";
  name_field.style.position = "absolute";
  name_field.style.top = "370px";
  name_field.style.left = "25px";
  name_field.style.outline = "none";

  image_name = document.createElement("input");
  image_name.placeholder = "image name";
  image_name.name = "in";
  image_name.style.position = "absolute";
  image_name.style.top = "420px";
  image_name.style.left = "25px";
  image_name.style.outline = "none";

  sub_button = document.createElement("button");
  sub_button.type = "submit"
  sub_button.style.position = "absolute";
  sub_button.style.top = "470px";
  sub_button.style.left = "25px";
  sub_button.innerHTML = "Launch";


  form_i.appendChild(name_field);
  form_i.appendChild(image_name);
  form_i.appendChild(sub_button);
  document.body.appendChild(form_i);

}

function scale_deployment(){

  if (document.contains(document.getElementById("f"))){
    document.getElementById("f").remove();
  }


  form_i = document.createElement("form");
  form_i.action = "http://13.233.156.27/cgi-bin/scale_deployment.py"
  form_i.id = "f";

  name_field = document.createElement("input");
  name_field.placeholder = "deployment name";
  name_field.name = "dn";
  name_field.style.position = "absolute";
  name_field.style.top = "370px";
  name_field.style.left = "25px";
  name_field.style.outline = "none";

  replicas = document.createElement("input");
  replicas.placeholder = "no. of replicas";
  replicas.name = "nr";
  replicas.style.position = "absolute";
  replicas.style.top = "420px";
  replicas.style.left = "25px";
  replicas.style.outline = "none";

  sub_button = document.createElement("button");
  sub_button.type = "submit"
  sub_button.style.position = "absolute";
  sub_button.style.top = "470px";
  sub_button.style.left = "25px";
  sub_button.innerHTML = "Scale";


  form_i.appendChild(name_field);
  form_i.appendChild(replicas);
  form_i.appendChild(sub_button);
  document.body.appendChild(form_i);

}

function create_service(){

  if (document.contains(document.getElementById("f"))){
    document.getElementById("f").remove();
  }


  form_i = document.createElement("form");
  form_i.action = "http://13.233.156.27/cgi-bin/create_service.py"
  form_i.id = "f";

  name_field = document.createElement("input");
  name_field.placeholder = "deployment name";
  name_field.name = "dn";
  name_field.style.position = "absolute";
  name_field.style.top = "370px";
  name_field.style.left = "25px";
  name_field.style.outline = "none";

  port = document.createElement("input");
  port.placeholder = "port";
  port.name = "po";
  port.style.position = "absolute";
  port.style.top = "420px";
  port.style.left = "25px";
  port.style.outline = "none";

  type_sel = document.createElement("select")
  type_sel.name = "tys";
  Node_Port = document.createElement("option");
  Node_Port.text = "NodePort";
  type_sel.add(Node_Port);

  Load_Balancer = document.createElement("option");
  Load_Balancer.text = "LoadBalancer";
  type_sel.add(Load_Balancer);

  type_sel.style.position = "absolute";
  type_sel.style.left = "25px";
  type_sel.style.top = "470px";

  sub_button = document.createElement("button");
  sub_button.type = "submit"
  sub_button.style.position = "absolute";
  sub_button.style.top = "520px";
  sub_button.style.left = "25px";
  sub_button.innerHTML = "Create";


  form_i.appendChild(name_field);
  form_i.appendChild(port);
  form_i.appendChild(sub_button);
  form_i.appendChild(type_sel);
  document.body.appendChild(form_i);


}

function Delete(){

  if (document.contains(document.getElementById("f"))){
    document.getElementById("f").remove();
  }


  form_i = document.createElement("form");
  form_i.action = "http://13.233.156.27/cgi-bin/delete.py"
  form_i.id = "f";

  name_f = document.createElement("input");
  name_f.placeholder = "name";
  name_f.name = "na";
  name_f.style.position = "absolute";
  name_f.style.top = "370px";
  name_f.style.left = "25px";
  name_f.style.outline = "none";

  type_sel = document.createElement("select")
  type_sel.name = "tys";
  svc = document.createElement("option"); 
  svc.text = "Service"
  type_sel.add(svc);
  
  pod = document.createElement("option");
  pod.text = "Pod";
  type_sel.add(pod);

  dep = document.createElement("option");
  dep.text = "Deployment";
  type_sel.add(dep);

  type_sel.style.position = "absolute";
  type_sel.style.left = "25px";
  type_sel.style.top = "420px";

  sub_button = document.createElement("button");
  sub_button.type = "submit"
  sub_button.style.position = "absolute";
  sub_button.style.top = "470px";
  sub_button.style.left = "25px";
  sub_button.innerHTML = "Delete";


  form_i.appendChild(name_f);
  form_i.appendChild(sub_button);
  form_i.appendChild(type_sel);
  document.body.appendChild(form_i);

}

function run_command(){

 var command = document.getElementById("cli").value;
 
 var xhr = new XMLHttpRequest();
 var queryString = "http://13.233.156.27/cgi-bin/command.py?cmd=" + command;

 //go to API
 xhr.open("GET", queryString, true);
 
 xhr.send();
 
 xhr.onload = function() {

   //get the response from API
   var output = xhr.responseText;
   
   //writing the output to a place
   document.getElementById("out").innerHTML = output;

 }
 
}

function interact(){


 imgx = document.createElement("img");
 imgx.src = "microphone.gif";
 imgx.style.position = "absolute";
 imgx.style.top = "85px";
 imgx.style.left = "440px";
 imgx.id = "im";
 document.body.append(imgx);
  

 const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
 const recog = new SR();

 var xhr = new XMLHttpRequest();


 recog.onstart = () => console.log('speak');

 recog.onresult = function(event){
                 
                 document.getElementById("out").innerHTML = "";
                 document.getElementById("im").remove();
                
                 
                 (async() => {
                   speak("Ok I will do that");
                   await sleep(3000);
                 

                 const current = event.resultIndex; 
                 const transcript = event.results[current][0].transcript;

                 var queryString = "http://13.233.156.27/cgi-bin/interact.py?cmd=" + transcript;
                 xhr.open("GET", queryString, true);
                 xhr.send();
                 xhr.onload = function(){
                   var output = xhr.responseText;
                   document.getElementById("out").innerHTML = output;
                     
                 }
                })()
                 
 };

 function speak(msg){

    const speech = new SpeechSynthesisUtterance();
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
 }

 const DEF_DELAY = 1000;
 function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));
 }

 //await sleep(100);

 (async()=>{

   speak("How can I help you");
   await sleep(3000);
   recog.start();
   await sleep(4000);

 })()
}
