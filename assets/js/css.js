//dynamic width based on eq height
$(function(){
    var dom = document;
    var heightAvatar = $('.wtp-avatar');
    var notify = $('.wtp-wrapper-notify');
    var contactItem = $('.wtp-wrapper-item');
    var activeItem = null;
    $(heightAvatar).each(function (i, el) {
        var getHeigth = heightAvatar.eq(i).height()
        heightAvatar.eq(i).width(getHeigth)
    });
    $(notify).click(function(){
        $(this).slideUp(500,function(){
            $(this).removeClass('on')
        })
    })
    $(contactItem).on({
        'click':function(){
            $(contactItem).not($(this)).css('background', "#fff")
            $(this).css('background', "#E9EBEB")
            var tempText = $(this).find('.wtp-usr-identifier')
            $('.wtp-msg-area .wtp-usr-identifier').text($(tempText).text())
            activeItem = $(contactItem).index($(this))
        },
        'mouseenter': function(){
            if(activeItem != null){
                $(contactItem)
                    .not($(this))
                    .not(contactItem.eq(activeItem))
                    .css('background', "#fff")
                
                $(this)
                    .not(contactItem.eq(activeItem))
                    .css('background', "#f4f5f5")
            } else {
                $(contactItem)
                    .not($(this))
                    .css('background', "#fff")
                $(this).css('background', "#f4f5f5")
            }
            //
            
        }
    })

})


