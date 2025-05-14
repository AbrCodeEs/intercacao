const es = {
  generalInformation: {
    title: 'evaluacion',
    image: {
      alt: 'portada de mantuano cacao',
    },
    rating: {
      stars: 'estrellas de calificación 2.1',
    },
    sections: [
      {
        items: [
          { label: 'AFRUTADO DULCE', value: '1.8' },
          { label: 'AFRUTADO CÍTRICO', value: '2.0' },
          { label: 'AFLORADO', value: '0.5' },
          { label: 'ACRIOLLADO', value: '0.0' },
          { label: 'CACAO', value: '2.6' },
          { label: 'BOSCOSO', value: '1.8' },
          { label: 'ESPECIAS', value: '0.0' },
        ],
      },
      {
        items: [
          { label: 'PRODUCCIÓN ANUAL (TM)', value: '6' },
          { label: 'COSECHA PRINCIPAL', value: 'DIC-APR' },
          { label: 'COSECHA MEDIA', value: 'JUN-JUL' },
        ],
      },
      {
        items: [{ label: 'GRANOS CRIOLLOS', value: '16%' }],
      },
      {
        items: [
          { label: 'GRANOS FERMENTADOS', value: '76%' },
          { label: 'GRANOS VIOLETAS', value: '12%' },
          { label: 'GRANOS PIZARROSOS', value: '12%' },
          { label: 'TOTAL', value: '100%' },
        ],
      },
      {
        items: [
          { label: 'Granos / 100g:', value: '87' },
          { label: 'g./1 Grano:', value: '1,15 g' },
        ],
      },
      {
        items: [
          { label: 'CERTIFICADO', value: 'NO' },
          { label: 'PREMIOS', value: 'NO' },
        ],
      },
    ],
  },
  characteristics: {
    title: 'Características Físicas y Organolépticas',
    subtitle: 'Sabores Positivos',
    flavors: [
      {
        name: 'Afrutado Dulce',
        description: '',
      },
      {
        name: 'Afrutado Cítrico',
        description: '',
      },
      {
        name: 'Aflorado',
        description: '',
      },
      {
        name: 'Acriollado',
        description: '',
      },
      {
        name: 'Cacao',
        description: 'Cacao',
      },
      {
        name: 'Boscoso',
        description: 'Corteza',
      },
      {
        name: 'Especias',
        description: '',
      },
    ],
    assessment: {
      title: 'Evaluación',
      classification: 'Clasificacion de Mantuano',
      equipment: 'Equipo de Cata',
    },
    information: [
      {
        title: 'S = Sabor:',
        description: {
          boldText: 'MEDIO',
          additionalText: 'Denota leve sabor afrutado',
        },
      },
      {
        title: 'A = Aroma:',
        description: {
          boldText: 'BAJO',
          additionalText: 'Esencias a frutas sobremaduras',
        },
      },
      {
        title: 'F = Fermentación:',
        description: {
          boldText: 'MEDIO',
          additionalText: 'Moderada astringencia y amargura',
        },
      },
    ],
    analysis: {
      title: 'Análisis de Corte',
      alt: 'Cacao de Mantuano',
      description: [
        {
          text: 'El grano de Mantuano, de acuerdo a la introgresión genética con elevada descendencia trinitaria y moderada genética criolla posee 16% de granos blancos.',
        },
        {
          text: 'Se determina los siguientes resultados en el análisis de corte; (±16%) en granos criollos, (±76%) en granos fermentados, (±12%) en granos violeta y en (±12%) granos pizarrosos.',
        },
        {
          text: 'En relación al peso contiene 87 almendras referentes a un peso de 100 gr, en otros términos cada almendra pesa 1,15gr.',
        },
      ],
    },
  },
  cocoaMap: [
    {
      title: 'Mapa de Sabores',
      content: [
        {
          type: 'quote',
          quote:
            '"Los atributos de sabor del cacao de mantuano son de intensidad leve donde se perciben más el sabor ácido y el sabor afrutado. Este perfil denota que la genética de este material corresponde a un criollo moderno,"',
          author: 'detalló la Ing Ms Gladys Ramos.',
        },
      ],
      image: { alt: 'Rueda de sabores del cacao' },
    },
    {
      title: 'Mapa Sensorial',
      content: [
        {
          type: 'quote',
          quote:
            '"Al minimizar y controlar la sensación de astringencia se exploran mejor los sabores característicos del cacao de Mantuano, tales como las notas afloradas y de nueces. La genética de este cacao es realmente promisoria, así como su índice de almendras que ofrece un buen rendimiento de material comestible"',
          author: 'detalló la Ing. Ms. Gladys Ramos, experta en cacao e investigadora en ciencias',
        },
      ],
      image: {
        alt: 'Mapa Sensorial de sabor',
      },
    },
  ],
  postHarvestBenefit: {
    title: 'Beneficio Post Cosecha',
    content: [
      {
        protocols: [
          {
            title: 'Protocolo de Fermentacion',
            description:
              'El grano de Mantuano posee un alto porcentaje de genética trinitaria y mediana descendencia criolla, el cual cumple el siguiente proceso de fermentación:',
            items: [
              {
                key: 'Tipo de Cacao',
              },
              {
                alt: 'semilla manapiare',
                text: 'Trinitario',
              },
              {
                key: 'Días de Fermentación',
                value: '5 a 7 días',
              },
              {
                key: 'Técnicas de Fermentación',
              },
              {
                items: [
                  'Tipo de cajon: Madera',
                  'Frecuencia de volteos: cada 48 horas',
                  'Forma de Fermentación: Los granos son envueltos con hojas de plátano.',
                ],
              },
            ],
            image: {
              alt: 'protocolo de fermentacion',
            },
          },
          {
            title: 'Protocolo de Secado',
            description:
              'El proceso de secado del cacao de Mantuano se realiza cumpliendo el siguiente protocolo:',
            items: [
              {
                key: 'Tipo de Cacao',
              },
              {
                alt: 'semilla mantuano',
                text: 'Trinitario Seco',
              },
              {
                key: 'Días de Secado',
                value: '5 a 6 días',
              },
              {
                key: 'Técnicas de Secado',
              },
              {
                items: [
                  'Tipo de piso: cemento / concreto',
                  'Humedad: 7,5%',
                  'Forma de Secado: al sol',
                ],
              },
            ],
            image: {
              alt: 'protocolo de secado',
            },
          },
        ],
      },
    ],
  },
  traceability: {
    title: 'Trazabilidad',
    subtitle: 'certificaciones y premios',
    content: [
      {
        text: 'Los productores de Mantuano están organizados, puesto que forman parte de la Asociación de Productores y Artesanos LA FLOR DE MANTUANO, actualmente integrado por 25 productores, todos nativos de la parroquia.',
      },
      {
        text: 'Cuentan con una dirigente apasionada por el trabajo a la tierra, su nombre es Beatriz García, tiene 36 años de edad y actualmente es presidenta de la cooperativa, quien día tras día entrega su alma y corazón a esta labor, luchando por preservar el patrimonio que heredó de su madre; colabora e impulsa a los productores que no cuentan con apoyo económico.',
      },
      {
        text: '"En la asociación de productores de Mantuano, laboran 9 personas que no reciben ningún beneficio económico, pero la satisfacción de cuidar la valiosa semilla, brindar apoyo al productor, y realizar el proceso de la cosecha con la más alta calidad, los mantiene con la convicción de que el mejor cacao se encuentra en Mantuano", informó, Beatriz García, Presidenta de la asociación de productores y artesanos de Mantuano',
      },
      {
        text: 'Las comunidades de este místico pueblo, llevan un modo de vida austero, residen en viviendas de palma y barro, así como también en algunas viviendas de bloques.',
      },
      {
        text: 'Las paredes del recinto fueron construidas por los hombres y mujeres que hoy realizan el trabajo de pre y post cosecha.',
      },
      {
        text: 'Cuentan con máquinas tipo manual como hornos tostadores, descarcarilladores, premolinos, molinos pulverizantes, mesa vibradora y conchadora , todas reservadas para la optimización de la producción, transformación y distribución del cacao en sus diferentes presentaciones.',
      },
      {
        text: 'Actualmente en Mantuano se producen 6000 kg anuales de cacao.',
      },
      {
        text: 'Sus jornadas de trabajo son de 12 horas diarias, inician con la recolección del cacao, traída por los productores adscritos, una vez recibido lo quiebran al momento.',
      },
    ],
    images: [
      {
        alt: 'Certificado de origen',
      },
      {
        alt: 'Agricultores',
      },
      {
        alt: 'Mosaico',
      },
    ],
  },
  location: {
    title: 'Ubicación Geográfica y Ecología',
    subtitle: 'Ubicación Geográfica',
    locationInfo: {
      map: {
        alt: 'mapa de Mantuano',
      },
      details: [
        { label: 'País', value: 'Venezuela' },
        { label: 'Estado', value: 'Carabobo' },
        { label: 'Municipio', value: 'Puerto Cabello' },
        { label: 'Superficie', value: '104 km2' },
        { label: 'Altitud Promedio', value: '28 m. s. n. m' },
        {
          label: 'Coordenadas GPS',
          value: 'Longitud 68° 73’ 40” O. de G, Latitud de 19°25’00” N. de E.',
        },
        { label: 'Habitantes', value: 'Aun no se tiene información' },
      ],
    },
    paragraphs: [
      'Mantuano pertenece a la parroquia Goaigoaza del municipio Puerto cabello Estado Carabobo en Venezuela, a pocos kilómetros del puerto de Puerto Cabello y forma parte de la extensión del parque nacional San Esteban, antes de llegar al recóndito pueblo se transita por parroquias aledañas como Borburata, donde se hace sentir el sabor y la energía de los ancestros con sus exuberantes paisajes.',
    ],
    ecology: {
      title: 'Ecología',
      paragraphs: [
        'El pueblo de Mantuano está situado dentro de la superficie del parque nacional San Esteban, considerado un área de diversidad y esplendidos paisajes constituidos por selvas nubladas, costas e islas, por lo tanto presenta una vegetación rica y variada donde se pueden observar lugares xerófilos y sabanas. En las costas abundan los manglares, hacia el sur se puede apreciar cardones y espinares.',
        'La fauna de Mantuano está asociada a los tipos de vegetación y a las características geográficas del área del parque nacional San Esteban.',
      ],
      images: [
        {
          alt: 'ubicacion de Mantuano',
        },
        {
          alt: 'ubicacion de Mantuano',
        },
      ],
    },
  },
  history: {
    title: 'Historia',
    images: [
      {
        alt: 'historia de Mantuano',
      },
      {
        alt: 'historia de Mantuano',
      },
    ],
    content: [
      {
        text: 'Mantuano pertenece a la parroquia Goaigoaza del municipio Puerto cabello estado Carabobo en Venezuela, el sector no posee letrero de bienvenida, pero te recibe la calidez de su gente que lucha y mantiene la tradición de cultivar el cacao de la zona, un manjar particularmente delicioso por su aroma y sabor.',
      },
      {
        text: 'El pueblo recibe el nombre de Mantuano por su designación colocada a toda una clase social de la época de grandes propietarios y nobles pertenecientes al siglo XVIII; entre ellos el comendador Don Carlos Aszulba, que se apodera de toda la zona situada en la superficie del Parque Nacional San Esteban (Mantuano), se residencia en "La Casona" (una propiedad situada en la cima de uno de los valles que rodea el sector) actualmente considerada la joya agraria de Mantuano , circundada por extensas plantaciones de cacao y café.',
      },
      {
        text: 'Posteriormente durante los años 1960 decide vender las tierras al Instituto Nacional de Tierras y el organismo decide  hacer una repartición, este le otorga 5 hectáreas a varias familias, aunado a esto la labor de mantener  la cosecha de café y cacao.',
      },
      {
        text: 'Al pasar los años la zona es invadida; de esta manera convirtiéndose en el asentamiento San José de Cariaprima y es así como comienza el trabajo organizado por la producción de la exquisita semilla.',
      },
      {
        text: 'A pesar de los niveles bajos de actividad económica ya que el cacao es su único sustento, cada uno de los productores no ha dejado de luchar por mantener la tradición del exquisito fruto.',
      },
      {
        text: 'En Mantuano no cuentan con una línea de transporte público, solo taxis hasta determinada zonas.',
      },
      {
        text: 'Posee una sede de la cooperativa de productores y artesanos donde realizan actividades que permiten el rescate del cultivo y el adecuado manejo post cosecha, proporcionando a los productores el conocimiento sobre adecuadas técnicas agronómicas con el fin de mejorar la actividad productiva que desarrollan.',
      },
    ],
  },
  socialResponsibility: {
    title: 'Responsabilidad Social',
    images: [
      {
        alt: 'imagen1',
      },
      {
        alt: 'imagen2',
      },
    ],
    paragraphs:
      'El objetivo primordial es colaborar, enriquecer y ser promotor de las buenas prácticas agrícolas en la generación de relevo de la comunidad, gracias al aporte y unión con la FUNDACION PROSPERI, fundación sin fines de lucro, que mantiene el compromiso de difundir los valores históricos, culturales y agrícolas de Venezuela, a través de sus programas educativos como “Regreso al agro”, se logra demostrar que el cultivo de cacao es una profesión rentable, que genera un cambio social.',
  },
};

