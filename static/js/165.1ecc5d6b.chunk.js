"use strict";(self.webpackChunktest_demo=self.webpackChunktest_demo||[]).push([[165],{5295:function(i,t,e){e.d(t,{d:function(){return a}});var n=e(4569),r=e.n(n);function a(i,t,e){var n={method:i,url:t,params:e,headers:{"X-RapidAPI-Host":"tasty.p.rapidapi.com","X-RapidAPI-Key":"da5f72566fmshae28595683c0adap1c5609jsn070d55f2d1cf"}};return r().request(n)}},4907:function(i,t,e){e.d(t,{Z:function(){return l}});e(2791);var n=e(8870),r=e(6532),a=e(184);function l(){return(0,a.jsx)(n.Z,{mb:5,width:"100vw",height:55,style:{background:"#ebc919"},children:(0,a.jsx)("img",{width:170,src:r,alt:"logo"})})}},3165:function(i,t,e){e.r(t),e.d(t,{default:function(){return p}});var n=e(8870),r=e(3239),a=e(890),l=e(2791),o=e(885),s=e(6871),d=e(5295),c=function(){var i=(0,s.UO)().recipeName,t=(0,l.useState)(!0),e=(0,o.Z)(t,2),n=e[0],r=e[1],a=(0,l.useState)(),c=(0,o.Z)(a,2),u=c[0],h=c[1],p=(0,l.useCallback)((function(){i&&(0,d.d)("GET","https://tasty.p.rapidapi.com/recipes/get-more-info",{id:i}).then((function(i){h(i.data)})).catch((function(){new Error("failed to load recipe")})).finally((function(){r(!1)}))}),[i]);return(0,l.useEffect)((function(){p()}),[p]),{getRecipe:p,isLoading:n,recipe:u}},u=e(4907),h=e(184);function p(){var i=c(),t=i.isLoading,e=i.recipe;return(0,h.jsxs)(n.Z,{children:[(0,h.jsx)(u.Z,{}),t&&(0,h.jsx)(r.Z,{role:"progressbar"}),!t&&!e&&(0,h.jsx)(n.Z,{width:"100%",height:"100vh",display:"flex",justifyContent:"center",children:(0,h.jsx)(a.Z,{color:"secondary",variant:"h3",children:"Sorry, No data to display"})}),e&&(0,h.jsxs)(n.Z,{mx:1,mt:2,display:"flex",flexWrap:"nowrap",flexDirection:"row",alignItems:"start",justifyContent:"start",children:[(0,h.jsxs)(n.Z,{width:"33.3%",children:[(0,h.jsx)(a.Z,{variant:"h5",children:"Nutrition Info"}),(0,h.jsxs)(n.Z,{display:"flex",flexWrap:"nowrap",flexDirection:"row",children:[(0,h.jsx)(n.Z,{width:"49%",display:"flex",flexWrap:"wrap",children:Object.keys(e.nutrition).map((function(i){return(0,h.jsxs)(a.Z,{style:{width:"100%"},component:"div",variant:"subtitle1",children:[i," "]},i)}))}),(0,h.jsx)(n.Z,{width:"48%",display:"flex",flexWrap:"wrap",children:Object.values(e.nutrition).map((function(i){return(0,h.jsx)(a.Z,{lineHeight:1.75,style:{width:"100%"},component:"div",variant:"subtitle2",children:i},i)}))})]})]}),(0,h.jsxs)(n.Z,{width:"33.3%",children:[(0,h.jsx)(a.Z,{variant:"h5",children:"Preparation"}),(0,h.jsx)(n.Z,{mr:2,style:{height:280,overflow:"auto"},display:"flex",flexWrap:"wrap",flexDirection:"column",children:(0,h.jsx)(n.Z,{display:"flex",flexWrap:"wrap",children:e.instructions.sort((function(i){return i.position})).map((function(i){return(0,h.jsx)(l.Fragment,{children:(0,h.jsxs)(a.Z,{mb:2,variant:"subtitle1",children:[(0,h.jsx)("span",{style:{color:"#a5a5a5",fontWeight:"bold",marginRight:10},children:i.position}),i.display_text]})},i.id)}))})})]}),(0,h.jsxs)(n.Z,{width:"33.3%",children:[e.original_video_url&&(0,h.jsx)("video",{"data-testid":"recipe-video",title:e.name,width:"100%",src:e.original_video_url||(null===e||void 0===e?void 0:e.video_url),controls:!0}),!(null!==e&&void 0!==e&&e.video_url)&&(null===e||void 0===e?void 0:e.thumbnail_url)&&(0,h.jsx)("img",{"data-testid":"recipe-img",style:{backgroundSize:"cover",width:"-webkit-fill-available"},src:null===e||void 0===e?void 0:e.thumbnail_url,alt:null===e||void 0===e?void 0:e.thumbnail_alt_text})]})]})]})}},6532:function(i,t,e){i.exports=e.p+"static/media/tasty-logo.c16e0fa4523936a1ecb0.png"}}]);
//# sourceMappingURL=165.1ecc5d6b.chunk.js.map