<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p(data-aos="fade-down").mb-5 En el siguiente mapa conceptual podrá observar a modo de resumen el proceso de selección de personal. Iniciando por los orígenes de la selección de personal y la importancia del proceso en un contexto corporativo, conocerán las diferentes pruebas o pasos para poder llegar a la vinculación, pasando por el filtro más importante dentro del proceso que es la entrevista de personal. Posteriormente, en fases de cierre hallará la validación de antecedentes, estudio de seguridad y examen ocupacional y finalmente encontrará la metodología para realizar la elección y presentación de un informe que sintetice el proceso ejecutado

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.jpg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
