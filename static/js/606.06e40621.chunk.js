"use strict";(self.webpackChunktest_demo=self.webpackChunktest_demo||[]).push([[606],{5295:function(e,t,n){n.d(t,{d:function(){return s}});var i=n(4569),r=n.n(i);function s(e,t,n){var i={method:e,url:t,params:n,headers:{"X-RapidAPI-Host":"tasty.p.rapidapi.com","X-RapidAPI-Key":"da5f72566fmshae28595683c0adap1c5609jsn070d55f2d1cf"}};return r().request(i)}},4907:function(e,t,n){n.d(t,{Z:function(){return a}});n(2791);var i=n(8870),r=n(6532),s=n(184);function a(){return(0,s.jsx)(i.Z,{mb:5,width:"100vw",height:55,style:{background:"#ebc919"},children:(0,s.jsx)("img",{width:170,src:r,alt:"logo"})})}},606:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var i=n(2791),r=n(8870),s=n(1413),a=n(1462),o=n(3612),c=n(184);function d(e){var t=e.recipesOptions,n=e.getSimilarFeed,i=e.autocompleteRecipe;return(0,c.jsx)(r.Z,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",children:(0,c.jsx)(a.Z,{fullWidth:!0,autoComplete:!1,options:t,onChange:function(e,t){n(t)},onInputChange:function(e,t){t&&i(t)},renderInput:function(e){return(0,c.jsx)(o.Z,(0,s.Z)({},e))}})})}var l=n(7482),u=n(890),p=n(7621),f=n(6647),h=n(2169),m=n(9504),x=n(9276);function g(e){var t=e.isLoading,n=e.feeds;return console.log("Recipe feeds",t,n),(0,c.jsxs)(x.Z,{width:"100vw",children:[t&&(0,c.jsx)(l.Z,{}),!t&&0===n.length&&(0,c.jsx)(x.Z,{style:{border:"1px solid #ccc"},children:(0,c.jsx)(u.Z,{children:"no result found"})}),!t&&n.length>0&&(0,c.jsx)(x.Z,{marginY:3,display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap",justifyContent:"flex-start",children:n.map((function(e){return(0,c.jsx)(x.Z,{m:3,display:"flex","data-testid":"recipe",children:(0,c.jsx)(p.Z,{sx:{maxWidth:345,height:"370px"},onClick:function(){window.location.assign("/".concat(e.item.id))},children:(0,c.jsxs)(f.Z,{children:[(0,c.jsx)(h.Z,{component:"img",height:"140",image:e.item.thumbnail_url,alt:e.item.thumbnail_alt_text}),(0,c.jsxs)(m.Z,{children:[(0,c.jsx)(u.Z,{gutterBottom:!0,variant:"h5",component:"div",children:e.item.name}),(0,c.jsx)(u.Z,{style:{overflow:"hidden",textOverflow:"ellipsis"},variant:"body2",color:"text.secondary",children:e.item.description})]})]})})},e.item.id)}))})]})}var j=n(4907),v=n(885),Z=n(5295),y=function(){var e=(0,i.useState)([]),t=(0,v.Z)(e,2),n=t[0],r=t[1];return{recipesOptions:n,autocompleteRecipe:function(e){(0,Z.d)("GET","https://tasty.p.rapidapi.com/recipes/auto-complete",{prefix:e}).then((function(e){var t=e.data.results.length>0?e.data.results.map((function(e){return e.display})):[];r(t)}))}}};function w(){var e=y(),t=e.recipesOptions,n=e.autocompleteRecipe,s=function(){var e=(0,i.useState)([]),t=(0,v.Z)(e,2),n=t[0],r=t[1],s=(0,i.useState)(!1),a=(0,v.Z)(s,2),o=a[0],c=a[1];return{getSimilarFeed:function(e){c(!0),(0,Z.d)("GET","https://tasty.p.rapidapi.com/feeds/list",{size:"5",vegetarian:"false",from:"5",search_terms:e}).then((function(e){var t,n=null===(t=e.data.results)||void 0===t?void 0:t.filter((function(e){return"item"===e.type}));n.length>0&&r(n)})).finally((function(){c(!1)}))},feeds:n,isLoading:o}}(),a=s.getSimilarFeed,o=s.feeds,l=s.isLoading;return(0,c.jsxs)(r.Z,{height:"100vh",children:[(0,c.jsx)(j.Z,{}),(0,c.jsx)(d,{getSimilarFeed:a,recipesOptions:t,autocompleteRecipe:n}),(0,c.jsx)(g,{feeds:o,isLoading:l})]})}},6532:function(e,t,n){e.exports=n.p+"static/media/tasty-logo.c16e0fa4523936a1ecb0.png"}}]);
//# sourceMappingURL=606.06e40621.chunk.js.map