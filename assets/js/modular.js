/** ---------------------------------------------
 * Initialize modules and main dom.
 * for manipulation in other files use global variables.
 * they are indicating in global scope before initialize (on ready) function.
 * if necessary create new el put them before ready function 
 * add prefix mod_ for new Module 
 * add prefix el_ for new DomElement
 * good job :-)
 ----------------------------------------------- */

 //global scope for entire project
var el_Cntxmenu, el_itemContact, el_sentMsg, el_receivedMsg, thisTest

$(function () {
    //btn item icons
    var icon = {
        'status': '<svg id="ee51d023-7db6-4950-baf7-c34874b80976" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#727A7E" d="M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z"></path></svg>',

        'newChat': '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path opacity=".55" fill="#263238" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path></svg>',

        'preferences': '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".6" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>',

        'lens': '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".5" d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"></path></svg>',

        'clip': '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".5" d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"></path></svg>',

        'emoji': '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path opacity=".45" fill="#263238" d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"></path></svg>',

        'mic': '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".45" d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"></path></svg>',

        'send': '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".45" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path></svg>',

        'close': '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path opacity=".45" fill="#263238" d="M19.1 17.2l-5.3-5.3 5.3-5.3-1.8-1.8-5.3 5.4-5.3-5.3-1.8 1.7 5.3 5.3-5.3 5.3L6.7 19l5.3-5.3 5.3 5.3 1.8-1.8z"></path></svg>',

        'gif': '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#8d9193" d="M13.177 12.013l-.001-.125v-.541-.512c0-.464 0-.827-.002-1.178a.723.723 0 0 0-.557-.7.715.715 0 0 0-.826.4c-.05.115-.072.253-.073.403-.003 1.065-.003 1.917-.002 3.834v.653c0 .074.003.136.009.195a.72.72 0 0 0 .57.619c.477.091.878-.242.881-.734.002-.454.003-.817.002-1.633l-.001-.681zm-3.21-.536a35.751 35.751 0 0 0-1.651-.003c-.263.005-.498.215-.565.48a.622.622 0 0 0 .276.7.833.833 0 0 0 .372.104c.179.007.32.008.649.005l.137-.001v.102c-.001.28-.001.396.003.546.001.044-.006.055-.047.081-.242.15-.518.235-.857.275-.767.091-1.466-.311-1.745-1.006a2.083 2.083 0 0 1-.117-1.08 1.64 1.64 0 0 1 1.847-1.41c.319.044.616.169.917.376.196.135.401.184.615.131a.692.692 0 0 0 .541-.562c.063-.315-.057-.579-.331-.766-.789-.542-1.701-.694-2.684-.482-2.009.433-2.978 2.537-2.173 4.378.483 1.105 1.389 1.685 2.658 1.771.803.054 1.561-.143 2.279-.579.318-.193.498-.461.508-.803.014-.52.015-1.046.001-1.578-.009-.362-.29-.669-.633-.679zM18 4.25H6A4.75 4.75 0 0 0 1.25 9v6A4.75 4.75 0 0 0 6 19.75h12A4.75 4.75 0 0 0 22.75 15V9A4.75 4.75 0 0 0 18 4.25zM21.25 15A3.25 3.25 0 0 1 18 18.25H6A3.25 3.25 0 0 1 2.75 15V9A3.25 3.25 0 0 1 6 5.75h12A3.25 3.25 0 0 1 21.25 9v6zm-2.869-6.018H15.3c-.544 0-.837.294-.837.839V14.309c0 .293.124.525.368.669.496.292 1.076-.059 1.086-.651.005-.285.006-.532.004-1.013v-.045l-.001-.46v-.052h1.096l1.053-.001a.667.667 0 0 0 .655-.478c.09-.298-.012-.607-.271-.757a.985.985 0 0 0-.468-.122 82.064 82.064 0 0 0-1.436-.006h-.05l-.523.001h-.047v-1.051h1.267l1.22-.001c.458-.001.768-.353.702-.799-.053-.338-.35-.56-.737-.561z"></path></svg>',

        'sticker': '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#8d9193" d="M21.81 10.661l-.001-.1v-.222-.107c0-.018-.009-.032-.01-.049-.002-.184-.003-.373-.008-.548-.02-.768-.065-1.348-.173-1.939a6.6 6.6 0 0 0-.624-1.87 6.24 6.24 0 0 0-1.171-1.594 6.301 6.301 0 0 0-1.614-1.159 6.722 6.722 0 0 0-1.887-.615c-.59-.106-1.174-.15-1.961-.171a95.633 95.633 0 0 0-1.945-.015h-.752c-.527 0-.91.003-1.934.015-.798.02-1.383.064-1.975.17a6.783 6.783 0 0 0-1.888.616 6.326 6.326 0 0 0-2.785 2.753 6.658 6.658 0 0 0-.623 1.868c-.107.591-.152 1.186-.173 1.941-.008.277-.012.566-.013.884l-.002.258-.001.781v.959c0 .52.001.753.003 1.047.001.311.005.6.013.878.02.755.066 1.349.172 1.938.126.687.33 1.3.624 1.871.303.59.698 1.126 1.173 1.595a6.318 6.318 0 0 0 1.614 1.159 6.786 6.786 0 0 0 2.146.656c.479.068.833.087 1.633.108l.07.002c.118.003.566-.001 1.125-.01h.021c.421-.007.902-.016 1.362-.027a6.873 6.873 0 0 0 4.487-1.811 210.877 210.877 0 0 0 2.928-2.737 6.857 6.857 0 0 0 2.097-4.528l.066-1.052.001-.668c.001-.023.003-.04.003-.063.002-.064.002-.111.002-.214zm-3.206 5.442c-.79.757-1.784 1.684-2.906 2.716a5.356 5.356 0 0 1-2.044 1.154c.051-.143.116-.276.145-.433.042-.234.06-.461.067-.74.003-.105.004-.209.005-.314l.001-.089V18.3l.003-.289c.013-.483.042-.865.107-1.22.069-.379.179-.709.336-1.016.16-.311.369-.595.621-.844.254-.252.542-.458.859-.617.314-.158.65-.268 1.037-.337a8.127 8.127 0 0 1 1.253-.106l.201.002h.064l.436-.005a4.91 4.91 0 0 0 .755-.066c.186-.034.348-.105.515-.169a5.35 5.35 0 0 1-1.455 2.47zm1.663-4.757a1.128 1.128 0 0 1-.615.859 1.304 1.304 0 0 1-.371.119 3.502 3.502 0 0 1-.52.043l-.417.005h-.052l-.218-.001c-.613.016-1.053.049-1.502.129a5.21 5.21 0 0 0-1.447.473 4.86 4.86 0 0 0-2.141 2.115 5.088 5.088 0 0 0-.479 1.434 9.376 9.376 0 0 0-.131 1.461l-.003.309v.093l-.001.09c0 .099-.002.192-.004.285-.006.208-.018.37-.043.511a1.154 1.154 0 0 1-.626.86c-.072.036-.168.063-.37.098l-.055.009a3.253 3.253 0 0 1-.393.022l-.043.001a44.49 44.49 0 0 1-1.077.01l-.072-.002c-.742-.019-1.059-.036-1.462-.093a5.923 5.923 0 0 1-.206-.033 5.27 5.27 0 0 1-1.477-.479 4.823 4.823 0 0 1-2.127-2.1 5.141 5.141 0 0 1-.482-1.453c-.09-.495-.13-1.025-.149-1.71a36.545 36.545 0 0 1-.012-.847c-.003-.292-.003-.522-.003-1.037v-.959l.001-.774.002-.256c.001-.311.005-.588.012-.853.02-.685.061-1.214.151-1.712a5.12 5.12 0 0 1 .481-1.45c.231-.449.53-.856.892-1.213.363-.36.777-.657 1.233-.886a5.26 5.26 0 0 1 1.477-.479c.503-.09 1.022-.129 1.74-.149 1.008-.012 1.385-.015 1.906-.015h.748c1.261.004 1.606.007 1.907.015.717.019 1.236.058 1.737.148a5.263 5.263 0 0 1 1.476.478 4.835 4.835 0 0 1 2.126 2.098c.228.441.385.913.482 1.453.091.499.131 1.013.15 1.712a32.258 32.258 0 0 1 .014 1.235 2.935 2.935 0 0 1-.037.436z"></path></svg>',
        'back': '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#FFF" d="M20 11H7.8l5.6-5.6L12 4l-8 8 8 8 1.4-1.4L7.8 13H20v-2z"></path></svg>',

        'alarm':'<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48"><path fill="#FFF" fill-opacity=".9" d="M24.154 2C11.919 2 2 11.924 2 24.165S11.919 46.33 24.154 46.33s22.154-9.924 22.154-22.165S36.389 2 24.154 2zm-.744 15.428v-.618c0-.706.618-1.324 1.324-1.324s1.323.618 1.323 1.324v.618c2.559.618 4.412 2.823 4.412 5.559v3.176l-8.294-8.294a5.056 5.056 0 0 1 1.235-.441zm1.323 15.706a1.77 1.77 0 0 1-1.765-1.765h3.529a1.768 1.768 0 0 1-1.764 1.765zm7.236-.883l-1.765-1.765H17.233v-.882l1.765-1.765v-4.853a5.56 5.56 0 0 1 .794-2.912l-2.559-2.559 1.147-1.147 14.735 14.736-1.146 1.147z"></path></svg>',

        'menuaw':'<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill-opacity=".45" d="M3.3 4.6L9 10.3l5.7-5.7 1.6 1.6L9 13.4 1.7 6.2l1.6-1.6z"></path></svg>'
    }

    //main area
    var mainLstUsr = $('.wtp-list-user')
    var mainMsgUsr = $('.wtp-msg-area')

    //main modules
    //var templates = $(template)
    var mod_topbar = $('#tmplt_topbar').html().trim();
    var mod_avatar = $('#tmplt_avatar').html().trim(); //class no-grow
    var mod_btnbar = $('#tmplt_btn-bar').html().trim();
    var mod_icon = $('#tmplt_icon-item').html().trim();
    var mod_notify = $('#tmplt_notify').html().trim();
    var mod_boxInfo = $('#tmplt_box-info').html().trim();
    var mod_contactInfo = $('#tmplt_contact-info').html().trim();
    var mod_statusInfo = $('#tmplt_status-info').html().trim();
    var mod_search = $('#tmplt_search').html().trim();//calss search
    var mod_boxListContact = $('#tmplt_contact-list-box').html().trim();
    var mod_contactItem = $('#tmplt_contact-item').html().trim();
    var mod_areaListMsg = $('#tmplt_area-list-msg').html().trim();
    var mod_areaInputMsg = $('#tmplt_area-input-msg').html().trim();
    var mod_boxBtn = $('#tmplt_btn-box').html().trim();
    var mod_msgItem = $('#tmplt_model-msg-item').html().trim(); //class .wtp-sent|| .wtp-received || .seq; > .sent || .received; 
    var mod_menuCntx = $('#tmplt_menu-wrapper-cntx').html().trim();


    // ----------------
    // element to fill DOM
    // ----------------


    /* #region components topbar Contacts*/
    $(mainLstUsr).append(
        $(mod_topbar).clone()
        .append($(mod_avatar).clone())
        .append($(mod_btnbar).clone()
            .append($(mod_icon).clone())
            .append($(mod_icon).clone())
            .append($(mod_icon).clone())
        ))

        var el_listIcon = $('.wtp-list-user .wtp-btn_icon')
            $(el_listIcon).eq(0).append(icon['status'])
            $(el_listIcon).eq(1).append(icon['newChat'])
            $(el_listIcon).eq(2).append(icon['preferences'])
    /* #endregion */
    
    /* #region components topbar Messages*/
    $(mainMsgUsr).append(
        $(mod_topbar).clone()
        .append($(mod_avatar).clone().addClass('no-grow'))
        .append($(mod_boxInfo).clone())
        .append($(mod_btnbar).clone()
            .append($(mod_icon).clone())
            .append($(mod_icon).clone())
            .append($(mod_icon).clone())
        ))
        $('.wtp-msg-area .wtp-wrapper-info')
            .append($(mod_contactInfo).clone())
            .append($(mod_statusInfo).clone())
        var el_msgIcon = $('.wtp-msg-area .wtp-btn_icon')
            $(el_msgIcon).eq(0).append(icon['lens'])
            $(el_msgIcon).eq(1).append(icon['clip'])
            $(el_msgIcon).eq(2).append(icon['preferences'])

    /* #endregion */
    
    /* #region components Notifications*/
    $(mainLstUsr).append($(mod_notify).clone())
        .find('.wtp-box-notify')
            .append($(mod_avatar).clone().addClass('no-grow'))
            .append($(mod_boxInfo).clone())
        $('.wtp-box-notify .wtp-avatar').append(icon['alarm'])
        $('.wtp-box-notify .wtp-wrapper-info')
            .append($(mod_contactInfo).clone())
            .append($(mod_statusInfo).clone())
    
    /* #endregion */

    /* #region components Search Contact*/
    $(mainLstUsr).append($(mod_search).clone().addClass('search'))

    /* #endregion */

    /* #region components ListContact*/
    var boxList = "<div class='wtp-wrapper-list'></div"
    $(mainLstUsr).append($(boxList)
        .append($(mod_boxListContact).clone()))
    el_itemContact = $('.wtp-wrapper-items')

    itemContent =$(mod_contactItem).clone()
    $(itemContent).children($('.wtp-contact-box'))
                .append($(mod_avatar).clone().addClass('no-grow'))
                .append($(mod_boxInfo).clone()
                .append($(mod_contactInfo).clone())
                .append($(mod_statusInfo)).clone())

    var startContact = ['+AAA','Laura','Marco M','Joseph','Giovanni','Simo','+39 123 4567','Marti','Info Comunicazioni','Sconosciuto','Roberto','Adelaide','GIGIO']
     for (i=0;i<13;i++ ){
        el_itemContact = $(itemContent).append($(itemContent))
        $('.wtp-wrapper-items').append($(el_itemContact).clone())
        $('.wtp-wrapper-list .wtp-wrapper-item .wtp-usr-identifier').eq(i).text(startContact[i])
    } 
    /* #endregion */
    
    /* #region components Contextual Menu*/
    el_Cntxmenu = $(mod_menuCntx).clone()
    $(el_Cntxmenu).append($(mod_icon).clone())
    $(el_Cntxmenu).find('.wtp-btn_icon').html(icon['menuaw'])
    
    /* #endregion */

    /* #region components area + input Messages*/
    var areaMessages = "<div class='wtp-wrapper-msg-only flex-this'></div>"
    $(mainMsgUsr).append($(areaMessages)
        .append($(mod_areaListMsg))
        .append($(mod_areaInputMsg).clone()
            .append($(mod_boxBtn).clone().append($(mod_icon).clone()))
            .append($(mod_search).clone().find('.wtp_wrapper-input-msg'))
            .append($(mod_boxBtn).clone().append($(mod_icon).clone()))
        ))

    var el_listIcon = $('.wtp-input_msg-area .wtp-btn_icon')
            $(el_listIcon).eq(0).append(icon['emoji'])
            $(el_listIcon).eq(1).append(icon['mic'])
    
    /* #endregion */
    
    /* #region components Messages*/
        //sent
        el_sentMsg = $(mod_msgItem).clone()
        $(el_sentMsg).addClass('wtp-sent')
            .children('.wtp_msg-outline').addClass('sent')
            .children('.wtp_wrapper-msg-element').append($(el_Cntxmenu).clone().append('<div class="wtp_menu-contextual"></div>'))

        //received
        el_receivedMsg = $(mod_msgItem).clone()
        $(el_receivedMsg).addClass('wtp-received')
            .children('.wtp_msg-outline').addClass('received')
            .children('.wtp_wrapper-msg-element').append($(el_Cntxmenu).clone().append('<div class="wtp_menu-contextual"></div>'))

    /* #endregion */

})//close here 

