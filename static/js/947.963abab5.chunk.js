(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[947],{9947:function(e,t,n){"use strict";n.r(t),n.d(t,{MovieIdContext:function(){return f}});var r=n(5861),i=n(9439),a=n(7757),o=n.n(a),s=n(2791),c=n(7689),l=n(1087),p=n(2007),d=n.n(p),u=n(3815),v=n(184),f=(0,s.createContext)(null);f.propTypes={movie:d().array},t.default=function(){var e,t=(0,c.UO)().movieId,n=(0,s.useState)([]),a=(0,i.Z)(n,2),p=a[0],d=a[1],h="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("7bfaca5914dfe808eee9ce7ecac1ff40","&language=en-US");return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(h);case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,d(n),console.log(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[h]),(0,v.jsx)(f.Provider,{value:t,children:(0,v.jsxs)("main",{className:u.Z.main,children:[p.poster_path?(0,v.jsx)("img",{className:u.Z.poster,src:"https://image.tmdb.org/t/p/w300".concat(p.poster_path),alt:"Movie poster"}):(0,v.jsx)("p",{children:"Image not available"}),(0,v.jsxs)("div",{className:u.Z.info,children:[(0,v.jsx)("h1",{children:p.title}),(0,v.jsxs)("p",{children:["User Score: ",p.vote_average]}),(0,v.jsx)("h2",{children:"Overview"}),(0,v.jsx)("p",{children:p.overview}),(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("p",{children:null===(e=p.genres)||void 0===e?void 0:e.map((function(e){return(0,v.jsxs)("span",{children:[e.name," "]},e.name)}))})]}),(0,v.jsxs)("div",{className:u.Z.additionalInfo,children:[(0,v.jsx)("p",{children:"additional information"}),(0,v.jsx)(l.Link,{to:"cast",children:"Cast"}),(0,v.jsx)(l.Link,{to:"reviews",children:"Reviews"})]}),(0,v.jsx)("div",{className:u.Z.outlet,children:(0,v.jsx)(c.j3,{})})]})})}},888:function(e,t,n){"use strict";var r=n(9047);function i(){}function a(){}a.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,a,o){if(o!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:i};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3815:function(e,t){"use strict";t.Z={main:"movie-details_main__XdGgG",poster:"movie-details_poster__YzoTv",info:"movie-details_info__avR+w",additionalInfo:"movie-details_additionalInfo__8Ud7N",outlet:"movie-details_outlet__QnIyV",actor:"movie-details_actor__3-6nN",details:"movie-details_details__hMk1F"}}}]);
//# sourceMappingURL=947.963abab5.chunk.js.map