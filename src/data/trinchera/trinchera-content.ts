const es = {
  generalInformation: {
    title: 'evaluacion',
    image: {
      alt: 'portada de trincheras cacao',
    },
    rating: {
      stars: 'estrellas de calificación 2.8',
    },
    sections: [
      {
        items: [
          { label: 'AFRUTADO DULCE', value: '1.1' },
          { label: 'AFRUTADO CÍTRICO', value: '2.3' },
          { label: 'AFLORADO', value: '0.8' },
          { label: 'ACRIOLLADO', value: '0.5' },
          { label: 'CACAO', value: '3.5' },
          { label: 'BOSCOSO', value: '1.5' },
          { label: 'ESPECIAS', value: '0.0' },
        ],
      },
      {
        items: [
          { label: 'PRODUCCIÓN ANUAL (TM)', value: '10' },
          { label: 'COSECHA PRINCIPAL', value: 'DIC-ABR' },
          { label: 'COSECHA MEDIA', value: 'JUN-JUL' },
        ],
      },
      {
        items: [{ label: 'GRANOS CRIOLLOS', value: '6%' }],
      },
      {
        items: [
          { label: 'GRANOS FERMENTADOS', value: '84%' },
          { label: 'GRANOS VIOLETAS', value: '8%' },
          { label: 'GRANOS PIZARROSOS', value: '8%' },
          { label: 'TOTAL', value: '100%' },
        ],
      },
      {
        items: [
          { label: 'Granos / 100g:', value: '84' },
          { label: 'g./1 Grano:', value: '1,19 g' },
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
        description: 'Aflorado de bosque',
      },
      {
        name: 'Acriollado',
        description: 'Nuez',
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
      classification: 'Clasificacion de Trincheras',
      equipment: 'Equipo de Cata',
    },
    information: [
      {
        title: 'S = Sabor:',
        description: {
          boldText: 'MEDIO',
          additionalText: 'Leve presencia a sabores afrutados',
        },
      },
      {
        title: 'A = Aroma:',
        description: {
          boldText: 'MEDIO',
          additionalText: 'Moderada esencia a caramelo y miel',
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
      alt: 'Cacao de Trincheras',
      description: [
        {
          text: 'Debido a las propiedades de genética criolla y elevada descendencia trinitaria los granos , delimitan (±6%) en granos criollos.',
        },
        {
          text: 'En la prueba de corte posee (±84%) en granos fermentados, (±8%)en granos violeta ,(±8%). en granos pizarrosos.',
        },
        {
          text: 'En relación al peso se encuentran 84 almendras referentes a un peso de 100 gr, en otros términos cada almendra pesa 1,19gr.',
        },
      ],
    },
  },
  cocoaMap: [
    {
      title: 'Mapa de Sabores',
      content: [
        {
          text: '"Se puede apreciar un fondo moderado a cacao así como también una acidez de frutas frescas y notas perfumadas a flores y lo dulce de las nueces. El aflorado de este tipo de cacao recuerda la sensación de la tierra mojada, verdes de bosques y lluvia."',
          author: 'Ingeniero Ms. Gladys Ramos',
        },
      ],
      image: { alt: 'Rueda de sabores del cacao' },
    },
    {
      title: 'Mapa Sensorial',
      content: [
        {
          text: 'Se percibe un sabor a cacao suave, donde resaltan sabores característicos de nueces, flores y frutas frescas como mandarina con acidez agradable.',
        },
        {
          text: '"Lo aterciopelado y suave del chocolate elaborado con el cacao de trincheras llega a ser muy especial y conduce a una experiencia inolvidable por su untuosidad y persistencia en boca"',
          author: 'Indicó la Ing. Ms. Gladys Ramos.',
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
            description: 'Los frijoles Trinchera tienen una alta ascendencia criolla y una genética trinitaria significativa, lo que requiere este proceso específico:',
            items: [
              {
                key: 'Tipo de Cacao',
              },
              {
                alt: 'semilla trincheras',
                text: 'Trinitario',
              },
              {
                key: 'Días de Fermentación',
                value: '5 a 6 días',
              },
              {
                key: 'Técnicas de Fermentación',
              },
              {
                items: [
                  'Tipo de cajon: Madera',
                  'Frecuencia de volteos: Primer volteo 24 horas, segundo volteo en 48 horas, tercer volteo 48 horas.',
                  'Forma de Fermentación: Se distribuyen los granos en el cajón cubiertos con hojas de plátano',
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
                alt: 'semilla trincheras',
                text: 'Trinitario',
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
                  'Tipo de piso: Cemento con techo corredizo',
                  'Humedad: 7,5%',
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
        text: 'En el sector de Trincheras hay tres haciendas muy antiguas e importantes, una de ellas es la hacienda La Unión ubicada en un valle cultivado con cacao de aproximadamente 66 Ha donde se encuentra establecida la Asociación de productores Unidos de Trincheras, allí trabajan 53 productores divididos en tres grupos de los cuales solo 18 realizan el beneficio post cosecha en la emblemática hacienda. Cada uno de ellos se disputa cual es el mejor cacao a pesar de cultivar en la misma zona.'
      },
      {
        text: 'Cada productor posee 3 hectáreas y media activas en producción con 1.500 plantaciones de cacao por Ha.',
      },
      {
        text: 'Actualmente en Trincheras se producen 10.000 kg anuales de cacao durante dos temporadas de cosecha como la Pascuera en los meses entre diciembre y abril y la cosecha Sanjuanera durante los mes de junio-julio.',
      },
      {
        text: 'Como actividad económica adicional desarrollan la práctica del turismo ya que cuentan con un elevado potencial en esa área, posee una alta actividad pesquera, así como también el cultivo de otros rubros como naranjas, aguacate, yuca, cambures, entre otros.',
      },
      {
        text: 'Dentro de las tierras de Trincheras se destaca la calidez y recepción de sus productores, entre los más importantes se encuentra el señor José Bisamon de 77 años de edad, nativo del sector quien desde los 20 años se dedica a la labor de la tierra, formó parte del desarrollo agrícola de la nación ya que trabajó desde que fue instaurada la finca que se destacó por la gran producción de café para la época del año 1960.',
      },
      {
        text: 'En la población el cultivo de cacao es una de las principales fuentes de ingreso también se dedican a la siembra de cambur, yuca y aguacate.',
      },
      {
        text: 'Poseen una buena infraestructura con viviendas de concreto organizadas, con enormes patios, rodeados de extensa vegetación con clima muy húmedo y cálido.',
      },
      {
        text: 'El cacao de Trinchera tiene un toque particular ya que los frutos rojos son lo que caracterizan su sabor.',
      },
      {
        text: 'Los productores realizan su colecta, quiebran la mazorca, extraen el fruto luego vierten los granos en baba dentro de recipientes de plásticos para ser trasladados a través de burros de carga hasta el sector donde se encuentra ubicada la asociacion para realizar el proceso de beneficio post cosecha.',
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
        alt: 'mapa de Trincheras',
      },
      details: [
        { label: 'País', value: 'Venezuela' },
        { label: 'Estado', value: 'Carabobo' },
        { label: 'Municipio', value: 'Naguanagua' },
        { label: 'Superficie', value: '-' },
        { label: 'Altitud Promedio', value: '2.191m' },
        { label: 'Coordenadas GPS', value: '-' },
        { label: 'Habitantes', value: '18.376' },
      ],
    },
    ecology: {
      title: 'Ecología',
      paragraphs: [
        'La fauna de Trincheras se caracteriza por poseer variedad en especies como picures, osos hormigueros, puercoespines, venados y las iguanas, así como diversas serpientes y otros reptiles. En las montañas, sus valles y zonas bajas del sector predominan mariposas del género Morpho.',
        'Su sistema vegetal es completamente tropical, entre las plantas más comunes se encuentran el Agave cocuy, el indio desnudo, el camoruco (símbolo natural del Estado Carabobo), el samán, el apamate y el araguaney.',
        'Cuenta con suelos fértiles para el crecimiento de la preciada semilla y capas subterráneas de la Tierra que se encuentran a mayor temperatura, las cuales son ricas en diferentes componentes minerales y permiten su utilización terapéutica como baños, inhalaciones, irrigaciones, y calefacción.',
      ],
      images: [
        {
          alt: 'ubicacion de Trincheras',
        },
        {
          alt: 'ubicacion de Trincheras',
        },
      ],
    },
  },
  history: {
    title: 'Historia',
    images: [
      {
        alt: 'historia de Trincheras',
      },
      {
        alt: 'historia de Trincheras',
      },
    ],
    content: [
      {
        text: 'En el año 1895 las haciendas Aguas caliente y Palmarito ubicadas en el sector Trincheras formaron parte de la industria textil y el cuero en Venezuela, la industria textil se desarrolló con grandes plantaciones de algodón, así como también de cacao y café.',
      },
      {
        text: 'Estas dos haciendas se unificaron con el nombre de La unión, ambas fueron propiedad del Sr. Ernesto Branger uno de los primeros hombres que promovió el sector textil.',
      },
      {
        text: 'Durante muchos años, esta emblemática hacienda denominada Patrimonio Cultural venezolano, fue sitio de grandes encuentros y celebraciones de las personas más pudientes de la época.',
      },
      {
        text: 'El desarrollo que se realizó a cabo dentro de la hacienda, llevo a crear una ficha interna de cuero marcada con el valor de la medida a adquirir.',
      },
      {
        text: 'Hacia el año 1962 La Unión fue expropiada por el Instituto Agrario Nacional para repartir las tierras entre los campesinos del sector, otorgándole a cada uno 3 Ha y media de terreno.',
      },
      {
        text: 'Hasta la actualidad cada uno de los campesinos, ahora integrantes de la asociación de productores, mantiene el legado de cultivar el preciado cacao de Trincheras.',
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
          text: 'Due to the properties of Creole genetics and high Trinitarian ancestry, the kernels are (±6%) Creole kernels.'
        },
        {
          text: 'In the cutting test, they have (±84%) fermented kernels, (±8%) violet kernels, and (±8%) slate kernels.'
        },
        {
          text: 'In relation to weight, there are 84 almonds, referring to a weight of 100 g; in other words, each almond weighs 1.19 g.'
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
            description: 'Ocumare beans have high Creole ancestry and significant Trinitario genetics, requiring this specific process:',
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
                key: 'Fermentation Days',
                value: '4 to 6 days',
              },
              {
                key: 'Fermentation Techniques',
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
        text: 'In the Trincheras sector, there are three very old and important haciendas. One of them is the La Unión hacienda, located in a cacao-growing valley of approximately 66 hectares, where the United Producers Association of Trincheras is based. Fifty-three producers work there, divided into three groups, of which only 18 carry out post-harvest processing at the iconic hacienda. Each of them competes for the best cacao, despite growing in the same area.'
      },
      {
        text: 'Each producer owns 3.5 hectares in active production, with 1,500 cacao plantations per hectare.'
      },
      {
        text: 'Currently, 10,000 kg of cacao are produced annually in Trincheras during two harvest seasons: the Easter harvest, between December and April, and the San Juan harvest, during the months of June and July.'
      },
      {
        text: 'As an additional economic activity, they develop tourism, as they have high potential in that area. It has a high level of fishing activity, as well as the cultivation of other crops such as oranges, avocados, cassava, bananas, among others.'
      },
      {
        text: 'Within the lands of Trincheras, the warmth and welcome of its producers stand out. Among the most important is Mr. José Bisamon, 77 years old, a native of the area who has dedicated himself to working the land since he was 20 years old. Part of the nation\'s agricultural development, having worked since the farm was established, which stood out for its large coffee production in the 1960s.'
      },
      {
        text: 'In the town, cacao farming is one of the main sources of income. They also grow bananas, cassava, and avocados.'
      },
      {
        text: 'They have a good infrastructure with well-organized concrete houses, with enormous yards, surrounded by extensive vegetation and a very humid and warm climate.'
      },
      {
        text: 'Trinchera cacao has a particular touch since the red fruits are what characterize its flavor.'
      },
      {
        text: 'The producers carry out their harvest, break the cob, extract the fruit, then pour the beans into plastic containers to be transported by pack donkeys to the area where the association is located for the post-harvest processing process.'
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
        text: 'In 1895, the Aguas Caliente and Palmarito haciendas, located in the Trincheras sector, became part of the textile and leather industry in Venezuela. The textile industry developed with large cotton plantations, as well as cocoa and coffee plantations.'
      },
      {
        text: 'These two haciendas were unified under the name La Unión. Both were owned by Mr. Ernesto Branger, one of the first men to promote the textile sector.'
      },
      {
        text: 'For many years, this emblematic hacienda, known as Venezuelan Cultural Heritage, was the site of grand gatherings and celebrations for the wealthiest people of the time.'
      },
      {
        text: 'The development that took place within the hacienda led to the creation of an internal leather token marked with the value of the measure to be acquired.'
      },
      {
        text: 'Around 1962, La Unión was expropriated by the National Agrarian Institute to distribute the land among the farmers in the area, granting each one 3.5 hectares of land.'
      },
      {
        text: 'To this day, each of the farmers, now members of the producers\' association, maintains the legacy of cultivating the prized Trincheras cocoa.'
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

const trinchera = { es, en };

export { trinchera };
