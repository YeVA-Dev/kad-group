!function($) {

	"use strict"; // jshint ;_;

	var AffNew = function(element, options) {
		this.options = $.extend({}, $.fn.affixnew.defaults, options)
		this.$window = $(window).on('scroll.affixnew.data-api',
				$.proxy(this.checkPosition, this)).on(
				'click.affixnew.data-api', $.proxy(function() {
					setTimeout($.proxy(this.checkPosition, this), 1)
				}, this))
		this.$element = $(element)
		this.checkPosition()
	}

	AffNew.prototype.checkPosition = function() {
		this.$element.stop()
		var scrollTop = this.$window.scrollTop(), offset = this.options.offset, offsetTop = offset.top
		if (typeof offset != 'object')
			offsetBottom = offsetTop = offset
		if (typeof offsetTop == 'function')
			offsetTop = offset.top()
		if (typeof offsetBottom == 'function')
			offsetBottom = offset.bottom()
		var topPosition = offsetTop > scrollTop ? offsetTop : scrollTop;
		this.$element.animate({
			top : topPosition
		}, this.options.delay)
	}

	var old = $.fn.affixnew

	$.fn.affixnew = function(option) {
		return this
				.each(function() {
					var $this = $(this), data = $this.data('affixnew'), options = typeof option == 'object'
							&& option
					if (!data)
						$this.data('affixnew',
								(data = new AffNew(this, options)))
					if (typeof option == 'string')
						data[option]()
				})
	}
	$.fn.affixnew.Constructor = AffNew
	$.fn.affixnew.defaults = {
		offset : 0,
		delay : 300
	}

	$.fn.affixnew.noConflict = function() {
		$.fn.affixnew = old
		return this
	}

	$('[data-spy="affixnew"]').each(function() {
		var $spy = $(this), data = $spy.data()

		data.offset = data.offset || {}
		data.delay = data.delay || {}
		data.offsetTop && (data.offset.top = data.offsetTop)
		$spy.affixnew(data)
	})

}(window.jQuery);

/* карты */
!function($) {
	"use strict"; // jshint ;_;
	var myLatlng = new google.maps.LatLng(59.852586, 30.284883);
	var myOptions = {
		zoom : 15,
		center : myLatlng,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById("g_maps"), myOptions);
	var marker = new google.maps.Marker({
		position : myLatlng,
		map : map,
		title : "ООО «КАДгроуп»"
	});
}(window.jQuery);

!function($) {
	// слайдер фоновых картинок
	"use strict"; // jshint ;_;

	var SliderBg = function(element, options) {
		this.options = $.extend({}, $.fn.sliding.defaults, options)
		this.$element = $(element)
		setInterval($.proxy(this.startSlide, this), this.options.wait)
	}

	SliderBg.prototype.startSlide = function() {
		var last_slide = this.$element.children(":last") 
		this.$element.css('top', -last_slide.height())
		last_slide.clone().prependTo(this.$element)		
		last_slide.remove()
		this.$element.animate({
			top : 0
		}, this.options.delay)
	}

	var old_sl = $.fn.sliding

	$.fn.sliding = function(option) {
		return this
				.each(function() {
					var $this = $(this), data = $this.data('slide'), options = typeof option == 'object'
							&& option
					if (!data)
						$this.data('sliding', (data = new SliderBg(this,
								options)))
					if (typeof option == 'string')
						data[option]()
				})
	}

	$.fn.sliding.Constructor = SliderBg
	$.fn.sliding.defaults = {
		wait : 5000,
		delay : 1000
	}

	$.fn.sliding.noConflict = function() {
		$.fn.sliding = old_sl
		return this
	}

	$('[data-spy="sliding"]').each(function() {
		var $spy = $(this), data = $spy.data()
		data.wait = data.wait || {}
		data.delay = data.delay || {}
		$spy.sliding(data)
	})

}(window.jQuery);

!function($) {
	$('.top').on("click", function() {
		$(document).scrollTo(0, 500);
	})
}(window.jQuery);

