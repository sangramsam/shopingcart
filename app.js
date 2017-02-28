/**
 * Created by Geeks on 2/28/2017.
 */
var app = angular.module('ShoppingApp', []);
app.controller("myshop", ['$scope', function ($scope) {
    $scope.data = [
        {
            id: 1,
            price: 16999,
            totalPrice: 16999,
            img: 'img/asus.jpeg',
            quantity: 1,
            name: 'Asus Zenfone 3 Laser (Gold, 32 GB)'

        },
        {
            id: 2,
            price: 13499,
            totalPrice: 13499,
            img: 'img/lenevo.jpeg',
            quantity: 1,
            name: 'Lenovo Vibe K5 Note (Grey, 64 GB)'

        },
        {
            id: 3,
            price: 12999,
            totalPrice: 12999,
            img: 'img/mi.jpeg',
            quantity: 1,
            name: 'Redmi Note 4 (Dark Grey, 64 GB) '

        }


    ]
    $scope.add = function (id) {
        var qun = 1;
        console.log("id", id);
        angular.forEach($scope.data, function (key) {
            if (key.id == id) {
                var temp = key.price * 1;
                key.totalPrice = key.totalPrice + temp;
                key.quantity = key.quantity + 1;
            }
        });
        console.log($scope.data);
    };
    $scope.substract = function (id) {
        console.log("id substract", id);
        angular.forEach($scope.data, function (key) {
            if (key.id == id) {
                var temp = key.price * 1;
                key.totalPrice = key.totalPrice - temp;
                key.quantity = key.quantity - 1;
            }
        });
        console.log($scope.data);

    };
    $scope.addQunty = function (id, quantity) {
        console.log(id, quantity);
        angular.forEach($scope.data, function (key) {
            if (key.id == id) {
                var temp = key.price * quantity;
                key.totalPrice =  temp;
                key.quantity = quantity;
            }
        });
    };

    $scope.remove = function (id) {
        removeData($scope.data, 'id', id);
    }
    var removeData = function (arr, attr, value) {
        var i = arr.length;
        while (i--) {
            if (arr[i]
                && arr[i].hasOwnProperty(attr)
                && (arguments.length > 2 && arr[i][attr] === value )) {

                arr.splice(i, 1);

            }
        }
        return arr;
    }

}]);