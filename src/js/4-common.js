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
	
$(".chip .close").click(function(){
  $(this).parent().hide();
});

});

