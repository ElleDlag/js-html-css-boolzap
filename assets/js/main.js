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
        var inputLenght = $('#input_msg').val().length;

        for (var i = 0; i < inputLenght; i++) {
            if($('#input_msg').val().charCodeAt(i) == 32){ n++ }
        }
        if (n === inputLenght){
            spaceMsg = true;
        }


        if(!($('#input_msg').val() == "") && spaceMsg == false){
            var domMyMsg = $('.wtp_area-box-msg.wtp-sent');
            var myMsg =$(domMyMsg).first().clone();
            $(myMsg).children().text($('#input_msg').val());
            $('.wtp-list_msg-area').append(myMsg);
            countMyMsg++
        }
        if(countMyMsg > 0){
            $(domMyMsg).addClass('seq')
        }
        $('.wtp-wrapper-btn #LayerSent').css('display', 'none');
        $('.wtp-wrapper-btn #LayerMic').css('display', 'block');
        $('#input_msg').val("")
        spaceMsg = false
        
    }


    // ------------
    //  EXECUTION
    // ------------
    $('form').submit(function(){return false});
    $('.wtp_btn_send').click(appendMsg)

    $('#input_msg').on({
        'keypress':function(e){
                $('.wtp-wrapper-btn #LayerSent').css('display', 'block');
                $('.wtp-wrapper-btn #LayerMic').css('display', 'none');
        },
        'keyup': function(e){
            if(e.which == 13) {
                appendMsg();
            }
            if(e.which == 8 && $('#input_msg').val() == "") {
                $('.wtp-wrapper-btn #LayerSent').css('display', 'none');
                $('.wtp-wrapper-btn #LayerMic').css('display', 'block'); 
            }
        }
    });

})