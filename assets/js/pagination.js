/**
 * JS file for tag and authors pagination
 * Should be included after the tag/authors loop, as it relies on its content
 */


var do_paginate = function() {
    var paginate = parseInt(document.getElementById('paginate_container').getAttribute('paginate'));
    var total_items = document.querySelectorAll('.post').length;//parseInt(document.getElementById('paginate_container').getAttribute('total'));
    var url = document.getElementById('paginate_container').getAttribute('url');

    var total_pages = parseInt((total_items - 1 ) / paginate) + 1;

    var pathName = window.location.pathname;
    var hashName = window.location.hash;

    // parse URL hash
    var hashRegexp = /#page(\d)/g;
    var match = hashRegexp.exec(hashName);
    var page = 1;
    if (match !== null)
        page = parseInt(match[1]);

// TODO: change hash to the first page
    if (page > total_pages)
        window.location.hash = '#page1';

    var index_first = (page - 1) * paginate;
    var index_last = page * paginate;

    var tt = 0;
    var posts = document.querySelectorAll('.post');
    for (var i = 0; i < posts.length; ++i) {
        var index = posts[i].getAttribute('index') - 1;
        if (index < index_first || index >= index_last) {
            posts[i].style.display = 'none';
            //document.getElementById('paginate_container').removeChild(posts[i]);
        } else {
            posts[i].style.display = '';
        }
    }

    var pagHtml = '';
    pagHtml = pagHtml + '<nav class="pagination" role="pagination">';
    if (page > 1)
        pagHtml = pagHtml + '<a class="newer-posts" href="' + url + '#page' + (page-1) + '/" title="Previous Page">&laquo; Newer Posts</a>';
    pagHtml = pagHtml + '<span class="page-number"> Page ' + page + ' of ' + total_pages + ' </span>';
    if (page < total_pages)
        pagHtml = pagHtml + '<a class="older-posts" href="' + url + '#page' + (page+1) + '/" title="Next Page">Older Posts &raquo;</a>';
    pagHtml = pagHtml + '</nav>';

    if (page > 1)
        document.getElementById('pagination-upper').innerHTML = pagHtml;
    else
        document.getElementById('pagination-upper').innerHTML = '';

    document.getElementById('pagination-lower').innerHTML = pagHtml;
};

window.onhashchange = function() {
    //location.reload();
    do_paginate();
    scroll(0,0);
};
do_paginate();

