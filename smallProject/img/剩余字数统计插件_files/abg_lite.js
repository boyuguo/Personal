(function(){var f=this,k=function(){},aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},l=function(a){return"function"==aa(a)},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},p=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?
p=ba:p=ca;return p.apply(null,arguments)},q=Date.now||function(){return+new Date},r=function(a,b){function c(){}c.prototype=b.prototype;a.Y=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.X=function(a,c,h){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var u=window;var v=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,v);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};r(v,Error);v.prototype.name="CustomError";var x;a:{var y=f.navigator;if(y){var z=y.userAgent;if(z){x=z;break a}}x=""};var A=function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});f.addEventListener("test",null,b)}catch(c){}return a}(),B=function(a,b,c){a.addEventListener?a.addEventListener(b,c,A?void 0:!1):a.attachEvent&&a.attachEvent("on"+b,c)},C=function(a,b){a.removeEventListener?a.removeEventListener("click",b,A?void 0:!1):a.detachEvent&&a.detachEvent("onclick",b)};var D=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};var da=function(){var a="http";u.location&&"https:"==u.location.protocol&&"http"==a&&(a="https");return[a,"://pagead2.googlesyndication.com/pagead/js/r20100101/r20100101/abg_survey.js"].join("")};var E=function(a,b,c){this.j=c;this.i=a;this.l=b;this.h=0;this.g=null};E.prototype.get=function(){var a;0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i();return a};var F=function(a,b){a.l(b);a.h<a.j&&(a.h++,b.next=a.g,a.g=b)};var ea=function(a){f.setTimeout(function(){throw a;},0)},G,fa=function(){var a=f.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==x.indexOf("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+
"//"+b.location.host,a=p(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&-1==x.indexOf("Trident")&&-1==x.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.O;c.O=null;a()}};return function(a){d.next={O:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in
document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){f.setTimeout(a,0)}};var ga=new E(function(){return new H},function(a){a.reset()},100),ia=function(){var a=ha,b=null;a.g&&(b=a.g,a.g=a.g.next,a.g||(a.h=null),b.next=null);return b},H=function(){this.next=this.h=this.g=null};H.prototype.set=function(a,b){this.g=a;this.h=b;this.next=null};H.prototype.reset=function(){this.next=this.h=this.g=null};var K=function(a,b){I||ka();J||(I(),J=!0);var c=ha,d=ga.get();d.set(a,b);c.h?c.h.next=d:c.g=d;c.h=d},I,ka=function(){if(-1!=String(f.Promise).indexOf("[native code]")){var a=f.Promise.resolve(void 0);I=function(){a.then(la)}}else I=function(){var a=la,c;!(c=!l(f.setImmediate))&&(c=f.Window&&f.Window.prototype)&&(c=-1==x.indexOf("Edge")&&f.Window.prototype.setImmediate==f.setImmediate);c?(G||(G=fa()),G(a)):f.setImmediate(a)}},J=!1,ha=new function(){this.h=this.g=null},la=function(){for(var a;a=ia();){try{a.g.call(a.h)}catch(b){ea(b)}F(ga,
a)}J=!1};var N=function(a,b){this.g=0;this.o=void 0;this.j=this.h=this.i=null;this.l=this.m=!1;if(a!=k)try{var c=this;a.call(b,function(a){L(c,2,a)},function(a){L(c,3,a)})}catch(d){L(this,3,d)}},ma=function(){this.next=this.i=this.h=this.j=this.g=null;this.l=!1};ma.prototype.reset=function(){this.i=this.h=this.j=this.g=null;this.l=!1};
var na=new E(function(){return new ma},function(a){a.reset()},100),oa=function(a,b,c){var d=na.get();d.j=a;d.h=b;d.i=c;return d},ta=function(){var a,b=new N(function(b){a=b});return new sa(b,a)};N.prototype.then=function(a,b,c){return ua(this,l(a)?a:null,l(b)?b:null,c)};N.prototype.then=N.prototype.then;N.prototype.$goog_Thenable=!0;N.prototype.cancel=function(a){0==this.g&&K(function(){var b=new O(a);va(this,b)},this)};
var va=function(a,b){if(0==a.g)if(a.i){var c=a.i;if(c.h){for(var d=0,e=null,h=null,g=c.h;g&&(g.l||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(h=g);e&&(0==c.g&&1==d?va(c,b):(h?(d=h,d.next==c.j&&(c.j=d),d.next=d.next.next):wa(c),xa(c,e,3,b)))}a.i=null}else L(a,3,b)},za=function(a,b){a.h||2!=a.g&&3!=a.g||ya(a);a.j?a.j.next=b:a.h=b;a.j=b},ua=function(a,b,c,d){var e=oa(null,null,null);e.g=new N(function(a,g){e.j=b?function(c){try{var e=b.call(d,c);a(e)}catch(t){g(t)}}:a;e.h=c?function(b){try{var e=c.call(d,
b);void 0===e&&b instanceof O?g(b):a(e)}catch(t){g(t)}}:g});e.g.i=a;za(a,e);return e.g};N.prototype.u=function(a){this.g=0;L(this,2,a)};N.prototype.v=function(a){this.g=0;L(this,3,a)};
var L=function(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;var d;a:{var e=c,h=a.u,g=a.v;if(e instanceof N)za(e,oa(h||k,g||null,a)),d=!0;else{var m;if(e)try{m=!!e.$goog_Thenable}catch(t){m=!1}else m=!1;if(m)e.then(h,g,a),d=!0;else{m=typeof e;if("object"==m&&null!=e||"function"==m)try{var w=e.then;if(l(w)){Aa(e,w,h,g,a);d=!0;break a}}catch(t){g.call(a,t);d=!0;break a}d=!1}}}d||(a.o=c,a.g=b,a.i=null,ya(a),3!=b||c instanceof O||Ba(a,c))}},Aa=function(a,b,c,
d,e){var h=!1,g=function(a){h||(h=!0,c.call(e,a))},m=function(a){h||(h=!0,d.call(e,a))};try{b.call(a,g,m)}catch(w){m(w)}},ya=function(a){a.m||(a.m=!0,K(a.s,a))},wa=function(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.j=null);return b};N.prototype.s=function(){for(var a;a=wa(this);)xa(this,a,this.g,this.o);this.m=!1};
var xa=function(a,b,c,d){if(3==c&&b.h&&!b.l)for(;a&&a.l;a=a.i)a.l=!1;if(b.g)b.g.i=null,Ca(b,c,d);else try{b.l?b.j.call(b.i):Ca(b,c,d)}catch(e){Da.call(null,e)}F(na,b)},Ca=function(a,b,c){2==b?a.j.call(a.i,c):a.h&&a.h.call(a.i,c)},Ba=function(a,b){a.l=!0;K(function(){a.l&&Da.call(null,b)})},Da=ea,O=function(a){v.call(this,a)};r(O,v);O.prototype.name="cancel";var sa=function(a,b){this.g=a;this.h=b};var Ea=function(){var a=ta();this.promise=a.g;this.resolve=a.h};function Fa(a,b){a.google_llp||(a.google_llp={});a=a.google_llp;a[5]||(a[5]=new Ea,b&&b());return a[5]}var Ga=function(){var a=window,b=da();return Fa(a,function(){var c=a.document,d=c.createElement("script");d.src=b;(c=c.getElementsByTagName("script")[0])&&c.parentNode&&c.parentNode.insertBefore(d,c)}).promise};var db=function(){var a=P.el,b=P.ael,c=P.iel,d=P.hw,e=P.sw,h=P.hh,g=P.sh,m=P.himg,w=P.simg,t=P.alt,Ma=P.t,Na=P.tw,Oa=P.t2,Pa=P.t2w,Qa=P.tbo,M=P.att,pa=P.halign,Ra=P.ff,Sa=P.fe,Ta=P.iba,Ua=P.lttp,qa=P.uic,ra=P.uit,Va=P.ict,Wa=P.ci,Xa=P.icd,Ya=P.uaal,Za=P.opi,$a=P.ti,n=this;this.H=P.elp;this.u=a;this.h=b;this.j=c;this.l=d;this.g=e;this.J=h;this.v=g;this.P=m;this.T=w;this.I=t;this.M=Ma;this.F=Na;this.N=Oa;this.D=Pa;this.G=Qa;this.m=Ha(this.h);this.W=!0===Za;this.A="left"==pa;this.w=this.o=null;this.C=
Va;this.R=Wa||"";this.K=!0===Ta;this.B=function(){return Ia(n)};this.V=Xa||null;this.U=pa;a="undefined"!=typeof SVGElement&&"undefined"!=typeof document.createElementNS;"img"==Ra&&(a=!1);a?"cn"==M?Ja(this):"adchoices"==M?Ka(this,Ya?La:ab):"adsbygoogle"==M?bb(this):cb(this):cb(this);this.s=null;this.L=0;this.i=Ua&&this.H?this.H:this.u;$a?B(this.i,"click",function(a){var b=u.goog_interstitial_display;b&&(b(a),a&&(a.stopPropagation(),a.preventDefault()))}):qa&&!ra?B(this.i,"click",this.B):(qa&&ra&&this.C&&
B(this.C,"click",this.B),Sa?Q(this):(B(this.i,"mouseover",function(){return Q(n)}),B(this.i,"mouseout",function(){R(n,500)}),B(this.i,"mouseup",function(){R(n,4E3)}),B(this.i,"touchstart",function(){return Q(n)}),B(this.i,"touchend",function(){R(n,4E3)}),B(this.i,"touchcancel",function(){R(n,4E3)}),B(this.m,"click",function(a){if(n.h&&"block"==n.h.style.display&&500>q()-n.L)D(a);else if(n.W){var b=n.m.getAttribute("href");window.adSlot?window.adSlot.openSystemBrowser(b)&&D(a):window.openSystemBrowser&&
(window.openSystemBrowser(b),D(a))}})))},T=function(a){for(var b=S("svg",{width:"100%",height:"100%"}),c=0;c<arguments.length;c++)b.appendChild(arguments[c]);return b},S=function(a,b){a=document.createElementNS("http://www.w3.org/2000/svg",a);U(a,b);return a},U=function(a,b){for(var c in b)a.setAttribute(c,b[c])},V=function(a,b){for(var c=1;c<arguments.length;c++)a.appendChild(arguments[c])},ab=function(a){a=S("svg",{"class":"abgi",x:a,y:"0.5px"});var b=S("circle",{cx:"6.711px",cy:"6.04px",r:"0.483"}),
c=S("path",{d:"M2.696,3.234c0-0.555,0.131-0.989,0.537-1.201c0.359-0.188,0.769-0.136,1.25,0.141l7.438,4.219c0.485,0.28,0.743,0.546,0.734,1c-0.009,0.456-0.271,0.771-0.766,1.032L7.78,10.519c-0.594,0.297-0.798,0.289-1.031,0.188C6.39,10.55,6.296,10.237,6.296,9.378l0.016-1.672c0-0.828,0.844-0.906,0.844,0l0.016,1.719C7.155,9.94,7.499,9.769,7.499,9.769L11.53,7.69c0.359-0.219,0.25-0.406,0.141-0.516c-0.024-0.024-0.188-0.12-0.25-0.156L4.233,2.987c-0.797-0.531-0.656,0.25-0.656,0.25s-0.016,7.182-0.016,7.625c0,0.797,0.094,0.672,1.062,0.156c0.95-0.506,1.156,0.422,0.516,0.75c0,0-0.869,0.473-1.297,0.641c-0.797,0.312-1.109-0.234-1.141-0.641C2.674,11.401,2.696,3.234,2.696,3.234z"});
V(a,b,c);return a},La=function(a){a=S("svg",{"class":"abgi",x:a});var b=S("circle",{cx:"6",cy:"6",r:"0.67"}),c=S("path",{d:"M4.2,11.3Q3.3,11.8,3.3,10.75L3.3,4.1Q3.3,3.1,4.3,3.5L10.4,7.0Q12.0,7.5,10.4,8.0L6.65,10.0L6.65,7.75a0.65,0.65,0,1,0,-1.3,0L5.35,10.75a0.9,0.9,0,0,0,1.3,0.8L12.7,8.2Q13.7,7.5,12.7,6.7L3.3,1.6Q2.2,1.3,1.8,2.5L1.8,12.5Q2.2,13.9,3.3,13.3L4.8,12.5A0.3,0.3,0,1,0,4.2,11.3Z"});V(a,b,c);return a},W=function(a,b){return"a"+a+","+a+",0,1,"+b+",0,"+2*a+"a"+a+","+a+",0,1,"+b+",0,"+-2*a},
eb=function(a){a=S("svg",{"class":"abgi",x:a});var b=S("path",{d:"M7.5,1.5"+W(6,0)+"m0,1"+W(5,1)+"ZM6.625,11l1.75,0l0,-4.5l-1.75,0ZM7.5,3.75"+W(1,0)+"Z"});V(a,b);return a},Ha=function(a){var b;b="A";for(var c=a.childNodes,d=0;d<c.length;d++){var e=c.item(d);if("undefined"!=typeof e.tagName&&e.tagName.toUpperCase()==b)return e}return a},Ia=function(a){fb(a);gb(a).then(function(b){b.createAttributionCard(a.V,a.R,a.K,a.U);b.expandAttributionCard()})},gb=function(a){C(a.i,a.B);a.C&&C(a.C,a.B);return Ga()},
Ja=function(a){var b=X("\u5e7f\u544a",2,0,24),c=b.childNodes.item(0);U(c,{"class":"abgi","font-size":"11px","font-weight":"bold"});V(a.j,T(Y(),b));b=a.A?X("\u5e7f\u544a Google",2,0,60):X("Google \u5e7f\u544a",3.5,0,60);c=b.childNodes.item(0);U(c,{"font-size":"11px"});V(a.m,T(Z(a,a.g,a.v),b))},Ka=function(a,b){V(a.j,T(Y(),b("0px")));var c,d;a.A?(c=a.l+2,d=0):(c=5,d=a.g-a.l-0);a.o=X(a.M,c,a.G,a.F);V(a.m,T(Z(a,a.g,a.v),b(d+"px"),a.o))},Y=function(){return S("rect",{"class":"abgbg",width:"100%",height:"100%"})},
Z=function(a,b,c){var d="M";a.K?(d+="0,"+c+"L"+b+","+c,d=a.A?d+("L"+b+",4s0,-4,-4,-4L0,0"):d+("L"+b+",0L4,0s-4,0,-4,4")):(d+="0,0L"+b+",0",d=a.A?d+("L"+b+","+(c-4)+"s0,4,-4,4L0,"+c):d+("L"+b+","+c+"L4,"+c+"s-4,0,-4,-4"));return S("path",{"class":"abgbg",d:d+"z"})},X=function(a,b,c,d){b=S("svg",{"class":"abgtxt",x:b+"px",y:11+c+"px",width:d+"px"});c=S("text");a=document.createTextNode(a);V(b,c);V(c,a);return b},ib=function(a,b){a=a.childNodes.item(0);var c=a.getComputedTextLength();0!=c&&a.setAttribute("transform",
"scale("+b/c+")")},cb=function(a){var b=jb(a.P,a.I,a.l,a.J);V(a.j,b);b=jb(a.T,a.I,a.g,a.v);a.m.appendChild(b);b.width=a.g},jb=function(a,b,c,d){var e=document.createElement("IMG");e.src=a;e.alt=b;e.setAttribute("border","0");e.width=c;e.height=d;return e},Q=function(a){window.clearTimeout(a.s);a.s=null;a.h&&"block"==a.h.style.display||(a.L=q(),a.g&&(a.u.style.width=a.g+"px",a.u.style.height=a.v+"px"),a.j&&a.h&&(a.j.style.display="none",a.h.style.display="block"),a.o&&ib(a.o,a.F),a.w&&ib(a.w,a.D))},
R=function(a,b){window.clearTimeout(a.s);a.s=window.setTimeout(function(){return fb(a)},b)},fb=function(a){window.clearTimeout(a.s);a.s=null;a.l&&(a.u.style.width=a.l+"px",a.u.style.height=a.J+"px");a.j&&a.h&&(a.j.style.display="block",a.h.style.display="none")},bb=function(a){var b=Y(),c=eb("0px");V(a.j,T(b,c));var d,e;a.A?(e=0,c=a.l+2,d=a.g-a.D-5):(c=5,d=a.g-a.D-2-0-a.l,e=a.g-a.l-0);b=Z(a,a.g,a.v);a.o=X(a.M,c,a.G,a.F);""!=a.N&&(a.w=X(a.N,d,a.G,a.D));c=eb(e+"px");a.m&&(b=a.w?T(b,a.o,a.w,c):T(b,a.o,
c),V(a.m,b))};if("undefined"!=typeof window.abgp){var P=window.abgp;new db};}).call(this);
