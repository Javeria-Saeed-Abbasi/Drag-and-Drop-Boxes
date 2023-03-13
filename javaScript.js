
let id;
let btn1;
let btnId;
$(document).ready(() => {
    let drag_id;
    $(function (drag_id) {
       $("#box1 ,#box2,#box3 ,#box4").draggable();
      });    
     
         //Add  boxes;
  $("#addBoxes").click(function () {
    var newBox = $('<div class="box" id="box5" data-bs-toggle="modal" data-bs-target="#exampleModal"><div class="item" id="item4"><button id="b5" onclick="return checkValue("b5")"></button></div></div>') 
    $('.box-left').append(newBox);
      });
      //Delete Boxes;
      $("#deleteBoxes").click(function(){
          $(".box").remove();
      });
// document.ready col
    });
  
      //   <!--  Modal-->
      $(document).ready(function () {
        $(".box").click(function () {
          $("#exampleModal").modal("show");
        });
      });
      
      function getBtnId(clicked_id)
      {
      var id = clicked_id;
        console.log(id + ' getBtnFunction');
        var btn1 = document.getElementById(id);
        console.log(btn1);
        var btnId = $(btn1).attr("id");
        console.log(btnId + ' getBtnFunction');  
      
      function checkValue() {
         id = btnId;
         console.log(id + ' checkValueFunction' );
       var inputvalue = document.getElementById('modal1');
       console.log(inputvalue.value + ' inputValue');
       var buttonsubmit = document.getElementById('submit');
       var value = inputvalue.value;
       console.log(value);
       id.innerText = value; 
      
      };
      checkValue();
      //Change the color:
      function changeColor() {
      var button1 = btn1;
      console.log(button1);
      var bgColor = document.getElementById("GFG_Color");
      button1.style.backgroundColor = bgColor.value;
      
      console.log(bgColor.value);
      // if(bgColor.value === "rgb(255, 255, 255)"){
      //     button1.style.color = 'white';
      // }
      };
      changeColor();
      //TEXT UPDATE: 
      // $(".box").click(function(clicked_id){
      //   var id = clicked_id;
      //   console.log(id);
      //   var btn1 = $(this.id).attr("id");
      //   console.log(btn1);
      // });
      };
      // Get the modal
      var modal = document.getElementById('exampleModal');
      // Get the <span> element that closes the modal
      var closeBtn = document.getElementsByClassName("btn-close")[0];
      // When the user clicks on <span> (x), close the modal
      closeBtn.onclick = function() {
        modal.style.display = "none";
      }
      
      $('#submit').click(function() {
        $('#exampleModal').modal('hide');
      });