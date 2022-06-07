"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[35663],{27922:function(e,t,o){o.r(t),o.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var a=o(83117),r=o(80102),s=(o(67294),o(3905)),n=o(13904),l=["components"],i={title:"Moodle 2.7.2",tags:["Release notes","Moodle 2.7"],sidebar_position:2,moodleVersion:"2.7.2"},d=void 0,u={unversionedId:"releases/2.7/2.7.2",id:"releases/2.7/2.7.2",title:"Moodle 2.7.2",description:"Release date: 8 September, 2014",source:"@site/general/releases/2.7/2.7.2.md",sourceDirName:"releases/2.7",slug:"/releases/2.7/2.7.2",permalink:"/devdocs/general/releases/2.7/2.7.2",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.7/2.7.2.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.7",permalink:"/devdocs/general/tags/moodle-2-7"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654602311,formattedLastUpdatedAt:"07/06/2022",sidebarPosition:2,frontMatter:{title:"Moodle 2.7.2",tags:["Release notes","Moodle 2.7"],sidebar_position:2,moodleVersion:"2.7.2"},sidebar:"releaseNotes",previous:{title:"Moodle 2.7.1",permalink:"/devdocs/general/releases/2.7/2.7.1"},next:{title:"Moodle 2.7.3",permalink:"/devdocs/general/releases/2.7/2.7.3"}},m={},p=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],c={toc:p};function h(e){var t=e.components,o=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(n.Z,(0,a.Z)({frontMatter:i},void 0!==u?{metadata:u}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 8 September, 2014"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.7.2%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.7.2"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45780"},"MDL-45780")," - Atto now working with form change checker and quiz autosave"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46748"},"MDL-46748")," - Mathjax address that changed, that caused Atto to fail to load, has been updated in Moodle"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35984"},"MDL-35984")," - Gradebook Sum of grades shows correct total if items are hidden")),(0,s.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45724"},"MDL-45724")," - Warning given when the same memcached instance is used for both sessions and MUC"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46681"},"MDL-46681"),' - For Multiple choices questions in the quiz / question bank, the options "Clear incorrect responses" and "Show the number of correct responses" did not make sense for "One answer only" questions. It is now impossible to select that combination of options on the form.')),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=269590"},"MSA-14-0033")," URL parameter injection in CAS authentication"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=269591"},"MSA-14-0034")," Identity information revealed early in Q&A forum")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37509"},"MDL-37509"),' - Description of assignment hidden in calendar if "always show description" = NO'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46545"},"MDL-46545")," - Weekly stats now working again"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46589"},"MDL-46589")," - Automatic emails now sent after users import from CSV"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43197"},"MDL-43197")," - Parent role only sees course total and no longer individual grades"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46236"},"MDL-46236")," - Start New Attempt option is now followed if SCORM is set to appear in a popup")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.7.2"},"Notes de mise \xe0 jour de Moodle 2.7.2")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.7.2"},"Notas de Moodle 2.7.2"))))}h.isMDXComponent=!0}}]);