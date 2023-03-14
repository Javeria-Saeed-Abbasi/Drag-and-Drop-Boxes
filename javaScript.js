let id;
let btn1;
let btnId;
let selectedId;
$(document).ready(() => {
  $(function () {
    var click = false;
    $('#box1,#box2,#box3,#box4').draggable().resizable();
  });
  $( function() {
    $( "#leftbox" ).sortable();
  } );

  // document.ready col
})
  //Add  boxes;
var selectId= 5;
let arr = [];
  function addBtn() {
    // var firstbox= document.querySelector('.box');
    // console.log(firstbox);
    var newBox = $(
      '<div class="box" id="box5" data-bs-toggle="modal" data-bs-target="#exampleModal"><div class="item" id="item4"><button id="b5" onclick="return checkValue("b5")"></button></div></div>',
    )
    var newBoxId = $(newBox).attr("id", "box"+selectId++);
    $('.box-left').append(newBoxId);

  }
 


    //Delete Boxes;
    function deleteBtn() {
      $('.box').remove()
    }
    // $('#deleteBoxes').click(function () {
    //   $('.box').remove()
    // })


//   <!--  Modal-->
$(document).ready(function () {
  $('.box').click(function () {
    $('#exampleModal').modal('show')
  })
})



// Get the modal
var modal = document.getElementById('exampleModal')
// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName('btn-close')[0]
// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
  modal.style.display = 'none'
}
function getBtnId(clicked_id) {
  id = clicked_id
  console.log(id + ' getBtnFunction');
  var btn1 = document.getElementById(id)
  console.log(btn1);
  var boxDivs = document.getElementById(id).parentElement.parentElement;
  console.log(boxDivs);
  var boxID = $(boxDivs).attr("id");
  console.log(boxID + ' BoxID');
  var bgColor = document.getElementById('GFG_Color')
  bgColor.value = '#ffffff';
  btn1.style.backgroundColor = '#ffffff';
  btn1.innerHTML = '';

  // boxDivs.style.backgroundColor = '#ffffff';
  // boxDivs.innerHTML = '';
  // var btnId = $(btn1).attr("id");
  // console.log(btnId + ' getBtnFunction');
}

//Change the color:
function changeColor() {
  var btn1 = document.getElementById(id)
  console.log(btn1);

  // var boxDivs = document.getElementById(btn1).parentElement.parentElement;
  // console.log(boxDivs);

  var bgColor = document.getElementById('GFG_Color')
  console.log(bgColor.value)

  btn1.style.backgroundColor = bgColor.value;
  if ((bgColor.value) == '#000000') {
    btn1.style.color = '#ffffff';
  } else {
    btn1.style.color = '#000000';
  }
  // if(bgColor.value === "rgb(255, 255, 255)"){
  //     button1.style.color = 'white';
  // }
}
function checkValue() {
  // id = btnId
  // console.log(id + ' checkValueFunction')
  var button1 = document.getElementById(id)
  console.log(button1);
  // var boxDivs = document.getElementById(id).parentElement.parentElement;
  // console.log(boxDivs);
  var inputvalue = document.getElementById('modal1');
  console.log(inputvalue.value + ' inputValue');
  var buttonsubmit = document.getElementById('submit');
  var value = inputvalue.value;
  console.log(value)
  button1.innerHTML = value;
}
function onSubmit() {
  checkValue();
  changeColor();

}
$('#submit').click(function () {
  $('#exampleModal').modal('hide')
})
