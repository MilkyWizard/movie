(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{43:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),i=s(13),r=s.n(i),c=s(4),o=s.n(c),m=s(14),l=s(15),j=s(16),u=s(19),v=s(18),d=s(17),h=s.n(d),b=(s(43),s(0));var p=function(e){var t=e.year,s=e.title,a=e.summary,n=e.poster,i=e.genres;return Object(b.jsxs)("div",{className:"movie",children:[Object(b.jsx)("img",{src:n,alt:s,title:s}),Object(b.jsxs)("div",{className:"movie_column",children:[Object(b.jsx)("h3",{className:"movie__title",children:s}),Object(b.jsx)("h5",{className:"movie__year",children:t}),Object(b.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(b.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(b.jsxs)("p",{className:"movie__summary",children:[a.slice(0,140),"..."]})]})]})},O=(s(45),function(e){Object(u.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark((function t(){var s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(b.jsx)("section",{className:"container",children:t?Object(b.jsx)("div",{className:"loader",children:Object(b.jsx)("span",{className:"loader__text",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})}):Object(b.jsx)("div",{className:"movies",children:s.map((function(e){var t=e.genres,s=e.id,a=e.medium_cover_image,n=e.summary,i=e.title,r=e.year;return Object(b.jsx)(p,{id:s,year:r,title:i,summary:n,poster:a,genres:t},s)}))})})}}]),s}(n.a.Component));r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.9ff6df34.chunk.js.map