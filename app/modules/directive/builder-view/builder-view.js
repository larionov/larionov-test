angular.module('larionovTest').controller('ModalInstanceCtrl', ['$scope', '$modalInstance', function (scope, $modalInstance) {
	scope.ok = function () {
		$modalInstance.close();
	};

	scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
}]);

angular.module('larionovTest').directive('builderView', ['builderData',  '$modal', '$http', function(builderData, $modal, $http) {
	return {
		restrict: 'E',
		replace: true,
		scope: {

		},
		templateUrl: 'modules/directive/builder-view/builder-view.html',
		link: function(scope, element, attrs, fn) {
			element.addClass('builder-view');

			scope.showEditor = false;
			scope.templateData = {};

			scope.status = {openedId: null};

			/* expand row */
			scope.open = function (itemId) {
				if (scope.status.openedId === itemId) {
					scope.status.openedId = null;
				} else {
					scope.status.openedId = itemId;
				}
			};


			scope.openModal = function (title) {
				scope.templateData.modalTitle = title;
				var modalInstance = $modal.open({
					templateUrl: 'myModalContent.html',
					controller: 'ModalInstanceCtrl',
					size: 'lg',
					scope: scope
				});
			};

			scope.onDataUpdated = function () {
				$http.get('/tasks/list').success(function (data) {
					scope.data = data;
					scope.dataEditor = angular.toJson(scope.data, true);
				});
			};

			scope.updateData = function () {
				$http.post('/tasks/list', angular.fromJson(scope.dataEditor));
				scope.onDataUpdated();
			};
			scope.onDataUpdated();

			scope.chartConfig = {
				colors: ['#ed7d31', '#538135'],
				title: '',
				tooltips: false,
				labels: true,
				isAnimate: true,
				waitForHeightAndWidth: true,
				legend: {
					display: false,
					//could be 'left, right'
					position: 'left'
				},
				innerRadius: 0, // applicable on pieCharts, can be a percentage like '50%'
				lineLegend: 'lineEnd' // can be also 'traditional'
			};
		}
	};
}]);



angular.module('larionovTest').directive('tableRow', ['$modal', '$resource', function($modal, $resource) {
	return {
		restrict: 'C',
		scope: true,
		link: function(scope, element, attrs, fn) {
			scope.$watch('item', function (item) {
				scope.itemStatus = item.state;
				if (item.type === "firewall") {
					if (item.state === "accepted") {scope.itemStatus = "success";}
					if (item.state === "rejected") {scope.itemStatus = "failure";}
				}

				if (item.type === "build") {
					if (item.state === "complete") {scope.itemStatus = "success";}
					if (item.state === "failed") {scope.itemStatus = "failure";}
				}

				if (item.unittest) {
					scope.chartUnitPercent = parseInt(100 * item.unittest.fail / (item.unittest.pass + item.unittest.fail));
					scope.chartUnitData = {
						"series": ["Tests"],
						"data": [
							{
								"x": "Passed",
								"y": [item.unittest.pass]
							},
							{
								"x": "Failed",
								"y": [item.unittest.fail]
							}
						]
					};
				}

				if (item.functest) {
					scope.chartFuncPercent = parseInt(100 * item.functest.fail / (item.functest.pass + item.functest.fail));
					scope.chartFuncData = {
						"series": ["Tests"],
						"data": [
							{
								"x": "Passed",
								"y": [item.functest.pass]
							},
							{
								"x": "Failed",
								"y": [item.functest.fail]
							}
						]
					};
				}
			});
		}
	};
}]);
