(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],[,,function(e,o,t){e.exports={header:"search_header_header__119xu",logo:"search_header_logo__1izQy",title:"search_header_title__YQJgW",foodIcon:"search_header_foodIcon__3Yqxa",reloadBox:"search_header_reloadBox__2xPoK",reloadBtn:"search_header_reloadBtn__2aPYp",spin:"search_header_spin__amOlP"}},function(e,o,t){e.exports={box:"food_item_box__uBsKN",food:"food_item_food__36t_-",img:"food_item_img__2LPGT",title:"food_item_title__QYCCo"}},,,function(e,o,t){e.exports={app:"app_app__39-cA"}},function(e,o,t){e.exports={foods:"food_list_foods__1fXdi"}},,,,,,function(e,o,t){},,function(e,o,t){"use strict";t.r(o);var a=t(1),c=t.n(a),n=t(5),s=t.n(n),r=(t(13),t(8)),d=t(6),i=t.n(d),l=t(3),_=t.n(l),f=t(0),j=function(e){var o=e.food;return Object(f.jsxs)("li",{className:_.a.box,children:[Object(f.jsx)("div",{className:_.a.food,children:Object(f.jsx)("img",{className:_.a.img,src:o.image,alt:"food image"})}),Object(f.jsx)("p",{className:_.a.title,children:o.title})]})},h=t(7),m=t.n(h),p=function(e){return Object(f.jsx)("ul",{className:m.a.foods,children:e.foods&&e.foods.map((function(e){return Object(f.jsx)(j,{food:e},e.id)}))})},u=t(2),x=t.n(u),b=function(e){return Object(f.jsxs)("header",{className:x.a.header,children:[Object(f.jsxs)("div",{className:x.a.logo,children:[Object(f.jsx)("img",{className:x.a.foodIcon,src:"/images/foodIcon.jpg",alt:"logo"}),Object(f.jsx)("h1",{className:x.a.title,children:"Random Food"})]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{className:x.a.reloadBox,onClick:function(){return window.location.reload(!1)},children:Object(f.jsx)("img",{className:x.a.reloadBtn,src:"/images/reloadIcon.png",alt:"reload"})})})]})};var O=function(){var e=Object(a.useState)([]),o=Object(r.a)(e,2),t=o[0],c=o[1];return Object(a.useEffect)((function(){var e=new Headers;e.append("Content-Type","application/json"),fetch("https://api.spoonacular.com/recipes/random?number=4&apiKey=92cedfb0b9e844679738e6c6c90cd453",{method:"GET",headers:e,redirect:"follow"}).then((function(e){return e.json()})).then((function(e){return c(e.recipes)})).catch((function(e){return console.log("error",e)}))}),[]),Object(f.jsxs)("div",{className:i.a.app,children:[Object(f.jsx)(b,{}),Object(f.jsx)(p,{foods:t})]})};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(O,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.9bd90aa3.chunk.js.map