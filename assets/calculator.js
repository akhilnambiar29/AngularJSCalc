/* JavaScript Document */

(function(){
	
	
	var app = angular.module('myCalculator',[]);
	
	app.controller('CalculatorController', ['$scope' , function($scope){
		
		
		//alert('success');
		$scope.lumen_options = [375 , 600 , 900 , 1125 , 1600];
		$scope.current_lumen = 600
		$scope.current_cost = 13;
		$scope.current_hours = 4
		$scope.total_days = 365;
		
		$scope.inc_conversion = 0.0625;
		$scope.hal_conversion = 0.0450;
		$scope.cfl_conversion = 0.0146;
		$scope.led_conversion = 0.0125;
		
		$scope.calculate = function(){
			$scope.inc_wattage = ($scope.current_lumen * $scope.inc_conversion).toFixed(1);
			$scope.hal_wattage = ($scope.current_lumen * $scope.hal_conversion).toFixed(1);
			$scope.cfl_wattage = ($scope.current_lumen * $scope.cfl_conversion).toFixed(1);
			$scope.led_wattage = ($scope.current_lumen * $scope.led_conversion).toFixed(1);
			
			if($scope.current_hours > 24){
				$scope.current_hours = 24;
			}
			
			var total_hours = $scope.current_hours * $scope.total_days;
			var cost = $scope.current_cost / 100;
			
			$scope.inc_cost = (((total_hours * $scope.inc_wattage)/1000) * cost ).toFixed(2);
			$scope.hal_cost = (((total_hours * $scope.hal_wattage)/1000) * cost ).toFixed(2);
			$scope.cfl_cost = (((total_hours * $scope.cfl_wattage)/1000) * cost ).toFixed(2);
			$scope.led_cost = (((total_hours * $scope.led_wattage)/1000) * cost ).toFixed(2);
			
		}
		
		$scope.calculate();
		
		
	}]);
	
	
	
	
	
	
	
	
})();


