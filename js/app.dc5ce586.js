(function(e){function a(a){for(var i,o,r=a[0],s=a[1],l=a[2],d=0,u=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(t,o)&&t[o]&&u.push(t[o][0]),t[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);f&&f(a);while(u.length)u.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,a=0;a<c.length;a++){for(var n=c[a],i=!0,o=1;o<n.length;o++){var r=n[o];0!==t[r]&&(i=!1)}i&&(c.splice(a--,1),e=s(s.s=n[0]))}return e}var i={},o={app:0},t={app:0},c=[];function r(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"8d9a1836","chunk-0206bfa0":"aceaceeb","chunk-0c047e41":"b1d36135","chunk-13a6037e":"77e10910","chunk-18f95272":"c3fff06b","chunk-25b302c8":"50a4e4be","chunk-26fc7596":"3f2b003f","chunk-2c06842c":"cf0b8708","chunk-2d0e96ec":"2bc718f4","chunk-2d208d90":"41e45e01","chunk-2d21d0e2":"7d34f04e","chunk-2d22c123":"697a0c8d","chunk-2d2747e2":"c34510a6","chunk-2e80bb9a":"0cd264fe","chunk-319206de":"df48974a","chunk-32334cb6":"fc337bc5","chunk-3c57cd7b":"2b231186","chunk-3d6834f6":"cccf97c9","chunk-4cdd78c0":"15a5e443","chunk-4f2d402a":"8c79c008","chunk-4fde0a08":"438ec1de","chunk-515a8379":"1bbac084","chunk-53ccb27e":"8500f303","chunk-55d286b8":"998455ee","chunk-59974754":"9815f936","chunk-6e1e538a":"e450b8d5","chunk-766a929b":"f8359263","chunk-c796899c":"1a79056f","chunk-e8a7823a":"8f0d5576","chunk-f2df7d2c":"1fc5754b","chunk-fde47172":"2cf37c35",comple:"0676ab30",creditos:"0ce4db30",glosario:"9bf31c7e",intro:"33fb2a0a",referencias:"14006383",sintesis:"c3a994f6",tema1:"0d9394a8",tema2:"75196d0b",tema3:"5a48d98e",tema4:"d0278689",tema5:"909ff3a1"}[e]+".js"}function s(a){if(i[a])return i[a].exports;var n=i[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1,tema2:1};o[e]?a.push(o[e]):0!==o[e]&&n[e]&&a.push(o[e]=new Promise((function(a,n){for(var i="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-3c57cd7b":"3babef71","chunk-3d6834f6":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-4fde0a08":"14d1f3e8","chunk-515a8379":"49b30c0e","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"0a5a62fc","chunk-6e1e538a":"126808df","chunk-766a929b":"583a6d75","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"290e24b4",creditos:"f1a429ec",glosario:"fbc2775d",intro:"31d6cfe0",referencias:"19059567",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"cecb99b6",tema3:"31d6cfe0",tema4:"31d6cfe0",tema5:"31d6cfe0"}[e]+".css",t=s.p+i,c=document.getElementsByTagName("link"),r=0;r<c.length;r++){var l=c[r],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===i||d===t))return a()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){l=u[r],d=l.getAttribute("data-href");if(d===i||d===t)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var i=a&&a.target&&a.target.src||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=i,delete o[e],f.parentNode.removeChild(f),n(c)},f.href=t;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){o[e]=0})));var i=t[e];if(0!==i)if(i)a.push(i[2]);else{var c=new Promise((function(a,n){i=t[e]=[a,n]}));a.push(i[2]=c);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=r(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(f);var n=t[e];if(0!==n){if(n){var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",u.name="ChunkLoadError",u.type=i,u.request=o,n[1](u)}t[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=i,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)s.d(n,i,function(a){return e[a]}.bind(null,i));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var f=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"4b6a":function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAACUCAYAAACeJ3mSAAAABHNCSVQICAgIfAhkiAAAASFJREFUaEPt18ENgjAYBWB+NHECh/BIe3cIl3AGE4PO4BAu4Vl60yVcAkSqB7n2/UlJQ5rH+fG3+SB9qZyc9UX04zvhIKBII/yb0YhGk51HpsWY4YT30krskPF9DsKSMzQ6PKo13ng4sRpKz4JEijz8kVBR0IhGkxXkRINqZ174q4QTwqZVEc6wIFX7VoTk6MxGkQtHlv3ApkWKbBEkxKbFQjRKbtTYp2bNYEaKLucWifb5D8jZ6HyvtrFOflGyaSEimxYS8U6LiWiU3MjcFEuCiLBpFYhZN60zOwVBMDLI8OGdFimyaZEQ72tYiEapjerGXjVrhjK/Bnnn3CKxPuP7ORvVjdnHOpUibFqIyKaFRLyvYSIaJTaqnb0olgQR338BSePvfgqrRggAAAAASUVORK5CYII="},"4c29":function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAACUCAYAAACeJ3mSAAAABHNCSVQICAgIfAhkiAAAATRJREFUaEPtmcENgjAUhvt0BofwCmc6hEu4BToAxoQhPENivHiHo0u4BGipmOi1f5MSQpqfhNvPa/Px2o9QqfXJqsDLWtsLCzkpkhFuMjIio8m2kSorOozTnRCluvGe5mIhzHGBjG5ZucETdyfMurcUpJsRN3/cZWRERpMJcspCT/xeQMLStD4MFyhIn2n7ZOSqz1ufoCtjjAw0LU0b2kc0LSZIRnMzqnTxwGMi00ofs0WC+fwKxMyo1oUO5SRG0bRoqfHHOGwzWgQiUmQ0N6Px7/EdjwkSQtP6MIzZtMc22fkwcGUGGYwc2jT4nFap8ZyWhZC0yQh2LPsIIuJaw4i+jPImvXgknZHRIK+YLRLK5/98zIzyJtmHclqJ0LQQIjd/iIibP0ZERjMzytu09BgSfR6/P+G9eOA95qTIAAAAAElFTkSuQmCC"},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("68f3"),o=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},t=[],c={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},r=c,s=n("2877"),l=Object(s["a"])(r,o,t,!1,null,null,null),d=l.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),f=n("8c4f"),m=n("ae58"),p=n("7e58");u["a"].use(f["a"]);var b=new f["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return n.e("tema5").then(n.bind(null,"5029"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"ef72"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),A=b,g=n("1c2c"),h=(n("a3a0"),{global:{componenteFormativo:"Evaluación y selección de candidatos de manera idónea",descripcionCurso:"Durante este componente el aprendiz desarrollará la capacidad para realizar un proceso de selección de personal útil, eficaz y correcto; iniciando por conocer el origen, su objetivo, los diferentes tipos de pruebas existentes y sus diferentes fases donde se encuentran el estudio de seguridad y al examen ocupacional. Con estas etapas concluidas llegará a realizar la selección del candidato idóneo.",imagenBannerPrincipal:n("74b5"),fondoBannerPrincipal:n("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("c9c7")},{clases:["banner-principal-decorativo-2"],imagen:n("4c29")},{clases:["banner-principal-decorativo-3"],imagen:n("cd2b")},{clases:["banner-principal-decorativo-4"],imagen:n("bbbd")},{clases:["banner-principal-decorativo-5"],imagen:n("ffcc")},{clases:["banner-principal-decorativo-6"],imagen:n("4b6a")},{clases:["banner-principal-decorativo-7"],imagen:n("9089")},{clases:["banner-principal-decorativo-8"],imagen:n("6ed3")},{clases:["banner-principal-decorativo-9"],imagen:n("8102")},{clases:["banner-principal-decorativo-11"],imagen:n("7b80")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Selección de candidatos",desarrolloContenidos:!0},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Evaluación del candidato",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Pruebas y tipos de pruebas",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Retrospectivas y prospectiva",hash:"t_2_2"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Entrevistas de selección",desarrolloContenidos:!0},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Validación de información de candidatos",desarrolloContenidos:!0},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Elaboración de <i>ranking</i> de candidatos y presentación de informes",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Entrevistas de selección",referencia:"Aamodt, M. (2010). Psicología. <i>industrial/organizacional.</i> Cengage Learning Editores.",tipo:"Documento",link:"http://repositorio.uasb.edu.bo:8080/bitstream/54000/1297/1/Aamodt-%20Psicolog%C3%ADa%20organizacional.pdf"},{tema:"Evaluación del candidato",referencia:"Factorial HR España. <i>¿Cómo atraer talento en entornos competitivos?</i> [video]. YouTube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=cTNQvp_gibM"},{tema:"Evaluación del candidato",referencia:"Grupo Adecco (2021). <i>La Cuarta Revolución Industrial, una nueva era de las competencias laborales</i> [Web log post].",tipo:"Blog",link:"https://mundoadecco.com/la-cuarta-revolucion-industrial-una-nueva-era-de-las-competencias-laborales/"}],glosario:[{termino:"Candidato",significado:"persona que se encuentra participando en un proceso de selección."},{termino:"Competencias",significado:"habilidades, capacidades y conocimientos de una persona para desempeñar determinada labor."},{termino:"Confidencial",significado:"es la reserva de la información en el marco de la gestión del talento humano."},{termino:"Historia clínica",significado:"documentos donde se relacionan todos los datos y antecedentes de un paciente."},{termino:"Inteligencias múltiples",significado:"teoría que permite reconocer que una persona puede ser inteligente para una o muchas cosas, según sus aprendizajes y gustos."},{termino:"Profesiograma",significado:"documento que establece los exámenes médicos ocupacionales a realizar, teniendo en cuenta la actividad económica de la empresa, las funciones a desarrollar y los riesgos asociados con el cargo."},{termino:"<em>Rapport</em>",significado:"es la creación de un buen ambiente o una buena relación que permite generar una buena entrevista."},{termino:"Referencias laborales",significado:"información que suministra un candidato sobre sus trabajos anteriores."},{termino:"Selección",significado:"proceso por el cual se elige al candidato idóneo según las necesidades de la organización."},{termino:"Visita domiciliaria",significado:"filtro en el marco del proceso de selección, dentro del estudio de seguridad, donde un proveedor realiza una visita a la casa del candidato para validar información y garantizar que las condiciones de la vivienda no afecten para el desarrollo de su trabajo."}],referencias:[{referencia:"Alles, M. (2016). <i>Selección por competencias.</i> Granica."},{referencia:"Chiavenato, I (2008). <i>Gestión del talento humano</i>. McGrawHill."},{referencia:"Código sustantivo del trabajo [CST]. Artículo 59. Prohibiciones a los {empleadores}. 2005 (Colombia)."},{referencia:"<i>International organization for standarization<i>, (2008) ISOO 1486. </i>Quality management systems<i>. Ginebra: ISO."},{referencia:"Llanos, J (2005). <i>Cómo entrevistar en la selección de personal</i>. Pax México."},{referencia:"Ley 1562 de 2012. Por lo cual se modifica el sistema de riesgos laborales y se dictan otras disposiciones en materia de salud ocupacional. Julio 11 de 2012."},{referencia:"Ley 2181 de 2021. Por medio del cual se dictan normas para garantizar la seguridad de la cadena logística. Prevenir los delitos transaccionales y se dictan otras disposiciones. 31 de diciembre 2021."},{referencia:"Montaño, M., Palacios, J., Gantiva, C. (2009). <i>Teorías de la personalidad. Un análisis histórico del concepto y su medición</i>. Psychologia. Avances de la disciplina, vol. 3, núm. 2, pp. 81-107. ",link:"https://www.redalyc.org/articulo.oa?id=297225531007"},{referencia:"Noya, M., Hierro, E., Jiménez, J. (2001). <i>Selección de personal.</i> ESIC."},{referencia:"Resolución 2346 de 2007 [Ministerio de la protección social]. Por lo cual se regula la práctica de evaluaciones médicas ocupacionales y el manejo y contenido de las historias clínicas ocupacionales. Julio 11 de 2007."},{referencia:"Rodríguez, A. (2001). <i>Las pruebas psicométricas en la contratación de personal Boletín científico de la escuela superior Tepeji del Río</i>.  No. 12  77-82. ",link:"https://repository.uaeh.edu.mx/revistas/index.php/tepexi/article/view/4419/6440"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Álvaro Andrés Angarita Ramirez",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Daniel Felipe Varón Molina",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});i["a"].prototype.$config=h;var v=n("9224");i["a"].prototype.$package=v,new i["a"]({router:A,store:g["a"],render:function(e){return e(d)}}).$mount("#app")},"6ed3":function(e,a,n){e.exports=n.p+"img/8.a45c88d3.svg"},"74b5":function(e,a,n){e.exports=n.p+"img/banner-princiapal.324d265b.png"},"7b80":function(e,a,n){e.exports=n.p+"img/11.1802f0a2.svg"},8102:function(e,a,n){e.exports=n.p+"img/9.2eddf740.svg"},9089:function(e,a,n){e.exports=n.p+"img/7.c7ac5fe1.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"6.3.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"5.3.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},bbbd:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAACUCAYAAACeJ3mSAAAABHNCSVQICAgIfAhkiAAAATJJREFUaEPt2TEOgkAQBdAd8QoewlKo4RBewksY9ADacAhrbWyshdJLeAkQWInRdv8kS4jZfBK7cZY8l/0ZkUt2tMbzstY2wkZORRrhTUYjGo12jJzTQ4053RViTD18xrnYCDv+odE1LRb4xt0VXdRYBqTbiIc/3mU0otFoATlmoyf+XUCFZdJqDP8wIDW3ramRbRUvNYXOmnnby65KvGdaY4aZlo3QU0sjuGO5jyARnzVM9DEqk4eiEg21Tcgp4u3zbRCy0f6+ynydbDRj0kJEHv6QiIc/JqLR5EbxTbEkKBEmrQIx6KSt4rWCwFnSS99xFEWKTFokxL80sBCNpjbKy+SkWdNVMyTIK+QU8fX5fT9ko7yMN75OMxEmLURk0kIizmuYiEYTG+VVUiiWRK982jdHqDK1w1JuXQAAAABJRU5ErkJggg=="},c9c7:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAACUCAYAAACeJ3mSAAAABHNCSVQICAgIfAhkiAAAAS1JREFUaEPtmsEJwjAUhvN0Bofwas/NEC7hFnWBiNAhPLcgXrzbo0u4RKsxVvCcP5BQSvwDvf28hK8v+UiptPrgVORwzg3CQl6KZISbjIzIKNkx0pSmxzj9CVGqH580g4UwxxkyupT1Ci/cn7DLwVGQfkY8/HGXkREZJRNkykIP/F5AwtG0IQxnKMiQZYdk5KyP65CgL2OtvGlamja2j2haTJCMpmbUaHPHcyLTypCzRaL5/ArkzKjVRsdyEqtoWrTV+GEcthktAhEpMpqa0fj1+IrnBAmhaUMYZm7abQgDX0bcwvJOyzttbB/RIpggGU3OqDQnPCc07TNni0Tz+YM7bXXb7GI5LUSs7Lsi+o8opcY/olgIXY/JCHYs+wgi4l7DiL6Mqq6oA5Jo074+XlSZ/HI4i/YAAAAASUVORK5CYII="},cd2b:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAACUCAYAAACeJ3mSAAAABHNCSVQICAgIfAhkiAAAATdJREFUaEPt2MENgkAQBVAGarAIj8JZirAJu0ALwJhQhGdNjBfPwtEm7EFF2RWjXPdvsoSQzffqMEue43xFDulGB84v/RA2Aoo0wmNGIxr1to/yO8Y0V7Sb8SmuTbrr2QhLjtDoNC8m+MbNFU1U614CUmtdsxH40tIIzivnCBIFNLI3uuFS9OuYSWtjOMKAtLltmxo5ptupTaGppmlEMSAZkK5zxOWPBWk0tNE+za/4TJS0UvucIs4+/wY+G60vs9TVSUehklWV9PH0uGYj9HG0//uJjTYbjdAYBZwjSPQzis+4EFUwaZHQ932vk7aKFzYGpholquHyR4pcbEgo4PLHRDQa2Cgrk53FkcaSNkFePqeIq093vc9GWRkvXZ1CESYtRGTSQiKmCCai0cBGWZUUFkeihyzvDwOiNcyldTK3AAAAAElFTkSuQmCC"},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.9971ecb7.png"},ffcc:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAACUCAYAAACeJ3mSAAAABHNCSVQICAgIfAhkiAAAATBJREFUaEPt2D8OgjAYBfB+aOIJPISjZZZDeAnPYGLQA+jiIZx1dpZuegkv4T8qg659X1JCSPNI2B4t+UH6KHIqdt5EHt77p3CgoCKN8EtGIxq1towcZ9sH5gwnxJhHc7ZzcCDs2EOj5XU6xjceTozqzMva5dFNa0zTtBwIPA8a4ReWRjRqaT0qnb1jTNC0Xti0CsQeFqTirlURWTk7USVDoeG7ZkEiRS7+SIgfWliIRp0bVflNM2cwI+aZcotE+/wGSNloc5kWsU5+kLFpISKbFhLxlwYmolHnRvasmBJEhE2rQEy6aZ2dKwiCkVrqD/e0SJFNi4S4X8NCNOraqKzyg2bOUKZpkFfKLRLr878+ZaOysotYp0yETQsR2bSQiPs1TESjjo1Kl+8VU4KIf38BouwPobxiJvUAAAAASUVORK5CYII="}});
//# sourceMappingURL=app.dc5ce586.js.map