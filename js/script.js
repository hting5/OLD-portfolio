$( document ).ready(function() {
		
		
/* ==================================== */	


	//set behavior for interactive images: CLICK | HOVERIN | HOVERINOUT
	var action = 'HOVERINOUT';
	
	var links = {
		'#vertical' :	{	
							'#vc' : 'images/vertical1.png',
							'#vm' : 'images/vertical2.png',
							'#vy' : 'images/vertical3.png'
						},
						
		'#horizontal' :	{	'#hc' : 'images/horizontal1.png',
							'#hm' : 'images/horizontal2.png',
							'#hy' : 'images/horizontal3.png'
						}
	}
	
	
/* ==================================== */

	
	//preloads images in the background to improve the responsiveness
	$.preload = function() {
		var _image = $('<img/>');
		_image[0].src = arguments[0];
	
		_image.on('load', function() {
       		console.log('Image ' + _image[0].src + ' loaded.');
		});
	}

	$.each(links, function(image, pair){
		$.each(links[image], function(reference, source){
			
			//preload image
			$.preload( source );
		
			if (action == 'HOVERINOUT') {
				var original = $( image ).attr( 'src' );
				$( 'area[href="' + reference + '"]').hover(function(){
					$( image ).attr( 'src', source );
				}, function(){
					$( image ).attr( 'src', original );
				});
			} else if (action == 'HOVERIN' ) {
				$( 'area[href="' + reference + '"]').hover(function(){
					$( image ).attr( 'src', source );
				});				
			} else if (action == 'CLICK' ) {
				$( 'area[href="' + reference + '"]').click(function(){
					$( image ).attr( 'src', source );
				});					
			}
		});
	});
	
	//makes image maps responsive	
	$('img[usemap]').rwdImageMaps();
	
	//removes blue selection border around image maps
	$( 'area' ).attr( 'onfocus', 'blur();' );
	
});
