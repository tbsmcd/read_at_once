rcmail.addEventListener('init', function(ev){
    // add read,unread buttons
    $('#messagelistfooter').prepend('<div id="rao-btns-wrap"><button class="rao-btn" id="rao-read-btn">' + rcmail.gettext('read', 'read_at_once') + '</button><button class="rao-btn" id="rao-unread-btn">' + rcmail.gettext('unread', 'read_at_once') + '</button></div>');
    $('#messagelistfooter').prepend('<div id="rao-checkall-wrap"><a href="#" id="rao-checkall">' + rcmail.gettext('check_all', 'read_at_once') + '</a> <a href="#" id="rao-uncheckall">' + rcmail.gettext('uncheck_all', 'read_at_once') + '</a></div>');
    $('#rao-checkall').on('click', function(){
        $('.message').addClass('selected');
    });
    $('#rao-uncheckall').on('click', function(){
        $('.message').removeClass('selected');
    });

    $('.rao-btn').click(function(){
        if ($(this).attr('id') == 'rao-read-btn') {
            mark = 'read';
        } else {
            mark = 'unread';
        }
        $('.message.selected').each(function(){
            if(r = $(this).prop('className').match(/rao-selector-([0-9]+)/)){
                rcmail.mark_message(mark, r[1]);
            }
        });
    });
});

rcmail.addEventListener('listupdate', function(ev){
    rows = rcmail.message_list.rows;
    ids = {}
    Object.keys(rows).forEach(function(key){
        ids[rows[key]['id']] = rows[key]['uid']; 
    })
    $('#messagelist tbody tr').each(function(){
        $(this).addClass('rao-selector-' + ids[$(this).attr('id')]);
    })
});
