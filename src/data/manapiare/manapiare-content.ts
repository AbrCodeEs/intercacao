const es = {
  generalInformation: {
    title: 'evaluacion',
    image: {
      alt: 'portada de manapiare cacao',
    },
    rating: {
      stars: 'estrellas de calificación 4.0',
    },
    sections: [
      {
        items: [
          { label: 'AFRUTADO DULCE', value: '1.2' },
          { label: 'AFRUTADO CÍTRICO', value: '3.1' },
          { label: 'AFLORADO', value: '2.0' },
          { label: 'ACRIOLLADO', value: '0.0' },
          { label: 'CACAO', value: '3.5' },
          { label: 'BOSCOSO', value: '2.1' },
          { label: 'ESPECIAS', value: '0.0' },
        ],
      },
      {
        items: [
          { label: 'PRODUCCIÓN ANUAL (TM)', value: '12' },
          { label: 'COSECHA PRINCIPAL', value: 'DIC-FEB' },
          { label: 'COSECHA MEDIA', value: 'MAR-ABR' },
        ],
      },
      {
        items: [{ label: 'GRANOS CRIOLLOS', value: '12%' }],
      },
      {
        items: [
          { label: 'GRANOS FERMENTADOS', value: '85%' },
          { label: 'GRANOS VIOLETAS', value: '10%' },
          { label: 'GRANOS PIZARROSOS', value: '5%' },
          { label: 'TOTAL', value: '100%' },
        ],
      },
      {
        items: [
          { label: 'Granos / 100g:', value: '81' },
          { label: 'g./1 Grano:', value: '1,23 g' },
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
    flavors: [
      {
        name: 'Afrutado Dulce',
        description: 'Frutas Frescas',
      },
      {
        name: 'Afrutado Cítrico',
        description: '',
      },
      {
        name: 'Aflorado',
        description: 'Flores Silvestres',
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
        description: 'Corteza • Madera Fresca',
      },
      {
        name: 'Especias',
        description: '',
      },
    ],
    assessment: {
      title: 'Evaluación',
      classification: 'Clasificacion de Manapiare',
      equipment: 'Equipo de Cata',
    },
    information: [
      {
        title: 'A = Aroma:',
        description: {
          boldText: 'FUERTE',
          additionalText: 'Esencia a hierba y madera',
        },
      },
      {
        title: 'S = Sabor:',
        description: {
          boldText: 'MEDIO',
          additionalText: 'Presencia de sabores afrutados',
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
      alt: 'Cacao de Manapiare Fino',
      description: [
        {
          text: 'Dentro de los atributos que componen el exquisito grano posiblemente por la mezcla de plantaciones con genética acriollada y de cacaos híbridos se adquieren los siguientes resultados de (±12%) en granos criollos, (±85%) en granos fermentados, en granos violeta (±10%) y en granos pizarrosos (±5%).',
        },
        {
          text: 'En cuanto al peso contiene 81 almendras referentes a un peso de 100 gr, en otros términos cada almendra pesa 1,23gr.',
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
            '"Las notas herbales y de vegetales como corteza y madera intensifica el atributo floral de este material. Asimismo el sabor ácido se muestra en intensidad moderada y se compenetra con el atributo de frutas frescas de manera interesante."',
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
            '"Muestra notas de un cacao híbrido con sabores de madera fresca, corteza y flores silvestres con aromas de bosque, notas perfumadas, sensaciones de ardiente y acholado"',
          author: 'indicó la Ing. Ms. Gladys Ramos.',
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
              'El grano de Manapiare posee un alto porcentaje de genética trinitaria y mediana descendencia criolla, el cual cumple el siguiente proceso de fermentación:',
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
                value: '9 días',
              },
              {
                items: [
                  'Tipo de cajon: Madera',
                  'Frecuencia de volteos: cada 24 horas',
                  'Forma de Fermentación: La fermentación se realiza en cajones de madera.',
                ],
              },
            ],
            image: {
              alt: 'protocolo de fermentacion',
            },
          },
          {
            title: 'Protocolo de Secado',
            items: [
              {
                key: 'Tipo de Cacao',
              },
              {
                alt: 'semilla manapiare',
                text: 'Trinitario Seco',
              },
              {
                key: 'Días de Secado',
                value: '8 a 9 días',
              },
              {
                key: 'Técnicas de Secado',
              },
              {
                items: [
                  'Tipo de piso: cemento / concreto',
                  'Humedad: 7%',
                  'Forma de Secado: al sol',
                ],
              },
              {
                text: 'El secado inicia a tempranas horas de la mañana extendiendo los granos en los patios de cemento, haciendo remociones frecuentes para lograr un secado uniforme.',
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
        text: 'Amazonas cuenta con una población de 178.670 habitantes de los cuales 45% es o se identifica como indígena.',
      },
      {
        text: 'El sector más representativo es la comunidad Piaroa, ubicada en San juan de Manapiare donde se encuentra la Asociación indígena y productora de cacao (APIPROCA).',
      },
      {
        text: 'Las comunidades de este místico pueblo, llevan un modo de vida austero, residen en viviendas de palma y barro, así como también en algunas viviendas de bloques.',
      },
      {
        text: 'Sus pobladores trabajan en esquema de unidad familiar; entre ellos se encuentra la familia Rodríguez, conformada por el señor Pastor Rodríguez, junto con su hija Susana, acompañados también por Silvino Rodríguez y Marcos García, quienes son los encargados de (APIPROCA);la asociación fue constituida hace catorce años y está conformada por 14 productores, que le imprimen todo el esfuerzo y dedicación a la preservación del distinguido grano.',
      },
      {
        text: 'Se mantienen activas 24 Ha productivas, con la estupenda labor de la cultura Piaroa para proporcionar el mejor grano, ya que producen en armonía 10.000 kg anuales de cacao durante dos temporadas de cosecha, la principal en los meses entre Octubre - Noviembre (7000kg) y la media entre los meses Diciembre - enero(3000Kg).',
      },
      {
        text: 'Su jornada inicia a las 7:00 am donde realizan la limpieza y poda hasta culminar a las 5:00 pm, (generalmente la cosecha la realizan entre los meses de noviembre y diciembre) una vez culminado el proceso se trasladan al conuco y se dedican a otros rubros.',
      },
      {
        text: 'Ya recolectado el cacao se dedican a otras actividades como producir ají, variedades de yuca, maíz, naranja, mañongo (fruto que comen en horas de la mañana para aguantar el trabajo del día), licor yareke y cazabe, aunado a esto elaboran curiaras con madera tipo sasafrás, estas últimas utilizadas como principal medio de transporte.',
      },
      {
        text: '"El proceso de recolección posee una característica muy particular; ya que se realiza un recorrido por las comunidades aledañas (recogiendo las mazorcas) de las cuales la población más cercana se encuentra a 40 min en curiara, una vez reunido el fruto se traslada al centro para realizar el proceso de beneficio post cosecha. Aproximadamente 5000 kg se trasladan de Manapiare a Puerto Ayacucho realizando un recorrido por el rio Ventuari, pernoctando en cada una de las comunidades durante 7 días.", Explicó, el señor Pastor Rodríguez miembro de APIPROCA y encargado de la recolección.',
      },
      {
        text: 'Finalmente el producto es trasladado en camiones de Puerto Ayacucho a Caracas.',
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
        alt: 'mapa de Chuao',
      },
      details: [
        { label: 'País', value: 'Venezuela' },
        { label: 'Estado', value: 'Amazonas' },
        { label: 'Municipio', value: 'Manapiare' },
        { label: 'Superficie', value: '178.95 km2' },
        { label: 'Coordenadas GPS', value: 'Manapiare: 5º04´28”N 65º32´40”W' },
        { label: 'Coordenadas GPS', value: 'Amazona: 03º30´N 66º00”W' },
        { label: 'Habitantes', value: '178.670' },
      ],
    },
    paragraphs: [
      'El Estado Amazonas se encuentra localizado en la Guayana Venezolana, cuya capital es Puerto Ayacucho, posee una superficie de 178.095 Km2, la superficie limita por el norte con el Estado Bolívar, por el sur y el este con la República de Brasil, y por el oeste con la República de Colombia.',
      'El caserío de San Juan de Manapiare se encuentra ubicado en una zona selvática a orillas del río Manapiare y el rio Ventuari, al sur de la Serranía Guanay y al este del Cerro Morrocoy.',
    ],
    ecology: {
      title: 'Ecología',
      paragraphs: [
        'La vegetación que predomina es el bosque tropical húmedo con formaciones de dos a cuatro estratos vegetales verticales; con niveles inferiores de arbustos y los superiores de árboles de gran desarrollo (30 a 40 m), con troncos lisos y rectos. Entre sus suelos se determina el de montaña, de peniplanicie y de valle.',
        'Los suelos de valle, que pueden ser considerados como acumulaciones de aluviones recientes son de color rojizo son los de mayor interés para la población nativa, pues sustentan la producción agrícola.',
        'El sistema de riego para la producción es natural, a través del agua de lluvia.',
        'La fauna se encuentra constituida por una gran variedad de mamíferos como el mono tití, el mono araña, y la ardilla amazónica, así como también el báquiro cachete blanco, la nutria y el cachicamo gigante, los cuales son consumidos por los indígenas y criollos de la zona. Entre las aves encontramos el paují nocturno, pájaro paragua, guacamaya, y gran variedad de especies de tucanes.',
        'Las tortugas son comunes en la red de ríos; entre los cocodrilos es común observar la babilla negra y en serpientes, entre los más representativos se encuentra la culebra lora y la mapanare del Amazonas.',
        'Finalmente, en el Amazonas destacan una serie de especies de ranas arborícolas endémicas',
      ],
      images: [
        {
          alt: 'ubicacion de Manapiare',
        },
        {
          alt: 'ubicacion de Manapiare',
        },
      ],
    },
  },
  history: {
    title: 'Historia',
    images: [
      {
        alt: 'historia de Manapiare',
      },
      {
        alt: 'historia de Manapiare',
      },
    ],
    content: [
      {
        text: 'Durante los años 1990 y 1996 en amazonas se realizó la recolección de todos los tipos de cacao puro, iniciando con las siembras de cacao criollo puro, donde predominó de acuerdo a las cualidades del suelo y clima amazónico, el cacao híbrido Chuao y Ocumare.',
      },
      {
        text: 'San Juan de Manapiare fue fundada en 1940 por el explorador Don Melicio Pérez.',
      },
      {
        text: 'La enigmática tierra del Amazonas preserva su inmarcesible energía y modo de vida desde que llegaron a las ancestrales tierras los aborígenes ,sus habitantes mantienen formas culturales relativamente autóctonas, tales como: establecimientos dispersos y semi-nómada, un sistema sencillo en el cual los elementos tradicionales son todavía notables, también se encuentra las aldeas transculturizadas que son los que han emigrado a las orillas de los ríos Ventuari y Manapiare, cuentan con una economía de subsistencia y su religión autóctona.',
      },
      {
        text: 'Así mismo mantienen piezas de su cultura material, casas comunitarias de forma cónico-elíptica con techos de palma que llegan hasta el suelo, cerbatanas con flechas humedecidas con curare, pinturas vegetales, embarcaciones de motor y remo.',
      },
      {
        text: 'Años posteriores, cuando los españoles jesuitas descubrieron en este valioso territorio, la tierra rica en cacao, decidieron propagar y promover el cultivo, de la forma silvestre a una forma tecnificada; hecho que se comprueba con los testimonios de los productores de cacao del valle del río Marañón cuando relatan el proceso de la siembra al trasplante, a abonar y a cuidar las plantaciones.',
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
      alt: 'Manapiare Cocoa Cover',
    },
    rating: {
      stars: 'Rating Stars 4.0',
    },
    sections: [
      {
        items: [
          { label: 'SWEET FRUITY', value: '1.2' },
          { label: 'CITRUS FRUITY', value: '3.1' },
          { label: 'FLORAL', value: '2.0' },
          { label: 'CREOLE', value: '0.0' },
          { label: 'COCOA', value: '3.5' },
          { label: 'WOODSY', value: '2.1' },
          { label: 'SPICES', value: '0.0' },
        ],
      },
      {
        items: [
          { label: 'ANNUAL PRODUCTION (MT)', value: '12' },
          { label: 'MAIN HARVEST', value: 'DEC-FEB' },
          { label: 'MID HARVEST', value: 'MAR-APR' },
        ],
      },
      {
        items: [{ label: 'CREOLE BEANS', value: '12%' }],
      },
      {
        items: [
          { label: 'FERMENTED BEANS', value: '85%' },
          { label: 'VIOLET BEANS', value: '10%' },
          { label: 'SLATE BEANS', value: '5%' },
          { label: 'TOTAL', value: '100%' },
        ],
      },
      {
        items: [
          { label: 'Beans / 100g:', value: '81' },
          { label: 'g./1 Bean:', value: '1.23 g' },
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
    flavors: [
      {
        name: 'Sweet Fruity',
        description: 'Fresh Fruits',
      },
      {
        name: 'Citrus Fruity',
        description: '',
      },
      {
        name: 'Floral',
        description: 'Wild Flowers',
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
        description: 'Bark • Fresh Wood',
      },
      {
        name: 'Spices',
        description: '',
      },
    ],
    assessment: {
      title: 'Evaluation',
      classification: 'Manapiare Classification',
      equipment: 'Tasting Team',
    },
    information: [
      {
        title: 'A = Aroma:',
        description: {
          boldText: 'STRONG',
          additionalText: 'Essence of grass and wood',
        },
      },
      {
        title: 'F = Flavor:',
        description: {
          boldText: 'MEDIUM',
          additionalText: 'Presence of fruity flavors',
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
      title: 'Cut Analysis',
      alt: 'Fine Manapiare Cocoa',
      description: [
        {
          text: 'Among the attributes that compose this exquisite bean, possibly due to the mix of plantations with Creole genetics and hybrid cocoas, we obtain the following results: (±12%) in Creole beans, (±85%) in fermented beans, (±10%) in violet beans, and (±5%) in slate beans.',
        },
        {
          text: 'In terms of weight, it contains 81 almonds, corresponding to a weight of 100 g; in other words, each almond weighs 1.23 g.',
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
            '"Herbal and vegetal notes like bark and fresh wood intensify the floral attribute of this material. Similarly, the acidic flavor shows moderate intensity and interestingly intertwines with the fresh fruit attribute."',
          author: 'detailed by Ms. Gladys Ramos, Engineer.',
        },
      ],
      image: { alt: 'Cocoa Flavor Wheel' },
    },
    {
      title: 'Sensory Map',
      content: [
        {
          type: 'quote',
          quote:
            '"Shows notes of a hybrid cocoa with flavors of fresh wood, bark, and wild flowers combined with forest aromas, perfumed notes, and sensations of warmth and acholado"',
          author: 'stated by Ms. Gladys Ramos, Engineer.',
        },
      ],
      image: {
        alt: 'Flavor Sensory Map',
      },
    },
  ],
  postHarvestBenefit: {
    title: 'Post-Harvest Benefit',
    content: [
      {
        protocols: [
          {
            title: 'Fermentation Protocol',
            description:
              'Manapiare beans have a high percentage of Trinitario genetics and medium Creole descent, undergoing the following fermentation process:',
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
                value: '9 days',
              },
              {
                items: [
                  'Crate Type: Wood',
                  'Turning Frequency: Every 24 hours',
                  'Fermentation Method: Fermentation takes place in wooden crates.',
                ],
              },
              {
                text: 'Drying begins early in the morning, spreading the grains on the cement patios, stirring frequently to achieve uniform drying.',
              },
            ],
            image: {
              alt: 'fermentation protocol',
            },
          },
          {
            title: 'Drying Protocol',
            items: [
              {
                key: 'Cocoa Type',
              },
              {
                alt: 'manapiare seed',
                text: 'Dry Trinitario',
              },
              {
                key: 'Drying Days',
                value: '8 to 9 days',
              },
              {
                key: 'Drying Techniques',
              },
              {
                items: ['Floor type: cement/concrete', 'Humidity: 7%', 'Drying method: sun-dried'],
              },
              {
                text: 'Drying begins early in the morning, spreading the grains on the cement patios, stirring frequently to achieve uniform drying.',
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
        text: 'Amazonas has a population of 178,670 inhabitants, of which 45% are or identify as indigenous.',
      },
      {
        text: 'The most representative sector is the Piaroa community, located in San Juan de Manapiare, where the Indigenous and Cacao Producers Association (APIPROCA) is located.',
      },
      {
        text: 'The communities of this mystical town lead an austere lifestyle, living in palm and mud houses, as well as in some block houses.',
      },
      {
        text: 'Its residents work as a family unit; Among them is the Rodríguez family, made up of Mr. Pastor Rodríguez, along with his daughter Susana, accompanied by Silvino Rodríguez and Marcos García, who are in charge of (APIPROCA); the association was established fourteen years ago and is made up of 14 producers, who put all their effort and dedication into the preservation of the distinguished bean.',
      },
      {
        text: '24 productive hectares remain active, with the stupendous work of the Piaroa culture to provide the best bean, as they harmoniously produce 10,000 kg of cocoa annually during two harvest seasons, the main one in the months between October and November (7,000 kg) and the mid-season between December and January (3,000 kg).',
      },
      {
        text: 'Their day begins at 7:00 am, where they clean and prunes until finishing at 5:00 pm (generally, the harvest takes place between the months of November and December) once the process is complete, they move to the conuco and dedicate themselves to other activities.',
      },
      {
        text: "Once the cacao is harvested, they dedicate themselves to other activities such as producing chili peppers, varieties of yuca, corn, oranges, mañongo (a fruit they eat in the morning to endure the day's work), yareke liquor, and cassava. In addition, they make curiaras with sassafras-type wood, the latter used as their primary means of transportation.",
      },
      {
        text: '"The harvesting process has a very particular characteristic; a tour is made of the surrounding communities (collecting the cobs), from which the nearest town is a 40-minute drive by curiara. Once the fruit is gathered, it is transported to the center for the post-harvest processing process. Approximately 5,000 kg are transported from Manapiare to Puerto Ayacucho along the Ventuari River, spending the night in each community for 7 days," explained Mr. Pastor Rodríguez, a member of APIPROCA and in charge of the collection.',
      },
      {
        text: 'Finally, the product is transported by truck from Puerto Ayacucho to Caracas.',
      },
    ],
    images: [
      {
        alt: 'Certificate of Origin',
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
        alt: 'Chuao map',
      },
      details: [
        { label: 'Country', value: 'Venezuela' },
        { label: 'State', value: 'Amazonas' },
        { label: 'Municipality', value: 'Manapiare' },
        { label: 'Area', value: '178.95 km²' },
        { label: 'GPS Coordinates', value: 'Manapiare: 5º04´28”N 65º32´40”W' },
        { label: 'GPS Coordinates', value: 'Amazonas: 03º30´N 66º00”W' },
        { label: 'Inhabitants', value: '178,670' },
      ],
    },
    paragraphs: [
      'Amazonas State is located in the Venezuelan Guayana region, with Puerto Ayacucho as its capital. It covers 178,095 km², bordering Bolívar State to the north, Brazil to the south and east, and Colombia to the west.',
      'The village of San Juan de Manapiare is situated in a jungle area along the Manapiare and Ventuari rivers, south of the Guanay Mountain Range and east of Morrocoy Hill.',
    ],
    ecology: {
      title: 'Ecology',
      paragraphs: [
        'The predominant vegetation is tropical humid forest with 2-4 vertical vegetative strata. Valley soils of reddish alluvial deposits support native agricultural production.',
        'Natural rainfall provides irrigation. The fauna includes titi monkeys, spider monkeys, Amazonian squirrels, white-lipped peccaries, giant otters, and armadillos. Notable birds include nocturnal curassows, umbrella birds, and macaws.',
        'Reptilian species feature black caimans, Amazonian parrot snakes, and tree frogs. The ecosystem sustains both indigenous subsistence and biodiversity conservation.',
      ],
      images: [
        {
          alt: 'Manapiare location',
        },
        {
          alt: 'Manapiare location',
        },
      ],
    },
  },
  history: {
    title: 'History',
    images: [
      {
        alt: 'Manapiare history',
      },
      {
        alt: 'Manapiare history',
      },
    ],
    content: [
      {
        text: 'During the years 1990 and 1996, all types of pure cacao were harvested in the Amazon, beginning with the planting of pure criollo cacao, where, according to the qualities of the Amazonian soil and climate, the hybrid Chuao and Ocumare cacao predominated.',
      },
      {
        text: 'San Juan de Manapiare was founded in 1940 by the explorer Don Melicio Pérez.',
      },
      {
        text: 'The enigmatic land of the Amazon preserves its unfading energy and way of life since the aboriginal people arrived on their ancestral lands. Its inhabitants maintain relatively indigenous cultural forms, such as: dispersed and semi-nomadic settlements, a simple system in which traditional elements are still notable. There are also transculturalized villages, which are those that have migrated to the banks of the Ventuari and Manapiare rivers. They have an economy of subsistence and their indigenous religion.',
      },
      {
        text: 'They also maintain pieces of their material culture, conical-elliptical community houses with palm roofs that reach the ground, blowguns with arrows moistened with curare, plant paintings, motorboats, and oars.',
      },
      {
        text: 'Years later, when the Spanish Jesuits discovered cacao-rich soil in this valuable territory, they decided to propagate and promote the cultivation, from the wild to a technologically advanced form; a fact confirmed by the testimonies of cacao producers in the Marañón River Valley when they describe the process from planting to transplanting, fertilizing, and caring for the plantations.',
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

const manapiare = { es, en };

export { manapiare };
