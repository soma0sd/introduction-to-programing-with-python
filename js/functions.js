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

var $window = $(window);
var $document = $(document);

var $scrbar = null;

var $nav = $("nav");
var $navBtn = $("#nav-open-btn");
var $navOverlay = $("#nav-overlay");
var $topBtn = $("#nav-top-btn");

var $toc = $("#toc-wrap");
var $articleWrap = $("#article-wrap");
var $docWrap = $("#doc-wrap");

var $nowDocLink = SelDocNow();

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
function lastSegment(url) {
  let segments = url.split('#').shift().split('/');
  return segments.pop() || segments.pop();
}
function SelDocNow(){
  let output = null;
  let elemFile = null;
  let thisFile = lastSegment(thisUrl);
  $toc.find("a").each(function(i, elem){
    elemFile = lastSegment($(this).attr("href"));
    if (thisFile == elemFile) {
      $(this).addClass("active");
      output = $(this);
    } else {
      $(this).removeClass("active");
    }
  });
  return output;
}

function SelTocNow(){
  let segments = thisUrl.split('#');
  if(segments.length > 1){return "#" + segments.pop();}
  else {return null;}
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
$topBtn.click(function(){
  $articleWrap.animate({scrollTop:0}, 500, 'swing')});

$window.resize(function(){
  if($(window).width() < viewposrtMedium){
    hideSideNav(0);
    $navOverlay.css("opacity", 1);
    $nav.css("opacity", 1);
  } else {
    showSideNav(0);
  }
});
var hasArticleScroll = false;
$articleWrap.scroll(function(){
  hasArticleScroll = true;
});
setInterval(function(){
  if(hasArticleScroll){
    if ($articleWrap.scrollTop() > 0) {
      $topBtn.fadeIn("fast");}
    else {
      $topBtn.fadeOut("fast");    }
    $scrbar.show().fadeOut(1000);
    hasArticleScroll = false;}
});

/*
██ ███    ██ ██ ████████
██ ████   ██ ██    ██
██ ██ ██  ██ ██    ██
██ ██  ██ ██ ██    ██
██ ██   ████ ██    ██
*/
$document.ready(function(){
  let $nowToc = SelTocNow();

  if ($nowDocLink){
    $("#doc-title").html($nowDocLink.html());}

  if($window.width() < viewposrtMedium){
    hideSideNav(0);
    $navOverlay.css("opacity", 1);
    $nav.css("opacity", 1);}

  $(".scrollbar-inner").scrollbar();
  $scrbar = $(".scroll-element.scroll-y");
  $scrbar.hide();

  if ($nowToc){
    $articleWrap.scrollTop($(decodeURIComponent($nowToc)).offset().top);}
  if ($articleWrap.scrollTop() > 0) {
    $topBtn.fadeIn("fast");}
  else {
    $topBtn.fadeOut("fast");}

  let $btnBefore = $(".btn.doc.before");
  let $btnNext = $(".btn.doc.next");
  let docNum = null;
  let $docBeforeLink = null;
  let $docNextLink   = null;
  if ($nowDocLink) {
    docNum = $nowDocLink.attr("toc-number");
    $docBeforeLink = $("[toc-number='"+(docNum - 1)+"']");
    $docNextLink   = $("[toc-number='"+(parseInt(docNum) +1 )+"']");
  } else {
    $btnBefore.hide(); $btnNext.hide();
  }
  if ($docBeforeLink.html()){
    $btnBefore.find("span").html($docBeforeLink.html());
    $btnBefore.attr("href",$docBeforeLink.attr("href"));
  } else {$(".btn.doc.before").hide();}
  if ($docNextLink.html()){
    $btnNext.find("span").html($docNextLink.html());
    $btnNext.attr("href",$docNextLink.attr("href"));
  } else {$(".btn.doc.next").hide();}
});
