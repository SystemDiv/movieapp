(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{dSV7:function(t,b,i){"use strict";i.r(b),i.d(b,"ViewMovieDetailsModule",function(){return v});var e=i("ofXK"),o=i("tyNb"),n=i("fXoL"),s=i("5Ft6");function r(t,b){1&t&&n.Eb(0,"img",15)}function a(t,b){if(1&t&&n.Eb(0,"img",16),2&t){const t=n.Nb();n.Rb("src",t.movieDetails.poster,n.Vb)}}function c(t,b){if(1&t&&(n.Gb(0,"span",17),n.Yb(1),n.Fb()),2&t){const t=b.$implicit;n.ub(1),n.Zb(t)}}function m(t,b){if(1&t&&(n.Gb(0,"p",18),n.Yb(1),n.Fb()),2&t){const t=b.$implicit;n.ub(1),n.Zb(t)}}function p(t,b){if(1&t&&(n.Gb(0,"p"),n.Yb(1),n.Fb()),2&t){const t=b.$implicit;n.ub(1),n.Zb(t)}}function d(t,b){if(1&t&&(n.Gb(0,"div"),n.Gb(1,"strong"),n.Yb(2),n.Fb(),n.Gb(3,"span",19),n.Yb(4),n.Ob(5,"date"),n.Ob(6,"date"),n.Fb(),n.Gb(7,"p"),n.Yb(8),n.Fb(),n.Fb()),2&t){const t=b.$implicit;n.ub(2),n.ac("@",t.name,""),n.ub(2),n.bc("",n.Pb(5,4,t.date,"y-M-d")," at ",n.Pb(6,7,t.date,"shortTime"),""),n.ub(4),n.Zb(t.text)}}function u(t,b){1&t&&(n.Gb(0,"p"),n.Gb(1,"strong"),n.Yb(2," No any comments found on this post.."),n.Fb(),n.Fb())}const l=function(){return["/"]},g=[{path:"",component:(()=>{class t{constructor(t,b){this.apiService=t,this.rote=b,this.movieDetails=[],this.movieComments=[]}ngOnInit(){this.getMovieDetails()}getMovieDetails(){this.apiService.getMovieDetails({movieId:this.rote.snapshot.params.id}).subscribe(t=>{this.movieDetails=t.data,this.movieComments=t.commentsData})}}return t.\u0275fac=function(b){return new(b||t)(n.Db(s.a),n.Db(o.a))},t.\u0275cmp=n.xb({type:t,selectors:[["app-view-movie-details"]],decls:32,vars:12,consts:[[1,"container"],[1,"mb-4","mt-4"],[1,"btn","btn-outline-dark",3,"routerLink"],[1,"row"],[1,"col-md-4"],["src","/assets/image/placeHolder.png","alt","","width","100%","height","100%",4,"ngIf"],["alt","","width","100%",3,"src",4,"ngIf"],[1,"col-md-8"],[1,"mb-2"],["style","background-color: rgba(177, 174, 165, 0.274); padding:2px; margin-right: 2px;",4,"ngFor","ngForOf"],[1,"col-md-6"],["class","mb-0",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[1,"mt-2"],[4,"ngIf"],["src","/assets/image/placeHolder.png","alt","","width","100%","height","100%"],["alt","","width","100%",3,"src"],[2,"background-color","rgba(177, 174, 165, 0.274)","padding","2px","margin-right","2px"],[1,"mb-0"],[1,"ml-3"]],template:function(t,b){1&t&&(n.Gb(0,"div",0),n.Gb(1,"div",1),n.Gb(2,"button",2),n.Yb(3,"Back"),n.Fb(),n.Fb(),n.Gb(4,"div",3),n.Gb(5,"div",4),n.Xb(6,r,1,0,"img",5),n.Xb(7,a,1,1,"img",6),n.Fb(),n.Gb(8,"div",7),n.Gb(9,"h5"),n.Gb(10,"strong"),n.Yb(11),n.Fb(),n.Fb(),n.Gb(12,"h5"),n.Yb(13),n.Fb(),n.Gb(14,"p"),n.Yb(15),n.Fb(),n.Gb(16,"div",8),n.Xb(17,c,2,1,"span",9),n.Fb(),n.Gb(18,"div",3),n.Gb(19,"div",10),n.Gb(20,"h3"),n.Yb(21,"Cast"),n.Fb(),n.Xb(22,m,2,1,"p",11),n.Fb(),n.Gb(23,"div",10),n.Gb(24,"h3"),n.Yb(25,"Director"),n.Fb(),n.Xb(26,p,2,1,"p",12),n.Fb(),n.Fb(),n.Fb(),n.Fb(),n.Gb(27,"div"),n.Gb(28,"h3",13),n.Yb(29,"Comments"),n.Fb(),n.Xb(30,d,9,10,"div",12),n.Xb(31,u,3,0,"p",14),n.Fb(),n.Fb()),2&t&&(n.ub(2),n.Qb("routerLink",n.Sb(11,l)),n.ub(4),n.Qb("ngIf",!b.movieDetails.poster),n.ub(1),n.Qb("ngIf",b.movieDetails.poster),n.ub(4),n.Zb(b.movieDetails.title),n.ub(2),n.ac("IMDB: ",b.movieDetails.imdb.rating,""),n.ub(2),n.Zb(b.movieDetails.plot),n.ub(2),n.Qb("ngForOf",b.movieDetails.genres),n.ub(5),n.Qb("ngForOf",b.movieDetails.cast),n.ub(4),n.Qb("ngForOf",b.movieDetails.directors),n.ub(4),n.Qb("ngForOf",b.movieComments),n.ub(1),n.Qb("ngIf",!b.movieComments.length))},directives:[o.b,e.j,e.i],pipes:[e.d],styles:[""]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=n.Bb({type:t}),t.\u0275inj=n.Ab({factory:function(b){return new(b||t)},imports:[[o.c.forChild(g)],o.c]}),t})(),v=(()=>{class t{}return t.\u0275mod=n.Bb({type:t}),t.\u0275inj=n.Ab({factory:function(b){return new(b||t)},imports:[[e.b,f]]}),t})()}}]);