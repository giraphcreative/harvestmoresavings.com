

$(function(){

	/*
	$(".calculator.home").accrue({
		mode: "compare",
		response_output_div: ".result.home",
		response_compare:"You Save: <strong>$%savings%</strong>",
		error_text:"",
	});
	*/

	$(".calculator.loan-auto").accrue({
		mode: "compare",
		response_output_div: ".result.auto",
		response_compare:"You Save: <strong>$%savings%</strong>",
		error_text:"",
		/*
		callback:function(elem, data){
			console.log( data );
			if ( typeof( data.savings ) !== 'undefined' ) {
				if ( data.savings > 950 ) {
					$(elem).find('.result.auto').html('You Save: <strong>$950</strong>');
				}
			}
		}
		*/
	});

	/*
	$(".calculator.loan-personal").accrue({
		mode: "compare",
		response_output_div: ".result.personal",
		response_compare:"You Save: <strong>$%savings%</strong>",
		error_text:"",
	});
	*/

	$(".numbers-only").keyup(function(){
		var fixed=$(this).val().replace(/[^0-9.]/g,"");
		$(this).val( fixed );
	});

});

