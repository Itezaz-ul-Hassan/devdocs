"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[74289],{35034:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var a=o(83117),n=o(80102),i=(o(67294),o(3905)),r=o(13904),s=["components"],l={title:"Using the Moodle App in a browser",sidebar_label:"Using the App in a browser",sidebar_position:1,tags:["Moodle App"]},d=void 0,p={unversionedId:"moodleapp/development/setup/app-in-browser",id:"moodleapp/development/setup/app-in-browser",title:"Using the Moodle App in a browser",description:"Browsers are not officially supported by the application, but you can use a Chromium-based browser for development if you don't need any native functionality.",source:"@site/docs/moodleapp/development/setup/app-in-browser.md",sourceDirName:"moodleapp/development/setup",slug:"/moodleapp/development/setup/app-in-browser",permalink:"/devdocs/docs/moodleapp/development/setup/app-in-browser",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/development/setup/app-in-browser.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654602311,formattedLastUpdatedAt:"07/06/2022",sidebarPosition:1,frontMatter:{title:"Using the Moodle App in a browser",sidebar_label:"Using the App in a browser",sidebar_position:1,tags:["Moodle App"]},sidebar:"docs",previous:{title:"Setting up your environment",permalink:"/devdocs/docs/moodleapp/development/setup/"},next:{title:"Docker images",permalink:"/devdocs/docs/moodleapp/development/setup/docker-images"}},u={},m=[{value:"Differences between Chromium and Google Chrome",id:"differences-between-chromium-and-google-chrome",level:2},{value:"Advantages and disadvantages of using a browser instead of a native device",id:"advantages-and-disadvantages-of-using-a-browser-instead-of-a-native-device",level:2},{value:"Installation and configuration",id:"installation-and-configuration",level:2},{value:"Creating a shortcut",id:"creating-a-shortcut",level:3},{value:"Configuring the default browser",id:"configuring-the-default-browser",level:3},{value:"Tips &amp; tricks",id:"tips--tricks",level:2}],c={toc:m};function h(e){var t=e.components,o=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,(0,a.Z)({frontMatter:l},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,i.kt)("p",null,"Browsers are not officially supported by the application, but you can use a ",(0,i.kt)("strong",{parentName:"p"},"Chromium-based")," browser for development if you don't need any native functionality."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Notice")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please notice that it has to be a Chromium-based browser, because the application relies on the ",(0,i.kt)("a",{parentName:"p",href:"https://caniuse.com/?search=websql"},"Web SQL Database API")," which isn't supported in most browsers. This is a non-standard API, but that's not a problem because this is only used in the browser. Running on a native environment, the application relies on native APIs that are well supported."))),(0,i.kt)("h2",{id:"differences-between-chromium-and-google-chrome"},"Differences between Chromium and Google Chrome"),(0,i.kt)("p",null,'Google Chrome is the Chromium open source project built, packaged, and distributed by Google. We can say that Chromium is Google Chrome without the "Google" add-ons. For that reason, we recommend using Chromium instead of Google Chrome.'),(0,i.kt)("h2",{id:"advantages-and-disadvantages-of-using-a-browser-instead-of-a-native-device"},"Advantages and disadvantages of using a browser instead of a native device"),(0,i.kt)("p",null,"Main advantages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Faster development."),(0,i.kt)("li",{parentName:"ul"},"DOM inspector."),(0,i.kt)("li",{parentName:"ul"},"Network monitor."),(0,i.kt)("li",{parentName:"ul"},"Database inspector."),(0,i.kt)("li",{parentName:"ul"},"Emulation options.")),(0,i.kt)("p",null,"Disadvantages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can't use native functionality."),(0,i.kt)("li",{parentName:"ul"},"If you need to use Cordova plugins, you will probably need to provide a way to emulate those APIs in the browser or avoid calling them in the browser environment."),(0,i.kt)("li",{parentName:"ul"},"You will always need to test in a native device prior to a production release."),(0,i.kt)("li",{parentName:"ul"},"You will need to verify that your CSS/layout looks the same in native devices.")),(0,i.kt)("h2",{id:"installation-and-configuration"},"Installation and configuration"),(0,i.kt)("p",null,"You can install the Chromium browser by downloading it from ",(0,i.kt)("a",{parentName:"p",href:"https://www.chromium.org/getting-involved/download-chromium"},"the official download page"),"."),(0,i.kt)("p",null,"In order to run the Moodle App, we recommend that you launch the browser with a couple of arguments. These are necessary to disable some of the limitations that don't exist in the native application, and also prepare the development environment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Linux"',title:'"Linux"'},"chromium-browser --allow-file-access-from-files --disable-web-security --disable-site-isolation-trials --allow-running-insecure-content --no-referrers --unlimited-storage --auto-open-devtools-for-tabs --user-data-dir=~/.chromium-dev-data\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Windows"',title:'"Windows"'},"start chrome.exe --allow-file-access-from-files --disable-web-security --disable-site-isolation-trials --allow-running-insecure-content --no-referrers --unlimited-storage --auto-open-devtools-for-tabs --user-data-dir=~/.chromium-dev-data\n")),(0,i.kt)("p",null,"If you are using other operative system, check out ",(0,i.kt)("a",{parentName:"p",href:"https://www.chromium.org/developers/how-tos/run-chromium-with-flags"},"how to run chromium with flags"),' in other environments.\nDepending on the version of your browser, you may get a warning message saying "You are using an unsupported command-line flag". This is expected and can safely be ignored (for development).'),(0,i.kt)("p",null,"For more info about the user data dir, please read ",(0,i.kt)("a",{parentName:"p",href:"https://chromium.googlesource.com/chromium/src/+/master/docs/user_data_dir.md"},"the official documentation"),"."),(0,i.kt)("h3",{id:"creating-a-shortcut"},"Creating a shortcut"),(0,i.kt)("p",null,"We strongly recommend that you create a new shortcut and use it only for working with the app during development. In Linux, and possibly other operating systems, these arguments only work if you don't already have the same browser running. Hence if you use Google Chrome as your normal browser, you can use Chromium for development and vice versa."),(0,i.kt)("p",null,"In Linux, you can create such a shortcut by writing a script that is globally available. For example, you can create the following file in ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/unsafe-chromium"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"chromium-browser --allow-file-access-from-files --disable-web-security --disable-site-isolation-trials --allow-running-insecure-content --no-referrers --unlimited-storage --auto-open-devtools-for-tabs --user-data-dir=/home/{username}/.chromium-dev-data $@\n")),(0,i.kt)("p",null,"Notice that this time we shouldn't use ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.chromium-dev-data")," to describe the user data dir. That's because this file can be called from a different shell, and ",(0,i.kt)("inlineCode",{parentName:"p"},"~"),' could not be interpreted properly (this may end up creating a folder called "~" in your project folder, and you probably don\'t want that).'),(0,i.kt)("p",null,"Also, remember to make this file executable by running ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo chmod +x /usr/local/bin/unsafe-chromium"),"."),(0,i.kt)("p",null,"For convenience, you can also define an application launch that calls this script."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Help wanted!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"These instructions have only been tested in Linux. If you are using a different operative system, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/moodle/devdocs/issues/76"},"let us know")," how it went (or just ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/development/setup/app-in-browser.md"},"edit this page"),"!)."))),(0,i.kt)("h3",{id:"configuring-the-default-browser"},"Configuring the default browser"),(0,i.kt)("p",null,"When you launch the application by running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start"),", this will open a tab on your default browser. You can close this tab and open the url with your development browser, but if you want to do it automatically you can override the default browser by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"MOODLE_APP_BROWSER")," environment variable."),(0,i.kt)("p",null,"For example, if you have created a shortcut like we mentioned in the previous section, you can just add the following to your ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export MOODLE_APP_BROWSER=unsafe-chromium\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Help wanted!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"These instructions have only been tested in Linux. If you are using a different operative system, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/moodle/devdocs/issues/76"},"let us know")," how it went (or just ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/development/setup/app-in-browser.md"},"edit this page"),"!)."))),(0,i.kt)("h2",{id:"tips--tricks"},"Tips & tricks"),(0,i.kt)("p",null,"Once you have everything set up, you should be able to develop like you would with any other front-end application. You can learn about the development tools you have available by reading the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.chrome.com/devtools/index"},"Chrome DevTools documentation"),"."),(0,i.kt)("p",null,"Here's some things we find useful to work with the Moodle App in particular:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.chrome.com/docs/devtools/device-mode/"},"Device Mode")," \u2014 You can use this feature to make the browser behave more like a native device. This will work best if you ",(0,i.kt)("a",{parentName:"li",href:"https://developer.chrome.com/docs/devtools/customize/placement/"},"dock the development panel")," to one side (left or right), but you may want to do something else in your environment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.chrome.com/docs/devtools/console/"},"Console Panel")," \u2014 This panel is essential for any developer, since it will show you any errors or custom messages that you've written. You can also use the search box to filter messages seeing everything is too overwhelming. You will also see specific logs from the Moodle App, but keep in mind that they are not used in production environment. If you are not running the application yourself, you can inspect the environment by opening the /assets/env.json url."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.chrome.com/docs/devtools/dom/"},"Elements Panel")," \u2014 This panel is also essential for any developer, you'll be able to inspect and modify the HTML that is actually being rendered."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.chrome.com/docs/devtools/network/"},"Network Panel")," \u2014 This panel can be useful if you are trying to see how the Moodle App communicates with a Moodle site. You may also want to ",(0,i.kt)("a",{parentName:"li",href:"https://developer.chrome.com/docs/devtools/network/reference/#disable-cache"},"disable the cache")," in order to have the same behaviour after each reload. However, keep in mind that this only disables the browser cache, any Web Service calls that are cached by the Moodle App will remain cached. You can learn more about network requests in the ",(0,i.kt)("a",{parentName:"li",href:"../network-debug"},"Debugging network requests in the Moodle App")," page."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.chrome.com/docs/devtools/storage/websql/"},"WebSQL Inspector")," \u2014 As mentioned before, WebSQL is a non-standard API. But since the Moodle App uses it for development, this inspector may come in handy. Keep in mind that the native application does not use WebSQL, so it is possible that you see some different behaviour in a native device. But it should be reliable for the most part.")))}h.isMDXComponent=!0}}]);