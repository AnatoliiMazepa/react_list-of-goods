(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,r=s(4),c=s.n(r),i=s(5),o=s(6),a=s(9),l=s(7),u=s(8),b=s(1),h=s.n(b),d=(s(14),s(15),s(2)),j=s.n(d),p=s(0),N=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function O(t,e){var s=e.sortType,r=e.isReversed,c=Object(u.a)(t);return c.sort((function(t,e){switch(s){case n.ALPHABET:return t.localeCompare(e);case n.LENGTH:return t.length-e.length;default:return n.NONE}})),r&&c.reverse(),c}!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var f=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(i.a)(this,s);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={sortType:n.NONE,isReversed:!1},t}return Object(o.a)(s,[{key:"render",value:function(){var t=this,e=this.state,s=e.sortType,r=e.isReversed;return Object(p.jsxs)("div",{className:"section content",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",className:j()("button is-info",{"is-light":s!==n.ALPHABET}),onClick:function(){t.setState({sortType:n.ALPHABET})},children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:j()("button is-success",{"is-light":s!==n.LENGTH}),onClick:function(){t.setState({sortType:n.LENGTH})},children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:j()("button is-warning",{"is-light":!0!==r}),onClick:function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},children:"Reverse"}),(this.state.sortType!==n.NONE||!0===r)&&Object(p.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){t.setState({isReversed:!1,sortType:n.NONE})},children:"Reset"})]}),Object(p.jsx)("ul",{children:Object(p.jsx)("ul",{children:O(N,this.state).map((function(t){return Object(p.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})}}]),s}(h.a.Component);c.a.render(Object(p.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.0579683f.chunk.js.map