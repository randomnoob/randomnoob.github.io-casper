/**
 * JS file for tag and authors pagination
 * Should be included after the tag/authors loop, as it relies on its content
 */


var do_paginate = function() {
    var paginate = parseInt(document.getElementById('paginate_container').getAttribute('paginate'));
    var total_items = document.querySelectorAll('.post').length;
    var url = document.getElementById('paginate_container').getAttribute('url');

    var total_pages = parseInt((total_items - 1 ) / paginate) + 1;

    var hashName = window.location.hash;

    // parse URL hash
    var hashRegexp = /#page(\d)/g;
    var match = hashRegexp.exec(hashName);
    var page = 1;
    if (match !== null)
        page = parseInt(match[1]);

    console.log(page, total_pages, total_items);

    if (page > 0 && page <= total_pages) {
        var index_first = (page - 1) * paginate;
        var index_last = page * paginate;

        var tt = 0;
        var posts = document.querySelectorAll('.post');
        for (var i = 0; i < posts.length; ++i) {
            var index = posts[i].getAttribute('index') - 1;
            if (index < index_first || index >= index_last) {
                posts[i].style.display = 'none';
            } else {
                posts[i].style.display = '';
            }
        }

        var urlPrevious = url + '#page' + (page-1) + '/';
        var urlNext = url + '#page' + (page+1) + '/';
        var urlFirst = urlPrevious;
        create_pagination_elems(page, total_pages, urlPrevious, urlNext, urlFirst);
    } else {
        window.location = '/404.html';
    }
};

window.onhashchange = function() {
     //// for fake reload
     //location.reload();

    // without fake reload
    do_paginate();
    scroll(0,0);
};
do_paginate();

