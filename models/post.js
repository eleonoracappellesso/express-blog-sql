const posts = [
    {
        id: 1,
        title: "Ciambellone",
        content: "Il ciambellone è un dolce soffice e semplice, perfetto per la colazione o per una merenda. Preparato con ingredienti semplici come farina, zucchero, uova e burro, è ideale da gustare insieme a una tazza di tè.",
        image: "img/ciambellone.jpeg",
        tags: ["dolce", "colazione", "merenda"],
        published: true,
    },
    {
        id: 2,
        title: "Cracker alla barbabietola",
        content: "I cracker alla barbabietola sono uno snack sano e croccante, con un tocco di colore e sapore dato dalla barbabietola. Perfetti come spuntino o da accompagnare a un antipasto.",
        image: "img/cracker_barbabietola.jpeg",
        tags: ["snack", "salato", "aperitivo"],
        published: false,
    },
    {
        id: 3,
        title: "Pane fritto dolce",
        content: "Il pane fritto dolce è una ricetta rustica e golosa, preparata con fette di pane inzuppate in una pastella dolce, fritte e poi cosparse di zucchero. Un'idea sfiziosa per una colazione o una merenda dolce.",
        image: "img/pane_fritto_dolce.jpeg",
        tags: ["dolce", "merenda"],
        published: true,
    },
    {
        id: 4,
        title: "Pasta alla barbabietola",
        content: "La pasta alla barbabietola è un primo piatto originale, dove la barbabietola conferisce un colore intenso e un sapore unico alla pasta fresca. Perfetta per chi cerca qualcosa di diverso ma gustoso.",
        image: "img/pasta_barbabietola.jpeg",
        tags: ["salato", "primo piatto"],
        published: true,
    },
    {
        id: 5,
        title: "Torta paesana",
        content: "La torta paesana è un dolce tradizionale, ricco e morbido, preparato con ingredienti semplici come pane raffermo, latte, cacao e frutta secca. Un dolce della tradizione che sa di casa e di famiglia.",
        image: "img/torta_paesana.jpeg",
        tags: ["dolce", "dolce tradizionale", "colazione"],
        published: true,
    }
];

// {
//     id: 6,
//     title: "Polpette di carne",
//     content: "Le polpette di carne sono un piatto classico e gustoso, perfette per il pranzo o la cena. Preparato con carne macinata, pane, uova e aromi, sono ideali da servire con un contorno di verdure o con un buon sugo.",
//     img: "images/polpette_di_carne.jpeg",
//     tags: ["secondo piatto", "carne", "polpette", "ricetta facile", "pranzo"]
// }

const tags = [
    { id: 1, title: "dolce" },
    { id: 2, title: "dolce tradizionale" },
    { id: 3, title: "merenda" },
    { id: 4, title: "snack salato" },
    { id: 5, title: "vegano" },
    { id: 6, title: "primo piatto" },
    { id: 7, title: "carne" },
    { id: 8, title: "colazione" },
    { id: 9, title: "aperitivo" },
    { id: 10, title: "senza glutine" },
];

module.exports = { posts, tags }; 