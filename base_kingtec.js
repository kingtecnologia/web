!function(i){i.fn.theiaStickySidebar=function(t){function e(t,e){return!0===t.initialized||!(i("body").width()<t.minWidth)&&(function(t,e){t.initialized=!0;var a=i("#theia-sticky-sidebar-stylesheet-"+t.namespace);0===a.length&&i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-'+t.namespace+'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'));e.each((function(){var e={};if(e.sidebar=i(this),e.options=t||{},e.container=i(e.options.containerSelector),0==e.container.length&&(e.container=e.sidebar.parent()),e.sidebar.parents().css("-webkit-transform","none"),e.sidebar.css({position:e.options.defaultPosition,overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),e.stickySidebar=e.sidebar.find(".theiaStickySidebar"),0==e.stickySidebar.length){var a=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;e.sidebar.find("script").filter((function(i,t){return 0===t.type.length||t.type.match(a)})).remove(),e.stickySidebar=i("<div>").addClass("theiaStickySidebar").append(e.sidebar.children()),e.sidebar.append(e.stickySidebar)}e.marginBottom=parseInt(e.sidebar.css("margin-bottom")),e.paddingTop=parseInt(e.sidebar.css("padding-top")),e.paddingBottom=parseInt(e.sidebar.css("padding-bottom"));var n=e.stickySidebar.offset().top,s=e.stickySidebar.outerHeight();function d(){e.fixedScrollTop=0,e.sidebar.css({"min-height":"1px"}),e.stickySidebar.css({position:"static",width:"",transform:"none"})}function r(t){var e=t.height();return t.children().each((function(){e=Math.max(e,i(this).height())})),e}e.stickySidebar.css("padding-top",1),e.stickySidebar.css("padding-bottom",1),n-=e.stickySidebar.offset().top,s=e.stickySidebar.outerHeight()-s-n,0==n?(e.stickySidebar.css("padding-top",0),e.stickySidebarPaddingTop=0):e.stickySidebarPaddingTop=1,0==s?(e.stickySidebar.css("padding-bottom",0),e.stickySidebarPaddingBottom=0):e.stickySidebarPaddingBottom=1,e.previousScrollTop=null,e.fixedScrollTop=0,d(),e.onScroll=function(e){if(e.stickySidebar.is(":visible"))if(i("body").width()<e.options.minWidth)d();else{if(e.options.disableOnResponsiveLayouts)if(e.sidebar.outerWidth("none"==e.sidebar.css("float"))+50>e.container.width())return void d();var a=i(document).scrollTop(),n="static";if(a>=e.sidebar.offset().top+(e.paddingTop-e.options.additionalMarginTop)){var s,c=e.paddingTop+t.additionalMarginTop,p=e.paddingBottom+e.marginBottom+t.additionalMarginBottom,b=e.sidebar.offset().top,l=e.sidebar.offset().top+r(e.container),f=0+t.additionalMarginTop;s=e.stickySidebar.outerHeight()+c+p<i(window).height()?f+e.stickySidebar.outerHeight():i(window).height()-e.marginBottom-e.paddingBottom-t.additionalMarginBottom;var h=b-a+e.paddingTop,g=l-a-e.paddingBottom-e.marginBottom,u=e.stickySidebar.offset().top-a,S=e.previousScrollTop-a;"fixed"==e.stickySidebar.css("position")&&"modern"==e.options.sidebarBehavior&&(u+=S),"stick-to-top"==e.options.sidebarBehavior&&(u=t.additionalMarginTop),"stick-to-bottom"==e.options.sidebarBehavior&&(u=s-e.stickySidebar.outerHeight()),u=S>0?Math.min(u,f):Math.max(u,s-e.stickySidebar.outerHeight()),u=Math.max(u,h),u=Math.min(u,g-e.stickySidebar.outerHeight());var m=e.container.height()==e.stickySidebar.outerHeight();n=(m||u!=f)&&(m||u!=s-e.stickySidebar.outerHeight())?a+u-e.sidebar.offset().top-e.paddingTop<=t.additionalMarginTop?"static":"absolute":"fixed"}if("fixed"==n){var y=i(document).scrollLeft();e.stickySidebar.css({position:"fixed",width:o(e.stickySidebar)+"px",transform:"translateY("+u+"px)",left:e.sidebar.offset().left+parseInt(e.sidebar.css("padding-left"))-y+"px",top:"0px"})}else if("absolute"==n){var k={};"absolute"!=e.stickySidebar.css("position")&&(k.position="absolute",k.transform="translateY("+(a+u-e.sidebar.offset().top-e.stickySidebarPaddingTop-e.stickySidebarPaddingBottom)+"px)",k.top="0px"),k.width=o(e.stickySidebar)+"px",k.left="",e.stickySidebar.css(k)}else"static"==n&&d();"static"!=n&&1==e.options.updateSidebarHeight&&e.sidebar.css({"min-height":e.stickySidebar.outerHeight()+e.stickySidebar.offset().top-e.sidebar.offset().top+e.paddingBottom}),e.previousScrollTop=a}},e.onScroll(e),i(document).on("scroll."+e.options.namespace,function(i){return function(){i.onScroll(i)}}(e)),i(window).on("resize."+e.options.namespace,function(i){return function(){i.stickySidebar.css({position:"static"}),i.onScroll(i)}}(e)),"undefined"!=typeof ResizeSensor&&new ResizeSensor(e.stickySidebar[0],function(i){return function(){i.onScroll(i)}}(e))}))}(t,e),!0)}function o(i){var t;try{t=i[0].getBoundingClientRect().width}catch(i){}return void 0===t&&(t=i.width()),t}return(t=i.extend({containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern",defaultPosition:"relative",namespace:"TSS"},t)).additionalMarginTop=parseInt(t.additionalMarginTop)||0,t.additionalMarginBottom=parseInt(t.additionalMarginBottom)||0,function(t,o){var a=e(t,o);a||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),i(document).on("scroll."+t.namespace,function(t,o){return function(a){e(t,o)&&i(this).unbind(a)}}(t,o)),i(window).on("resize."+t.namespace,function(t,o){return function(a){e(t,o)&&i(this).unbind(a)}}(t,o)))}(t,this),this}}(jQuery);
!function(a){a.fn.menuify=function(){return this.each(function(){var $t=a(this),b=$t.find('.LinkList ul > li').children('a'),c=b.length;for(var i=0;i<c;i++){var d=b.eq(i),h=d.text();if(h.charAt(0)!=='_'){var e=b.eq(i+1),j=e.text();if(j.charAt(0)==='_'){var m=d.parent();m.append('<ul class="sub-menu m-sub"/>');}}if(h.charAt(0)==='_'){d.text(h.replace('_',''));d.parent().appendTo(m.children('.sub-menu'));}}for(var i=0;i<c;i++){var f=b.eq(i),k=f.text();if(k.charAt(0)!=='_'){var g=b.eq(i+1),l=g.text();if(l.charAt(0)==='_'){var n=f.parent();n.append('<ul class="sub-menu2 m-sub"/>');}}if(k.charAt(0)==='_'){f.text(k.replace('_',''));f.parent().appendTo(n.children('.sub-menu2'));}}$t.find('.LinkList ul li ul').parent('li').addClass('has-sub');});}}(jQuery);
!function(a){a.fn.tabify=function(t){return t=jQuery.extend({onHover:!1,animated:!0,transition:"fadeInUp"},t),this.each((function(){var e=a(this),s=e.children("[tab-ify]"),i="tab-active";if(1==t.onHover)var n="mouseenter";else n="click";e.prepend('<ul class="select-tab"></ul>'),s.each((function(){1==t.animated&&a(this).addClass("tab-animated"),e.find(".select-tab").append('<li><a href="javascript:;">'+a(this).attr("tab-ify")+"</a></li>")})).eq(0).addClass(i).addClass("tab-"+t.transition),e.find(".select-tab a").on(n,(function(){var e=a(this).parent().index();return a(this).closest(".select-tab").find(".active").removeClass("active"),a(this).parent().addClass("active"),s.removeClass(i).removeClass("tab-"+t.transition).eq(e).addClass(i).addClass("tab-"+t.transition),!1})).eq(0).parent().addClass("active")}))}}(jQuery);
!function(n){n.fn.lazyify=function(){return this.each((function(){var a=n(this),t=a.attr("data-image"),o="w"+Math.round(a.width())+"-h"+Math.round(a.height())+"-p-k-no-nu",i="";function r(){var t=n(window).height();if(n(window).scrollTop()+t>a.offset().top){var o=new Image;o.onload=function(){a.attr("style","background-image:url("+this.src+")").addClass("lazy-ify")},o.src=i}}i=t.match("/s72-c")?t.replace("/s72-c","/"+o):t.match("/w72-h")?t.replace("/w72-h72-p-k-no-nu","/"+o):t.match("=w72-h")?t.replace("=w72-h72-p-k-no-nu","="+o):t,n(window).on("load resize scroll",r),r()}))}}(jQuery);
(function($){$.fn.replaceText=function(b,a,c){return this.each(function(){var f=this.firstChild,g,e,d=[];if(f){do{if(f.nodeType===3){g=f.nodeValue;e=g.replace(b,a);if(e!==g){if(!c&&/</.test(e)){$(f).before(e);d.push(f)}else{f.nodeValue=e}}}}while(f=f.nextSibling)}d.length&&$(d).remove()})}})(jQuery);