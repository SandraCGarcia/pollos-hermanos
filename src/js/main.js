var scroll25 = false;
var scroll50 = false;
var scroll75 = false;
var scroll100 = false;


$(document).ready(function(){
	
    init();
});


function isVisible(el,scroll) {
    var elementTop = el.offset().top;
	var elementBottom = elementTop + el.outerHeight();
	var viewportTop = scroll;
	var viewportBottom = viewportTop + $(window).height();
	return (elementTop > viewportTop) && (elementBottom < viewportBottom);
}


function init() {
    socialNetworksSharing();
}

function scrollSocialNetworks() {
	var desktopSocialNetworks = $(".aside");
	var mobileSocialNetworks = $(".share-container");
	var scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
	if (scrollTop > 63){
		mobileSocialNetworks.addClass('is-visible');
		desktopSocialNetworks.addClass('is-visible');
	} else {
		mobileSocialNetworks.removeClass('is-visible');
		desktopSocialNetworks.removeClass('is-visible');
	}
}

function scrollActiv(){  
	var scrollPercent = getScrollPercent();
	if ( scrollPercent >= 25 ) {
	    	if ( !scroll25 ) {
          	    //universalGa('t1.send', 'event', 'NOMBRE DEL ESPECIAL', 'scroll', 'Scroll Depth 25%');
	    		scroll25 = true;
	    	}
	    }
	    if ( scrollPercent >= 50 ) {
	    	if ( !scroll50 ) {
          		//universalGa('t1.send', 'event', 'NOMBRE DEL ESPECIAL', 'scroll', 'Scroll Depth 50%');
	    		scroll50 = true;
	    	}
	    }
	    if ( scrollPercent >= 75 ) {
	    	if ( !scroll75 ) {
          		//universalGa('t1.send', 'event', 'NOMBRE DEL ESPECIAL', 'scroll', 'Scroll Depth 75%');
	    		scroll75 = true;
	    	}
	    }
	    if ( scrollPercent >= 100 ) {
	    	if ( !scroll100 ) {
          		//universalGa('t1.send', 'event', 'NOMBRE DEL ESPECIAL', 'scroll', 'Scroll Depth 100%');
	    		scroll100 = true;
	    }
	}
}

function getScrollPercent() {
	var bottom = $(window).height() + $(window).scrollTop();
	var height = $(document).height();
	return Math.round(100*bottom/height);
}


function socialNetworksSharing() {
	var urlPage = window.location.href;
	$('.share-fb').each(function(){
	var fbHref = "https://www.facebook.com/sharer/sharer.php?u="+urlPage;
        $(this).attr('href',fbHref);
    });
    $('.share-tw').each(function(){
        var tuitText = encodeURI($(this).data('text'));
        var tuitHref = "https://twitter.com/intent/tweet?url="+urlPage+"&text="+tuitText+"&original_referer="+urlPage;
        $(this).attr('href',tuitHref);
    });
    $('.share-lk').each(function(){
        var lkText = encodeURI($(this).data('text'));
        var lkHref = "https://www.linkedin.com/shareArticle?mini=true&url="+urlPage+"&title="+lkText+"&summary=&source=";
        $(this).attr('href',lkHref);
    });
    $('.share-wa').each(function(){
        var waText = encodeURI($(this).data('text'));
        var waHref = "whatsapp://send?text="+waText+" "+urlPage;
        $(this).attr('href',waHref);
    });
}

