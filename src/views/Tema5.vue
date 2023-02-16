<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo7
    .bloque-fondo6 
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Elaboración de #[i ranking] de candidatos y presentación de informes
      .row.justify-content-center.align-items-start.mb-5 
        .col-lg-4
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/66.png', alt='')        
        .col-lg-8
          p(data-aos="fade-down") Para concluir todas las etapas del proceso de selección era necesario tener claridad en el concepto del examen médico ocupacional y cómo este determina si se avanza o no según los hallazgos identificados. Pero eso no es todo, se recomienda construir un #[i ranking] de candidatos que permite tener un panorama de todos los aspirantes, categorizar sus fortalezas y debilidades con el fin para tomar la decisión de contratación, teniendo claro los puntos débiles y los que deba fortalecer durante la permanencia dentro de la compañía.
          .row.justify-content-center.align-items-start.mb-5           
            .col-lg-2.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/67.svg', alt='')    
            .col-lg-10.my-3
              p(data-aos="fade-down").mb-0  En este espacio definirá si se le da mayor relevancia a los componentes actitudinales o a las habilidades técnicas, estas serán determinadas de acuerdo a las necesidades del cargo para determinar la elección.  

      .row.justify-content-start.align-items-center.mb-5           
        .col-auto
          .bgp.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Metodología y Norma Técnica Colombiana, para la elaboración y presentación de informes
      p(data-aos="fade-down").mb-5 Después de analizar todos los filtros aplicados y seleccionar el candidato para realizar la contratación, es de suma importancia que al momento de culminar el proceso de selección y contar con el o los candidatos escogidos se deje un informe y trazabilidad de todas las fases. Debe ser un documento ejecutivo que contenga todas las fases, donde estén claras las calificaciones de las diferentes pruebas aplicadas, el concepto de la entrevista, la aprobación del examen médico ocupacional, los hallazgos identificados en la validación de antecedentes y el estudio de seguridad.  
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="zoom-in")
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/R23.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Esta trazabilidad tiene como objetivo que cualquier persona, autorizada, pueda acceder al detalle del proceso. Para presentar de forma estandarizada este informe se encuentra la guía técnica <em>International Organization for Standarization</em> (2008), la cual da lineamientos claros para la ejecución de este documento.  

    .cajon.color-primario.p-4(data-aos="flip-down")
      p(data-aos="fade-down").mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.                               
</template>

<script>
export default {
  name: 'Tema5',
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
