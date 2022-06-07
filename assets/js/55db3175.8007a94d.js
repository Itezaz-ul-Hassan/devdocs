"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[28423],{82104:function(e,o,t){t.r(o),t.d(o,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var n=t(83117),a=t(80102),s=(t(67294),t(3905)),r=t(13904),l=["components"],i={title:"Moodle App Docker images",sidebar_label:"Docker images",sidebar_position:2,tags:["Moodle App","Docker"]},p=void 0,d={unversionedId:"moodleapp/development/setup/docker-images",id:"moodleapp/development/setup/docker-images",title:"Moodle App Docker images",description:"Moodle HQ provides a couple of Docker images that contain the Moodle App ready for use. You can search all the available versions in Docker Hub.",source:"@site/docs/moodleapp/development/setup/docker-images.md",sourceDirName:"moodleapp/development/setup",slug:"/moodleapp/development/setup/docker-images",permalink:"/devdocs/docs/moodleapp/development/setup/docker-images",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/development/setup/docker-images.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"},{label:"Docker",permalink:"/devdocs/docs/tags/docker"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654602311,formattedLastUpdatedAt:"07/06/2022",sidebarPosition:2,frontMatter:{title:"Moodle App Docker images",sidebar_label:"Docker images",sidebar_position:2,tags:["Moodle App","Docker"]},sidebar:"docs",previous:{title:"Using the App in a browser",permalink:"/devdocs/docs/moodleapp/development/setup/app-in-browser"},next:{title:"Troubleshooting",permalink:"/devdocs/docs/moodleapp/development/setup/troubleshooting"}},m={},u=[{value:"Running the images",id:"running-the-images",level:2},{value:"Using a specific environment",id:"using-a-specific-environment",level:2},{value:"Using old versions",id:"using-old-versions",level:2}],c={toc:u};function h(e){var o=e.components,t=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},c,t,{components:o,mdxType:"MDXLayout"}),(0,s.kt)(r.Z,(0,n.Z)({frontMatter:i},void 0!==d?{metadata:d}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://moodle.com/"},"Moodle HQ")," provides a couple of Docker images that contain the Moodle App ready for use. You can search all the available versions in ",(0,s.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/moodlehq/moodleapp/tags"},"Docker Hub"),"."),(0,s.kt)("p",null,"In order to run them, you should have ",(0,s.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," installed and we recommend that you have some basic understanding on how it works."),(0,s.kt)("h2",{id:"running-the-images"},"Running the images"),(0,s.kt)("p",null,"You can run the latest stable version of the application using the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -p 8100:80 moodlehq/moodleapp\n")),(0,s.kt)("p",null,"This will launch the container running the application and expose it locally on your port ",(0,s.kt)("strong",{parentName:"p"},"8100"),". You should be able to open it on ",(0,s.kt)("inlineCode",{parentName:"p"},"http://localhost:8100"),"."),(0,s.kt)("p",null,"If you want to use a specific version, you can do it using the tag with the release number:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -p 8100:80 moodlehq/moodleapp:4.0.0\n")),(0,s.kt)("p",null,"You can also use the development version using the ",(0,s.kt)("inlineCode",{parentName:"p"},"next")," tag:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -p 8100:80 moodlehq/moodleapp:next\n")),(0,s.kt)("h2",{id:"using-a-specific-environment"},"Using a specific environment"),(0,s.kt)("p",null,"By default, the application will be launched on a ",(0,s.kt)("strong",{parentName:"p"},"production")," environment. If you only want to use the application, that will suffice. But if you are trying to debug or run some tests it may not work."),(0,s.kt)("p",null,"You can use images on different environments by adding their short name as a suffix. The available environments are ",(0,s.kt)("strong",{parentName:"p"},"production")," (no suffix), ",(0,s.kt)("strong",{parentName:"p"},"development")," (",(0,s.kt)("inlineCode",{parentName:"p"},"-dev")," suffix) and ",(0,s.kt)("strong",{parentName:"p"},"testing")," (",(0,s.kt)("inlineCode",{parentName:"p"},"-test")," suffix):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Using the latest stable version"',title:'"Using',the:!0,latest:!0,stable:!0,'version"':!0},"docker run --rm -p 8100:80 moodlehq/moodleapp:latest-test\ndocker run --rm -p 8100:80 moodlehq/moodleapp:latest-dev\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Using a specific version"',title:'"Using',a:!0,specific:!0,'version"':!0},"docker run --rm -p 8100:80 moodlehq/moodleapp:4.0.0-test\ndocker run --rm -p 8100:80 moodlehq/moodleapp:4.0.0-dev\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Using the latest development version"',title:'"Using',the:!0,latest:!0,development:!0,'version"':!0},"docker run --rm -p 8100:80 moodlehq/moodleapp:next-test\ndocker run --rm -p 8100:80 moodlehq/moodleapp:next-dev\n")),(0,s.kt)("h2",{id:"using-old-versions"},"Using old versions"),(0,s.kt)("p",null,"Before version 3.9.5, images didn't support specifying the environment and they were always run as ",(0,s.kt)("strong",{parentName:"p"},"development"),". You will also notice that they take a while to launch and they are exposed in port 8100 instead, that's because these images contained the source code and they were run using Angular's development server. This has been improved since and images are easier to work with."),(0,s.kt)("p",null,"If you want to use an old version, you can run the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -p 8100:8100 moodlehq/moodleapp:3.6.0\n")),(0,s.kt)("p",null,"Tagged releases are only available from version 3.6.0 onwards."))}h.isMDXComponent=!0}}]);