/**
 * Created by Administrator on 2017/7/11 0011.
 */
 var app=angular.module('myApp',[]);
 app.controller('oneController',function ($scope) {
     $scope.name='呵呵';
     $scope.smg=0;
     $scope.$watch('name',function (newValue,oldValue) {
         console.log(newValue,oldValue);
         ++$scope.smg;
         if($scope.smg>30){
             $scope.name='后续点击不可以超过三十次'
         }
     })
 });