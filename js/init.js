$(document).ready(function() {
   $("#box1").on("click",function(){
   		$(".active_present").addClass('panel');
   		$(".present_block").addClass('present_block_hidden');
    });
});
$(document).ready(function() {
   $("#box2").on("click",function(){
   	   $(".wrap_active_present").addClass('reverse');
   	     $(".active_present").addClass('panel');
   		$(".present_block").addClass('present_block_hidden');
    });
});
