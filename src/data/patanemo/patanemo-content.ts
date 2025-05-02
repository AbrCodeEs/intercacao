const es = {
  generalInformation: {
    title: 'evaluacion',
    image: {
      alt: 'portada cacao gourmet patanemo fino',
    },
    rating: {
      stars: 'estrellas de calificación 2.7',
    },
    sections: [
      {
        items: [
          { label: 'AFRUTADO DULCE', value: '1.2' },
          { label: 'AFRUTADO CÍTRICO', value: '2.3' },
          { label: 'AFLORADO', value: '1.3' },
          { label: 'ACRIOLLADO', value: '0.6' },
          { label: 'CACAO', value: '3.5' },
          { label: 'BOSCOSO', value: '1.5' },
          { label: 'ESPECIAS', value: '1.7' },
        ],
      },
      {
        items: [
          { label: 'PRODUCCIÓN ANUAL (TM)', value: '30' },
          { label: 'COSECHA PRINCIPAL', value: 'DIC-ABR' },
          { label: 'COSECHA MEDIA', value: 'JUN-JUL' },
        ],
      },
      {
        items: [{ label: 'GRANOS CRIOLLOS', value: '20%' }],
      },
      {
        items: [
          { label: 'GRANOS FERMENTADOS', value: '82%' },
          { label: 'GRANOS VIOLETAS', value: '14%' },
          { label: 'GRANOS PIZARROSOS', value: '4%' },
          { label: 'TOTAL', value: '100%' },
        ],
      },
      {
        items: [
          { label: 'Granos / 100g:', value: '78' },
          { label: 'g./1 Grano:', value: '1,28 g' },
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
        description: '',
      },
      {
        name: 'Afrutado Cítrico',
        description: '',
      },
      {
        name: 'Aflorado',
        description: 'Flores Frescas',
      },
      {
        name: 'Acriollado',
        description: 'Nuez • Panela Malta',
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
        description: 'Canela • Clavito de Olor',
      },
    ],
    assessment: {
      title: 'Evaluación',
      classification: 'Clasificación de Patanemo Fino',
      equipment: 'Equipo de Cata',
    },
    information: [
      {
        title: 'S = Sabor:',
        description: {
          boldText: 'MEDIO',
          additionalText: 'Sabores a hierbas, frutas, nueces y flores',
        },
      },
      {
        title: 'A = Aroma:',
        description: {
          boldText: 'MEDIO',
          additionalText: 'Notas moderadas a especies',
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
      alt: 'Cacao de Patanemo Fino',
      description: [
        {
          text: 'El grano de Patanemo posee unas características de alta genética trinitaria y mediana descendencia criolla con 20% de granos blancos, a causa de la hibridación y el estándar de calidad que constituye.',
        },
        {
          text: 'En sus análisis de corte los resultados contienen : (±20%) de granos blancos,   (±82%) granos fermentados (± 14%) con granos violetas, (±4%) granos pizarrosos.',
        },
        {
          text: 'En relación a su peso generalmente los granos contienen 78 almendras sobre un peso de 100 gr; es decir que  cada almendra pesa 1,28 gr.',
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
            '"El cacao de Patanemo presenta una intensa variedad de atributos que combinan suaves notas de flores, frutas y nueces acompañadas con aromas de especies dulces como canela y clavitos de olor"., ',
          author: 'precisó la Ing Ms Gladys Ramos',
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
            'Se destacan los atributos intensos de la canela, los aromáticos de las especies y los suaves a hierbas, flores, lluvia y tierra mojada. Las condiciones de suelo y clima de la zona, así como la vegetación xerófila y la fauna de aves como el flamenco, caracterizan y moldean los atributos de sabor de los productos del cacao de Patanemo.',
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
        text: 'El grano de Patanemo posee un alto porcentaje de genética trinitaria y mesurada descendencia criolla, el cual debe cumplir el siguiente proceso de fermentación.',
      },
      {
        text: 'Son trasladados aproximadamente 200 kg de cacao a través de un burro de carga a la vivienda correspondiente.',
      },
      {
        protocols: [
          {
            title: 'Protocolo de Fermentación',
            items: [
              {
                key: 'Tipo de Cacao',
              },
              {
                alt: 'semilla patanemo',
                text: 'Trinitario',
              },
              {
                key: 'Días de Fermentación',
                value: '4 a 5 días',
              },
              {
                key: 'Técnicas de Fermentación'
              },
              {
                items: [
                  'Tipo de cajon: Madera',
                  'Frecuencia de volteos: cada 48 horas',
                  'Forma de Fermentación: Los granos son empaquetados en sacos de nylon y cubiertos con enormes plásticos transparentes.',
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
              'Para el proceso de secado los granos son trasladados en un burro de carga a la vivienda pertinente donde las semillas son esparcidas en la superficie de cemento para ser parcialmente conservados de la fuerza del sol, con las siguientes características:',
            items: [
              {
                key: 'Tipo de Cacao',
              },
              {
                alt: 'semilla patanemo',
                text: 'Trinitario seco',
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
                  'Tipo de piso: cemento / concreto con techo corredizo',
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
        text: 'En este sector se encuentran distribuidos entre 25 y 30 productores, la mayoría oriundos del sector así como también agricultores andinos que desde hace 20 años trabajan en el campo, su labor la realizan con la participación de todo el grupo familiar, donde cada uno aporta y ejecuta su función, no solo de recolección y proceso de post cosecha del exquisito fruto, sino también artesanal con la preparación de ponches, dulces y panelas que le permiten adquirir remuneración y seguir con el legado de sus antepasados.',
      },
      {
        text: 'Como base principal económica es la agricultura, se dedican también a la pesca, a la siembra y venta de yuca, plátano, vacuno, cambur, naranja y variedad de flores exóticas como bastón de caballero, micrófono y arpinia.',
      },
      {
        text: 'En Patanemo, se encuentran productores que trabajan en enlace con la red cooperativa de productores y artesanos, y otros que laboran por su cuenta como es el caso de Juan Antonio Ávila de 47 años de edad, reconocido como uno de los productores con mayor plantación de cacao en la zona, quien junto a su familia y amigos de siempre, le dedican el tiempo y el amor necesarios para obtener el mejor fruto.',
      },
      {
        text: 'La superficie de la unidad productiva del señor Ávila es de 16 hectáreas, donde solo 12 Ha son del inagotable fruto, obteniendo aproximadamente 1000 kg anuales de cacao durante las temporadas, "Pascuera" comprende los meses noviembre y diciembre y "Sanjuanera" en los meses junio y julio.',
      },
      {
        text: 'Un día de trabajo de Ávila y su familia inicia aproximadamente a las 5:00 de la mañana, lo primero que hace es “Dar las gracias a Dios”, su enfoque primordial es la limpieza y aplica un cronograma de actividades comenzando el lunes con la recolección y quiebre del fruto para posteriormente tenderlo en unos troncos para que bote la baba hasta el día sábado.',
      },
      {
        text: '"Una de las ventajas que tenemos es la cercanía al agua del mar proveniente de la falda de la montaña, es así como el riego lo realizamos con una manguera construida por nosotros mismos y como es costumbre, el producto debería ser tirado al sol, pero aquí se trabaja con la sombra, ya que los rayos del sol son muy fuertes en esta zona.", Indicó el señor Ávila.',
      },
      {
        text: 'En cuanto a las diferencias de este fruto con los de otras zonas costeras, el señor Juan, nos informó, que la floración de las montañas ayuda con el polen y el fruto se nutre con un suave aroma y toma un sabor a “clavito dulce” que le añade ese toque particular que solo posee el “Cacao Patanemo”',
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
        { label: 'Estado', value: 'Carabobo' },
        { label: 'Municipio', value: 'Puerto Cabello' },
        { label: 'Superficie', value: '51 km2' },
        { label: 'Altitud Promedio', value: '19 m.s.n.m.' },
        { label: 'Coordenadas GPS', value: '10°27′13″N 67°55′24″O' },
        { label: 'Habitantes', value: '2176' },
      ],
    },
    paragraphs: [
      'La Bahía de Patanemo pertenece al Municipio Puerto Cabello del Estado Carabobo, le antecede la Laguna de Bocaína, la extensa vegetación y fauna da la bienvenida al pueblo lleno de esencia y labor de la tierra, sus estrechas calles y viviendas de bahareque nos evoca una época de sacrificio y trabajo.',
    ],
    ecology: {
      title: 'Ecología',
      paragraphs: [
        'El sistema vegetal de la subregión está caracterizada por una gran diversidad de bosques tropófilos basimontanos, caducifolios entre los 0-400 msnm, y bosques umbrófilos semicaducifolios ,entre los 400-1200 msnm.',
        'La Bahía forma parte de la superficie del parque San Esteban, considerado un área de notable belleza, conformado por diferentes paisajes; selvas nubladas, costas e islas, por lo tanto presenta una vegetación rica y variada donde se pueden observar lugares xerófilos y sabanas. En las costas abundan los manglares, hacia el sur se puedes apreciar cardones y espinares.',
        'La fauna de Patanemo, está asociada a los tipos de vegetación y a las características geográficas del área.',
        'En el tramo de la costa se encuentran formaciones coralinas en la Laguna de Patanemo y en el grupo de islas que se encuentran entre ésta y Puerto Cabello, observándose áreas de manglares, cocoteros, cardones y espinares. A partir de los 200 y hasta los 400 m es característico el bosque seco, destacándose especies como flamencos, y garzas. Dentro de las aves destacan la perdiz de montaña, el gavilán blanco, el paují copete de piedra, el perico siete colores y la guacharaca.',
      ],
      images: [
        {
          alt: 'ubicacion de Chuao',
        },
        {
          alt: 'ubicacion de Chuao',
        },
      ],
    },
  },
  history: {
    title: 'Historia',
    images: [
      {
        alt: 'historia de Patanemo Fino',
      },
      {
        alt: 'historia de Patanemo Fino',
      },
    ],
    content: [
      {
        text: 'Patanemo es la población venezolana más apartada del litoral carabobeño, justo donde termina la carretera,  se encuentra en un estado de inanición, olvidado en el tiempo , pero ello no impide que mantenga en vigencia la tradición y cuidado de la atesorada semilla.',
      },
      {
        text: 'Inicialmente Patanemo fue un sitio de encomiendas, dominado por los colonizadores. Para 1661 recibió la visita del gobernador de Venezuela Pedro Porres de Toledo, quien contó haber encontrado 20 indios en la encomienda administrada por la viuda del capitán Gaspar Camacho Ravelo, estos se dedicaban al cultivo de cacao. Hacia 1670, el alférez Juan Francisco de Elgueta promueve el establecimiento del pueblo y de una iglesia, que finalmente fue aprobada por el Cabildo el 22 de abril de ese año.',
      },
      {
        text: 'En el año 1773, el obispo viajero Mariano Martí, visita a la bahía y le otorga el nombre de San Juan Bautista del valle de Patanemo. Para la fecha habían 61 habitantes, que se distribuyeron en viviendas dispersas de bahareque y posteriormente de bloques.',
      },
      {
        text: 'La tierra de Patanemo es rica en acervo cultural donde por costumbres ancestrales se celebran a finales de Junio La Fiesta de San Juan Bautista y Los Diablos Danzantes de Patanemo, acompañada con el repique de los mejores tambores que ponen a vibrar a lugareños y hasta al más rígido de los turistas.',
      },
      {
        text: 'La bahía de Patanemo, es un lugar muy singular de bellos paisajes rodeado de enormes montañas donde se encuentra una buena infraestructura  y sobre todo de una hermosa playa que hace honor a su nombre; es así como se disfruta bajo la luz de su resplandeciente sol.',
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
      alt: 'gourmet patanemo fino cocoa cover',
    },
    rating: {
      stars: 'rating stars 2.7',
    },
    sections: [
      {
        items: [
          { label: 'SWEET FRUITY', value: '1.2' },
          { label: 'CITRUS FRUITY', value: '2.3' },
          { label: 'FLORAL', value: '1.3' },
          { label: 'CREOLE', value: '0.6' },
          { label: 'COCOA', value: '3.5' },
          { label: 'WOODSY', value: '1.5' },
          { label: 'SPICES', value: '1.7' },
        ],
      },
      {
        items: [
          { label: 'ANNUAL PRODUCTION (TM)', value: '30' },
          { label: 'MAIN HARVEST', value: 'DEC-APR' },
          { label: 'MID HARVEST', value: 'JUN-JUL' },
        ],
      },
      {
        items: [{ label: 'CREOLE BEANS', value: '20%' }],
      },
      {
        items: [
          { label: 'FERMENTED BEANS', value: '82%' },
          { label: 'VIOLET BEANS', value: '14%' },
          { label: 'SLATE BEANS', value: '4%' },
          { label: 'TOTAL', value: '100%' },
        ],
      },
      {
        items: [
          { label: 'Beans / 100g:', value: '78' },
          { label: 'g./1 Bean:', value: '1.28 g' },
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
        description: '',
      },
      {
        name: 'Citrus Fruity',
        description: '',
      },
      {
        name: 'Floral',
        description: 'Fresh Flowers',
      },
      {
        name: 'Creole',
        description: 'Nut • Brown Sugar Malt',
      },
      {
        name: 'Cocoa',
        description: 'Cocoa',
      },
      {
        name: 'Woodsy',
        description: 'Tree Bark',
      },
      {
        name: 'Spices',
        description: 'Cinnamon • Clove',
      },
    ],
    assessment: {
      title: 'Assessment',
      classification: 'Patanemo Fino Classification',
      equipment: 'Tasting Panel',
    },
    information: [
      {
        title: 'Aroma:',
        description: {
          boldText: 'MEDIUM',
          additionalText: 'Moderate notes of spices',
        },
      },
      {
        title: 'Flavor:',
        description: {
          boldText: 'MEDIUM',
          additionalText: 'Flavors of herbs, fruits, nuts, and flowers',
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
      alt: 'Patanemo Fino Cocoa',
      description: [
        {
          text: 'The Patanemo bean has characteristics of high trinitario genetics and medium creole descent with 20% white beans, due to hybridization and quality standards.',
        },
        {
          text: 'Cut test results show: (±20%) white beans, (±82%) fermented beans, (±14%) violet beans, (±4%) slate beans.',
        },
        {
          text: 'Regarding weight, beans typically contain 78 almonds per 100g weight; meaning each almond weighs 1.28g.',
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
            '"Patanemo cocoa presents an intense variety of attributes combining soft notes of flowers, fruits, and nuts with aromas of sweet spices like cinnamon and clove",',
          author: 'stated Eng. Ms Gladys Ramos',
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
            'Intense cinnamon attributes stand out along with aromatic spices and soft herbal, floral, rain, and wet earth notes. The soil and climate conditions, xerophilous vegetation, and bird fauna like flamingos shape the flavor attributes of Patanemo cocoa products.',
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
        text: 'Patanemo beans have high trinitario genetics and measured creole descent, requiring the following fermentation process.',
      },
      {
        text: 'Approximately 200 kg of cocoa are transported via pack donkeys to the corresponding household.',
      },
      {
        protocols: [
          {
            title: 'Fermentation Protocol',
            items: [
              {
                key: 'Cocoa Type',
              },
              {
                alt: 'patanemo seed',
                text: 'Trinitario',
              },
              {
                key: 'Fermentation Days',
                value: '4 to 5 days',
              },
              {
                key: 'Cocoa Type',
              },
              {
                items: [
                  'Box type: Wooden',
                  'Turning frequency: every 48 hours',
                  'Fermentation method: Beans are packed in nylon sacks and covered with large transparent plastics.',
                ],
              },
            ],
            image: {
              alt: 'fermentation protocol',
            },
          },
          {
            title: 'Drying Protocol',
            description:
              'For drying, beans are transported via pack donkeys to households where they are spread on concrete surfaces under partial sun protection:',
            items: [
              {
                key: 'Cocoa Type',
              },
              {
                alt: 'patanemo seed',
                text: 'Dry Trinitario',
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
                  'Floor type: concrete/corrugated roof',
                  'Humidity: 7.5%',
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
        text: 'This sector has 25-30 producers, mostly locals and Andean farmers working for 20 years. Whole families participate in harvesting, post-harvest processing, and crafting traditional products.',
      },
      {
        text: 'While agriculture is the main economy, they also engage in fishing, and cultivate/sell yuca, plantain, cattle, banana, orange, and exotic flowers.',
      },
      {
        text: 'Juan Antonio Ávila, 47, is recognized as the largest cocoa producer in the area, working with family and friends to cultivate quality beans.',
      },
      {
        text: 'Mr. Ávila\'s 16-hectare farm includes 12Ha of cocoa, producing ~1000 kg annually during "Pascuera" (Nov-Dec) and "Sanjuanera" (Jun-Jul) seasons.',
      },
      {
        text: 'The Ávila family starts work at 5 AM with cleaning and follows a strict schedule: Monday harvest and pod-breaking, then sun-drying until Saturday.',
      },
      {
        text: '"We use seawater from mountain runoff for irrigation through homemade hoses. We dry in shade due to intense sun," explained Mr. Ávila.',
      },
      {
        text: '"Mountain flowering provides unique pollen that gives our cocoa its distinctive \'sweet clove\' aroma unmatched in other coastal areas," added Juan.',
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
        { label: 'State', value: 'Carabobo' },
        { label: 'Municipality', value: 'Puerto Cabello' },
        { label: 'Area', value: '51 km2' },
        { label: 'Average Altitude', value: '19 m.a.s.l.' },
        { label: 'GPS Coordinates', value: '10°27′13″N 67°55′24″W' },
        { label: 'Population', value: '2176' },
      ],
    },
    paragraphs: [
      'Patanemo Bay belongs to Puerto Cabello Municipality, preceded by Bocaína Lagoon. Its vegetation and fauna welcome visitors to this land of essence and labor, with narrow streets and bahareque houses evoking sacrifice and work.',
    ],
    ecology: {
      title: 'Ecology',
      paragraphs: [
        'The vegetation system features diverse tropophilous basimontane forests (0-400m) and ombrophilous semi-deciduous forests (400-1200m).',
        'The bay is part of San Esteban Park, containing cloud forests, coasts, islands, xerophilous areas, and savannas. Coastal mangroves transition to southern cardones and thorny shrubs.',
        'Local fauna adapts to vegetation and geography: coastal coral formations host mangroves and coconut palms, while higher altitudes feature flamingos, herons, mountain partridges, white hawks, and colorful parrots.',
      ],
      images: [
        {
          alt: 'Chuao location',
        },
        {
          alt: 'Chuao location',
        },
      ],
    },
  },
  history: {
    title: 'History',
    images: [
      {
        alt: 'Patanemo Fino history',
      },
      {
        alt: 'Patanemo Fino history',
      },
    ],
    content: [
      {
        text: "Patanemo remains Venezuela's most remote coastal Carabobo town, forgotten in time but preserving cocoa traditions.",
      },
      {
        text: 'Originally an encomienda site, Governor Pedro Porres de Toledo documented 20 indigenous cocoa growers in 1661. The town was officially established in 1670 with church approval.',
      },
      {
        text: 'In 1773, Bishop Mariano Martí named it San Juan Bautista del Valle de Patanemo, documenting 61 inhabitants in bahareque houses.',
      },
      {
        text: 'Cultural heritage includes the June San Juan Bautista Festival and Dancing Devils of Patanemo, accompanied by vibrant drumming.',
      },
      {
        text: 'Patanemo Bay offers unique landscapes with mountains and beaches under radiant sunshine, maintaining its ancestral legacy.',
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

const patanemo = { es, en };

export { patanemo };
