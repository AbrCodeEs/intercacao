const es = {
  generalInformation: {
    title: 'evaluacion',
    image: {
      alt: 'portada cacao gourmet huila fino',
    },
    rating: {
      stars: 'estrellas de calificación 3.3',
    },
    sections: [
      {
        items: [
          { label: 'AFRUTADO DULCE', value: '3.5' },
          { label: 'AFRUTADO CÍTRICO', value: '3.0' },
          { label: 'AFLORADO', value: '1.0' },
          { label: 'ACRIOLLADO', value: '2.4' },
          { label: 'CACAO', value: '4.0' },
          { label: 'BOSCOSO', value: '0.0' },
          { label: 'ESPECIAS', value: '0.0' },
        ],
      },
      {
        items: [
          { label: 'PRODUCCIÓN ANUAL (TM)', value: '100' },
          { label: 'COSECHA PRINCIPAL', value: 'DIC-MAR' },
          { label: 'COSECHA MEDIA', value: 'JUN-JUL' },
        ],
      },
      {
        items: [{ label: 'GRANOS CRIOLLOS', value: '10%' }],
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
          { label: 'PREMIOS', value: 'SI' },
        ],
      },
    ],
  },
  characteristics: {
    title: 'Características Físicas y Organolépticas',
    flavors: [
      {
        name: 'Afrutado Dulce',
        description: '',
      },
      {
        name: 'Afrutado Cítrico',
        description: 'Mandarina',
      },
      {
        name: 'Aflorado',
        description: '',
      },
      {
        name: 'Acriollado',
        description: 'Nueces • Caramelo • Dulce',
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
      classification: 'Clasificación de Huila Fino',
      equipment: 'Equipo de Cata',
    },
    information: [
      {
        title: 'Sabor:',
        description: {
          boldText: 'MEDIO',
          additionalText: 'Denota sabor a dulce y afrutado',
        },
      },
      {
        title: 'Aroma:',
        description: {
          boldText: 'MEDIO',
          additionalText: 'Esencia a postre caliente, manjar',
        },
      },
      {
        title: 'Fermentación:',
        description: {
          boldText: 'MEDIO',
          additionalText: 'Moderada astringencia y amargura',
        },
      },
    ],
    analysis: {
      title: 'Análisis de Corte',
      alt: 'Cacao de Huila Fino',
      description: [
        {
          text: 'Presenta elevada descendencia trinitaria con baja genética criolla con 10% de granos blancos y se delimitan los siguientes resultados en la prueba de corte, (±76%) en granos fermentados, en granos violeta (±12%) y en granos pizarrosos (±12%).',
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
            '"Se destaca como característica positiva el dulce del cafeto, lo que permite una gran diversidad de insectos polinizadores", Indicó la Ing. Gladys Ramos.',
        },
      ],
      image: { alt: 'Rueda de sabores del cacao' },
    },
    {
      title: 'Mapa Sensorial',
      content: [
        {
          type: 'paragraph',
          text: 'Los aromas que emanan de este cacao se caracterizan por su acidez moderada de frutos frescos de acidez abierta. También se destacan el dulce de la caña, de las mieles de flores silvestres y de los cafetales. Este microclima es propio de bosques bajos, verdes con variada fauna de aves transportadoras de semillas.',
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
                alt: 'semilla huila',
                text: 'Trinitario',
              },
              {
                key: 'Días de Fermentación',
                value: '5 a 6 días',
              },
              {
                items: [
                  'Tipo de cajon: Madera',
                  'Frecuencia de volteos: El primer volteo se realiza a las 48 horas, el segundo volteo a las 96 horas y el ultimo volteo se realiza la ultima tarde que permanece la masa en los cajones de fermentación puede ser este a las 120 horas o a las 144 horas',
                  'Forma de Fermentación: Cajones de madera.',
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
                alt: 'semilla huila',
                text: 'Trinitario',
              },
              {
                key: 'Días de Secado',
                value: '3 a 4 días',
              },
              {
                key: 'Técnicas de Secado',
              },
              {
                items: [
                  'Tipo de piso: Gavetas de secado',
                  'Humedad: 7,5% y 8%',
                  'Forma de Secado: Al Sol',
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
        text: 'El cacao de Huila cuenta con una estatuilla plata de la Academy of Chocolate 2016, representado por Choctree.',
      },
      {
        text: 'En sus inicios la asociación de productores de Huila la conformaban 60 productores, actualmente la asociación cuenta con 180 socios y participan trabajando en la central de beneficio entre 15 y 20 agricultores todos con la convicción de desarrollar el mejor proyecto de modernización del preciado grano.',
      },
      {
        text: 'El municipio verde y floreciente de Colombia, Rivera Huila , posee una población de 18.797 habitantes, de los cuales en su mayoría residen en viviendas dignas, generalmente rurales con comodidades de la clase media baja, distribuidas alrededor del área de campo y urbana.',
      },
      {
        text: 'La unidad productiva cuenta con una superficie activa en sembradío de cacao en un promedio de 750 hectáreas, con una producción general estimada de 600 Tm anuales.',
      },
      {
        text: 'Los productores de esta mágica rivera se encuentran organizados a través de la Asociación de Productores de Cacao del Municipio Rivera “ASOPROCAR”, dicha institución fue constituida el 20 de octubre de 2001,conformada por un grupo de agricultores con una edad comprendida entre 35 y 85 años, quienes se dedican con mucho esmero, pasión y responsabilidad a producir el valioso grano, buscando la integridad de todos los productores del municipio, con el arrojo de gestionar ante entidades municipales, departamentales y nacionales, recursos o ayudas para el mejoramiento de las plantaciones y comercializar el mejor cacao.',
      },
      {
        text: 'Dentro de los objetivos de la asociación se encuentra el alcanzar mercados nacionales e internacionales, para mejorar el nivel de vida familiar de cada uno de sus miembros.',
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
        alt: 'mapa de Rivera',
      },
      details: [
        { label: 'País', value: 'Venezuela' },
        { label: 'Estado', value: 'Huila' },
        { label: 'Municipio', value: 'Rivera' },
        { label: 'Superficie', value: '435 km2' },
        { label: 'Altitud Promedio', value: '442 m.s.n.m.' },
        { label: 'Coordenadas GPS', value: '2°46′38″ N, 75°15′19″ W' },
        { label: 'Habitantes', value: '18.797' },
      ],
    },
    paragraphs: [
      'Localizado hacia el suroeste de Colombia, y a 20 Km de Neiva Capital del departamento de Huila, tiene una extensión de 435 Km2. En este municipio se encuentran dos regiones diferentes. Al oriente, una región montañosa, perteneciente a la vertiente occidental de la cordillera oriental; al occidente se encuentra una región plana, comprendida en el valle del Río Magdalena. Por su formación presentan los pisos térmicos cálido, medio y frío, regado por las aguas de los ríos Arrayanal, Blanco, Frío, Negro y Magdalena, además de varias corrientes menores.',
      'Se le conoce popularmente como el "Municipio verde de Colombia". Las temperaturas oscilan entre de 12ºC y 28ºC, pero su temperatura media es 25ºC, presenta precipitaciones entre 1.000 hasta 4000 mm en las zonas mas húmedas. La humedad relativa promedio es 49%.',
    ],
    ecology: {
      title: 'Ecología',
      paragraphs: [
        'La humedad presente en esta región es producto de las bondades de sus variados pisos térmicos desde cálido a frio, donde confluyen variadas corrientes de ríos y quebradas.',
        'Las precipitaciones cubren permanentemente los requerimientos del cultivo cacao y la humedad relativa promedio es moderada, facilitando las condiciones de buena sanidad.',
        'Lo anterior aunado a una amplitud térmica alta de unos 15° C favorece el desarrollo de cultivos de almacenamiento en especial la caña panelera.',
      ],
      images: [
        {
          alt: 'ubicacion de Huila',
        },
        {
          alt: 'ubicacion de Huila',
        },
      ],
    },
  },
  history: {
    title: 'Historia',
    images: [
      {
        alt: 'historia de Huila Fino',
      },
      {
        alt: 'historia de Huila Fino',
      },
    ],
    content: [
      {
        text: 'La gente de Rivera rememora, el matiz de sus hermosas montañas, el infinito azul de su cielo y sus cristalinas aguas, forman parte del presente y el pasado protagonizado por los primeros pobladores del municipio en los años 1800, cuando sus tierras no tenían nombre, era candorosa, reducida y tan apocada que se perdía en la altura de la montaña, dentro de ella, se encontraban los indígenas Tama quienes se caracterizaron por su beligerancia, según historias de los antepasados todos huyeron porque sintieron terror del hasta hoy supuesto volcán ubicado por la zona del Salado y Aguas calientes.',
      },
      {
        text: 'Posteriormente en el año 1888 esos habitantes que venían de la montaña, se unieron con unos colonizadores comerciantes y misioneros agustinianos para fundar a San Mateo. Como fue llamado por primera vez este territorio, que ahora conocemos como Rivera Huila.',
      },
      {
        text: 'Fue en el año 1943, que se declaró la fundación de San Mateo como municipio, el cual llevaría por nombre Rivera, en honor al escritor de La Vorágine.',
      },
      {
        text: 'A pesar de que Rivera está situada en zona de conflicto y de haber vivido algunos hechos violentos como los originados por el bogotazo, el intento de toma por parte de la Guerrilla aquel 13 de agosto de 1987, los asesinatos de algunos líderes y políticos del municipio, incluida la masacre de los Concejales, entre otros; Rivera vive apacible, pues sabe que estos brotes de violencia han sido aislados.',
      },
      {
        text: 'Día tras día, los Riverenses son optimistas y sueñan con un mejor porvenir para su pueblo y se sienten orgullosos de la tierra que los vio nacer.',
      },
    ],
  },
};

const en = {
  generalInformation: {
    title: 'Evaluation',
    image: {
      alt: 'gourmet huila fino cocoa cover',
    },
    rating: {
      stars: 'rating stars 3.3',
    },
    sections: [
      {
        items: [
          { label: 'SWEET FRUITY', value: '3.5' },
          { label: 'CITRUS FRUITY', value: '3.0' },
          { label: 'FLORAL', value: '1.0' },
          { label: 'CREOLE', value: '2.4' },
          { label: 'COCOA', value: '4.0' },
          { label: 'WOODSY', value: '0.0' },
          { label: 'SPICES', value: '0.0' },
        ],
      },
      {
        items: [
          { label: 'ANNUAL PRODUCTION (TM)', value: '100' },
          { label: 'MAIN HARVEST', value: 'DEC-MAR' },
          { label: 'MID HARVEST', value: 'JUN-JUL' },
        ],
      },
      {
        items: [{ label: 'CREOLE BEANS', value: '10%' }],
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
          { label: 'AWARDS', value: 'YES' },
        ],
      },
    ],
  },
  characteristics: {
    title: 'Physical and Organoleptic Characteristics',
    flavors: [
      {
        name: 'Sweet Fruity',
        description: '',
      },
      {
        name: 'Citrus Fruity',
        description: 'Tangerine',
      },
      {
        name: 'Floral',
        description: '',
      },
      {
        name: 'Creole',
        description: 'Nuts • Caramel • Sweetness',
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
      classification: 'Huila Fino Classification',
      equipment: 'Tasting Panel',
    },
    information: [
      {
        title: 'Flavor:',
        description: {
          boldText: 'MEDIUM',
          additionalText: 'Notes of sweetness and fruity flavors',
        },
      },
      {
        title: 'Aroma:',
        description: {
          boldText: 'MEDIUM',
          additionalText: 'Essence of warm desserts and delicacies',
        },
      },
      {
        title: 'Fermentation:',
        description: {
          boldText: 'MEDIUM',
          additionalText: 'Moderate astringency and bitterness',
        },
      },
    ],
    analysis: {
      title: 'Cut Test Analysis',
      alt: 'Huila Fino Cocoa',
      description: [
        {
          text: 'Shows high trinitario descent with low creole genetics (10% white beans). Cut tests reveal: (±76%) fermented beans, (±12%) violet beans, and (±12%) slate beans.',
        },
        {
          text: 'Weight analysis shows 87 almonds per 100g, each weighing 1.15g.',
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
            '"The positive characteristic is the sweetness from coffee plants, supporting diverse pollinating insects", stated Eng. Gladys Ramos.',
        },
      ],
      image: { alt: 'Cocoa Flavor Wheel' },
    },
    {
      title: 'Sensory Map',
      content: [
        {
          type: 'paragraph',
          text: 'This cocoa features moderate acidity from fresh fruits combined with sweetness from wildflower honeys and coffee plantations. Its microclimate includes low green forests with seed-dispersing bird fauna.',
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
                alt: 'huila seed',
                text: 'Trinitario',
              },
              {
                key: 'Fermentation Days',
                value: '5 to 6 days',
              },
              {
                items: [
                  'Box type: Wooden',
                  'Turning frequency: First turn at 48 hours, second at 96 hours, final turn at 120-144 hours',
                  'Fermentation method: Wooden boxes',
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
                alt: 'huila seed',
                text: 'Trinitario',
              },
              {
                key: 'Drying Days',
                value: '3 to 4 days',
              },
              {
                key: 'Drying Techniques',
              },
              {
                items: [
                  'Floor type: Drying racks',
                  'Humidity: 7.5% to 8%',
                  'Drying method: Sun-dried',
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
        text: 'Huila cocoa won a 2016 Silver statuette from the Academy of Chocolate, represented by Choctree.',
      },
      {
        text: 'Originally 60 producers, the Huila association now has 180 members with 15-20 farmers working at the processing center to modernize cocoa production.',
      },
      {
        text: 'Rivera, Huila has 18,797 residents, mostly in rural middle-class homes across urban and countryside areas.',
      },
      {
        text: '750 hectares of cocoa plantations produce ~600 TM annually.',
      },
      {
        text: 'Farmers organize through ASOPROCAR (Rivera Cocoa Producers Association), founded October 20, 2001. Members (35-85 years old) passionately produce quality beans while seeking institutional support for plantation improvements.',
      },
      {
        text: "Association goals include accessing national/international markets to improve members' living standards.",
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
        alt: 'Rivera map',
      },
      details: [
        { label: 'Country', value: 'Colombia' },
        { label: 'State', value: 'Huila' },
        { label: 'Municipality', value: 'Rivera' },
        { label: 'Area', value: '435 km2' },
        { label: 'Average Altitude', value: '442 m.a.s.l.' },
        { label: 'GPS Coordinates', value: '2°46′38″N 75°15′19″W' },
        { label: 'Population', value: '18,797' },
      ],
    },
    paragraphs: [
      "Located 20km southwest of Neiva (Huila's capital), Rivera spans 435km² with mountainous eastern regions (Eastern Cordillera foothills) and western Magdalena River plains. Features warm, moderate, and cold thermal floors.",
      'Known as "Colombia\'s Green Municipality". Temperatures range 12-28°C (average 25°C) with 1,000-4,000mm rainfall. Average humidity: 49%.',
    ],
    ecology: {
      title: 'Ecology',
      paragraphs: [
        'Humidity from varied thermal floors and river systems supports cocoa cultivation.',
        'Consistent rainfall meets crop requirements with moderate humidity ensuring plant health.',
        '15°C thermal amplitude favors storage crops like panela sugarcane.',
      ],
      images: [
        {
          alt: 'Huila location',
        },
        {
          alt: 'Huila location',
        },
      ],
    },
  },
  history: {
    title: 'History',
    images: [
      {
        alt: 'Huila Fino history',
      },
      {
        alt: 'Huila Fino history',
      },
    ],
    content: [
      {
        text: "Rivera's history begins with 19th century Tama indigenous people who fled feared volcanic activity near Salado and Aguas Calientes.",
      },
      {
        text: 'In 1888, mountain settlers joined traders and Augustinian missionaries to establish San Mateo - now Rivera, named after "La Vorágine" author José Eustasio Rivera.',
      },
      {
        text: 'Declared a municipality in 1943, Rivera endured conflicts including 1987 guerrilla attacks and political violence, yet remains optimistic.',
      },
      {
        text: "Residents take pride in their land's blue skies, crystal waters, and mountain vistas that shaped their past and present.",
      },
    ],
  },
};

const huila = {
  es,
  en,
};

export { huila };
