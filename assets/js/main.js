$(function(){
    var countMyMsg = 0;
    var spaceMsg = false;
    var myMsgText = $('.wtp-msg-area .input-text');
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
        var n = 0;
        var inputLenght = $('.wtp-msg-area .input-text').text().length;
        
        
        //if input have only white space
        var checkText= myMsgText.text()
        if (/^\s*$/.test(checkText)) {
            spaceMsg = true;
        }
        

        if(!($(myMsgText).text() == "") && spaceMsg == false){
            var domMyMsg = $('.wtp_area-box-msg.wtp-sent');
            var myMsg =$(domMyMsg).first().clone();
            var outputText = $(myMsg).find('span')

            $(outputText).text($(myMsgText).text())
            $('.wtp-list_msg-area').append(myMsg);
            countMyMsg++
        }
        //if is sequencial messages
        /* if(countMyMsg > 0){
            $(domMyMsg).addClass('seq')
        } */
        $('.wtp-wrapper-btn #LayerSent').css('display', 'none');
        $('.wtp-wrapper-btn #LayerMic').css('display', 'block');
        $(myMsgText).text("")
        spaceMsg = false 
        checkTime = setTimeout(botMsg, 2000)
    }
    function findInNameContact(){
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

    }   
    function botMsg(){
        var checkParent = document.querySelector('.wtp-input_msg-area .input-text');
        var checkFocus =  $('.input-text:focus')[0];
        var n = 3000;
        var msgIndex = ['risposta#1', 'risposta#2', 'risposta#3','risposta#4','risposta#5'];
        var domPcMsg = $('.wtp_area-box-msg.wtp-recived');
        var pcMsg =$(domPcMsg).first().clone();
        var outputPcText = $(pcMsg).find('span')
        $(outputPcText).text(msgIndex[0])
        if(checkFocus == checkParent){
           alert('vuoi scrivere dell\'altro?')
        } else {$('.wtp-list_msg-area').append(pcMsg); }
    }

    // ------------
    //  EXECUTION
    // ------------
    $('.wtp_btn_send').click(appendMsg)

    $('.wtp-msg-area .input-text').on('submit', function() {
        appendMsg()
    });

    $('.wtp-msg-area .input-text').on({
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
            var whatFind = $('.wtp-list-user .input-text').text()
            //alert(whatFind)
                findInNameContact()
        }
    });
})

