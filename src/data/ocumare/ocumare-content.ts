const es = {
  generalInformation: {
    title: 'evaluacion',
    image: {
      alt: 'portada de ocumare cacao',
    },
    rating: {
      stars: 'estrellas de calificación 2.0',
    },
    sections: [
      {
        items: [
          { label: 'AFRUTADO DULCE', value: '1.3' },
          { label: 'AFRUTADO CÍTRICO', value: '2.2' },
          { label: 'AFLORADO', value: '0.5' },
          { label: 'ACRIOLLADO', value: '0.4' },
          { label: 'CACAO', value: '3.4' },
          { label: 'BOSCOSO', value: '0.0' },
          { label: 'ESPECIAS', value: '0.0' },
        ],
      },
      {
        items: [
          { label: 'PRODUCCIÓN ANUAL (TM)', value: '3' },
          { label: 'COSECHA PRINCIPAL', value: 'OCT-ENE' },
          { label: 'COSECHA MEDIA', value: 'MAY-JUL' },
        ],
      },
      {
        items: [{ label: 'GRANOS CRIOLLOS', value: '20%' }],
      },
      {
        items: [
          { label: 'GRANOS FERMENTADOS', value: '82%' },
          { label: 'GRANOS VIOLETAS', value: '10%' },
          { label: 'GRANOS PIZARROSOS', value: '8%' },
          { label: 'TOTAL', value: '100%' },
        ],
      },
      {
        items: [
          { label: 'Granos / 100g:', value: '80' },
          { label: 'g./1 Grano:', value: '1,25 g' },
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
        description: 'Frutas Tropicales',
      },
      {
        name: 'Afrutado Cítrico',
        description: '',
      },
      {
        name: 'Aflorado',
        description: 'Flores',
      },
      {
        name: 'Acriollado',
        description: 'Malta • Panela • Nuez • Caramelo',
      },
      {
        name: 'Cacao',
        description: 'Cacao',
      },
      {
        name: 'Boscoso',
        description: '',
      },
      {
        name: 'Especias',
        description: '',
      },
    ],
    assessment: {
      title: 'Evaluación',
      classification: 'Clasificacion de Ocumare',
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
          additionalText: 'Esencias afloradas',
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
      alt: 'Cacao de Ocumare',
      description: [
        {
          text: 'El grano de Ocumare, posee unas características particulares a causa del alto nivel de descendencia trinitaria y moderada genética criolla así como también el estándar de calidad que constituye. En sus análisis de corte los resultados contienen hasta un (±20%) de grano criollo, grano fermentados (±82%)con granos violetas (±10%) y granos pizarrosos(±8%).',
        },
        {
          text: 'En relación a su peso generalmente los granos contienen 80 almendras sobre un peso de 100 gr; es decir que cada almendra pesa 1,25 gr.',
        },
      ],
    },
  },
  cocoaMap: [
    {
      title: 'Mapa de Sabores',
      content: [
        {
          text: 'El material genético de cacao de Ocumare constituye un criollo moderno donde se destacan los sabores de nueces, panela/malta que le confieren atributos de sabores muy deseables.',
        },
        {
          text: 'La intensidad de suave a moderada de la acidez se asocia con notas dulces y afrutadas de frutas tropicales sobre un fondo moderado a cacao de 3,4.',
        },
      ],
      image: { alt: 'Rueda de sabores del cacao' },
    },
    {
      title: 'Mapa Sensorial',
      content: [
        {
          text: 'Entre los sabores característicos con mayor presencia en este perfil se perciben las nueces, afrutados y florales en un fondo moderado a cacao con un amargor interesante que le da buen carácter y deseada persistencia.',
        },
        {
          text: 'Conviene cuidar todas las condiciones que permitan destacar esta combinación de atributos de criollo con la variedad de notas de los trinitarios. Es la nota clásica de los criollos modernos.',
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
              'Los granos de Ocumare contienen un alto porcentaje en descendencia criolla y elevada genética trinitaria, por ello, para su etapa de transformación se debe cumplir el siguiente proceso:',
            items: [
              {
                key: 'Tipo de Cacao',
              },
              {
                alt: 'semilla ocumare',
                text: 'Trinitario &',
              },
              {
                alt: 'semilla ocumare',
                text: 'Criollo',
              },
              {
                key: 'Días de Fermentación',
                value: '4 a 6 días',
              },
              {
                key: 'Técnicas de Fermentación',
              },
              {
                items: [
                  'Tipo de cajon: Madera',
                  'Frecuencia de volteos: Primer día/24 horas, segundo día/48 horas, 5to o 6to día se revisa, para luego ser expuesto en el patio.',
                  'Forma de Fermentación: Los granos son envueltos en hojas de cambur.',
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
                alt: 'semilla ocumare',
                text: 'Trinitario &',
              },
              {
                alt: 'semilla ocumare',
                text: 'Criollo',
              },
              {
                key: 'Días de Secado',
                value: '4 a 6 días',
              },
              {
                key: 'Técnicas de Secado',
              },
              {
                items: [
                  'Tipo de piso: cemento / concreto',
                  'Humedad: Entre 7,5% y 8%',
                  'Forma de Secado: Las remociones del grano se aplican cada 6 horas.',
                  {
                    text: 'En esta fase los granos son tendidos en una superficie, en la cual durante el primer día, las remociones se aplican cada 6 horas, durante todo el proceso dependerá del clima que se presente.',
                  },
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
        text: 'Ocumare tiene una población de 13.043 habitantes, cuenta con un desarrollo agrícola significativo destacándose el cultivo del cacao con alta descendencia criolla y genética trinitaria.',
      },
      {
        text: 'Dentro de sus pobladores se encuentra, el señor José Lugo, tiene 52 años de edad y es productor de cacao que por herencia familiar se dedica a la labor de la tierra desde hace 41 años, donde trabaja toda la unidad familiar, compuesta por sus 3 hijos y en ocasiones cuando la producción aumenta, contrata personal para ejecutar el trabajo.',
      },
      {
        text: 'Actualmente en Ocumare se producen 3.000 kg anuales del mejor cacao durante dos temporadas de cosecha, la principal en los meses entre octubre - enero y la media entre los meses mayo - julio.',
      },
      {
        text: 'Como actividad económica adicional desarrollan la práctica del turismo ya que cuentan con un elevado potencial en esa área, posee una alta actividad pesquera, así como también el cultivo de otros rubros como naranjas, aguacate, yuca, cambures, entre otros.',
      },
      {
        text: 'Para la plantación del grano no utiliza químico alguno, se logra una producción altamente natural.',
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
        alt: 'mapa de Ocumare',
      },
      details: [
        { label: 'País', value: 'Venezuela' },
        { label: 'Estado', value: 'Aragua' },
        { label: 'Municipio', value: 'Ocumare de la Costa' },
        { label: 'Superficie', value: '160 km2' },
        { label: 'Altitud Promedio', value: '13 m.s.n.m.' },
        { label: 'Coordenadas GPS', value: '10°29′10″N 67°46′21″O' },
        { label: 'Habitantes', value: '13.043' },
      ],
    },
    paragraphs: [
      'Ocumare de la Costa es una localidad venezolana que se encuentra ubicada a 43 kilómetros de la ciudad de Maracay, específicamente ubicada en el extremo norte del estado Aragua, Venezuela, situado en las orillas de la cordillera de la Costa, lo que le añade los componentes naturales particulares del Parque nacional Henri Pittier.',
    ],
    ecology: {
      title: 'Ecología',
      paragraphs: [
        'Ocumare de la costa posee una extensa variedad de vegetación que depende del clima ya que se encuentra dentro de su superficie, un bosque tropical seco con especies xerófilas como deciduas y semideciduas, y un bosque húmedo en el cual predominan las especies hidrófilas.',
        'En la superficie destaca un relieve básicamente montañoso, sin embargo, se encuentra con los valles costaneros del río de Ocumare, San Miguel, Cata y Guarapito.',
      ],
      images: [
        {
          alt: 'ubicacion de Ocumare',
        },
        {
          alt: 'ubicacion de Ocumare',
        },
      ],
    },
  },
  history: {
    title: 'Historia',
    images: [
      {
        alt: 'historia de Ocumare',
      },
      {
        alt: 'historia de Ocumare',
      },
    ],
    content: [
      {
        text: 'Ocumare de la costa es un pueblo caliente y pequeño, pero con mucha semblanza para contar, completamente enmarcado en la época colonial de Venezuela, como se puede ver en el recorrido por sus angostas calles y la estructura de las viviendas.',
      },
      {
        text: 'Desde sus inicios los pobladores oriundos de Ocumare, fueron indígenas comandados por el Cacique Barriga, posteriormente invadida como encomienda con sembradíos de cacao, perteneciente al capitán Lorenzo Martínez Madrid.',
      },
      {
        text: 'Este pueblo florece como plantación de cacao en 1721, se funda el poblado, para defender aquel puerto de las hostilidades de los enemigos, como señala un documento de los misioneros al rey en 1745. Cabe destacar que un 27 de abril de 1806 Francisco de Miranda intentó desembarcar en las playas de Ocumare de la Costa en su firme lucha por la independencia de Venezuela.',
      },
      {
        text: 'Fue constituida finalmente el 16 de junio de 1766 en el valle de San Sebastián de Ocumare, en el sitio denominado Cedeño, así mismo, por orden del obispo de Caracas Diego Antonio Diez ,dicta donde será construida la iglesia del tropical pueblo, en medio de extensas haciendas cacaoteras que existían en este lugar desde mucho tiempo atrás.',
      },
      {
        text: 'Los habitantes de este majestuoso pueblo conservan sus ricas tradiciones llenas de religiosidad como la celebración de San Sebastián, Los diablos danzantes y del majestuoso golpe de tambor acompañando a San Juan Bautista.',
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
      alt: 'cover of Ocumare cocoa',
    },
    rating: {
      stars: '2.0 rating stars',
    },
    sections: [
      {
        items: [
          { label: 'SWEET FRUITY', value: '1.3' },
          { label: 'CITRUS FRUITY', value: '2.2' },
          { label: 'FLORAL', value: '0.5' },
          { label: 'CREOLE', value: '0.4' },
          { label: 'COCOA', value: '3.4' },
          { label: 'WOODSY', value: '0.0' },
          { label: 'SPICES', value: '0.0' },
        ],
      },
      {
        items: [
          { label: 'ANNUAL PRODUCTION (MT)', value: '3' },
          { label: 'MAIN HARVEST', value: 'OCT-JAN' },
          { label: 'MID HARVEST', value: 'MAY-JUL' },
        ],
      },
      {
        items: [{ label: 'CREOLE BEANS', value: '20%' }],
      },
      {
        items: [
          { label: 'FERMENTED BEANS', value: '82%' },
          { label: 'VIOLET BEANS', value: '10%' },
          { label: 'SLATE BEANS', value: '8%' },
          { label: 'TOTAL', value: '100%' },
        ],
      },
      {
        items: [
          { label: 'Beans / 100g:', value: '80' },
          { label: 'g./1 Bean:', value: '1.25 g' },
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
        description: 'Tropical Fruits',
      },
      {
        name: 'Citrus Fruity',
        description: '',
      },
      {
        name: 'Floral',
        description: 'Flowers',
      },
      {
        name: 'Creole',
        description: 'Malt • Panela • Nut • Caramel',
      },
      {
        name: 'Cocoa',
        description: 'Cocoa',
      },
      {
        name: 'Woodsy',
        description: '',
      },
      {
        name: 'Spices',
        description: '',
      },
    ],
    assessment: {
      title: 'Assessment',
      classification: 'Ocumare Classification',
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
          additionalText: 'Floral essences',
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
      alt: 'Ocumare Cocoa',
      description: [
        {
          text: 'The Ocumare bean has particular characteristics due to its high Trinitario ancestry and moderate Creole genetics, as well as its quality standards. Cut test results show (±20%) Creole beans, (±82%) fermented beans with (±10%) violet beans and (±8%) slate beans.',
        },
        {
          text: 'Regarding weight, beans typically contain 80 almonds per 100g weight; meaning each almond weighs 1.25g.',
        },
      ],
    },
  },
  cocoaMap: [
    {
      title: 'Flavor Map',
      content: [
        {
          text: 'The genetic material of Ocumare cocoa constitutes a modern Creole, highlighting nutty and panela/malt flavors that give it highly desirable flavor attributes.',
        },
        {
          text: 'The soft to moderate intensity of acidity combines with sweet tropical fruit notes over a moderate cocoa base of 3.4.',
        },
      ],
      image: { alt: 'Cocoa flavor wheel' },
    },
    {
      title: 'Sensory Map',
      content: [
        {
          text: 'The most prominent characteristic flavors in this profile include nutty, fruity and floral notes over a moderate cocoa base with interesting bitterness that provides good character and desired persistence.',
        },
        {
          text: 'It is essential to maintain all conditions that enhance this combination of Creole attributes with Trinitario flavor notes. This is the classic profile of modern Creoles.',
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
            items: [
              {
                text: 'Ocumare beans have high Creole ancestry and significant Trinitario genetics, requiring this specific process:',
              },
              {
                key: 'Cocoa Type',
              },
              {
                alt: 'ocumare seed',
                text: 'Trinitario &',
              },
              {
                alt: 'ocumare seed',
                text: 'Creole',
              },
              {
                key: 'Fermentation Days',
                value: '4 to 6 days',
              },
              {
                items: [
                  'Box type: Wood',
                  'Turning frequency: First day/24 hours, second day/48 hours, checked on 5th-6th day before patio exposure',
                  'Fermentation method: Beans wrapped in banana leaves.',
                ],
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
                alt: 'ocumare seed',
                text: 'Trinitario &',
              },
              {
                alt: 'ocumare seed',
                text: 'Creole',
              },
              {
                key: 'Drying Days',
                value: '4 to 6 days',
              },
              {
                key: 'Drying Techniques',
              },
              {
                items: [
                  'Floor type: cement/concrete',
                  'Moisture: Between 7.5% and 8%',
                  'Drying method: Beans are turned every 6 hours',
                  {
                    text: 'During this phase, beans are spread on a surface where they are turned every 6 hours on the first day. Subsequent turning depends on weather conditions.',
                  },
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
        text: 'Ocumare has a population of 13,043 inhabitants with significant agricultural development, particularly in cocoa cultivation with high Creole ancestry and Trinitario genetics.',
      },
      {
        text: 'Among its residents is Mr. José Lugo, a 52-year-old cocoa producer who has worked the land for 41 years as a family tradition. His entire family unit works the plantation, including his 3 children, with additional hired help during peak production.',
      },
      {
        text: 'Currently, Ocumare produces 3,000 kg annually of premium cocoa across two harvest seasons: main harvest from October-January and mid harvest from May-July.',
      },
      {
        text: 'Additional economic activities include tourism development due to high potential in this area, significant fishing industry, and cultivation of other crops like oranges, avocados, cassava, and plantains.',
      },
      {
        text: 'No chemicals are used in bean cultivation, resulting in completely natural production.',
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
        alt: 'Ocumare map',
      },
      details: [
        { label: 'Country', value: 'Venezuela' },
        { label: 'State', value: 'Aragua' },
        { label: 'Municipality', value: 'Ocumare de la Costa' },
        { label: 'Area', value: '160 km²' },
        { label: 'Average Altitude', value: '13 m.a.s.l.' },
        { label: 'GPS Coordinates', value: '10°29′10″N 67°46′21″W' },
        { label: 'Inhabitants', value: '13,043' },
      ],
    },
    paragraphs: [
      'Ocumare de la Costa is a Venezuelan town located 43 kilometers from Maracay city, at the northern tip of Aragua State. Situated along the Costa Mountain Range, it shares natural features with Henri Pittier National Park.',
    ],
    ecology: {
      title: 'Ecology',
      paragraphs: [
        'Ocumare de la Costa features diverse vegetation ranging from dry tropical forests with xerophilous species to humid forests with hydrophilic plants, depending on microclimates.',
        'The mountainous terrain includes coastal valleys of the Ocumare, San Miguel, Cata and Guarapito rivers.',
      ],
      images: [
        {
          alt: 'Ocumare location',
        },
        {
          alt: 'Ocumare location',
        },
      ],
    },
  },
  history: {
    title: 'History',
    images: [
      {
        alt: 'Ocumare history',
      },
      {
        alt: 'Ocumare history',
      },
    ],
    content: [
      {
        text: 'Ocumare de la Costa is a warm, small town rich in colonial history, evident in its narrow streets and traditional house structures.',
      },
      {
        text: 'Originally inhabited by indigenous groups led by Chief Barriga, it later became a cocoa plantation encomienda under Captain Lorenzo Martínez Madrid in the colonial era.',
      },
      {
        text: "The town flourished as a cocoa plantation from 1721. Historical records note Francisco de Miranda's attempted landing on April 27, 1806 during Venezuela's independence struggle.",
      },
      {
        text: "Officially established on June 16, 1766 in the San Sebastián de Ocumare valley, the town's church was built amidst extensive cocoa plantations under orders from Caracas Bishop Diego Antonio Diez.",
      },
      {
        text: 'Residents preserve rich traditions like the San Sebastián celebrations, Dancing Devils rituals, and drum ceremonies honoring Saint John the Baptist.',
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

const ocumare = { es, en };

export { ocumare };
