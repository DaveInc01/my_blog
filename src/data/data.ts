interface data_I {
    id: number;
    title: string;
    author: string;
    img: string;
    description: string;
}

const data : data_I[] = [
    {
        id : 1,
        title: "Real Madrid scrape past Getafe with another late Bellingham goal",
        author: "Marca",
        img: "https://phantom-marca.unidadeditorial.es/24218478233b5776467f12682c285eae/crop/0x0/2046x1364/resize/1320/f/webp/assets/multimedia/imagenes/2023/09/02/16936740838768.jpg",
        description: "Real Madrid left it very late to defeat Getafe 2-1 at the new look Estadio Santiago Bernabeu on Saturday afternoon, with Jude Bellingham popping up with the crucial strike."
    },
    {
        id: 2,
        title: "Mbappe on Sergio Ramos' move to Sevilla: The king is back",
        author: "Marca",
        img: "https://phantom-marca.unidadeditorial.es/6f87dbc2bbf9365ce2c84bb76810af53/resize/1320/f/webp/assets/multimedia/imagenes/2023/09/04/16938494486271.jpg",
        description: "The relationship between Kylian Mbappe and Sergio Ramos has always been more than just cordial. Since the Spanish defender landed in Paris, he has always been on good terms with the young French star"
    }
]

export default data;

