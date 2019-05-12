
// add read,unread buttons
rcmail.addEventListener('init', function(ev){
    $('#messagelistfooter').prepend('<div id="readcontrols"><input type="checkbox" id="allmark"> CHECK ALL <button class="oncectrbtn" id="readatoncebtn">READ</button><button class="oncectrbtn" id="unreadatoncebtn">UNREAD</button></div>');
    $('#readcontrols').css('display', 'inline-block');
    // check all
    $('#allmark').on('change', function(){
        $('input[class="cb_atonce"]').prop('checked', this.checked);
    });
    $('.oncectrbtn').click(function(){
        ckd = $('[class=cb_atonce]:checked').map(function(){
            return $(this).attr('name');
        }).get();
        if ($(this).attr('id') == 'readatoncebtn') {
            mark = 'read';
        } else {
            mark = 'unread';
        }
        ckd.forEach(function(uid){
            console.log(uid);
            rcmail.mark_message(mark, uid)
        });
    });
})

// add checkbox
rcmail.addEventListener('listupdate', function(ev){
    $('.cb_atonce').remove();
    rows = rcmail.message_list.rows;
    ids = {}
    Object.keys(rows).forEach(function(key){
        ids[rows[key]['id']] = rows[key]['uid']; 
    })
    $('#messagelist tbody tr').each(function(){
        $(this).children('.subject').prepend('<input type="checkbox" name="' + ids[$(this).attr('id')] + '" class="cb_atonce">');
    })
})
