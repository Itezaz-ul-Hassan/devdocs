"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[77967],{41713:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return n},metadata:function(){return m},toc:function(){return u}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),l=r(13904),i=["components"],n={title:"Moodle 2.2.2",tags:["Release notes","Moodle 2.2"],sidebar_position:2,moodleVersion:"2.2.2"},d=void 0,m={unversionedId:"releases/2.2/2.2.2",id:"releases/2.2/2.2.2",title:"Moodle 2.2.2",description:"Release date: 12 March 2012",source:"@site/general/releases/2.2/2.2.2.md",sourceDirName:"releases/2.2",slug:"/releases/2.2/2.2.2",permalink:"/devdocs/general/releases/2.2/2.2.2",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.2/2.2.2.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.2",permalink:"/devdocs/general/tags/moodle-2-2"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654602311,formattedLastUpdatedAt:"07/06/2022",sidebarPosition:2,frontMatter:{title:"Moodle 2.2.2",tags:["Release notes","Moodle 2.2"],sidebar_position:2,moodleVersion:"2.2.2"},sidebar:"releaseNotes",previous:{title:"Moodle 2.2.1",permalink:"/devdocs/general/releases/2.2/2.2.1"},next:{title:"Moodle 2.2.3",permalink:"/devdocs/general/releases/2.2/2.2.3"}},p={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],h={toc:u};function k(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,a.Z)({frontMatter:n},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 12 March 2012"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"http://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.2.2%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.2.2"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27891"},"MDL-27891")," Tag flagging is now logged"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30778"},"MDL-30778")," EndUserRole metadata used in Common Cartridge import"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30771"},"MDL-30771")," Option 'Allow users to preview rubric' when using advanced grading in assignments")),(0,s.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31095"},"MDL-31095")," Quiz max grade maintained when adding and removing questions"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30031"},"MDL-30031")," Quiz Adaptive mode ignores invalid answers without penalty")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=198621"},"MSA-12-0013")," - Database activity export permission issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=198622"},"MSA-12-0014")," - Password and Web services issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=198623"},"MSA-12-0015")," - Backup and private files issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=198624"},"MSA-12-0016")," - Default repository capabilities issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=198625"},"MSA-12-0017")," - Personal information leak issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=198627"},"MSA-12-0018")," - Course information leak in Gradebook export"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=198628"},"MSA-12-0019")," - Overview report and hidden course issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=198629"},"MSA-12-0020")," - Forum subscription permission issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=198630"},"MSA-12-0021")," - Course information leak through tags"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=198631"},"MSA-12-0022")," - Security conflict in Web services"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=198632"},"MSA-12-0023")," - External enrolment plugin context check issue")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31248"},"MDL-31248")," Change to RC4 encryption is now backwards compatible - ",(0,s.kt)("strong",{parentName:"li"},"Note: all users will need to log in to set a new cookie after this update")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31213"},"MDL-31213")," Problem with new password form was fixed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29254"},"MDL-29254")," Problem adding blog entries after an update from 1.9 was resolved"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30521"},"MDL-30521")," Issue retrieving external blogs in some languages has now been fixed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31072"},"MDL-31072")," System roles can now be assigned when there are very many registered users"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31077"},"MDL-31077")," REST Web service correctly returns null when no results are discovered"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-22896"},"MDL-22896")," Forum messages with ampersands are now sent correctly by email"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27793"},"MDL-27793")," Login names now appear consistently in all themes across all languages"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26037"},"MDL-26037")," When importing in a site with lots of courses, all courses are checked"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30484"},"MDL-30484")," Regrading quiz causes essay attachments to disappear"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28364"},"MDL-28364")," Correct import formats accepted when importing questions"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31407"},"MDL-31407")," Quiz grades are saved properly when the submitter is not the user taking the quiz"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31876"},"MDL-31876"),", ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31495"},"MDL-31495")," Quiz performance improvements have been made"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31205"},"MDL-31205"),", ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31019"},"MDL-31019"),", ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26260"},"MDL-26260")," Quiz Browser Security Window fixes have been made")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.2.2"},"Notas de Moodle 2.2.2")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.2.2"},"Notes de mise \xe0 jour de Moodle 2.2.2"))))}k.isMDXComponent=!0}}]);