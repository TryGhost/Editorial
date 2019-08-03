(function(win, $){
    win.ak = win.ak || {};
    var ak = win.ak;

    breakpoints({
        xlarge:   [ '1281px',  '1680px' ],
        large:    [ '981px',   '1280px' ],
        medium:   [ '737px',   '980px'  ],
        small:    [ '481px',   '736px'  ],
        xsmall:   [ '361px',   '480px'  ],
        xxsmall:  [ null,      '360px'  ],
        'xlarge-to-max':    '(min-width: 1681px)',
        'small-to-xlarge':  '(min-width: 481px) and (max-width: 1680px)'
    });

    $('#sidebar').ready(function(){
        $('#sidebar section').remove();
        var content = $('#sidebar div.inner').html();
        $('#sidebar div.inner').html($('#sidebar_post').html() + content);
        $('#sidebar').removeClass('inactive');
    });

    breakpoints.on('>large', function() {
        $('#sidebar').removeClass('inactive');
    });
})(window, window.jQuery)
