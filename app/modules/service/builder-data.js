angular.module("larionovTest").factory("builderData",function() {

	var callback = null;
	var data = [
		{
			id: 1,
			name: "Tenrox-R1_1235",
			type: "build",
			owner: null,
			started: null,
			finished: null,
			state: "pending"
		}, {
			id: 2,
			name: "432462",
			type: "firewall",
			owner: "jtuck",
			started: "4/18/2014 12:12pm",
			state: "running",
			metrics: {
				total: 60,
				test: {value: 64, inc: true},
				maintainability: {value: 22, inc: false},
				security: {value: 99, inc: true},
				worksmanship: {value: 55, inc: true},
			}
		}, {
			id: 3,
			name: "432461",
			type: "firewall",
			owner: "samy",
			started: "4/18/2014 10:53am",
			state: "rejected",
			metrics: {
				total: 100,
				test: {value: 64, inc: true},
				maintainability: {value: 22, inc: false},
				security: {value: 99, inc: true},
				worksmanship: {value: 55, inc: true},
			},
			build: {
				total: 100,
				debug: true,
				release: true,
				finished: "10:46am - 4/17/2014",
			},
			unittest: {
				total: 100,
				pass: 142,
				fail: 10,
				coverage: 76,
				success: true
			},
			functest:  {
				total: 100,
				pass: 4321,
				fail: 2145,
				coverage: 23,
				success: false
			},
			result: {
				success: false,
				message: "Change Rejected",
				description: "Metrics Reduction",
				failure_step: "metrics"
			}
		}, {
			id: 4,
			name: "Tenrox-R1_1234",
			type: "build",
			owner: null,
			started: "4/17/2014 9:42am",
			state: "complete",
			metrics: {
				total: 100,
				test: {value: 64, inc: true},
				maintainability: {value: 53, inc: true},
				security: {value: 64, inc: true},
				worksmanship: {value: 72, inc: true},
			},
			build: {
				total: 100,
				debug: true,
				release: true,
				finished: "10:46am - 4/17/2014",
			},
			unittest: {
				total: 100,
				pass: 142,
				fail: 10,
				coverage: 76,
				success: true
			},
			functest:  {
				total: 100,
				pass: 4321,
				fail: 2145,
				coverage: 23,
				success: false
			},
			result: {
				success: true,
				message: "Complete"
			}
		}, {
			id: 5,
			name: "432460",
			type: "firewall",
			owner: "samy",
			started: "4/17/2014 7:51am",
			state: "rejected",
			metrics: {
				total: 100,
				test: {value: 64, inc: true},
				maintainability: {value: 22, inc: false},
				security: {value: 99, inc: true},
				worksmanship: {value: 55, inc: true},
			},
			result: {
				success: false,
				message: "Change Rejected",
				description: "Metrics Reduction",
				failure_step: "metrics"
			}
		}, {
			id: 6,
			name: "432459",
			type: "firewall",
			owner: "samy",
			started: "4/17/2014 9:42am",
			state: "accepted",
			metrics: {
				total: 100,
				test: {value: 64, inc: true},
				maintainability: {value: 53, inc: true},
				security: {value: 64, inc: true},
				worksmanship: {value: 72, inc: true},
			},
			build: {
				total: 100,
				debug: true,
				release: true,
				finished: "10:46am - 4/17/2014",
			},
			unittest: {
				total: 100,
				pass: 142,
				fail: 10,
				coverage: 76,
				success: true
			},
			functest:  {
				total: 100,
				pass: 4321,
				fail: 2145,
				coverage: 23,
				success: false
			},
			result: {
				success: true,
				message: "Change Accepted",
				description: "Auto Merged"
			}
		}
	];


	var builderData = {
		getData: function () {
			return data;
		},
		setData: function (d) {
			data = d;
			if (callback) {
				callback('update', data);
			}
		},
		on: function (event, cb) {
			callback = cb;
		}
	};

	return builderData;
});