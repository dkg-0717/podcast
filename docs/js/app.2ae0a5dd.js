(function(e){function t(t){for(var a,i,r=t[0],c=t[1],l=t[2],A=0,d=[];A<r.length;A++)i=r[A],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"0fe5":function(e,t,n){},"2bba":function(e,t,n){"use strict";var a=n("f832"),o=n.n(a);o.a},"45b1":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("navbar"),n("div",{staticClass:"container"},[n("Player"),n("ReversePlayer")],1)],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"player"},[n("reverse-button"),n("div",{staticClass:"coverImage"}),n("soundName",{attrs:{soundName:e.getsoundName}}),n("loader",{directives:[{name:"show",rawName:"v-show",value:e.loader,expression:"loader"}]}),n("div",{staticClass:"buttonContainer"},[n("back-button",{on:{previusSound:e.previusSound}}),n("play-button-container",{attrs:{isLoaded:e.isLoaded,playing:e.playing},on:{playSound:e.playSound}}),n("next-button",{on:{click:e.nextSound}})],1),n("progress-bar")],1)},r=[],c=(n("ed4d"),n("cffa")),l=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loader-anim",attrs:{id:"loader"}},[n("div",{staticClass:"loader-anim-obj loader-4 orange"})])}],A=(n("ac2b"),n("2877")),d={},f=Object(A["a"])(d,l,u,!1,null,"234382ee",null),p=f.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"playButton",on:{click:e.playSound}},[a("figure",[e.isLoaded&&!e.playing?[a("img",{staticClass:"playButton--img",attrs:{src:n("df84"),alt:""}})]:e._e(),e.isLoaded&&e.playing?[a("img",{staticClass:"playButton--img",attrs:{src:n("88ae"),alt:""}})]:e._e()],2)])},m=[],g={name:"playButton",props:["isLoaded","playing"],methods:{playSound:function(){this.$emit("playSound")}}},h=g,S=(n("2bba"),Object(A["a"])(h,v,m,!1,null,null,null)),b=S.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"backButton",on:{click:e.previusSound}})},C=[],I={methods:{previusSound:function(){this.$emit("previusSound")}}},k=I,M=(n("98ae"),Object(A["a"])(k,y,C,!1,null,null,null)),x=M.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nextButton"})},R=[],P=(n("c00d"),{}),B=Object(A["a"])(P,O,R,!1,null,null,null),L=B.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"reverseButton__container"},[n("button",{staticClass:"reverseButton",attrs:{id:"reverseButton"},on:{click:e.reverseCard}})])},E=[],j=n("c24c"),T=n.n(j),U=n("9ce6");c["a"].registerPlugin(U["a"]);var q={mounted:function(){this.tl=c["a"].timeline(),this.player=document.querySelector(".player"),this.reversePlayer=document.querySelector(".reversePlayer"),this.containerProgressBar=document.querySelector(".container-progress-bar")},methods:{reverseCard:function(){this.player.classList.contains("reversed")?(this.player.classList.remove("reversed"),this.resetPosition()):(this.player.classList.add("reversed"),this.tl.to(this.player,{rotationY:180}).to(this.player,{duration:.5,opacity:0}).to(this.reversePlayer,{opacity:1},"-=0.5").set(this.player,{zIndex:0}).set(this.reversePlayer,{zIndex:1}))},resetPosition:function(){this.tl.to(this.reversePlayer,{opacity:0}).to(this.player,{duration:.5,opacity:1}).to(this.player,{rotationY:0},"-=1.5").set(this.player,{zIndex:1,rotationY:0}).set(this.reversePlayer,{zIndex:0,rotationY:0}).set(this.containerProgressBar,{position:"fixed",bottom:0})}}};c["a"].registerPlugin(U["a"]),U["a"].defaultTransformPerspective=1e3;var N={mixins:[q],mounted:function(){setTimeout(this.guide,500)},methods:{guide:function(){var e=new T.a;e.highlight({element:"#reverseButton",popover:{title:"Transcripción",description:"Presiona el botón para leer la transcripción",position:"left"}})}}},Z=N,K=(n("e395"),Object(A["a"])(Z,w,E,!1,null,null,null)),z=K.exports,V=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},X=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-progress-bar"},[n("div",{staticClass:"progress-bar"})])}],H=(n("afdc"),{}),W=Object(A["a"])(H,V,X,!1,null,null,null),D=W.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"info"},[n("p",{staticClass:"title"},[e._v(e._s(e.soundName))])])},G=[],Q={props:["soundName"]},Y=Q,F=(n("7135"),Object(A["a"])(Y,J,G,!1,null,null,null)),_=F.exports,$=n("6861"),ee=n.n($),te=(n("d81d"),n("439b")),ne={data:function(){return{sounds:["fluir"],sound:null,playing:null}},methods:{playSound:function(){this.stopAnimation(),this.isPlaying(),this.showControls(),this.setBackground()},isPlaying:function(){this.playing?this.pauseSound():this.sound&&this.sound.paused?this.resumeSound():this.initSound()},resumeSound:function(){this.playing=!0,this.sound.paused=!1},pauseSound:function(){this.playing=!1,this.sound.paused=!0,this.tl.progress(.25)},previusSound:function(){this.sound.position=0},nextSound:function(){console.log("click")},showControls:function(){c["a"].set([this.backButton,this.nextButton],{opacity:1})},initSound:function(){this.playing=!0,this.sound=te["createjs"].Sound.play("fluir"),this.sound.on("complete",this.stopInterval),this.initInterval()},loadSounds:function(){var e=this;this.sounds.map((function(t){var a=n("ba5b")("./".concat(t,".mp3"));te["createjs"].Sound.registerSound(a,t),te["createjs"].Sound.on("fileload",e.loaded)}))},progressEvent:function(e){this.initInterval(e)},incrementProgress:function(){this.progressBar.style.width="".concat(this.sound.position/this.sound.duration*100,"%")},initInterval:function(){var e=this;this.interval=setInterval((function(){e.incrementProgress()}),30)},stopInterval:function(){this.playing=!1,clearInterval(this.interval),this.startAnimation(),this.progressBar.style.width="0%"}}},ae={data:function(){return{nextButton:null,backButton:null,playButton:null,progressBar:null,info:null}},methods:{startAnimation:function(){c["a"].registerPlugin(U["a"]),this.tl=new c["a"].timeline,this.tl.fromTo(this.info,.7,{opacity:0},{opacity:1,ease:"back"}).set([this.playButton],{opacity:1}).from(this.playButton,1,{scale:0,ease:"elastic.out(1, 0.3)"}).fromTo(this.playButton,1,{scale:1},{scale:1.1,yoyo:!0,repeat:-1})},stopAnimation:function(){this.progressBar.style.width="0%",this.tl.kill()}},mounted:function(){this.playButton=document.querySelector(".playButton"),this.progressBar=document.querySelector(".progress-bar"),this.info=document.querySelector(".info"),this.backButton=document.querySelector(".backButton"),this.nextButton=document.querySelector(".nextButton")}},oe={name:"player",mixins:[ne,ae],data:function(){return{sound:null,isLoaded:!1,loader:!1}},components:{loader:p,reverseButton:z,soundName:_,progressBar:D,backButton:x,nextButton:L,playButtonContainer:b},computed:{getsoundName:function(){return this.sounds[0]}},methods:{setBackground:function(){this.coverImage.style.background="#fff url(".concat(ee.a,") no-repeat center"),this.coverImage.style.backgroundSize="cover"},over:function(){this.playing&&c["a"].set([this.backButton,this.nextButton,this.playButton],{opacity:1,pointerEvents:"auto"})},leave:function(){this.playing&&(c["a"].set(this.playButton,{opacity:0}),this.backButton.style.opacity="0")},loaded:function(){this.loader=!1,this.isLoaded=!0,this.startAnimation()},checkMedia:function(){return!!window.matchMedia("(orientation: portrait)").matches},removeImage:function(e){document.querySelector(e).style.backgroundImage=null},getImage:function(){var e=".coverImage",t=".player",a=this.checkMedia()?e:t;this.checkMedia()?this.removeImage(t):this.removeImage(e),this.coverImage=document.querySelector(a),this.coverImage.style.background="#fff url(".concat(n("c462"),") no-repeat center"),this.coverImage.style.backgroundSize="cover"}},mounted:function(){this.loader=!0,this.loadSounds(),this.getImage(),window.addEventListener("resize",this.getImage)}},se=oe,ie=(n("abc3"),Object(A["a"])(se,i,r,!1,null,"325a1e52",null)),re=ie.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"reversePlayer"},[n("reverseButton"),n("p",{staticClass:"reverse-text"},[e._v(" Muy buen día… ¿cómo están? ¿Cómo se han sentido? Hemos estado platicado acerca de la situación que vivimos actualmente, llena de incertidumbre, que provoca estrés en todos nosotros al no saber que nos espera en el futuro, pero… ¿para qué vivir en un tiempo que no es el presente? ")]),n("p",{staticClass:"reverse-text"},[e._v(" Pensar en que pasará después es la principal causa de estrés en el ser humano y es que… normalmente estamos en nuestra casa y pensamos en lo que haremos en el trabajo y cuando estamos en el trabajo pensamos en lo que haremos en nuestras vacaciones y así, no disfrutamos lo que está sucediendo en el momento actual. ")]),n("p",{staticClass:"reverse-text"},[e._v(" Te quiero compartir lo siguiente: Hace unos días leí en el libro “Dios nunca parpadea” de Regina Brett una anécdota sobre su aventura en los rápidos, el guía al dar las instrucciones les dijo lo siguiente: “Si te caes de la balsa no intentes pararte, no te aferres a las rocas, no trates de nadar contra el río, el río ganará. Si te caes, relájate, deja que el río te lleve, te llevará a aguas tranquilas” ¿Y sabes qué? ")]),n("p",{staticClass:"reverse-text"},[e._v(" Creo que en la vida pasa lo mismo, de repente tenemos situaciones complicadas, que están totalmente fuera de nuestro control, y que lo único que podemos hacer es identificar lo que sí nos corresponde, tomar cartas en el asunto – el control de tu vida -, y después relajarte, no aferrarte a las situaciones, a los lugares, a las personas, al trabajo, a nada… relájate para que la vida te lleve a aguas tranquilas. En estos momentos, ¿ya identificaste cuáles son las rocas a las que te estás sujetando y no te permiten avanzar? ")]),n("p",{staticClass:"reverse-text"},[e._v(" En edivers queremos acompañarte en este proceso, para que independientemente de los diferentes escenarios y desafíos que estés enfrentando la situación se transforme en algo positivo para tu futuro. ")]),n("p",{staticClass:"reverse-text"},[e._v(" Si quieres saber más acerca de lo que significa “Fluir” y cómo puedes lograrlo, mantente atento a nuevos materiales que tendremos listos para ti. Y recuerda: La vida es como una pista de carreras, son las curvas las que hacen que valga la pena. ")])],1)},le=[],ue={name:"player",components:{reverseButton:z}},Ae=ue,de=(n("e6bf"),Object(A["a"])(Ae,ce,le,!1,null,"3d9e5bf4",null)),fe=de.exports,pe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ve=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",[a("nav",[a("figure",[a("img",{attrs:{src:n("981f"),height:"100",alt:""}})])])])}],me=(n("6473"),{}),ge=Object(A["a"])(me,pe,ve,!1,null,null,null),he=ge.exports,Se=(n("7db0"),n("d3b7"),n("e25e"),n("25f0"),{UTILS:{},debug:{isActive:!0},SCORM:{version:null,handleCompletionStatus:!0,handleExitMode:!0,API:{handle:null,isFound:!1},connection:{isActive:!1},data:{completionStatus:null,exitStatus:null},debug:{}}});Se.SCORM.isAvailable=function(){return!0},Se.SCORM.API.find=function(e){var t=null,n=0,a=500,o="SCORM.API.find",s=Se.UTILS.trace,i=Se.SCORM;while(!e.API&&!e.API_1484_11&&e.parent&&e.parent!=e&&n<=a)n++,e=e.parent;if(i.version)switch(i.version){case"2004":e.API_1484_11?t=e.API_1484_11:s(o+": SCORM version 2004 was specified by user, but API_1484_11 cannot be found.");break;case"1.2":e.API?t=e.API:s(o+": SCORM version 1.2 was specified by user, but API cannot be found.");break}else e.API_1484_11?(i.version="2004",t=e.API_1484_11):e.API&&(i.version="1.2",t=e.API);return t?(s(o+": API found. Version: "+i.version),s("API: "+t)):s(o+": Error finding API. \nFind attempts: "+n+". \nFind attempt limit: "+a),t},Se.SCORM.API.get=function(){var e=null,t=window,n=Se.SCORM.API.find,a=Se.UTILS.trace;return t.parent&&t.parent!=t&&(e=n(t.parent)),!e&&t.top.opener&&(e=n(t.top.opener)),e?Se.SCORM.API.isFound=!0:a("API.get failed: Can't find the API!"),e},Se.SCORM.API.getHandle=function(){var e=Se.SCORM.API;return e.handle||e.isFound||(e.handle=e.get()),e.handle},Se.SCORM.connection.initialize=function(){var e=!1,t=Se.SCORM,n=Se.SCORM.data.completionStatus,a=Se.UTILS.trace,o=Se.UTILS.StringToBoolean,s=Se.SCORM.debug,i="SCORM.connection.initialize ";if(a("connection.initialize called."),t.connection.isActive)a(i+"aborted: Connection already active.");else{var r=t.API.getHandle(),c=0;if(r){switch(t.version){case"1.2":e=o(r.LMSInitialize(""));break;case"2004":e=o(r.Initialize(""));break}if(e)if(c=s.getCode(),null!==c&&0===c){if(t.connection.isActive=!0,t.handleCompletionStatus&&(n=Se.SCORM.status("get"),n))switch(n){case"not attempted":Se.SCORM.status("set","incomplete");break;case"unknown":Se.SCORM.status("set","incomplete");break}}else e=!1,a(i+"failed. \nError code: "+c+" \nError info: "+s.getInfo(c));else c=s.getCode(),a(null!==c&&0!==c?i+"failed. \nError code: "+c+" \nError info: "+s.getInfo(c):i+"failed: No response from server.")}else a(i+"failed: API is null.")}return e},Se.SCORM.connection.terminate=function(){var e=!1,t=Se.SCORM,n=Se.SCORM.data.exitStatus,a=Se.SCORM.data.completionStatus,o=Se.UTILS.trace,s=Se.UTILS.StringToBoolean,i=Se.SCORM.debug,r="SCORM.connection.terminate ";if(t.connection.isActive){var c=t.API.getHandle(),l=0;if(c){if(t.handleExitMode&&!n)if("completed"!==a&&"passed"!==a)switch(t.version){case"1.2":e=t.set("cmi.core.exit","suspend");break;case"2004":e=t.set("cmi.exit","suspend");break}else switch(t.version){case"1.2":e=t.set("cmi.core.exit","logout");break;case"2004":e=t.set("cmi.exit","normal");break}switch(t.version){case"1.2":e=s(c.LMSFinish(""));break;case"2004":e=s(c.Terminate(""));break}e?t.connection.isActive=!1:(l=i.getCode(),o(r+"failed. \nError code: "+l+" \nError info: "+i.getInfo(l)))}else o(r+"failed: API is null.")}else o(r+"aborted: Connection already terminated.");return e},Se.SCORM.data.get=function(e){var t=null,n=Se.SCORM,a=Se.UTILS.trace,o=Se.SCORM.debug,s="SCORM.data.get("+e+") ";if(n.connection.isActive){var i=n.API.getHandle(),r=0;if(i){switch(n.version){case"1.2":t=i.LMSGetValue(e);break;case"2004":t=i.GetValue(e);break}if(r=o.getCode(),""!==t&&0===r)switch(e){case"cmi.core.lesson_status":case"cmi.completion_status":n.data.completionStatus=t;break;case"cmi.core.exit":case"cmi.exit":n.data.exitStatus=t;break}else a(s+"failed. \nError code: "+r+"\nError info: "+o.getInfo(r))}else a(s+"failed: API is null.")}else a(s+"failed: API connection is inactive.");return a(s+" value: "+t),String(t)},Se.SCORM.data.set=function(e,t){var n=!1,a=Se.SCORM,o=Se.UTILS.trace,s=Se.UTILS.StringToBoolean,i=Se.SCORM.debug,r="SCORM.data.set("+e+") ";if(a.connection.isActive){var c=a.API.getHandle(),l=0;if(c){switch(a.version){case"1.2":n=s(c.LMSSetValue(e,t));break;case"2004":n=s(c.SetValue(e,t));break}n?"cmi.core.lesson_status"!==e&&"cmi.completion_status"!==e||(a.data.completionStatus=t):o(r+"failed. \nError code: "+l+". \nError info: "+i.getInfo(l))}else o(r+"failed: API is null.")}else o(r+"failed: API connection is inactive.");return n},Se.SCORM.data.save=function(){var e=!1,t=Se.SCORM,n=Se.UTILS.trace,a=Se.UTILS.StringToBoolean,o="SCORM.data.save failed";if(t.connection.isActive){var s=t.API.getHandle();if(s)switch(t.version){case"1.2":e=a(s.LMSCommit(""));break;case"2004":e=a(s.Commit(""));break}else n(o+": API is null.")}else n(o+": API connection is inactive.");return e},Se.SCORM.status=function(e,t){var n=!1,a=Se.SCORM,o=Se.UTILS.trace,s="SCORM.getStatus failed",i="";if(null!==e){switch(a.version){case"1.2":i="cmi.core.lesson_status";break;case"2004":i="cmi.completion_status";break}switch(e){case"get":n=Se.SCORM.data.get(i);break;case"set":null!==t?n=Se.SCORM.data.set(i,t):(n=!1,o(s+": status was not specified."));break;default:n=!1,o(s+": no valid action was specified.")}}else o(s+": action was not specified.");return n},Se.SCORM.debug.getCode=function(){var e=Se.SCORM.API.getHandle(),t=Se.SCORM,n=Se.UTILS.trace,a=0;if(e)switch(t.version){case"1.2":a=parseInt(e.LMSGetLastError(),10);break;case"2004":a=parseInt(e.GetLastError(),10);break}else n("SCORM.debug.getCode failed: API is null.");return a},Se.SCORM.debug.getInfo=function(e){var t=Se.SCORM.API.getHandle(),n=Se.SCORM,a=Se.UTILS.trace,o="";if(t)switch(n.version){case"1.2":o=t.LMSGetErrorString(e.toString());break;case"2004":o=t.GetErrorString(e.toString());break}else a("SCORM.debug.getInfo failed: API is null.");return String(o)},Se.SCORM.debug.getDiagnosticInfo=function(e){var t=Se.SCORM.API.getHandle(),n=Se.SCORM,a=Se.UTILS.trace,o="";if(t)switch(n.version){case"1.2":o=t.LMSGetDiagnostic(e);break;case"2004":o=t.GetDiagnostic(e);break}else a("SCORM.debug.getDiagnosticInfo failed: API is null.");return String(o)},Se.SCORM.init=Se.SCORM.connection.initialize,Se.SCORM.get=Se.SCORM.data.get,Se.SCORM.set=Se.SCORM.data.set,Se.SCORM.save=Se.SCORM.data.save,Se.SCORM.quit=Se.SCORM.connection.terminate,Se.UTILS.StringToBoolean=function(e){switch(e.toLowerCase()){case"true":case"yes":case"1":return!0;case"false":case"no":case"0":case null:return!1;default:return Boolean(e)}},Se.UTILS.trace=function(e){Se.debug.isActive&&window.console&&window.console.firebug&&console.log(e)};var be,ye,Ce,Ie=Se,ke=!1;function Me(){if(console.log(">>initCourse"),!ye){try{be=Ie.SCORM}catch(t){console.log(t)}if(be.version="1.2",ye=be.init(),console.log("scorm:",be),console.log("connected:",ye),ye){var e=be.status("get");console.log("completion status",e),"completed"==e?Re("You have already completed this course. You do not need to continue."):(null==e&&(ke=be.set("cmi.core.lesson_status","incomplete")),Oe())}else Re("Error: Course could not connect with the LMS")}}function xe(e){console.log("Finis"),ye?(ke=be.set("cmi.core.lesson_status",e),Ce="completed",Oe(),ke||Re("Error: Course could not be set to complete!")):Re("Error: Course is not connected to the LMS")}function Oe(){console.log("success",ke),ke?be.save():(console.log("SERVER ERROR"),console.log(be.debug.getCode()),console.log(be.debug.getInfo(be.debug.getCode())))}function Re(e){console.log(e)}function Pe(){"completed"===Ce?be.set("cmi.core.exit","logout"):be.set("cmi.core.exit","suspend"),be.quit()}window.onbeforeunload=function(e){Pe()};var Be={name:"home",components:{Player:re,ReversePlayer:fe,navbar:he},mounted:function(){this.setHeight(),Me(),xe("completed")},methods:{setHeight:function(){var e=document.scrollingElement||document.documentElement,t=document.querySelector("body"),n=document.querySelector(".container");t.style.height="".concat(e.clientHeight,"px"),n.style.height="".concat(e.clientHeight-60,"px")}}},Le=Be,we=(n("034f"),Object(A["a"])(Le,o,s,!1,null,null,null)),Ee=we.exports;n("01d7");a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(Ee)}}).$mount("#app")},6473:function(e,t,n){"use strict";var a=n("98de"),o=n.n(a);o.a},6861:function(e,t,n){e.exports=n.p+"img/familia.21c36ac7.png"},7135:function(e,t,n){"use strict";var a=n("9b71"),o=n.n(a);o.a},"71c8":function(e,t,n){},"843d":function(e,t,n){},"85ec":function(e,t,n){},"88ae":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAA0ElEQVR4nO3RMQqAQAADwdP//1lbK5FDXcGZPhDYMQAAAAD4i2Vis93+4tzMx6NP/12fesE1AsQEiAkQEyAmQEyAmAAxAWICxASICRATICZATICYADEBYgLEBIgJEBMgJkBMgJgAMQFiAsQEiAkQEyAmQEyAmAAxAWICxASICRATICZATICYADEBYgLEBIgJEBMgJkBMgJgAMQFiAsQEiAkQEyAmQEyAmAAxAWICxASICRATICZATICYADEBYgLEBIgJEBMgJkBMAAAAAAB4yQ65kAKQ2nKZeQAAAABJRU5ErkJggg=="},"981f":function(e,t){e.exports="data:image/png;base64,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"},"98ae":function(e,t,n){"use strict";var a=n("45b1"),o=n.n(a);o.a},"98de":function(e,t,n){},"9b71":function(e,t,n){},abc3:function(e,t,n){"use strict";var a=n("b5cd"),o=n.n(a);o.a},ac2b:function(e,t,n){"use strict";var a=n("ed29"),o=n.n(a);o.a},afdc:function(e,t,n){"use strict";var a=n("0fe5"),o=n.n(a);o.a},b5cd:function(e,t,n){},ba5b:function(e,t,n){var a={"./fluir.mp3":"baf3"};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=s,e.exports=o,o.id="ba5b"},baf3:function(e,t,n){e.exports=n.p+"media/fluir.99f775f9.mp3"},c00d:function(e,t,n){"use strict";var a=n("d449"),o=n.n(a);o.a},c462:function(e,t,n){e.exports=n.p+"img/portada.a5a3b9cc.png"},d449:function(e,t,n){},df84:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABWklEQVRoge3ZsUocYRSG4QcFsYlaqJ0SK1HBCxAkpeBFWNpaps0tWNpa2orVghcgiJ1YC1YmqWwUdFLIgQVX11ln58+BeeHr3w9mhnPO0NHRMYweNkpLfIUKTzjCfGGXkaj68gcHmCxqVJNqQK6xU1KqDoMKRE6xUk7tc3xUoMIjDvGtlOAwhhWI3GEfE2U03+ezBSIX2Cpi+g51C1R4wQmWC/i+YZQCkQf8wnTb0v18pUDkFnttiwdNFIicY7Nd/WYLVHjGMRazFoj8xU9MZS0QucFu5gKRHtYzF6i8ju2HmM1aIPJbg2N7iQKRS2xnLhA5xfdBcv/d5DgOukdohNxL+hLHZ3SmCfG2C/Sw1qR4WwXSjhJph7kYpxfGLT6OAmkXmrQrZdqlPs4qSwV831BXPu1hK+1pMfVxN+15/Qo/SkrVoV887S+mGHPnCruMxBlWS0t0dHQM5h/gH5If08YtDAAAAABJRU5ErkJggg=="},e395:function(e,t,n){"use strict";var a=n("71c8"),o=n.n(a);o.a},e6bf:function(e,t,n){"use strict";var a=n("843d"),o=n.n(a);o.a},ed29:function(e,t,n){},ed4d:function(e,t,n){n("d3b7"),n("25f0"),n("1276"),function(){function e(e,t,n){return"undefined"===typeof n||0===+n?Math[e](t):(t=+t,n=+n,isNaN(t)||"number"!==typeof n||n%1!==0?NaN:(t=t.toString().split("e"),t=Math[e](+(t[0]+"e"+(t[1]?+t[1]-n:-n))),t=t.toString().split("e"),+(t[0]+"e"+(t[1]?+t[1]+n:n))))}Math.round10||(Math.round10=function(t,n){return e("round",t,n)}),Math.floor10||(Math.floor10=function(t,n){return e("floor",t,n)}),Math.ceil10||(Math.ceil10=function(t,n){return e("ceil",t,n)})}()},f832:function(e,t,n){}});
//# sourceMappingURL=app.2ae0a5dd.js.map