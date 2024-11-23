$(document).ready(function () {
  console.log("loaded");
  $('#one').click(function () {
    let currentValue = $('.display').val(); 
    $('.display').val(currentValue + '1');  })

  $('#two').click(function(){
      let currentValue=$('.display').val();
      $('.display').val(currentValue+'2');
  })
  
  $('#three').click(function(){
    let currentValue=$('.display').val();
    $('.display').val(currentValue+'3');
})

$('#four').click(function(){
  let currentValue=$('.display').val();
  $('.display').val(currentValue+'4');
})

$('#five').click(function(){
  let currentValue=$('.display').val();
  $('.display').val(currentValue+'5');
})

$('#six').click(function(){
  let currentValue=$('.display').val();
  $('.display').val(currentValue+'6');
})

$('#seven').click(function(){
  let currentValue=$('.display').val();
  $('.display').val(currentValue+'7');
})

$('#eight').click(function(){
  let currentValue=$('.display').val();
  $('.display').val(currentValue+'8');
})

$('#nine').click(function(){
  let currentValue=$('.display').val();
  $('.display').val(currentValue+'9');
})

$('#0').click(function(){
  let currentValue=$('.display').val();
  $('.display').val(currentValue+'0');
})

$('#plus').click(function(){
  let currentValue=$('.display').val();
  $('.display').val(currentValue+'+');
})

$('#minus').click(function(){
  let currentValue=$('.display').val();
  $('.display').val(currentValue+'-');
})
$('#multi').click(function(){
  let currentValue=$('.display').val();
  $('.display').val(currentValue+'*');
})

$('#slash').click(function(){
  let currentValue=$('.display').val();
  $('.display').val(currentValue+'/');
})
$('#cval').click(function(){
  let currentValue=$('.display').val();
  $('.display').val(' ');
})

$('#equal').click(function(){
  let currentValue=$('.display').val();
  let res=eval(currentValue);
  $('.display').val(res);
})

  
});
