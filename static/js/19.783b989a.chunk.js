(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[19,947],{947:function(e,t,n){"use strict";n.r(t),n.d(t,{MovieIdContext:function(){return h}});var r=n(861),a=n(439),s=n(757),i=n.n(s),o=n(791),c=n(689),l=n(87),u=n(7),p=n.n(u),d=n(815),f=n(184),h=(0,o.createContext)(null);h.propTypes={movie:p().array},t.default=function(){var e,t=(0,c.UO)().movieId,n=(0,o.useState)([]),s=(0,a.Z)(n,2),u=s[0],p=s[1],v="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("7bfaca5914dfe808eee9ce7ecac1ff40","&language=en-US");return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(v);case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,p(n),console.log(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[v]),(0,f.jsx)(h.Provider,{value:t,children:(0,f.jsxs)("main",{className:d.Z.main,children:[u.poster_path?(0,f.jsx)("img",{className:d.Z.poster,src:"https://image.tmdb.org/t/p/w300".concat(u.poster_path),alt:"Movie poster"}):(0,f.jsx)("p",{children:"Image not available"}),(0,f.jsxs)("div",{className:d.Z.info,children:[(0,f.jsx)("h1",{children:u.title}),(0,f.jsxs)("p",{children:["User Score: ",u.vote_average]}),(0,f.jsx)("h2",{children:"Overview"}),(0,f.jsx)("p",{children:u.overview}),(0,f.jsx)("h3",{children:"Genres"}),(0,f.jsx)("p",{children:null===(e=u.genres)||void 0===e?void 0:e.map((function(e){return(0,f.jsxs)("span",{children:[e.name," "]},e.name)}))})]}),(0,f.jsxs)("div",{className:d.Z.additionalInfo,children:[(0,f.jsx)("p",{children:"additional information"}),(0,f.jsx)(l.Link,{to:"cast",children:"Cast"}),(0,f.jsx)(l.Link,{to:"reviews",children:"Reviews"})]}),(0,f.jsx)("div",{className:d.Z.outlet,children:(0,f.jsx)(c.j3,{})})]})})}},19:function(e,t,n){"use strict";n.r(t);var r=n(861),a=n(439),s=n(757),i=n.n(s),o=n(791),c=n(947),l=n(184);t.default=function(){var e=(0,o.useContext)(c.MovieIdContext),t="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat("7bfaca5914dfe808eee9ce7ecac1ff40","&language=en-US&page=1"),n=(0,o.useState)([]),s=(0,a.Z)(n,2),u=s[0],p=s[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,p(r.results),console.log(r.results),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,o.useEffect)((function(){})),(0,l.jsx)(l.Fragment,{children:0!==u.length?u.map((function(e){return(0,l.jsxs)("article",{children:[(0,l.jsxs)("h2",{children:["Author: ",e.author]}),(0,l.jsx)("p",{children:e.content})]},e.id)})):"There are no reviews"})}},888:function(e,t,n){"use strict";var r=n(47);function a(){}function s(){}s.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,s,i){if(i!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:a};return n.PropTypes=n,n}},7:function(e,t,n){e.exports=n(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},815:function(e,t){"use strict";t.Z={main:"movie-details_main__XdGgG",poster:"movie-details_poster__YzoTv",info:"movie-details_info__avR+w",additionalInfo:"movie-details_additionalInfo__8Ud7N",outlet:"movie-details_outlet__QnIyV",actor:"movie-details_actor__3-6nN",details:"movie-details_details__hMk1F"}}}]);
//# sourceMappingURL=19.783b989a.chunk.js.map