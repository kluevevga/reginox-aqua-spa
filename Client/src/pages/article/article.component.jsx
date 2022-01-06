import { Link } from 'react-router-dom';

const img1 = process.env.PUBLIC_URL + '/assets/articles/ontario/ontario_1.webp';
const img2 = process.env.PUBLIC_URL + '/assets/articles/ontario/ontario_2.webp';
const img3 = process.env.PUBLIC_URL + '/assets/articles/ontario/ontario_3.webp';
const img4 = process.env.PUBLIC_URL + '/assets/articles/ontario/ontario_4.webp';
const img5 = process.env.PUBLIC_URL + '/assets/articles/ontario/ontario_5.webp';
const img6 = process.env.PUBLIC_URL + '/assets/articles/ontario/ontario_6.webp';
const img7 = process.env.PUBLIC_URL + '/assets/articles/ontario/ontario_7.webp';


const Article = () => (
    <div className="container">
        <div className="breadcrumbs">
            <Link to='/home'>Главная</Link> / <Link to='/articles'>Статьи</Link> / Ontario — стильный дизайн и надежность!
        </div>
        <h1 className="title">Ontario — стильный дизайн и надежность!</h1>


        <time dateTime='2019-12-16' className='article-date'>16 / 12 / 19</time>

        <div className="article">
            <b>
                Кухонные мойки серии Ontario – оригинальный элемент для кухни любого стиля. Сварная чаша выполнена из миллиметровой полированной нержавеющей стали 304 категории 18/10, что гарантирует необходимые для кухонной зоны гигиенические свойства и безопасность. Радиус угла чаши 0мм, что делает ее форму сдержанной и брутальной. Идеальная обработка швов – гарантия долговечной эксплуатации мойки.
            </b>
            <p>
                Если при получении товара внешний вид, количество, качество и иные характеристики устраивают покупателя, то он расписывается на товарном чеке (товарной накладной), передает денежные средства водителю-экспедитору и получает товар. Оплата покупки осуществляется наличными средствами в рублях.
            </p>
        </div>

        <div className='image-container'>
            <img src={img1} alt="ontario" />
            <img src={img2} alt="ontario" />
        </div>

        <div className="article">
            <p>
                Если при получении товара внешний вид, количество, качество и иные характеристики устраивают покупателя, то он расписывается на товарном чеке (товарной накладной), передает денежные средства водителю-экспедитору и получает товар. Оплата покупки осуществляется наличными средствами в рублях.
            </p>
            <p>
                Если при получении товара внешний вид, количество, качество и иные характеристики устраивают покупателя, то он расписывается на товарном чеке (товарной накладной), передает денежные средства водителю-экспедитору и получает товар. Оплата покупки осуществляется наличными средствами в рублях.
            </p>
        </div>

        <div className='image-container'>
            <img src={img3} alt="ontario" />
        </div>

        <div className="article">
            <p>
                Если при получении товара внешний вид, количество, качество и иные характеристики устраивают покупателя, то он расписывается на товарном чеке (товарной накладной), передает денежные средства водителю-экспедитору и получает товар. Оплата покупки осуществляется наличными средствами в рублях.
            </p>
        </div>

        <div className='image-container'>
            <img src={img4} alt="ontario" />
            <img src={img5} alt="ontario" />
            <img src={img6} alt="ontario" />
        </div>

        <div className="article">
            <p>
                Если при получении товара внешний вид, количество, качество и иные характеристики устраивают покупателя, то он расписывается на товарном чеке (товарной накладной), передает денежные средства водителю-экспедитору и получает товар. Оплата покупки осуществляется наличными средствами в рублях.
            </p>
        </div>

        <div className="image-container">
            <img src={img7} alt="ontario" width='600' />
        </div>

        <div className="article">
            <p>
                Если при получении товара внешний вид, количество, качество и иные характеристики устраивают покупателя, то он расписывается на товарном чеке (товарной накладной), передает денежные средства водителю-экспедитору и получает товар. Оплата покупки осуществляется наличными средствами в рублях.
            </p>
        </div>
    </div>
);

export default Article;