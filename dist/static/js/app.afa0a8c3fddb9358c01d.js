webpackJsonp([1],{"/MOv":function(e,t){},"3aBw":function(e,t){},D10s:function(e,t){},L2Dl:function(e,t){},NHnr:function(e,t,o){"use strict";function n(e){if(console.log("原始数据"),console.log(e),D.dispatch("startParse"),!e)return!1;var t=e.split("\n"),o=0,n=t.length,i=[];for(o=2;o<n;o++){t[o]=t[o].replace(/\s+/g," ");var s=t[o].split(" "),r={x:parseFloat(s[1]),y:parseFloat(s[3]),z:parseFloat(s[2])};t[o]=new w(s[0],r),-1===i.indexOf(t[o].atom)&&i.push(t[o].atom)}var F=i.length;for(o=0;o<F;o++){var c=i[o];i[o]={atom:c,radius:v[c].radius,color:v[c].color}}console.log(i);var l=t.length;for(o=2;o<l;o++)for(var d=2;d<l;d++)if(d!==o&&a(t[o],t[d])){t[o].neighbors.push(t[d]);var u=new b(t[o],t[d]);t[o].bonds.push(u)}console.log("文件数据解析成功",t),D.dispatch("endParse"),D.dispatch("updateMoleculeData",t),D.dispatch("updateElementsData",i)}function i(e,t){var o=(e.x-t.x)*(e.x-t.x),n=(e.y-t.y)*(e.y-t.y),i=(e.z-t.z)*(e.z-t.z);return Math.sqrt(o+n+i)}function s(e,t){return 1.2*(e.radius/100+t.radius/100)}function a(e,t){return i(e.position,t.position)<s(e,t)}function r(e){if(console.log(e),e){var t=new FileReader;t.readAsText(e),D.dispatch("loadingFile"),t.onload=function(){D.dispatch("fileLoaded"),n(this.result)}}}function F(e){o("/MOv")}function c(e){o("L2Dl")}function l(e){o("ZZ0z")}function d(e){o("3aBw")}function u(e){o("xtNM")}function p(e){o("D10s")}Object.defineProperty(t,"__esModule",{value:!0});var h=o("+BS6"),f=o("EcfS"),m=o("dbJu"),g=o.n(m),v={H:{radius:31,color:"FFFFFF"},He:{radius:31,color:"FFFFFF"},Li:{radius:31,color:"FFFFFF"},Be:{radius:31,color:"FFFFFF"},B:{radius:31,color:"FFFFFF"},C:{radius:76,color:"909090"},N:{radius:71,color:"3050F8"},O:{radius:66,color:"FF0D0D"},F:{radius:31,color:"FFFFFF"},Ne:{radius:31,color:"FFFFFF"},Na:{radius:31,color:"FFFFFF"},Mg:{radius:31,color:"FFFFFF"},Al:{radius:31,color:"FFFFFF"},Si:{radius:31,color:"FFFFFF"},P:{radius:31,color:"FFFFFF"},S:{radius:31,color:"FFFFFF"},Cl:{radius:102,color:"1FF01F"},Ar:{radius:31,color:"FFFFFF"},K:{radius:31,color:"FFFFFF"},Ca:{radius:31,color:"FFFFFF"},Sc:{radius:31,color:"FFFFFF"},Ti:{radius:31,color:"FFFFFF"},V:{radius:31,color:"FFFFFF"},Cr:{radius:31,color:"FFFFFF"},Mn:{radius:31,color:"FFFFFF"},Fe:{radius:31,color:"FFFFFF"},Co:{radius:31,color:"FFFFFF"},Ni:{radius:31,color:"FFFFFF"},Cu:{radius:31,color:"FFFFFF"},Zn:{radius:31,color:"FFFFFF"},Ga:{radius:31,color:"FFFFFF"},Ge:{radius:31,color:"FFFFFF"},As:{radius:31,color:"FFFFFF"},Se:{radius:31,color:"FFFFFF"},Br:{radius:31,color:"FFFFFF"},Kr:{radius:31,color:"FFFFFF"},Rb:{radius:31,color:"FFFFFF"},Sr:{radius:31,color:"FFFFFF"},Y:{radius:31,color:"FFFFFF"},Zr:{radius:31,color:"FFFFFF"},Nb:{radius:31,color:"FFFFFF"},Mo:{radius:31,color:"FFFFFF"},Tc:{radius:31,color:"FFFFFF"},Ru:{radius:31,color:"FFFFFF"},Rh:{radius:31,color:"FFFFFF"},Pd:{radius:31,color:"FFFFFF"},Ag:{radius:31,color:"FFFFFF"},Cd:{radius:31,color:"FFFFFF"},In:{radius:31,color:"FFFFFF"},Sn:{radius:31,color:"FFFFFF"},Sb:{radius:31,color:"FFFFFF"},Te:{radius:31,color:"FFFFFF"},I:{radius:31,color:"FFFFFF"},Xe:{radius:31,color:"FFFFFF"},Cs:{radius:31,color:"FFFFFF"},Ba:{radius:31,color:"FFFFFF"},La:{radius:31,color:"FFFFFF"},Ce:{radius:31,color:"FFFFFF"},Pr:{radius:31,color:"FFFFFF"},Nd:{radius:31,color:"FFFFFF"},Pm:{radius:31,color:"FFFFFF"},Sm:{radius:31,color:"FFFFFF"},Eu:{radius:31,color:"FFFFFF"},Gd:{radius:31,color:"FFFFFF"},Tb:{radius:31,color:"FFFFFF"},Dy:{radius:31,color:"FFFFFF"},Ho:{radius:31,color:"FFFFFF"},Er:{radius:31,color:"FFFFFF"},Tm:{radius:31,color:"FFFFFF"},Yb:{radius:31,color:"FFFFFF"},Lu:{radius:31,color:"FFFFFF"},Hf:{radius:31,color:"FFFFFF"},Ta:{radius:31,color:"FFFFFF"},W:{radius:31,color:"FFFFFF"},Re:{radius:31,color:"FFFFFF"},Os:{radius:31,color:"FFFFFF"},Ir:{radius:31,color:"FFFFFF"},Pt:{radius:31,color:"FFFFFF"},Au:{radius:31,color:"FFFFFF"},Hg:{radius:31,color:"FFFFFF"},Tl:{radius:31,color:"FFFFFF"},Pb:{radius:31,color:"FFFFFF"},Bi:{radius:31,color:"FFFFFF"},Po:{radius:31,color:"FFFFFF"},At:{radius:31,color:"FFFFFF"},Rn:{radius:31,color:"FFFFFF"},Fr:{radius:31,color:"FFFFFF"},Ra:{radius:31,color:"FFFFFF"},Ac:{radius:31,color:"FFFFFF"},Th:{radius:31,color:"FFFFFF"},Pa:{radius:31,color:"FFFFFF"},U:{radius:31,color:"FFFFFF"},Np:{radius:31,color:"FFFFFF"},Pu:{radius:31,color:"FFFFFF"},Am:{radius:31,color:"FFFFFF"},Cm:{radius:31,color:"FFFFFF"},Bk:{radius:31,color:"FFFFFF"},Cf:{radius:31,color:"FFFFFF"},Es:{radius:31,color:"FFFFFF"},Fm:{radius:31,color:"FFFFFF"},Md:{radius:31,color:"FFFFFF"},No:{radius:31,color:"FFFFFF"},Lr:{radius:31,color:"FFFFFF"},Rf:{radius:31,color:"FFFFFF"},Db:{radius:31,color:"FFFFFF"},Sg:{radius:31,color:"FFFFFF"},Bh:{radius:31,color:"FFFFFF"},Hs:{radius:31,color:"FFFFFF"},Mt:{radius:31,color:"FFFFFF"}},w=function e(t,o){g()(this,e),this.atom="",this.position={x:0,y:0,z:0},this.color="FFFFFF",this.radius=0,this.neighbors=[],this.bonds=[],t&&v[t]&&(this.atom=t,this.radius=v[t].radius,this.color=v[t].color),o&&(this.position.x=o.x||0,this.position.y=o.y||0,this.position.z=o.z||0),console.log(this.position,o)},y=o("HFN4"),E=o.n(y),b=function(){function e(t,o){if(g()(this,e),!t||!o)return console.error("缺少原子对象形成共价键"),!1;this.name=t.atom+"-"+o.atom,this.start={x:t.position.x,y:t.position.y,z:t.position.z},this.end=this.getMiddlePoint(t.position,o.position),this.position=this.getMiddlePoint(this.start,this.end),this.belong=t,this.color=t.color,this.length=this.getLength(this.start,this.end),this.direction=this.getDirection()}return E()(e,[{key:"getLength",value:function(e,t){var o=(e.x-t.x)*(e.x-t.x),n=(e.y-t.y)*(e.y-t.y),i=(e.z-t.z)*(e.z-t.z);return Math.sqrt(o+n+i)}},{key:"getMiddlePoint",value:function(e,t){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2,z:(e.z+t.z)/2}}},{key:"getDirection",value:function(e,t){return{x:this.end.x-this.start.x,y:this.end.y-this.start.y,z:this.end.z-this.start.z}}}]),e}();h.default.use(f.a);var S={file:{content:[]},elements:[],needUpdate:!1,loading:!1,loadingTxt:"",InfoShow:!1,structureShow:!0,modelShow:!1,updateVisibleInfo:!1},x={UPDATE_DATA:function(e,t){console.log("文件数据更新成功",t),e.file.content=t,e.needUpdate=!0},UPDATE_ELEMENTS:function(e,t){console.log("元素数据更新成功",t),e.elements=t,console.log("111111",e.elements)},RESET_UPDATESTATE:function(e){e.needUpdate=!1,console.log("视图数据更新完毕")},LOADED:function(e){e.loading=!1},LOADING:function(e){e.loading=!0},PARSING:function(e){e.loading=!0,e.loadingTxt="数据解析中"},LOADING_FILE:function(e){e.loading=!0,e.loadingTxt="文件读取中"},FILE_LOADED:function(e){e.loadingTxt="文件加载完成"},PARSE_START:function(e){e.loadingTxt="文件加载完成"},PARSING_END:function(e){e.loadingTxt="数据解析完成"},RENDER_START:function(e){e.loading=!0,e.loadingTxt="开始渲染"},SHOW_INFO:function(e){e.InfoShow=!0},HIDE_INFO:function(e){e.InfoShow=!1},SHOW_STRUCTURE:function(e){e.structureShow=!0,e.modelShow=!1,e.updateVisibleInfo=!0},SHOW_MODEL:function(e){e.structureShow=!1,e.modelShow=!0,e.updateVisibleInfo=!0},RESET_VISIBLE_STATE:function(){S.updateVisibleInfo=!1}},_={updateMoleculeData:function(e,t){(0,e.commit)("UPDATE_DATA",t)},resetUpdate:function(e){(0,e.commit)("RESET_UPDATESTATE")},loading:function(e){(0,e.commit)("LOADING_FILE")},loaded:function(e){(0,e.commit)("LOADED")},loadingFile:function(e){(0,e.commit)("LOADING_FILE")},fileLoaded:function(e){(0,e.commit)("FILE_LOADED")},startParse:function(e){(0,e.commit)("PARSING")},endParse:function(e){(0,e.commit)("PARSING_END")},startRender:function(e){(0,e.commit)("RENDER_START")},showInfoDialog:function(e){(0,e.commit)("SHOW_INFO")},hideInfoDialog:function(e){(0,e.commit)("HIDE_INFO")},updateElementsData:function(e,t){(0,e.commit)("UPDATE_ELEMENTS",t)},showStructure:function(e){(0,e.commit)("SHOW_STRUCTURE")},showModel:function(e){(0,e.commit)("SHOW_MODEL")},resetVisibleState:function(e){(0,e.commit)("RESET_VISIBLE_STATE")}},T={file:function(e){return e.file},needUpdate:function(e){return e.needUpdate}},A=new f.a.Store({state:S,actions:_,mutations:x,getters:T}),D=A,O={name:"fileReader",data:function(){return{file:null}},methods:{loadFile:function(){r(this.$refs.file.files[0])},chooseFile:function(){this.$refs.file.click()}}},R=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"file-reader"},[o("div",{attrs:{type:"primary"},on:{click:e.chooseFile}},[e._v("open")]),e._v(" "),o("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:e.loadFile}})])},L=[],N={render:R,staticRenderFns:L},I=N,M=o("XAIM"),P=F,C=M(O,I,!1,P,"data-v-32f7a13a",null),z=C.exports,k=o("y/aM"),H=new k.f,j={name:"navbar",components:{fileReader:z},data:function(){return{activeIndex:"1",isCollapse:!0,InfoShow:!1,SettingShow:!1}},methods:{handleSelect:function(e,t){switch(console.log(e,t),e){case"Aspirin":this.$store.dispatch("startParse"),H.load("/static/Aspirin.xyz",function(e){n(e)});break;case"BlindII":this.$store.dispatch("startParse"),H.load("/static/blindII.xyz",function(e){n(e)});break;case"open":this.$store.dispatch("loadingFile"),console.log(this.$refs.openBtn);break;case"info":this.InfoShow=!0;break;case"setting":this.SettingShow=!0;break;default:console.error("组件未知错误")}},handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)},showStructure:function(){this.$store.dispatch("showStructure")},showModel:function(){this.$store.dispatch("showModel")}}},$=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"navbar"},[o("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",collapse:e.isCollapse},on:{open:e.handleOpen,close:e.handleClose,select:e.handleSelect}},[o("el-submenu",{attrs:{index:"1"}},[o("template",{slot:"title"},[o("i",{staticClass:"el-icon-document"}),e._v(" "),o("span",{attrs:{slot:"title"},slot:"title"},[e._v("File")])]),e._v(" "),o("el-menu-item-group",[o("span",{attrs:{slot:"title"},slot:"title"},[e._v("File")]),e._v(" "),o("el-menu-item",{attrs:{index:"Aspirin"}},[e._v("Aspirin")]),e._v(" "),o("el-menu-item",{attrs:{index:"BlindII"}},[e._v("BlindII")]),e._v(" "),o("el-menu-item",{ref:"openBtn",attrs:{index:"Open"}},[o("file-reader")],1)],1)],2),e._v(" "),o("el-menu-item",{attrs:{index:"setting"}},[o("i",{staticClass:"el-icon-setting"}),e._v(" "),o("span",{attrs:{slot:"title"},slot:"title"},[e._v("Setting")])]),e._v(" "),o("el-menu-item",{attrs:{index:"info"}},[o("i",{staticClass:"el-icon-info"}),e._v(" "),o("span",{attrs:{slot:"title"},slot:"title"},[e._v("Info")])])],1)],1),e._v(" "),o("el-dialog",{attrs:{title:"Info",visible:e.InfoShow,width:"30%"},on:{"update:visible":function(t){e.InfoShow=t}}},[o("span",[e._v("Name")]),e._v(" "),o("el-tag",{attrs:{type:"info"}},[e._v(e._s(this.$store.state.file.content[1]))]),e._v(" "),o("span",[e._v("Atoms Num")]),e._v(" "),o("el-tag",{attrs:{type:"info"}},[e._v(e._s(this.$store.state.file.content[0]))]),e._v(" "),e._l(this.$store.state.elements,function(t){return o("el-tag",{key:t.atom,staticStyle:{margin:"4px 4px"},attrs:{color:"#"+t.color}},[e._v(e._s(t.atom))])})],2),e._v(" "),o("el-dialog",{attrs:{title:"Setting",visible:e.SettingShow,width:"30%"},on:{"update:visible":function(t){e.SettingShow=t}}},[o("el-button",{on:{click:e.showStructure}},[e._v("Structure")]),e._v(" "),o("el-button",{on:{click:e.showModel}},[e._v("Model")])],1)],1)},U=[],q={render:$,staticRenderFns:U},X=q,Y=o("XAIM"),B=c,V=Y(j,X,!1,B,"data-v-027dee37",null),Z=V.exports,W={name:"sidebar"},G=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"sidebar"})},Q=[],J={render:G,staticRenderFns:Q},K=J,ee=o("XAIM"),te=l,oe=ee(W,K,!1,te,"data-v-51f9e292",null),ne=oe.exports,ie=o("34v0"),se=o.n(ie),ae=o("j2h9"),re=o.n(ae);k.TrackballControls=function(e,t){function o(e){!1!==u.enabled&&(window.removeEventListener("keydown",o),m=f,f!==p.NONE||(e.keyCode!==u.keys[p.ROTATE]||u.noRotate?e.keyCode!==u.keys[p.ZOOM]||u.noZoom?e.keyCode!==u.keys[p.PAN]||u.noPan||(f=p.PAN):f=p.ZOOM:f=p.ROTATE))}function n(e){!1!==u.enabled&&(f=m,window.addEventListener("keydown",o,!1))}function i(e){!1!==u.enabled&&(e.preventDefault(),e.stopPropagation(),f===p.NONE&&(f=e.button),f!==p.ROTATE||u.noRotate?f!==p.ZOOM||u.noZoom?f!==p.PAN||u.noPan||(T.copy(L(e.pageX,e.pageY)),A.copy(T)):(b.copy(L(e.pageX,e.pageY)),S.copy(b)):(w.copy(N(e.pageX,e.pageY)),v.copy(w)),document.addEventListener("mousemove",s,!1),document.addEventListener("mouseup",a,!1),u.dispatchEvent(O))}function s(e){!1!==u.enabled&&(e.preventDefault(),e.stopPropagation(),f!==p.ROTATE||u.noRotate?f!==p.ZOOM||u.noZoom?f!==p.PAN||u.noPan||A.copy(L(e.pageX,e.pageY)):S.copy(L(e.pageX,e.pageY)):(v.copy(w),w.copy(N(e.pageX,e.pageY))))}function a(e){!1!==u.enabled&&(e.preventDefault(),e.stopPropagation(),f=p.NONE,document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",a),u.dispatchEvent(R))}function r(e){if(!1!==u.enabled){switch(e.preventDefault(),e.stopPropagation(),e.deltaMode){case 2:b.y-=.025*e.deltaY;break;case 1:b.y-=.01*e.deltaY;break;default:b.y-=25e-5*e.deltaY}u.dispatchEvent(O),u.dispatchEvent(R)}}function F(e){if(!1!==u.enabled){switch(e.touches.length){case 1:f=p.TOUCH_ROTATE,w.copy(N(e.touches[0].pageX,e.touches[0].pageY)),v.copy(w);break;default:f=p.TOUCH_ZOOM_PAN;var t=e.touches[0].pageX-e.touches[1].pageX,o=e.touches[0].pageY-e.touches[1].pageY;_=x=Math.sqrt(t*t+o*o);var n=(e.touches[0].pageX+e.touches[1].pageX)/2,i=(e.touches[0].pageY+e.touches[1].pageY)/2;T.copy(L(n,i)),A.copy(T)}u.dispatchEvent(O)}}function c(e){if(!1!==u.enabled)switch(e.preventDefault(),e.stopPropagation(),e.touches.length){case 1:v.copy(w),w.copy(N(e.touches[0].pageX,e.touches[0].pageY));break;default:var t=e.touches[0].pageX-e.touches[1].pageX,o=e.touches[0].pageY-e.touches[1].pageY;_=Math.sqrt(t*t+o*o);var n=(e.touches[0].pageX+e.touches[1].pageX)/2,i=(e.touches[0].pageY+e.touches[1].pageY)/2;A.copy(L(n,i))}}function l(e){if(!1!==u.enabled){switch(e.touches.length){case 0:f=p.NONE;break;case 1:f=p.TOUCH_ROTATE,w.copy(N(e.touches[0].pageX,e.touches[0].pageY)),v.copy(w)}u.dispatchEvent(R)}}function d(e){!1!==u.enabled&&e.preventDefault()}var u=this,p={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=void 0!==t?t:document,this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=[65,83,68],this.target=new k.q(0,0,0);var h=new k.q,f=p.NONE,m=p.NONE,g=new k.q,v=new k.p,w=new k.p,y=new k.q,E=0,b=new k.p,S=new k.p,x=0,_=0,T=new k.p,A=new k.p;this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone();var D={type:"change"},O={type:"start"},R={type:"end"};this.handleResize=function(){if(this.domElement===document)this.screen.left=0,this.screen.top=0,this.screen.width=window.innerWidth,this.screen.height=window.innerHeight;else{var e=this.domElement.getBoundingClientRect(),t=this.domElement.ownerDocument.documentElement;this.screen.left=e.left+window.pageXOffset-t.clientLeft,this.screen.top=e.top+window.pageYOffset-t.clientTop,this.screen.width=e.width,this.screen.height=e.height}},this.handleEvent=function(e){"function"==typeof this[e.type]&&this[e.type](e)};var L=function(){var e=new k.p;return function(t,o){return e.set((t-u.screen.left)/u.screen.width,(o-u.screen.top)/u.screen.height),e}}(),N=function(){var e=new k.p;return function(t,o){return e.set((t-.5*u.screen.width-u.screen.left)/(.5*u.screen.width),(u.screen.height+2*(u.screen.top-o))/u.screen.width),e}}();this.rotateCamera=function(){var e,t=new k.q,o=new k.l,n=new k.q,i=new k.q,s=new k.q,a=new k.q;return function(){a.set(w.x-v.x,w.y-v.y,0),e=a.length(),e?(g.copy(u.object.position).sub(u.target),n.copy(g).normalize(),i.copy(u.object.up).normalize(),s.crossVectors(i,n).normalize(),i.setLength(w.y-v.y),s.setLength(w.x-v.x),a.copy(i.add(s)),t.crossVectors(a,g).normalize(),e*=u.rotateSpeed,o.setFromAxisAngle(t,e),g.applyQuaternion(o),u.object.up.applyQuaternion(o),y.copy(t),E=e):!u.staticMoving&&E&&(E*=Math.sqrt(1-u.dynamicDampingFactor),g.copy(u.object.position).sub(u.target),o.setFromAxisAngle(y,E),g.applyQuaternion(o),u.object.up.applyQuaternion(o)),v.copy(w)}}(),this.zoomCamera=function(){var e;f===p.TOUCH_ZOOM_PAN?(e=x/_,x=_,g.multiplyScalar(e)):(e=1+(S.y-b.y)*u.zoomSpeed,1!==e&&e>0&&g.multiplyScalar(e),u.staticMoving?b.copy(S):b.y+=(S.y-b.y)*this.dynamicDampingFactor)},this.panCamera=function(){var e=new k.p,t=new k.q,o=new k.q;return function(){e.copy(A).sub(T),e.lengthSq()&&(e.multiplyScalar(g.length()*u.panSpeed),o.copy(g).cross(u.object.up).setLength(e.x),o.add(t.copy(u.object.up).setLength(e.y)),u.object.position.add(o),u.target.add(o),u.staticMoving?T.copy(A):T.add(e.subVectors(A,T).multiplyScalar(u.dynamicDampingFactor)))}}(),this.checkDistances=function(){u.noZoom&&u.noPan||(g.lengthSq()>u.maxDistance*u.maxDistance&&(u.object.position.addVectors(u.target,g.setLength(u.maxDistance)),b.copy(S)),g.lengthSq()<u.minDistance*u.minDistance&&(u.object.position.addVectors(u.target,g.setLength(u.minDistance)),b.copy(S)))},this.update=function(){g.subVectors(u.object.position,u.target),u.noRotate||u.rotateCamera(),u.noZoom||u.zoomCamera(),u.noPan||u.panCamera(),u.object.position.addVectors(u.target,g),u.checkDistances(),u.object.lookAt(u.target),h.distanceToSquared(u.object.position)>1e-6&&(u.dispatchEvent(D),h.copy(u.object.position))},this.reset=function(){f=p.NONE,m=p.NONE,u.target.copy(u.target0),u.object.position.copy(u.position0),u.object.up.copy(u.up0),g.subVectors(u.object.position,u.target),u.object.lookAt(u.target),u.dispatchEvent(D),h.copy(u.object.position)},this.dispose=function(){this.domElement.removeEventListener("contextmenu",d,!1),this.domElement.removeEventListener("mousedown",i,!1),this.domElement.removeEventListener("wheel",r,!1),this.domElement.removeEventListener("touchstart",F,!1),this.domElement.removeEventListener("touchend",l,!1),this.domElement.removeEventListener("touchmove",c,!1),document.removeEventListener("mousemove",s,!1),document.removeEventListener("mouseup",a,!1),window.removeEventListener("keydown",o,!1),window.removeEventListener("keyup",n,!1)},this.domElement.addEventListener("contextmenu",d,!1),this.domElement.addEventListener("mousedown",i,!1),this.domElement.addEventListener("wheel",r,!1),this.domElement.addEventListener("touchstart",F,!1),this.domElement.addEventListener("touchend",l,!1),this.domElement.addEventListener("touchmove",c,!1),window.addEventListener("keydown",o,!1),window.addEventListener("keyup",n,!1),this.handleResize(),this.update()},k.TrackballControls.prototype=re()(k.e.prototype),k.TrackballControls.prototype.constructor=k.TrackballControls;var Fe=function e(){function t(e){return i.appendChild(e.dom),e}function o(e){for(var t=0;t<i.children.length;t++)i.children[t].style.display=t===e?"block":"none";n=e}var n=0,i=document.createElement("div");i.style.cssText="position:fixed;top:0;right:0;cursor:pointer;opacity:0.9;z-index:10000",i.addEventListener("click",function(e){e.preventDefault(),o(++n%i.children.length)},!1);var s=(performance||Date).now(),a=s,r=0,F=t(new e.Panel("FPS","#0ff","#002")),c=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=t(new e.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:i,addPanel:t,showPanel:o,begin:function(){s=(performance||Date).now()},end:function(){r++;var e=(performance||Date).now();if(c.update(e-s,200),e>=a+1e3&&(F.update(1e3*r/(e-a),100),a=e,r=0,l)){var t=performance.memory;l.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){s=this.end()},domElement:i,setMode:o}};Fe.Panel=function(e,t,o){var n=1/0,i=0,s=Math.round,a=s(window.devicePixelRatio||1),r=80*a,F=48*a,c=3*a,l=2*a,d=3*a,u=15*a,p=74*a,h=30*a,f=document.createElement("canvas");f.width=r,f.height=F,f.style.cssText="width:80px;height:48px";var m=f.getContext("2d");return m.font="bold "+9*a+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=o,m.fillRect(0,0,r,F),m.fillStyle=t,m.fillText(e,c,l),m.fillRect(d,u,p,h),m.fillStyle=o,m.globalAlpha=.9,m.fillRect(d,u,p,h),{dom:f,update:function(F,g){n=Math.min(n,F),i=Math.max(i,F),m.fillStyle=o,m.globalAlpha=1,m.fillRect(0,0,r,u),m.fillStyle=t,m.fillText(s(F)+" "+e+" ("+s(n)+"-"+s(i)+")",c,l),m.drawImage(f,d+a,u,p-a,h,d,u,p-a,h),m.fillRect(d+p-a,u,a,h),m.fillStyle=o,m.globalAlpha=.9,m.fillRect(d+p-a,u,a,s((1-F/g)*h))}}};var ce=new Fe,le=void 0,de=void 0,ue=void 0,pe=void 0,he=void 0,fe=new k.a(16777215,.1),me=new k.d(16777215,1),ge=new k.d(16777215,1),ve=void 0,we=void 0,ye={name:"appMain",computed:se()({},Object(f.c)(["needUpdate","file"])),data:function(){return{dialogVisible:!1}},mounted:function(){le=new k.k(60,window.innerWidth/window.innerHeight,1,9999999999),de=new k.TrackballControls(le),de.staticMoving=!1,ue=new k.m,pe=new k.r({antialias:!1}),he=document.getElementById("container");var e=new k.g(100,100,8947848,8947848);e.position.set(0,0,0),ue.add(e),this.init(),this.animate()},methods:se()({},f.b.resetUpdate,{init:function(){this.$store.dispatch("loading"),console.log(le);var e=new k.f;e.load("/static/Aspirin.xyz",function(t){console.log(e,t),n(t)}),le.position.set(5,10,0),de=new k.TrackballControls(le),de.rotateSpeed=1,de.zoomSpeed=1.2,de.panSpeed=.8,de.noZoom=!1,de.noPan=!1,de.dynamicDampingFactor=.3,de.keys=[65,83,68],de.addEventListener("change",this.render),ue.background=new k.b(13421772),ue.add(fe),me.position.set(1e4,1e4,1e4),ge.position.set(-1e4,-1e4,-1e4),pe.setPixelRatio(window.devicePixelRatio),pe.setSize(window.innerWidth,window.innerHeight),console.log(this),he.appendChild(pe.domElement),he.appendChild(ce.dom),window.addEventListener("resize",this.onWindowResize,!1),this.render()},onWindowResize:function(){le.aspect=window.innerWidth/window.innerHeight,le.updateProjectionMatrix(),pe.setSize(window.innerWidth,window.innerHeight),de.handleResize(),this.render()},animate:function(){requestAnimationFrame(this.animate),this.updateData(),de.update()},render:function(){ce.begin(),pe.render(ue,le),ce.end()},updateData:function(){this.needUpdate&&(console.log("清理场景模型"),ue.children.length=0,this.$store.dispatch("startRender"),console.log("更新场景模型"),this.addNewModel(),this.render(),this.$store.dispatch("resetUpdate"),this.$store.dispatch("loaded")),this.$store.state.updateVisibleInfo&&(ve.visible=this.$store.state.structureShow,we.visible=this.$store.state.modelShow,this.$store.dispatch("resetVisibleState"),this.render())},addNewModel:function(){var e=0,t=this.file.content,o=t.length;for(console.log(t),ve=new k.j,we=new k.j,e=2;e<o;e++){var n=new k.n(.32,30,30),i=new k.i({color:"#"+t[e].color}),s=new k.h(n,i);s.position.set(t[e].position.x,t[e].position.y,t[e].position.z),s.name=t[e].atom,console.log(s),n=new k.n(t[e].radius/100,30,30),i=new k.i({color:"#"+t[e].color});var a=new k.h(n,i);a.position.set(t[e].position.x,t[e].position.y,t[e].position.z),a.name=t[e].atom,console.log(s);for(var r=t[e].bonds.length,F=t[e].bonds,c=0;c<r;c++){console.log(F[c]);var l=new k.c(.1,.1,F[c].length,20),d=new k.i({color:"#"+F[c].color}),u=new k.h(l,d),p=new k.q(0,1,0),h=new k.q(F[c].direction.x,F[c].direction.y,F[c].direction.z),f=new k.q;f.crossVectors(p,h).normalize();var m=p.angleTo(h);u.setRotationFromAxisAngle(f,m),console.log(f,m),u.position.set(F[c].position.x,F[c].position.y,F[c].position.z),ve.add(u)}ve.add(s),we.add(a)}ve.position.set(0,0,0),ve.name=t[1],we.position.set(0,0,0),we.name=t[1],le.lookAt(ve.position),ue.add(ve),ue.add(we),we.visible=this.$store.state.modelShow,ve.visible=this.$store.state.structureShow,console.log(ve);var g=new k.g(100,100,8947848,8947848);g.position.set(0,0,0),ue.add(g),ue.add(fe),ue.add(me),ue.add(ge)}})},Ee=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{directives:[{name:"loading",rawName:"v-loading",value:this.$store.state.loading,expression:"this.$store.state.loading"}],staticClass:"app-main",staticStyle:{"min-height":"100%"},attrs:{"element-loading-text":this.$store.state.loadingTxt,id:"container"}})},be=[],Se={render:Ee,staticRenderFns:be},xe=Se,_e=o("XAIM"),Te=d,Ae=_e(ye,xe,!1,Te,"data-v-3b5a8618",null),De=Ae.exports,Oe={name:"layout",components:{navbar:Z,sidebar:ne,appMain:De}},Re=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"layout"},[o("navbar"),e._v(" "),o("sidebar"),e._v(" "),o("app-main")],1)},Le=[],Ne={render:Re,staticRenderFns:Le},Ie=Ne,Me=o("XAIM"),Pe=u,Ce=Me(Oe,Ie,!1,Pe,"data-v-791b8da3",null),ze=Ce.exports,ke={name:"app",components:{layout:ze}},He=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("layout")],1)},je=[],$e={render:He,staticRenderFns:je},Ue=$e,qe=o("XAIM"),Xe=p,Ye=qe(ke,Ue,!1,Xe,null,null),Be=Ye.exports,Ve=o("zL8q"),Ze=o.n(Ve);o("tvR6");h.default.config.productionTip=!1,h.default.use(Ze.a),h.default.use(f.a),new h.default({el:"#app",store:D,template:"<App/>",components:{App:Be}})},ZZ0z:function(e,t){},tvR6:function(e,t){},xtNM:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.afa0a8c3fddb9358c01d.js.map