/**
 * Created by Marcos on 28/6/15.
 */

angular
    .module('myApp', [])
    .controller("myAppController", mainController);

function mainController()
{
    var scope = this;
    scope.total = 0;
    scope.quantity = 0;

    scope.add = function()
    {
       scope.total = scope.total + parseInt(scope.quantity);
    }

    scope.minus = function()
    {
        scope.total = scope.total - parseInt(scope.quantity);
    }
}