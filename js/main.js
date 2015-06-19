// get scroll information (cross-browser compatibility)
function getScroll(){
    // t for top, l for left, w for width, h for height
    var t, l, w, h;
    if (document.documentElement && document.documentElement.scrollTop) {
        // IE6 standards compliant
        t = document.documentElement.scrollTop;
        l = document.documentElement.scrollLeft;
        w = document.documentElement.scrollWidth;
        h = document.documentElement.scrollHeight;
    } else if (document.body) {
        // DOM compliant
        t = document.body.scrollTop;
        l = document.body.scrollLeft;
        w = document.body.scrollWidth;
        h = document.body.scrollHeight;
    }
    return {t: t, l: l, w: w, h: h};
}


//center the title and the section in the HEADER - support resize

	function headerform(idheader,idsection){
		var header 			= document.querySelector(idheader),
			headerheight 	= window.innerHeight,
			headersection 	= document.querySelector(idsection);

		header.style.height = headerheight + "px";

		headersection.style.marginTop = ((headerheight-headersection.innerHeight)/2) + "px";
	}

	headerform("#header","#headersection");


//Force any section to have the same height than window (fullscreen)

	function fullscreen(id){
		var header 		 = document.querySelector(id),
			headerheight = window.innerHeight;

		header.style.height = headerheight + "px";
	}

	fullscreen("#results");
	fullscreen("#header");


//Center element position relatif to his parent

	function center(id){
		var element 	 	= document.querySelector(id),
			elementheight 	= element.offsetHeight,
			elementwidth 	= element.offsetWidth,
			parentheight 	= element.parentNode.offsetHeight,
			parentwidth	 	= element.parentNode.offsetWidth,
			verticalmar		= (parentheight - elementheight)/2,
			horizontalmar	= (parentwidth 	- elementwidth)	/2;


			alert(verticalmar + " - " + horizontalmar + " type: " + id.nodeName);

		element.style.paddingBottom = element.style.paddingTop	= verticalmar;
		element.style.paddingRight 	= element.style.paddingLeft = horizontalmar;		
	}



//put in black and white element
	function bandw(id, onoff){ //0 = from b&w to colorfull / 1 = from colorfull to b&w
		var e 			= document.querySelector(id),
			prefixes 	= ['-webkit-','-moz-','-o-','-ms-'];

		for(var i in prefixes){

			var prefixed = prefixes[i]+'filter';

			if(onoff){
				e.style[prefixed] = "grayscale(100%)";
			}
			else if(!onoff){
				e.style[prefixed] = "grayscale(0%)";
			}

		}

		if(!onoff){
			e.style.property="";
		}
	}

 


//Things to update on resize (don't delete the others if don't know what there are) 

	window.onresize = function(){
		fullscreen("#header");
		fullscreen("#results");
		headerform("header","header section");
	}


//Things to update on scroll (don't delete the others if don't know what there are)

	window.onscroll = function(){
	}


//Things to update on window load (don't delete the others if don't know what there are)

	window.onload = function(){
	}