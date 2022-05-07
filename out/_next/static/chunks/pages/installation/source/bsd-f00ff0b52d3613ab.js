(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[531],{5037:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/installation/source/bsd",function(){return t(3878)}])},7845:function(e,n,t){"use strict";var i=t(5893);n.Z={github:"https://github.com/wiocoin/website",docsRepositoryBase:"https://github.com/wiocoin/website/blob/master",titleSuffix:" \u2013 Wiocoin",logo:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"mr-2 font-extrabold hidden md:inline",children:"Wiocoin (WIO)"}),(0,i.jsx)("span",{className:"text-gray-600 font-normal hidden md:inline",children:"World is One Coin"})]}),head:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,i.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,i.jsx)("meta",{name:"description",content:"Wiocoin: the Next.js site builder"}),(0,i.jsx)("meta",{name:"og:description",content:"Wiocoin: the Next.js site builder"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://wiocoin.vercel.app/og.png"}),(0,i.jsx)("meta",{name:"twitter:site:domain",content:"wiocoin.vercel.app"}),(0,i.jsx)("meta",{name:"twitter:url",content:"https://wiocoin.vercel.app"}),(0,i.jsx)("meta",{name:"og:title",content:"Wiocoin: Next.js static site generator"}),(0,i.jsx)("meta",{name:"og:image",content:"https://wiocoin.vercel.app/og.png"}),(0,i.jsx)("meta",{name:"apple-mobile-web-app-title",content:"Wiocoin"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180x180.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-icon-192x192.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon-96x96.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,i.jsx)("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"})]}),search:!0,prevLinks:!0,nextLinks:!0,footer:!0,footerEditLink:"Edit this page on GitHub",footerText:(0,i.jsxs)(i.Fragment,{children:["MIT ",(new Date).getFullYear()," \xa9 Wiocoin."]}),unstable_faviconGlyph:"\ud83d\udc4b"}},3878:function(e,n,t){"use strict";t.r(n);t(7294);var i=t(3905),o=t(7829),a=t.n(o),r=t(3805),s=t(7845);function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=function(e){return(0,r.withSSG)(a()({filename:"C:/Users/lenovo/OneDrive/Documents/GitHub/website/pages/installation/source/bsd.mdx",route:"/installation/source/bsd",meta:{},pageMap:[{name:"get-started",route:"\\get-started"},{name:"index",route:"\\"},{name:"installation",children:[{name:"download",children:[{name:"index",route:"\\installation\\download"},{name:"macosx",route:"\\installation\\download\\macosx"},{name:"meta.json",meta:{index:"Windows 10/8/7",macosx:"MacOS",unix:"Linux/Unix X86/64"}},{name:"unix",route:"\\installation\\download\\unix"}],route:"\\installation\\download"},{name:"meta.json",meta:{source:"From Source",download:"Downloads"}},{name:"source",children:[{name:"bsd",route:"\\installation\\source\\bsd"},{name:"index",route:"\\installation\\source"},{name:"linux",route:"\\installation\\source\\linux"},{name:"meta.json",meta:{index:"Windows Build",linux:"Unix Build",osx:"Mac OS Build",bsd:"Build on OpenBSD"}},{name:"osx",route:"\\installation\\source\\osx"}],route:"\\installation\\source"}],route:"\\installation"},{name:"meta.json",meta:{index:"Introduction","get-started":"Development Process",testing:"Testing",installation:"Installation",runnig:"Running"}},{name:"running",children:[{name:"meta.json",meta:{running:"Using Wiocoind and Wiocoin-cli"}},{name:"running",route:"\\running\\running"}],route:"\\running"},{name:"testing",route:"\\testing"}]},s.Z))(e)};function d(e){var n=e.components,t=l(e,["components"]);return(0,i.mdx)(m,Object.assign({components:n},t),(0,i.mdx)("h1",null,"OpenBSD build guide"),(0,i.mdx)("p",null,"======================\r\n(updated for OpenBSD 6.4)"),(0,i.mdx)("p",null,"This guide describes how to build wiocoind and command-line utilities on OpenBSD."),(0,i.mdx)("p",null,"OpenBSD is most commonly used as a server OS, so this guide does not contain instructions for building the GUI."),(0,i.mdx)("h2",null,"Preparation"),(0,i.mdx)("p",null,"Run the following as root to install the base dependencies for building:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{className:"language-bash",parentName:"pre"},"pkg_add git gmake libevent libtool boost\r\npkg_add autoconf # (select highest version, e.g. 2.69)\r\npkg_add automake # (select highest version, e.g. 1.16)\r\npkg_add python # (select highest version, e.g. 3.6)\r\n\r\ngit clone https://github.com/wiocoin-project/wiocoin.git\n")),(0,i.mdx)("p",null,"See ",(0,i.mdx)("a",{href:"dependencies.md",parentName:"p"},"dependencies.md")," for a complete overview."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Important"),": From OpenBSD 6.2 onwards a C++11-supporting clang compiler is\r\npart of the base image, and while building it is necessary to make sure that this\r\ncompiler is used and not ancient g++ 4.2.1. This is done by appending\r\n",(0,i.mdx)("inlineCode",{parentName:"p"},"CC=cc CXX=c++")," to configuration commands. Mixing different compilers\r\nwithin the same executable will result in linker errors."),(0,i.mdx)("h3",null,"Building BerkeleyDB"),(0,i.mdx)("p",null,"BerkeleyDB is only necessary for the wallet functionality. To skip this, pass\r\n",(0,i.mdx)("inlineCode",{parentName:"p"},"--disable-wallet")," to ",(0,i.mdx)("inlineCode",{parentName:"p"},"./configure")," and skip to the next section."),(0,i.mdx)("p",null,"It is recommended to use Berkeley DB 4.8. You cannot use the BerkeleyDB library\r\nfrom ports, for the same reason as boost above (g++/libstd++ incompatibility).\r\nIf you have to build it yourself, you can use ",(0,i.mdx)("a",{href:"/contrib/install_db4.sh",parentName:"p"},"the installation script included\r\nin contrib/")," like so:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{className:"language-shell",parentName:"pre"},"./contrib/install_db4.sh `pwd` CC=cc CXX=c++\n")),(0,i.mdx)("p",null,"from the root of the repository. Then set ",(0,i.mdx)("inlineCode",{parentName:"p"},"BDB_PREFIX")," for the next section:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{className:"language-shell",parentName:"pre"},'export BDB_PREFIX="$PWD/db4"\n')),(0,i.mdx)("h3",null,"Building Wiocoin Core"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Important"),": use ",(0,i.mdx)("inlineCode",{parentName:"p"},"gmake"),", not ",(0,i.mdx)("inlineCode",{parentName:"p"},"make"),". The non-GNU ",(0,i.mdx)("inlineCode",{parentName:"p"},"make")," will exit with a horrible error."),(0,i.mdx)("p",null,"Preparation:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{className:"language-bash",parentName:"pre"},'\r\n# Replace this with the autoconf version that you installed. Include only\r\n# the major and minor parts of the version: use "2.69" for "autoconf-2.69p2".\r\nexport AUTOCONF_VERSION=2.69\r\n\r\n# Replace this with the automake version that you installed. Include only\r\n# the major and minor parts of the version: use "1.16" for "automake-1.16.1".\r\nexport AUTOMAKE_VERSION=1.16\r\n\r\n./autogen.sh\n')),(0,i.mdx)("p",null,"Make sure ",(0,i.mdx)("inlineCode",{parentName:"p"},"BDB_PREFIX")," is set to the appropriate path from the above steps."),(0,i.mdx)("p",null,"To configure with wallet:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{className:"language-bash",parentName:"pre"},'./configure --with-gui=no CC=cc CXX=c++ \\\r\n    BDB_LIBS="-L${BDB_PREFIX}/lib -ldb_cxx-4.8" BDB_CFLAGS="-I${BDB_PREFIX}/include"\n')),(0,i.mdx)("p",null,"To configure without wallet:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{className:"language-bash",parentName:"pre"},"./configure --disable-wallet --with-gui=no CC=cc CXX=c++\n")),(0,i.mdx)("p",null,"Build and run the tests:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{className:"language-bash",parentName:"pre"},"gmake # use -jX here for parallelism\r\ngmake check\n")),(0,i.mdx)("h2",null,"Resource limits"),(0,i.mdx)("p",null,"If the build runs into out-of-memory errors, the instructions in this section\r\nmight help."),(0,i.mdx)("p",null,"The standard ulimit restrictions in OpenBSD are very strict:"),(0,i.mdx)("p",null,"data(kbytes) 1572864"),(0,i.mdx)("p",null,"This is, unfortunately, in some cases not enough to compile some ",(0,i.mdx)("inlineCode",{parentName:"p"},".cpp")," files in the project,\r\n(see issue ",(0,i.mdx)("a",{href:"https://github.com/bitcoin/bitcoin/issues/6658",parentName:"p"},"#6658"),").\r\nIf your user is in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"staff")," group the limit can be raised with:"),(0,i.mdx)("p",null,"ulimit -d 3000000"),(0,i.mdx)("p",null,"The change will only affect the current shell and processes spawned by it. To\r\nmake the change system-wide, change ",(0,i.mdx)("inlineCode",{parentName:"p"},"datasize-cur")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"datasize-max")," in\r\n",(0,i.mdx)("inlineCode",{parentName:"p"},"/etc/login.conf"),", and reboot."))}d.isMDXComponent=!0,n.default=d}},function(e){e.O(0,[511,774,888,179],(function(){return n=5037,e(e.s=n);var n}));var n=e.O();_N_E=n}]);