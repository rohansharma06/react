(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,a,t){e.exports=t(156)},109:function(e,a,t){},155:function(e,a,t){},156:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),s=t.n(l),o=(t(106),t(107),t(108),t(109),t(19)),c=t(20),m=t(23),i=t(21),u=t(24),d=t(157),E=t(158),h=t(159),f=t(160),p=t(161),g=t(162),b=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))},N="http://localhost:3001/",v=t(28);function y(e){var a=e.item,t=e.isLoading,n=e.errMess;return t?r.a.createElement(b,null):n?r.a.createElement("h4",null,n):r.a.createElement(v.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(d.a,null,r.a.createElement(E.a,{src:N+a.image,alt:a.name}),r.a.createElement(h.a,null,r.a.createElement(f.a,null,a.name),a.designation?r.a.createElement(p.a,null,a.designation):null,r.a.createElement(g.a,null,a.description))))}var w=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(y,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(y,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(y,{item:e.leader,isLoading:e.leadersLoading,errMess:e.leadersErrMess}))))},O=t(163),M=t(164),L=t(165),k=t(10);function S(e){var a=e.dish;e.onClick;return r.a.createElement(d.a,null,r.a.createElement(k.b,{to:"/menu/".concat(a.id)},r.a.createElement(E.a,{width:"100%",src:N+a.image,alt:a.name}),r.a.createElement(O.a,null,r.a.createElement(f.a,null,a.name))))}var j=function(e){var a=e.dishes.dishes.map(function(e){return r.a.createElement("div",{key:e.id,className:"col-12 col-md-5 m-1"},r.a.createElement(S,{dish:e}))});return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null))):e.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,e.dishes.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(M.a,null,r.a.createElement(L.a,null,r.a.createElement(k.b,{to:"/home"},"Home")),r.a.createElement(L.a,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},a))},D=t(166),C=t(167);function F(e){var a=e.leader;return null!=a?r.a.createElement("div",{key:a.id,className:"col-12 mt-5"},r.a.createElement(D.a,{tag:"li"},r.a.createElement(D.a,{left:!0,middle:!0},r.a.createElement(D.a,{object:!0,src:N+a.image,alt:a.name})),r.a.createElement(D.a,{body:!0,className:"ml-5"},r.a.createElement(D.a,{heading:!0},a.name),r.a.createElement("p",null,a.designation),r.a.createElement("p",null,a.description)))):r.a.createElement("div",null)}var x=function(e){var a;return a=e.leaders.isLoading?r.a.createElement(b,null):e.leaders.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,e.leaders.errMess)))):e.leaders.leaders.map(function(e){return r.a.createElement(v.Fade,{in:!0},r.a.createElement(F,{leader:e}))}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(M.a,null,r.a.createElement(L.a,null,r.a.createElement(k.b,{to:"/home"},"Home")),r.a.createElement(L.a,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(d.a,null,r.a.createElement(C.a,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(h.a,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(d.a,null,r.a.createElement(h.a,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(D.a,{list:!0},r.a.createElement(v.Stagger,{in:!0},a)))))},A=t(6),I=t(168),T=t(184),R=t(169),_=t(170),q=t(171),P=t(172),H=t(173),G=t(9),U=function(e){return e&&e.length},W=function(e){return function(a){return!a||a.length<=e}},Y=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).state={isNavOpen:!1,isModalOpen:!1},t.toggleModal=t.toggleModal.bind(Object(A.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(A.a)(t)),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e,a=this;return r.a.createElement("div",null,r.a.createElement(I.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil fa-lg"})," Submit Comments"),r.a.createElement(T.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(R.a,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(_.a,null,r.a.createElement(G.LocalForm,{onSubmit:function(e){return a.handleSubmit(e)}},r.a.createElement(q.a,{className:"form-group"},r.a.createElement(P.a,{md:12},r.a.createElement(H.a,{htmlFor:"rating"},"Rating")),r.a.createElement(P.a,{md:12},r.a.createElement(G.Control.select,{model:".rating",name:"rating",className:"form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5")))),r.a.createElement(q.a,{className:"form-group"},r.a.createElement(P.a,null,r.a.createElement(H.a,{htmlFor:"name"},"Your Name"),r.a.createElement(G.Control.text,{model:".author",id:"author",name:"author",placeholder:"Your Name",className:"form-control",validators:{required:U,minLength:(e=3,function(a){return!a||a.length>=e}),maxLength:W(15)}}),r.a.createElement(G.Errors,{className:"text-danger",model:".yourname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(q.a,{className:"form-group"},r.a.createElement(P.a,null,r.a.createElement(H.a,{htmlFor:"comment"},"Comment"),r.a.createElement(G.Control.textarea,{model:".comment",id:"comment",name:"comment",rows:"6",className:"form-control"}))),r.a.createElement(I.a,{type:"submit",className:"bg-primary",color:"primary"},"Submit")))))}}]),a}(n.Component);function B(e){var a=e.dish;return r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(v.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(d.a,null,r.a.createElement(E.a,{top:!0,src:N+a.image,alt:a.name}),r.a.createElement(h.a,null,r.a.createElement(f.a,null,a.name),r.a.createElement(g.a,null,a.description)))))}function K(e){var a=e.comments,t=e.postComment,n=e.dishId;return null!=a?r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement("h4",null,"Comments"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(v.Stagger,{in:!0},a.map(function(e){return r.a.createElement(v.Fade,{in:!0},r.a.createElement("li",{key:e.id},r.a.createElement("p",null,e.comment),r.a.createElement("p",null,"-- ",e.author,", \xa0",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date))))))}))),r.a.createElement(Y,{dishId:n,postComment:t})):r.a.createElement("div",null)}var z=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(M.a,null,r.a.createElement(L.a,null,r.a.createElement(k.b,{to:"/menu"},"Menu")),r.a.createElement(L.a,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement(B,{dish:e.dish}),r.a.createElement(K,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id}))):r.a.createElement("div",null)},J=t(174),Z=t(175),$=t(176),Q=t(177),V=t(178),X=t(179),ee=t(180),ae=t(181),te=t(182),ne=t(183),re=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).state={isNavOpen:!1,isModalOpen:!1},t.toggleNav=t.toggleNav.bind(Object(A.a)(t)),t.toggleModal=t.toggleModal.bind(Object(A.a)(t)),t.handleLogin=t.handleLogin.bind(Object(A.a)(t)),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(Z.a,{onClick:this.toggleNav}),r.a.createElement($.a,{className:"me-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(Q.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(V.a,{navbar:!0},r.a.createElement(X.a,null,r.a.createElement(k.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"}),"Home")),r.a.createElement(X.a,null,r.a.createElement(k.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"}),"About Us")),r.a.createElement(X.a,null,r.a.createElement(k.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"}),"Menu")),r.a.createElement(X.a,null,r.a.createElement(k.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"}),"Contact Us"))),r.a.createElement(V.a,{className:"ml-auto",navbar:!0},r.a.createElement(X.a,null,r.a.createElement(I.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))))),r.a.createElement(ee.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))),r.a.createElement(T.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(R.a,{toggle:this.toggleModal},"Login"),r.a.createElement(_.a,null,r.a.createElement(ae.a,{onSubmit:this.handleLogin},r.a.createElement(te.a,null,r.a.createElement(H.a,{htmlFor:"username"},"Username"),r.a.createElement(ne.a,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a}})),r.a.createElement(te.a,null,r.a.createElement(H.a,{htmlFor:"password"},"Password"),r.a.createElement(ne.a,{type:"password",id:"password",name:"password",innerRef:function(a){return e.password=a}})),r.a.createElement(te.a,{check:!0},r.a.createElement(H.a,{check:!0},r.a.createElement(ne.a,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember me")),r.a.createElement(I.a,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),a}(n.Component);var le=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(k.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(k.b,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(k.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(k.b,{to:"/contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},se=function(e){return e&&e.length},oe=function(e){return function(a){return!a||a.length<=e}},ce=function(e){return function(a){return a&&a.length>=e}},me=function(e){return!isNaN(Number(e))},ie=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},ue=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).handleSubmit=t.handleSubmit.bind(Object(A.a)(t)),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"handleSubmit",value:function(e){this.props.postFeedback(e),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(M.a,null,r.a.createElement(L.a,null,r.a.createElement(k.b,{to:"/home"},"Home")),r.a.createElement(L.a,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(G.Form,{model:"feedback",onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(q.a,{className:"form-group"},r.a.createElement(H.a,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(P.a,{md:10},r.a.createElement(G.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:se,minLength:ce(3),maxLength:oe(15)}}),r.a.createElement(G.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(q.a,{className:"form-group"},r.a.createElement(H.a,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(P.a,{md:10},r.a.createElement(G.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:se,minLength:ce(3),maxLength:oe(15)}}),r.a.createElement(G.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(q.a,{className:"form-group"},r.a.createElement(H.a,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(P.a,{md:10},r.a.createElement(G.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:se,minLength:ce(3),maxLength:oe(15),isNumber:me}}),r.a.createElement(G.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(q.a,{className:"form-group"},r.a.createElement(H.a,{htmlFor:"email",md:2},"Email"),r.a.createElement(P.a,{md:10},r.a.createElement(G.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:se,validEmail:ie}}),r.a.createElement(G.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}}))),r.a.createElement(q.a,{className:"form-group"},r.a.createElement(P.a,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(H.a,{check:!0},r.a.createElement(G.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(P.a,{md:{size:3,offset:1}},r.a.createElement(G.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(q.a,{className:"form-group"},r.a.createElement(H.a,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(P.a,{md:10},r.a.createElement(G.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),r.a.createElement(q.a,{className:"form-group"},r.a.createElement(P.a,{md:{size:10,offset:2}},r.a.createElement(I.a,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),a}(n.Component),de=t(33),Ee=t(26),he=t(7),fe=function(){return{type:"PROMOS_LOADING"}},pe=function(e){return{type:"PROMOS_FAILED",payload:e}},ge=function(e){return{type:"ADD_PROMOS",payload:e}},be=t(57),Ne=t(76),ve=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchLeaders(),this.props.fetchComments(),this.props.fetchPromos()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(re,null),r.a.createElement(be.a,null,r.a.createElement(Ne.a,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(de.d,null,r.a.createElement(de.b,{path:"/home",component:function(){return r.a.createElement(w,{dish:e.props.dishes.dishes.filter(function(e){return e.featured})[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter(function(e){return e.featured})[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter(function(e){return e.featured})[0],leadersLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errMess})}}),r.a.createElement(de.b,{exact:!0,path:"/aboutus",component:function(){return r.a.createElement(x,{leaders:e.props.leaders})}}),"} />",r.a.createElement(de.b,{exact:!0,path:"/menu",component:function(){return r.a.createElement(j,{dishes:e.props.dishes})}}),r.a.createElement(de.b,{path:"/menu/:dishId",component:function(a){var t=a.match;return r.a.createElement(z,{dish:e.props.dishes.dishes.filter(function(e){return e.id===parseInt(t.params.dishId,10)})[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter(function(e){return e.dishId===parseInt(t.params.dishId,10)}),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(de.b,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(ue,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),r.a.createElement(de.a,{to:"/home"})))),r.a.createElement(le,null))}}]),a}(n.Component),ye=Object(de.g)(Object(Ee.connect)(function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}},function(e){return{postComment:function(a,t,n,r){return e(function(e,a,t,n){return function(r){var l={dishId:e,rating:a,author:t,comment:n};return l.date=(new Date).toISOString(),fetch(N+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then(function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(e){return r({type:"ADD_COMMENT",payload:e})}).catch(function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)})}}(a,t,n,r))},fetchDishes:function(){e(function(e){return e({type:"DISHES_LOADING"}),fetch(N+"dishes").then(function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(a){return e(function(e){return{type:"ADD_DISHES",payload:e}}(a))}).catch(function(a){return e({type:"DISHES_FAILED",payload:a.message})})})},fetchLeaders:function(){e(function(e){return e({type:"LEADERS_LOADING"}),fetch(N+"leaders").then(function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(a){return e(function(e){return{type:"ADD_LEADERS",payload:e}}(a))}).catch(function(a){return e({type:"LEADERS_FAILED",payload:a.message})})})},resetFeedbackForm:function(){e(G.actions.reset("feedback"))},fetchComments:function(){return e(function(e){return fetch(N+"comments").then(function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(a){return e(function(e){return{type:"ADD_COMMENTS",payload:e}}(a))}).catch(function(a){return e({type:"COMMENTS_FAILED",payload:a.message})})})},fetchPromos:function(){return e(function(e){return e(fe()),fetch(N+"promotions").then(function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(a){return e(ge(a))}).catch(function(a){return e(pe(a.message))})})},postFeedback:function(a){return e(function(e){return function(a){var t=Object(he.a)({},e);return t.date=(new Date).toISOString(),fetch(N+"feedback",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then(function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a},function(e){throw e}).then(function(e){return e.json()}).then(function(e){a({type:"ADD_FEEDBACK",payload:e}),alert("Thank you for your response!\n"+JSON.stringify(e))}).catch(function(e){console.log("Feedback: ",e.message),alert("Your feedback could not be posted\nError: "+e.message)})}}(a))}}})(ve)),we=(t(155),t(27)),Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_DISHES":return Object(he.a)({},e,{isLoading:!1,errMess:null,dishes:a.payload});case"DISHES_LOADING":return Object(he.a)({},e,{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(he.a)({},e,{isLoading:!1,errMess:a.payload});default:return e}},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENTS":return Object(he.a)({},e,{isLoading:!1,errMess:null,comments:a.payload});case"COMMENTS_FAILED":return Object(he.a)({},e,{isLoading:!1,errMess:a.payload});case"ADD_COMMENT":var t=a.payload;return Object(he.a)({},e,{comments:e.comments.concat(t)});default:return e}},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROMOS":return Object(he.a)({},e,{isLoading:!1,errMess:null,promotions:a.payload});case"PROMOS_LOADING":return Object(he.a)({},e,{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(he.a)({},e,{isLoading:!1,errMess:a.payload});default:return e}},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_LEADERS":return Object(he.a)({},e,{isLoading:!1,errMess:null,leaders:a.payload});case"LEADERS_LOADING":return Object(he.a)({},e,{isLoading:!0,errMess:null,leaders:[]});case"LEADERS_FAILED":return Object(he.a)({},e,{isLoading:!1,errMess:a.payload});default:return e}},Se=t(98),je=t(99),De=t.n(je),Ce={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},Fe=Object(we.createStore)(Object(we.combineReducers)(Object(he.a)({dishes:Oe,comments:Me,promotions:Le,leaders:ke},Object(G.createForms)({feedback:Ce}))),Object(we.applyMiddleware)(Se.a,De.a)),xe=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(Ee.Provider,{store:Fe},r.a.createElement(k.a,null,r.a.createElement("div",null,r.a.createElement(ye,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[101,1,2]]]);
//# sourceMappingURL=main.a96f42b0.chunk.js.map