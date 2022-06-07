"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[43740],{38752:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return p}});var o=a(83117),r=a(80102),s=(a(67294),a(3905)),i=a(13904),n=["components"],l={title:"Moodle 3.1.6",tags:["Release notes","Moodle 3.1"],sidebar_position:6,moodleVersion:"3.1.6"},d=void 0,m={unversionedId:"releases/3.1/3.1.6",id:"releases/3.1/3.1.6",title:"Moodle 3.1.6",description:"Release date: 8 May 2017",source:"@site/general/releases/3.1/3.1.6.md",sourceDirName:"releases/3.1",slug:"/releases/3.1/3.1.6",permalink:"/devdocs/general/releases/3.1/3.1.6",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.1/3.1.6.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.1",permalink:"/devdocs/general/tags/moodle-3-1"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654602311,formattedLastUpdatedAt:"07/06/2022",sidebarPosition:6,frontMatter:{title:"Moodle 3.1.6",tags:["Release notes","Moodle 3.1"],sidebar_position:6,moodleVersion:"3.1.6"},sidebar:"releaseNotes",previous:{title:"Moodle 3.1.5",permalink:"/devdocs/general/releases/3.1/3.1.5"},next:{title:"Moodle 3.1.7",permalink:"/devdocs/general/releases/3.1/3.1.7"}},u={},p=[{value:"Highlights",id:"highlights",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],c={toc:p};function h(e){var t=e.components,a=(0,r.Z)(e,n);return(0,s.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,(0,o.Z)({frontMatter:l},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 8 May 2017"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.1.6%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.1.6"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57429"},"MDL-57429")," - Badges: Backpack connection now works using Moodle own e-mail verification and does not use removed Persona service"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55468"},"MDL-55468")," - Feedback module: Re-introduce export of analysis page removed in 3.1"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58461"},"MDL-58461")," - Updated URLs for MathJAX CDN"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56675"},"MDL-56675")," - Memcached MUC store: Detected an incompatible version combination with PHP 5.6 and memcached 1.4.23. Please upgrade to PHP7, or downgrade to a known working version of memcached")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=352353"},"MSA-17-0010")," External blog editing takeover"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=352354"},"MSA-17-0011")," Searching of blogs possible without capability to do it"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=352355"},"MSA-17-0012")," CSRF in number of courses displayed in the course overview block"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=352356"},"MSA-17-0013")," Missing permission check when adding forum post attachments in Web Services")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58593"},"MDL-58593")," - Performance improvement when creating automated backups"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58182"},"MDL-58182")," - Fixed absent buttons on course drag and drop dialogue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-41809"},"MDL-41809")," - Fixed bug in course cache rebuilding when access restrictions depend on grade in another activity"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55939"},"MDL-55939")," - Feedback module: Fixed bug when teachers were not able to map site feedback to courses"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58278"},"MDL-58278")," - Assignment module: save grade, feedback and rubric data before marking workflow state is released"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58166"},"MDL-58166")," - Assignment module: allow students to view submissions with marking workflow and allocated markers"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57807"},"MDL-57807")," - Database module: In advanced search when nothing is specified in the simple menu dropdown assume all values"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58556"},"MDL-58556")," - Fixed indefinite loop in LDAP authentication with forced password"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56370"},"MDL-56370")," - Feedback module: If multiple submissions are allowed in non-anonymous feedback new submission should modify the previous one and not start over"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58257"},"MDL-58257")," - Fixed bug preventing searching courses with a dash in the title"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57616"},"MDL-57616")," - Allow to drag and drop video and audio files to the course page and and insert them as labels")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.1.6"},"Notes de mise \xe0 jour de Moodle 3.1.6")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.1.6"},"Notas de Moodle 3.1.6"))))}h.isMDXComponent=!0}}]);