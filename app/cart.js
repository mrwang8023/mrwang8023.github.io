/**
 * Created by Administrator on 2017/7/11 0011.
 */
var app=angular.module('myApp',[]);
app.controller('oneController',function ($scope) {
    $scope.cart=[
        {
            id:100,
            name:'iphone5s',
            quantity:3,
            price:4300
        },
        {
            id:130,
            name:'iphone5',
            quantity:1,
            price:2100
        },
        {
            id:200,
            name:'imac',
            quantity:5,
            price:14300
        },
        {
            id:110,
            name:'ipad',
            quantity:30,
            price:3300
        }
    ];

    // 总价
    $scope.totalPrice=function () {
        var total=0;
        angular.forEach($scope.cart,function (i) {
            total+=i.quantity*i.price;
        });
        return total
    };

    //  总数
    $scope.totalQuantity=function () {
        var total=0;
        angular.forEach($scope.cart,function (i) {
            total+=i.quantity
        });
        return total
    };

    //封装共同函数

    var aa=function (id) {
        var index=0;
        angular.forEach($scope.cart,function (i,key) {
            if(i.id===id){
                index=key
                return
            }
        })
        return index
    }


    //  删除一个
    $scope.remove=function (id) {
        // console.log(id);
        index=aa(id);
        $scope.cart.splice(index,1);
    };

    //增加
    $scope.jia=function (id) {
      index=aa(id);
        ++$scope.cart[index].quantity;
    }

    //减少
    $scope.jian=function (id) {
        index=aa(id);
        if($scope.cart[index].quantity>1){
            --$scope.cart[index].quantity;
        }else {
            var alert=confirm('是否删除此项');
            if(alert){
                $scope.remove(id)
            }
        }
    }
});