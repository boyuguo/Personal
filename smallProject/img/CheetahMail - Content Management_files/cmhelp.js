<!--
//cmhelp.js

// determine the base URL for this session
var idx = location.href.indexOf('/', 8);
var URL = location.href.slice(0, idx);
var H_TARG='popup', h_win;
var agent = navigator.userAgent.toLowerCase();
var app = navigator.appName.toLowerCase();		
var sc = screen.width;

function popup(iNm,desired_height,desired_width,desired_url, desired_target) {
	// having trouble with caching, close the window, then reopen
if (h_win && !h_win.closed){
	h_win.window.close();
}

  var W,H,base_url,target,sWD,bIE4PC;
// base url
  if (desired_url) {
  	base_url = desired_url;
  } else {
  	base_url = URL;
  }

// target
  if (desired_target) {
  	target = desired_target;
  } else {
  	target = H_TARG;
  }

 // height of window
  if (desired_height > 0) { 
  	H = desired_height;
  } else {
    H=(agent.indexOf("windows")>0 && agent.indexOf("aol")>0) ? .5*screen.availHeight : .5*screen.availHeight;//*AOL
  }

 // width of window
  if (desired_width > 0) {
  	W = desired_width;
  } else {
  	W=(sc<= 800 && agent.indexOf("mac")==-1)?600:700;
  }

  // window options
  sWD="scrollbars=1,toolbar=0,status=0,menubar=0,width="+W+",height="+H+",left="+(sc-W)+",top=0,resizable=1";
  bIE4PC = agent.indexOf("msie 4")>0 && agent.indexOf("aol")<0 && agent.indexOf("mac")<0;

  if (bIE4PC && h_win!=null && !h_win.closed) h_win.location.replace(URL+iNm);
  else h_win=window.open(base_url+iNm,target,sWD);

  if (h_win && agent.indexOf("mac")<0 && app.indexOf("netscape")<0 &&
  h_win.opener!=self) h_win.opener=self; //*IE5+PC*/

}

function cmHelp(iNm) {
  var target = 'cm_help';
  var help_url = '/cmhelp/';
  var W=(sc<= 800 && agent.indexOf("mac")==-1)?300:400;
  var H=(agent.indexOf("windows")>0 && agent.indexOf("aol")>0) ?  screen.availHeight-window.screenTop-42 : screen.availHeight - 50;//*AOL*/
  popup(iNm, H, W, help_url, target);
}
//-->
