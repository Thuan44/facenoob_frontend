import{d as ee,u as te,r as L,a as m,b as D,c as b,o as c,e as l,f as e,g as p,w as v,t as u,h,i as _,F as P,j as E,p as S,k as O,l as B,v as se,m as I,n as oe,q as ae,s as re,x as ne,y as j,z as f,A as x,B as G,C as ie,D as H,E as J,G as k,H as C,I as ce,J as R,K as le,L as de,M as ue,N as _e,V as he,O as pe}from"./vendor.f865ec4a.js";const me=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}};me();const $=ee("user",{state:()=>({user:te("user",L({id:"",name:"",email:"",token:"",isAdmin:!1,isLoggedIn:!1,cartID:null,cart:null,cartCourseNumber:null}))}),actions:{setUserInfos(s,o,a,t){this.user.id=s,this.user.name=o,this.user.email=a,this.user.token=t,this.user.isLoggedIn=!0},setUserID(s){this.user.id=s},setUserName(s){this.user.name=s},setUserEmail(s){this.user.email=s},setUserToken(s){this.user.token=s},setAsAdmin(){this.user.isAdmin=!0},logUserIn(){this.user.isLoggedIn=!0},logUserOut(){this.user.isLoggedIn=!1},setCartID(s){this.user.cartID=s},setCart(s){this.user.cart=s},setCartCourseNumber(s){this.user.cartCourseNumber=s}}}),U=()=>{const s=$(),o="http://pournoobs-backend.herokuapp.com/api/";m.get(o+`cart/${s.user.cartID}`,{headers:{Authorization:"Bearer "+s.user.token}}).then(a=>{s.setCart(a.data.cart),s.setCartCourseNumber(a.data.courseNumber)}).catch(a=>console.log(a))},K=()=>{const s="http://pournoobs-backend.herokuapp.com/api/";let o=L([]);return m.get(s+"categories").then(a=>{o.value=a.data}).catch(a=>console.log(a)),o};var Z="/assets/logo_horizontal.a2e756f7.png";var y=(s,o)=>{const a=s.__vccOpts||s;for(const[t,n]of o)a[t]=n;return a};const ge={name:"TheNavbar",setup(){const s="http://pournoobs-backend.herokuapp.com/api/",o=D(),a=$();let t=K();return a.user.cart&&U(),{store:a,router:o,categories:t,apiUrl:s}},methods:{logout(){m.post(this.apiUrl+"logout",{},{headers:{Authorization:"Bearer "+this.store.user.token}}).then(s=>{localStorage.removeItem("user"),this.store.$reset(),console.log("User logged out successfully")}).catch(s=>console.log(s))}},mounted(){}},T=s=>(S("data-v-28e98680"),s=s(),O(),s),ve={id:"navbar"},fe={class:"container"},be={class:"top-menu"},$e=T(()=>e("img",{class:"logo-img w-100",src:Z,alt:"Logo Pour noobs"},null,-1)),ye=B('<div class="input-group search-container" data-v-28e98680><input type="search" class="form-control search-input" placeholder="Rechercher une formation" aria-label="Rechercher une formation" aria-describedby="button-addon2" data-v-28e98680><button class="btn search-btn" type="button" data-v-28e98680><i class="fa-solid fa-magnifying-glass" data-v-28e98680></i></button></div><div class="premium-container" data-v-28e98680><a href="#" class="btn premium-btn" data-v-28e98680><i class="fa-solid fa-star me-2" data-v-28e98680></i> Premium </a></div>',2),we={key:0,class:"auth-container"},xe=_("Se connecter"),ke=_("Inscrivez-vous !"),Ce={key:1,class:"toolbar d-flex dropdown align-items-center"},Ie={class:"fa-solid fa-cart-shopping text-white me-1 position-relative"},Ue={key:0,class:"position-absolute start-100 translate-middle badge rounded-pill bg-danger cart-badge"},Se=_(" Inventaire "),Oe={class:"dropdown-toggle profile-btn d-flex",id:"profileDropdownBtn","data-bs-toggle":"dropdown","aria-expanded":"false"},Ae={class:"mb-0 me-2 ms-4"},Ne={key:0,class:"fa-solid fa-user-shield me-1"},Pe={key:1,class:"fa-solid fa-user me-1"},Le={class:"dropdown-menu game-over-menu","aria-labelledby":"profileDropdownBtn"},Te={class:"h-100 w-100"},qe=_(" Game Over "),Ee=T(()=>e("i",{class:"fa-solid fa-skull ms-2"},null,-1)),Re=[qe,Ee],Ve=T(()=>e("div",{class:"menu-divider"},null,-1)),ze={class:"container"},De={class:"bottom-menu d-flex"},Be={class:"menu-list list-unstyled w-100 mb-0"},Me={class:"active"},Fe=_("ACCUEIL"),je=T(()=>e("li",null,[e("a",{href:""},"A PROPOS")],-1)),Ge={class:"category-dropdown position-relative"},He=T(()=>e("a",{href:""},[_(" CAT\xC9GORIES "),e("i",{class:"fa-solid fa-caret-down ms-1"})],-1)),Je={class:"category-dropdown-content"},Ke={href:"#"},Ze={class:"category-img-container position-relative"},Qe=["src"],We={class:"category-title position-absolute text-uppercase"},Xe=B('<li data-v-28e98680><a href data-v-28e98680> JOUEURS <i class="fa-solid fa-caret-down ms-1" data-v-28e98680></i></a></li><li data-v-28e98680><a href data-v-28e98680>SPONSORS</a></li><li data-v-28e98680><a href data-v-28e98680>COMMUNAUT\xC9</a></li><li data-v-28e98680><a href data-v-28e98680>BLOG</a></li><li data-v-28e98680><a href data-v-28e98680>CONTACT</a></li>',5);function Ye(s,o,a,t,n,i){const d=b("router-link");return c(),l("div",ve,[e("div",fe,[e("div",be,[p(d,{to:"/",class:"logo-container"},{default:v(()=>[$e]),_:1}),ye,t.store.user.isLoggedIn?(c(),l("div",Ce,[p(d,{to:"/cart",class:"text-white text-decoration-none cart-btn"},{default:v(()=>[e("i",Ie,[t.store.user.cartID&&t.store.user.cartCourseNumber>0?(c(),l("span",Ue,u(t.store.user.cartCourseNumber),1)):h("",!0)]),Se]),_:1}),e("button",Oe,[e("p",Ae,[t.store.user.isAdmin?(c(),l("i",Ne)):h("",!0),t.store.user.isAdmin?h("",!0):(c(),l("i",Pe)),_(" Bonjour "+u(t.store.user.name)+" ! ",1)])]),e("ul",Le,[e("li",Te,[e("a",{class:"dropdown-item",href:"#",onClick:o[0]||(o[0]=(...r)=>i.logout&&i.logout(...r))},Re)])])])):(c(),l("div",we,[p(d,{to:"/login",class:"btn register-btn"},{default:v(()=>[xe]),_:1}),p(d,{to:"/register",class:"btn register-btn"},{default:v(()=>[ke]),_:1})]))])]),Ve,e("div",ze,[e("div",De,[e("ul",Be,[e("li",Me,[p(d,{to:"/"},{default:v(()=>[Fe]),_:1})]),je,e("li",Ge,[He,e("div",Je,[(c(!0),l(P,null,E(t.categories,r=>(c(),l("a",Ke,[e("div",Ze,[e("img",{src:`/assets/img/categories/${r.image}`,alt:"",class:"w-100 category-img"},null,8,Qe),e("h5",We,u(r.name),1)])]))),256))])]),Xe])])])])}var et=y(ge,[["render",Ye],["__scopeId","data-v-28e98680"]]);const tt={components:{TheNavbar:et},setup(){return $().user.cart&&U(),{}}};function st(s,o,a,t,n,i){const d=b("TheNavbar"),r=b("router-view");return c(),l(P,null,[p(d),p(r)],64)}var ot=y(tt,[["render",st]]);const at=()=>{const s="http://pournoobs-backend.herokuapp.com/api/";let o=L([]),t=se.exports.useLoading().show({color:"#00e07f",loader:"bars",width:64,height:64,opacity:.8,backgroundColor:"#040806"});return m.get(s+"courses").then(n=>{o.value=n.data}).catch(n=>console.log(n)).finally(t.hide()),o};var rt="/assets/intro-banner_gotaga.458c3d67.png";const nt={name:"Home",setup(){const s="http://pournoobs-backend.herokuapp.com/api/",o=$();let a=at(),t=K(),n=L(null);const i=I(()=>n.value?a.value.filter(g=>g.category.name===n.value):a.value),d=g=>{n.value=g},{currentPage:r,lastPage:z,offset:M,next:Q,prev:W,pageSize:X,first:F}=oe({currentPage:1,pageSize:5,total:I(()=>i.value.length)}),Y=I(()=>Array.isArray(i.value)?i.value.slice(M.value,M.value+X.value):[]);return o.user.isLoggedIn&&m.post(s+`cart/createOrGetCart/${o.user.id}`,{},{headers:{Authorization:"Bearer "+o.user.token}}).then(g=>{(g.status===200||g.status===201)&&(o.setCartID(g.data.id),U())}).catch(g=>console.log(g)),ae(a,()=>{F()}),{courses:a,categories:t,apiUrl:s,store:o,currentPage:r,lastPage:z,next:Q,prev:W,first:F,paginatedCourses:Y,filteredCourses:i,selectedCategory:n,selectCategory:d}}},w=s=>(S("data-v-1164830c"),s=s(),O(),s),it={id:"home"},ct={id:"section1"},lt={class:"container pt-4"},dt=B('<div class="intro-banner w-100 position-relative" data-v-1164830c><div class="home-heading" data-v-1164830c><h1 class="home-title" data-v-1164830c>Pour tous les noobs...</h1><p class="mb-0 text-start home-subtitle" data-v-1164830c>...qui en ont marre d&#39;\xEAtre des noobs.</p></div><img src="'+rt+'" alt="Gotaga" class="intro-banner-img w-100" data-v-1164830c></div>',1),ut={class:"main-content"},_t={class:"course-heading d-flex justify-content-between align-items-end"},ht=w(()=>e("h3",{class:"text-start courses-title mb-0"},"Toutes les formations",-1)),pt=w(()=>e("button",{class:"btn btn-secondary category-filter mb-0 text-white dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},[_(" Filtre "),e("i",{class:"fa-solid fa-filter"})],-1)),mt={class:"dropdown-menu dropdown-menu-end filter-dropdown"},gt=w(()=>e("a",{class:"dropdown-item"},"Toutes",-1)),vt=[gt],ft=["onClick"],bt={class:"dropdown-item"},$t=w(()=>e("hr",null,null,-1)),yt={class:"courses-container mt-4"},wt=["src"],xt={class:"card-content"},kt={class:"course-title text-uppercase"},Ct={key:0,class:"fa-solid fa-circle-check me-1"},It={class:"mb-0 course-description"},Ut={key:0,class:"pagination text-white mt-5 d-flex justify-content-center align-items-center"},St=w(()=>e("i",{class:"fa-solid fa-caret-left"},null,-1)),Ot=[St],At={class:"pagination-page"},Nt={class:"mb-0"},Pt=w(()=>e("i",{class:"fa-solid fa-caret-right"},null,-1)),Lt=[Pt],Tt=w(()=>e("div",{id:"section2"},null,-1));function qt(s,o,a,t,n,i){const d=b("router-link");return c(),l("div",it,[e("div",ct,[e("div",lt,[dt,e("main",ut,[e("div",_t,[ht,pt,e("ul",mt,[e("li",{class:"category-list-item",onClick:o[0]||(o[0]=r=>t.selectCategory(null))},vt),(c(!0),l(P,null,E(t.categories,r=>(c(),l("li",{key:r.id,class:"category-list-item",onClick:z=>t.selectCategory(r.name)},[e("a",bt,u(r.name),1)],8,ft))),128))])]),$t,e("div",yt,[(c(!0),l(P,null,E(t.paginatedCourses,r=>(c(),re(d,{to:`/courses/${r.id}`,class:"card-container text-decoration-none",key:r.id},{default:v(()=>[e("span",{class:ne(["badge bg-primary category-badge",{"green-badge":r.category_id==1,"black-badge":r.category_id==2,"white-badge":r.category_id==3,"blue-badge":r.category_id==4}])},u(r.category.name),3),e("img",{src:`/assets/img/players/${r.image}`,alt:"",class:"w-100"},null,8,wt),e("div",xt,[e("h4",kt,[parseInt(r.price)>50?(c(),l("i",Ct)):h("",!0),_(" "+u(r.author),1)]),e("p",It,u(r.name.substring(0,30)+"..."),1)])]),_:2},1032,["to"]))),128))]),t.courses.length>0?(c(),l("div",Ut,[e("button",{onClick:o[1]||(o[1]=(...r)=>t.prev&&t.prev(...r)),class:"pagination-btn prev-btn"},Ot),e("div",At,[e("p",Nt,u(t.currentPage)+" / "+u(t.lastPage),1)]),e("button",{onClick:o[2]||(o[2]=(...r)=>t.next&&t.next(...r)),class:"pagination-btn next-btn"},Lt)])):h("",!0)])])]),Tt])}var Et=y(nt,[["render",qt],["__scopeId","data-v-1164830c"]]);const Rt={name:"Register",setup(){const s="http://pournoobs-backend.herokuapp.com/api/",o=D(),a=$(),t=j({email:"",name:"",password:"",password_confirmation:""}),n=I(()=>({email:{required:f.withMessage("Ce champ est requis",x),email:f.withMessage("Le format de l'email n'est pas valide",G)},name:{required:f.withMessage("Ce champ est requis",x)},password:{required:f.withMessage("Ce champ est requis",x)},password_confirmation:{required:f.withMessage("Ce champ est requis",x),sameAs:ie(t.password)}})),i=H(n,t);return{state:t,v$:i,postApiUrl:s,store:a,router:o}},methods:{async register(){await this.v$.$validate()?m.post(this.postApiUrl+"register",{email:this.state.email,name:this.state.name,password:this.state.password,password_confirmation:this.state.password_confirmation}).then(o=>{if(o.status===201){let a=o.data;this.store.setUserInfos(a.user.id,a.user.name,a.user.email,a.token),this.router.push("/")}else alert("Oups, there was an error. Please try again")}).catch(o=>{alert("Oups, there was an error. Please try again"),console.log(o)}):console.log("Some fields are not correct")}},mounted(){}},q=s=>(S("data-v-b68057b8"),s=s(),O(),s),Vt={id:"register"},zt={class:"container d-flex justify-content-center"},Dt=q(()=>e("div",{class:"left-container w-50"},[e("div",{class:"logo-container"},[e("img",{class:"logo-img w-100",src:Z,alt:"Logo Pour noobs"})]),e("h1",{class:"register-title"},"POUR NOOBS A BIEN PLUS QUE VOUS NE PENSEZ \xC0 VOUS OFFRIR !")],-1)),Bt={class:"right-container w-50"},Mt={class:"form-container"},Ft=q(()=>e("div",{class:"headings"},[e("h2",{class:"form-title"},"Inscription gratuite"),e("p",{class:"form-subtitle"},"Venez am\xE9liorer votre exp\xE9rience")],-1)),jt={key:0,class:"text-danger mb-0 text-start"},Gt={key:1,class:"text-danger mb-0 text-start"},Ht={class:"password-fields"},Jt={class:"password"},Kt={key:0,class:"text-danger mb-0 text-start"},Zt={class:"password-confirmation"},Qt={key:0,class:"text-danger mb-0 text-start"},Wt={class:"register-buttons d-flex align-items-center"},Xt=q(()=>e("button",{type:"submit",class:"btn submit-btn"},"Inscrivez-vous !",-1)),Yt=q(()=>e("span",{class:"mx-3 text-white"},"Ou",-1)),es=_("Connexion"),ts=q(()=>e("p",{class:"text-white terms-conditions"},[e("small",null,[_(" En vous inscrivant, vous acceptez nos "),e("span",null,[e("a",{href:"1",class:"terms-conditions-link"},"termes et conditions")])])],-1));function ss(s,o,a,t,n,i){const d=b("router-link");return c(),l("div",Vt,[e("div",zt,[Dt,e("div",Bt,[e("div",Mt,[Ft,e("form",{onSubmit:o[4]||(o[4]=J((...r)=>i.register&&i.register(...r),["stop","prevent"])),method:"POST",class:"register-form d-flex flex-column p-3"},[k(e("input",{type:"text",placeholder:"Courriel","onUpdate:modelValue":o[0]||(o[0]=r=>t.state.email=r)},null,512),[[C,t.state.email]]),t.v$.email.$error?(c(),l("p",jt,[e("small",null,u(t.v$.email.$errors[0].$message),1)])):h("",!0),k(e("input",{type:"text",placeholder:"Pseudo (4 caract\xE8res minimum)","onUpdate:modelValue":o[1]||(o[1]=r=>t.state.name=r)},null,512),[[C,t.state.name]]),t.v$.name.$error?(c(),l("p",Gt,[e("small",null,u(t.v$.name.$errors[0].$message),1)])):h("",!0),e("div",Ht,[e("div",Jt,[k(e("input",{class:"w-100",type:"password",placeholder:"Mot de passe","onUpdate:modelValue":o[2]||(o[2]=r=>t.state.password=r),autocomplete:""},null,512),[[C,t.state.password]]),t.v$.password.$error?(c(),l("p",Kt,[e("small",null,u(t.v$.password.$errors[0].$message),1)])):h("",!0)]),e("div",Zt,[k(e("input",{class:"w-100",type:"password",placeholder:"Confirmer mot de passe","onUpdate:modelValue":o[3]||(o[3]=r=>t.state.password_confirmation=r),autocomplete:""},null,512),[[C,t.state.password_confirmation]]),t.v$.password_confirmation.$error?(c(),l("p",Qt,[e("small",null,u(t.v$.password_confirmation.$errors[0].$message),1)])):h("",!0)])]),e("div",Wt,[Xt,Yt,p(d,{to:"/login",class:"login-link"},{default:v(()=>[es]),_:1})]),ts],32)])])])])}var os=y(Rt,[["render",ss],["__scopeId","data-v-b68057b8"]]);const as={name:"Login",setup(){const s="http://pournoobs-backend.herokuapp.com/api/",o=D(),a=$(),t=j({email:"",password:""}),n=I(()=>({email:{required:f.withMessage("Ce champ est requis",x),email:f.withMessage("Le format de l'email n'est pas valide",G)},password:{required:f.withMessage("Ce champ est requis",x)}})),i=H(n,t);return{state:t,v$:i,postApiUrl:s,store:a,router:o}},methods:{async login(){await this.v$.$validate()?m.post(this.postApiUrl+"login",{email:this.state.email,password:this.state.password}).then(o=>{if(o.status===200){let a=o.data;this.store.setUserInfos(a.user.id,a.user.name,a.user.email,a.token),a.user.role=="admin"&&this.store.setAsAdmin(),this.router.push("/")}else alert("Oups, there was an error. Please try again")}).catch(o=>{alert("Oups, there was an error. Please try again"),console.log(o)}):console.log("Some fields are not correct")}}},V=s=>(S("data-v-4963e569"),s=s(),O(),s),rs={id:"login"},ns={class:"container d-flex justify-content-center"},is=V(()=>e("div",{class:"left-container w-50"},[e("h1",{class:"login-title"},[e("span",{class:"revenez"},"REVENEZ"),_(" \xC0 VOTRE DERNIER POINT DE SAUVEGARDE ! ")])],-1)),cs={class:"right-container w-50"},ls={class:"form-container"},ds=V(()=>e("div",{class:"headings"},[e("h2",{class:"form-title"},"Connexion"),e("p",{class:"form-subtitle"},"Pr\xEAt \xE0 conqu\xE9rir le monde de l'e-sport ?")],-1)),us={key:0,class:"text-danger mb-0 text-start"},_s={class:"password"},hs={key:0,class:"text-danger mb-0 text-start"},ps={class:"login-buttons d-flex align-items-center"},ms=V(()=>e("button",{type:"submit",class:"btn submit-btn"},"Connectez-vous !",-1)),gs=V(()=>e("span",{class:"mx-3 text-white"},"Ou",-1)),vs=_("Inscription");function fs(s,o,a,t,n,i){const d=b("router-link");return c(),l("div",rs,[e("div",ns,[is,e("div",cs,[e("div",ls,[ds,e("form",{onSubmit:o[2]||(o[2]=J((...r)=>i.login&&i.login(...r),["stop","prevent"])),method:"POST",class:"login-form d-flex flex-column p-3"},[k(e("input",{type:"text",placeholder:"Courriel","onUpdate:modelValue":o[0]||(o[0]=r=>t.state.email=r)},null,512),[[C,t.state.email]]),t.v$.email.$error?(c(),l("p",us,[e("small",null,u(t.v$.email.$errors[0].$message),1)])):h("",!0),e("div",_s,[k(e("input",{class:"w-100",type:"password",placeholder:"Mot de passe","onUpdate:modelValue":o[1]||(o[1]=r=>t.state.password=r),autocomplete:""},null,512),[[C,t.state.password]]),t.v$.password.$error?(c(),l("p",hs,[e("small",null,u(t.v$.password.$errors[0].$message),1)])):h("",!0)]),e("div",ps,[ms,gs,p(d,{to:"/register",class:"register-link"},{default:v(()=>[vs]),_:1})])],32)])])])])}var bs=y(as,[["render",fs],["__scopeId","data-v-4963e569"]]);const $s=s=>{const o="http://pournoobs-backend.herokuapp.com/api/";let a=L({});return m.get(o+"courses/"+s).then(t=>{a.value=t.data}).catch(t=>console.log(t)),a};const ys={name:"SingleCourse",setup(){const s="http://pournoobs-backend.herokuapp.com/api/",o=ce(),a=$();return{course:$s(o.params.id),store:a,apiUrl:s}},methods:{addToCart(s,o){m.post(this.apiUrl+`cart/addCourseToCart/cart/${s}/course/${o}`,{},{headers:{Authorization:"Bearer "+this.store.user.token}}).then(a=>{a.status===201&&(U(),R({title:"<i class='fa-solid fa-fire-flame-curved me-2'></i> F\xC9LICITATIONS !",text:"Vous venez d'ajouter cette qu\xEAte \xE0 votre inventaire !"})),a.status===200&&R({title:"<i class='fa-solid fa-ban'></i> OUPS !",text:"Cette qu\xEAte fait d\xE9j\xE0 partie de votre inventaire"})}).catch(a=>console.log(a))}}},A=s=>(S("data-v-036e6384"),s=s(),O(),s),ws={id:"singleCourse"},xs=A(()=>e("div",{class:"left-layer"},null,-1)),ks=A(()=>e("div",{class:"bottom-layer d-none"},null,-1)),Cs={class:"hero-container d-flex"},Is=A(()=>e("div",{class:"empty-space"},null,-1)),Us={class:"hero-img-container"},Ss=["src"],Os={class:"hero-content text-white text-start"},As={class:"course-author text-uppercase"},Ns={key:0,class:"fa-solid fa-circle-check me-1"},Ps=A(()=>e("div",{class:"divider"},null,-1)),Ls={class:"course-name text-uppercase"},Ts={class:"course-description"},qs={class:"price-container d-flex w-50 justify-content-center align-items-center"},Es=A(()=>e("div",{class:"small-divider"},null,-1)),Rs={class:"course-price mb-0"},Vs=A(()=>e("div",{class:"small-divider"},null,-1));function zs(s,o,a,t,n,i){const d=b("notifications");return c(),l("div",ws,[p(d,{width:"400",classes:"notification"}),xs,ks,e("div",Cs,[Is,e("div",Us,[e("img",{class:"hero-img h-100",src:`/assets/img/players/${t.course.image}`},null,8,Ss)])]),e("div",Os,[e("h4",As,[parseInt(t.course.price)>50?(c(),l("i",Ns)):h("",!0),_(" "+u(t.course.author),1)]),Ps,e("h1",Ls,u(t.course.name),1),e("p",Ts,u(t.course.description),1),e("div",qs,[Es,e("p",Rs,u(t.course.price)+" \u20AC",1),Vs]),e("button",{class:"add-btn",onClick:o[0]||(o[0]=r=>i.addToCart(t.store.user.cartID,t.course.id))},"S'enr\xF4ler pour cette qu\xEAte")])])}var Ds=y(ys,[["render",zs],["__scopeId","data-v-036e6384"]]);const Bs={name:"Cart",setup(){const s="http://pournoobs-backend.herokuapp.com/api/",o=$(),a=I(()=>{let n=0;for(let i of o.user.cart.courses)n+=parseFloat(i.price);return n.toFixed(2)}),t=(n,i)=>{m.delete(s+`cart/destroyCourseFromCart/cart/${n}/course/${i}`,{headers:{Authorization:"Bearer "+o.user.token}}).then(d=>{d.status===200&&(U(),R({title:"<i class='fa-solid fa-hand-lizard'></i> PETIT JOUEUR !",text:"Cette qu\xEAte ne fait plus partie de votre inventaire"})),d.status===404&&R({title:"<i class='fa-solid fa-ban'></i> OUPS !",text:"Cette qu\xEAte n'est pas dans votre inventaire"})}).catch(d=>console.log(d))};return o.user.cart&&U(),{store:o,totalPrice:a,destroyCourse:t}}},N=s=>(S("data-v-0e9e8ef5"),s=s(),O(),s),Ms={id:"cart"},Fs={class:"container pt-4"},js=N(()=>e("h3",{class:"text-start cart-title"},"Votre inventaire",-1)),Gs=N(()=>e("hr",null,null,-1)),Hs={key:0,class:"table-container"},Js={class:"left-side"},Ks={class:"table table-striped table-dark"},Zs={class:"align-middle"},Qs={colspan:"1",class:"p-0",style:{width:"150px !important"}},Ws={class:"img-container mx-auto d-block"},Xs=["src"],Ys={colspan:"5",class:"text-start ps-4"},eo={class:"d-flex flex-column"},to={class:"text-uppercase course-author"},so={class:"course-name mb-0"},oo={colspan:"5",class:"course-price"},ao={colspan:"1"},ro=["onClick"],no=N(()=>e("i",{class:"fa-solid fa-circle-xmark"},null,-1)),io=[no],co={class:"right-side"},lo=N(()=>e("h4",{class:"text-white total-text"},"Total",-1)),uo=N(()=>e("div",{class:"divider"},null,-1)),_o={class:"total-price text-white mb-0"},ho={key:0,class:"continue-btn"},po={key:1,class:"continue-btn"},mo={key:1},go=N(()=>e("h4",{class:"text-white mt-4"},"Oups, aucune qu\xEAte n'a \xE9t\xE9 ajout\xE9e \xE0 votre inventaire...",-1)),vo=[go];function fo(s,o,a,t,n,i){const d=b("notifications");return c(),l("div",Ms,[p(d,{width:"400",classes:"notification"}),e("div",Fs,[js,Gs,t.store.user.cartID&&t.store.user.cart.courses.length>0?(c(),l("div",Hs,[e("div",Js,[e("table",Ks,[e("tbody",Zs,[(c(!0),l(P,null,E(t.store.user.cart.courses,r=>(c(),l("tr",{key:r.id,class:"table-row"},[e("td",Qs,[e("div",Ws,[e("img",{src:`/assets/img/players/${r.image}`,alt:"",class:"w-100 course-img d-block"},null,8,Xs)])]),e("td",Ys,[e("div",eo,[e("h5",to,u(r.author),1),e("p",so,u(r.name),1)])]),e("td",oo,u(r.price)+"\u20AC",1),e("td",ao,[e("button",{type:"button",class:"delete-btn",onClick:z=>t.destroyCourse(t.store.user.cart.id,r.id)},io,8,ro)])]))),128))])])]),e("div",co,[lo,uo,e("p",_o,u(t.totalPrice)+"\u20AC",1),t.store.user.cart.courses.length>1?(c(),l("button",ho,"Accepter ces qu\xEAtes")):(c(),l("button",po,"Accepter la qu\xEAte"))])])):(c(),l("div",mo,vo))])])}var bo=y(Bs,[["render",fo],["__scopeId","data-v-0e9e8ef5"]]);const $o=[{path:"/",name:"Home",component:Et},{path:"/register",name:"Register",component:os},{path:"/login",name:"Login",component:bs},{path:"/courses/:id",name:"SingleCourse",component:Ds},{path:"/cart",name:"Cart",component:bo}],yo=le({history:de(),routes:$o});ue(ot).use(yo).use(_e()).use(he).use(pe).mount("#app");
