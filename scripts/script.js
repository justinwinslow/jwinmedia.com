$.expandBoxes = {
	
	which : [],
	height : [],
	expanded : [],
	
	init : function(){
		
		$('.box_expand').each(function(a){
			$.expandBoxes.which[a] = $(this).attr('id');
			$.expandBoxes.height[a] = $(this).children('.box_expand_content').height();
			$.expandBoxes.expanded[a] = true;
		});
		
		$.expandBoxes.collapse();
		
		$('.box_expand_header').click(function() {
			//var el = $.expandBoxes.which.indexOf($(this).parent(".box_expand").attr('id'));
			
			var el = jQuery.inArray($(this).parent(".box_expand").attr('id'), $.expandBoxes.which);
			
			if($.expandBoxes.expanded[el] == false){
				//alert('expand me');
				$.expandBoxes.expand(el);
				return
			}
			
			if($.expandBoxes.expanded[el] == true){
				//alert('collapse me');
				$.expandBoxes.collapse(el);
				return
			}
			
		});
	},
	
	expand : function(el){
		$('#' + $.expandBoxes.which[el]).children('.box_expand_header').css('background-image', 'url(images/icon_boxExpand_minus.png)');
		//$('#' + $.expandBoxes.which[el]).children('.box_expand_content').height($.expandBoxes.height[el]);
		
		$('#' + $.expandBoxes.which[el]).children('.box_expand_content').animate({
			height: $.expandBoxes.height[el]
		});
		
		$.expandBoxes.expanded[el] = true;
	},
	
	collapse : function(el){
		if(el == undefined){
			
			$('.box_expand_content').height(0);
			$('.box_expand_header').css('background-image', 'url(images/icon_boxExpand_plus.png)');
			
			var arrayLength = $.expandBoxes.expanded.length;
			for(a=0; a<=arrayLength; a++){
				$.expandBoxes.expanded[a] = false;
			}
			
		}else{
			$('#' + $.expandBoxes.which[el]).children('.box_expand_header').css('background-image', 'url(images/icon_boxExpand_plus.png)');
			$('#' + $.expandBoxes.which[el]).children('.box_expand_content').animate({
				height: 0
			});
			$.expandBoxes.expanded[el] = false;
		}
	}
	
}

$(document).ready(function(){

	$.expandBoxes.init();

});


