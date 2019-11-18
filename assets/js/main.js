$(function(){
    var countMyMsg = 0;
    var spaceMsg = false;
    var myMsgText = $('.wtp-msg-area .input-text');//area input
    var checkTime;
    
    // ------------
    //  FUNCTIONS
    // ------------
    //function to append user msg
    //catch msg div item that exisist in dom
    //condition if not empty text input
    //condition if not empty all space char (whit n coninter)
    //if not first messagge add class squencial
    function appendMsg(){

        //if input have only white space
        var checkText= myMsgText.text()
        if (/^\s*$/.test(checkText)) {
            spaceMsg = true;
        }
        //if input have text eand white space
        if(!($(myMsgText).text() == "") && spaceMsg == false){
            $('.wtp-list_msg-area').append($(el_sentMsg).clone())
            $('.wtp_msg-item.wtp-sent').last().find('.wtp_msg-text').text($(myMsgText).text())
            
        }
        //-----
        //if is sequencial messages
        /* if(countMyMsg > 0){
            $(domMyMsg).addClass('seq')
        } */
        //----
        //$('.wtp-wrapper-btn #LayerSent').css('display', 'none');
        //$('.wtp-wrapper-btn #LayerMic').css('display', 'block');
        $(myMsgText).text("")
        spaceMsg = false 
        checkTime = setTimeout(botMsg, 2000)
    }
    //da semplificare soluzione complicaaaaaaaaaata
    /* function findInNameContact(){
        var idItem = $('.wtp-wrapper-list .wtp-usr-identifier');
        var whatFind = $('.wtp-list-user .input-text').text()
        var pattern = new RegExp(whatFind, "i");
        if(whatFind != ""){
            $(this).parents('.wtp-wrapper-item').css('display', 'block')
            $(idItem).each(function () {
                if(!(pattern.test($(this).text()))){
                    $(this).parents('.wtp-wrapper-item').css('display', 'none')
                } else { $(this).parents('.wtp-wrapper-item').css('display', 'block')}
            })
        } else if(whatFind == ""){ 
            $(idItem).parents('.wtp-wrapper-item').css('display', 'block')
        }
        //variante ma senza case sensitive
        //$('.wtp-wrapper-list .wtp-usr-identifier:contains("La")').css('background-color', 'khaki')
    }  */  
    
    function findInNameContact(){
        var idItem = $('.wtp-wrapper-item');
        var whatFind=$('.wtp-list-user .input-text').text().toLowerCase();
        // loop in item that contain element where find something
        $(idItem).each(function(){
            // specific element where search text
            var whereFind=$(this).find(".wtp-usr-identifier").text().toLowerCase();
            // condition if found it! or not!
            if (whereFind.includes(whatFind)){
                $(this).show();
            } else {
                $(this).hide();
            }
        })
    }
    function botMsg(){
        /* var checkParent = document.querySelector('.wtp-input_msg-area .input-text');
        var checkFocus =  $('.input-text:focus')[0];
        if(checkFocus == checkParent){} *///verifica il focus
        var n = 3000;
        var msgIndex = ['risposta#1', 'risposta#2', 'risposta#3','risposta#4','risposta#5'];
        $('.wtp-list_msg-area').append($(el_receivedMsg).clone())
        $('.wtp_msg-item.wtp-received').last().find('.wtp_msg-text').text(msgIndex[0])
        
    }

    // ------------
    //  EXECUTION
    // ------------
    $('.wtp_btn_send').click(appendMsg)

    $('.wtp-msg-area .input-text').on({
        'submit': function() {
            appendMsg()
        },
        'keydown':function(e){
            

            if(e.keyCode == 13 && !e.shiftKey){
                e.preventDefault();
                $('.wtp-msg-area .input-text').submit();
            } 

            if($('.wtp-msg-area .input-text').text().length === 0) {
                $('.input-placeholder').removeClass('off')
                $('.wtp-wrapper-btn #LayerSent').css('display', 'none');
                $('.wtp-wrapper-btn #LayerMic').css('display', 'block'); 
            }  
        },
        'keyup':function(e){
            if($('.wtp-msg-area .input-text').text().length === 0) {
                $('.input-placeholder').removeClass('off')
                $('.wtp-wrapper-btn #LayerSent').css('display', 'none');
                $('.wtp-wrapper-btn #LayerMic').css('display', 'block'); 
            }
        },
        'keypress':function(e){
            $('.input-placeholder').addClass('off')
            $('.wtp-wrapper-btn #LayerSent').css('display', 'block');
            $('.wtp-wrapper-btn #LayerMic').css('display', 'none');     
        }
    })

    $('.wtp-list-user .input-text').on({
        'keyup':  function(){
            findInNameContact()
        }
    });
})

