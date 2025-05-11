const es = {
  generalInformation: {
    title: 'evaluacion',
    image: {
      alt: 'portada de procelana cacao',
    },
    rating: '4.1',
    sections: [
      {
        items: [
          { label: 'AFRUTADO DULCE', value: '1.5' },
          { label: 'AFRUTADO CÍTRICO', value: '1.5' },
          { label: 'AFLORADO', value: '1.0' },
          { label: 'ACRIOLLADO', value: '1.5' },
          { label: 'CACAO', value: '2.4' },
          { label: 'BOSCOSO', value: '2.0' },
          { label: 'ESPECIAS', value: '0.0' },
        ],
      },
      {
        items: [
          { label: 'PRODUCCIÓN ANUAL (TM)', value: '7' },
          { label: 'COSECHA PRINCIPAL', value: 'DIC-MAY' },
          { label: 'COSECHA MEDIA', value: 'JUL-AGO' },
        ],
      },
      {
        items: [
          { label: 'GRANOS CRIOLLOS', value: '57%' },
          { label: 'GRANOS FERMENTADOS', value: '91%' },
          { label: 'GRANOS VIOLETAS', value: '7%' },
          { label: 'GRANOS PIZARROSOS', value: '2%' },
          { label: 'TOTAL', value: '100%' },
        ],
      },
      {
        items: [
          { label: 'Granos / 100 g.', value: '80' },
          { label: 'g./1 Grano', value: '1,25 g' },
        ],
      },
      {
        items: [
          { label: 'CERTIFICADO', value: 'SI' },
          { label: 'PREMIOS', value: 'SI' },
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
        description: 'Uvas pasas • Ciruelas pasas',
      },
      {
        name: 'Afrutado Cítrico',
        description: 'Naranja',
      },
      {
        name: 'Aflorado',
        description: 'Naranja • Mandarina',
      },
      {
        name: 'Acriollado',
        description: 'Malta • Caña de azúcar • Panela • Maní tostado • Almendras • Nuez • Caramelo',
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
      classification: 'Clasificacion de Chuao',
      equipment: 'Equipo de Cata',
    },
    information: [
      {
        title: 'S = Sabor:',
        description: {
          boldText: 'FUERTE',
          additionalText: 'Denota sabor a nueces y caramelo',
        },
      },
      {
        title: 'A = Aroma:',
        description: {
          boldText: 'FUERTE',
          additionalText: 'Destaca el aroma a nueces',
        },
      },
      {
        title: 'F = Fermentación:',
        description: {
          boldText: 'ALTA',
          additionalText: 'Bajos niveles de astringencia y amargura',
        },
      },
    ],
    source: 'Ing. Ms. Gladys Ramos',
    analysis: {
      title: 'Análisis de Corte',
      alt: 'Cacao de Porcelana',
      description: [
        {
          text: "El cacao Gran Nativo Blanco debido a su alta genética 'criolla', produce hasta un 57% de granos blancos que le proporcionan su calidad y aroma. En algunos micro-lotes, se puede apreciar un 70% de granos blancos.",
        },
        {
          text: 'La tonalidad que predomina en los granos es el color caramelo, y al cortarlo transversalmente la mayoría de los granos son de un blanco marfil.',
        },
        {
          text: 'Su análisis de corte posee granos fermentados (± 91%), con granos violetas (± 7%) y granos pizarrosos (±2%).',
        },
        {
          text: 'En relación a su peso generalmente los granos contienen 80 almendras sobre un peso de 100 gramos es decir que cada almendra pesa 1,25 gr.',
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
          text: 'Producto muy especial de las tierras de la región piurana en el Perú, donde la mano del hombre ha modelado el microclima y en especial las condiciones de humedad normalmente en déficit para poder aprovechar los nutrientes cuando la naturaleza provee de su pluviosidad muy esperada.',
        },
        {
          type: 'quote',
          quote:
            '"Gran Nativo Blanco se caracteriza por una diversidad de sabores delicados como el de frutas de acidez abierta, el floral de infusiones herbales, el de nueces como avellanas, el dulce de la malta y frutos marrones como las ciruelas pasas"',
          author: 'detalló la Ing Ms Gladys Ramos.',
        },
      ],
      image: { alt: 'Rueda de sabores del cacao' },
    },
    {
      title: 'Mapa Sensorial',
      content: [
        {
          type: 'paragraph',
          text: 'Gran Nativo Blanco es el cacao único y reconocido por sus delicados sabores, aromas y fragancias.',
        },
        {
          type: 'paragraph',
          text: 'Estos granos son de color oro brillante con un intenso aroma de pamela, acidez dulce, predominante cítricos dulces y notas de flores. Notas de chocolate de larga duración.',
        },
        {
          type: 'paragraph',
          text: 'Es un cacao de baja astringencia y amargor, de textura cremosa y cuerpo ligero.',
        },
        {
          type: 'quote',
          quote:
            '"Gran Nativo Blanco es un cacao especial de cotiledones blancos de fermentación intermedia que con facilidad permite saborear el dulce de las nueces y la acidez de frutos variados. Sus notas herbales que evocan un cacao silvestre, con sensaciones sostenidas, lo hacen merecedor de varios reconocimientos y distinciones como cacaos especiales"',
          author: 'detalló la Ing Ms Gladys Ramos.',
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
        text: 'Gran Nativo es un cacao muy especial, el proceso de post cosecha comienza en las chacras con la recolección de los frutos, de allí es trasladado al centro de acopio de la comunidad, en donde un especialista, recibe el cacao, lo pesa, y traslada a los cajones de fermentación.',
      },
      {
        protocols: [
          {
            title: 'Protocolo de Refinamiento',
            items: [
              {
                key: 'Tipo de Cacao',
              },
              {
                alt: 'semilla porcelana',
                text: 'Trinitario',
              },
              {
                alt: 'semilla criollo',
                text: 'Criollo',
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
                  'Frecuencia de volteos: cada 24 horas',
                  'Forma de Fermentación: se inicia colocando los granos en sacos de jute y una vez llevados al centro de acopio se distribuyen los granos en cajones de madera, cubiertos con hojas de plátano.',
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
                alt: 'semilla porcelana',
                text: 'Trinitario',
              },
              {
                alt: 'semilla porcelana',
                text: 'Criollo',
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
                  'Tipo de piso: Camas de madera y piso de cemento',
                  'Humedad: 7,5%',
                  'Forma de Secado: Al Sol',
                ],
              },
            ],
            image: {
              alt: 'protocolo de fermentacion',
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
        text: [
          { type: 'bold', text: 'Gran Nativo Blanco cuenta con los Certificados' },
          { type: 'link', text: 'Fairtrade', link: 'https://www.fairtrade.net/en.html' },
          { type: 'bold', text: 'Direct Trade y Orgánico EU.' },
        ],
      },
      {
        text: [
          {
            type: 'bold',
            text: 'Es el cacao más premiado del Perú, entre otros premios y distinciones: Cacao de Oro 2012 y Mejor Cacao del Mundo de la',
          },
          {
            type: 'link',
            text: '“International Chocolate Awards 2012”',
            link: 'https://www.internationalchocolateawards.com/es/',
          },
          { type: 'bold', text: 'representado por' },
          {
            type: 'link',
            text: 'Chocolateria PACARI',
            link: 'https://www.pacarichocolate.com/premios',
          },
        ],
      },
      {
        text: 'San Juan de Bigote esta al sureste de Chulucanas, provincia de Morropon, allí se encuentran los sembradíos más puros de cacao Marañón Nacional. Un grupo genético muy antiguo que proviene de la cuenca del Rio Chinchipe, que desemboca en el Marañón.',
      },
      {
        text: 'Gran Nativo Blanco, es un cacao único, con una alta proporción de granos blancos. Escondido durante más de un siglo, esta joya de la naturaleza fue redescubierta en el 2008 en los pequeños campos de cacao del alto Piura, al norte del Perú.',
      },
      {
        text: 'Por iniciativa del Ing. Eduardo Tamariz, los pequeños productores de cacao de la región identificaron los mejores árboles y reintrodujeron este antiguo cacao varietal.',
      },
      {
        text: 'El tamaño promedio de las chacras donde se cultiva el cacao es de menos de una hectárea, y el riego en alguna de ellas se hace por gravedad. Los agricultores se organizan en asociaciones llamadas cooperativas de primer nivel, cuya objetivo principal es promover las buenas prácticas agrícolas y la comercialización directa de sus productos en post de un bien común.',
      },
      {
        text: 'En las chacras se recoge el cacao y se traslada a centros de acopio. Allí pasan por un primer proceso productivo, hasta ahora artesanal. Los granos son vertidos en grandes cajones de madera donde se fermentan durante seis días. En este periodo las semillas se desprenden de la pulpa con la que salen de la mazorca, liberan jugos, se agrietan y se tornan color marrón.',
      },
      {
        text: 'Luego de la fermentación, el cacao se extiende sobre camas de madera para un secado de 5 a 6 días. Dos horas en pleno sol y el resto del día bajo sombra. Al tercer día de secado, el cacao es expuesto al sol toda la jornada. Los tiempos de exposición son rigurosos y cuidados. En este punto la humedad se evapora y la semilla alcanza un estado optimo.',
      },
      {
        text: 'En los centros de acopio se hace el proceso de selección donde se separan las impurezas, granos dañados o de menor tamaño. Luego vienen los estudios para certificar su calidad y el proceso de empacado.',
      },
      {
        text: 'La cantidad de pobladores de las comunidades de donde proviene nuestro cacao, varia de un caserío a otro, sus habitantes viven en casas de adobe o ladrillos, y descienden de pueblos autóctonos precolombinos.',
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
    title: 'Ubicación Geográfica y su Ecología',
    subtitle: 'Ubicación Geográfica',
    locationInfo: {
      map: {
        alt: 'mapa de Peru',
      },
      details: [
        { label: 'País', value: 'Perú' },
        { label: 'Provincia', value: 'Morropon' },
        { label: 'Distrito', value: 'San Juan de Bigotes' },
        { label: 'Superficie', value: '245 km2' },
        { label: 'Altitud promedio', value: '174 m.s.n.m. (833 pies)' },
        { label: 'Coordenadas GPS', value: '5°19′09″S 79°47′11″O' },
        { label: 'Habitantes', value: '7384' },
      ],
    },
    paragraphs: [],
    ecology: {
      title: 'Ecología',
      paragraphs: [
        'Una parte de la superficie del distrito de Morropon se encuentra cubierta de densos bosques, denominados secos por los expertos debido a que soportan un régimen de humedad extremo, marcado por una breve estación lluviosa y una larga temporada de sequía.',
        'Su relieve está compuesto principalmente de quebradas secas que se transforman en furiosos cauces con la llegada ocasional de las lluvias. Son más estrechas y profundas hacia el norte del departamento, y ganan amplitud en la zona sur, donde se ubican los valles del Chira y el Piura, los grandes ríos que recorren este territorio.',
        'Los bosques secos se comparan a vitrinas naturales donde las criaturas han debido adaptarse a condiciones propias del desierto, pero alteradas sutilmente por una breve estación de lluvias que hace su aparición durante el verano. Aquí las plantas han debido aprender a vivir de la oportunidad.',
        'Destacan Grandes, majestuosos algarrobos árboles milagrosos que se ofrecen para casi todo lo que la imaginación pueda vislumbrar: sus frutos, alimento para el hombre y sus animales; su madera, para la construcción, y su generosa sombra, para guarecerse del sol inclemente del desierto, sobresales las plantaciones de mangos, limones, bananos y platanos.',
        'El bosque seco es también el refugio de singulares especies animales, algunas raras y esquivas, como la pava aliblanca y otras frecuentes, pero no por ello menos atractivas, como el oso hormiguero tamandúa, la ardilla de nuca blanca, las iguanas y el venado de cola blanca.',
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
    socioeconomic: {
      title: 'Socioeconomía',
      paragraphs: [
        'La economía local gira en torno a las actividades agrícolas, lo que les otorga un papel crucial como proveedores de alimentos para todo el país. La región es la principal productora de plátano y tiene una gran influencia en la producción de banano, maíz, cacao, yuca y caña de azúcar. La zona también es importante en la producción ganadera, ya que es el segundo mayor productor de carne y leche del país. Esta actividad está orientada a la producción de ganado bovino y porcino, pero especialmente a la producción de productos lácteos. Esta ubicación geográfica también es perfecta para las actividades pesqueras gracias a la adyacencia con el Lago de Maracaibo y la gran cantidad de ríos, canales y arroyos.',
      ],
      images: [
        {
          alt: 'ubicacion de Porcelana',
        },
        {
          alt: 'ubicacion de Porcelana',
        },
      ],
    },
  },
  history: {
    title: 'Historia',
    images: [
      {
        alt: 'historia de Porcelana',
      },
      {
        alt: 'historia de Porcelana',
      },
    ],
    content: [
      {
        text: 'Perú es el segundo productor de cacao Orgánico del Mundo.',
      },
      {
        text: 'La semilla del árbol de cacao hechó raíces en Piura mucho antes que el banano o que el alegre y fácil mango. Planta vieja y sabia, crece a la sombra de los árboles más altos, sobre todo en el norte, donde el sol abraza sin consideración.',
      },
      {
        text: 'El cacao en Perú, surgió en la amazonia, calurosa y hostil, bajo la sombra de los árboles más recios. Pero el fruto se expandió hacia la costa, donde mutó en su variedad más valiosa. El fenotipo exacto del cacao de Piura, según, Maricel Presilla, es “Marañon Nacional”.',
      },
      {
        text: 'Al ver la geografía del Cacao Nacional, se puede apreciar que se transmite a través de los ríos y cruza a Piura. Este Cacao Nacional Piurano, se distingue por su terroir, las condiciones climáticas de la región, días calurosos y noches secas de temperaturas constantes.',
      },
      {
        text: 'Como destaca Eduardo Tamariz, para el año 2008 Jorge Vivas, un especialista venezolano, comenzó a orientar el proceso de mejora genética de un grupo de semillas seleccionadas según criterios muy exigentes, entre otros de porcentaje de granos blancos, cantidad de almendras por mazorca, calibre de las semillas y características físicas de sabor, aroma y textura.',
      },
      {
        text: 'Gracias a la experticia del venezolano y a un estudio adelantado en 2008, Eduardo logra la identificación de los mejores árboles y, luego de apuestas tercas y pacientes, pudo sembrar veinticinco plantas élite en su terreno de La Quemazón, una especie de grupo vedette con los estándares más altos de producción, calidad y resistencia a las enfermedades, todas ellas de granos finos y transmisión genética más eficiente. Plantas de un valor incalculable.',
      },
      {
        text: 'Con el apoyo de la ONG Progreso en el 2008, se organiza a los pequeños productores y se les imparte clases de buenas prácticas agrícolas bajo los principios del cooperativismo. Se trabaja conjuntamente con nuestros aliados estratégicos de Piura, para seleccionar, promover y conectar directamente las mejores chocolateras del mundo con nuestros productores de Gran Nativo Blanco.',
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
    title: 'review',
    image: {
      alt: 'Procelana cacao cover',
    },
    rating: '4.1',
    sections: [
      {
        items: [
          { label: 'SWEET FRUITY', value: '1.5' },
          { label: 'CITRUS FRUITY', value: '1.5' },
          { label: 'FLOWERY', value: '1.0' },
          { label: 'ACRIOLLED', value: '1.5' },
          { label: 'COCOA', value: '2.4' },
          { label: 'WOODY', value: '2.0' },
          { label: 'SPICES', value: '0.0' },
        ],
      },
      {
        items: [
          { label: 'ANNUAL PRODUCTION (TM)', value: '7' },
          { label: 'MAIN CROP', value: 'DEC-MAY' },
          { label: 'MIDDLE CROP', value: 'JUL-AUG' },
        ],
      },
      {
        items: [
          { label: 'CRIOLLO GRAINS', value: '57%' },
          { label: 'FERMENTED GRAINS', value: '91%' },
          { label: 'VIOLET GRAINS', value: '7%' },
          { label: 'SLATY GRAINS', value: '2%' },
          { label: 'TOTAL', value: '100%' },
        ],
      },
      {
        items: [
          { label: 'Grains / 100 g.', value: '80' },
          { label: 'g./1 Grain', value: '1.25 g' },
        ],
      },
      {
        items: [
          { label: 'CERTIFIED', value: 'YES' },
          { label: 'AWARDS', value: 'YES' },
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
        description: 'Dried Grapes • Prunes',
      },
      {
        name: 'Fruity Citrus',
        description: 'Orange',
      },
      {
        name: 'Flowery',
        description: 'Orange • Mandarin',
      },
      {
        name: 'Acriollado',
        description: 'Malt • Sugarcane • Panela • Roasted Peanuts • Almonds • Walnut • Caramel',
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
        name: 'Spices',
        description: '',
      },
    ],
    assessment: {
      title: 'Evaluation',
      classification: 'Chuao Classification',
      equipment: 'Tasting Equipment',
    },
    information: [
      {
        title: 'S = Flavor:',
        description: {
          boldText: 'STRONG',
          additionalText: 'Denotes a nutty and caramel flavor',
        },
      },
      {
        title: 'A = Aroma:',
        description: {
          boldText: 'STRONG',
          additionalText: 'Notable nutty aroma',
        },
      },
      {
        title: 'F = Fermentation:',
        description: {
          boldText: 'HIGH',
          additionalText: 'Low levels of astringency and bitterness',
        },
      },
    ],
    source: 'Ing. Ms. Gladys Ramos',
    analysis: {
      title: 'Cut Analysis',
      alt: 'Porcelana Cocoa',
      description: [
        {
          text: "Gran Nativo Blanco, due to its high 'criolla' genetics, produces up to 57% white beans, which give it its quality and aroma. In some micro-lots, 70% of the beans are white.",
        },
        {
          text: 'The predominant color of the beans is caramel, and when cut crosswise, most of the beans are ivory white.',
        },
        {
          text: 'Its cut analysis shows fermented beans (± 91%), with violet beans (± 7%), and slate-colored beans (± 2%).',
        },
        {
          text: 'In relation to their weight, the beans generally contain 80 almonds per 100 grams, meaning each almond weighs 1.25 grams.',
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
          text: 'A very special product from the lands of the Piura region in Peru, where humankind has shaped the microclimate and especially the humidity conditions that are normally lacking in order to take advantage of the nutrients when nature provides its much-anticipated rainfall.',
        },
        {
          type: 'quote',
          quote:
            '"Gran Nativo Blanco is characterized by a diversity of delicate flavors such as open acidity of fruits, the floral notes of herbal infusions, nutty notes like hazelnuts, the sweetness of malt, and brown fruits like prunes"',
          author: 'Ing. Ms. Gladys Ramos explained.',
        },
      ],
      image: { alt: 'Cacao Flavor Wheel' },
    },
    {
      title: 'Sensory Map',
      content: [
        {
          type: 'paragraph',
          text: 'Gran Nativo Blanco is the unique cacao recognized for its delicate flavors, aromas, and fragrances.',
        },
        {
          type: 'paragraph',
          text: "These beans are a bright gold color with an intense hoopPamela's nose, sweet acidity, predominantly sweet citrus and floral notes. Long-lasting chocolate notes.",
        },
        {
          type: 'paragraph',
          text: 'It is a cocoa with low astringency and bitterness, with a creamy texture and light body.',
        },
        {
          type: 'quote',
          quote:
            'Gran Nativo Blanco is a special white cotyledon cocoa with intermediate fermentation that easily allows you to taste the sweetness of nuts and the acidity of various fruits. Its herbal notes, reminiscent of wild cocoa, with sustained sensations, have earned it several recognitions and distinctions as specialty cocoas.',
          author: 'Ing. Ms. Gladys Ramos explained.',
        },
      ],
      image: {
        alt: 'Sensory Flavor Map',
      },
    },
  ],
  postHarvestBenefit: {
    title: 'Post-Harvest Benefit',
    content: [
      {
        text: 'Gran Nativo is a very special cocoa, the The post-harvest process begins on the farms with the collection of the beans. From there, they are transported to the community collection center, where a specialist receives the cacao, weighs it, and transfers it to the fermentation bins.',
      },
      {
        protocols: [
          {
            title: 'Refining Protocol',
            items: [
              {
                key: 'Cacao Type',
              },
              {
                alt: 'porcelain seed',
                text: 'Trinitario',
              },
              {
                alt: 'criollo seed',
                text: 'Criollo',
              },
              {
                key: 'Fermentation Days',
                value: '5 to 6 days',
              },
              {
                key: 'Fermentation Techniques',
              },
              {
                items: [
                  'Bin Type: Wood',
                  'Turning Frequency: every 24 hours',
                  'Fermentation Method: The beans are placed in jute sacks, and once they are taken to the collection center, they are distributed in wooden crates covered with banana leaves.',
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
                key: 'Type of Cacao',
              },
              {
                alt: 'porcelain seed',
                text: 'Trinitario',
              },
              {
                alt: 'porcelain seed',
                text: 'Criollo',
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
                  'Floor Type: Wooden beds and a cement',
                  'Humidity: 7.5%',
                  'Drying Method: Sun',
                ],
              },
            ],
            image: {
              alt: 'fermentation protocol',
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
        text: [
          { type: 'bold', text: 'Gran Nativo Blanco has the Certifications' },
          { type: 'link', text: 'Fairtrade', link: 'https://www.fairtrade.net/en.html' },
          { type: 'bold', text: 'Direct Trade and Organic EU.' },
        ],
      },
      {
        text: [
          {
            type: 'bold',
            text: 'It is the most awarded cocoa in Peru, among other awards and distinctions: Cacao de Oro 2012 and Best Cocoa in the World',
          },
          {
            type: 'link',
            text: '“International Chocolate Awards 2012”',
            link: 'https://www.internationalchocolateawards.com/es/',
          },
          { type: 'bold', text: 'represented by' },
          {
            type: 'link',
            text: 'Chocolateria PACARI',
            link: 'https://www.pacarichocolate.com/premios',
          },
        ],
      },
      {
        text: 'San Juan de Bigote is located southeast of Chulucanas, in the province of Morropon. It is home to the purest Marañón Nacional cacao plantations. A very ancient genetic group that originates from the Chinchipe River basin, which flows into the Marañón River.',
      },
      {
        text: 'Gran Nativo Blanco is a unique cacao with a high proportion of white beans. Hidden for over a century, this gem of nature was rediscovered in 2008 in the small cacao fields of Alto Piura, northern Peru.',
      },
      {
        text: 'At the initiative of Engineer Eduardo Tamariz, small cacao producers in the region identified the best trees and reintroduced this ancient cacao varietal.',
      },
      {
        text: 'The average size of the plots where cacao is grown is less than one hectare, and irrigation is limited.Some of them are produced by gravity. Farmers organize themselves into associations called first-level cooperatives, whose main objective is to promote good agricultural practices and the direct marketing of their products for the common good.',
      },
      {
        text: 'On the farms, the cacao is harvested and transported to collection centers. There, they undergo an initial production process, which until now has been artisanal. The beans are poured into large wooden crates where they ferment for six days. During this period, the seeds separate from the pulp with which they emerge from the cob, release juices, crack, and turn brown.',
      },
      {
        text: 'After fermentation, the cacao is spread out on wooden beds for 5 to 6 days of drying. Two hours in full sun and the rest of the day in shade. On the third day of drying, the cacao is exposed to the sun all day. The exposure times are rigorous and careful. At this point, the moisture evaporates and the seed reaches its optimal state.',
      },
      {
        text: 'In the collection centers, the selection process takes place, separating impurities, damaged grains, or smaller grains. Then come the studies to certify its quality and the packaging process.',
      },
      {
        text: 'The number of residents in the communities where our cacao comes from varies from one village to another. Their inhabitants live in adobe or brick houses and are descended from indigenous pre-Columbian peoples.',
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
    title: 'Geographic Location and its Ecology',
    subtitle: 'Geographic Location',
    locationInfo: {
      map: {
        alt: 'map of Peru',
      },
      details: [
        { label: 'Country', value: 'Peru' },
        { label: 'Province', value: 'Morropon' },
        { label: 'District', value: 'San Juan de Bigotes' },
        { label: 'Area', value: '245 km2' },
        { label: 'Average altitude', value: '174 m.a.s.l. (833 ft)' },
        { label: 'GPS Coordinates', value: '5°19′09″S 79°47′11″W' },
        { label: 'Inhabitants', value: '7384' },
      ],
    },
    paragraphs: [],
    ecology: {
      title: 'Ecology',
      paragraphs: [
        'Part of the surface of the Morropon district is covered by dense forests, called dry by experts because they endure an extreme humidity regime, marked by a short rainy season and a long dry season.',
        'Its relief is mainly composed of dry ravines that transform into raging channels with the occasional arrival of rain. They are narrower and deeper toward the north of the department, and become wider in the south, where the Chira and Piura valleys, the great rivers that flow through this territory, are located.',
        'Dry forests are like natural showcases where creatures have had to adapt to desert conditions, subtly altered by a brief rainy season that appears during the summer. Here, plants have had to learn to thrive.',
        'Large, majestic carob trees stand out, miraculous trees that offer almost everything the imagination can imagine: their fruits, food for humans and their animals; Its timber, for construction, and its generous shade, for shelter from the harsh desert sun, are notable for its mango, lemon, banana, and plantain plantations.',
        'The dry forest is also a refuge for unique animal species, some rare and elusive, such as the white-winged guan, and others common but no less attractive, such as the tamandua anteater, the white-naped squirrel, iguanas, and the white-tailed deer.',
      ],
      images: [
        {
          alt: 'location of Chuao',
        },
        {
          alt: 'location of Chuao',
        },
      ],
    },
    socioeconomic: {
      title: 'Socioeconomics',
      paragraphs: [
        'The local economy revolves around agricultural activities, which gives them a crucial role as suppliers of food for the entire country. The region is the main producer of plantain and has a significant influence on the production of bananas, corn, cocoa, cassava, and sugarcane. The area is also important for livestock production, as it is the second largest producer of meat and milk in the country. This activity is focused on cattle and pig production, but especially on the production of dairy products. This geographic location is also perfect for fishing activities thanks to its proximity to Lake Maracaibo and the large number of rivers, canals, and streams.',
      ],
      images: [
        {
          alt: 'location of Porcelana',
        },
        {
          alt: "Porcelana's location",
        },
      ],
    },
  },
  history: {
    title: 'History',
    images: [
      {
        alt: "Porcelana's history",
      },
      {
        alt: "Porcelana's history",
      },
    ],
    content: [
      {
        text: 'Peru is the second-largest producer of organic cocoa in the world.',
      },
      {
        text: 'The seed of the cocoa tree took root in Piura long before the banana or the cheerful and easy-going mango. An old and wise plant, it grows in the shade of the tallest trees, especially in the north, where the sun scorches without regard.',
      },
      {
        text: 'Cocoa in Peru originated in the hot and hostile Amazon, under the shade of the sturdiest trees. But the fruit spread toward the coast, where it mutated into its most valuable variety. The exact phenotype of Piuran cacao, according to Maricel Presilla, is "Marañon Nacional.',
      },
      {
        text: "Looking at the geography of Cacao Nacional, you can see that it is transmitted through the rivers and crosses into Piura. This Piuran National Cacao is distinguished by its terroir, the region's climatic conditions, hot days, and dry nights with constant temperatures.",
      },
      {
        text: 'As Eduardo Tamariz points out, in 2008, Jorge Vivas, a Venezuelan specialist, began to guide the genetic improvement process of a group of seeds selected according to very demanding criteria, including the percentage of white beans, the number of kernels per cob, seed size, and physical characteristics of flavor, aroma, and texture.',
      },
      {
        text: "Thanks to the Venezuelan's expertise and a study conducted in 2008, Eduardo identified the best trees and, after stubborn and patient efforts, was able to plant twenty- five elite plants on his land in La Quemazón, a kind of star group with the highest standards of production, quality, and disease resistance, all with fine beans and more efficient genetic transmission.Plants of incalculable value.",
      },
      {
        text: "With the support of the NGO Progreso, in 2008, small producers were organized and taught good agricultural practices based on the principles of cooperativism. We work together with our strategic allies in Piura to select, promote, and directly connect the world's best chocolate makers with our Gran Nativo Blanco producers.",
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
      'The primary objective is to collaborate, enrich, and promote good agricultural practices in generating community renewal. Thanks to the contribution and partnership with FUNDACION PROSPERI, a non-profit foundation committed to disseminating the historical, cultural, and agricultural values ​​of Venezuela through its educational programs such as "Regreso al Agro," we demonstrate that cocoa farming is a profitable profession that generates social change.',
  },
};

const piura = {
  es,
  en,
};

export { piura };
