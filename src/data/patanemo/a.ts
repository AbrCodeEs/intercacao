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
          title: 'Aroma:',
          description: {
            boldText: 'MEDIO',
            additionalText: 'Notas moderadas a especies',
          },
        },
        {
          title: 'Sabor:',
          description: {
            boldText: 'MEDIO',
            additionalText: 'Sabores a hierbas, frutas, nueces y flores',
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
        }, {
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
              description: 'Para el proceso de secado los granos son trasladados en un burro de carga a la vivienda pertinente donde las semillas son esparcidas en la superficie de cemento para ser parcialmente conservados de la fuerza del sol, con las siguientes características:',
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
  };