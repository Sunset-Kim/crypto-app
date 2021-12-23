(this["webpackJsonpcrypto-app"]=this["webpackJsonpcrypto-app"]||[]).push([[0],{105:function(n,e,t){"use strict";t.r(e);var r,i,c,o=t(1),a=t.n(o),s=t(23),d=t.n(s),l=t(6),u=t(7),b=t(36),j=t.n(b),p={mobile:320,tablet:786,desktop:1024},x={mobile:function(){},tablet:function(){},desktop:function(){}},h=function(n){return{default:j()(n),dark:j()(n).darken(2),light:j()(n).brighten(2)}};Object.keys(p).reduce((function(n,e){switch(e){case"mobile":n.mobile=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return Object(l.c)(r||(r=Object(u.a)(["\n      @media screen and (min-width: ","px){\n        ","\n      }"])),p.mobile,e)};break;case"tablet":n.tablet=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return Object(l.c)(i||(i=Object(u.a)(["\n    @media screen and (min-width: ","px){\n      ","\n    }"])),p.tablet,e)};break;case"desktop":n.desktop=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return Object(l.c)(c||(c=Object(u.a)(["\n    @media screen and (min-width: ","px){\n      ","\n    }"])),p.desktop,e)}}return n}),x);var f,O,m,g,v,y,k,w,C,L,F,z,I,S,D,$,N,P,E,M,Q,A,H,T,U,B={sizes:p,borderRadius:"4px",media:x,color:{primary:h("#9b59b6"),secondary:h("#313131"),background:"#222f3e",foreground:"#f5f6fa"},typography:"2px"},R=t(21),_=t(5),q=t(12),J=t(0),G=l.d.div(f||(f=Object(u.a)(["\nheight: 100%;\npadding: 24px;\n"]))),W=function(n){var e=n.children;return Object(J.jsx)(G,{children:e})},Y=function(){return Object(J.jsx)("div",{children:"Loading..."})},K=t(20),V=t.n(K),X=t(28),Z=t(60),nn=t.n(Z).a.create({baseURL:"https://api.coinpaprika.com/v1/"}),en={getCoins:function(){var n=Object(X.a)(V.a.mark((function n(){var e;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,nn.get("coins");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),getCoinDetail:function(){var n=Object(X.a)(V.a.mark((function n(e){var t;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,nn.get("coins/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),getPrice:function(){var n=Object(X.a)(V.a.mark((function n(e){var t;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,nn.get("tickers/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),getHistory:function(){var n=Object(X.a)(V.a.mark((function n(e){var t,r,i;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=Math.floor(Date.now()/1e3),r=t-1209600,n.next=4,nn.get("coins/".concat(e,"/ohlcv/historical"),{params:{start:r,end:t}});case 4:return i=n.sent,n.abrupt("return",i.data);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},tn=function(n){return"https://cryptoicon-api.vercel.app/api/icon/".concat(n.toLocaleLowerCase())},rn=t(16),cn=l.d.button(O||(O=Object(u.a)(["\nbackground: none;\nwidth: 36px;\nheight: 36px;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ncolor: ",";\nfont-size: 24px;\nborder: 1px solid ",";\nbackground-color: none;\ntransition: background-color 0.3s ease-in-out, color .3s ease-in-out;\n\n&:hover {\n  color: ",";\n  background-color: ",";\n}\n"])),(function(n){return n.theme.color.foreground}),(function(n){return n.theme.color.foreground}),(function(n){return n.theme.color.background}),(function(n){return n.theme.color.foreground})),on=function(n){var e=n.children,t=n.onClick;return Object(J.jsx)(cn,{onClick:t,children:e})},an=t(18),sn=t(19),dn=l.d.div(m||(m=Object(u.a)([""]))),ln=l.d.h1(g||(g=Object(u.a)([""]))),un=l.d.div(v||(v=Object(u.a)(["\nmargin-bottom: 24px;\nh1 {\n  font-size: 32px;\n  font-weight: bold;\n  text-align: center;\n}\n"]))),bn=l.d.div(y||(y=Object(u.a)(["\npadding: 0 16px;\ndisplay: flex;\njustify-content: space-between;\nmargin-bottom: 16px;\nflex-direction: column;\n\nselect {\n  padding: 8px 16px;\n  margin-bottom: 10px;\n}\n\n","\n\n\n"])),(function(n){return n.theme.media.tablet(k||(k=Object(u.a)(["\nflex-direction: row;\nselect {\n  margin-bottom: 0;\n}\n"])))})),jn=l.d.div(w||(w=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  > div {\n    margin: 0 16px;\n    height: 100%;\n  }\n\n  input {\n    width: 36px;\n    height: 100%;\n    margin-right: 10px;\n    text-align: center;\n    &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {\n      appearance: none;\n      margin: 0\n    }\n  }\n"]))),pn=l.d.ul(C||(C=Object(u.a)(["\npadding: 0 16px;\n"]))),xn=l.d.li(L||(L=Object(u.a)(["\n\nmargin: 8px auto;\n\nbackground-color: ",";\ncolor: ",";\nfont-weight: bold;\nborder-radius: 10px;\noverflow: hidden;\n\na {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 8px 16px;\n  transition: 0.3s ease-in-out;\n  &:hover {\n    background-color: ",";\n  }\n  \n}\n\nimg {\n  width: 48px;\n  height: 48px;\n  margin-right: 16px;\n}\n"])),(function(n){return n.theme.color.foreground}),(function(n){return n.theme.color.background}),(function(n){return n.theme.color.primary.default})),hn=function(){var n=Object(rn.useQuery)(["list"],en.getCoins),e=n.isLoading,t=(n.isError,n.data),r=Object(o.useState)(1),i=Object(q.a)(r,2),c=i[0],a=i[1],s=Object(o.useState)(10),d=Object(q.a)(s,2),l=d[0],u=d[1],b=null===t||void 0===t?void 0:t.filter((function(n){return n.is_active})),j=e,p=b&&Math.floor(b.length/l);return Object(J.jsx)(W,{children:Object(J.jsxs)(dn,{children:[Object(J.jsx)(un,{children:Object(J.jsx)("h1",{children:"Coin List"})}),j?Object(J.jsx)(Y,{}):Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)(bn,{children:[Object(J.jsxs)("select",{name:"",id:"",onChange:function(n){var e=n.currentTarget.value;u(Number(e)),a(1)},value:l,children:[Object(J.jsx)("option",{value:"10",children:"10\uac1c\uc529 \ubcf4\uae30"}),Object(J.jsx)("option",{value:"20",children:"20\uac1c\uc529 \ubcf4\uae30"}),Object(J.jsx)("option",{value:"50",children:"50\uac1c\uc529 \ubcf4\uae30"})]}),Object(J.jsxs)(jn,{children:[Object(J.jsx)(on,{onClick:function(){a((function(n){return n<=1?n:n-1}))},children:Object(J.jsx)(an.a,{icon:sn.a})}),Object(J.jsxs)("div",{children:[Object(J.jsx)("input",{type:"number",value:c,onChange:function(n){var e=Number(n.currentTarget.value),t=c;if(p&&e>p)t=p;else{if(e<1)return void(t=1);t=e}a(t)},max:p}),"/",Object(J.jsx)("span",{children:p})]}),Object(J.jsx)(on,{onClick:function(){a((function(n){return p&&n>=p?n:n+1}))},children:Object(J.jsx)(an.a,{icon:sn.b})})]})]}),Object(J.jsx)(pn,{children:b&&b.slice((c-1)*l,(c-1)*l+l).map((function(n){return Object(J.jsx)(xn,{children:Object(J.jsxs)(R.b,{to:"/coin/".concat(n.id),state:{name:n.name},children:[Object(J.jsx)("img",{src:tn(n.symbol),alt:n.symbol}),Object(J.jsxs)(ln,{children:[n.name," / ",n.symbol.toLowerCase()]})]})},n.id)}))})]})]})})},fn=t(61),On=function(n){var e=n.children,t=n.elementId,r=Object(o.useMemo)((function(){return document.getElementById(t)}),[t]);return Object(s.createPortal)(e,r)},mn=l.d.div(F||(F=Object(u.a)(["\nvisibility: ",";\nopacity:  ",";\nposition: fixed;\nleft: 0;\nright: 0;\ntop: 0;\nbottom: 0;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nbackground: rgba(0,0,0,0.3);\ntransition: .2s ease-in-out;\n"])),(function(n){return n.$visible?"visible":"hidden"}),(function(n){return n.$visible?"1":"0"})),gn=l.d.div(z||(z=Object(u.a)(["\n  padding: 24px;\n  background-color: ",";\n  color: ",";\n  border-radius: 999px;\n"])),(function(n){return n.theme.color.foreground}),(function(n){return n.theme.color.background})),vn=function(n){var e=n.children,t=n.isOpen;return Object(J.jsx)(On,{elementId:"root",children:Object(J.jsx)(mn,{onClick:function(n){n.target,n.currentTarget},$visible:t,children:Object(J.jsx)(gn,{children:e})})})},yn=l.d.div(I||(I=Object(u.a)(["\ndisplay: flex;\nmargin-bottom: 24px;\n\nh1 {\n  flex: 1;\n  font-size: 32px;\n  font-weight: bold;\n  text-align: center;\n}\n"]))),kn=l.d.div(S||(S=Object(u.a)([""]))),wn=l.d.div(D||(D=Object(u.a)(["\ndisplay: flex;\ncolor: ",";\nbackground: ",";\nborder-radius: 10px;\nmargin-bottom: 24px;\nwhite-space: pre-wrap;\n\n> div {\n  padding: 16px;\n  flex:1;\n  display: flex;\n  flex-direction: column;\n  \n  align-items: center;\n  \n  h3 {\n    text-align: center;\n    font-size: 18px;\n    line-height: 24px;\n    font-weight: bold;\n    text-transform: uppercase;\n    margin-bottom: 8px;\n  }\n  > div {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n \n  img {\n \n    width: 48px;\n    height: 48px;\n  }\n}\n"])),(function(n){return n.theme.color.background}),(function(n){return n.theme.color.foreground})),Cn=l.d.div($||($=Object(u.a)(["\nfont-size: 16px;\nline-height: 20px;\nmargin-bottom: 24px;\n\nh2 {\n  font-size: 24px;\n  font-weight: 600;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n}\n"]))),Ln=Object(l.d)(wn)(N||(N=Object(u.a)(["\n"]))),Fn=l.d.div(P||(P=Object(u.a)(["\ndisplay: flex; \n"]))),zn=Object(l.d)(R.b)(E||(E=Object(u.a)(["\n  padding: 10px 0;\n  text-align: center;\n  border-radius: 20px 20px 0 0;\n  color: ",";\n  background-color: ",";\n  transition: background-color .2s ease-in-out;\n  flex: 1;\n"])),(function(n){return n.theme.color.background}),(function(n){var e=n.theme;return n.$isactive?e.color.primary.default:e.color.foreground})),In=l.d.div(M||(M=Object(u.a)(["\n  \n  \n"]))),Sn=function(){var n=Object(_.f)().state,e=Object(_.i)().coinID,t=Object(_.g)("/coin/:coinID/price"),r=Object(_.g)("/coin/:coinID/chart"),i=Object(_.h)(),c=Object(o.useState)(!1),a=Object(q.a)(c,2),s=a[0],d=a[1],l=Object(rn.useQuery)(["info",e],(function(){return en.getCoinDetail(e)})),u=l.isLoading,b=(l.isError,l.data),j=Object(rn.useQuery)(["price",e],(function(){return en.getPrice(e)})),p=j.isLoading,x=(j.isError,j.data),h=j.refetch,f=u||p;return Object(J.jsxs)(W,{children:[Object(J.jsx)(fn.a,{children:Object(J.jsx)("title",{children:(null===n||void 0===n?void 0:n.name)?n.name:f?"Loading...":null===b||void 0===b?void 0:b.name})}),Object(J.jsxs)(yn,{children:[Object(J.jsx)(on,{onClick:function(){return i("/")},children:Object(J.jsx)(an.a,{icon:sn.c})}),Object(J.jsx)("h1",{children:(null===n||void 0===n?void 0:n.name)?n.name:f?"Loading...":null===b||void 0===b?void 0:b.name}),Object(J.jsx)(on,{onClick:function(){s||(d(!0),h().then((function(){setTimeout((function(){d(!1)}),300)})))},children:Object(J.jsx)(an.a,{icon:sn.f})})]}),Object(J.jsx)(kn,{children:f?Object(J.jsx)(Y,{}):Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)(wn,{children:[Object(J.jsxs)("div",{children:[Object(J.jsx)("h3",{children:"Rank"}),Object(J.jsx)("div",{children:Object(J.jsx)("p",{children:null===b||void 0===b?void 0:b.rank})})]}),Object(J.jsxs)("div",{children:[Object(J.jsx)("h3",{children:"SYMBOL"}),Object(J.jsx)("div",{children:Object(J.jsx)("p",{children:null===b||void 0===b?void 0:b.symbol})})]}),Object(J.jsxs)("div",{children:[Object(J.jsx)("h3",{children:"IMG"}),Object(J.jsx)("div",{children:(null===b||void 0===b?void 0:b.symbol)&&Object(J.jsx)("img",{src:tn(b.symbol),alt:b.symbol})})]})]}),Object(J.jsxs)(Cn,{children:[Object(J.jsx)("h2",{children:"description"}),null===b||void 0===b?void 0:b.description]}),Object(J.jsxs)(Ln,{children:[Object(J.jsxs)("div",{children:[Object(J.jsx)("h3",{children:"All Time High Price"}),Object(J.jsx)("div",{children:Object(J.jsxs)("p",{children:["$",null===x||void 0===x?void 0:x.quotes.USD.ath_price.toFixed(2)]})})]}),Object(J.jsxs)("div",{children:[Object(J.jsx)("h3",{children:"Current Price"}),Object(J.jsx)("div",{children:Object(J.jsxs)("p",{children:["$",null===x||void 0===x?void 0:x.quotes.USD.price.toFixed(2)]})})]})]}),Object(J.jsxs)(Fn,{children:[Object(J.jsx)(zn,{$isactive:null!==r,to:"chart",children:"Chart"}),Object(J.jsx)(zn,{$isactive:null!==t,to:"price",state:{data:x},children:"Price"})]}),Object(J.jsx)(In,{children:Object(J.jsx)(_.a,{})})]})}),Object(J.jsx)(vn,{isOpen:s,children:"Refetch \uc644\ub8cc"})]})},Dn=t(64),$n=t.n(Dn),Nn=l.d.div(Q||(Q=Object(u.a)(["\npadding: 16px 8px;\nborder: 1px solid ",";\nborder-top: none;\n"])),(function(n){return n.theme.color.primary.default})),Pn=function(){var n=Object(_.i)().coinID,e=Object(rn.useQuery)(["history",n],(function(){return en.getHistory(n)})),t=e.isLoading,r=(e.isError,e.data),i=null===r||void 0===r?void 0:r.map((function(n){return{x:n.time_close,y:[n.open,n.high,n.low,n.close]}}));return Object(J.jsx)(Nn,{children:t?Object(J.jsx)(Y,{}):Object(J.jsx)($n.a,{type:"candlestick",series:[{name:"candle",data:i}],options:{chart:{toolbar:{autoSelected:"pan",show:!1},zoom:{enabled:!1},height:"100%",width:"100%",background:"transparent"},plotOptions:{candlestick:{colors:{}}},title:{text:"".concat(n.toUpperCase()),align:"center",style:{fontSize:"18px",fontWeight:"bold"}},theme:{mode:"dark"},xaxis:{type:"datetime"},yaxis:{labels:{style:{fontFamily:"Lato"},formatter:function(n){return"$ ".concat(n.toFixed(2))}}},tooltip:{fillSeriesColor:!0,custom:function(n){var e=n.seriesIndex,t=n.dataPointIndex,r=n.w,i=r.globals.seriesCandleO[e][t],c=r.globals.seriesCandleH[e][t],o=r.globals.seriesCandleL[e][t],a=r.globals.seriesCandleC[e][t];return'<div class="apexcharts-tooltip-candlestick">\n                <div class="apexcharts-tooltip-candlestick-line">Open:<span class="value">'.concat(Number(i).toFixed(2),'</span></div>\n                <div class="apexcharts-tooltip-candlestick-line">High: <span class="value">').concat(Number(c).toFixed(2),'</span></div>\n                <div class="apexcharts-tooltip-candlestick-line">Low: <span class="value">').concat(Number(o).toFixed(2),'</span></div>\n                <div class="apexcharts-tooltip-candlestick-line">Close: <span class="value">').concat(Number(a).toFixed(2),"</span></div>\n                </div>")},style:{fontFamily:"Lato",fontSize:"14px"}}}})})},En=l.d.div(A||(A=Object(u.a)(["\npadding: 16px 8px;\nborder: 1px solid ",";\nborder-top: none;\n"])),(function(n){return n.theme.color.primary.default})),Mn=l.d.div(H||(H=Object(u.a)(["\ndisplay: flex;\nwidth: 100%;\nbackground-color: ",";\ncolor: ",";\npadding: 16px 24px;\nborder-radius: 100px;\njustify-content: space-between;\nmargin-bottom: 8px;\nh3 {\n  text-transform: capitalize;\n  font-weight: bold;\n}\n"])),(function(n){return n.theme.color.foreground}),(function(n){return n.theme.color.background})),Qn=l.d.div(T||(T=Object(u.a)(["\ncolor: ",";\n"])),(function(n){var e=n.color;return void 0===e?"inherit":e})),An=function(){var n=Object(_.f)().state.data,e=Object.entries(n.quotes.USD);return Object(J.jsx)(En,{children:e.map((function(n){return Object(J.jsxs)(Mn,{children:[Object(J.jsx)("h3",{children:n[0].replaceAll("_"," ")}),Object(J.jsx)(Qn,{color:n[0].indexOf("change")>-1||n[0].indexOf("percent")>-1?Number(n[1])>0?"#00B746":"#EF403C":"",children:n[0].indexOf("percent")>-1||n[0].indexOf("change")>-1?Number(n[1])>0?Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("span",{children:"+"+n[1]+"% "}),Object(J.jsx)(an.a,{icon:sn.e})]}):Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("span",{children:n[1]+"% "}),Object(J.jsx)(an.a,{icon:sn.d})]}):n[0].indexOf("price")>-1?Object(J.jsx)("span",{children:"$"+Number(n[1]).toFixed(2)}):Object(J.jsx)("span",{children:n[1]})})]},n[0])}))})},Hn=function(){return Object(J.jsx)(R.a,{children:Object(J.jsxs)(_.d,{children:[Object(J.jsx)(_.b,{path:"/",element:Object(J.jsx)(hn,{})}),Object(J.jsxs)(_.b,{path:"/coin/:coinID",element:Object(J.jsx)(Sn,{}),children:[Object(J.jsx)(_.b,{path:"chart",element:Object(J.jsx)(Pn,{})}),Object(J.jsx)(_.b,{path:"price",element:Object(J.jsx)(An,{})})]})]})})},Tn=t(65),Un=Object(l.b)(U||(U=Object(u.a)(["\n","\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  font-family: 'Lato', sans-serif;\n  height: 100%;\n  color: ",";\n  background-color: ",";\n}\n\n#root {\n  height: 100%;\n  max-width: 720px;\n  min-width: 320px;\n  margin: 0 auto;\n}\n\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n/* apex tool tip */\n.apexcharts-tooltip-candlestick {\n  padding: 1em;\n  font-family: 'Lato';\n\n  &-line {\n    margin-bottom: 0.2em;\n    span {\n      font-weight: bold;\n      margin-left: 0.5em;\n    }\n  }\n}\n"])),Tn.a,(function(n){return n.theme.color.foreground}),(function(n){return n.theme.color.background})),Bn=new rn.QueryClient;var Rn=function(){return Object(J.jsx)(rn.QueryClientProvider,{client:Bn,children:Object(J.jsxs)(l.a,{theme:B,children:[Object(J.jsx)(Un,{}),Object(J.jsx)(Hn,{})]})})};d.a.render(Object(J.jsx)(a.a.StrictMode,{children:Object(J.jsx)(Rn,{})}),document.getElementById("root"))}},[[105,1,2]]]);
//# sourceMappingURL=main.3483321f.chunk.js.map