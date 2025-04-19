const es = {
  generalInformation: {
    title: 'evaluacion',
    image: {
      alt: 'portada cacao gourmet canoabo fino',
    },
    rating: {
      stars: 'estrellas de calificación 2.4',
    },
    sections: [
      {
        items: [
          { label: 'AFRUTADO DULCE', value: '1.6' },
          { label: 'AFRUTADO CÍTRICO', value: '2.5' },
          { label: 'AFLORADO', value: '1.3' },
          { label: 'ACRIOLLADO', value: '2.5' },
          { label: 'CACAO', value: '2.3' },
          { label: 'BOSCOSO', value: '0.5' },
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
          { label: 'GRANOS FERMENTADOS', value: '86%' },
          { label: 'GRANOS VIOLETAS', value: '6%' },
          { label: 'GRANOS PIZARROSOS', value: '8%' },
          { label: 'TOTAL', value: '100%' },
        ],
      },
      {
        items: [
          { label: 'Granos / 100g:', value: '85' },
          { label: 'g./1 Grano:', value: '1,18 g' },
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
        description: '',
      },
      {
        name: 'Aflorado',
        description: '',
      },
      {
        name: 'Acriollado',
        description: 'Nueces • Pistacho • Panela malta • Caramelo',
      },
      {
        name: 'Cacao',
        description: 'Cacao',
      },
      {
        name: 'Boscoso',
        description: 'Hierbas • Madera',
      },
      {
        name: 'Especias',
        description: '',
      },
    ],
    assessment: {
      title: 'Evaluación',
      classification: 'Clasificación de Canoabo Fino',
      equipment: 'Equipo de Cata',
    },
    information: [
      {
        title: 'Sabor:',
        description: {
          boldText: 'MEDIO',
          additionalText: 'Presencia de sabores afrutados, caramelos, nueces',
        },
      },
      {
        title: 'Aroma:',
        description: {
          boldText: 'BAJO',
          additionalText: 'Esencias florales y herbales',
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
      alt: 'Cacao de Canoabo Fino',
      description: [
        {
          text: 'Debido a las propiedades de genética criolla y  elevada descendencia trinitaria los granos misceláneos de Canoabo, delimitan (±6%) en granos criollos y en la prueba de corte (±86%) en granos fermentados, en granos violeta (±6%), en granos pizarrosos (±8%).',
        },
        {
          text: 'En relación al peso se encuentran 85 almendras referentes a un peso de 100 gr, en otros términos cada almendra pesa 1,18gr.',
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
          text: 'Al cacao de Canoabo, definitivamente lo caracteriza el atributo dulce de las nueces caramelizadas que evoca al pistacho. Se percibe una sensación cremosa y untuosidad realmente atractivas y diferenciadas que incita a continuar degustándolo. Su permanencia en el post gusto lo hace inolvidable y muy especial. Presenta un agradable fondo a cacao de 2,6 con notas dulces y de caramelo.',
        },
        {
          type: 'quote',
          quote:
            '"Se perfilan todos los sabores característicos de los criollos entrelazados con trinitarios bien beneficiados que conducen a una experiencia única, deseable y permanente en el tiempo", Detalló la Ing. Ms. Gladys Ramos.',
        },
      ],
      image: { alt: 'Rueda de sabores del cacao' },
    },
    {
      title: 'Mapa Sensorial',
      content: [
        {
          type: 'paragraph',
          text: 'La geografía de la región por su cercanía a las costas del centro norte de Venezuela moldean intensamente el perfil sensorial del cacao de Canoabo , destacándose la textura untuosa de cacao claros, acriollados, con una excelente combinación de afrutados, florales, herbales, dulce y caramelo que hacen de este cacao, una excelente materia prima para los chocolates gourmet.',
        },
        {
          type: 'quote',
          quote:
            '"Son sus atributos más diferenciados su textura cremosa persistente y su sabor a caramelo", indicó la Ing. Ms. Gladys Ramos.',
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
                text: 'Para el inicio de la etapa de fermentación del grano de Canoabo, por contener un alto nivel de genética Trinitaria y descendencia criolla moderada, se debe seguir el siguiente proceso:',
              },
              {
                key: 'Tipo de Cacao',
              },
              {
                alt: 'semilla canoabo',
                text: 'Trinitario',
              },
              {
                key: 'Días de Fermentación',
                value: '5 a 7 días',
              },
              {
                items: [
                  'Tipo de cajon: Madera',
                  'Frecuencia de volteos: Primer volteo a las 24 horas, segundo volteo a las 72 horas, tercer volteo a las 120 horas.',
                  'Forma de Fermentación: Son colocados encima de un material tipo nylon, el grano no toca directamente el recipiente.',
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
                text: 'El procedimiento depende de los días de fermentación y la consistencia que tomen los granos durante el proceso, para la evolución del grano o secado, Se realizan remociones cada media hora.',
              },
              {
                key: 'Tipo de Cacao',
              },
              {
                alt: 'semilla canoabo',
                text: 'Trinitario seco.',
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
        text: 'La producción agrícola y el turismo son fuentes permanentes de ingreso y vida del sector de Canoabo, constituido como centro importante de plantaciones de cacao y actualmente es una de las zonas ecológicamente mejor preservadas de Carabobo.',
      },
      {
        text: 'Canoabo, ocupa una extensión de 187 km² y su población alcanza unos 3900 habitantes, distribuidos en 650 viviendas dignas, de las cuales forma parte los productores de la semilla de Cacao, uno de ellos es el ingeniero Luis Morales, oriundo de Chile, que desde pequeño escuchó que en el suelo venezolano específicamente en las costas, se origina el mejor cacao del mundo, así es como inicia su búsqueda y queda cautivado con Canoabo, donde decide sumergirse en el delicioso mundo del cacao y posteriormente del chocolate junto con su hijo Rodrigo, quienes son propietarios de la hermosa hacienda San Cayetano.',
      },
      {
        text: 'Actualmente en Canoabo se producen 10.000 kg anuales de cacao durante dos temporadas de cosecha, la principal en los meses entre Diciembre - Abril y la media entre los meses Junio - Julio.',
      },
      {
        text: 'Desde el 2004, cuando la señora Josefina, hija de José Joaquín Mirét accedió a venderle parte de la hacienda, garantizando que no sería para crear urbanismos, sino para la siembra de cacao y mantener la tradición de 50 años, Morales consiguió las primeras semillas de cacao, con las cuales inició su labor de cuidado y cultivo del provechoso fruto con entrega y compromiso logrando que esta fascinante hacienda, que posee unos 7 mil árboles, se cosecharán 20 kg de cacao diarios.',
      },
      {
        text: 'En la estructura destinada para el proceso, cuentan con la maquinaria necesaria como descarcarilladoras, molinos, refinadoras, y mesa vibradora con las que procesan y elaboran el delicioso chocolate.',
      },
      {
        text: 'Padre e hijo son autodidactas y se han dedicado a nutrirse de los conocimientos de los sembradores de nuestros antepasados, que a pesar de no ser nativos del sector mantienen la añorada tradición y cumplen sus codiciados sueños.',
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
        alt: 'mapa de Bejuma',
      },
      details: [
        { label: 'País', value: 'Venezuela' },
        { label: 'Estado', value: 'Carabobo' },
        { label: 'Municipio', value: 'Bejuma' },
        { label: 'Superficie', value: '170 km2' },
        { label: 'Altitud Promedio', value: '287 m.s.n.m.' },
        { label: 'Coordenadas GPS', value: '10° 18.595 `N,68° 16.757`W (en la iglesia)' },
        { label: 'Habitantes', value: '3.900' },
      ],
    },
    paragraphs: [
      'El pueblo de Canoabo, se ubica en el municipio Bejuma del estado Carabobo, a una altura estimada de 287 metros sobre el nivel del mar, cuenta en sus alrededores con distintos caseríos, como lo son Canoabito, La Sabana, Los Naranjos, Santa Ana, Agua Clara y Las Cumbres de Canoabo, además en cada una de ellos se pueden encontrar también pequeñas localidades como la Urbanización Santa Eduviges (El Cerro del Cacho),entre otras, construidas en montañas boscosas, con gran biodiversidad y ambiente natural que resulta de gran atractivo para los visitantes.',
    ],
    ecology: {
      title: 'Ecología',
      paragraphs: [
        'Su clima es cálido, refrescando un poco por las noches, con una temperatura media de 26 ºC.',
        'La parroquia se encuentra rodeada por cerros altos todos estos poblados de árboles grandes. Según una antigua teoría, Canoabo está en el fondo de un lago prehistórico cuyas aguas rompieron por el cauce de los ríos que van al mar.',
      ],
      images: [
        {
          alt: 'ubicacion de Bejuma',
        },
        {
          alt: 'ubicacion de Bejuma',
        },
      ],
    },
  },
  history: {
    title: 'Historia',
    images: [
      {
        alt: 'historia de Canoabo Fino',
      },
      {
        alt: 'historia de Canoabo Fino',
      },
    ],
    content: [
      {
        text: 'Hace más de 300 años fue fundada la parroquia Canoabo, específicamente el 19 de marzo de 1711,la cual fue establecida por el padre Andrés Páez Vargas, bajo el nombre de San José de Canoabo, considerada como la zona de mayor extensión territorial del municipio Bejuma que ya cuenta con grandes extensiones de cultivo de la idílica semilla.',
      },
      {
        text: 'Para 1720 se inicia la producción del cacao en Canoabo, sus extensiones de tierra, elevados árboles y su producción en fanegas fueron acrecentando, para luego ir en picada por la actividad económica que se presentaba durante aquellos años',
      },
      {
        text: 'Marco Tulio Merida señala, en su libro Historia de Canoabo ,“fue un período agrícola donde los grandes hacendados del país, comenzaron a sustituir la siembra del cacao por café, esa fue la realidad del año 1809 donde sus productores fueron los primeros en comenzar la siembra comercial del apreciado grano”.',
      },
      {
        text: 'Su nombre proviene de un término indígena que significa “aldea al lado de agua dulce”. Un pueblito del estado Carabobo donde las bicicletas, casas de grandes ventanales con jardines en el centro, bodegas y una plaza, es lo que hace atractivo este sitio',
      },
      {
        text: 'Canoabo es un pueblo afable que se sitúa sobre uno de los tantos fértiles y hermosos valles que se abren en medio de las montañas del occidente del estado Carabobo, a los cuales se les conoce en conjunto como Valles Altos de Carabobo.',
      },
      {
        text: 'Entidad de caballeros, cuna de artesanos y grandes poetas, que vio nacer a Vicente Gerbasi, poeta, político y diplomático venezolano, considerado el escritor contemporáneo venezolano más representativo y uno de los más brillantes e influyentes del siglo XX.',
      },
      {
        text: 'Canoabo aún mantiene su estilo colonial que lo caracteriza desde su fundación, con calles estrechas y viejas casonas con altos ventanales y techos de teja. Esta parroquia fue considerada un paraíso, muchos españoles tomaron sus rumbos por las montañas que dan a Puerto Cabello, desde Urama en burros y carretas.',
      },
      {
        text: 'En el acogedor pueblo también trabaja por mantener vigente nuestras tradiciones, ya que cuenta con una pequeña cofradía de Diablos Danzantes (Cuyos orígenes se remontan hacia 1770) todos los años salen a bailar por las calles del pueblo el día de Corpus Christi, y se caracterizan por no tener cuernos en sus máscaras, salvo la del Capataz o Diablo Mayor, para la festividad utilizan un vestuario de  distintos colores y sus máscaras representan figuras de animales o demonios.',
      },
      {
        text: 'Dentro de sus habitantes también se encuentran grandes artesanos y tallistas de madera, que dentro de sus diminutos talleres elaboran grandiosas obras llenas de la esencia y la alegría del pueblo.',
      },
    ],
  },
};

const canoabo = {
  es,
  // en,
};

export { canoabo };
