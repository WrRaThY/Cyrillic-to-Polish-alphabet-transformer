(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(25)},24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),s=a(7),c=a.n(s),o=a(8),l=a(9),u=a(11),i=a(10),m=a(12),h=a(3),d=a(4),f=a(5);h.b.add(d.b,d.a);var p=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(n)))).state={ruInput:"",plOutput:"",startTextAreaRowCount:20},a.transformThat=function(e){a.setState({ruInput:e.currentTarget.value});var t=a.polishifyAllContent(a.state.ruInput);a.setState({plOutput:t})},a.polishifyAllContent=function(e){if(!e)return"";var t="";return e.split("").forEach(function(e){t+=a.polishifyLetter(e)}),t},a.buildGoogleTranslateUrl=function(){var e="https://translate.google.com/#view=home&op=translate&sl=ru&tl=en&text="+a.state.ruInput;return encodeURI(e)},a.polishifyLetter=function(e){switch(e){case"A":case"a":return"a";case"\u0411":case"\u0431":return"b";case"\u0412":case"\u0432":return"w";case"\u0413":case"\u0433":return"g";case"\u0414":case"\u0434":return"d";case"\u0415":case"\u0435":return"je";case"\u0401":case"\u0451":return"jo";case"\u0416":case"\u0436":return"\u017c";case"\u0417":case"\u0437":return"z";case"\u0418":case"\u0438":return"i";case"\u0419":case"\u0439":return"i";case"\u041a":case"\u043a":return"k";case"\u041b":case"\u043b":return"l";case"\u041c":case"\u043c":return"m";case"\u041d":case"\u043d":return"n";case"\u041e":case"\u043e":return"o";case"\u041f":case"\u043f":return"p";case"\u0420":case"\u0440":return"r";case"\u0421":case"\u0441":return"s";case"\u0422":case"\u0442":return"t";case"\u0423":case"\u0443":return"u";case"\u0424":case"\u0444":return"f";case"\u0425":case"\u0445":case"x":case"X":return"h";case"\u0426":case"\u0446":return"c";case"\u0427":case"\u0447":return"cz";case"\u0428":case"\u0448":return"sz";case"\u0429":case"\u0449":return"sia";case"\u042b":case"\u044b":return"y";case"\u042d":case"\u044d":return"e";case"\u042e":case"\u044e":return"ju";case"\u042f":case"\u044f":return"ja";case"\u042a":case"\u044a":return"!";case"\u042c":case"\u044c":return"`";default:return e}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("h1",null,"Enter russian on the left"),n.a.createElement("h1",null,"And see something actually readable on the right")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"md-form amber-textarea active-amber-textarea-2"},n.a.createElement(f.a,{icon:d.b,color:"orange"}),n.a.createElement("textarea",{id:"russian-text",className:"md-textarea form-control",rows:this.state.startTextAreaRowCount,onKeyUp:this.transformThat}),n.a.createElement("label",{htmlFor:"russian-text"},"Cyrillic (Russian) goes here"))),n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"md-form amber-textarea active-amber-textarea-2"},n.a.createElement(f.a,{icon:d.a,color:"green"}),n.a.createElement("textarea",{id:"polish-text",className:"md-textarea form-control",rows:this.state.startTextAreaRowCount,contentEditable:!1,value:this.state.plOutput}),n.a.createElement("label",{htmlFor:"polish-text"},"latin (with PL characters) comes out here")))),n.a.createElement("div",null,n.a.createElement("h3",null,"And if Russian confuses you, the translation is ",n.a.createElement("a",{href:this.buildGoogleTranslateUrl(),target:"_blank",rel:"noopener noreferrer"},"here"))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(23),a(24);c.a.render(n.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.9c011801.chunk.js.map