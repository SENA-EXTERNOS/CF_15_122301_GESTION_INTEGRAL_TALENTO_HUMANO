<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo1
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Selección de candidatos 
    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.svg', alt='')    
      .col-lg-10.my-3
        p(data-aos="fade-down").mb-0 Todas las organizaciones requieren de personal para la realización de diversas funciones estratégicas que posibilitan el correcto funcionamiento de las dinámicas laborales, empresariales y/o comerciales. Es por ello, que dentro de sus procesos de evaluación y selección de candidatos idóneos es indispensable adquirir conocimiento de los antecedentes y los tipos de selección. 
    .bg1        
      .row.justify-content-start.align-items-center.mb-5           
        .col-lg-3
          .bgp.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0  Antecedentes de selección
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-9
          p(data-aos="fade-down") Antes de comenzar a precisar en el concepto de selección de personal es inevitable remitirse a la revolución industrial. Noya et al. (2001) en Selección de personal indican que “esta época trajo consigo la transformación del concepto de ‘trabajo’, generando una necesidad procedimental de las relaciones laborales; entiendo esta relación no únicamente en el marco legal sino la relación empleador y empleado” (p. 25). En este orden de ideas, se construyó la relación directa de conocimiento entre los representantes de las organizaciones y los candidatos; proceso hoy conocido como selección de personal para desempeñar un determinado trabajo
          .cajon.color-acento-contenido.p-4(data-aos="flip-down")
            p(data-aos="fade-down").mb-0 Hoy en día el proceso de selección tiene un rol protagónico en las empresas y en el área de gestión del talento humano, pues permite el ingreso o no de personal a la compañía a través de la aplicación de diferentes filtros y etapas, generando un valor agregado al proceso, y aportando a la estrategia corporativa.  
        .col-lg-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.png', alt='')

      p(data-aos="fade-down").mb-5 Actualmente, las empresas buscan tener un factor diferencial en el mercado, y se han dado cuenta que el precio, la tecnología o los recursos financieros no brindan este elemento, sino quien lo otorga son las personas. En consecuencia, se debe garantizar un proceso útil, eficaz, con valor agregado, necesidades claras y perfiles de cargo estructurados; con el fin de facilitar la búsqueda, cumplir con la cultura organizacional, satisfacer los requerimientos de los líderes y evitar al máximo la rotación del personal, así la compañía logrará ser una marca destacada en el entorno, y será rentable a lo largo del tiempo.

      .row.justify-content-start.align-items-center.mb-5           
        .col-lg-3
          .bgp.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Tipos de selección

      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10(data-aos="zoom-in")
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/5.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Después de conocer que el proceso de selección viene de años atrás, es importante resaltar que en la actualidad ha evolucionado y presenta dos tipos de selección de personal: #[b tradicional y por competencias]. El primero de ellos es rígido, poco adaptable al cambio, diseñado en términos jerárquicos y está basado en la subjetividad del evaluador en el momento de realizar la elección. Es considerado un tipo de selección que presenta falta de utilidad y carece de valor agregado tanto en los procesos de la organización como en la estrategia corporativa

    p(data-aos="fade-down").mb-5 El segundo de ellos, según Alles, M. (2016), es:

    .bg2
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10    
          PasosA.color-secundario(tipo="l")
            .row.justify-content-center.align-items-center
              .col-lg-9.my-3
                p(data-aos="fade-left") Un modelo que permite seleccionar, evaluar y desarrollar a las personas en pro de alcanzar la estrategia corporativa. Para poder implementarlo se precisa tener descritas las competencias para cada cargo tanto a nivel transversales como específicas.  
              .col-lg-3.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/7.png', alt='')
            .row.justify-content-center.align-items-center
              .col-lg-3.order-1.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='')            
              .col-lg-9.text-start.order-lg-2.my-3
                p(data-aos="fade-right") Las primeras se aplican a toda la organización y las segundas son propias con cada nivel, área o cargos. Tener las competencias definidas concluye un trabajo previo sobre descripción de manual de perfiles y funciones, visión, misión, objetivos organizacionales y estrategia corporativa; partiendo de lo macro a lo micro.
            .row.justify-content-center.align-items-center
              .col-lg-9.my-3
                p(data-aos="fade-left") Aunque no es materia de este componente el tema de las competencias es pertinente enmarcar un poco su definición. Es necesario precisar que son comportamientos, es decir, son medibles, provienen de la personalidad, generan un buen desempeño laboral y son diferentes a los conocimientos técnicos requeridos 
              .col-lg-3.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/9.png', alt='') 

      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos="zoom-in-left")
            h5 Tabla. 
            span Comparativo entre conocimientos y competencias 
          .tabla-a.color-primario.mb-5(data-aos="fade-left") 
            table
              thead
                tr.bgt1
                  th Conocimientos
                  th Competencias
              tbody          
                tr.bgt2
                  td idiomas  
                  td servicio al cliente
                tr
                  td cálculo matemático  
                  td liderazgo 
                tr.bgt2
                  td ofimática  
                  td orientación  al resultado 

      .row.justify-content-center.align-items-start.mb-5           
        .col-lg-2.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.svg', alt='')    
        .col-lg-10.my-3
          p(data-aos="fade-down").mb-0 Con base en lo anterior, es necesario que desde el área de talento humano se defina cómo se medirá al candidato, bien sea a través de juegos de roles, pruebas psicológicas, análisis de caso, entre otros. Se debe establecer el nivel mínimo requerido para aprobar ese filtro del proceso, identificar cuáles son claves para el cargo a seleccionar y las que podrían generar desarrollo en el marco del proceso de formación. 

      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10
          .cajon.color-acento-contenido.p-4(data-aos="flip-down")
            p(data-aos="fade-down").mb-0 Además, es necesario contar con la descripción de la metodología de evaluación y examinar los diferentes niveles de la competencia, ya que es probable que se deban validar.

    p(data-aos="fade-down").mb-5 Martha Alles (2016) propone un modelo de evaluación por competencias, el cual se expone a continuación:
    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/10.svg', alt='')                 
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
