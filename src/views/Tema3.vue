<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo4
    .bloque-fondo3   
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Entrevistas de selección
      .row.justify-content-center.align-items-start.mb-5 
        .col-lg-4
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/35.png', alt='')        
        .col-lg-8
          .cajon.color-acento-contenido.p-4.mb-4(data-aos="flip-down")
            p(data-aos="fade-down").mb-0 Después de haber identificado las diferentes características que comprenden a una persona y conocer la diferencia entre actitud y aptitud, llega a una de las fases más importantes durante el ejercicio de encontrar el candidato ideal y es el proceso de la entrevista. Usualmente es dirigida por la persona de talento humano y/o el líder del proceso, probablemente ambos no la realicen en el mismo momento, sin embargo, es necesario que uno y otro tengan la posibilidad de participar y dar su concepto ante el proceso.
          .bloque-texto-d.color-secundario.p-4
            .bloque-texto-d__texto.mb-2
              i.fas.fa-quote-left
              p La entrevista es la principal técnica donde el entrevistador obtiene datos e información relevantes sobre el candidato para el proceso de selección. Se realiza a través de una sencilla conversación de una forma objetiva y ética, en ella se debe indagar sobre aspectos a nivel personal, académico, profesional y proyecciones en corto o mediano plazo. Durante este proceso, para descartar o avanzar con el candidato, es muy fácil caer en subjetividad, emociones y sesgos del entrevistador; siendo este un ítem sobre el cual se debe capacitar constantemente (en: <em>Cómo entrevistar en la selección de personal</em> )
              i.fas.fa-quote-right
            .bloque-texto-d__autor 
              h5.mb-0 - Lllanos, J. (2005) (9. 75)  

    p(data-aos="fade-down").mb-5 Así mismo, es necesario fortalecer las capacidades del entrevistador para indagar de forma profunda, analítica y objetiva al candidato, con el fin de obtener respuestas sinceras y concretas. Es normal que el candidato quiera mostrar su mejor versión y responda de manera superficial con el propósito de convencer a su interlocutor de ser el elegido para la contratación, por ello se debe estar capacitado y preparado al momento de realizar la entrevista.  

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/36.svg', alt='')    
      .col-lg-10.my-3
        p(data-aos="fade-down").mb-0 Por último, es ineludible conocer a los entrevistados desde su ámbito personal y ser cauteloso al momento de realizar preguntas irrespetuosas, que puedan vulnerar la intimidad, sean discriminatorias o que no aporten al proceso de selección y si creen malestar en medio de la conversación.

    p(data-aos="fade-down").mb-5 Respecto a las fases de la entrevista, aunque no hay un modelo estándar, se recomienda: 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10.bg8.p-5(data-aos="zoom-in")
        LineaTiempoB.color-primario.mb-5(:datos="datosLineaTiempoB")                                         
    p(data-aos="fade-down").mb-5 La entrevista es un proceso en doble vía y debe ser atractivo tanto para la empresa como para el candidato. Esta situación ayudará a mitigar la deserción en el proceso, disminuir la rotación del personal y garantizará que ambas partes conozcan lo que cada una puede ofrecer. Para desarrollar efectivamente el proceso de selección existen tres tipos de entrevistas: abierta, estructurada y semiestructurada. 

    .row.justify-content-center.align-items-start.mb-5 
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/35.png', alt='')        
      .col-lg-8
        .cajon.color-primario.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0
          ul.lista-ul.ps-2.mb-0
            li 
              i.fas.fa-angle-right.colorv
              p.mb-0 En la primera no hay un orden establecido para el desarrollo de las preguntas, estas irán ocurriendo de acuerdo con el momento y el candidato. No es recomendable realizarla ya que se pierde el orden y no se tienen un criterio para indagar sobre todos los candidatos de la misma manera.
            li 
              i.fas.fa-angle-right.colorv
              p.mb-0 La segunda es polo opuesto a la primera, porque tiene preguntas regidas realizadas a forma de checklist sin poder hacer cambios o ajustes.
            li.mb-0 
              i.fas.fa-angle-right.colorv
              p.mb-0 La tercera es la más recomendable porque aunque hay unas preguntas pre establecidas, es importante que el entrevistador tenga la capacidad para agregar o profundizar según lo que el candidato vaya narrando, pues esta entrevista es caracterizada por ser una conversación fluida, donde las dos partes se sientan cómodos, y el candidato pueda contar genuinamente quién es y sus experiencias previas; es indispensable mantener el orden e hilo conductor que propone la estructura.

        p(data-aos="fade-down").mb-5 En la entrevista se debe llevar un registro, sin importar cuál de las tres sea realizada, bien sea en los apuntes propios o en el formato establecido por la empresa para este proceso; de esta forma se podrán presentar informes, recordar información importante y generar trazabilidad de la hoja de vida del candidato.                                                            
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10(data-aos="zoom-in")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/43.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 También es oportuno realizar la entrevista por competencias, si la empresa las tiene definidas previamente, para indagar sobre las necesidades del cargo. Estas preguntas se realizan sobre comportamientos en experiencias previas o sobre proyecciones de cómo reacciona en casos futuros a los cuales pueda estar expuesto.         
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: 'Presentación ',
        texto:
          'Iniciar por construir empatía y rapport con el candidato para que pueda sosegar la ansiedad que genera el momento. Una buena forma de hacerlo es recordar un poco sobre la vacante que se está ofreciendo y puntualizar en detalles.',
        icono: require('@/assets/curso/temas/37.svg'),
      },
      {
        titulo: 'Aspectos personales ',
        texto:
          'Una vez sucedido este primer momento, se sugiere dar inicio para que el candidato hable respecto a su núcleo familiar, habilidades que lo destacan, cuáles tienen como oportunidad de mejora, y realice un breve resumen sobre su historial académico de ser necesario para la vacante.',
        icono: require('@/assets/curso/temas/37.svg'),
      },
      {
        titulo: 'Experiencia laboral y profesional',
        texto:
          'Seguido a ello, la fase que más tomará tiempo será conversar sobre sus experiencias laborales, logros obtenidos y funciones ejecutadas.',
        icono: require('@/assets/curso/temas/37.svg'),
      },
      {
        titulo: 'Metas y objetivos ',
        texto:
          'Finalmente, se abordarán temas sobre motivaciones que tiene por la empresa y la vacante. Se explicarán los siguientes pasos del proceso con el fin que el candidato se sienta todo el tiempo involucrado, en este mismo espacio se dará al entrevistado un tiempo para que pueda realizar preguntas y aclarar inquietudes.',
        icono: require('@/assets/curso/temas/37.svg'),
      },
    ],
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
