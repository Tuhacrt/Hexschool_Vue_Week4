import{_ as k,f as v,g as M,M as R,o as p,c as _,a as t,h as T,i as f,d as P,j as V,F as x,k as N,b,v as g,l as L,m as C,n as w,p as y,q as U,r as B,e as D,t as I,s as z}from"./index-0eba21e1.js";const A={props:["tempProduct"],setup(a,e){const c=v();let o=null;M(()=>{o=new R(c.value,{keyboard:!1,backdrop:!1})});const m=async()=>{const s=`https://vue3-course-api.hexschool.io/v2/api/tuhacrt/admin/product/${a.tempProduct.id}`;try{const d=await P.delete(s);alert(d.data.message),i(),e.emit("update")}catch(d){alert(d.response.data.message)}},u=()=>o==null?void 0:o.show(),i=()=>o==null?void 0:o.hide();return{delProductModalRef:c,deleteProduct:m,showModal:u,hideModal:i}}},H={id:"delProductModal",ref:"delProductModalRef",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},j={class:"modal-dialog"},F={class:"modal-content border-0"},q={class:"modal-header bg-danger text-white"},E=t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")],-1),S={class:"modal-body"},G={class:"text-danger"},J={class:"modal-footer"};function K(a,e,c,o,m,u){var i;return p(),_("div",H,[t("div",j,[t("div",F,[t("div",q,[E,t("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:e[0]||(e[0]=(...s)=>o.hideModal&&o.hideModal(...s))})]),t("div",S,[T(" 是否刪除 "),t("strong",G,f((i=c.tempProduct)==null?void 0:i.title),1),T(" 商品(刪除後將無法恢復)。 ")]),t("div",J,[t("button",{type:"button",class:"btn btn-outline-secondary",onClick:e[1]||(e[1]=(...s)=>o.hideModal&&o.hideModal(...s))}," 取消 "),t("button",{type:"button",class:"btn btn-danger",onClick:e[2]||(e[2]=(...s)=>o.deleteProduct&&o.deleteProduct(...s))}," 確認刪除 ")])])])],512)}const O=k(A,[["render",K]]),Q={props:["tempProduct","isNew"],setup(a,e){const c=v();let o=null;const m=V(a,"tempProduct");M(()=>{o=new R(c.value,{keyboard:!1,backdrop:!1})});const u=async()=>{try{const[r,l]=i(),h=await P[l](r,{data:m.value});alert(h.data.message),n(),e.emit("update")}catch(r){alert(r.response.data.message)}},i=()=>{const r="https://vue3-course-api.hexschool.io/v2/api/tuhacrt/admin/product";return a.isNew?[r,"post"]:[`${r}/${a.tempProduct.id}`,"put"]},s=()=>m.value.imagesUrl=[""],d=()=>o==null?void 0:o.show(),n=()=>o==null?void 0:o.hide();return{productModalRef:c,localTempProduct:m,updateProduct:u,createImages:s,showModal:d,hideModal:n}}},W={id:"productModal",ref:"productModalRef",class:"modal fade border-0",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},X={class:"modal-dialog modal-xl"},Y={class:"modal-content"},Z={class:"modal-header bg-dark text-white"},tt={id:"productModalLabel",class:"modal-title"},ot={class:"modal-body"},et={class:"row"},lt={key:0,class:"col-sm-4"},at={class:"mb-3"},nt=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),st=["onUpdate:modelValue"],dt=["src"],it={key:0},ct={key:1},rt={key:1},mt={class:"col-sm-8"},ut={class:"mb-3"},pt=t("label",{for:"title",class:"form-label"},"標題",-1),_t={class:"row"},ht={class:"mb-3 col-md-6"},bt=t("label",{for:"category",class:"form-label"},"分類",-1),gt={class:"mb-3 col-md-6"},ft=t("label",{for:"price",class:"form-label"},"單位",-1),vt={class:"row"},Pt={class:"mb-3 col-md-6"},wt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),yt={class:"mb-3 col-md-6"},kt=t("label",{for:"price",class:"form-label"},"售價",-1),Mt=t("hr",null,null,-1),xt={class:"mb-3"},Ct=t("label",{for:"description",class:"form-label"},"產品描述",-1),Tt={class:"mb-3"},Ut=t("label",{for:"content",class:"form-label"},"說明內容",-1),Rt={class:"mb-3"},Vt={class:"form-check"},Nt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),$t={class:"modal-footer"};function Lt(a,e,c,o,m,u){var i,s,d,n,r;return p(),_("div",W,[t("div",X,[t("div",Y,[t("div",Z,[t("h5",tt,[t("span",null,f(c.isNew?"新增產品":"編輯產品"),1)]),t("button",{type:"button",class:"btn-close",onClick:e[0]||(e[0]=(...l)=>o.hideModal&&o.hideModal(...l)),"aria-label":"Close"})]),t("div",ot,[t("div",et,[Array.isArray((i=o.localTempProduct)==null?void 0:i.imagesUrl)?(p(),_("div",lt,[(p(!0),_(x,null,N((s=o.localTempProduct)==null?void 0:s.imagesUrl,(l,h)=>(p(),_("div",{key:h},[t("div",at,[nt,b(t("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":$=>o.localTempProduct.imagesUrl[h]=$},null,8,st),[[g,o.localTempProduct.imagesUrl[h]]])]),t("img",{class:"img-fluid mb-2",src:l},null,8,dt)]))),128)),!((d=o.localTempProduct)!=null&&d.imagesUrl.length)||(r=o.localTempProduct)!=null&&r.imagesUrl[((n=o.localTempProduct)==null?void 0:n.imagesUrl.length)-1]?(p(),_("div",it,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[1]||(e[1]=l=>{var h;return(h=o.localTempProduct)==null?void 0:h.imagesUrl.push("")})}," 新增圖片 ")])):(p(),_("div",ct,[t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[2]||(e[2]=l=>{var h;return(h=o.localTempProduct)==null?void 0:h.imagesUrl.pop()})}," 刪除圖片 ")]))])):(p(),_("div",rt,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[3]||(e[3]=(...l)=>o.createImages&&o.createImages(...l))}," 新增圖片 ")])),t("div",mt,[t("div",ut,[pt,b(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[4]||(e[4]=l=>o.localTempProduct.title=l)},null,512),[[g,o.localTempProduct.title]])]),t("div",_t,[t("div",ht,[bt,b(t("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":e[5]||(e[5]=l=>o.localTempProduct.category=l)},null,512),[[g,o.localTempProduct.category]])]),t("div",gt,[ft,b(t("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[6]||(e[6]=l=>o.localTempProduct.unit=l)},null,512),[[g,o.localTempProduct.unit]])])]),t("div",vt,[t("div",Pt,[wt,b(t("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[7]||(e[7]=l=>o.localTempProduct.origin_price=l)},null,512),[[g,o.localTempProduct.origin_price]])]),t("div",yt,[kt,b(t("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[8]||(e[8]=l=>o.localTempProduct.price=l)},null,512),[[g,o.localTempProduct.price]])])]),Mt,t("div",xt,[Ct,b(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":e[9]||(e[9]=l=>o.localTempProduct.description=l)},`
                `,512),[[g,o.localTempProduct.description]])]),t("div",Tt,[Ut,b(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":e[10]||(e[10]=l=>o.localTempProduct.content=l)},`
                `,512),[[g,o.localTempProduct.content]])]),t("div",Rt,[t("div",Vt,[b(t("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[11]||(e[11]=l=>o.localTempProduct.is_enabled=l),"true-value":1,"false-value":0},null,512),[[L,o.localTempProduct.is_enabled]]),Nt])])])])]),t("div",$t,[t("button",{type:"button",class:"btn btn-outline-secondary",onClick:e[12]||(e[12]=(...l)=>o.hideModal&&o.hideModal(...l))}," 取消 "),t("button",{type:"button",class:"btn btn-primary",onClick:e[13]||(e[13]=(...l)=>o.updateProduct&&o.updateProduct(...l))}," 確認 ")])])])],512)}const Bt=k(Q,[["render",Lt]]);const Dt={props:["pagination"],setup(a,e){const c=v(),o=V(a,"pagination"),m=C(()=>o.value.total_pages*10);let u=v(1);return M(()=>{}),{paginationComponentRef:c,localPagination:o,totalItems:m,currentPage:u,onClickHandler:s=>{e.emit("changePage",s)}}}},It={class:"pagination-component",ref:"paginationComponentRef"},zt=t("span",null,[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#0d6efd",width:"14",height:"14",viewBox:"0 0 24 24"},[t("path",{d:"M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"})])],-1),At=t("span",null,[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#0d6efd",width:"14",height:"14",viewBox:"0 0 24 24"},[t("path",{d:"M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"})])],-1);function Ht(a,e,c,o,m,u){const i=w("vue-awesome-paginate");return p(),_("div",It,[y(i,{"total-items":o.totalItems,"item-per-page":10,modelValue:o.currentPage,"onUpdate:modelValue":e[0]||(e[0]=s=>o.currentPage=s),"on-click":o.onClickHandler},{"prev-button":U(()=>[zt]),"next-button":U(()=>[At]),_:1},8,["total-items","modelValue","on-click"])],512)}const jt=k(Dt,[["render",Ht]]),Ft={components:{DelProductModal:O,ProductModal:Bt,PaginationComponent:jt},setup(){const a=B({delProductModalRef:v(),productModalRef:v(),paginationComponentRef:v(),products:[],tempProduct:{imagesUrl:[]},isNew:!1,pagination:{}}),e=C(()=>a.delProductModalRef),c=C(()=>a.productModalRef);M(()=>{o("loginToken"),m()});const o=s=>{const n=`; ${document.cookie}`.split(`; ${s}=`),r=n.length===2?n.pop().split(";").shift():"";P.defaults.headers.common.Authorization=r},m=async()=>{const s="https://vue3-course-api.hexschool.io/v2/api/user/check";try{await P.post(s),u()}catch(d){alert(d.response.data.message),D.push("/")}},u=async(s=a.pagination.current_page||1)=>{const d=`https://vue3-course-api.hexschool.io/v2/api/tuhacrt/admin/products/?page=${s}`;try{const n=await P.get(d);a.products=n.data.products,a.pagination=n.data.pagination}catch(n){alert(n.response.data.message)}},i=(s,d)=>{var n,r,l;switch(s){case"new":a.tempProduct={imageUrl:[]},a.isNew=!0,(n=c.value)==null||n.showModal();break;case"edit":a.tempProduct={...d},a.isNew=!1,(r=c.value)==null||r.showModal();break;case"delete":a.tempProduct={...d},(l=e.value)==null||l.showModal();break}};return{...I(a),getProductList:u,openModal:i}}},qt={class:"container"},Et={class:"text-end mt-4"},St={class:"table mt-4"},Gt=t("thead",null,[t("tr",null,[t("th",{width:"120"},"分類"),t("th",null,"產品名稱"),t("th",{width:"120"},"原價"),t("th",{width:"120"},"售價"),t("th",{width:"100"},"是否啟用"),t("th",{width:"120"},"編輯")])],-1),Jt={class:"text-end"},Kt={class:"text-end"},Ot={class:"btn-group"},Qt=["onClick"],Wt=["onClick"],Xt={class:"d-flex justify-content-center"};function Yt(a,e,c,o,m,u){const i=w("PaginationComponent"),s=w("ProductModal"),d=w("DelProductModal");return p(),_(x,null,[t("div",qt,[t("div",Et,[t("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=n=>o.openModal("new"))}," 建立新的產品 ")]),t("table",St,[Gt,(p(!0),_(x,null,N(a.products,n=>(p(),_("tbody",{key:n.id},[t("tr",null,[t("td",null,f(n.category),1),t("td",null,f(n.title),1),t("td",Jt,f(n.origin_price),1),t("td",Kt,f(n.price),1),t("td",null,[t("span",{class:z({"text-success":n.is_enabled})},f(n.is_enabled?"啟用":"未啟用"),3)]),t("td",null,[t("div",Ot,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:r=>o.openModal("edit",n)}," 編輯 ",8,Qt),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:r=>o.openModal("delete",n)}," 刪除 ",8,Wt)])])])]))),128))]),t("div",Xt,[y(i,{pagination:a.pagination,onChangePage:o.getProductList,ref:"paginationComponentRef"},null,8,["pagination","onChangePage"])])]),y(s,{"temp-product":a.tempProduct,"is-new":a.isNew,onUpdate:o.getProductList,ref:"productModalRef"},null,8,["temp-product","is-new","onUpdate"]),y(d,{"temp-product":a.tempProduct,onUpdate:o.getProductList,ref:"delProductModalRef"},null,8,["temp-product","onUpdate"])],64)}const to=k(Ft,[["render",Yt]]);export{to as default};
