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
          title: 'Sabor:',
          description: {
            boldText: 'FUERTE',
            additionalText: 'Denota sabor a frutas frescas, nueces y panela malta',
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
            text:
              'Se destacan los sabores característicos que identifican a los criollos modernos con una mezcla balanceada de atributos propios de nueces, floral leve, afrutado moderado de frutas frescas asociado a una acidez de aceptable intensidad típica de frutos cítricos y frutos rojos.',     
          },
         {
            type: 'paragraph',
              text:
              '"Estas notas resaltan sobre un moderado fondo a cacao que permite disfrutar notas herbales, madera y panela/malta mostrando la gran variedad de atributos típicos de los cacaos criollos venezolanos.',
          },
          {
            type: 'paragraph',
              text:
              '"Es posible paladear en un licor bien elaborado del cacao de Choroní, una sinfonía de sabores, redondeados por un microclima de agua de manantiales, bosques del Parque Henry Pittier y la brisa marina de las playas de Choroní y Puerto Colombia. Ahí donde se materializa el encuentro de estas aguas y se deleitan moradores y visitantes del golpe de tambor.',
          },
        ],
        image: { alt: 'Rueda de sabores del cacao' },
      },
      {
        title: 'Mapa Sensorial',
        content: [
          {
            type: 'paragraph',
            text:
              'Se perciben notas afrutadas típicas de los cacaos criollos modernos con un perfil de atributos que representan desde los perfiles de los criollos antiguos hasta los cacaos característicos de los híbridos con una intensidad media de sabor a cacao.',
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
};


const choroni = {
  es,
  // en,
};

export { choroni };
