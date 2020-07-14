(function($) {
 	var singleToasty;
 	function Toasty(elem, options){
 		this.options=options;
 	}

 	Toasty.prototype = {

 		init: function(){
 			$("body").append('<div id="toasty-guy-dan"><img src="'+ this.options.image +'" alt="toasty"></div>');
			$('#toasty-guy-dan').css('position', 'fixed');
			$('#toasty-guy-dan').css('right', '-200px');
			$('#toasty-guy-dan').css('bottom', '-5px');
			if(this.options.sound){
				$("body").append('<audio id="toasty-audio"><source src="'+ this.options.sound +'" type="audio/mpeg"></source></audio>');
 			}
 		},

 		pop: function(){
 			var audio = document.getElementById('toasty-audio');
			audio.play();
			audio.volume = 0.2;
			$("#toasty-guy-dan").addClass("show-dan");
			setTimeout( function(){ $("#toasty-guy-dan").removeClass("show-dan"); }, 1000);
 		}

 	}

 	$.fn.toasty = function(options) {

 		this.each(function(){
			// Check if we should operate with some method
			if (/^(pop)$/i.test(options)) {
				// Normalize method's name
				options = options.toLowerCase();
				switch(options){
					case 'pop':
						singleToasty.pop();
						break;
				}
			}else if (typeof options == 'object' || !options) {
				options = $.extend({}, $.fn.toasty.defaults, options);
				if(!singleToasty){
					singleToasty = new Toasty($(this), options);
					singleToasty.init();
				}
			}
 		});

	}

	$.fn.toasty.defaults = {
 		sound: true,
 		image: 'assets/toasty.png',
 		sound: 'assets/toasty.mp3'
 	};

})(jQuery);
