/*
██    ██  █████  ██████  ███████
██    ██ ██   ██ ██   ██ ██
██    ██ ███████ ██████  ███████
 ██  ██  ██   ██ ██   ██      ██
  ████   ██   ██ ██   ██ ███████
*/
var viewposrtSmall =   600;
var viewposrtMedium =  960;
var viewposrtLarge =  1280;
var viewposrtXLarge = 1920;

var thisUrl = window.location.href;

var $nav = $("nav");
var $navBtn = $("#nav-open-btn");
var $navOverlay = $("#nav-overlay");
var $toc = $("#toc-wrap");
var $docWrap = $("#doc-wrap");

/*
███████ ██    ██ ███    ██  ██████
██      ██    ██ ████   ██ ██
█████   ██    ██ ██ ██  ██ ██
██      ██    ██ ██  ██ ██ ██
██       ██████  ██   ████  ██████
*/
function hideSideNav(vel = "fast"){
  let sidebarWidth = $nav.width();
  $nav.animate({left: -sidebarWidth + "px"}, vel);
  $navOverlay.fadeOut(vel);
}
function showSideNav(vel = "fast"){
  $nav.animate({left: "0"}, vel);
  if($(window).width() < viewposrtMedium){
    $navOverlay.fadeIn(vel);
  }
}
function SelMenuNow(){
  let output = null;
  $toc.find("a").each(function(i, elem){
    if (thisUrl == $(this).attr("href")) {
      $(this).addClass("active");
      output = $(this);
    } else {
      $(this).removeClass("active");
    }
  });
  return output;
}

/*
███████ ██    ██ ███████ ███    ██ ████████
██      ██    ██ ██      ████   ██    ██
█████   ██    ██ █████   ██ ██  ██    ██
██       ██  ██  ██      ██  ██ ██    ██
███████   ████   ███████ ██   ████    ██
*/
$navOverlay.click(function(){hideSideNav()});
$navBtn.click(function(){showSideNav()});


/*
██ ███    ██ ██ ████████
██ ████   ██ ██    ██
██ ██ ██  ██ ██    ██
██ ██  ██ ██ ██    ██
██ ██   ████ ██    ██
*/
var $nowDoc = null;
$(document).ready(function(){
  $nowDoc = SelMenuNow();
  if ($nowDoc){$("#doc-title").html($nowDoc.html());}
  if($(window).width() < viewposrtMedium){
    hideSideNav(0);
    $navOverlay.css("opacity", 1);
    $nav.css("opacity", 1);
  }
  $(".scrollbar-inner").scrollbar();
});

$(window).resize(function(){
  if($(window).width() < viewposrtMedium){
    hideSideNav(0);
    $navOverlay.css("opacity", 1);
    $nav.css("opacity", 1);
  } else {
    showSideNav(0);
  }
});
