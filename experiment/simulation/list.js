class List{
    constructor(){
      this.iterator1 = 0;
      this.iterator2 = 0;
      this.numOfCards = 8;
      this.finished = false;
      this.action = 0;
      this.fn_name = "";
      this.card;
      this.comparisons = 0;
      this.swaps = 0;
      this.operation = "";
      this.interval = 0;
      this.num = [];
      this.flag = 0;
    };
  };
  let bubble_artefact = new List();
  
  function main_functions()
  { 
    randomise();
    handlers();
  };
  document.body.onload = function() {main_functions();}
  function handlers(){
    document.getElementById("reverse").onclick = function() {reverse();};
    document.getElementById("append").onclick = function() {append();};
    document.getElementById("pop").onclick = function() {pop();};
    };
  
  function randomise()
  { 
    var classToFill = document.getElementById("cards");
    var newdiv = document.createElement("div");
    newdiv.outerHTML="<br><br>"
      for (var i = 0; i < bubble_artefact.numOfCards; i++){
        bubble_artefact.num[i] = Math.floor(Math.random() * 90 + 10);
        var temp = document.createElement("div");
        temp.className = "card";
        temp.innerHTML = bubble_artefact.num[i];
        temp.style.fontStyle = "normal";
        temp.style.color = "white";
        classToFill.appendChild(temp);
      }
      classToFill.appendChild(newdiv)
    bubble_artefact.flag=0;
  };

  function pop()
  {
    bubble_artefact.numOfCards-=1;
    bubble_artefact.num.pop();
    var classToFill = document.getElementById("observations");
    var newdiv = document.createElement("div");
    newdiv.outerHTML="<br><br>"
      for (var i = 0; i < bubble_artefact.numOfCards; i++){
        var temp = document.createElement("div");
        temp.className = "card";
        temp.innerHTML = bubble_artefact.num[i];
        temp.style.fontStyle = "normal";
        temp.style.color = "white";
        classToFill.appendChild(temp);
      }
    classToFill.appendChild(newdiv)
    bubble_artefact.flag=0;
  };

  function reverse()
  {
    var classToFill = document.getElementById("observations");
    var newdiv = document.createElement("div");
    newdiv.outerHTML="<br><br>"
      for (var i = 0; i < bubble_artefact.numOfCards; i++){
        var temp = document.createElement("div");
        temp.className = "card";
        temp.innerHTML = bubble_artefact.num[bubble_artefact.numOfCards-i-1];
        temp.style.fontStyle = "normal";
        temp.style.color = "white";
        classToFill.appendChild(temp);
      }
    classToFill.appendChild(newdiv)
    bubble_artefact.flag=0;
  };

  function reload(){
    location.reload(true);
  };