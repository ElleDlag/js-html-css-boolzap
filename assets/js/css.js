$(function(){
   

    //dynamic width based on eq height
    var heightAvatar = $('.wtp-avatar');
    //animation for notify area
    var notify = $('.wtp-wrapper-notify');
    //state click/hover for contact
    var contactItem = $('.wtp-wrapper-item');
    //container sempre esistente e sempre in ascolto
    var msgArea = $('.wtp-list_msg-area');
    //delegato al click che attiva il menu
    var arrowMenuItem = $('.wtp_menu-arrow');
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
    $(document).on({
        'mouseenter': function(){
            $(this).parent().addClass('hover')
            //$('.wtp_menu-item').addClass('hover')
        },

        'click': function(){
            var itemAreaMsg = ['info messaggio', 'Rispondi', 'Inoltra messaggio', 'Messaggio importante', 'Elimina messaggio']
            //var itemAreaMsg = ['info messaggio', 'Rispondi', 'Inoltra messaggio', 'Messaggio importante', 'Elimina messaggio']
            var elem = $(this)
            elem.toggleClass('on');
            if(elem.hasClass('on')){
                if(elem.parents().is('.wtp-list_msg-area')){
                    itemAreaMsg.forEach(function(el){
                        elem.next().append("<div class=wtp_menu-item>" + el + "</div>")
                    });
                }
            } else {
                $('.wtp_menu-contextual').html("")
            }
        },

    },'.wtp_wrapper-menu .wtp-btn_item')

    $(document).on({
        'click': function(){
           $(this).parentsUntil('.wtp-list_msg-area').remove()
        }
    },'.wtp_msg-outline.sent .wtp_menu-item:last-child')
    


})  


