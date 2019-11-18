$(function(){
    var myBox = $('#tmpl_msg').html().trim();
    var myAvatar = $('#tmpl_avatar').html().trim();
    var mySentBox = ($(myBox)).children('h2').append($(myAvatar).clone())
    $('body').append($(mySentBox).clone())
})//close document here
