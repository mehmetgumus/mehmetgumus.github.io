import{B as e}from"./esm-chunk-eaca7b99.js";import{AttachEventToElement as t,DetachEventFromElement as o,findParentBySelector as l,getDocumentScrollTop as n,getDocumentScrollLeft as r,elementIsInDOM as i,QuerySelectorFromRoot as a,EnsureElement as s,GetLeftRightBordersAndPaddingsSummaryValue as c,GetCurrentStyleSheet as u}from"./esm-dom-utils-57c82d80.js";import{D as d,R as p}from"./esm-chunk-f7983851.js";import{T as f}from"./esm-chunk-e0d053f7.js";import"./esm-chunk-6d4715b2.js";import{G as g}from"./esm-chunk-95f069f9.js";var m={GridSelectedRowCell:".dxbs-table td.table-active",ListBoxSelectedItem:".dropdown-item.active",ListBoxFocusedItem:".dropdown-item.focused"};const h="data-dxdg-draggable",v={GroupPanelHead:"gph",ColumnHead:"ch"};function H(e){if(!e.hasAttribute(h))return null;var t=e.getAttribute(h).split("|"),o=!(t.length>2)||"1"===t[2],l=t.length>1?v[t[1]]:v.ColumnHead,n=l==v.ColumnHead?parseInt(t[0]):-1,r=l==v.GroupPanelHead?parseInt(t[0]):-1,i=e.previousElementSibling;return{columnVisibleIndex:n,groupVisibleIndex:r,columnHeadType:l,canBeGrouped:o,needInsertBeforeToo:!i||!H(i)}}function y(e){return"["+h+"-id="+e+"]"}function S(e,t,o){var l,n,r;l=e,n=T(t,"clientX")-o.left,r=T(t,"clientY")-o.top,void(l.style.transform=["translate(",Math.round(n),"px, ",Math.round(r),"px)"].join(""))}function T(e,t){return void 0!==e[t]?e[t]:void 0!==e.touches?e.touches[0][t]:0}function x(i,a,s){var c=T(i,"clientX"),u=T(i,"clientY"),d=i.target,p=!1,g=function(e){var i=Math.abs(c-T(e,"clientX"))>10,g=Math.abs(u-T(e,"clientY"))>10;return(i||g)&&(p=!0,m(),function(e,i,a,s){var c=y(a),u=l(i,c);if(!u)return;var d=H(u),p=r(),g=n(),m={left:0,top:0},h=function(e,t){for(var o=[],l=y(t),n=document.querySelectorAll(l),r=!1,i=!1,a=0;a<n.length;a++){var s=n[a],c=s.getBoundingClientRect(),u=H(s),d=u.columnVisibleIndex,p=u.groupVisibleIndex,f=u.needInsertBeforeToo,g=u.columnHeadType;g==v.GroupPanelHead?r=!0:g==v.ColumnHead&&(i=!0),f&&o.push(new b(s,c.left,c.top,c.bottom,d,p,g,!0,!1)),o.push(new b(s,c.right,c.top,c.bottom,d,p,g,!1,!1))}if(r||i){if(!r){var m=document.querySelector("[data-dxdg-drag-group-panel="+t+"]");if(m){var c=m.getBoundingClientRect();o.push(new b(m,c.left,c.top,c.bottom,-1,0,v.GroupPanelHead,!1,!0,!0))}}if(!i){var h=document.querySelector("[data-dxdg-drag-head-row="+t+"]");if(h){var c=h.getBoundingClientRect();o.push(new b(h,c.right,c.top,c.bottom,0,-1,v.ColumnHead,!1,!0,!0))}}}return o}(0,a),x=function(e,t){var o=e.cloneNode(!0),l=e.getBoundingClientRect(),n={left:T(t,"clientX")-l.left,top:T(t,"clientY")-l.top};if("DIV"!=o.tagName){var r=document.createElement("DIV"),i=window.getComputedStyle(e);r.innerHTML=o.innerHTML,r.className="card "+e.className,r.style.width=e.offsetWidth+"px",r.style.height=e.offsetHeight+"px",r.style.paddingTop=i.paddingTop,r.style.paddingBottom=i.paddingBottom,r.style.paddingLeft=i.paddingLeft,r.style.paddingRight=i.paddingRight,o=r}else o.style.width=e.offsetWidth+"px",o.style.height=e.offsetHeight+"px";o.className=o.className+" dx-dragging-state",document.body.appendChild(o);var a=o.getBoundingClientRect();return{dragElement:o,offsetFromMouse:{left:a.left+n.left,top:a.top+n.top}}}(u,e),I=x.dragElement,q=x.offsetFromMouse;S(I,e,q);var N=!0,V=null,B=function(e){N&&(I.style.visibility="visible",N=!1);var t={left:q.left+m.left,top:q.top+m.top};return S(I,e,t),V=function(e,t,o,l,i){!function(e){for(var t=y(e),o=document.querySelectorAll("div."+w+t),l=0;l<o.length;l++){var n=o[l];n.parentNode.removeChild(n)}}(t);for(var a=null,s=[],c=T(l,"clientX"),u=T(l,"clientY"),d=0;d<e.length;d++){var p=e[d];if(!R(o,p)&&(p.columnHeadType!=v.GroupPanelHead||o.canBeGrouped)){var f=p.top+i.top<=u&&u<=p.bottom+i.top;if(f){if(p.wholeRowIsRarget){a=p;break}s.push({distance:Math.abs(Math.abs(p.x+i.left)-Math.abs(c)),target:p})}}}if(null==a){var g=1e6;for(var d in s)g>s[d].distance&&(g=s[d].distance,a=s[d].target)}null!=a&&!function(e,t){var o=document.createElement("DIV");o.className=w,o.dataset.dxdgDraggableId=t,o.style.top=e.top+(e.docScrollTop-n())+n()-1-1+"px",o.style.height=e.bottom-e.top+2+"px",o.style.left=e.x+(e.docScrollLeft-r())+r()+"px",o.innerHTML=["<span class='oi oi-arrow-bottom' aria-hidden='true'></span>","<div style='height:",o.style.height,"'></div>","<span class='oi oi-arrow-top' aria-hidden='true'></span>"].join(""),document.body.appendChild(o),e.mark=o}(a,t);return a}(h,a,d,e,m),e.preventDefault(),!1},C=function(){if(V){var e=d.columnHeadType==v.GroupPanelHead?d.groupVisibleIndex:d.columnVisibleIndex,t=V.columnHeadType==v.GroupPanelHead?V.groupVisibleIndex:V.columnVisibleIndex;s.invokeMethodAsync("OnGridColumnHeadDragNDrop",e,d.columnHeadType,t,V.columnHeadType,V.insertBefore),V.mark.parentNode.removeChild(V.mark)}o(document,f.touchMouseMoveEventName,B),o(document,f.touchMouseUpEventName,C),o(window,"scroll",M),I.parentNode.removeChild(I)},M=function(){m={left:p-r(),top:g-n()}};t(document,f.touchMouseMoveEventName,B),t(document,f.touchMouseUpEventName,C),t(window,"scroll",M)}(e,d,a,s)),e.preventDefault(),!1},m=function(){o(document,f.touchMouseMoveEventName,g),o(document,f.touchMouseUpEventName,m),!p&&d&&e.WebKitTouchUI&&d.click()};return t(document,f.touchMouseMoveEventName,g),t(document,f.touchMouseUpEventName,m),i.preventDefault(),!1}function b(e,t,o,l,i,a,s,c,u){this.element=e,this.x=t,this.top=o,this.bottom=l,this.columnVisibleIndex=i,this.groupVisibleIndex=a,this.columnHeadType=s,this.insertBefore=c,this.wholeRowIsRarget=u,this.docScrollTop=n(),this.docScrollLeft=r()}function R(e,t){function o(e,t){return t.groupVisibleIndex==e.groupVisibleIndex||t.groupVisibleIndex==e.groupVisibleIndex-1&&!t.insertBefore}function l(e,t){return t.columnVisibleIndex==e.columnVisibleIndex||t.columnVisibleIndex==e.columnVisibleIndex-1&&!t.insertBefore}return!(t.columnHeadType!=e.columnHeadType||e.columnHeadType!=v.GroupPanelHead||!o(e,t))||(!(t.columnHeadType!=e.columnHeadType||e.columnHeadType!=v.ColumnHead||!l(e,t))||(!(e.columnHeadType!=v.GroupPanelHead||t.columnHeadType!=v.ColumnHead||-1==e.columnVisibleIndex||!l(e,t))||!(e.columnHeadType!=v.ColumnHead||t.columnHeadType!=v.GroupPanelHead||-1==e.groupVisibleIndex||!o(e,t))))}v[1]=v.ColumnHead,v[0]=v.GroupPanelHead;var w="dxgv-target-marks";var I=200;function q(e){if(i(e)){if(!(t=function(e){var t=e.querySelector("*[id$='_LB']");t||(t=e.parentNode.querySelector("*[id$='_LB']"));t||(t=e);if(t){var o=t.querySelector(m.ListBoxSelectedItem);if(o)return o.parentNode}return null}(e)))var t=function(e){var t=null;a(e,function(o){t=e.querySelector("*"+o+" > *[id$='_LB']")}),t||a(e.parentNode,function(o){t=e.parentNode.querySelector("*"+o+" > *[id$='_LB']")});var o=t?t.querySelector(m.GridSelectedRowCell):null;return o?o.parentNode:null}(e);if(t){var o=e,l=o.scrollTop+o.clientHeight<t.offsetTop+t.offsetHeight;o.scrollTop>t.offsetTop&&(o.scrollTop=t.offsetTop),l&&(o.scrollTop=t.offsetTop-(o.clientHeight-t.offsetHeight))}}}function N(e,t,o,l,n,r){var i=e.currentTarget;V(e,t,o,i,l),i.dataset.InScrollRequest||(B(i),i.dataset.OnScrollTimerId=window.setTimeout(function(){!function(e,t,o,l,n,r,i){B(l);var a=!0;l.dataset.prevScrollTop?a=l.dataset.prevScrollTop!=l.scrollTop.toString():l.dataset.prevScrollTop=l.scrollTop;a&&o.isVirtualScrolling&&!function(e,t,o,l,n){var r=C(t),i=G(t,n),a=i.itemHeight,s=i.scrollTop,c=i.scrollBottom,u=i.scrollTopForRequest,d=i.scrollHeightForRequest,p=l.clientHeight>0&&c>o.offsetHeight+r.offsetHeight;(o.clientHeight>0&&s<o.offsetHeight||p)&&(t.dataset.InScrollRequest=!0,function(e,t,o,l,n){if(e.dxScrollCache){if(e.dxScrollCache.itemHeight===o&&e.dxScrollCache.scrollTopForRequest===l&&e.dxScrollCache.scrollHeightForRequest===n)return}else e.dxScrollCache={itemHeight:o,scrollTopForRequest:l,scrollHeightForRequest:n};t.DxRestoreScrollTop=t.scrollTop,e.invokeMethodAsync("OnGridVirtualScroll",o,l,n).then(function(t){!function(e,t){e.dotNetComponentReference=t,P(e)}(t,e)}).catch(L)}(e,t,a,u,d))}(t,l,r,i,!1);V(e,t,o,l,n)}(e,t,o,i,l,n,r)},I),window.setTimeout(function(){V(e,t,o,i,l)},0))}function V(e,t,o,l,n,r,i){o.isHorizontalScrolling&&(n.scrollLeft=l.scrollLeft)}function B(e){e.dataset.OnScrollTimerId&&(clearTimeout(e.dataset.OnScrollTimerId),delete e.dataset.OnScrollTimerId)}function C(e){var t=e.querySelector("table.dxbs-table"),o=e.parentNode.querySelector("div.dxbs-listbox > ul");return t||o}function M(e,t,o,l,n){var r=C(t),i=function(e,t){var o=E(e);return{itemHeight:o,spacerTop:t.virtualScrollingOptions.itemsAbove*o,spacerBelow:t.virtualScrollingOptions.itemsBelow*o}}(r,n);o.style.height=i.spacerTop+"px",l.style.height=i.spacerBelow+"px",function(e,t,o,l){if(e.clientHeight>t.offsetHeight)return;e.scrollTop<o.clientHeight&&(e.scrollTop=o.clientHeight+1);e.scrollTop+e.clientHeight>o.clientHeight+t.offsetHeight&&(e.scrollTop=o.clientHeight+t.offsetHeight-e.clientHeight-1)}(t,r,o)}function E(e){for(var t=function(e){var t=[];return e.dataset.tempUniqueId="tempUniqueId","TABLE"===e.tagName?t=e.parentNode.querySelectorAll("TABLE[data-temp-unique-id] > TBODY > TR"):"UL"===e.tagName&&(t=e.parentNode.querySelectorAll("ul[data-temp-unique-id] > li")),delete e.dataset.tempUniqueId,t}(e),o={},l=0;l<t.length;l++){var n=t[l];o[n.offsetHeight]=o[n.offsetHeight]?o[n.offsetHeight]+1:1}var r=0,i=0;for(var a in o)o[a]>i&&(i=o[a],r=a);return Number.parseInt(r)}function D(e){return null!==C(e)}function G(e,t){var o=300,l=300;t&&(o=0,l=0);var n=C(e),r=e.scrollTop-o;r<0&&(r=0);var i=e.scrollTop+e.clientHeight+l,a=r-o;a<0&&(a=0);var s=i-a+l;return{itemHeight:E(n),scrollTop:r,scrollBottom:i,scrollTopForRequest:a,scrollHeightForRequest:s}}function L(e){e&&e.mainElement&&F(e.mainElement)}function k(e,t){return(t.isVerticalScrolling||t.isVirtualScrolling)&&(e.clientHeight<e.scrollHeight||"scroll"==e.style.overflowY)}function A(e){for(var t=e.querySelectorAll(".btn.btn-toggle"),o=0,l=0;l<t.length;l++){var n=t[l],r=n.offsetWidth+c(n.parentNode);if(r>0){o=r;break}}var i,a=u(),s=e.getAttribute("data-dxdg-id"),d=null;return a&&(a.insertRule("[data-dxdg-id='"+s+"'] > col.dxbs-grid-cols-togglebtn { width:"+o+"px !important; }",a.cssRules.length),d=a.cssRules[a.cssRules.length-1]),i=d,function(){if(i.ownerStyleSheet){var e=i.parentStyleSheet,t=Array.prototype.indexOf.call(e.cssRules,i);t>-1&&e.deleteRule(t)}}}function P(e){var l=s(e.mainElement);if(l){var n=e.dotNetComponentReference,r=e.scrollToSelectedItemRequested,i=e.elementsStorage,a=s(i.scrollElement),c=s(i.scrollHeaderElement),u=s(i.virtualScrollSpacerTopElement),m=s(i.virtualScrollSpacerBottomElement);l=s(l),d(l);var h=null,v=null,H=null,y=null;a=s(a);var S=null;a&&(c=s(c),a.dataset.InScrollRequest=!0,e.isVirtualScrolling&&(u=s(u),m=s(m)),(e.isVirtualScrolling||e.isVerticalScrolling)&&function(e,t,o){if((o.isVerticalScrolling||o.isVirtualScrolling)&&t){var l=[t];if(k(e,o)){var n=g();if(17!==n||o.isHorizontalScrolling)for(var r=o.isHorizontalScrolling?"paddingRight":"marginRight",i=o.isHorizontalScrolling?"marginRight":"paddingRight",a=0,s=l.length;a<s;a++)l[a].style[r]="0",l[a].style[i]=n+"px";else e.style.paddingRight="",e.style.marginRight="",t.style.paddingRight="",t.style.marginRight=""}else e.style.paddingRight="0",e.style.marginRight="0",t.style.paddingRight="0",t.style.marginRight="0"}}(a,c,e),e.isVirtualScrolling&&(M(0,a,u,m,e),r?q(a):a.DxRestoreScrollTop&&(a.scrollTop=a.DxRestoreScrollTop,delete a.DxRestoreScrollTop)),S=A(l),delete a.dataset.InScrollRequest,t(a,"scroll",h=function(t){return N(t,n,e,c,u,m)}),function(e){return e.isHorizontalScrolling||e.isVerticalScrolling}(e)&&((v=function(){!function(e,t,o,l,n,r){if(t){t.dataset.InScrollRequest=!0;var i=t.style.overflowX;t.style.overflowX="hidden",t.style.width="0"}if(o){var a=o.style.overflowX;o.style.overflowX="hidden",o.style.width="0"}var s=e.clientWidth;if(t&&(s&&(t.style.width=s+"px"),t.style.overflowX=i),o){var c=k(t,r)?g():0;s&&(o.style.width=s-c+"px"),o.style.overflowX=a}t&&delete t.dataset.InScrollRequest}(l,a,c,0,0,e)})(),t(window,"resize",v)));var T=null,b=null;if(e.isColumnDragEnabled){var R=l.dataset.dxdgId;R&&((T=l.querySelector("[data-dxdg-drag-head-row='"+R+"']"))&&t(T,f.touchMouseDownEventName,H=function(e){return x(e,R,n)}),(b=l.querySelector("[data-dxdg-gp='"+R+"']"))&&t(b,f.touchMouseDownEventName,y=function(e){return x(e,R,n)}))}return p(l,function(){S&&S(),h&&o(a,"scroll",h),v&&o(window,"resize",v),a&&B(a),H&&T&&o(T,f.touchMouseDownEventName,H),y&&b&&o(b,f.touchMouseDownEventName,y)}),Promise.resolve("ok")}}function F(e){return(e=s(e))&&d(e),Promise.resolve("ok")}const X={Init:P,Dispose:F};export{F as D,G,D as H,P as I,q as S,m as a,X as g};
