webpackJsonp([0],[,,,function(t,e,n){"use strict";e.a={data:()=>({scrollerHeight:3253,wrapperHieght:window.innerHeight,translateY:0,showCover:!1,ifShowTip:!1}),mounted(){this.initEvent()},methods:{initEvent(){},scroll(t){let e=this,n=document.querySelector(".scroller"),u=document.querySelector(".wrapper"),d=0,r=0;"top"==t?d=u.scrollTop:(d=-(this.wrapperHieght-u.scrollTop),r=e.wrapperHieght),n.style.transitionProperty="all",n.style.transitionDuration="0.5s",window.getComputedStyle?window.getComputedStyle(n,null):n.currentStyle,this.translateY=d,setTimeout(function(){n.style.transitionProperty="none",n.style.transitionDuration="0s",window.getComputedStyle?window.getComputedStyle(n,null):n.currentStyle,u.scrollTop=r,e.translateY=0},600)},download(){let t=window.navigator.userAgent.toLowerCase().indexOf("iphone")>=0,e=this;-1!=window.navigator.userAgent.toLowerCase().indexOf("micromessenger")?this.showCover=!0:t?(this.ifShowTip=!0,setTimeout(function(){e.ifShowTip=!1},2e3)):window.location.href="http://10.23.212.106/qf-apk/online-zhihu/1.0.0/sohu-zhihu-v1.0.0-pcxiazai.apk"}}}},function(t,e,n){"use strict";var u=r(n(1)),d=r(n(7));function r(t){return t&&t.__esModule?t:{default:t}}new u.default({render:function(t){return t(d.default)}}).$mount("#app")},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=n(3),d=n(9),r=n(14),f=!1;var s=function(t){f||n(8)},o=Object(r.a)(u.a,d.a,d.b,!1,s,null,null);o.options.__file="src\\views\\download\\download.vue",e.default=o.exports},function(t,e){},function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n.d(e,"b",function(){return d});var u=function(){var t=this,e=t.$createElement,u=t._self._c||e;return u("div",{staticClass:"wrapper"},[u("div",{staticClass:"scroller",style:{transform:"translate3d(0,"+t.translateY+"px,0)"}},[u("section",{staticClass:"part1",style:{minHeight:t.wrapperHieght+"px"}},[u("img",{attrs:{src:n(10)}}),t._v(" "),u("div",{staticClass:"space",style:{height:t.wrapperHieght-981+"px"}}),t._v(" "),u("div",{class:{txt:!0}}),t._v(" "),u("i",{staticClass:"left_top_c"}),t._v(" "),u("i",{staticClass:"left_bottom_c"}),t._v(" "),u("i",{staticClass:"right_c"}),t._v(" "),u("i",{staticClass:"download_icon_1 show",on:{click:function(e){t.download()}}}),t._v(" "),u("i",{staticClass:"down",on:{click:function(e){t.scroll("down")}}})]),t._v(" "),u("section",{staticClass:"part2"},[u("img",{attrs:{src:n(11)}}),t._v(" "),u("div",{class:{txt:!0}})]),t._v(" "),u("section",{staticClass:"part3"},[u("img",{attrs:{src:n(12)}}),t._v(" "),u("div",{class:{txt:!0}})]),t._v(" "),u("section",{staticClass:"part4"},[u("img",{attrs:{src:n(13)}}),t._v(" "),t._m(0),t._v(" "),u("i",{staticClass:"download_icon_2 show",on:{click:function(e){t.download()}}}),t._v(" "),u("i",{staticClass:"top",on:{click:function(e){t.scroll("top")}}})])]),t._v(" "),t.showCover?u("div",{staticClass:"cover_wrap",on:{click:function(e){t.showCover=!1}}}):t._e()])},d=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"txt"},[this._v("Copyright  2017 Sohu.com inc"),e("br"),this._v("搜狐公司 版权所有")])}];u._withStripped=!0},function(t,e,n){t.exports=n.p+"img/sec_01.92d47b21.png"},function(t,e,n){t.exports=n.p+"img/sec_03.916ef125.png"},function(t,e,n){t.exports=n.p+"img/sec_04.76223537.png"},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAHlCAMAAACd7ImmAAAAdVBMVEX////629L+/fz53dT++fj++/r8+/v99vT76eP53tb88/D89PL9+Pb75d754Nn86+b45N744tv87en75+D74dn749v46ub739f87+v98e748fD45+P79vX45uH6+fr37On49PP6+Pj67uv67Oj37+368O749vZ845vMAAAYWElEQVR42uzRQWrEMAwAQCGs+FC/IZBL///Eyk33tm0Pe1qYAcuxLCxB4h3kw68F8Ycxxtxrh+rjzJqrxuyLiDmyE7Oyk325RvXnylr7lB+Zs7edj9i5OWK/8GSCNcaqmm3tJruussP36nDnaqfvWdYcLbtJZQ9YM2PtJrturLvl6n2HF2Td8WeIqng4zzjOiOuI47oT1xl5fh7PXvn3zwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAF3twIAAAAAAA5P/aCKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqwo4dpTYIRGEYFRlRMoqgL3X/G63GkgmVqkSoJpyzho+fywUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4WHlRhBDqMqnrMCmKPM/gMxRj4/F2FyfPwU9CUD0fIA9lHO5S7Yvcw7NC9Lyjoo7D1yTlvlj3epn7SPK8laIcutHX79zjdu6J4nkDIXY/Uu0ruS9rfyx8buS5tHDr2vbl3J9jn3JXPNdVD+1dqv3guiueiwpDW7W7ct843dO6C55LymNXVSn3tWOm3HnMjATPBYWhGj1y71bWffPrnnIXPBdUdn21L/d0yqTew/oxk2R653Rl2/e7c5+9tO7ZFLvgOVOs+lHKfTbHvr7u27kLnku5VU0/Wl334XDuKXbBc5rYN00z1/4PueeZ4DlNWTWjY+u+qH193QXPOULbzA4fM3/nLni+2TsX1caBGAAG966vszloY7b5/x+9+LYgFyWSYq1dp8yU/sEwaF/OLujehnGoZIaZ3tJdu47s8B28DuM4unX/SNW9c2b3DuVhC349jxONhpn4SpW6w/acRrE9UPeTNczEdT+c/6k7bMyv96PYLrO7M8zEdReoO2TJp/1YdY8PM9Qd7pPf78czDevO7A675fX4H4l7SPf8UrWGnbrDlvw92rpX1xsvVQX23WFLiuiuZnfRfb26z2XHeEiQ0N0bZqg73CNW3RfqTt1hr3zRfbg4zIjuE9Qd7pdy/OTCMEPd4YfxRfchqbt/AZi6Q4J2uht3ZtiZgR+CtVRlZwZ+GEr3bR7vyakqdYer3InuPXdmYI+I7pVVXzPp4Z26Q4L8RmS+7tx3h72yju49szvsEaV75bru7LvD/RLSvRLXPb5WPVB32JBSxHaleyX2wes/yzbe+agSbIHUvTg3gN1hJvHrHQdeM8GGlCK6G3WfUHW3hhnqDjuk6m5uzYjulajuAnWHfWDoLnXP/tAkdYd9IMNMpu4TC3dmOuoOOfJ1H0zdJ26oO/vusBPKGV/3Slz3+EETdYcNKRPfqfuB32eCLPlhRp2rGmtV99eZqDvsgjIR1l3Xve2PkXGPAGzydde6T6xed4G6w0ZI3Y+ZYWZi2UHTZDizOyTI6D4m6m7q7tedvEOavO76XFV0r1h190+a2JmBy+xN91NUd9t3qTt9B2Fd3fX07ukevzVjTu/UHbZAdPfvRMbXqr0+aLJ8p+6QIKe7f676kRje3bqzYAVhfd1HU3c9zVS8vFN32AHXdR+U7kbes7fEpO5IDzZ53Y1pJqF7f8PwTt0hSb7uonts511wdNe2U3dYnyK+J+4Au7r7eafusD4lu1Z9/SQ7zXTzuqM9CO11L77uFV33k6V72PdDxxgDYfK6TyR0t06a4uNMpaPv4JPX3d+JjJ00ifDxvHfUHZLkda94uuu8e7prpO70HSb2pbvam8ksVg/UHdamFL03Mxi+v32S0L3SGdN7R99hYve6X5hm+uj0rt8z8VYbVtW9onWXcSae94roHu57J39chIeGvFi6D41198f37lLdOXiCdro79wie3xfpLr73N43v1B1C5Ouu827orn13dffzLsoL8/mGpx+Q4SGgu7tYPTXLe3Xarru4zydqYJHuC757beQ9sxmp+97p8Ya9G2iseyWouzHOuL7rwLt1Z7qHnO7F0d2fZuLTu5CqO69B4FbdX4p50uTvzfhv+PT0LlzJu1N3zl2hle4VU/eK0l353kfzroW36k7eoa3u8d8k8/beFy5XqTto8rq/GFvvSnfz4ow/vfu+i+qdW3fe+sFy3Yule2Wx7v74rpmfLFF3aKT7Q0R3a3pXvj/NsHT35/cad/IOa+huvFitBBerT9Y4E8/7zHDqDo10V3lXuofe8KV89/dntN685IaU7tp30b1i6l7xdde++4En7tBMd+v7G8bJajzvovuj6bsOPHWHdro/nHWf773rxar5RPstvvcuwvu6674zu0N73QNfJKiI7urijPqiWHB6NxJP3qGJ7hOie+AWsDHOeLr31+tuC0/doaHuZt7z03tv973SecIrvfkKE2TrHtddjTPh6f1RBT6kO3GHBrobR02O7vGzptjhqqs8dYemutvTu/ZdX4wU3/N915B3WEN3fbTq6i6rVVv3avyCvjO8/2PvzpachqEggEKgXDADYd8mCyEB/v8T0U07bpm2JSUeeOp2CNvrqa6ra2OcRXnac385cKf3Anf1ruOMbmd0nhHwTXG9OzdzD+/TyxnlrvV+JPf6dkbnGQXfGLe7s4C7LmfavB/1sIq0nFY74d7sHbpN3FnW7rPTjI4z4H4sPCl2X+Le3T7P0Hz69mDjXM39ZYF7fZxhvSt3elfw3c3eh3bve97QnUbuXM7o8F4+rZ4S92P5pQT3F+4Ez3Jnv3fdVeCfDL/oUOrodqt3ytyfKndEuIv3U3BHves4Q+6leaajd4JvbHf4hnhXvNPAPbBzF3kLd3if7/f0aTyudiK+Wu5R7aj3DpfBO0XuT4U7xIt3nd5PpxPGmTJ3etd6H88z9N5a7mj39AXtfl2kU+H+tLScoXdyj2Tcw7s8KUbvkdl65zxD8B29twfW48txZrlHpriz3j+NuAM8uZ/IPULuEeWud5s40FA8yJffDRwfWUnau1PnHhHu0u+z3GWcEe+F9XsH8Sz4wXu3KgZ/zd8k6dbutHOHd4zvxWUkh/c3wR39Xqj36fF9PNCQO1NZu3eja7XyJtK5hvuz6XYvPSk21PtR6z0y6b3yboIqeOxgBunDH6467yKdZu4t/2pVuWP3Du56c7XmnQNN1buKx8+8Vubu1LhzGdn6n3noOMN+1/cSkPuW3GX/PlvwuPqI8HHD+1aT08I90sBd613HmTnu9wXuXfygdh3hgT6HT+e5+s6Ld6fMHfNM8Q1Lyp3jDL3Xj6sEr/t3rXd0O76Z7vxHTyabfuX7qs4V3F+WuKv3fPmeItwjY+7bEnjdRyLjdsdNVHxw4aAaP7yKdFq4I1zOrKfr/XXZe2U7U5jfu/wGq4rPV+xo9/jQ+uXyJtJp587xfX3x/rHy3Lt6/9ZnzvtWuDPdBPfgzW5Hu3fdGT4aPj/FmrtT5A7vnGeEu7xiSU6r4E7vs3dXA/w2ZWaawTxD8CQP6Gx3HlW5gPd9Ved67pxmkCtOq+z3r7PHVXpX8JWBZtzuXQqon7/8CLDTzJ2nVU7vs9wVPLjn4zsi3MM7wM/tI+lduOftDvphva94LCU9vDvN3EFep/eG8Z03m+S8Ou1dwUO8gBfysqgZtbuHGecq7pfpHd4rbyUAeHon91G9yzwj3glenwhm2O4X8sk3vhCfVZ06d3rnW2eEOyLcx97JvTC+q/cf9C4n1oZ273xWdW7jrstIqffScZXcFTy5i/fnP9LFcSYreJ1outx6jx3xWdWpcNftDE+rJe/KPQLuso2Ugid3zjMAj8xyD+b4QD6Qe3Z3buSup1X1/gLe5d6qbGd+zXjfyn4m6h0d33EHLyt4qmfNs9739u5UuDPDPDPjvVzvBJ/1+69fV8zvqPd9Ciaaee6rAXyEw7u1O1dx19Nq/SV69C79/qvFO8Wf230f5DvsIylewEdwUh3iaca5gfszLiOpXbjPPyvGhwl+Fbxjnpka4Pfpgl/1ruZB3u3uVLkXx/c1vYP7pybvyr19nvlxHmn2Ka+6fcdMa0e/o9fd7s613J8Kd3oP7p9G3KfWMydO7+Cee9fHxaTgAzz6PQaaSlYU37e7F5FOI3d57UzCzuMquJe2kfl7xfrk3JG5xwl0gN/HabUhq2ys8TTj3MS99643V8ld+x3c837/pfVeA5+sc0VTJ4915DDZmLtzG/fwPj6uvv37tDrV7yPv4C7HVWR2PxP93h9Zf3RNgXUPM86V3DG+w3sPvv4O7M/yZoIUem/dzxA8TqwYaZB9XCXsbnfnRu7wrv0+9r7jdka4R8BdvJP7nPdLu8t59XkR/Mqzu1PhrgF39rty13/Z9Plzz70HX+DedL/p1XOIR8En9IVu91HVWcg9H2dm6z2yG8CTe4CH9yPAF86r5K4Ff/YewUSDkaYUz+7ObdzpfR0h99nx/bPcbQL3ondy1/NqeGe7B/VgP93yLnfnVu7pk3snd+33TbrY7+OHgfW4Ou19y+TeUfARiEfDu92dJdzr4/s6Qu7a7+r9/TnkLuDvM/DKHcH8njd8ZI+43Z1H5a7eP8mjkX3Bi/f3Ve/KHd5HBR/p7zeFeHCPaQbcLyOO291Zzp3eOc8od53fCf74vjbPkDuTecdD8Gz3gI6Qfp+92915JO6cZ5Axd4zvBM/1O+Z3cv8m3AFeM7rDur+IR6CeDb+PD7J/4jgLuIt3PgrMdid3DDSnlDH38n5Guf84p3+A5gfm99x8gHe7O4/GXb3P/MPV3Zj7Z/23TeCu4KvcGTAfhcWe1Puo6izlTu/gvr54f8sn35EX2e2mBP508X6SxwnuFDzEV8jvNWAe397MOLdz5ziT3V0N7updx5kI+h3c6Z3gH4l7fHB5mHFqqWpnv5N7eId4eh9vZ9LndPm3TSd650BzDfca+Zz63tqdMvf6PMN+B/eh4N++zb1vcu/DP/ag9yO5343Oq3cEr2nivucI77W7U+be7n0t3Gf6Pc3vb1Dw9J6ix9X6gmZb4c6Davq195DOcu6RCe70zn7n9l28Rwr3V7fxpdwlU9yHmvcw49zIXb2vv+Tc3719dwG/+6AFf7YO8McsA3aZ32e4b1vmd4j37O7czF29r9P43ie4vwvu8P6B/Y7le0pY7/tduEd66+k6cHwX8DLRTGnHl4+qzlLu8I5gPUPu7He2O8Gj3xGC12nmkD73cSHTA82rpnb3A2LOUu70zvH9XQIP7qN+34A7hpn0Q7hPgn9IHf+wZKCBeC9mnMfnfgFP7pl3cOd6ZgB/PKn3yJn7Q2p4FPzhcJhcwP9FXqVjL+PFjLOIO+f34P6S3hP4yNtzZBtJ8C39/nA5sAb4iHBv2r/vvZhx/gN3gt+NHgZ+U+eu7R7fk+0+nt813kM6t3En+Lhm5pl3yMX7jo/PADv27yem4D2Jf7h/OKDht/1Vut00OdN4dHcKqWsH97zgL96D+5reOdBsRo8Dg3t5fg/t6awaSxqdZgh+FOXuWcZ5rHZHlHvuHdxz8NhHTnM/jrljoMkGeGn3OnefVJ2buDPKfQAf3NnvOfhNzj0faJQ7vIf4uxQM8Ocvt7vz/7nrOhLckQt3FvwHhNzPKZ5XWfCHuwd4j3LHdcX63aO7s7zd85urHN+VO/IB4Dm996mcVzG+px+xkcwneICneI1nGecftbv2O9czyC64i/fTZL/r+P4QjxTEfgb7yL+xm7vzr7lLu4/7nd77fEDIvc80dz2vot3vZ9v9d0rO3aO7s4i7ZuDee18TvPb7bkfwG3CHdwVP7Olzh3aPBTzOqwSftfs2YR9x9+juPCZ3bmfIfU3ua+EO8JuN9PvnWfAPWZL5AM95ZtzwaHeK9yzjLOFeX86g39c6v5M73h0Z7U7vrdwPdyh3BNiZJB3iGc8yzgLuGnKnd1ifGuB78MEd3ovzu4qP8T0S7X6/5UKS7R7aGc8yziLuGvWecZ8r+MQ95cL9xPm9yP2QPuj3WrsznmWcR2x3gBfvyp3gN7v09Du5ZwX/vTzPAHye8exO7YxnGWcB99JAU+X+IbgH+A24T43vGfifwv3ukLiPxP9mJr17lnEWcdeCl+MqxUu7I4FdxnfhLu2Ogr8/jDLGjm/Gs4yzkLuKV/Dz3JHee1wtTxMQe/rk04z0+4+4sniWcR5r786n38v9ruI3CLgjpccJ8m0kxJfbnfEs4/xp7wx0m4bBIFxtIAaFqgMWYKPzmLK+/yMSc1rO0cVp0BrHle5Lt73Ap9P5/53uzOme1V19/8Y+A6g7hQ/PoH1+aaXRQPZU96f4ZEq8u4w5o+7XUt/BLiEb74DjSMZ70HSn7Z9EeEAeo+zHP49/PJcxC6T7SH1PGU5n9kPdtc4Elpm2Fz4tNE+a8FLg4fzGmGV0B3ndAXQf1Jkbqe8UXt/1wO/tRL4/dk+0/fHoLmPOeGdGdJd8Z51JdQfUnQEv66b2paXuYKvTmdFGc/TQ3SyZ7tR9R9+1vWeOq9w3BRT4tiOKzoUThafyOoxEm/EFAnP2OzOqe092GkndQfOQuR3ZAgrPPpPt7n/41+Fulk93vN6k2yb4DqA7Ed1juoc24aVt02Hkv0bzSROeuLmbBdZM07oD1T0iukf62wQhIN8J033iuMpw9xTSFE53wG+eyfYZXTeFzvd24Ltsm7Lb1fjxFNIssmZS3XPTmTu5PTOt+zOEp+4krzuMd7ibJdOdqO6a7j1TumM6Q+EH6R7J6+4Vkymhuw7fqTvjXfvMiXRX4SeHkW7upsSaiemO+i7DSHLInVd73aPxEdF9vNB4LGNWSHedvuswUnVv0oSn7kHqu7zLR9+fHO6m1JpJ833X+07dZdtE4QlcR7qHWel+TNdNHsuYIulOhsLf9ojuhyTdVXdM32E8kHSXcPdC1RRaM5FX2am7+C7jSOreSLpnE56yP8XHzd0US3cidWa0z4B8n0G+a7rrugmmPzncTXnddfx+u9N8lwKvumO7OmfbFF13uJvCR9X8tqlnXPcGvqvuHSfT/ciI3xhTYO4+X/eZ4xnShjnTmfh4CGkqKDOqeySre2ioenxSJN1T4T2ENLXpfpvVXeo70z13lyD+ou4+p5q1dAeqO5FhJEnTPUi6w3Wofg/Z48fnVLPI3H3uUVVnkfnpDONdy3t2OJMO331ONWulO5Eyk9EdqO7tMN27RxK+w1XG1KO7xDt113wH+faOTy888Mjd1KN7hxxWZbfaJOlO3dHeEyh7fFxlTCVz98guPtnpzH7OblX7u6b7xpiq0n1H28kJ3TXgNd0jXjCZ1S8R9OkO2N2hvJxW2d51OJNN9+6Pq4ypLd0Z8Gm8H+LDu++Zo2o23fHYdrPefXdNd+rOdAcHmb7PTvdees8gTcXpnoze6Xu2v2u646HvLu6mwu7OMgPfJd1R3iF8GFwmwEPSdPfE3dSd7jT+IMPIzGUC7e/Axd3UOHfP6A7SdIfvAReB04Afyh5/fEw19af7Xt700HRHnTmZ7t4vmap0z6f77Wub2Y+le/ww3Qfd/b77AA9lTAHdr9/Y3af+SRnTHa7LYZXp7qGMqT/d90z34WH1EGVnuuMZ6+7Q3UMZU9uaaV66g/RrCTTdoTyKjG03l5Lu7O7DmwR9ge/yPTz00xlJ94C5jF/FNpfQ3TmZoeuRWGZy/Z3S34fu6aT/vTHm8tI96r6n7xjPBAgf0kLTotNE371eMlXqfqK7H+D7RLo3w3CH7a1tNxeyVd1Lumt373ig7ZT9X3MPznZzkem+P0ynO3RP32pytptLuhE5t7uDdLOK9u5sN5eU7nvp7vPTPeJ5u6l1zTSd7pA909313kwbbLu5sHSXrepousc+0wkv6e57MqZe3acnM5B9tLuH0XS/9x1IU/FR9X/TXX1Pw/1+Y8xlzd1vJ+futL0JSHf67osDpu4yQ1hm5s3dQdrd322MqVr3N8zdh+nu2m7OyU19W9W0u/u1VHNWttfzj6kl7syE5AJw+3ljzFl5f1fZjch+rdq6yJjz87Vwd4fs2e7e/bjImOV4d1d0MpPfqna8TiLb9xtjluFrybk7ZB/v7kh3R7sRigf8wltVvrznOzJmYX59nPR8ockMfWe6e49qlufqZs25e9P77s2SKcLnL2vdmWG6+4hqirH9vu6dmeDFkinJrx8r3ZlpHlzaTXl+/lhpq7rdGFMWCq+in28yo++qBstuVuIKwpebu7vGmFXZ3i3V3fVdVR9Qzep8uFn6zgxkf/Ho0dTA1c/vS09mmq2XSqYaPtxcLzKZwTn1xS+imrq4+vTtbenOcB+m+7OPp6YsfwGj7CCEBhTnTQAAAABJRU5ErkJggg=="},function(t,e,n){"use strict";e.a=function(t,e,n,u,d,r,f,s){var o=typeof(t=t||{}).default;"object"!==o&&"function"!==o||(t=t.default);var i,a="function"==typeof t?t.options:t;e&&(a.render=e,a.staticRenderFns=n,a._compiled=!0);u&&(a.functional=!0);r&&(a._scopeId=r);f?(i=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),d&&d.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(f)},a._ssrRegister=i):d&&(i=s?function(){d.call(this,this.$root.$options.shadowRoot)}:d);if(i)if(a.functional){a._injectStyles=i;var v=a.render;a.render=function(t,e){return i.call(e),v(t,e)}}else{var A=a.beforeCreate;a.beforeCreate=A?[].concat(A,i):[i]}return{exports:t,options:a}}}],[4]);