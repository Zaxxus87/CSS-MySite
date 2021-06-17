
function getPlayers()   {
   for(var i = 0; i < players.length; i++)
   {
      players[i].style.display = "initial";
   }
}

function getNPCs() {
   for(var i = 0; i < npcs.length; i++)
   {
      npcs[i].style.display = "initial";
   }
}

function create_checkbox(actor) {   
   var init = document.getElementById("init_list");

   //creating checkbox element
   var checkbox = document.createElement('input');
             
   // Assigning the attributes
   // to created checkbox
   checkbox.type = "checkbox";
   checkbox.name = "name";
   checkbox.value = "value";
   checkbox.id = "id";
   checkbox.className = "init-ele";
    
   // creating label for checkbox
   var label = document.createElement('label');
   label.className = "label strikethrough";
    
   // assigning attributes for
   // the created label tag
   label.htmlFor = "id";
    
   // appending the created text to
   // the created label tag
   label.appendChild(document.createTextNode(actor));
    
   // appending the checkbox
   // and label to div
   init.appendChild(checkbox);
   init.appendChild(label); 
}


var pbtn = document.getElementById("p_submit");
var npcbtn = document.getElementById("npc_submit");
var inititive = document.getElementById("new-init");
var new_round = document.getElementById("new-round");
var ul = document.getElementById("init_list");
var players = document.querySelectorAll("ul.player-list li");
var npcs = document.querySelectorAll("ul.npc-list li");
for(var i = 1; i < players.length; i++)
{
   players[i].style.display = "none";
}
for(var i = 1; i < npcs.length; i++)
   {
      npcs[i].style.display = "none";
   }

pbtn.addEventListener("click", function() {
   getPlayers();
   var playerCount =  parseInt(document.getElementById("player-count").value);
   for(var i = playerCount; i < players.length; i++)
   {
      players[i].style.display = "none";
   }
})

npcbtn.addEventListener("click", function() {
   getNPCs();
   var npcCount =  parseInt(document.getElementById("npc-count").value);
   for(var i = npcCount; i < npcs.length; i++)
   {
      npcs[i].style.display = "none";
   }
})

inititive.addEventListener("click", function(){
   var arr = [];
   arr.push(parseInt(document.getElementById("p1-s").value)*100
   + parseInt(document.getElementById("p1-a").value)*10 + 1);

   arr.push(parseInt(document.getElementById("p2-s").value)*100
   + parseInt(document.getElementById("p2-a").value)*10 + 1);

   arr.push(parseInt(document.getElementById("p3-s").value)*100
   + parseInt(document.getElementById("p3-a").value)*10 + 1);

   arr.push(parseInt(document.getElementById("p4-s").value)*100
   + parseInt(document.getElementById("p4-a").value)*10 + 1);

   arr.push(parseInt(document.getElementById("p5-s").value)*100
   + parseInt(document.getElementById("p5-a").value)*10 + 1);

   arr.push(parseInt(document.getElementById("p6-s").value)*100
   + parseInt(document.getElementById("p6-a").value)*10 + 1);

   arr.push(parseInt(document.getElementById("p7-s").value)*100
   + parseInt(document.getElementById("p7-a").value)*10 + 1);

   arr.push(parseInt(document.getElementById("p8-s").value)*100
   + parseInt(document.getElementById("p8-a").value)*10 + 1);


   arr.push(parseInt(document.getElementById("npc1-s").value)*100
   + parseInt(document.getElementById("npc1-a").value)*10);

   arr.push(parseInt(document.getElementById("npc2-s").value)*100
   + parseInt(document.getElementById("npc2-a").value)*10);

   arr.push(parseInt(document.getElementById("npc3-s").value)*100
   + parseInt(document.getElementById("npc3-a").value)*10);

   arr.push(parseInt(document.getElementById("npc4-s").value)*100
   + parseInt(document.getElementById("npc4-a").value)*10);

   arr.push(parseInt(document.getElementById("npc5-s").value)*100
   + parseInt(document.getElementById("npc5-a").value)*10);

   arr.push(parseInt(document.getElementById("npc6-s").value)*100
   + parseInt(document.getElementById("npc6-a").value)*10);

   arr.push(parseInt(document.getElementById("npc7-s").value)*100
   + parseInt(document.getElementById("npc7-a").value)*10);

   arr.push(parseInt(document.getElementById("npc8-s").value)*100
   + parseInt(document.getElementById("npc8-a").value)*10);

   playerCount =  parseInt(document.getElementById("player-count").value);
   npcCount = parseInt(document.getElementById("npc-count").value);
   
   arr.sort(function(a, b){return a - b});
   arr.reverse();
   for(var i = 0; i < playerCount+npcCount; i++)
   {
      console.log(arr[i])
      if(arr[i] % 2 === 0)
         create_checkbox("NPC     ");
      else
         create_checkbox("Player");
   }

})

new_round.addEventListener("click", function(){
   var checkboxes = document.getElementsByClassName("init-ele");
   for(var i = 0; i < checkboxes.length; i++)
   {
      checkboxes[i].checked = false;
   }
   var counter = parseInt(document.getElementById("round").innerHTML);
   var new_value = counter + 1;
   document.getElementById("round").innerHTML = new_value;
})


