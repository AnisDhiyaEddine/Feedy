(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,n){e.exports=n(66)},66:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fetchUser",(function(){return N})),n.d(a,"handleToken",(function(){return w}));n(38);var r=n(0),c=n.n(r),u=n(14),o=n.n(u),l=n(7),s=n(5),i=n(35),p=n(8),m=n(9),h=n(10),f=n(11),d=n(16),v=n(1),b=n(36),y=n.n(b),E=n(13),j=n.n(E),k=n(19),O=n(20),g=n.n(O),N=function(){return function(){var e=Object(k.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("/api/current_user");case 3:n=e.sent,a=n.data,t({type:"fetch_user",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(k.a)(j.a.mark((function t(n){var a,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.post("/api/stripe",e);case 3:a=t.sent,r=a.data,n({type:"fetch_user",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},x=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement(y.a,{amount:500,token:function(t){return e.props.handleToken(t)},stripeKey:"pk_test_51H4CmiDxza50b2wsPoICrvTazf0m2adoRTKopiPwnDXdbbkENDOfzaZSvMeaNiJLmN12hoFAEwfdMt25HaQykMtm00b8NRqjHg"},c.a.createElement("button",{className:"btn"},"Add Credits"))}}]),n}(r.Component),C=Object(s.b)(null,a)(x),_=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"renderNavContent",value:function(){switch(this.props.auth){case null:return;case!1:return c.a.createElement("li",null,c.a.createElement("a",{href:"/auth/google"},"Login With Google"));default:return[c.a.createElement("li",{key:"1"},c.a.createElement(C,null)),c.a.createElement("li",{key:"3",style:{margin:"0 10px"}},"Credits : ",this.props.auth.credits),c.a.createElement("li",{key:"2"},c.a.createElement("a",{href:"/api/logout"},"Logout"))]}}},{key:"render",value:function(){return c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement(d.b,{to:this.props.auth?"/surveys":"/",className:"left brand-logo"},"Feedy"),c.a.createElement("ul",{className:"right"},this.renderNavContent())))}}]),n}(r.Component),D=Object(s.b)((function(e){return{auth:e.auth}}))(_),H=function(){return c.a.createElement("div",null,c.a.createElement("h2",{className:"center"},"Feedy"),c.a.createElement("h3",{className:"center"}," Get feedback from your customers"))},M=function(){return c.a.createElement("h2",{className:"center"},"Hi i'm the SurveyNew")},T=function(){return c.a.createElement("h2",{className:"center"},"Hi i'm the Dashboard")},z=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d.a,null,c.a.createElement("div",{className:"container"},c.a.createElement(D,null),c.a.createElement(v.a,{exact:!0,path:"/",component:H}),c.a.createElement(v.a,{exact:!0,path:"/surveys",component:T}),c.a.createElement(v.a,{path:"/surveys/new",component:M}))))}}]),n}(c.a.Component),F=Object(s.b)(null,a)(z),J=Object(l.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_user":return t.payload||!1;default:return e}}}),L=Object(l.d)(J,{},Object(l.a)(i.a)),A=c.a.createElement(s.a,{store:L},c.a.createElement(F,null));o.a.render(A,document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.86589f45.chunk.js.map