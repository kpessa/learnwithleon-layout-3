import{j as m,R as a,s as t,F as u,f as v,a as b,b as S}from"./vendor.e6301b0b.js";const L=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function c(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=c(i);fetch(i.href,n)}};L();var k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAAhCAYAAAC/ZHdEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAI9SURBVGhD7ZiBccIwDEVDF4FRYBJgE5gEmASYBDahfsFq1cSiJLURd/W70+E0Sr5Pliynk6ZpbsEqDnzE34oDNfiO1OA7UoPvSLLh3m5le/Bkgmyf/6ZbM9+RGnxHavAdqcF3ZFDDvV6vzXq9jlffzGaz9ne5XDbz+bwdP2Jo4/PS1TCHw+HQjk+nU3uNPvabvqULKP8wi+Px2PPt2mq1it42qecwCy9dYbfbJZ/TdrlconeflD82KPNZ8cVi0Y5ZaVltsmC/37djCMEalQnvpgu8v1t1ZDs66DM3CMH/qsQu2TN/s9nEv97R2dG910X8umbhpUs2a78Q8HjnG3yYw5jML9Jwp9NpHL2W3Lrb7TaO7hVHZXUh28OWZ2b9I0YHX0oOY5JSmjKZUnjp0lRL0CsHC13+lj0qPyH1HGbhpRsW9MvnmfdbaC1tozOfTBPT0Bh1E8yNly4VV4LeilhYjU+ajtwLgYl30ohf1yy8dGmw4oPOWLSWtiwNlyxkv5Vjnj6ClaS0rrwXzudzHOUj62lHl6aeeGlK6eommzrvCzT+MYvO6Z8S+MG9UvogkPrYASYnQSAbQ5m24xS5PrKgpC4Q2LDVxat7tQFz0JXGMVTPS5P9I8uyMIHobZN6DrPw0gX6Cn0m9Zw25miR8scGZ77+8NCw6nzkPHPWHpP5HroayXL2fsYYVYA+25NURApLd1Dwc/GXIPyFd9Mt8u+FynPU4DtSg+9IDb4jyYZbeQ018x2pwXekBt+NpvkE1MTYZdcnlMMAAAAASUVORK5CYII=";const e=m.exports.jsx,d=m.exports.jsxs,M=m.exports.Fragment,h=a.createContext(),C=t.header`
	background-color: black;
	height: 40px;
	color: white;
	border: 1px solid grey;
	&.show {
		background-color: white;
		color: black;
	}
`,P=t.nav`
	max-width: 1080px;
	margin: 0 auto;
	height: 100%;
	position: relative;
`;t.ul`
	list-style: none;
	padding: 0;
`;const D=t.img`
	max-width: 100%;
	height: 70%;
	float: left;
	margin-left: 1rem;
	margin-right: 0.5rem;
`,N=t.a`
	float: left;
	height: 100%;
	display: grid;
	grid-auto-flow: column;
	width: max-content;
	place-items: center;
	border-left: 1px solid grey;
`,H=t(u)`
	margin-left: 1rem;
	margin-right: 1rem;
	font-size: 20px;
`,j=t.span`
	height: 100%;
	margin-left: 0.5rem;
	margin-right: 5rem;
	font-size: 1rem;
	font-weight: 600;
	line-height: 40px;
	vertical-align: middle;
	@media (max-width: 1000px) {
		display: none;
	}
`,U=t.ul`
	float: left;
	clear: neither;
	height: 100%;
`,f=t.li`
	display: inline-block;
	padding: 0.5rem 1rem;
	height: 100%;
	border-left: 1px solid grey;
	border-right: 1px solid grey;
	&.show {
		border-bottom: 3px solid black;
	}
`,R=t.div`
	height: 100%;
	float: right;
	display: grid;
	align-items: center;
	position: relative;
`,Y=t.input`
	display: none;
	margin-right: 0.5rem;
	height: 65%;
	font-weight: bold;
	padding: 0.5rem;
	@media (min-width: 600px) {
		display: revert;
	}
`,I=t(u)`
	padding-left: 1rem;
	padding-right: 1rem;
	@media (min-width: 600px) {
		font-size: 0.8rem;
		color: black;
		position: absolute;
		right: 0;
		top: 12px;

		/* margin-top: -50%; */
	}
`,Z=t.span`
	position: absolute;
	right: 0.5rem;
`,z=t.div`
	/* transition styles */
	display: none;
	&.show {
		display: revert;
	}
	/* transition styles */
	clear: both;
	padding: 0.5rem;
	border-bottom: 1px solid grey;
	color: black;
	font-family: Gotham, sans-serif;
	@media (min-width: 600px) and (max-width: 1000px) {
		grid-template-columns: 1fr 3fr;
		&.show {
			display: grid;
		}
	}

	@media (min-width: 1000px) {
		grid-template-columns: 1fr 5fr;
		&.show {
			display: grid;
		}
	}
`,E=t.h1`
	text-transform: uppercase;
	display: inline-block;
	font-size: 2rem;
	font-weight: 500;
	@media (max-width: 600px) {
		display: inline-block;
		width: 33%;
	}
	@media (min-width: 600px) {
		padding-top: 0;
		vertical-align: 0;
	}
`,G=t.ul`
	@media (max-width: 600px) {
		display: inline;
	}
`,O=t.li`
	vertical-align: middle;
	display: inline-block;
	width: 33%;
	font-weight: 600;
	padding: 0.5rem;

	&:hover {
		background: black;
		color: white;
	}

	@media (min-width: 1000px) {
		width: 20%;
	}
`;function F(){let l=a.useContext(h).moreLinks;return d(z,{children:[e(E,{children:e("a",{href:"#",children:"More"})}),e(G,{children:l.map(r=>e("a",{href:"#",children:e(O,{children:r},r+"_li")},r+"_a"))})]})}function V(){function l(o){document.querySelector("nav div:last-child").classList.toggle("show"),document.querySelector("header").classList.toggle("show"),document.querySelector('li[data="more"]').classList.toggle("show")}let r=a.useContext(h).mainLinks,c=a.useContext(h).remainingSpace;return d(M,{children:[r.map(o=>e("a",{href:"#",children:d(f,{children:[" ",o," "]},o)},o)),e("a",{href:"#",onClick:l,children:d(f,{data:"more",style:{position:"relative",paddingRight:c+"px"},children:["More",e(Z,{children:"\u25BC"})]})})]})}function q(){let l="Home, News, Sport, Reel, Worklife, Travel , Future, Culture, Music, TV, BBC Select, Weather, Sounds".split(", ");const[r,c]=a.useState(1),[o,i]=a.useState(0);function n(){let s=window.innerWidth>1080?1080:window.innerWidth,w=s<600?50:210,A=80,y=s<1e3?150:280,p=s-y-w,g=Math.floor(p/A),x=p-g*75;c(Math.floor(g)),i(x)}return a.useEffect(()=>(n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",()=>{})}),[]),e("div",{className:"App",children:e(h.Provider,{value:{mainLinks:l.slice(0,r-1),moreLinks:l.slice(r-1),remainingSpace:o},children:e(C,{children:d(P,{children:[e("a",{href:"#",children:e(D,{src:k,className:"v-middle"})}),d(N,{href:"#",children:[e(H,{icon:v}),e(j,{children:"Sign in"})]}),e(U,{children:e(V,{})}),d(R,{children:[e(Y,{placeholder:"Search"}),e("a",{href:"#",children:e(I,{icon:b})})]}),e(F,{})]})})})})}S.render(e(a.StrictMode,{children:e(q,{})}),document.getElementById("root"));
