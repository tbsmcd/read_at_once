rcmail.addEventListener('init', function(ev){
    // add read,unread buttons
    $('#messagelistfooter').prepend('<div id="rao-btns-wrap"><button class="rao-btn" id="rao-read-btn">READ</button><button class="rao-btn" id="rao-unread-btn">UNREAD</button></div>');
    $('#messagelistfooter').prepend('<div id="rao-checkall-wrap"><label for="rao-checkall"><input type="checkbox" id="rao-checkall">CHECK ALL</label></div>');
    // add check all box
    $('#rao-checkall').on('change', function(){
        $('input[class="rao-checkbox"]').prop('checked', this.checked);
    });

    $('.rao-btn').click(function(){
        ckd = $('[class=rao-checkbox]:checked').map(function(){
            return $(this).attr('name');
        }).get();
        if ($(this).attr('id') == 'rao-read-btn') {
            mark = 'read';
        } else {
            mark = 'unread';
        }
        ckd.forEach(function(uid){
            rcmail.mark_message(mark, uid);
        });
    });
});

rcmail.addEventListener('listupdate', function(ev){
    // add checkbox
    $('.rao-checkbox').remove();
    rows = rcmail.message_list.rows;
    ids = {}
    Object.keys(rows).forEach(function(key){
        ids[rows[key]['id']] = rows[key]['uid']; 
    })
    $('#messagelist tbody tr').each(function(){
        $(this).children('.subject').prepend('<input type="checkbox" name="' + ids[$(this).attr('id')] + '" class="rao-checkbox">');
    })
});
