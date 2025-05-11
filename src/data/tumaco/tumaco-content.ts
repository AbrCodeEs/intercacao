const es = {
  generalInformation: {
    title: 'evaluacion',
    image: {
      alt: 'portada cacao gourmet patanemo fino',
    },
    rating: {
      stars: 'estrellas de calificación 3.8',
    },
    sections: [
      {
        items: [
          { label: 'AFRUTADO DULCE', value: '3.5' },
          { label: 'AFRUTADO CÍTRICO', value: '3.0' },
          { label: 'AFLORADO', value: '1.5' },
          { label: 'ACRIOLLADO', value: '2.2' },
          { label: 'CACAO', value: '4.0' },
          { label: 'BOSCOSO', value: '1.5' },
          { label: 'ESPECIAS', value: '0.0' },
        ],
      },
      {
        items: [
          { label: 'PRODUCCIÓN ANUAL (TM)', value: '75' },
          { label: 'COSECHA PRINCIPAL', value: 'DIC-MAR' },
          { label: 'COSECHA MEDIA', value: 'JUN-JUL' },
        ],
      },
      {
        items: [{ label: 'GRANOS CRIOLLOS', value: '12%' }],
      },
      {
        items: [
          { label: 'GRANOS FERMENTADOS', value: '78%' },
          { label: 'GRANOS VIOLETAS', value: '10%' },
          { label: 'GRANOS PIZARROSOS', value: '12%' },
          { label: 'TOTAL', value: '100%' },
        ],
      },
      {
        items: [
          { label: 'Granos / 100g:', value: '79' },
          { label: 'g./1 Grano:', value: '1,27 g' },
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
        description: 'Naranja',
      },
      {
        name: 'Aflorado',
        description: '',
      },
      {
        name: 'Acriollado',
        description: 'Nueces',
      },
      {
        name: 'Cacao',
        description: 'Cacao',
      },
      {
        name: 'Boscoso',
        description: 'Madera',
      },
      {
        name: 'Especias',
        description: '',
      },
    ],
    assessment: {
      title: 'Evaluación',
      classification: 'Clasificación de Tumaco Fino',
      equipment: 'Equipo de Cata',
    },
    information: [
      {
        title: 'S = Sabor:',
        description: {
          boldText: 'MEDIO',
          additionalText: 'Denota sabor a nueces, afrutado',
        },
      },
      {
        title: 'A = Aroma:',
        description: {
          boldText: 'MEDIO',
          additionalText: 'Esencias a flores cítricas',
        },
      },
      {
        title: 'F = Fermentación:',
        description: {
          boldText: 'ALTA',
          additionalText: 'Baja astringencia y amargura',
        },
      },
    ],
    analysis: {
      title: 'Análisis de Corte',
      alt: 'Cacao de Tumaco Fino',
      description: [
        {
          text: 'A causa de las propiedades de moderada genética criolla con 12% de granos blancos y elevada descendencia trinitaria se delimitan los siguientes resultados en la prueba de corte, (±78%) en granos fermentados, en granos violeta (±10%) y en granos pizarrosos (±12%).',
        },
        {
          text: 'En relación al peso contiene 79 almendras referentes a un peso de 100 gr, en otros términos cada almendra pesa 1,27gr.',
        },
      ],
    },
  },
  cocoaMap: [
    {
      title: 'Mapa de Sabores',
      content: [
        {
          type: 'paragraph',
          text: 'Responde a las condiciones de humedad del ambiente de Tumaco donde la presencia moderada de aguas salobres del golfo existente en la zona moldea el perfil de este cacao. ',
        },
        {
          type: 'paragraph',
          text: 'Existen condiciones demanda atmosférica satisfecha en forma permanente, no se conocen periodos de stress hídrico, y se mantiene una acidez moderada de frutos dulces.',
        },
        {
          type: 'paragraph',
          text: 'Posee un clima tropical húmedo y relieves variados desde montañas en el piedemonte costero hasta las llanuras del Pacifico donde se presentan accidentes geográficos como bahías, islas, manglares, ríos y lagunas.',
        },
      ],
      image: { alt: 'Rueda de sabores del cacao' },
    },
    {
      title: 'Mapa Sensorial',
      content: [
        {
          type: 'paragraph',
          text: 'Predomina un buen fondo a cacao donde se perciben proporcionalmente notas ácidas de frutos maduros, nueces, es posible distinguir la fragancia de flores y bosque en el sabor a madera.',
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
            title: 'Protocolo de Fermentación',
            items: [
              {
                key: 'Tipo de Cacao',
              },
              {
                alt: 'semilla tumaco',
                text: 'Trinitario &',
              },
              {
                alt: 'semilla tumaco',
                text: 'Criollo',
              },
              {
                key: 'Días de Fermentación',
                value: '5 a 6 días',
              },
              {
                items: [
                  'Tipo de cajon: Madera',
                  'Frecuencia de volteos: cada 24 horas',
                  'Forma de Fermentación: Cajones de madera tapado con hojas de plátano.',
                ],
              },
              {
                text: 'Los cacaos en baba o frescos son recogidos en las fincas de los agricultores en el transcurso del día, transportados hasta la central en baldes plásticos y estos son colocados en los cajones de madera hacia el final de la tarde, tapando las masas con hojas de plátano con el fin de que sus levaduras ayuden a activar el proceso de descomposición de los ácidos acéticos.',
              },
              {
                text: 'El proceso de fermentación en la central es entre 5 y 6 días, realizando volteos cada 24 horas.',
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
                alt: 'semilla trinitario',
                text: 'Trinitario &',
              },
              {
                alt: 'semilla trinitario',
                text: 'Criollo',
              },
              {
                key: 'Días de Secado',
                value: '5 a 8 días',
              },
              {
                key: 'Técnicas de Secado',
              },
              {
                items: [
                  'Tipo de piso: cemento / concreto',
                  'Humedad: 7,5% a 8%',
                  'Forma de Secado: Al Sol, camas de secado dentro de marquesinas',
                ],
              },
              {
                text: 'El procedimiento de secado se inicia a tempranas horas del día, 6 a.m. extendiendo el cacao en las camas de secado que están dentro de las marquesinas con una altura entre 3 y 4 cms, el tiempo de secado es establecido por el clima el cual puede variar entre 5 y 8 días hasta reducir su humedad entre el 7.5% y 8%, cada hora se hace remoción de los granos principalmente en los dos primeros días de secado con el fin de que estos queden separados uno del otro.',
              },
              {
                text: 'Las cortinas de las marquesinas son levantadas durante el día para que el aire circule, y son cerradas en las tardes para resguardar los granos de la humedad de la noche.',
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
        text: 'Para la trazabilidad y homogeneidad del producto, establecimos una logística cuyo fin es apoyar al agricultor en la disminución de costos y gastos reduciendo su trabajo de fermentación, secado y transporte del producto, además les garantiza tener el valor de su producto al momento de la cosecha, es así como recolectamos el cacao en baba de las fincas de mayor producción, directamente el día de la cosecha; posteriormente el producto es sometido a nuestro protocolo “flor de baba” con el fin de ofrecer a nuestros clientes un grano de excelente calidad.',
      },
      {
        text: 'Contamos con la participación de aproximadamente 12 agricultores para la producción de cacaos especiales.',
      },
      {
        text: 'Tumaco (Nariño), está habitada principalmente por afrocolombianos y algunos indígenas, tiene una población estimada de 203.971 habitantes, 60% urbanos y 40% rurales, sus habitantes hacen parte de la población del país que ha sido golpeada por la situación de orden publico en Colombia durante muchos años y de las malas gestiones administrativas por lo cual el nivel de vida de los habitantes de Tumaco son de clase baja-media.',
      },
      {
        text: 'La economía se basa principalmente en la agricultura (agroindustria), la pesca, la actividad forestal y el turismo: en Tumaco se produce principalmente: palma africana, cacao y coco; y también se concentra gran parte de la oferta hotelera departamental.',
      },
      {
        text: 'La superficie sembrada en Cacao asciende a 19.400 hectáreas, con una producción general estimada de 2.800 TM anual.',
      },
      {
        text: 'El 50% del área sembrada corresponde a plantaciones antiguas en donde se encuentran los híbridos regionales (pajarito, hartón, etc). Una década atrás se han realizado programas de renovación de cultivos y sustitución de cultivos ilícitos siendo el cacao el producto abanderado para este plan, en esta zona del país, es así como han llegado materiales clónales como ICS 1, ICS 60, ICS 95, TSH 565, IMC 67, MON 1 y CCN 51.',
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
        alt: 'mapa de Tumaco',
      },
      details: [
        { label: 'País', value: 'Colombia' },
        { label: 'Estado', value: 'Nariño' },
        { label: 'Municipio', value: 'Tumaco' },
        { label: 'Superficie', value: '19.400 km2' },
        { label: 'Altitud Promedio', value: '2mts' },
        { label: 'Coordenadas GPS', value: '1°48′24″N 78°45′53″O' },
        { label: 'Habitantes', value: '203.971' },
      ],
    },
    paragraphs: [
      'Tumaco conocido también como la perla del pacifico, se encuentra en el Suroeste Colombiano, en la costa pacífica del departamento de Nariño, cerca de la frontera con el Ecuador.',
    ],
    ecology: {
      title: 'Ecología',
      paragraphs: [
        'Posee un clima tropical húmedo, presenta en toda su extensión diferentes relieves, desde el montañoso en inmediaciones andinas del piedemonte costero hasta la llanura del Pacífico con accidentes geográficos importantes tales como la bahía de Tumaco, Ancón de Sardinas, cabo Manglares, la isla de El Morro entre otros. Su hidrografía consta de ríos y lagunas de importancia como los ríos Mira y Patía, pero así mismo hay pequeños ríos tales como el Caunapi, Chagui, Tablones y Mexicano.',
        'Las temperaturas oscilan entre 23ºC y 29ºC, pero su temperatura media es 26ºC, Por encontrarse en una de las regiones mas lluviosas del mundo presenta precipitaciones hasta de 2.800. La humedad relativa es alta y puede llegar hasta 98%.',
      ],
      images: [
        {
          alt: 'ubicacion de Tumaco',
        },
        {
          alt: 'ubicacion de Tumaco',
        },
      ],
    },
  },
  history: {
    title: 'Historia',
    images: [
      {
        alt: 'historia de Tumaco Fino',
      },
      {
        alt: 'historia de Tumaco Fino',
      },
    ],
    content: [
      {
        text: 'El descubrimiento de una de las perlas del pacifico ocurre con la llegada de los conquistadores españoles, esta región fue el asiento de la Cultura Tumaco - La Tolita; los cuales dejaron una huella imborrable y forma parte de la riqueza del municipio actual.',
      },
      {
        text: 'Se encuentran varias versiones sobre la fundación de Tumaco. Una historia señala que la fundación española sobre el asentamiento indígena existente fue en 1610, cuando el padre Onofre Esteban realizo su trabajo misional en la costa del Pacífico en 1598, labor espiritual y material que culminó en 1613, que tuvo como resultado que la fundación de San Andrés de Tumaco se diera alrededor de 1610. Según el antropólogo Padre José María Garrido, se estimó que la constitución de Tumaco fue el día 30 de noviembre de 1640, fecha considerada oficial y a partir de la cual se cuenta para efectos conmemorativos.',
      },
      {
        text: 'Esta población tuvo el privilegio de recibir la visita del Papa Juan Pablo II en el año de 1986.',
      },
      {
        text: 'En los últimos años el municipio lucha por un cambio social y político que ayude a sus habitantes a mejorar su calidad de vida, y los alejen de los hechos de violencia que han marcado el desarrollo de la región.',
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
      alt: 'gourmet tumaco fino cocoa cover',
    },
    rating: {
      stars: 'rating stars 3.8',
    },
    sections: [
      {
        items: [
          { label: 'SWEET FRUITY', value: '3.5' },
          { label: 'CITRUS FRUITY', value: '3.0' },
          { label: 'FLORAL', value: '1.5' },
          { label: 'CREOLE', value: '2.2' },
          { label: 'COCOA', value: '4.0' },
          { label: 'WOODSY', value: '1.5' },
          { label: 'SPICES', value: '0.0' },
        ],
      },
      {
        items: [
          { label: 'ANNUAL PRODUCTION (TM)', value: '75' },
          { label: 'MAIN HARVEST', value: 'DEC-MAR' },
          { label: 'MID HARVEST', value: 'JUN-JUL' },
        ],
      },
      {
        items: [{ label: 'CREOLE BEANS', value: '12%' }],
      },
      {
        items: [
          { label: 'FERMENTED BEANS', value: '78%' },
          { label: 'VIOLET BEANS', value: '10%' },
          { label: 'SLATE BEANS', value: '12%' },
          { label: 'TOTAL', value: '100%' },
        ],
      },
      {
        items: [
          { label: 'Beans / 100g:', value: '79' },
          { label: 'g./1 Bean:', value: '1.27 g' },
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
        description: 'Orange',
      },
      {
        name: 'Floral',
        description: '',
      },
      {
        name: 'Creole',
        description: 'Nuts',
      },
      {
        name: 'Cocoa',
        description: 'Cocoa',
      },
      {
        name: 'Woodsy',
        description: 'Wood',
      },
      {
        name: 'Spices',
        description: '',
      },
    ],
    assessment: {
      title: 'Assessment',
      classification: 'Tumaco Fino Classification',
      equipment: 'Tasting Panel',
    },
    information: [
      {
        title: 'S = Flavor:',
        description: {
          boldText: 'MEDIUM',
          additionalText: 'Notes of nuts and fruity flavors',
        },
      },
      {
        title: 'A = Aroma:',
        description: {
          boldText: 'MEDIUM',
          additionalText: 'Essences of citrus flowers',
        },
      },
      {
        title: 'F = Fermentation:',
        description: {
          boldText: 'HIGH',
          additionalText: 'Low astringency and bitterness',
        },
      },
    ],
    analysis: {
      title: 'Cut Test Analysis',
      alt: 'Tumaco Fino Cocoa',
      description: [
        {
          text: 'Due to moderate creole genetics with 12% white beans and high trinitario descent, cut test results show: (±78%) fermented beans, (±10%) violet beans, and (±12%) slate beans.',
        },
        {
          text: 'Regarding weight, it contains 79 almonds per 100g weight, meaning each almond weighs 1.27g.',
        },
      ],
    },
  },
  cocoaMap: [
    {
      title: 'Flavor Map',
      content: [
        {
          type: 'paragraph',
          text: 'Responds to the humidity conditions of Tumaco, where moderate brackish waters from the local gulf shape this cocoa profile.',
        },
        {
          type: 'paragraph',
          text: 'Permanent atmospheric demand conditions are met, with no known water stress periods, maintaining moderate acidity of sweet fruits.',
        },
        {
          type: 'paragraph',
          text: 'Features a humid tropical climate with varied relief from coastal foothill mountains to Pacific plains containing geographical features like bays, islands, mangroves, rivers, and lagoons.',
        },
      ],
      image: { alt: 'Cocoa Flavor Wheel' },
    },
    {
      title: 'Sensory Map',
      content: [
        {
          type: 'paragraph',
          text: 'Predominates a solid cocoa base with proportional notes of acidic ripe fruits and nuts. Wood flavors reveal detectable floral and forest fragrances.',
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
                key: 'Cocoa Type',
              },
              {
                alt: 'tumaco seed',
                text: 'Trinitario &',
              },
              {
                alt: 'tumaco seed',
                text: 'Criollo',
              },
              {
                key: 'Fermentation Days',
                value: '5 to 6 days',
              },
              {
                items: [
                  'Box type: Wooden',
                  'Turning frequency: every 24 hours',
                  'Fermentation method: Wooden boxes covered with plantain leaves.',
                ],
              },
              {
                text: 'Fresh cocoa pods are collected from farms during the day, transported to processing centers in plastic buckets, and placed in wooden boxes by late afternoon. Masses are covered with plantain leaves to activate acetic acid decomposition through natural yeasts.',
              },
              {
                text: 'Central fermentation process lasts 5-6 days with daily turnings.',
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
                alt: 'trinitario seed',
                text: 'Trinitario &',
              },
              {
                alt: 'trinitario seed',
                text: 'Criollo',
              },
              {
                key: 'Drying Days',
                value: '5 to 8 days',
              },
              {
                key: 'Drying Techniques',
              },
              {
                items: [
                  'Floor type: concrete',
                  'Humidity: 7.5% to 8%',
                  'Drying method: Sun-dried on beds under marquees',
                ],
              },
              {
                text: 'Drying begins at 6 AM by spreading beans 3-4 cm thick on marquee beds. Drying time (5-8 days) depends on climate until reaching 7.5-8% humidity. Beans are stirred hourly during initial days to separate them.',
              },
              {
                text: 'Marquee curtains remain open for airflow during daytime and closed at night to protect from humidity.',
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
        text: 'We established logistics to support farmers by reducing fermentation/drying/transport costs while guaranteeing product value at harvest. We collect fresh cocoa from high-yield farms on harvest day, then apply our "flor de baba" protocol to ensure premium quality.',
      },
      {
        text: 'Approximately 12 farmers participate in special cocoa production.',
      },
      {
        text: "Tumaco (Nariño) is primarily inhabited by Afro-Colombians and indigenous people (population 203,971: 60% urban, 40% rural). Residents face challenges from Colombia's historical public order issues and poor governance, resulting in low-middle class living standards.",
      },
      {
        text: 'Economy based on agriculture (agroindustry), fishing, forestry, and tourism. Main products: African palm, cocoa, coconut. Contains significant hotel infrastructure.',
      },
      {
        text: '19,400 hectares of cocoa plantations produce ~2,800 TM annually.',
      },
      {
        text: '50% plantations use old regional hybrids (pajarito, hartón). Crop renewal programs replaced illicit crops with clonal materials: ICS 1, ICS 60, ICS 95, TSH 565, IMC 67, MON 1, and CCN 51.',
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
        alt: 'Tumaco map',
      },
      details: [
        { label: 'Country', value: 'Colombia' },
        { label: 'State', value: 'Nariño' },
        { label: 'Municipality', value: 'Tumaco' },
        { label: 'Area', value: '19,400 km2' },
        { label: 'Average Altitude', value: '2m' },
        { label: 'GPS Coordinates', value: '1°48′24″N 78°45′53″W' },
        { label: 'Population', value: '203,971' },
      ],
    },
    paragraphs: [
      'Tumaco, known as the Pearl of the Pacific, is located in southwestern Colombia on the Pacific coast of Nariño near Ecuador.',
    ],
    ecology: {
      title: 'Ecology',
      paragraphs: [
        'Features humid tropical climate with varied relief from Andean foothills to Pacific plains containing geographical landmarks like Tumaco Bay, Ancón de Sardinas, Cabo Manglares, and El Morro Island. Hydrological network includes Mira and Patía rivers.',
        "Temperatures range 23-29°C (average 26°C). As one of Earth's rainiest regions, annual precipitation reaches 2,800mm with relative humidity up to 98%.",
      ],
      images: [
        {
          alt: 'Tumaco location',
        },
        {
          alt: 'Tumaco location',
        },
      ],
    },
  },
  history: {
    title: 'History',
    images: [
      {
        alt: 'Tumaco Fino history',
      },
      {
        alt: 'Tumaco Fino history',
      },
    ],
    content: [
      {
        text: 'This Pacific pearl was discovered by Spanish conquistadors, originally home to the Tumaco-La Tolita culture whose indelible legacy remains part of municipal wealth.',
      },
      {
        text: "Multiple accounts exist about Tumaco's founding. One suggests Spanish establishment over indigenous settlements in 1610 by missionary Onofre Esteban. Anthropologist Father José María Garrido officialized November 30, 1640 as foundation date.",
      },
      {
        text: 'Pope John Paul II visited Tumaco in 1986.',
      },
      {
        text: 'Recent years see social/political efforts to improve living standards and reduce regional violence affecting development.',
      },
    ],
  },
  socialResponsibility: {
    title: 'Social Responsibility',
    images: [{ alt: 'Community project' }, { alt: 'Education program' }],
    paragraphs:
      'Primary objective: Promote sustainable agricultural practices through partnership with PROSPERI FOUNDATION. Their "Return to Agriculture" program demonstrates cocoa farming\'s profitability and social impact, preserving Venezuela\'s agricultural heritage.',
  },
};

const tumaco = {
  es,
  en,
};

export { tumaco };
