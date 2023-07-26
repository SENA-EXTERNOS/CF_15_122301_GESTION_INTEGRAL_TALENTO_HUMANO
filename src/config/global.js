export default {
  global: {
    componenteFormativo:
      'Evaluación y selección de candidatos de manera idónea',
    descripcionCurso:
      'Durante este componente el aprendiz desarrollará la capacidad para realizar un proceso de selección de personal útil, eficaz y correcto; iniciando por conocer el origen, su objetivo, los diferentes tipos de pruebas existentes y sus diferentes fases donde se encuentran el estudio de seguridad y al examen ocupacional. Con estas etapas concluidas llegará a realizar la selección del candidato idóneo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/6.png'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/7.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/8.svg'),
      },
      {
        clases: ['banner-principal-decorativo-9'],
        imagen: require('@/assets/curso/portada/9.svg'),
      },
      {
        clases: ['banner-principal-decorativo-11'],
        imagen: require('@/assets/curso/portada/11.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Selección de candidatos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Evaluación del candidato',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Pruebas y tipos de pruebas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Retrospectivas y prospectiva',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Entrevistas de selección',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Validación de información de candidatos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo:
          'Elaboración de <i>ranking</i> de candidatos y presentación de informes',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Entrevistas de selección',
      referencia:
        'Aamodt, M. (2010). Psicología. <i>industrial/organizacional.</i> Cengage Learning Editores.',
      tipo: 'Documento',
      link:
        'http://repositorio.uasb.edu.bo:8080/bitstream/54000/1297/1/Aamodt-%20Psicolog%C3%ADa%20organizacional.pdf',
    },
    {
      tema: 'Evaluación del candidato',
      referencia:
        'Factorial HR España. <i>¿Cómo atraer talento en entornos competitivos?</i> [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cTNQvp_gibM',
    },
    {
      tema: 'Evaluación del candidato',
      referencia:
        'Grupo Adecco (2021). <i>La Cuarta Revolución Industrial, una nueva era de las competencias laborales</i> [Web log post].',
      tipo: 'Blog',
      link:
        'https://mundoadecco.com/la-cuarta-revolucion-industrial-una-nueva-era-de-las-competencias-laborales/',
    },
    {
      tema: 'Entrevista de selección',
      referencia:
        'Hays. (2022). <i>Estas son las soft skills esenciales para brillar en una entrevista </i>[Web log post]. ',
      tipo: 'Blog',
      link:
        'https://www.hays.com.co/contenido/blog-consejos-de-carrera/insights/soft-skills-para-brillar-en-una-entrevista',
    },
  ],
  glosario: [
    {
      termino: 'Candidato',
      significado:
        'persona que se encuentra participando en un proceso de selección.',
    },
    {
      termino: 'Competencias',
      significado:
        'habilidades, capacidades y conocimientos de una persona para desempeñar determinada labor.',
    },
    {
      termino: 'Confidencial',
      significado:
        'es la reserva de la información en el marco de la gestión del talento humano.',
    },
    {
      termino: 'Historia clínica',
      significado:
        'documentos donde se relacionan todos los datos y antecedentes de un paciente.',
    },
    {
      termino: 'Inteligencias múltiples',
      significado:
        'teoría que permite reconocer que una persona puede ser inteligente para una o muchas cosas, según sus aprendizajes y gustos.',
    },
    {
      termino: 'Profesiograma',
      significado:
        'documento que establece los exámenes médicos ocupacionales a realizar, teniendo en cuenta la actividad económica de la empresa, las funciones a desarrollar y los riesgos asociados con el cargo.',
    },
    {
      termino: '<em>Rapport</em>',
      significado:
        'es la creación de un buen ambiente o una buena relación que permite generar una buena entrevista.',
    },
    {
      termino: 'Referencias laborales',
      significado:
        'información que suministra un candidato sobre sus trabajos anteriores.',
    },
    {
      termino: 'Selección',
      significado:
        'proceso por el cual se elige al candidato idóneo según las necesidades de la organización.',
    },
    {
      termino: 'Visita domiciliaria',
      significado:
        'filtro en el marco del proceso de selección, dentro del estudio de seguridad, donde un proveedor realiza una visita a la casa del candidato para validar información y garantizar que las condiciones de la vivienda no afecten para el desarrollo de su trabajo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alles, M. (2016). <i>Selección por competencias.</i> Granica.',
    },
    {
      referencia:
        'Chiavenato, I (2008). <i>Gestión del talento humano</i>. McGrawHill.',
    },
    {
      referencia:
        'Código sustantivo del trabajo [CST]. Artículo 59. Prohibiciones a los {empleadores}. 2005 (Colombia).',
    },
    {
      referencia:
        '<i>International organization for standarization<i>, (2008) ISOO 1486. </i>Quality management systems<i>. Ginebra: ISO.',
    },
    {
      referencia:
        'Llanos, J (2005). <i>Cómo entrevistar en la selección de personal</i>. Pax México.',
    },
    {
      referencia:
        'Ley 1562 de 2012. Por lo cual se modifica el sistema de riesgos laborales y se dictan otras disposiciones en materia de salud ocupacional. Julio 11 de 2012.',
    },
    {
      referencia:
        'Ley 2181 de 2021. Por medio del cual se dictan normas para garantizar la seguridad de la cadena logística. Prevenir los delitos transaccionales y se dictan otras disposiciones. 31 de diciembre 2021.',
    },
    {
      referencia:
        'Montaño, M., Palacios, J., Gantiva, C. (2009). <i>Teorías de la personalidad. Un análisis histórico del concepto y su medición</i>. Psychologia. Avances de la disciplina, vol. 3, núm. 2, pp. 81-107. ',
      link: 'https://www.redalyc.org/articulo.oa?id=297225531007',
    },
    {
      referencia:
        'Noya, M., Hierro, E., Jiménez, J. (2001). <i>Selección de personal.</i> ESIC.',
    },
    {
      referencia:
        'Resolución 2346 de 2007 [Ministerio de la protección social]. Por lo cual se regula la práctica de evaluaciones médicas ocupacionales y el manejo y contenido de las historias clínicas ocupacionales. Julio 11 de 2007.',
    },
    {
      referencia:
        'Rodríguez, A. (2001). <i>Las pruebas psicométricas en la contratación de personal Boletín científico de la escuela superior Tepeji del Río</i>.  No. 12  77-82. ',
      link:
        'https://repository.uaeh.edu.mx/revistas/index.php/tepexi/article/view/4419/6440',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
