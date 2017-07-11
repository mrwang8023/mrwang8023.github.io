/**
 * Created by Administrator on 2017/7/10 0010.
 */
 var app=angular.module('myApp',[]);
 app.controller('oneController',function ($scope) {
     $scope.date=new Date();
     setInterval(function () {
         $scope.$apply(function ($scope) {
             $scope.date=new Date();
         })
     },1000)

 });