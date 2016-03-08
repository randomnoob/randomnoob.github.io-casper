/**
 * JS file to inject pagination elements to DOM: "Older posts", "Page N of M", "Newer posts"
 * Should be included before pagination.js for tags and authors pagination
 */


var create_pagination_elems = function(page, totalPages, urlPrevious, urlNext, urlFirst) {
    var pagHtml = '';
    pagHtml = pagHtml + '<nav class="pagination" role="pagination">';
    if (page > 1)
        if (page === 2)
            pagHtml = pagHtml + '<a class="newer-posts" href="' + urlFirst +'" title="Previous Page">&laquo; Newer Posts</a>';
        else
            pagHtml = pagHtml + '<a class="newer-posts" href="' + urlPrevious +'" title="Previous Page">&laquo; Newer Posts</a>';
    pagHtml = pagHtml + '<span class="page-number"> Page ' + page + ' of ' + totalPages + ' </span>';
    if (page < totalPages)
        pagHtml = pagHtml + '<a class="older-posts" href="' + urlNext + '" title="Next Page">Older Posts &raquo;</a>';
    pagHtml = pagHtml + '</nav>';

    if (page > 1)
        document.getElementById('pagination-upper').innerHTML = pagHtml;
    else
        document.getElementById('pagination-upper').innerHTML = '';

    document.getElementById('pagination-lower').innerHTML = pagHtml;
};
