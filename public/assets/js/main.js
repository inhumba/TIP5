$(function() {

	//*****************************************************//

	// Mobile nav
	if(jQuery().mmenu){
		$('#mobilenav').mmenu({
			// autoHeight: true,
			navbar: {
				title: 'Menu'
			},
			dropdown: {
				drop: true,
				tip: false
			}
		}, {
			clone: false,
			dropdown: {
				offset: {
					button: {
						x: 'right',
						y: 10
					}
				}
			}
		});
	}

	//*****************************************************//

	// Testimonials Carousel
	if(jQuery().owlCarousel){
		$('.testimonials-carousel').owlCarousel({
			// autoplay: true,
			items: 1.5,
			loop: true,
			dots: false,
			nav: false,
			margin: 15,
			responsiveClass: true,
			responsive: {
				767: {
					items: 3,
					dots: false,
					nav: true
				},
				991: {
					items: 4,
					dots: true,
					dotsEach: true,
					nav: true
				}
			},
			navText : ["<span class='arrow-left'></span>","<span class='arrow-right'></span>"]
		});

		$('.promotion-carousel').owlCarousel({
			// autoplay: true,
			items: 1.5,
			loop: true,
			dots: false,
			nav: false,
			margin: 15,
			responsiveClass: true,
			responsive: {
				767: {
					items: 1.5,
					dots: true,
					dotsEach: true,
					nav: true
				},
				991: {
					items: 1.5,
					dots: true,
					dotsEach: true,
					nav: true
				}
			},
			navText : ["<span class='arrow-left'></span>","<span class='arrow-right'></span>"]
		});

	}

	//*****************************************************//

	// Tooltips
	$('[data-toggle="tooltip"]').tooltip();

	//*****************************************************//

	// Addon
	$('#modal-addon .btn-choose').on('click', function () {
		if (!$(this).hasClass('active')) {
			$(this).parent('.addon-item').addClass('has--choose');
		} else {
			$(this).parent('.addon-item').removeClass('has--choose');
		}
	});

	if( $(window).outerWidth() >= 768 ) {
		$('#infoaddon-1, #infoaddon-2').collapse('show');
	}

	$('#modal-addon').on('shown.bs.modal', function () {
		$('body').addClass('modal-open');
	});

	//*****************************************************//

	var compareItem = 0;
	var item1 ='';
	var item2 = '';
	var item3 = '';
	var limitMobile = 2;
	var limitDesktop = 3;

	// Compare
	$('#package .btn-group-toggle .btn-compare').on('click', function () {
		var packageID = $(this).parent('.btn-group-toggle').data('package');
		var packagePrice = $(this).parent('.btn-group-toggle').data('price');
		var packageColor = $(this).parent('.btn-group-toggle').data('color');

		if( $(window).outerWidth() < 1200 ) { // check on mobile

			// console.log("mobile click on", packageID, packagePrice, packageColor);

			if( !$(this).hasClass('active') ) { // click new item

				if( compareItem < (limitMobile - 0) ) {
					compareItem = compareItem + 1;
					// console.log("mobile new", compareItem, '/', limitMobile);

					if ( compareItem === 1 ) { // open
						showCanvas('#compare-canvas');

						if ( !item1 ) { // insert 1
							$('.compare-item.item-1').attr('data-package', packageID).attr('data-price', packagePrice).attr('data-color', packageColor);
							$('.compare-item.item-1').append(packageID +'<span>'+ packagePrice +'</span><i class="i1" data-package="' + packageID + '" data-price="'+ packagePrice +'" data-color="'+ packageColor +'"></i>');
							item1 = packageID;
							// console.log(item1);
						}

					} else if( compareItem === 2 ) { // insert 2

						if ( !item1 ) {
							$('.compare-item.item-1').attr('data-package', packageID).attr('data-price', packagePrice).attr('data-color', packageColor);
							$('.compare-item.item-1').append(packageID +'<span>'+ packagePrice +'</span><i class="i1" data-package="' + packageID + '" data-price="'+ packagePrice +'" data-color="'+ packageColor +'"></i>');
							item1 = packageID;
							// console.log(item1);
						} else {
							$('.compare-item.item-2').attr('data-package', packageID).attr('data-price', packagePrice).attr('data-color', packageColor);
							$('.compare-item.item-2').append(packageID +'<span>'+ packagePrice +'</span><i class="i2" data-package="' + packageID + '" data-price="'+ packagePrice +'" data-color="'+ packageColor +'"></i>');
							item2 = packageID;
							// console.log(item2);
						}

					}

				} else {
					// console.log('Limit ! now is', compareItem, '/', limitMobile);
					return false;
				}

			} else { // click itself

				if( compareItem <= (limitMobile - 0) ) {
					compareItem = compareItem - 1;
					// console.log("mobile remove", compareItem, '/', limitMobile);

					if( packageID === item1 ) {
						$('.compare-item.item-1').empty().attr('data-package', '').attr('data-price', '').attr('data-color', '');
						item1 = '';
					} else if( packageID === item2 ) {
						$('.compare-item.item-2').empty().attr('data-package', '').attr('data-price', '').attr('data-color', '');
						item2 = '';
					}

					if (compareItem === 0) { // close
						$('#compare-canvas').removeClass('is--visible');
					}

				} else {
					// console.log('Limit ! now is', compareItem, '/', limitMobile);
					return false;
				}

			}

		} else if( $(window).outerWidth() >= 1200 ) { // check on desktop

			// console.log("desktop click on", packageID, packagePrice, packageColor);

			if( !$(this).hasClass('active') ) { // click new item

				if( compareItem < (limitDesktop - 0) ) {
					compareItem = compareItem + 1;
					// console.log("desktop new", compareItem, '/', limitDesktop);

					if ( compareItem === 1 ) { // open
						showCanvas('#compare-canvas');

						if ( !item1 ) { // insert 1
							$('.compare-item.item-1').attr('data-package', packageID).attr('data-price', packagePrice).attr('data-color', packageColor);
							$('.compare-item.item-1').append(packageID +'<span>'+ packagePrice +'</span><i class="i1" data-package="' + packageID + '" data-price="'+ packagePrice +'" data-color="'+ packageColor +'"></i>');
							item1 = packageID;
							// console.log(item1);
						}

					} else if( compareItem === 2 ) { // insert 2

						if ( !item1 ) {
							$('.compare-item.item-1').attr('data-package', packageID).attr('data-price', packagePrice).attr('data-color', packageColor);
							$('.compare-item.item-1').append(packageID +'<span>'+ packagePrice +'</span><i class="i1" data-package="' + packageID + '" data-price="'+ packagePrice +'" data-color="'+ packageColor +'"></i>');
							item1 = packageID;
							// console.log(item1);
						} else if( !item2 ) {
							$('.compare-item.item-2').attr('data-package', packageID).attr('data-price', packagePrice).attr('data-color', packageColor);
							$('.compare-item.item-2').append(packageID +'<span>'+ packagePrice +'</span><i class="i2" data-package="' + packageID + '" data-price="'+ packagePrice +'" data-color="'+ packageColor +'"></i>');
							item2 = packageID;
							// console.log(item2);
						} else {
							$('.compare-item.item-3').attr('data-package', packageID).attr('data-price', packagePrice).attr('data-color', packageColor);
							$('.compare-item.item-3').append(packageID +'<span>'+ packagePrice +'</span><i class="i3" data-package="' + packageID + '" data-price="'+ packagePrice +'" data-color="'+ packageColor +'"></i>');
							item3 = packageID;
							// console.log(item3);
						}

					} else if( compareItem === 3 ) { // insert 3

						if ( !item1 ) {
							$('.compare-item.item-1').attr('data-package', packageID).attr('data-price', packagePrice).attr('data-color', packageColor);
							$('.compare-item.item-1').append(packageID +'<span>'+ packagePrice +'</span><i class="i1" data-package="' + packageID + '" data-price="'+ packagePrice +'" data-color="'+ packageColor +'"></i>');
							item1 = packageID;
							// console.log(item1);
						} else if( !item2 ) {
							$('.compare-item.item-2').attr('data-package', packageID).attr('data-price', packagePrice).attr('data-color', packageColor);
							$('.compare-item.item-2').append(packageID +'<span>'+ packagePrice +'</span><i class="i2" data-package="' + packageID + '" data-price="'+ packagePrice +'" data-color="'+ packageColor +'"></i>');
							item2 = packageID;
							// console.log(item2);
						} else {
							$('.compare-item.item-3').attr('data-package', packageID).attr('data-price', packagePrice).attr('data-color', packageColor);
							$('.compare-item.item-3').append(packageID +'<span>'+ packagePrice +'</span><i class="i3" data-package="' + packageID + '" data-price="'+ packagePrice +'" data-color="'+ packageColor +'"></i>');
							item3 = packageID;
							// console.log(item3);
						}

					}

				} else {
					// console.log('Limit ! now is', compareItem, '/', limitDesktop);
					return false;
				}

			} else { // click itself

				if( compareItem <= (limitDesktop - 0) ) {
					compareItem = compareItem - 1;
					// console.log("desktop remove", compareItem, '/', limitDesktop);

					if( packageID === item1 ) {
						$('.compare-item.item-1').empty().attr('data-package', '').attr('data-price', '').attr('data-color', '');
						item1 = '';
					} else if( packageID === item2 ) {
						$('.compare-item.item-2').empty().attr('data-package', '').attr('data-price', '').attr('data-color', '');
						item2 = '';
					} else if( packageID === item3 ) {
						$('.compare-item.item-3').empty().attr('data-package', '').attr('data-price', '').attr('data-color', '');
						item3 = '';
					}

					if (compareItem === 0) { // close
						$('#compare-canvas').removeClass('is--visible');
					}

				} else {
					// console.log('Limit ! now is', compareItem, '/', limitDesktop);
					return false;
				}

			}

		} else {
			// console.log('What Device !');
			return false;
		}

	});

	// click cancel button on canvas
	$('#compare-canvas .btn-cancel').on('click', function () {
		$('#compare-canvas').removeClass('is--visible');
		$('#package .btn-group-toggle').find('.btn-compare').removeClass('active');
		$('.compare-item').empty().attr('data-package', '').attr('data-price', '').attr('data-color', '');
		compareItem = 0;
		item1 = '';
		item2 = '';
		item3 = '';
		return false;
	});

	// click remove item on canvas
	$('#compare-canvas .compare-item').delegate('i', 'click', function () {
		var packageID = $(this).data('package');
		var packagePrice = $(this).data('price');
		var packageColor = $(this).data('color');

		// console.log("cross click on", packageID, packagePrice, packageColor);

		$('#package .btn-group-toggle[data-package="' + packageID + '"][data-price="'+ packagePrice +'"][data-color="'+ packageColor +'"]').find('.btn-compare').removeClass('active');

		compareItem = compareItem - 1;

		if( compareItem === 0 ) {
			$('#compare-canvas').removeClass('is--visible');
			$('.compare-item').empty().attr('data-package', '').attr('data-price', '').attr('data-color', '');
			compareItem = 0;
			item1 = '';
			item2 = '';
			item3 = '';
		}

		if( $(this).hasClass('i1') ) {
			$('.compare-item.item-1').empty().attr('data-package', '').attr('data-price', '').attr('data-color', '');
			item1 = '';
		} else if( $(this).hasClass('i2') ) {
			$('.compare-item.item-2').empty().attr('data-package', '').attr('data-price', '').attr('data-color', '');
			item2 = '';
		} else if( $(this).hasClass('i3') ) {
			$('.compare-item.item-3').empty().attr('data-package', '').attr('data-price', '').attr('data-color', '');
			item3 = '';
		}
	});

	//*****************************************************//

	// Form Accordion
	$('.info-collapse').on('show.bs.collapse', function () {
		$(this).parent('.form-card').addClass('is--opened');
	});
	$('.info-collapse').on('hide.bs.collapse', function () {
		$(this).parent('.form-card').removeClass('is--opened');
	});

	//*****************************************************//

	// Offcanvas panel
	$('.show-canvas').on('click', function(e) {
		var canvasPosition = $(this).data('canvas-position'),
			theCanvas = '.' + canvasPosition + '.canvas';
		showCanvas(theCanvas);
		e.preventDefault();
	});

	$('.hide-canvas').on('click', function(e) {
		var canvasPosition = $(this).data('canvas-position'),
			theCanvas = '.' + canvasPosition + '.canvas';
		$(theCanvas).removeClass('is--visible');
		e.preventDefault();
	});

	function showCanvas(theCanvas) {
		if ($(theCanvas).hasClass('is--visible')) {
			$(theCanvas).removeClass('is--visible');
		} else {
			$(theCanvas).addClass('is--visible');
		}
	}

	//*****************************************************//

	// Summary
	$('.payment-type .full-pay').on('click', function() {
		if($(this).hasClass('active')) {
			$('#full-field').removeClass('u--display--none');
			$('#installment-field').addClass('u--display--none');
		}
	});
	$('.payment-type .installment-pay').on('click', function() {
		if($(this).hasClass('active')) {
			$('#full-field').addClass('u--display--none');
			$('#installment-field').removeClass('u--display--none');
		}
	});

	//*****************************************************//

	// Acceptance
	$('.acceptance .btn').on('click', function() {
		if(!$(this).hasClass('active')) {
			$('#modal-acceptance').modal('show');
			$('.btn-next').toggleClass('is--hidden');
		} else {
			$('.btn-next').toggleClass('is--hidden');
			$('#btn-acceptance').attr('data-acceptance', 'false');
		}
	});

	$('#btn-acceptance').on('click', function() {
		$(this).attr('data-acceptance', 'true');
		$('#modal-acceptance').modal('hide');
	});

	$('#modal-acceptance').on('hidden.bs.modal', function() {
		if($('#btn-acceptance').attr('data-acceptance') ===  'false') {
			$('input#acceptance').trigger('click');
		}
	});

	//*****************************************************//

	// Calendar
	$('#datepicker .calendar').datepicker({
		format: 'dd/mm/yyyy',
		startDate: 'today',
		autoclose: true,
		templates: {
			leftArrow: '&#10229;',
			rightArrow: '&#10230;'
		}
	}).on('hide', function(e) {
		e.stopPropagation();
    });

});