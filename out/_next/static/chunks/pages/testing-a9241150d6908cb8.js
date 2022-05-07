(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[571],{9918:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/testing",function(){return t(7925)}])},7845:function(e,n,t){"use strict";var i=t(5893);n.Z={github:"https://github.com/wiocoin/website",docsRepositoryBase:"https://github.com/wiocoin/website/blob/master",titleSuffix:" \u2013 Wiocoin",logo:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"mr-2 font-extrabold hidden md:inline",children:"Wiocoin (WIO)"}),(0,i.jsx)("span",{className:"text-gray-600 font-normal hidden md:inline",children:"World is One Coin"})]}),head:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,i.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,i.jsx)("meta",{name:"description",content:"Wiocoin: the Next.js site builder"}),(0,i.jsx)("meta",{name:"og:description",content:"Wiocoin: the Next.js site builder"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://wiocoin.vercel.app/og.png"}),(0,i.jsx)("meta",{name:"twitter:site:domain",content:"wiocoin.vercel.app"}),(0,i.jsx)("meta",{name:"twitter:url",content:"https://wiocoin.vercel.app"}),(0,i.jsx)("meta",{name:"og:title",content:"Wiocoin: Next.js static site generator"}),(0,i.jsx)("meta",{name:"og:image",content:"https://wiocoin.vercel.app/og.png"}),(0,i.jsx)("meta",{name:"apple-mobile-web-app-title",content:"Wiocoin"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180x180.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-icon-192x192.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon-96x96.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,i.jsx)("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"})]}),search:!0,prevLinks:!0,nextLinks:!0,footer:!0,footerEditLink:"Edit this page on GitHub",footerText:(0,i.jsxs)(i.Fragment,{children:["MIT ",(new Date).getFullYear()," \xa9 Wiocoin."]}),unstable_faviconGlyph:"\ud83d\udc4b"}},7925:function(e,n,t){"use strict";t.r(n);t(7294);var i=t(3905),o=t(7829),a=t.n(o),s=t(3805),r=t(7845);function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=function(e){return(0,s.withSSG)(a()({filename:"C:/Users/lenovo/OneDrive/Documents/GitHub/website/pages/testing.mdx",route:"/testing",meta:{},pageMap:[{name:"get-started",route:"\\get-started"},{name:"index",route:"\\"},{name:"installation",children:[{name:"download",children:[{name:"index",route:"\\installation\\download"},{name:"macosx",route:"\\installation\\download\\macosx"},{name:"meta.json",meta:{index:"Windows 10/8/7",macosx:"MacOS",unix:"Linux/Unix X86/64"}},{name:"unix",route:"\\installation\\download\\unix"}],route:"\\installation\\download"},{name:"meta.json",meta:{source:"From Source",download:"Downloads"}},{name:"source",children:[{name:"bsd",route:"\\installation\\source\\bsd"},{name:"index",route:"\\installation\\source"},{name:"linux",route:"\\installation\\source\\linux"},{name:"meta.json",meta:{index:"Windows Build",linux:"Unix Build",osx:"Mac OS Build",bsd:"Build on OpenBSD"}},{name:"osx",route:"\\installation\\source\\osx"}],route:"\\installation\\source"}],route:"\\installation"},{name:"meta.json",meta:{index:"Introduction","get-started":"Development Process",testing:"Testing",installation:"Installation",runnig:"Running"}},{name:"running",children:[{name:"meta.json",meta:{running:"Using Wiocoind and Wiocoin-cli"}},{name:"running",route:"\\running\\running"}],route:"\\running"},{name:"testing",route:"\\testing"}]},r.Z))(e)};function c(e){var n=e.components,t=l(e,["components"]);return(0,i.mdx)(m,Object.assign({components:n},t),(0,i.mdx)("h1",null,"Testing"),(0,i.mdx)("hr",null),(0,i.mdx)("p",null,"Testing and code review is the bottleneck for development; we get more pull\r\nrequests than we can review and test on short notice. Please be patient and help out by testing\r\nother people's pull requests, and remember this is a security-critical project where any mistake might cost people\r\nlots of money."),(0,i.mdx)("h3",null,"Automated Testing"),(0,i.mdx)("p",null,"Developers are strongly encouraged to write ",(0,i.mdx)("a",{href:"src/test/README.md",parentName:"p"},"unit tests")," for new code, and to\r\nsubmit new unit tests for old code. Unit tests can be compiled and run\r\n(assuming they weren't disabled in configure) with: ",(0,i.mdx)("inlineCode",{parentName:"p"},"make check"),". Further details on running\r\nand extending unit tests can be found in ",(0,i.mdx)("a",{href:"/src/test/README.md",parentName:"p"},"/src/test/README.md"),"."),(0,i.mdx)("p",null,"There are also ",(0,i.mdx)("a",{href:"/test",parentName:"p"},"regression and integration tests"),", written\r\nin Python, that are run automatically on the build server.\r\nThese tests can be run (if the ",(0,i.mdx)("a",{href:"/test",parentName:"p"},"test dependencies")," are installed) with: ",(0,i.mdx)("inlineCode",{parentName:"p"},"test/functional/test_runner.py")),(0,i.mdx)("p",null,"The Travis CI system makes sure that every pull request is built for Windows, Linux, and macOS, and that unit/sanity tests are run automatically."),(0,i.mdx)("h3",null,"Manual Quality Assurance (QA) Testing"),(0,i.mdx)("p",null,"Changes should be tested by somebody other than the developer who wrote the\r\ncode. This is especially important for large or high-risk changes. It is useful\r\nto add a test plan to the pull request description if testing the changes is\r\nnot straightforward."))}c.isMDXComponent=!0,n.default=c}},function(e){e.O(0,[511,774,888,179],(function(){return n=9918,e(e.s=n);var n}));var n=e.O();_N_E=n}]);