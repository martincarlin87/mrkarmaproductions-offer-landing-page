$(function () {
    'use strict',

	// Fancybox
	$(".fancybox").fancybox({
	    type: "iframe",
	    iframe : {
	        preload: false
	    },
	    helpers : {
	        media : { }
	    }
	});
});

$(".alert").alert();


let searchParams = new URLSearchParams(window.location.search);

if (searchParams.has('sent')) {
	$('#sent').removeClass('hidden');
}


