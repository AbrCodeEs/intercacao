const es = {
  generalInformation: {
    title: 'evaluacion',
    image: {
      alt: 'portada cacao gourmet choroni fino',
    },
    rating: {
      stars: 'estrellas de calificación 2.8',
    },
    sections: [
      {
        items: [
          { label: 'AFRUTADO DULCE', value: '1.5' },
          { label: 'AFRUTADO CÍTRICO', value: '2.5' },
          { label: 'AFLORADO', value: '0.5' },
          { label: 'ACRIOLLADO', value: '2.1' },
          { label: 'CACAO', value: '4.2' },
          { label: 'BOSCOSO', value: '1.0' },
          { label: 'ESPECIAS', value: '0.0' },
        ],
      },
      {
        items: [
          { label: 'PRODUCCIÓN ANUAL (TM)', value: '1.5' },
          { label: 'COSECHA PRINCIPAL', value: 'DIC-FEB' },
          { label: 'COSECHA MEDIA', value: 'FEB-ABR' },
        ],
      },
      {
        items: [{ label: 'GRANOS CRIOLLOS', value: '16%' }],
      },
      {
        items: [
          { label: 'GRANOS FERMENTADOS', value: '84%' },
          { label: 'GRANOS VIOLETAS', value: '6%' },
          { label: 'GRANOS PIZARROSOS', value: '10%' },
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
          { label: 'CERTIFICADO', value: 'SI' },
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
        description: '',
      },
      {
        name: 'Afrutado Cítrico',
        description: 'Frutos Cítricos • Futos rojos',
      },
      {
        name: 'Aflorado',
        description: '',
      },
      {
        name: 'Acriollado',
        description: 'Nueces • Panela malta',
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
      classification: 'Clasificación de Choroni Fino',
      equipment: 'Equipo de Cata',
    },
    information: [
      {
        title: 'S = Sabor:',
        description: {
          boldText: 'FUERTE',
          additionalText: 'Denota sabor a frutas frescas, nueces y panela malta',
        },
      },
      {
        title: 'A = Aroma:',
        description: {
          boldText: 'BAJO',
          additionalText: 'Esencias florales y herbales',
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
      alt: 'Cacao de Choroni Fino',
      description: [
        {
          text: 'A causa de las propiedades de moderada genética criolla con 16% de granos blancos y elevada descendencia trinitaria se delimitan los siguientes resultados en la prueba de corte, (±84%) en granos fermentados, en granos violeta (±6%)y en granos pizarrosos (±10%).',
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
          text: 'Se destacan los sabores característicos que identifican a los criollos modernos con una mezcla balanceada de atributos propios de nueces, floral leve, afrutado moderado de frutas frescas asociado a una acidez de aceptable intensidad típica de frutos cítricos y frutos rojos.',
        },
        {
          type: 'paragraph',
          text: '"Estas notas resaltan sobre un moderado fondo a cacao que permite disfrutar notas herbales, madera y panela/malta mostrando la gran variedad de atributos típicos de los cacaos criollos venezolanos.',
        },
        {
          type: 'paragraph',
          text: '"Es posible paladear en un licor bien elaborado del cacao de Choroní, una sinfonía de sabores, redondeados por un microclima de agua de manantiales, bosques del Parque Henry Pittier y la brisa marina de las playas de Choroní y Puerto Colombia. Ahí donde se materializa el encuentro de estas aguas y se deleitan moradores y visitantes del golpe de tambor.',
        },
      ],
      image: { alt: 'Rueda de sabores del cacao' },
    },
    {
      title: 'Mapa Sensorial',
      content: [
        {
          type: 'paragraph',
          text: 'Se perciben notas afrutadas típicas de los cacaos criollos modernos con un perfil de atributos que representan desde los perfiles de los criollos antiguos hasta los cacaos característicos de los híbridos con una intensidad media de sabor a cacao.',
        },
        {
          type: 'paragraph',
          quote:
            '"Se puede apreciar en estos materiales el espectro sensorial completo de los cacaos especiales de Venezuela.',
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
                alt: 'semilla choroni',
                text: 'Trinitario &',
              },
              {
                alt: 'semilla choroni',
                text: 'Criollo',
              },
              {
                key: 'Días de Fermentación',
                value: '4 a 5 días',
              },
              {
                key: 'Técnicas de Fermentación',
              },
              {
                items: [
                  'Tipo de cajon: Madera',
                  'Frecuencia de volteos: Primer volteo a las 48 horas, a partir del tercer día cada 24 horas',
                  'Forma de Fermentación: Son distribuidos aproximadamente 1000 kg de granos en baba, en 3 cajones, envueltos con hojas de plátano.',
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
                alt: 'semilla choroni',
                text: 'Trinitario seco &',
              },
              {
                alt: 'semilla choroni',
                text: 'Criollo',
              },
              {
                key: 'Días de Secado',
                value: '4 a 5 días',
              },
              {
                key: 'Técnicas de Secado',
              },
              {
                items: [
                  'Tipo de piso: cemento / concreto',
                  'Humedad: 7,5%',
                  'Forma de Secado: Se tienden los granos el primer y segundo día, realizando remociones cada 3 horas, el tercer y cuarto día remociones cada 5 horas.',
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
        text: 'Certificado de Origen y Trazabilidad que avala la procedencia del grano de cacao.',
      },
      {
        text: 'El pueblo de Choroní, posee una población aproximadamente de 3102 habitantes, con una población flotante cercana al millón.',
      },
      {
        text: 'Nosotros desde la mágica tierra de Choroní garantizamos un Certificado de trazabilidad que avala la legitimidad y procedencia del distinguido grano.',
      },
      {
        text: 'Entre los productores que le dedican el amor y el esmero a la tierra costera, se encuentra el señor Vicente Ramón Fuentes Zapata de 68 años de edad, oriundo del sector, productor de cacao independiente, quien mantiene el patrimonio de sus antepasados preservando la tradición del cultivo de la exquisita semilla, siendo este su único sustento económico.',
      },
      {
        text: 'Su jornada de trabajo inicia a las 6:00 am, en su finca, designada como Hacienda Torres, todos los días realiza un recorrido por la plantación, determina un plan de trabajo que incluye la poda, limpieza, recolección del grano y beneficio post cosecha.',
      },
      {
        text: 'PDestacada por ser una de las primeras haciendas de la cordillera de la costa, posee 30 Ha sembradas, de estas 15 Ha productivas, de las cuales obtiene 1500kg del grano anual de cacao durante dos temporadas de cosecha, la principal en los meses entre diciembre - febrero y la media entre los meses febrero- abril',
      },
      {
        text: 'La hacienda está situada en Coordenadas GPS 10° 29 MIN 12.8 seg, norte, 67° 36 min 33.5 seg oeste aproximadamente a 1 Kilómetro de la plaza Bolívar de la parroquia.',
      },
      {
        text: 'Para el proceso de recolección contrata personal con base en la cantidad de trabajo que delimite, ya que la búsqueda de los trabajadores en el sector se le dificulta y por esta razón desaprovecha mucho cacao, de igual manera esto no impide que perdure el atesorado proceso en el tiempo.',
      },
      {
        text: 'Sus primordiales actividades económicas de la población están aunadas a la pescadería, el turismo y la agricultura del cacao siendo esta una de las más influyentes.',
      },
      {
        text: 'Choroní, no solo es conocido por sus hermosas playas y la calidez de su gente sino también sus ricas tierras atesoran semillas de cacao con alta introgresión trinitaria y genética criolla.',
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
        alt: 'mapa de Girardot',
      },
      details: [
        { label: 'País', value: 'Venezuela' },
        { label: 'Estado', value: 'Aragua' },
        { label: 'Municipio', value: 'Girardot' },
        { label: 'Superficie', value: '-' },
        { label: 'Altitud Promedio', value: '-' },
        { label: 'Coordenadas GPS', value: '10° 29` 12.8`N, 67° 36` 33.5`W' },
        { label: 'Habitantes', value: '3.102' },
      ],
    },
    paragraphs: [
      'Choroní, es una parroquia venezolana situada en la superficie costera del extremo norte del municipio Girardot, estado Aragua, Venezuela, específicamente en la orilla de la cordillera de la Costa, lo que le añade las propiedades naturales pertenecientes al Parque nacional Henri Pittier, el cual lo rodea, agregándole una variedad de especies y vegetación exótica.',
    ],
    ecology: {
      title: 'Ecología',
      paragraphs: [
        'La vegetación del sector de Choroní, está constituida por extensa selva nublosa, sabanas y montañas, dentro de ellos una amplia variedad de mamíferos, fauna silvestre, especies endémicas y migratorias.',
        'En la fauna se destacan cantidad de especies como las aráceas, orquidáceas, bromeliáceas y piperáceas.',
        'En la región predominan los suelos llanos, sin problemas de merma y ricos en nutrientes. Son buenos para todo tipo de cultivo se caracterizan por ser aluviales de origen fluvial, de texturas francas y arenosa, con pH que va desde ligeramente ácido a casi neutro.',
      ],
      images: [
        {
          alt: 'ubicacion de Girardot',
        },
        {
          alt: 'ubicacion de Girardot',
        },
      ],
    },
  },
  history: {
    title: 'Historia',
    images: [
      {
        alt: 'historia de Choroni Fino',
      },
      {
        alt: 'historia de Choroni Fino',
      },
    ],
    content: [
      {
        text: 'El mágico pueblo de Choroní, dentro de sus coloridas estructuras y la calidez de su gente, atesora episodios que tallaron una marca imborrable en su historia, debido a los hechos realzados por los indios Choroní, los españoles y africanos en su acercamiento por estas tierras.',
      },
      {
        text: 'El atractivo de Choroní no solo lo poseen sus angostas calles, el matiz de las casas, sus enormes ventanales, la apacibilidad de los ríos y sus hermosas playas, sino que también la cordialidad de su gente te invita a compartir en esta tierra costera de sabor, ya que de ellos brota una variedad de expresiones culturales entre las que predominan las celebraciones de Santa clara, la Virgen del Carmen y el vigoroso golpe de tambor que pone a más de uno a menear la cintura evocando las técnicas de los bailes afrodescendientes.',
      },
      {
        text: 'Remontándonos hacia 1616, se inicia el establecimiento del pueblo, con la creación de la iglesia, realizada por el juez vicario Francisco Mendoza y Don Pedro Gutiérrez, los cuales le asignaron el nombre de San Francisco de Paula, no es sino en 1622 cuando el pueblo es constituido como parroquia eclesiástica, posteriormente en 1664 es cuando adopta el nombre de Santa Clara del Valle de Choroní, actualmente conocido como Choroní.',
      },
      {
        text: 'Durante los años siguientes específicamente en 1721 Pedro José Olavarriaga menciona en su informe, que las tierras eran fértiles y que se estaba produciendo mucho cacao, el cual casi todo se comenzó a comercializar con holandeses, esto ocasiona la disputa entre los hacendados de la época.',
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
      alt: 'gourmet choroni fino cocoa cover',
    },
    rating: {
      stars: 'rating stars 2.8',
    },
    sections: [
      {
        items: [
          { label: 'SWEET FRUITY', value: '1.5' },
          { label: 'CITRUS FRUITY', value: '2.5' },
          { label: 'FLORAL', value: '0.5' },
          { label: 'CREOLE', value: '2.1' },
          { label: 'COCOA', value: '4.2' },
          { label: 'WOODSY', value: '1.0' },
          { label: 'SPICES', value: '0.0' },
        ],
      },
      {
        items: [
          { label: 'ANNUAL PRODUCTION (TM)', value: '1.5' },
          { label: 'MAIN HARVEST', value: 'DEC-FEB' },
          { label: 'MID HARVEST', value: 'FEB-APR' },
        ],
      },
      {
        items: [{ label: 'CREOLE BEANS', value: '16%' }],
      },
      {
        items: [
          { label: 'FERMENTED BEANS', value: '84%' },
          { label: 'VIOLET BEANS', value: '6%' },
          { label: 'SLATE BEANS', value: '10%' },
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
          { label: 'CERTIFIED', value: 'YES' },
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
        description: '',
      },
      {
        name: 'Citrus Fruity',
        description: 'Citrus Fruits • Red Fruits',
      },
      {
        name: 'Floral',
        description: '',
      },
      {
        name: 'Creole',
        description: 'Nuts • Brown Sugar Malt',
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
      classification: 'Choroni Fino Classification',
      equipment: 'Tasting Panel',
    },
    information: [
      {
        title: 'F = Flavor:',
        description: {
          boldText: 'STRONG',
          additionalText: 'Notes of fresh fruits, nuts, and brown sugar malt',
        },
      },
      {
        title: 'A = Aroma:',
        description: {
          boldText: 'LOW',
          additionalText: 'Floral and herbal essences',
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
      alt: 'Choroni Fino Cocoa',
      description: [
        {
          text: 'With moderate creole genetics (16% white beans) and high trinitario descent, cut tests show: (±84%) fermented beans, (±6%) violet beans, and (±10%) slate beans.',
        },
        {
          text: 'Weight analysis reveals 79 almonds per 100g, each weighing 1.27g.',
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
          text: 'Features characteristic flavors of modern creoles with balanced nutty attributes, mild floral notes, moderate fresh fruit acidity typical of citrus and red fruits.',
        },
        {
          type: 'paragraph',
          text: "These notes overlay a moderate cocoa base allowing enjoyment of herbal, woody, and malted sugar notes - showcasing Venezuelan creole cocoa's diverse attributes.",
        },
        {
          type: 'paragraph',
          text: 'A well-crafted Choroni cocoa liquor offers a flavor symphony shaped by spring waters, Henry Pittier Park forests, and coastal breezes from Choroni/ Puerto Colombia beaches - where waters meet amidst drumbeat celebrations.',
        },
      ],
      image: { alt: 'Cocoa Flavor Wheel' },
    },
    {
      title: 'Sensory Map',
      content: [
        {
          type: 'paragraph',
          text: 'Presents fruity notes typical of modern creole cocoas with attribute profiles ranging from ancient creoles to hybrid characteristics, featuring medium cocoa flavor intensity.',
        },
        {
          type: 'paragraph',
          quote:
            '"These materials showcase Venezuela\'s complete sensory spectrum of specialty cocoas."',
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
                alt: 'choroni seed',
                text: 'Trinitario &',
              },
              {
                alt: 'choroni seed',
                text: 'Criollo',
              },
              {
                key: 'Fermentation Days',
                value: '4 to 5 days',
              },
              {
                key: 'Fermentation Techniques',
              },
              {
                items: [
                  'Box type: Wooden',
                  'Turning frequency: First turn at 48 hours, then every 24 hours from day 3',
                  'Fermentation method: ~1000kg fresh beans distributed across 3 boxes wrapped in plantain leaves',
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
                alt: 'choroni seed',
                text: 'Dry Trinitario &',
              },
              {
                alt: 'choroni seed',
                text: 'Criollo',
              },
              {
                key: 'Drying Days',
                value: '4 to 5 days',
              },
              {
                key: 'Drying Techniques',
              },
              {
                items: [
                  'Floor type: concrete',
                  'Humidity: 7.5%',
                  'Drying method: Beans stirred every 3 hours (days 1-2), every 5 hours (days 3-4)',
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
        text: 'Certificate of Origin and Traceability validating cocoa bean provenance.',
      },
      {
        text: 'Choroni village has ~3,102 residents with nearly one million seasonal visitors.',
      },
      {
        text: "From magical Choroni lands, we guarantee traceability certificates validating this distinguished bean's authenticity.",
      },
      {
        text: 'Among dedicated coastal producers is 68-year-old Vicente Ramón Fuentes Zapata - independent cocoa farmer preserving ancestral traditions through exquisite bean cultivation.',
      },
      {
        text: 'His workday begins at 6 AM at Hacienda Torres, managing pruning, cleaning, harvesting, and post-harvest processing.',
      },
      {
        text: "As one of the coast range's first estates, its 30Ha plantation (15Ha productive) yields 1500kg annually across main (Dec-Feb) and mid (Feb-Apr) harvests.",
      },
      {
        text: 'Located at GPS 10°29\'12.8"N, 67°36\'33.5"W (~1km from parish main square).',
      },
      {
        text: 'Harvesting challenges include labor shortages, yet traditional processes endure.',
      },
      {
        text: 'Main economic activities combine fishing, tourism, and influential cocoa agriculture.',
      },
      {
        text: 'Choroni is renowned not only for beaches and warm people but also lands producing cocoa with high trinitario introgression and creole genetics.',
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
        alt: 'Girardot map',
      },
      details: [
        { label: 'Country', value: 'Venezuela' },
        { label: 'State', value: 'Aragua' },
        { label: 'Municipality', value: 'Girardot' },
        { label: 'Area', value: '-' },
        { label: 'Average Altitude', value: '-' },
        { label: 'GPS Coordinates', value: '10°29\'12.8"N, 67°36\'33.5"W' },
        { label: 'Population', value: '3,102' },
      ],
    },
    paragraphs: [
      "Choroni parish lies on Venezuela's northern coast within Aragua State, bordered by Henri Pittier National Park's cloud forests and exotic vegetation.",
    ],
    ecology: {
      title: 'Ecology',
      paragraphs: [
        'Vegetation includes cloud forests, savannas, and mountains hosting diverse wildlife including endemic and migratory species.',
        'Notable flora: arums, orchids, bromeliads, and pepper plants.',
        'Soils are fertile alluvial plains with loamy/sandy textures and slightly acidic to neutral pH levels.',
      ],
      images: [
        {
          alt: 'Girardot location',
        },
        {
          alt: 'Girardot location',
        },
      ],
    },
  },
  history: {
    title: 'History',
    images: [
      {
        alt: 'Choroni Fino history',
      },
      {
        alt: 'Choroni Fino history',
      },
    ],
    content: [
      {
        text: 'Magical Choroni preserves indelible historical marks from indigenous Choroni people, Spanish settlers, and African influences.',
      },
      {
        text: 'Beyond colorful architecture and rivers, cultural expressions include Santa Clara/Virgin del Carmen festivals and infectious drumbeats recalling Afro-descendant dances.',
      },
      {
        text: 'Founded in 1616 with church construction by Francisco Mendoza and Pedro Gutiérrez. Established as parish in 1664 as Santa Clara del Valle de Choroni.',
      },
      {
        text: "Pedro José Olavarriaga's 1721 report noted fertile lands producing abundant cocoa traded with Dutch merchants, sparking disputes among landowners.",
      },
    ],
  },
  socialResponsibility: {
    title: 'Social Responsibility',
    images: [{ alt: 'image1' }, { alt: 'image2' }],
    paragraphs:
      "Our primary objective is promoting sustainable agricultural practices through next-generation training. Partnering with PROSPERI Foundation (non-profit), we preserve Venezuela's historical, cultural, and agricultural heritage. Educational programs like 'Return to Agriculture' demonstrate cocoa farming's viability as profitable profession driving social change.",
  },
};

const choroni = {
  es,
  en,
};

export { choroni };
