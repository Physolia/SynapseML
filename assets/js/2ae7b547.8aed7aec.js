(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[7748],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return d},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):m(m({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=p(a),k=r,N=c["".concat(o,".").concat(k)]||c[k]||s[k]||i;return a?n.createElement(N,m(m({ref:e},d),{},{components:a})):n.createElement(N,m({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,m=new Array(i);m[0]=c;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:r,m[1]=l;for(var p=2;p<i;p++)m[p]=a[p];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1247:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var n=a(4034),r=a(9973),i=(a(7294),a(3905)),m=["components"],l={title:"Smart Adaptive Recommendations (SAR) Algorithm",hide_title:!0,sidebar_label:"SAR Algorithm"},o="Smart Adaptive Recommendations (SAR) Algorithm",p={unversionedId:"reference/SAR",id:"reference/SAR",isDocsHomePage:!1,title:"Smart Adaptive Recommendations (SAR) Algorithm",description:"The following document is a subset of the implemented logic, the orginal can be found here",source:"@site/docs/reference/SAR.md",sourceDirName:"reference",slug:"/reference/SAR",permalink:"/SynapseML/docs/next/reference/SAR",tags:[],version:"current",frontMatter:{title:"Smart Adaptive Recommendations (SAR) Algorithm",hide_title:!0,sidebar_label:"SAR Algorithm"},sidebar:"docs",previous:{title:"R setup",permalink:"/SynapseML/docs/next/reference/R-setup"},next:{title:"CyberML",permalink:"/SynapseML/docs/next/reference/cyber"}},d=[{value:"Input",id:"input",children:[],level:2},{value:"Collaborative Filtering",id:"collaborative-filtering",children:[],level:2},{value:"Making Recommendations",id:"making-recommendations",children:[{value:"User Recommendations",id:"user-recommendations",children:[{value:"Interpretability",id:"interpretability",children:[],level:4}],level:3}],level:2}],s={toc:d};function c(t){var e=t.components,a=(0,r.Z)(t,m);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"smart-adaptive-recommendations-sar-algorithm"},"Smart Adaptive Recommendations (SAR) Algorithm"),(0,i.kt)("p",null,"The following document is a subset of the implemented logic, the orginal can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/Product-Recommendations/blob/master/doc/sar.md"},"here")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SAR")," is a fast scalable adaptive algorithm for personalized recommendations based on user transactions history and items description. It produces easily explainable / interpretable recommendations."),(0,i.kt)("p",null,"The overall architecture of SAR is shown in the following diagram:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/AMPShWl.jpg",alt:"SAR Diagram"})),(0,i.kt)("h2",{id:"input"},"Input"),(0,i.kt)("p",null,"The input to SAR consists of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"transaction (usage) data"),(0,i.kt)("li",{parentName:"ul"},"catalog data")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Transaction data"),", also called ",(0,i.kt)("strong",{parentName:"p"},"usage data"),", contains information on interactions between users and items and has the following schema:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<User Id>,<Item Id>,<Time>")),(0,i.kt)("p",null,"Each row represents a single interaction between a user and an item, which we call a transaction. Here is an example of usage data (displayed as a table for readability, but note that it must be provided in the comma-separated format above):"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"User ID"),(0,i.kt)("th",{parentName:"tr",align:null},"Item ID"),(0,i.kt)("th",{parentName:"tr",align:null},"Time"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"User 1"),(0,i.kt)("td",{parentName:"tr",align:null},"Item 1"),(0,i.kt)("td",{parentName:"tr",align:null},"2015/06/20T10:00:00")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"User 1"),(0,i.kt)("td",{parentName:"tr",align:null},"Item 1"),(0,i.kt)("td",{parentName:"tr",align:null},"2015/06/28T11:00:00")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"User 1"),(0,i.kt)("td",{parentName:"tr",align:null},"Item 2"),(0,i.kt)("td",{parentName:"tr",align:null},"2015/08/28T11:01:00")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"User 1"),(0,i.kt)("td",{parentName:"tr",align:null},"Item 2"),(0,i.kt)("td",{parentName:"tr",align:null},"2015/08/28T12:00:01")))),(0,i.kt)("p",null,"Note that SAR does not require explicit user ratings, which are often noisy and unreliable, and is focused to work with implicit events (transactions), which are more telling of user intent."),(0,i.kt)("h2",{id:"collaborative-filtering"},"Collaborative Filtering"),(0,i.kt)("p",null,"SAR is based on a simple yet powerful collaborative filtering approach. In the heart of the algorithm is computation of two matrices:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Item-to-Item similarity matrix"),(0,i.kt)("li",{parentName:"ul"},"User-to-Item affinity matrix")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Item-to-Item similarity matrix")," contains for each pair of items a numerical value of similarity between these two items. A simple measure of item similarity is ",(0,i.kt)("em",{parentName:"p"},"co-occurrence"),", which is the number of times two items appeared in a same transaction. Let's look at the following example:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:"center"},"Item 1"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Item 2"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Item 3"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Item 4"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Item 5"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 1")),(0,i.kt)("td",{parentName:"tr",align:"center"},"5"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 2")),(0,i.kt)("td",{parentName:"tr",align:"center"},"3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 3")),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 4")),(0,i.kt)("td",{parentName:"tr",align:"center"},"3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 5")),(0,i.kt)("td",{parentName:"tr",align:"center"},"2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3")))),(0,i.kt)("p",null,"Here, for example, ",(0,i.kt)("em",{parentName:"p"},"cooccur(Item 1, Item 2) = 3"),", meaning that items 1 and 2 were together in a transaction 3 times. Note that the Item-to-Item similarity matrix is symmetric. Diagonal elements, ",(0,i.kt)("em",{parentName:"p"},"occ(Item i)"),", simply represent the number of occurrences of each item.\nThe advantage of co-occurrence is that it is very easy to update. However, it favors predictability, and the most popular items will be recommended most of the time. To alleviate that, two additional similarity measures are used: ",(0,i.kt)("em",{parentName:"p"},"lift")," and ",(0,i.kt)("em",{parentName:"p"},"Jaccard"),". They can be thought of as normalized co-occurrences."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Lift")," measures how much the co-occurrence of two items is higher than it would be by chance, i.e., what is the contribution of interaction of the two items. It is obtained as"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"lift(Item i, Item j) = cooccur(Item i, Item j) / (occ(Item i) ","*"," occ(Item j))")," ."),(0,i.kt)("p",null,"Lift favors serendipity / discoverability. For example, items 2 and 5 have the same co-occurrence with item 4, but item 5 in general occurs less frequently than item 2 and will be favored by lift."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Jaccard")," measure is defined as the number of transaction in which two items appear together divided by the number of transactions in which either of them appears:"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Jaccard(Item 1, Item 2) = cooccur(Item1, Item 2) / (occ(Item 1) + occ(Item 2) - cooccur(Item 1, Item 2))")," ."),(0,i.kt)("p",null,"Jaccard measure is a tradeoff between co-occurrence and lift and is the default in SAR."),(0,i.kt)("p",null,"If one or both items are ",(0,i.kt)("em",{parentName:"p"},"cold items"),", i.e., for which there are no transactions yet or the number of transactions is very low (below the SupportThreshold, which is configurable), their item-to-item similarity cannot be estimated from the transactions data and item features must be used. A linear learner is trained using warm items, where the features of the model are (partial) matches on corresponding features of a pair of items and the target is the computed similarity based on normalized co-occurrences of those items.\nThe model is then used to predict similarities between cold and cold/warm items."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"User-to-Item affinity matrix"),' contains for each user-item pair an affinity score of the user towards the item. Affinity score is computed as a weighted number of transactions in which the user and the item appear together, where newer transactions are weighted more than the older transactions. Also, weights are adjusted for the event type. For example, "Purchase" event may be valued 4 times more than the "Click" event. Therefore, affinity score takes into account frequency, recency and the event type of transactions in which the user appears with the item.'),(0,i.kt)("p",null,"An example User-to-Item affinity matrix is shown in the following table:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:"center"},"Item 1"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Item 2"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Item 3"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Item 4"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Item 5"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"User 1")),(0,i.kt)("td",{parentName:"tr",align:"center"},"5.00"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3.00"),(0,i.kt)("td",{parentName:"tr",align:"center"},"2.50"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"User 2")),(0,i.kt)("td",{parentName:"tr",align:"center"},"2.00"),(0,i.kt)("td",{parentName:"tr",align:"center"},"2.50"),(0,i.kt)("td",{parentName:"tr",align:"center"},"5.00"),(0,i.kt)("td",{parentName:"tr",align:"center"},"2.00"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"User 3")),(0,i.kt)("td",{parentName:"tr",align:"center"},"2.50"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"4.00"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4.50"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"User 4")),(0,i.kt)("td",{parentName:"tr",align:"center"},"5.00"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"3.00"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4.50"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"User 5")),(0,i.kt)("td",{parentName:"tr",align:"center"},"4.00"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3.00"),(0,i.kt)("td",{parentName:"tr",align:"center"},"2.00"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4.00"),(0,i.kt)("td",{parentName:"tr",align:"center"},"3.50"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"User 6")),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"2.00"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"User 7")),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"1.00"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,"Here, we can see that User 1 has the highest affinity to Item 1, followed by items 2 and 3, while this user did not have transaction involving items 4 and 5. On the other hand, User 2 has the highest affinity to Item 3, followed by Item 2 and then items 1 and 4."),(0,i.kt)("h2",{id:"making-recommendations"},"Making Recommendations"),(0,i.kt)("p",null,"SAR can produce two types of recommendations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"User recommendations"),", which recommend items to individual users based on their transaction history, and")),(0,i.kt)("h3",{id:"user-recommendations"},"User Recommendations"),(0,i.kt)("p",null,"Personalized recommendations for a single user are obtained by multiplying the Item-to-Item similarity matrix with a user affinity vector. The user affinity vector is simply a transposed row of the affinity matrix corresponding to that user. For example, User 1 affinity vector is"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"User 1 aff"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 1")),(0,i.kt)("td",{parentName:"tr",align:null},"5.00")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 2")),(0,i.kt)("td",{parentName:"tr",align:null},"3.00")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 3")),(0,i.kt)("td",{parentName:"tr",align:null},"2.50")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 4")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 5")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,"By pre-multiplying this vector with the Item-to-Item similarity matrix, User 1 recommendation scores are obtained:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:"center"},"User 1 rec"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 1")),(0,i.kt)("td",{parentName:"tr",align:"center"},"44")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 2")),(0,i.kt)("td",{parentName:"tr",align:"center"},"34.5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 3")),(0,i.kt)("td",{parentName:"tr",align:"center"},"39")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 4")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"28.5"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 5")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"15.5"))))),(0,i.kt)("p",null,"Note that the recommendation score of an item is purely based on its similarity to Item 5 in this case. Assuming that a same item is\nnot recommended again, items 1 and 4 have the highest score and would be recommended before items 2 and 3. "),(0,i.kt)("p",null,"Now, if this user adds Item 2 to the shopping cart, affinity vector (assuming weight 2 for this transaction) will be"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:"center"},"New User aff"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 1")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 2")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 3")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 4")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 5")),(0,i.kt)("td",{parentName:"tr",align:"center"},"1")))),(0,i.kt)("p",null,"resulting in recommendation scores:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:"center"},"New User rec"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 1")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"2"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 2")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"1"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 3")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"1"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 4")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"2"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 5")),(0,i.kt)("td",{parentName:"tr",align:"center"},"3")))),(0,i.kt)("p",null,"Note that the recommendation score of an item is purely based on its similarity to Item 5 in this case.\nAssuming that a same item is not recommended again, items 1 and 4 have the highest score and would be recommended before items 2 and 3.\nNow, if this user adds Item 2 to the shopping cart, affinity vector (assuming weight 2 for this transaction) will be"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:"center"},"New User aff"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 1")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 2")),(0,i.kt)("td",{parentName:"tr",align:"center"},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 3")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 4")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 5")),(0,i.kt)("td",{parentName:"tr",align:"center"},"1")))),(0,i.kt)("p",null,"resulting in recommendation scores:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:"center"},"New User rec"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 1")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"8"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 2")),(0,i.kt)("td",{parentName:"tr",align:"center"},"9")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 3")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"7"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 4")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"6"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Item 5")),(0,i.kt)("td",{parentName:"tr",align:"center"},"5")))),(0,i.kt)("p",null,"Now, Item 1 has the highest score, followed by Item 3 and then Item 4. Note that the advantage of SAR is that the updated scores are obtained without any retraining (i.e., without having to re-compute Item-to-Item similarities)."),(0,i.kt)("h4",{id:"interpretability"},"Interpretability"),(0,i.kt)("p",null,"SAR provides explainable recommendations. For example, let's look at the reasoning behind the recommendation score for User 1 and  Item 4:"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"rec(User 1, Item 4)"),(0,i.kt)("br",{parentName:"p"}),"\n","*","= ",(0,i.kt)("strong",{parentName:"p"},"sim(Item 4, Item 1) ","*"," aff(User 1, Item 1)","*"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},"+ sim(Item 4, Item 2) ","*"," aff(User 1, Item 2)"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},"+ sim(Item 4, Item 3) ","*"," aff(User 1, Item 3)"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},"+ sim(Item 4, Item 4) ","*"," aff(User 1, Item 4)"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},"+ sim(Item 4, Item 5) ","*"," aff(User 1, Item 5)"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},"= ",(0,i.kt)("strong",{parentName:"em"},"3 ","*"," 5")," + 2 ","*"," 3 + 3 ","*"," 2.5 + 4 ","*"," 0 + 2 ","*"," 0"),(0,i.kt)("br",{parentName:"p"}),"\n","*","= ",(0,i.kt)("strong",{parentName:"p"},"15")," + 6 + 7.5 + 0 + 0 = ",(0,i.kt)("strong",{parentName:"p"},"28.5","*")),(0,i.kt)("p",null,'Clearly, the first term (highlighted) has the highest contribution to the score and we can say that "Item 4 is recommended to User 1 because it is very similar to Item 1, to which User 1 has high affinity". A message like this can be displayed automatically for each recommendation.'))}c.isMDXComponent=!0}}]);