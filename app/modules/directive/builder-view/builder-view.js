angular.module('larionovTest').controller('ModalInstanceCtrl', ['$scope', '$modalInstance', function (scope, $modalInstance) {
	scope.ok = function () {
		$modalInstance.close();
	};

	scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
}]);

angular.module('larionovTest').directive('builderView', ['builderData',  '$modal', function(builderData, $modal) {
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
			builderData.on('update', function (event, data) {
				scope.data = data;
				if (!data) {return;}

				for (var i = 0;  i < scope.data.length; i++) {
					scope.initRow(scope.data[i]);
				}
			});

			scope.dataEditor = angular.toJson(builderData.getData(), true);
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

			scope.updateData = function () {
				builderData.setData(angular.fromJson(scope.dataEditor));
			};

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

			scope.initRow = function (item) {
				item._itemStatus = item.state;
				if (item.type === "firewall") {
					if (item.state === "accepted") {item._itemStatus = "success";}
					if (item.state === "rejected") {item._itemStatus = "failure";}
				}

				if (item.type === "build") {
					if (item.state === "complete") {item._itemStatus = "success";}
					if (item.state === "failed") {item._itemStatus = "failure";}
				}

				if (item.unittest) {
					item._chartUnitPercent = parseInt(100 * item.unittest.fail / (item.unittest.pass + item.unittest.fail));
					item._chartUnitData = {
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
					item._chartFuncPercent = parseInt(100 * item.functest.fail / (item.functest.pass + item.functest.fail));
					item._chartFuncData = {
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
			};

			scope.updateData();


		}
	};
}]);