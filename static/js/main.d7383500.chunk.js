(this.webpackJsonpmywebsite=this.webpackJsonpmywebsite||[]).push([[0],{10:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/HomeCover.a3d1fab9.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/Logo.f5e46e67.png"},38:function(e,t,a){e.exports=a.p+"static/media/Profile.72f05a3e.jpg"},39:function(e,t,a){e.exports=a.p+"static/media/LandscapeCover.2b58331e.jpg"},42:function(e,t,a){e.exports=a.p+"static/media/PortraitCover.c8ddc278.jpg"},43:function(e,t,a){e.exports=a.p+"static/media/UrbanCover.7880ea64.jpg"},44:function(e,t,a){e.exports=a(71)},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(33),i=a.n(o),c=a(2),l=a(3),s=a(4),u=a(5),m=(a(10),a(34)),p=a.n(m),d=a(35),h=a.n(d),b=a(13),v=a(8),y=a(1),f={open:{opacity:.7,x:0,transition:{duration:1}},closed:{opacity:0,x:"-40%",display:"none"}},g={open:{y:0,opacity:1,transition:{y:{stiffness:1e3,velocity:-100}}},closed:{y:50,opacity:0,transition:{y:{stiffness:1e3}}}},E={open:{transition:{staggerChildren:.15,delayChildren:.2}},closed:{transition:{staggerChildren:.05,staggerDirection:-1}}},O=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={openDropdown:!1},n.toggleDropdown=n.toggleDropdown.bind(Object(b.a)(n)),n}return Object(l.a)(a,[{key:"toggleDropdown",value:function(){var e=this;this.setState((function(){return{openDropdown:!e.state.openDropdown}}))}},{key:"dropDown",value:function(){return r.a.createElement(y.a.ul,null,r.a.createElement(v.b,{to:"/Gallery/Urban"},r.a.createElement(y.a.li,{initial:{y:-50},animate:{y:0},transition:{duration:1},whileHover:{scale:1.2,x:15},whileTap:{scale:.95},className:"drop-down"},"Urban")),r.a.createElement(v.b,{to:"/Gallery/Landscape"},r.a.createElement(y.a.li,{initial:{y:-75},animate:{y:0},transition:{duration:.75},whileHover:{scale:1.2,x:15},whileTap:{scale:.95},className:"drop-down"},"Nature")),r.a.createElement(v.b,{to:"/Gallery/Portrait"},r.a.createElement(y.a.li,{initial:{y:-100},animate:{y:0},transition:{duration:.5},whileHover:{scale:1.2,x:15},whileTap:{scale:.95},className:"drop-down"},"Portrait")))}},{key:"toRender",value:function(e){return r.a.createElement(y.a.div,{initial:!1,animate:e?"open":"closed"},r.a.createElement(y.a.ul,{variants:E},r.a.createElement(v.b,{to:"/"},r.a.createElement(y.a.li,{variants:g,whileHover:{scale:1.1,x:15},whileTap:{scale:.95}},"Home")),r.a.createElement(v.b,{to:"/AboutMe"},r.a.createElement(y.a.li,{variants:g,whileHover:{scale:1.1,x:15},whileTap:{scale:.95}},"About Me")),r.a.createElement(v.b,{onClick:this.toggleDropdown},r.a.createElement(y.a.li,{variants:g,whileHover:{scale:1.1,x:15},whileTap:{scale:.95}},"Gallery"),this.state.openDropdown?this.dropDown():""),r.a.createElement(v.b,{to:"/Contact"},r.a.createElement(y.a.li,{variants:g,whileHover:{scale:1.1,x:15},whileTap:{scale:.95}},"Contact"))))}},{key:"render",value:function(){return r.a.createElement(y.a.nav,{variants:f,className:this.props.openNav?"side-nav":"",style:this.props.openNav?{opacity:"60%"}:{opacity:"0%"}},this.toRender(this.props.openNav))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.openNav?null:{openDropdown:!1}}}]),a}(r.a.Component),j={open:{opacity:.5,transition:{duration:1}},closed:{opacity:0}},k=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(y.a.div,{variants:j,className:this.props.openBackdrop?"backdrop":"",onClick:this.props.handleBackdropClick})}}]),a}(r.a.Component),w=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={onHover:!1,openNav:!1},n.burgerButtonHover=n.burgerButtonHover.bind(Object(b.a)(n)),n.burgerButtonNoHover=n.burgerButtonNoHover.bind(Object(b.a)(n)),n.burgerButtonClicked=n.burgerButtonClicked.bind(Object(b.a)(n)),n.handleBackDropClick=n.handleBackdropClick.bind(Object(b.a)(n)),n}return Object(l.a)(a,[{key:"burgerButtonHover",value:function(){this.setState((function(){return{onHover:!0}}))}},{key:"burgerButtonNoHover",value:function(){this.setState((function(){return{onHover:!1}}))}},{key:"burgerButtonClicked",value:function(){this.setState((function(){return{openNav:!0}}))}},{key:"handleBackdropClick",value:function(){this.setState((function(){return{openNav:!1}}))}},{key:"render",value:function(){return r.a.createElement(y.a.div,{initial:!1,animate:this.state.openNav?"open":"closed",className:"burger-button"},r.a.createElement(y.a.button,{whileHover:{scale:1.3},className:this.state.openNav?"burger-button-hidden":"burger-button",onClick:this.burgerButtonClicked,onMouseOver:this.burgerButtonHover,onMouseOut:this.burgerButtonNoHover},r.a.createElement("div",{className:this.state.onHover?"burger-button-line-hover":"burger-button-line"}),r.a.createElement("div",{className:this.state.onHover?"burger-button-line-hover":"burger-button-line"}),r.a.createElement("div",{className:this.state.onHover?"burger-button-line-hover":"burger-button-line"})),r.a.createElement(O,{openNav:this.state.openNav}),r.a.createElement(k,{openBackdrop:this.state.openNav,handleBackdropClick:this.handleBackdropClick.bind(this)}))}}]),a}(r.a.Component),N=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"image-box"},r.a.createElement(w,null),r.a.createElement(y.a.div,{initial:{opacity:0},animate:{opacity:.7},transition:{duration:1.5,ease:"easeInOut"},className:"image-box-background",style:{backgroundImage:"url(".concat(p.a,")"),opacity:"70%"}}),r.a.createElement(y.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1.5,ease:"easeInOut"},className:"image-box-logo"},r.a.createElement("img",{src:h.a,alt:""})))}}]),a}(n.Component),C=a(38),x=a.n(C),H=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"about-me-container"},r.a.createElement(w,null),r.a.createElement("div",null,r.a.createElement("img",{className:"profile-img",src:x.a,alt:""})),r.a.createElement("div",{className:"about-me-div"},r.a.createElement(y.a.h1,{initial:{y:-200,opacity:0},animate:{y:0,opacity:1},transition:{duration:1,ease:"easeInOut"},className:"about-me-header"},"About Me"),r.a.createElement(y.a.a,{initial:{x:200,opacity:0},animate:{x:0,opacity:1},transition:{duration:1,ease:"easeInOut"},className:"about-me-info"},"Hi there! My name is Judy and I'm a junior at Northeastern University pursuing a bachelors of computer science degree. Photography has always been a passion of mine; just as I am inspired by other people's photographs, I love to share mine with people like you, too! I decided to combine my two passions of front end web development and photography into this website. Enjoy! ")))}}]),a}(r.a.Component),B=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement("div",{className:"contact-div"},r.a.createElement(y.a.h1,{initial:{opacity:0},animate:{x:0,opacity:1},transition:{duration:2},className:"contact-header"},"Contact"),r.a.createElement(y.a.div,{initial:{opacity:0},animate:{x:0,opacity:1},transition:{duration:2}},r.a.createElement("a",null,"zhang.jud@husky.neu.edu"),r.a.createElement("br",null),r.a.createElement("a",null,"(201)-665-0678"))))}}]),a}(r.a.Component),D=a(39),P=a.n(D),M=a(21),G=a.n(M),I=a(40),R=a(41),S=a.n(R);function A(e){return U.apply(this,arguments)}function U(){return(U=Object(I.a)(G.a.mark((function e(t){var a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("https://peaceful-bayou-26310.herokuapp.com/".concat(t),{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Content-Type, Authorization"}});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e;return"Landscape"===this.props.album?e="/Gallery/Landscape/Photos":"Portrait"===this.props.album?e="/Gallery/Portrait/Photos":"Urban"===this.props.album&&(e="/Gallery/Urban/Photos"),r.a.createElement(y.a.div,{animate:{y:[0,5,10,5,0]},transition:{loop:1/0,duration:1}},r.a.createElement(v.b,{to:e,className:"triangle-button"}))}}]),a}(r.a.Component),T=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={links:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;A("landscape").then((function(t){e.setState({links:t})}))}},{key:"render",value:function(){return r.a.createElement(y.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1.5,ease:"easeInOut"}},r.a.createElement(w,null),r.a.createElement("div",{className:"landscape-container"},r.a.createElement("img",{src:P.a,alt:""}),r.a.createElement("h1",null,"NATURE")),r.a.createElement(L,{album:"Landscape"}))}}]),a}(r.a.Component),J=a(42),z=a.n(J),W=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={links:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;A("portrait").then((function(t){e.setState({links:t})}))}},{key:"render",value:function(){return r.a.createElement(y.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1.5,ease:"easeInOut"}},r.a.createElement(w,null),r.a.createElement("div",{className:"portrait-container"},r.a.createElement("img",{src:z.a,alt:""}),r.a.createElement("h1",null,"Portrait")),r.a.createElement(L,{album:"Portrait"}))}}]),a}(r.a.Component),F=a(43),Z=a.n(F),$=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={links:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;A("urban").then((function(t){e.setState({links:t})}))}},{key:"render",value:function(){return r.a.createElement(y.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1.5,ease:"easeInOut"}},r.a.createElement(w,null),r.a.createElement("div",{className:"urban-container"},r.a.createElement("img",{src:Z.a,alt:""}),r.a.createElement("h1",null,"URBAN")),r.a.createElement(L,{album:"Urban"}))}}]),a}(r.a.Component),q=a(14),K=a(16),Q=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(y.a.a,{className:"loading",animate:{y:[0,10,20,10,0]},transition:{loop:1/0,duration:2}}," Loading...")}}]),a}(r.a.Component),V=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={images:[],loading:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;A("landscape").then((function(t){e.setState((function(){return{images:t,loading:!1}}))}))}},{key:"toRender",value:function(){return r.a.createElement(y.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1}},r.a.createElement(w,null),r.a.createElement(K.a,{images:this.state.images,rows:1e4,maxRowHeight:900,gutter:1}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.loading?r.a.createElement(Q,null):this.toRender())}}]),a}(r.a.Component),X=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={images:[],loading:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;A("portrait").then((function(t){e.setState((function(){return{images:t,loading:!1}}))}))}},{key:"toRender",value:function(){return r.a.createElement(y.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1}},r.a.createElement(w,null),r.a.createElement(K.a,{images:this.state.images,rows:1e4,maxRowHeight:900,gutter:1}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.loading?r.a.createElement(Q,null):this.toRender())}}]),a}(r.a.Component),Y=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={images:[],loading:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;A("urban").then((function(t){e.setState((function(){return{images:t,loading:!1}}))}))}},{key:"toRender",value:function(){return r.a.createElement(y.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1}},r.a.createElement(w,null),r.a.createElement(K.a,{images:this.state.images,rows:1e4,maxRowHeight:900,gutter:1}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.loading?r.a.createElement(Q,null):this.toRender())}}]),a}(r.a.Component),_=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"100%"}},r.a.createElement("head",null,r.a.createElement("title",null,"Judy Zhang")),r.a.createElement(q.c,null,r.a.createElement(q.a,{exact:!0,path:"/",component:N}),r.a.createElement(q.a,{path:"/AboutMe",component:H}),r.a.createElement(q.a,{path:"/Contact",component:B}),r.a.createElement(q.a,{exact:!0,path:"/Gallery/Landscape",component:T}),r.a.createElement(q.a,{exact:!0,path:"/Gallery/Portrait",component:W}),r.a.createElement(q.a,{exact:!0,path:"/Gallery/Urban",component:$}),r.a.createElement(q.a,{path:"/Gallery/Landscape/Photos",component:V}),r.a.createElement(q.a,{path:"/Gallery/Portrait/Photos",component:X}),r.a.createElement(q.a,{path:"/Gallery/Urban/Photos",component:Y})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v.a,null,r.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.d7383500.chunk.js.map