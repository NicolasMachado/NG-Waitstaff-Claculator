angular.module('myApp', [])
  .controller('WaitStaffCtrl', function($scope) {
    var vm = this;

    $scope.submit = function() {
      if (!vm.mdBaseMealPrice) {
        return
      }
      vm.ccSubTotal = 0;
      vm.ccTip = 0;
      console.log(vm.mdBaseMealPrice);
      vm.ccSubTotal = vm.mdBaseMealPrice + (vm.mdBaseMealPrice*vm.mdTaxRate/100);
      vm.ccTip = vm.mdBaseMealPrice*vm.mdTipPercentage/100;

      vm.eiTipTotal += vm.ccTip;
      vm.eiMealCount ++;
      vm.mdBaseMealPrice = null;
    }

    $scope.init = function() {
      vm.ccSubTotal = 0;
      vm.ccTip = 0;

      vm.eiTipTotal = 0;
      vm.eiMealCount = 0;

      vm.mdBaseMealPrice = null;
      vm.mdTaxRate = 20;
      vm.mdTipPercentage = 15;
    }
    $scope.init();
  });
