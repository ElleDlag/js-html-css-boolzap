$(function(){
    var countMyMsg = 0;
    var spaceMsg = false;
    
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

        for (var i = 0; i < inputLenght; i++) {
            if($('.wtp-msg-area .input-text').text().charCodeAt(i) == 32){ n++ }
        }
        if (n === inputLenght){
            spaceMsg = true;
        }


        if(!($('.wtp-msg-area .input-text').text() == "") && spaceMsg == false){
            var domMyMsg = $('.wtp_area-box-msg.wtp-sent');
            var myMsg =$(domMyMsg).first().clone();
            var outputText = $(myMsg).find('span')
            $(outputText).text($('.wtp-msg-area .input-text').text());
            $('.wtp-list_msg-area').append(myMsg);
            countMyMsg++
        }
        if(countMyMsg > 0){
            $(domMyMsg).addClass('seq')
        }
        $('.wtp-wrapper-btn #LayerSent').css('display', 'none');
        $('.wtp-wrapper-btn #LayerMic').css('display', 'block');
        $('.wtp-msg-area .input-text').text("")
        spaceMsg = false 
    }
    $('.wtp-msg-area .input-text').on('submit', function() {
        appendMsg()
    });


    // ------------
    //  EXECUTION
    // ------------
    $('.wtp_btn_send').click(appendMsg)

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

})