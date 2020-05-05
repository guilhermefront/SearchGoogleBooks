(this.webpackJsonplibgensearch=this.webpackJsonplibgensearch||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),l=a(4),i=a.n(l),c=(a(12),a(6)),s=a(1),r=n.a.createContext(),m=n.a.createContext(),u=function(e){var t=e.children,a=Object(o.useReducer)((function(e,t){switch(t.type){case"BOOK_ADD":return Object(s.a)(Object(s.a)({},e),{},{bookData:t.payload});case"QUERY":return Object(s.a)(Object(s.a)({},e),{},{query:t.payload});case"SET_URL":return Object(s.a)(Object(s.a)({},e),{},{url:"https://www.googleapis.com/books/v1/volumes?q=".concat(e.query,"&key=AIzaSyBvBig7VqgizPMI7CU0Xxa7LxuO5lUMtTo"),query:""});case"ERRO":return Object(s.a)(Object(s.a)({},e),{},{bookData:[],situation:"erro"});case"REINITIALIZER":return Object(s.a)(Object(s.a)({},e),{},{situation:"normal"});default:return e}}),{bookData:[],querySucess:"false",query:"",situation:"nothing",url:"https://www.googleapis.com/books/v1/volumes?q=&key=AIzaSyBvBig7VqgizPMI7CU0Xxa7LxuO5lUMtTo"}),l=Object(c.a)(a,2),i=l[0],u=l[1];return n.a.createElement(r.Provider,{value:i},n.a.createElement(m.Provider,{value:u},t))},p=function(){var e=Object(o.useContext)(m),t=Object(o.useContext)(r),a=t.query;t.url;return n.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e({type:"SET_URL"})}},n.a.createElement("input",{className:"app__searchbar",type:"text",value:a,placeholder:"Search",onChange:function(t){e({type:"QUERY",payload:t.target.value})}}),n.a.createElement("img",{alt:"searchicon",onClick:function(){e({type:"SET_URL"})},src:"./mdi_search.svg",className:"app__searchicon"}))},v=a(2),b=a.n(v),f=a(5),_=function(){var e=Object(o.useContext)(r),t=Object(o.useContext)(m),a=e.bookData,l=e.situation,i=e.url;e.query;return Object(o.useEffect)((function(){var e=function(){var e=Object(f.a)(b.a.mark((function e(){var a,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"REINITIALIZER"}),e.next=4,fetch(i);case 4:return a=e.sent,e.next=7,a.json();case 7:o=e.sent,console.log(o.items),void 0===o.items?t({type:"ERRO"}):t({type:"BOOK_ADD",payload:o.items}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t({type:"ERRO"});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();console.log(i),"https://www.googleapis.com/books/v1/volumes?q=&key=AIzaSyBvBig7VqgizPMI7CU0Xxa7LxuO5lUMtTo"!==i&&e()}),[i]),"erro"===l?n.a.createElement("div",{className:"app__erro"},"Livro n\xe3o encontrado."):n.a.createElement("ul",{className:"app__booklist"},a.map((function(e){return n.a.createElement("li",{key:e.id,className:"app__booklist--item"},n.a.createElement("div",{className:"app__booklist--item--container"},n.a.createElement("div",{className:"app__booklist--item--container--bookinfo"},n.a.createElement("img",{alt:"book illustration",src:e.volumeInfo&&e.volumeInfo.imageLinks&&e.volumeInfo.imageLinks.smallThumbnail,className:"app__booklist--item--container--bookinfo--image"}),n.a.createElement("div",{className:"app__booklist--item--container--bookinfo--text"},n.a.createElement("span",{className:"app__booklist--item--container--bookinfo--text--title"},e.volumeInfo.title.length>60?"".concat(e.volumeInfo.title.slice(0,60),"..."):e.volumeInfo.title),e.volumeInfo&&e.volumeInfo.authors&&n.a.createElement("p",{className:"app__booklist--item--container--bookinfo--text--author"},e.volumeInfo.authors.join(", ")))),n.a.createElement("ul",{style:{left:void 0===e.volumeInfo.pageCount&&"21rem",top:e.volumeInfo&&e.volumeInfo.authors&&"".concat(e.volumeInfo.authors[0]?e.volumeInfo.authors[0]:e.volumeInfo.authors[1]&&e.volumeInfo.authors[1]).length>23&&"1.8rem"},className:"app__booklist--item--container--list"},n.a.createElement("li",{className:"app__booklist--item--container--list--item"},n.a.createElement("span",{className:"app__booklist--item--container--list--item--title"},"Year:"),n.a.createElement("span",{className:"app__booklist--item--container--list--item--content"},void 0===e.volumeInfo.publishedDate?"unknown":"".concat(e.volumeInfo.publishedDate).slice(0,4))),n.a.createElement("li",{className:"app__booklist--item--container--list--item"},n.a.createElement("span",{className:"app__booklist--item--container--list--item--title"},"Pages:"),n.a.createElement("span",{className:"app__booklist--item--container--list--item--content"},void 0===e.volumeInfo.pageCount?"unknown":e.volumeInfo.pageCount)),n.a.createElement("li",{className:"app__booklist--item--container--list--item"},n.a.createElement("span",{className:"app__booklist--item--container--list--item--title"},"Language:"),n.a.createElement("span",{className:"app__booklist--item--container--list--item--content"},"".concat(e.volumeInfo.language).toUpperCase())))))})))};var k=function(){return n.a.createElement("div",{className:"app"},n.a.createElement(u,null,n.a.createElement("span",{className:"app__title"},"Search for books"),n.a.createElement(p,null),n.a.createElement(_,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.f0728e1e.chunk.js.map