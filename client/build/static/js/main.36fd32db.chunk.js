(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{106:function(e,t,n){e.exports=n(231)},231:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fetchUser",(function(){return k})),n.d(a,"handleToken",(function(){return w})),n.d(a,"sendSurvey",(function(){return S})),n.d(a,"fetchSurveys",(function(){return x}));n(107);var r=n(0),c=n.n(r),l=n(46),u=n.n(l),i=n(6),o=n(7),s=n(103),m=n(11),p=n(12),v=n(13),f=n(14),d=n(19),h=n(5),y=n(104),b=n.n(y),E=n(20),g=n.n(E),j=n(36),O=n(37),N=n.n(O),k=function(){return function(){var e=Object(j.a)(g.a.mark((function e(t){var n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("/api/current_user");case 3:n=e.sent,a=n.data,t({type:"fetch_user",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(j.a)(g.a.mark((function t(n){var a,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.a.post("/api/stripe",e);case 3:a=t.sent,r=a.data,n({type:"fetch_user",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},S=function(e,t){return function(){var n=Object(j.a)(g.a.mark((function n(a){var r,c;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,N.a.post("/api/surveys",e);case 2:r=n.sent,c=r.data,t.push("/surveys"),a({type:"fetch_user",payload:c});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},x=function(){return function(){var e=Object(j.a)(g.a.mark((function e(t){var n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/api/surveys");case 2:n=e.sent,a=n.data,t({type:"fetch_surveys",payload:a});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement(b.a,{amount:500,token:function(t){return e.props.handleToken(t)},stripeKey:"pk_test_51H4CmiDxza50b2wsPoICrvTazf0m2adoRTKopiPwnDXdbbkENDOfzaZSvMeaNiJLmN12hoFAEwfdMt25HaQykMtm00b8NRqjHg"},c.a.createElement("button",{className:"btn-floating btn-large green",title:"Add Credits"},c.a.createElement("i",{className:"material-icons"},"add")))}}]),n}(r.Component),_=Object(o.b)(null,a)(C),F=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"renderNavContent",value:function(){switch(this.props.auth){case null:return;case!1:return c.a.createElement("li",null,c.a.createElement("a",{href:"/auth/google"},"Login With Google"));default:return[c.a.createElement("li",{key:"3",style:{margin:"0 10px"}},"Credits : ",this.props.auth.credits),c.a.createElement("li",{key:"2"},c.a.createElement("a",{href:"/api/logout"},"Logout"))]}}},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement(d.b,{to:this.props.auth?"/surveys":"/",className:"left brand-logo"},"Feedy"),c.a.createElement("ul",{className:"right"},this.renderNavContent()))))}}]),n}(r.Component),A=Object(o.b)((function(e){return{auth:e.auth}}))(F),D=function(){return c.a.createElement("div",null,c.a.createElement("h2",{className:"center"},"Feedy"),c.a.createElement("h3",{className:"center"}," Get feedback from your customers"))},z=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchSurveys()}},{key:"renderSurveys",value:function(){return this.props.surveys.reverse().map((function(e){return c.a.createElement("div",{className:"card darken-1",key:e._id},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title"},e.title),c.a.createElement("p",null,e.body),c.a.createElement("p",{className:"right"},"Sent On: ",new Date(e.dateSent).toLocaleDateString())),c.a.createElement("div",{className:"card-action"},c.a.createElement("a",{href:"#"},"Yes: ",e.yes||0),c.a.createElement("a",{href:"#"},"No: ",e.no||0)))}))}},{key:"render",value:function(){return c.a.createElement("div",null,this.renderSurveys())}}]),n}(r.Component),T=Object(o.b)((function(e){return{surveys:e.surveys}}),a)(z),L=function(){return c.a.createElement("div",null,c.a.createElement("h2",{className:"center"},"Hi there !"),c.a.createElement(T,null),c.a.createElement("div",{className:"fixed-action-btn"},c.a.createElement(d.b,{to:"/surveys/new",style:{margin:"2px"},className:"btn-floating btn-large red"},c.a.createElement("i",{className:"large material-icons",title:"Add Survey"},"add")),c.a.createElement(_,null)))},M=n(233),B=n(232),H=function(e){var t=e.input,n=e.label,a=e.meta,r=a.error,l=a.touched;return c.a.createElement("div",null,c.a.createElement("label",null,n),c.a.createElement("input",Object.assign({},t,{style:{marginBottom:"5px"}})),c.a.createElement("div",{style:{color:"red",marginBottom:"20px"}},l&&r))},P=/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,U=function(e){return e.length?e.split(",").map((function(e){return e.trim()})).filter((function(e){return!P.test(e)})):[]},Z=[{label:"Survey title",name:"title"},{label:"Email body",name:"body"},{label:"Subject line",name:"subject"},{label:"Recipients",name:"recipients"}],G=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).renderSurveyFields=function(){return c.a.createElement("div",null,Z.map((function(e){return c.a.createElement(M.a,Object.assign({key:e.name},e,{type:"text",component:H}))})))},e}return Object(p.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h4",{className:"center"},"Please enter your survey details"),c.a.createElement("form",{onSubmit:this.props.handleSubmit(this.props.onSurveySubmit)},this.renderSurveyFields(),c.a.createElement(d.b,{to:"/surveys",className:"red left btn-flat white-text"},"Cancel"),c.a.createElement("button",{className:"teal btn-flat right white-text",type:"submit"},"Next ",c.a.createElement("i",{className:"material-icons right"},"done"))))}}]),n}(r.Component),J=Object(B.a)({validate:function(e){var t={};return U(e.recipients||[]).length&&(t.recipients="These emails are invalid : ".concat(U(e.recipients))),Z.forEach((function(n){var a=n.name;e[a]||(t[a]="You must provide a value")})),t},form:"surveyForm",destroyOnUnmount:!1})(G),R=Object(o.b)((function(e){return{values:e.form.surveyForm.values}}),a)(Object(h.e)((function(e){var t=e.onCancel,n=e.values,a=e.sendSurvey,r=e.history;return c.a.createElement("div",null,c.a.createElement("h3",{className:"center"},"Please confirm your entries"),c.a.createElement("div",null,function(e){return Z.map((function(t){var n=t.name,a=t.label;return c.a.createElement("div",{key:n},c.a.createElement("label",null,a),c.a.createElement("p",null,e[n]))}))}(n)),c.a.createElement("button",{onClick:t,className:"orange left btn-flat white-text"},"Back"),c.a.createElement("button",{onClick:function(){return a(n,r)},className:"green right btn-flat white-text"},"Send",c.a.createElement("i",{className:"material-icons right"},"email")))}))),W=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={review:!1},e.onSurveySubmit=function(){e.setState({review:!0})},e.onCancel=function(){e.setState({review:!1})},e.showForm=function(){return e.state.review?c.a.createElement(R,{onCancel:e.onCancel}):c.a.createElement(J,{onSurveySubmit:e.onSurveySubmit})},e}return Object(p.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,this.showForm())}}]),n}(r.Component),I=Object(B.a)({form:"surveyForm"})(W),K=function(){return c.a.createElement("div",null,c.a.createElement("h1",{className:"center"},"Thanks for voting"),c.a.createElement("h4",{className:"center"}," ","Would you like to use our service ! SignUp for free"),c.a.createElement("div",{className:"center"}," ",c.a.createElement("a",{href:"/auth/google"},"Login With Google")))},Y=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d.a,null,c.a.createElement("div",{className:"container"},c.a.createElement(A,null),c.a.createElement(h.a,{exact:!0,path:"/",component:D}),c.a.createElement(h.a,{exact:!0,path:"/surveys",component:L}),c.a.createElement(h.a,{path:"/surveys/new",component:I}),c.a.createElement(h.a,{path:"/api/surveys/:id/:choice",component:K}))))}}]),n}(c.a.Component),$=Object(o.b)(null,a)(Y),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_surveys":return t.payload;default:return e}},Q=n(234),X=Object(i.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_user":return t.payload||!1;default:return e}},form:Q.a,surveys:q}),V=Object(i.d)(X,{},Object(i.a)(s.a)),ee=c.a.createElement(o.a,{store:V},c.a.createElement($,null));u.a.render(ee,document.getElementById("root"))}},[[106,1,2]]]);
//# sourceMappingURL=main.36fd32db.chunk.js.map