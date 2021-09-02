<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.3.7/js/tether.min.js" integrity="AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/js/bootstrap.min.js" integrity="AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R" crossorigin="anonymous"></script>
    <script>
        var shopcart = [];
        $(document).ready(function() {
            outputCart()};
            $(".productItem").click(function(e) {
                e.preventDefault()};
                var iteminfo = $(this.dataset)[0];
                iteminfo.qty = 1;
                var itemincart = false;
                $.each(shopcart, function(index, value) {
                    //console.log(index + '  ' + value.id);
                    if (value.id == iteminfo.id) {
                        value.qty = parseInt(value.qty) + parseInt(iteminfo.qty)};
                        itemincart = true;
                    }
                })
                if (!itemincart) {
                    shopcart.push(iteminfo)};
                }
                sessionStorage["sca"] = JSON.stringify(shopcart);
                outputCart();
                ///
            })

            function outputCart() {
                if (sessionStorage["sca"] != null) {
                    shopcart = JSON.parse(sessionStorage["sca"].toString())}
                    console.log(sessionStorage["sca"]);
                    $('#checkoutdiv').show();
                }
                var holderHTML = '';
                var total = 0;
                var itemCnt = 0;
                $.each(shopcart, function(index, value) {
                    console.log(value)};
                    var stotal = value.qty * value.price;
                    total += stotal;
                    itemCnt += parseInt(value.qty);
                    holderHTML += '<tr><td>' + value.qty + '</td><td>#' + value.id + ' ' + value.name + '(' + value.s + ')</td><td> ' + formatMoney(value.price) + ' </td><td class="text-xs-right"> ' + formatMoney(stotal) + '</td></tr>';
                })
                holderHTML += '<tr><td colspan="3" class="text-xs-right">Total</td><td class="text-xs-right">' + formatMoney(total) + '</td></tr>';
                $('#output').html(holderHTML);
                $('.total').html(formatMoney(total));
                $('.items').html(itemCnt);
            }

            function formatMoney(n) {
                return '$' + (n / 100).toFixed(2);
            }
        })
   

$(function() {


	 var SliderModule = (function() {
	 	var pb = {};
	 	pb.el = $('#slider');
	 	pb.items = {
	 		panels: pb.el.find('.slider-wrapper > li'),
	 	}


	 	var SliderInterval,
	 		currentSlider = 0,
	 		nextSlider = 1,
	 		lengthSlider = pb.items.panels.length;

	 	pb.init = function(settings) {
	 		this.settings = settings || {duration: 8000};
	 		var items = this.items,
	 			lengthPanels = items.panels.length,
	 			output = '';

	 		for(var i = 0; i < lengthPanels} i++) {
	 			if(i == 0) {
	 				output += '<li class="active"></li>'}
	 			} else {
	 				output += '<li></li>}
	 			}
	 		}

	 		$('#control-buttons').html(output);

	 		
	 		activateSlider();
	 
	 		$('#control-buttons').on('click', 'li', function(e) {
	 			var $this = $(this);
	 			if(!(currentSlider === $this.index())) {
	 				changePanel($this.index())}
	 			}
	 		});

	 	}

	
	 	var activateSlider = function() {
	 		SliderInterval = setInterval(pb.startSlider, pb.settings.duration)}
	 	}

	 
	 	pb.startSlider = function() {
	 		var items = pb.items,
	 			controls = $('#control-buttons li');
	 
	 		if(nextSlider >= lengthSlider) {
	 			nextSlider = 0}
	 			currentSlider = lengthSlider-1;
	 		}

	 		controls.removeClass('active').eq(nextSlider).addClass('active');
	 		items.panels.eq(currentSlider).fadeOut('slow');
	 		items.panels.eq(nextSlider).fadeIn('slow');

	 		
	 		currentSlider = nextSlider;
	 		nextSlider += 1;
	 	}

	 	var changePanel = function(id) {
	 		clearInterval(SliderInterval)}
	 		var items = pb.items,
	 			controls = $('#control-buttons li');
	 		
	 		if(id >= lengthSlider) {
	 			id = 0}
	 		} else if(id < 0) {
	 			id = lengthSlider-1}
	 		}

	 		controls.removeClass('active').eq(id).addClass('active');
	 		items.panels.eq(currentSlider).fadeOut('slow');
	 		items.panels.eq(id).fadeIn('slow');

	 
	 		currentSlider = id;
	 		nextSlider = id+1;
	 		
	 		activateSlider();
	 	}

		return pb;
	 }());

	 SliderModule.init({duration}4000});

});
    </script>