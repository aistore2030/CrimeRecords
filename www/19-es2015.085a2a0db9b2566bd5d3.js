(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"7T6H":function(l,n,t){"use strict";t.r(n);var a=t("8Y7J");class e{}var u=t("pMnS"),i=t("oBZk"),o=t("ZZ/e"),r=t("SVse"),b=t("/+23");class c{constructor(l,n,t){this.http=l,this.nav=n,this.cybercrimedataservice=t,this.notDataLoaded=!0,this.imageset=["https://cdn1.newsstate.com/images/andhra-pradesh-boardandhraboardlogo-69_5.jpg","https://i.pinimg.com/474x/93/29/3b/93293b489e5a8fde2ead6ea09439da8a.jpg","https://upload.wikimedia.org/wikipedia/commons/6/61/Assam_State_Emblem.png","https://qph.fs.quoracdn.net/main-qimg-fa115c9727f5b77889383b719f21a173","https://cdn.s3waas.gov.in/s36a10bbd480e4c5573d8f3af73ae0454b/uploads/2018/03/20180326100.gif","https://www.hubert-herald.nl/BhaGoa_bestanden/image008.jpg","https://www.studyandscore.com/images_all/1_Study%20material/General%20knowledge/State%20emblem/Gujarat-state-emblem.jpg","https://www.hubert-herald.nl/BhaHaryana_bestanden/image008.jpg","https://cdn.meramaal.com/wp-content/uploads/2018/06/himachala-Logo.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Seal_of_Jammu_and_Kashmir_color.png/212px-Seal_of_Jammu_and_Kashmir_color.png"]}ngOnInit(){this.http.get("https://api.data.gov.in/resource/81e1ed36-f67e-4c48-b1ae-fad90bf37bce?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=39").subscribe(l=>{this.records=l,this.notDataLoaded=!1})}SaveData(l,n,t,a,e,u){this.cybercrimedataservice.saveData(l,n,t,a,e,u),this.nav.navigateForward("/cybercrimedetail")}}var s=t("IheW"),d=a.pb({encapsulation:0,styles:[[""]],data:{}});function p(l){return a.Ib(0,[(l()(),a.rb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),a.rb(1,0,null,null,1,"ion-progress-bar",[["type","indeterminate"]],null,null,null,i.V,i.v)),a.qb(2,49152,null,0,o.X,[a.h,a.k,a.x],{type:[0,"type"]},null)],(function(l,n){l(n,2,0,"indeterminate")}),null)}function _(l){return a.Ib(0,[(l()(),a.rb(0,0,null,null,7,"ion-item",[],null,[[null,"click"]],(function(l,n,t){var a=!0;return"click"===n&&(a=!1!==l.component.SaveData(l.context.$implicit.state_ut_col_2_,l.context.$implicit.foreign_national___cracker_hacker_col_5_,l.context.$implicit.foreign_national___cyber_terrorist_col_6_,l.context.$implicit.indian_national___professional_computer_geek_hacker_cracker_col_16_,l.context.$implicit.indian_national___student_col_13_,l.context.$implicit.foreign_national___others_col_7_)&&a),a}),i.P,i.p)),a.qb(1,49152,null,0,o.F,[a.h,a.k,a.x],null,null),(l()(),a.rb(2,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,i.B,i.b)),a.qb(3,49152,null,0,o.d,[a.h,a.k,a.x],null,null),(l()(),a.rb(4,0,null,0,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),a.rb(5,0,null,0,2,"ion-label",[],null,null,null,i.Q,i.q)),a.qb(6,49152,null,0,o.L,[a.h,a.k,a.x],null,null),(l()(),a.Hb(7,0,[" "," "]))],null,(function(l,n){l(n,4,0,a.vb(1,"",n.component.imageset[n.context.index],"")),l(n,7,0,n.context.$implicit.state_ut_col_2_)}))}function m(l){return a.Ib(0,[(l()(),a.rb(0,0,null,null,10,"ion-header",[],null,null,null,i.N,i.n)),a.qb(1,49152,null,0,o.z,[a.h,a.k,a.x],null,null),(l()(),a.rb(2,0,null,0,8,"ion-toolbar",[],null,null,null,i.Z,i.z)),a.qb(3,49152,null,0,o.Ab,[a.h,a.k,a.x],null,null),(l()(),a.rb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.E,i.e)),a.qb(5,49152,null,0,o.j,[a.h,a.k,a.x],null,null),(l()(),a.rb(6,0,null,0,1,"ion-menu-button",[],null,null,null,i.S,i.t)),a.qb(7,49152,null,0,o.P,[a.h,a.k,a.x],null,null),(l()(),a.rb(8,0,null,0,2,"ion-title",[],null,null,null,i.Y,i.y)),a.qb(9,49152,null,0,o.yb,[a.h,a.k,a.x],null,null),(l()(),a.Hb(-1,0,[" Select State or Union Territories "])),(l()(),a.rb(11,0,null,null,7,"ion-content",[],null,null,null,i.K,i.k)),a.qb(12,49152,null,0,o.s,[a.h,a.k,a.x],null,null),(l()(),a.gb(16777216,null,0,1,null,p)),a.qb(14,16384,null,0,r.i,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(l()(),a.rb(15,0,null,0,3,"ion-list",[],null,null,null,i.R,i.r)),a.qb(16,49152,null,0,o.M,[a.h,a.k,a.x],null,null),(l()(),a.gb(16777216,null,0,1,null,_)),a.qb(18,278528,null,0,r.h,[a.M,a.J,a.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,14,0,t.notDataLoaded),l(n,18,0,null==t.records?null:t.records.records)}),null)}function h(l){return a.Ib(0,[(l()(),a.rb(0,0,null,null,1,"app-cybercrimes",[],null,null,null,m,d)),a.qb(1,114688,null,0,c,[s.c,o.Fb,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}var g=a.nb("app-cybercrimes",c,h,{},{},[]),f=t("s7LF"),k=t("iInd");class w{}t.d(n,"CybercrimesPageModuleNgFactory",(function(){return x}));var x=a.ob(e,[],(function(l){return a.Ab([a.Bb(512,a.j,a.Z,[[8,[u.a,g]],[3,a.j],a.v]),a.Bb(4608,r.k,r.j,[a.s,[2,r.r]]),a.Bb(4608,f.c,f.c,[]),a.Bb(4608,o.a,o.a,[a.x,a.g]),a.Bb(4608,o.Eb,o.Eb,[o.a,a.j,a.p]),a.Bb(4608,o.Hb,o.Hb,[o.a,a.j,a.p]),a.Bb(1073742336,r.b,r.b,[]),a.Bb(1073742336,f.b,f.b,[]),a.Bb(1073742336,f.a,f.a,[]),a.Bb(1073742336,o.Cb,o.Cb,[]),a.Bb(1073742336,k.o,k.o,[[2,k.t],[2,k.m]]),a.Bb(1073742336,w,w,[]),a.Bb(1073742336,e,e,[]),a.Bb(1024,k.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);