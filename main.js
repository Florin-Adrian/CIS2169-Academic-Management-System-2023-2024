var pageCounter = 1;
var moduleContainer = document.getElementById('module-info');
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://raw.githubusercontent.com/Edge-Hill-Univeristy-Web/CIS2169-Academic-Management-System/main/module-'+ pageCounter +'.json');
  ourRequest.onload = function(){
    //console.log(ourRequest.responseText);
    var ourData = JSON.parse(ourRequest.responseText);
    //console.log(ourData[0]);
    renderHTML(ourData);
  };
  ourRequest.send();
pageCounter++;
if (pageCounter > 3){
//btn.classList.add("hide-me");
  btn.disabled = true;
}
});

function renderHTML(data){
  var htmlString = "";

  for(i = 0; i < data.length; i++){
    htmlString += "<p>" + data[i].Name + " is a " + data[i].Course + " has assements "; //".</p>";
    for(ii = 0; ii < data[i].Module.Assignment.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Assignment[ii];
      } else {
        htmlString += " and " + data[i].Module.Assignment[ii];
      }
    }
    htmlString += ' and Learning Outcome ';
    for(ii = 0; ii < data[i].Module.Learning_outcomes.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Learning_outcomes[ii];
      } else {
        htmlString += " and " + data[i].Module.Learning_outcomes[ii];
      }
    }

    htmlString += ' and Volume ';
    for(ii = 0; ii < data[i].Module.Volume.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Volume[ii];
      } else {
        htmlString += " and " + data[i].Module.Volume[ii];
      }
    }

    htmlString += ' and weights ';
    for(ii = 0; ii < data[i].Module.weights.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.weights[ii];
      } else {
        htmlString += " and " + data[i].Module.weights[ii];
      }
    }
    htmlString += '.</p>';
  }
  moduleContainer.insertAdjacentHTML('beforeend', htmlString);

}

var pageCounter = 1;
var moduleContainer = document.getElementById('module-info');
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'module-' + pageCounter + '.json');
  ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
  ourRequest.send();
  pageCounter++;
  if (pageCounter > 3){
    btn.disabled = true;
  }
});

function renderHTML(data){
  var htmlString = "";

  for(var i = 0; i < data.length; i++){
    htmlString += "<h2>Degree Programme: " + data[i].Name + "</h2>";
    htmlString += "<p>Course: " + data[i].Course + "</p>";
    htmlString += "<h3>Modules:</h3>";
    
    for(var j = 0; j < data[i].Module.length; j++){
      htmlString += "<p>Module Name: " + data[i].Module[j].Name + "</p>";
      htmlString += "<p>Module ID: " + data[i].Module[j].ID + "</p>";
      htmlString += "<p>Number of Hours: " + data[i].Module[j].Hours + "</p>";
      htmlString += "<p>Learning Outcomes: " + data[i].Module[j].Learning_outcomes.join(", ") + "</p>";
      htmlString += "<p>Number of Credits: " + data[i].Module[j].Credits + "</p>";
      
      htmlString += "<h4>Assessments:</h4>";
      for(var k = 0; k < data[i].Module[j].Assessments.length; k++){
        htmlString += "<p>Assessment Title: " + data[i].Module[j].Assessments[k].Title + "</p>";
        htmlString += "<p>Assessment Number: " + data[i].Module[j].Assessments[k].Number + "</p>";
        htmlString += "<p>Learning Outcomes Covered: " + data[i].Module[j].Assessments[k].Learning_outcomes.join(", ") + "</p>";
        htmlString += "<p>Volume: " + data[i].Module[j].Assessments[k].Volume + "</p>";
        htmlString += "<p>Weighting: " + data[i].Module[j].Assessments[k].Weighting + "</p>";
      }
    }
  }
  
  moduleContainer.insertAdjacentHTML('beforeend', htmlString);
}

