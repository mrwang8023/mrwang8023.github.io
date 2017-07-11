/**
 * Created by Administrator on 2017/7/11 0011.
 */
var app=angular.module('myApp',[]);
app.controller('oneController',function ($scope) {
    $scope.box=[
        {
            id:1,
            name:'思春',
            age:18
        },
        {
            id:2,
            name:'张悦',
            age:17
        },
        {
            id:3,
            name:'兵兵',
            age:16
        },
        {
            id:4,
            name:'程晨',
            age:17
        }

    ]
})