(this.webpackJsonpgithub_trending=this.webpackJsonpgithub_trending||[]).push([[0],[,function(e,a,t){e.exports={app:"App_app__1kX79",header:"App_header__3ZZ1n",main:"App_main__3ZkGI",filters:"App_filters__34xIm",content:"App_content__3La4L",footer:"App_footer__29Fsv App_header__3ZZ1n"}},function(e,a,t){e.exports={card:"card_card__1PvOV",text:"card_text__25e3Y",title:"card_title__eP2xC",description:"card_description__13Q2U",details:"card_details__2aAkx"}},,,,,,function(e,a,t){e.exports=t(14)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(5),l=t.n(c),s=(t(13),t(6)),i=t(7),o=t(2),_=t.n(o),m=t(3);var p=function(e){var a=e.r_url,t=e.r_stars,r=e.r_name,c=Object(i.a)(e,["r_url","r_stars","r_name"]),l=c.description,s=c.language,o=c.forks;return n.a.createElement("div",{className:_.a.card},n.a.createElement("div",{className:_.a.text},n.a.createElement("h2",{className:_.a.title},n.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},r)),n.a.createElement("p",{className:_.a.description},l)),n.a.createElement("div",{className:_.a.details},n.a.createElement("span",null,s),n.a.createElement("span",null,n.a.createElement(m.b,null),t),n.a.createElement("span",null,n.a.createElement(m.a,null)," ",o)))},u=t(1),d=t.n(u);var f=function(){var e=Object(r.useState)([]),a=Object(s.a)(e,2),t=a[0],c=a[1],l="https://api.github.com/search/repositories?sort=stars&q=language";return Object(r.useEffect)((function(){fetch(l).then((function(e){return e.json()})).then((function(e){console.log(e.items),c(e.items)}))}),[l]),n.a.createElement("div",{className:d.a.app},n.a.createElement("div",{className:d.a.header},"Github Trending Repositories"),n.a.createElement("div",{className:d.a.main},n.a.createElement("div",{className:d.a.filters},n.a.createElement("h3",null,"search")),n.a.createElement("div",{className:d.a.content},t.map((function(e){return n.a.createElement(p,Object.assign({key:e.id,r_stars:e.watchers_count,r_url:e.html_url,r_name:e.full_name},e))})))),n.a.createElement("div",{className:d.a.footer},n.a.createElement("span",null,"by"," ",n.a.createElement("a",{href:"https://github.com/odearogy",target:"_blank",rel:"noopener noreferrer"},"OdearOgy"))))};l.a.render(n.a.createElement(f,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.c86996b9.chunk.js.map