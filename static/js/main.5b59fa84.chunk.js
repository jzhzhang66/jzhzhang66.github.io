(this.webpackJsonpmywebsite=this.webpackJsonpmywebsite||[]).push([[0],{10:function(e,t,a){},35:function(e,t,a){e.exports=a.p+"static/media/HomeCover.a3d1fab9.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/Logo.f5e46e67.png"},39:function(e,t,a){e.exports=a.p+"static/media/Profile.72f05a3e.jpg"},40:function(e,t,a){e.exports=a.p+"static/media/LandscapeCover.2b58331e.jpg"},42:function(e,t,a){e.exports=a.p+"static/media/PortraitCover.c8ddc278.jpg"},43:function(e,t,a){e.exports=a.p+"static/media/UrbanCover.7880ea64.jpg"},44:function(e,t,a){e.exports=a(71)},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(34),c=a.n(o),l=a(1),i=a(2),u=a(3),s=a(4),m=(a(10),a(35)),p=a.n(m),b=a(36),h=a.n(b),d=a(12),v=a(7),f=a(16),E=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={openDropdown:!1},n.toggleDropdown=n.toggleDropdown.bind(Object(d.a)(n)),n}return Object(i.a)(a,[{key:"toggleDropdown",value:function(){var e=this;this.setState((function(){return{openDropdown:!e.state.openDropdown}}))}},{key:"dropDown",value:function(){return r.a.createElement("ul",null,r.a.createElement(v.b,{to:"/Gallery/Urban"},r.a.createElement("li",{className:"drop-down"},"Urban")),r.a.createElement(v.b,{to:"/Gallery/Landscape"},r.a.createElement("li",{className:"drop-down"},"Landscape")),r.a.createElement(v.b,{to:"/Gallery/Portrait"},r.a.createElement("li",{className:"drop-down"},"Portrait")))}},{key:"toRender",value:function(){return r.a.createElement("ul",null,r.a.createElement(v.b,{to:"/"},r.a.createElement("li",null,"Home")),r.a.createElement(v.b,{to:"/AboutMe"},r.a.createElement("li",null,"About Me")),r.a.createElement(v.b,{onClick:this.toggleDropdown},r.a.createElement("li",null,"Gallery"),this.state.openDropdown?this.dropDown():""),r.a.createElement(v.b,{to:"/Contact"},r.a.createElement("li",null,"Contact")))}},{key:"render",value:function(){return r.a.createElement(f.a.nav,{initial:{x:-700},animate:{x:0},transition:{duration:2},className:this.props.openNav?"side-nav":"",style:this.props.openNav?{opacity:"60%"}:{opacity:"0%"}},this.props.openNav?this.toRender():"")}}]),a}(r.a.Component),g=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.openBackdrop?"backdrop":"",onClick:this.props.handleBackdropClick})}}]),a}(r.a.Component),y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={onHover:!1,openNav:!1},n.burgerButtonHover=n.burgerButtonHover.bind(Object(d.a)(n)),n.burgerButtonNoHover=n.burgerButtonNoHover.bind(Object(d.a)(n)),n.burgerButtonClicked=n.burgerButtonClicked.bind(Object(d.a)(n)),n.handleBackDropClick=n.handleBackdropClick.bind(Object(d.a)(n)),n}return Object(i.a)(a,[{key:"burgerButtonHover",value:function(){this.setState((function(){return{onHover:!0}}))}},{key:"burgerButtonNoHover",value:function(){this.setState((function(){return{onHover:!1}}))}},{key:"burgerButtonClicked",value:function(){this.setState((function(){return{openNav:!0}}))}},{key:"handleBackdropClick",value:function(){this.setState((function(){return{openNav:!1}}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f.a.button,{whileHover:{scale:1.3},className:this.state.openNav?"burger-button-hidden":"burger-button",onClick:this.burgerButtonClicked,onMouseOver:this.burgerButtonHover,onMouseOut:this.burgerButtonNoHover},r.a.createElement("div",{className:this.state.onHover?"burger-button-line-hover":"burger-button-line"}),r.a.createElement("div",{className:this.state.onHover?"burger-button-line-hover":"burger-button-line"}),r.a.createElement("div",{className:this.state.onHover?"burger-button-line-hover":"burger-button-line"})),r.a.createElement(E,{openNav:this.state.openNav}),r.a.createElement(g,{openBackdrop:this.state.openNav,handleBackdropClick:this.handleBackdropClick.bind(this)}))}}]),a}(r.a.Component),j=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"image-box"},r.a.createElement(y,null),r.a.createElement("div",{className:"image-box-background",style:{backgroundImage:"url(".concat(p.a,")"),opacity:"70%"}}),r.a.createElement("div",{className:"image-box-logo"},r.a.createElement("img",{src:h.a,alt:""})))}}]),a}(n.Component),k=a(39),O=a.n(k),N=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"about-me-container"},r.a.createElement(y,null),r.a.createElement("div",null,r.a.createElement("img",{className:"profile-img",src:O.a,alt:""})),r.a.createElement("div",{className:"about-me-div"},r.a.createElement("h1",{className:"about-me-header"},"About Me"),r.a.createElement("a",{className:"about-me-info"},"Hi there! My name is Judy and I'm a junior at Northeastern University pursuing a bachelors of computer science degree. Photography has always been a passion of mine; just as I am inspired by other people's photographs, I love to share mine with people like you, too! I decided to combine my two passions of front end web development and photography into this website. Enjoy! ")))}}]),a}(r.a.Component),w=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement("div",{className:"contact-div"},r.a.createElement("h1",{className:"contact-header"},"Contact"),r.a.createElement("a",null,"zhang.jud@husky.neu.edu"),r.a.createElement("br",null),r.a.createElement("a",null,"(201)-665-0678")))}}]),a}(r.a.Component),C=a(40),B=a.n(C),H=a(22),x=a.n(H),D=a(41),P=a(19),M=a.n(P);function G(e){return S.apply(this,arguments)}function S(){return(S=Object(D.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get("https://peaceful-bayou-26310.herokuapp.com/".concat(t),{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Content-Type, Authorization"}});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e;return"Landscape"===this.props.album?e="/Gallery/Landscape/Photos":"Portrait"===this.props.album?e="/Gallery/Portrait/Photos":"Urban"===this.props.album&&(e="/Gallery/Urban/Photos"),r.a.createElement(f.a.div,{initial:{y:20},animate:{y:0},transition:{loop:1/0,duration:1.25}},r.a.createElement(v.b,{to:e,className:"triangle-button"}))}}]),a}(r.a.Component),L=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={links:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;G("landscape").then((function(t){e.setState({links:t})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement("div",{className:"landscape-container"},r.a.createElement("img",{src:B.a,alt:""}),r.a.createElement("h1",null,"LANDSCAPE")),r.a.createElement(A,{album:"Landscape"}))}}]),a}(r.a.Component),U=a(42),I=a.n(U),R=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={links:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;G("portrait").then((function(t){e.setState({links:t})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement("div",{className:"portrait-container"},r.a.createElement("img",{src:I.a,alt:""}),r.a.createElement("h1",null,"Portrait")),r.a.createElement(A,{album:"Portrait"}))}}]),a}(r.a.Component),J=a(43),z=a.n(J),W=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={links:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;G("urban").then((function(t){e.setState({links:t})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement("div",{className:"urban-container"},r.a.createElement("img",{src:z.a,alt:""}),r.a.createElement("h1",null,"URBAN")),r.a.createElement(A,{album:"Urban"}))}}]),a}(r.a.Component),T=a(13),Z=a(15),$=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={images:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;G("landscape").then((function(t){e.setState((function(){return{images:t}}))}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(Z.a,{images:this.state.images,rows:1e4,maxRowHeight:900,gutter:1}))}}]),a}(r.a.Component),q=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={images:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;G("portrait").then((function(t){e.setState((function(){return{images:t}}))}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(Z.a,{images:this.state.images,rows:1e4,maxRowHeight:900,gutter:1}))}}]),a}(r.a.Component),F=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={images:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;G("urban").then((function(t){e.setState((function(){return{images:t}}))}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(Z.a,{images:this.state.images,rows:1e4,maxRowHeight:900,gutter:1}))}}]),a}(r.a.Component),K=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"100%"}},r.a.createElement("head",null,r.a.createElement("title",null,"Judy Zhang")),r.a.createElement(T.c,null,r.a.createElement(T.a,{exact:!0,path:"/",component:j}),r.a.createElement(T.a,{path:"/AboutMe",component:N}),r.a.createElement(T.a,{path:"/Contact",component:w}),r.a.createElement(T.a,{exact:!0,path:"/Gallery/Landscape",component:L}),r.a.createElement(T.a,{exact:!0,path:"/Gallery/Portrait",component:R}),r.a.createElement(T.a,{exact:!0,path:"/Gallery/Urban",component:W}),r.a.createElement(T.a,{path:"/Gallery/Landscape/Photos",component:$}),r.a.createElement(T.a,{path:"/Gallery/Portrait/Photos",component:q}),r.a.createElement(T.a,{path:"/Gallery/Urban/Photos",component:F})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v.a,null,r.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.5b59fa84.chunk.js.map