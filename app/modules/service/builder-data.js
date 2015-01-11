angular.module("larionovTest").factory("builderData", ['$httpBackend', '$resource', function($httpBackend, $resource) {

	var callback = null;

	var data = $resource("assets/data.json").query();

	$httpBackend.whenGET('/tasks/list').respond(function () {
		return [200, data];
	});
	$httpBackend.whenPOST('/tasks/list').respond(function (method, url, d) {
		data = angular.fromJson(d);
		return [200, data];
	});

}]);