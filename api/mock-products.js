const matchProducts = {
    'sinks': '0015bfc8-c63a-45f7-ad67-4d16dc608bf9',
};

const normalizedFilters = {
    '0015bfc8-c63a-45f7-ad67-4d16dc608bf9': [
        {
            title: 'Категории',
            filters: [
                {title: 'Все', count: '20', url: 'all'},
                {title: 'Фарфор', count: '20',  url: 'porcelain'},
                {title: 'Керамика', count: '20',  url: 'ceramics'},
                {title: 'Акрил', count: '20',  url: 'acrylic'},
                {title: 'Искуственный камень', count: '20',  url: 'stone'},
            ],
            products: {
                'all': ['xvwY637oeN','Q9aVTvnfpi','4myksxFQiP','ElVW4q4eHa','U6TSDmFeiD','TkJgwqrxng'],
                'porcelain': ['xvwY637oeN', 'Q9aVTvnfpi', '4myksxFQiP'],
                'ceramics': ['4myksxFQiP' ,'ElVW4q4eHa', 'TkJgwqrxng'],
                'acrylic': ['xvwY637oeN', '4myksxFQiP', 'TkJgwqrxng'],
                'stone': ['xvwY637oeN', '4myksxFQiP', 'TkJgwqrxng'],
            }
        },
        {
            title: 'Материал',
            searchGroup: 'material',
            filters: [
                {title: 'нержавеющая сталь', count: '20', search:'stainless-steel'},
                {title: 'гранит', count: '20', search:'granite'},
                {title: 'PVD-покрытие', count: '20',  search:'pvd'},
                {title: 'окрашенные (Regi Color)', count: '20', search: 'painted'},
                {title: 'керамика', count: '20', search: 'porcelain'}
            ],
            products: {
                'stainless-steel': {'Q9aVTvnfpi':true, '4myksxFQiP':true},
                'granite': {'ElVW4q4eHa':true, 'TkJgwqrxng':true},
                'pvd': {'Q9aVTvnfpi':true, 'U6TSDmFeiD':true},
                'painted': {'xvwY637oeN':true, 'TkJgwqrxng':true},
                'porcelain': {'xvwY637oeN':true, '4myksxFQiP':true},
            }
        },
        {
            title: 'Метод установки',
            searchGroup: 'instalation',
            filters: [
                {title: 'врезной', count: '20', search:'integrated'},
                {title: 'подстольный', count: '20', search:'under'},
                {title: 'вровень со столешницей', count: '20',  search:'flat'},
            ],
            products: {
                'integrated': {'xvwY637oeN':true, 'Q9aVTvnfpi':true, '4myksxFQiP':true},
                'under': {'4myksxFQiP':true, 'ElVW4q4eHa':true, 'TkJgwqrxng':true},
                'flat': {'xvwY637oeN':true, '4myksxFQiP':true, 'TkJgwqrxng':true},
            }
        },
        {
            title: 'Форма',
            searchGroup: 'shape',
            filters: [
                {title: 'круглая', count: '20', search:'round'},
                {title: 'квадратная', count: '20', search:'square'},
                {title: 'прямоугольная', count: '20', search:'rectangular'},
                {title: 'овальная', count: '20', search:'oval'},
                {title: 'двойная', count: '20', search:'double'},
            ],
            products: {
                'round': {"xvwY637oeN":true, 'Q9aVTvnfpi':true, '4myksxFQiP':true},
                'square': {'4myksxFQiP':true ,'ElVW4q4eHa':true, 'TkJgwqrxng':true},
                'rectangular': {'xvwY637oeN':true, '4myksxFQiP':true, 'TkJgwqrxng':true, },
                'oval': {'xvwY637oeN':true, '4myksxFQiP':true, 'TkJgwqrxng':true, },
                'double': {'xvwY637oeN':true, '4myksxFQiP':true, 'TkJgwqrxng':true, },
            }
        },
        {
            title: 'Цвет',
            searchGroup: 'color',
            filters: [
                {title: 'полированная', count: '20', search:'poished'},
                {title: 'матовая', count: '20', search:'matte'},
                {title: 'текстурированная', count: '20', search:'textured'},
                {title: 'медь', count: '20', search:'cupper'},
                {title: 'золото', count: '20', search:'gold'},
                {title: 'белый', count: '20', search:'white'},
                {title: 'бежевый', count: '20', search:'beige'},
                {title: 'серый', count: '20', search:'gray'},
                {title: 'черный', count: '20', search:'black'},
                {title: 'коричневый', count: '20', search:'brown'},
            ],
            products: {
                'poished': {"xvwY637oeN":true, 'Q9aVTvnfpi':true, '4myksxFQiP':true},
                'matte': {'4myksxFQiP':true ,'ElVW4q4eHa':true, 'TkJgwqrxng':true},
                'textured': {'xvwY637oeN':true, '4myksxFQiP':true, 'TkJgwqrxng':true, },
                'cupper': {'xvwY637oeN':true, '4myksxFQiP':true, 'TkJgwqrxng':true, },
                'gold': {'xvwY637oeN':true, '4myksxFQiP':true, 'TkJgwqrxng':true, },
                'white': {'xvwY637oeN':true, '4myksxFQiP':true, 'TkJgwqrxng':true, },
                'beige': {'xvwY637oeN':true, '4myksxFQiP':true, 'TkJgwqrxng':true, },
                'gray': {'xvwY637oeN':true, '4myksxFQiP':true, 'TkJgwqrxng':true, },
                'black': {'xvwY637oeN':true, '4myksxFQiP':true, 'TkJgwqrxng':true, },
                'brown': {'xvwY637oeN':true, '4myksxFQiP':true, 'TkJgwqrxng':true, },
            }
        },
    ],
};

