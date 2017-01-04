$(document).ready(function () {
	//view more link

	$('ul.filter-block__list').each(function(){
    var $ul = $(this),
        $lis = $ul.find('li:gt(4)'),
        isExpanded = $ul.hasClass('expanded');
    $lis[isExpanded ? 'show' : 'hide']();
    
    if($lis.length > 0){
        $ul
            .append($('<li class="expand"><a href="#">' + (isExpanded ? '<span class="glyphicon glyphicon-menu-up"></span> View Less' : '<span class="glyphicon glyphicon-menu-down"></span> View More') + '</a></li>')
            .click(function(event){
                var isExpanded = $ul.hasClass('expanded');
                event.preventDefault();
                $(this).html(isExpanded ? '<a href="#"><span class="glyphicon glyphicon-menu-down"></span> View More</a>' : '<a href="#"><span class="glyphicon glyphicon-menu-up"></span> View Less</a>');
                $ul.toggleClass('expanded');
                $lis.slideToggle();
            }));
    }
});
	
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

});

// Angular Iteration product list
angular.module('list', []);

function ListCtrl($scope, $http) {
  $http({
    method: 'GET',
    url: 'json_products.json'
  }).success(function(data) {
    $scope.products = data.products; // response data
    $scope.features = [];
    angular.forEach(data.products, function(product, index) {
      angular.forEach(product.features, function(feature, index){
        $scope.features.push(feature);
      });
		angular.forEach(product.stocks, function(stock, index){
        $scope.stocks.push(stock);
      });
		
		angular.forEach(product.prices, function(price, index){
        $scope.prices.push(price);
      });
    });
  });
}