const en = {
  generalInformation: {
    title: 'Evaluation',
    image: {
      alt: 'cover of Mantuano cocoa',
    },
    rating: {
      stars: '2.1 rating stars',
    },
    sections: [
      {
        items: [
          { label: 'SWEET FRUITY', value: '1.8' },
          { label: 'CITRUS FRUITY', value: '2.0' },
          { label: 'FLORAL', value: '0.5' },
          { label: 'CREOLE', value: '0.0' },
          { label: 'COCOA', value: '2.6' },
          { label: 'WOODSY', value: '1.8' },
          { label: 'SPICES', value: '0.0' },
        ],
      },
      {
        items: [
          { label: 'ANNUAL PRODUCTION (MT)', value: '6' },
          { label: 'MAIN HARVEST', value: 'DEC-APR' },
          { label: 'MID HARVEST', value: 'JUN-JUL' },
        ],
      },
      {
        items: [{ label: 'CREOLE BEANS', value: '16%' }],
      },
      {
        items: [
          { label: 'FERMENTED BEANS', value: '76%' },
          { label: 'VIOLET BEANS', value: '12%' },
          { label: 'SLATE BEANS', value: '12%' },
          { label: 'TOTAL', value: '100%' },
        ],
      },
      {
        items: [
          { label: 'Beans / 100g:', value: '87' },
          { label: 'g./1 Bean:', value: '1.15 g' },
        ],
      },
      {
        items: [
          { label: 'CERTIFIED', value: 'NO' },
          { label: 'AWARDS', value: 'NO' },
        ],
      },
    ],
  },
  characteristics: {
    title: 'Physical and Organoleptic Characteristics',
    subtitle: 'Positive Flavors',
    flavors: [
      {
        name: 'Sweet Fruity',
        description: '',
      },
      {
        name: 'Citrus Fruity',
        description: '',
      },
      {
        name: 'Floral',
        description: '',
      },
      {
        name: 'Creole',
        description: '',
      },
      {
        name: 'Cocoa',
        description: 'Cocoa',
      },
      {
        name: 'Woodsy',
        description: 'Bark',
      },
      {
        name: 'Spices',
        description: '',
      },
    ],
    assessment: {
      title: 'Assessment',
      classification: 'Mantuano Classification',
      equipment: 'Tasting Team',
    },
    information: [
      {
        title: 'S = Flavor:',
        description: {
          boldText: 'MEDIUM',
          additionalText: 'Denotes a light fruity flavor',
        },
      },
      {
        title: 'A = Aroma:',
        description: {
          boldText: 'LOW',
          additionalText: 'Essences of overripe fruits',
        },
      },
      {
        title: 'F = Fermentation:',
        description: {
          boldText: 'MEDIUM',
          additionalText: 'Moderate astringency and bitterness',
        },
      },
    ],
    analysis: {
      title: 'Cut Test Analysis',
      alt: 'Mantuano Cocoa',
      description: [
        {
          text: 'The Mantuano bean, according to genetic introgression with high Trinitario ancestry and moderate Creole genetics, has 16% white beans.',
        },
        {
          text: 'The following results are determined in the cut test; (±16%) in Creole beans, (±76%) in fermented beans, (±12%) in violet beans, and (±12%) in slate beans.',
        },
        {
          text: 'In relation to weight, it contains 87 almonds relative to a weight of 100 gr, in other terms each almond weighs 1.15gr.',
        },
      ],
    },
  },
  cocoaMap: [
    {
      title: 'Flavor Map',
      content: [
        {
          type: 'quote',
          quote:
            '"The flavor attributes of Mantuano cocoa are of mild intensity where acidic and fruity flavors are most perceived. This profile denotes that the genetics of this material correspond to a modern Creole,"',
          author: 'explained Ms. Gladys Ramos, Agricultural Engineer.',
        },
      ],
      image: { alt: 'Cocoa flavor wheel' },
    },
    {
      title: 'Sensory Map',
      content: [
        {
          type: 'quote',
          quote:
            '"By minimizing and controlling the sensation of astringency, the characteristic flavors of Mantuano cocoa are better explored, such as floral and nutty notes. The genetics of this cocoa are truly promising, as well as its almond index that offers a good yield of edible material"',
          author: 'explained Ms. Gladys Ramos, cocoa expert and food science researcher',
        },
      ],
      image: {
        alt: 'Flavor Sensory Map',
      },
    },
  ],
  postHarvestBenefit: {
    title: 'Post-Harvest Processing',
    content: [
      {
        protocols: [
          {
            title: 'Fermentation Protocol',
            description:
              'The Mantuano bean has a high percentage of Trinitario genetics and moderate Creole descent, following this fermentation process:',
            items: [
              {
                key: 'Cocoa Type',
              },
              {
                alt: 'manapiare seed',
                text: 'Trinitario',
              },
              {
                key: 'Fermentation Days',
                value: '5 to 7 days',
              },
              {
                key: 'Fermentation Techniques',
              },
              {
                items: [
                  'Box type: Wood',
                  'Turning frequency: every 48 hours',
                  'Fermentation method: Beans are wrapped in banana leaves.',
                ],
              },
            ],
            image: {
              alt: 'fermentation protocol',
            },
          },
          {
            title: 'Drying Protocol',
            description: 'The drying process of Mantuano cocoa follows this protocol:',
            items: [
              {
                key: 'Cocoa Type',
              },
              {
                alt: 'mantuano seed',
                text: 'Dry Trinitario',
              },
              {
                key: 'Drying Days',
                value: '5 to 6 days',
              },
              {
                key: 'Drying Techniques',
              },
              {
                items: [
                  'Floor type: cement/concrete',
                  'Moisture: 7.5%',
                  'Drying method: sun-dried',
                ],
              },
            ],
            image: {
              alt: 'drying protocol',
            },
          },
        ],
      },
    ],
  },
  traceability: {
    title: 'Traceability',
    subtitle: 'certifications and awards',
    content: [
      {
        text: 'The producers of Mantuano are organized, as they are part of the Association of Producers and Artisans LA FLOR DE MANTUANO, currently made up of 25 producers, all natives of the parish.',
      },
      {
        text: 'They have a leader passionate about working the land. Her name is Beatriz García. She is 36 years old and is currently the president of the cooperative. Day after day, she gives her heart and soul to this work, fighting to preserve the heritage she inherited from her mother. collaborates and encourages producers who lack financial support.',
      },
      {
        text: '"The Mantuano Producers Association employs nine people who receive no financial benefit, but the satisfaction of caring for the valuable seed, providing support to producers, and carrying out the harvest process with the highest quality, keeps them convinced that the best cacao is found in Mantuano," reported Beatriz García, President of the Mantuano Producers and Artisans Association.',
      },
      {
        text: 'The communities of this mystical town lead an austere lifestyle, living in palm and mud houses, as well as in some block houses.',
      },
      {
        text: 'The walls of the enclosure were built by the men and women who today perform the pre- and post-harvest work.',
      },
      {
        text: 'They have manual machines such as toaster ovens, hullers, pre-mills, pulverizing mills, vibrating tables, and Conching plant, all reserved for optimizing the production, processing, and distribution of cocoa in its various forms.',
      },
      {
        text: 'Currently, 6,000 kg of cocoa are produced annually in Mantuano.',
      },
      {
        text: 'Their work days are 12 hours a day, beginning with the harvesting of cocoa brought by affiliated producers. Once received, they break it up immediately.',
      },
    ],
    images: [
      {
        alt: 'Certificate of origin',
      },
      {
        alt: 'Farmers',
      },
      {
        alt: 'Mosaic',
      },
    ],
  },
  location: {
    title: 'Geographical Location and Ecology',
    subtitle: 'Geographical Location',
    locationInfo: {
      map: {
        alt: 'Mantuano map',
      },
      details: [
        { label: 'Country', value: 'Venezuela' },
        { label: 'State', value: 'Carabobo' },
        { label: 'Municipality', value: 'Puerto Cabello' },
        { label: 'Area', value: '104 km²' },
        { label: 'Average Altitude', value: '28 m. a. s. l' },
        { label: 'GPS Coordinates', value: 'Longitude 68° 73’ 40” W, Latitude 19°25’00” N' },
        { label: 'Inhabitants', value: 'No information available' },
      ],
    },
    paragraphs: [
      'Mantuano belongs to the Goaigoaza parish of the Puerto Cabello municipality in Carabobo State, Venezuela, a few kilometers from Puerto Cabello port, forming part of the San Esteban National Park extension. Before reaching the remote town, one passes through adjacent parishes like Borburata, where ancestral flavors and energy are felt through exuberant landscapes.',
    ],
    ecology: {
      title: 'Ecology',
      paragraphs: [
        'Mantuano is located within the San Esteban National Park, considered an area of biodiversity with splendid landscapes including cloud forests, coasts, and islands. The vegetation is rich and varied with xerophilous areas and savannas. Mangroves abound on the coasts, while cardones and thorny shrubs are found to the south.',
        "Mantuano's fauna is associated with the vegetation types and geographical characteristics of the San Esteban National Park area.",
      ],
      images: [
        {
          alt: 'Mantuano location',
        },
        {
          alt: 'Mantuano location',
        },
      ],
    },
  },
  history: {
    title: 'History',
    images: [
      {
        alt: 'Mantuano history',
      },
      {
        alt: 'Mantuano history',
      },
    ],
    content: [
      {
        text: 'Mantuano belongs to the Goaigoaza parish of the Puerto Cabello municipality in Venezuela. The sector has no welcome sign but greets visitors with the warmth of its people who maintain the tradition of cultivating local cocoa, a particularly delicious delicacy for its aroma and flavor.',
      },
      {
        text: 'The town is named "Mantuano" after an 18th-century social class of large landowners and nobles, including Commendador Don Carlos Aszulba who took possession of the entire area now part of San Esteban National Park. He resided in "La Casona" - currently considered Mantuano\'s agricultural jewel - surrounded by extensive cocoa and coffee plantations.',
      },
      {
        text: 'In the 1960s, he sold the lands to the National Land Institute, which distributed 5-hectare plots to various families who maintained coffee and cocoa cultivation.',
      },
      {
        text: 'Over the years, the area was settled, becoming the San José de Cariaprima settlement, thus beginning organized work for the production of this exquisite seed.',
      },
      {
        text: 'Despite low economic activity levels (cocoa being their only livelihood), each producer continues fighting to preserve the tradition of this exquisite fruit.',
      },
      {
        text: 'Mantuano has no public transportation line, only taxis to certain zones.',
      },
      {
        text: 'It has a cooperative headquarters for producers and artisans where activities are conducted to rescue cultivation practices and improve post-harvest handling, teaching producers about proper agronomic techniques to enhance their productive activities.',
      },
    ],
  },
  socialResponsibility: {
    title: 'Social Responsibility',
    images: [
      {
        alt: 'image1',
      },
      {
        alt: 'image2',
      },
    ],
    paragraphs:
      'Through collaboration with PROSPERI FOUNDATION - a non-profit promoting Venezuelan agricultural values - we support agricultural best practices and youth education via programs like "Return to Agriculture", demonstrating cocoa cultivation as a viable profession driving social change.',
  },
};

const mantuano = { es, en };

export { mantuano };