const normalizedProducts = {
    '0015bfc8-c63a-45f7-ad67-4d16dc608bf9': [
        {
            id: 'xvwY637oeN',
            promo: true,
            newItem: true,
            title: 'Amsterdam 25 Dark chocolate vanilla pyasd ',
            img: '/assets/products/product_1.webp',
            alt: 'product',
            productUrl: 'amsterdam-25-dark-chocolate',
            category: 'stainless-steel',
            price: '5950',

            p: 5950,
            r: 4.89,
            rewiewers: 23
        },
        {
            id: 'Q9aVTvnfpi',
            title: 'Amsterdam 25 Dark chocolate',
            img: '/assets/products/product_2.webp',
            alt: 'product',
            productUrl: 'amsterdam-25-dark-chocolate',
            category: 'stainless-steel',
            price: '4950',


            p: 4950,
            r: 1.29,
            rewiewers: 6
        },
        {
            id: '4myksxFQiP',
            title: 'Amsterdam 25 Dark chocolate',
            img: '/assets/products/product_3.webp',
            alt: 'product',
            productUrl: 'amsterdam-25-dark-chocolate',
            category: 'stainless-steel',
            price: '3950',

            p: 3950,
            r: 3.14,
            rewiewers: 19
        },
        {
            id: 'ElVW4q4eHa',
            title: 'Amsterdam 25 Dark chocolate',
            img: '/assets/products/product_4.webp',
            alt: 'product',
            productUrl: 'amsterdam-25-dark-chocolate',
            category: 'stainless-steel',
            price: '2950',

            p: 2950,
            r: 4.44,
            rewiewers: 56
        },
        {
            id: 'U6TSDmFeiD',
            title: 'Amsterdam 25 Dark chocolate',
            img: '/assets/products/product_5.webp',
            alt: 'product',
            productUrl: 'amsterdam-25-dark-chocolate',
            category: 'coated',
            price: '1950',

            p: 1950,
            r: 3.25,
            rewiewers: 141
        },
        {
            id: 'TkJgwqrxng',
            title: 'Amsterdam 25 Dark chocolate',
            img: '/assets/products/product_6.webp',
            alt: 'product',
            productUrl: 'amsterdam-25-dark-chocolate',
            category: 'coated',
            price: '950',

            p: 950,
            r: 2.91,
            rewiewers: 87
        },
    ],

};

module.exports = {
  filters: normalizedFilters,
  products: normalizedProducts,
  matchProducts: matchProducts,
};