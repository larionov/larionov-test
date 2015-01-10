angular.module('larionovTest').directive('buildArrow', function() {
	return {
		restrict: 'E',
		scope: {
			value: '='
		},
		link: function(scope, element, attrs, fn) {
			element.addClass('arrow');

			scope.$watch('value', function () {
				var value = scope.value;
				element.html('');
				element.removeClass('up down left right green red yellow');
				if (!value) {return;}

				if (attrs.arrowType === 'vert') {
					element.addClass(value.inc ? 'up green' : 'down red');
				} else {
					element.addClass(value.inc ? 'right yellow' : 'left yellow');
				}
				if (element.hasClass('up') || element.hasClass('left')) {
					element.append('<div class="tri"></div><div class="bar"></div>');
				} else {
					element.append('<div class="bar"></div><div class="tri"></div>');
				}
				element.append('<div class="text"><span>' + value.value + '</span></div>');
			});
		}
	};
});