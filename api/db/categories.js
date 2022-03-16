const categories = {
    'sinks': [
        {title: 'Все', categoryUrl: 'all'},
        {title: 'Врезная мойка', categoryUrl: 'integrated'},
        {title: 'Накладная мойка', categoryUrl: 'overhead'},
        {title: 'Мойка под столешницу', categoryUrl: 'underlining'},
    ],
    'taps': [
        {title: 'Все', categoryUrl: 'all'},
        {title: 'Сенсорный', categoryUrl: 'sensor'},
        {title: 'Термостатический', categoryUrl: 'thermostatic'},
        {title: 'Кухонные смесители', categoryUrl: 'kitchen'},
        {title: 'Смесители для санузлов', categoryUrl: 'bathroom'},
    ],
    'ranges': [
        {title: 'Все', categoryUrl: 'all'},
        {title: 'Варочная панель', categoryUrl: 'overcounter'},
        {title: 'Газовая плита', categoryUrl: 'freestanding'},
        {title: 'Комбинированная', categoryUrl: 'combined'},
        {title: 'Кухонная конфорка', categoryUrl: 'integratable'},
    ],
    'washstands': [
        {title: 'Все', categoryUrl: 'all'},
        { title: "Раковина", categoryUrl: "sink" },
        { title: "Подвесная раковина", categoryUrl: "hanged" },
        { title: "На пьедестале", categoryUrl: "stand" },
        { title: "Двойная", categoryUrl: "double" },
        { title: "Угловая", categoryUrl: "corner" },
        { title: "Отдельностоящая", categoryUrl: "freestanding" },
        { title: "Рукомойник", categoryUrl: "dispenser" },
    ],
    'accessories': [
        {title: 'Все', categoryUrl: 'all'},
        {title: 'Корзины', categoryUrl: 'baskets'},
        {title: 'Поддоны', categoryUrl: 'pans'},
        {title: 'Сифоны', categoryUrl: 'siphons'},
        {title: 'Разделочные доски', categoryUrl: 'boards'},
        {title: 'Адаптеры', categoryUrl: 'adapters'},
    ],
    'storage-manhattan': [
        {title: 'Все', categoryUrl: 'all'},
        {title: 'Manhattan', categoryUrl: 'manhattan'},
        {title: 'Manhattan Slim', categoryUrl: 'slim'},
        {title: 'Комплекты Manhattan', categoryUrl: 'kits'},
    ],
    'muscellaneous': [
        {title: 'Мойки Rodi (Португалия)', categoryUrl: 'rodi'},
        {title: 'Мойки Whinstone (Россия)', categoryUrl: 'whinstone'},
        {title: 'Мойки Rerih (Италия)', categoryUrl: 'rerih'},
        {title: 'Мойки Status (Италия)', categoryUrl: 'status'},
        {title: 'Смесители Armando Vicario (Италия)', categoryUrl: 'armandovicario'},
        {title: 'Смесители Webert (Италия)', categoryUrl: 'webert'},
        {title: 'Смесители Effepi (Италия)', categoryUrl: 'effepi'},
        {title: 'Умывальники Webert (Италия)', categoryUrl: 'webert'},
        {title: 'Аксессуары Glionna Bagno (Италия)', categoryUrl: 'glionnabagno'},
        {title: 'Аквафор (Россия)', categoryUrl: 'aquafor'},
    ],
};

module.exports = categories;