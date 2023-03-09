$(document).ready(() => {
    let drag_id;
    $(function (drag_id) {
       $("#box1").draggable();
      });      
    })
//   <!--  Modal-->
$(document).ready(function () {
    $(".box").click(function () {
      $("#exampleModal").modal("show");
    });
  });
 
  //Add  boxes;
  $("#addBoxes").click(function () {
    $(".box-left").append
    ('<div class="box" id="box5" data-bs-toggle="modal" data-bs-target="#exampleModal"><div class="item" id="item4"><button id="b5" onclick="return checkValue("b5")"></button></div></div>')
    alert('add button clicked');
});


let id;
//TEXT UPDATE: 
var btn1 = document.getElementById(id);
console.log(btn1);
// Get the modal
var modal = document.getElementById('exampleModal');
// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("btn-close")[0];
// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

//Change the color:
function changeColor() {
    var button1 = btn1;
    var bgColor = document.getElementById("GFG_Color")
    button1.style.backgroundColor = bgColor.value;
    if(bgColor.value === "rgb(255, 255, 255)"){
        button1.style.color = 'white';
    }
  };

// Arithematic Operator Control
function checkValue(btnid) { 
    id = btnid;
    console.log(id);
  var inputvalue = document.getElementById('modal1');
  var buttonsubmit = document.getElementById('submit');
  var value = inputvalue.value;
  console.log(value);
  id.innerText = value; 
  return false;
};

$('#submit').click(function() {
    $('#exampleModal').modal('hide');
  });

