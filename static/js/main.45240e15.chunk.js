(this.webpackJsonpspacestagram=this.webpackJsonpspacestagram||[]).push([[0],{23:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(15),r=a.n(n),i=a(6),o=a.n(i),j=a(16),d=a(3),l=(a(23),a.p+"static/media/spaceship_name.f0051437.png"),u=a(0),b=function(){return Object(u.jsxs)("header",{children:[Object(u.jsx)("img",{className:"ship",src:l,alt:"A cute little spaceship cartoon made with the word spacestagram"}),Object(u.jsx)("h1",{children:"NASA images from January 2020"})]})},h=function(e){var t=e.item;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:t.url,alt:"Astronomy pic of the day from the NASA Api"}),Object(u.jsxs)("div",{className:"card-text",children:[Object(u.jsx)("h4",{children:t.date}),Object(u.jsx)("h2",{className:"title",children:t.title}),Object(u.jsxs)("button",{id:"love",className:"like-button",onClick:function(e){return e.target.classList.toggle("like-button-pink")},children:[" ","\u2764"]})]})]})},m=function(e){var t=e.items;return e.isLoading?Object(u.jsx)("h3",{className:"loading",children:"Loading..."}):Object(u.jsx)("section",{className:"cards",children:t.map((function(e){return Object(u.jsx)(h,{item:e},e.date)}))})},p=a(17),O=a.n(p),x=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!0),r=Object(d.a)(n,2),i=r[0],l=r[1],h=Object(c.useState)(""),p=Object(d.a)(h,2);p[0],p[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()("https://api.nasa.gov/planetary/apod?api_key=aeMjlr62KYkmJOc3xvbe2lcdr3rFLA0KZ0yXX0oB&start_date=2000-01-01&end_date=2000-01-31");case 2:t=e.sent,s(t.data),l(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(b,{}),Object(u.jsx)(m,{isLoading:i,items:a})]})};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.45240e15.chunk.js.map