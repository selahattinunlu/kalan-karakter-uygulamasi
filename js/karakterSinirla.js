$(function(){
	$('#karakterSinirla textarea').keyup(function(){
		karakter_say();
	});

	karakter_say = function(){
		yazilan = $('#karakterSinirla textarea').val();
		toplam  = yazilan.length;
		limit = 140;
		kalan = limit - toplam;
		if( kalan >= 0 ){
			$('#karakterSinirla span').text(kalan);
		}else{
			$('#karakterSinirla span').html('<font color="red">'+ kalan +'</font>');
		}
	}
});