//dynamic width based on eq height
$(function(){
    var dom = document;
    var heightAvatar = $('.wtp-avatar');
    $(heightAvatar).each(function (i, el) {
        var getHeigth = heightAvatar.eq(i).height()
        heightAvatar.eq(i).width(getHeigth)
    });
    
    
    
})


