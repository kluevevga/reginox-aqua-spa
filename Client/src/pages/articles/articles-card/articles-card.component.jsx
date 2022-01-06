import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { articlesItem } from '../../../redux/selectors';
import CardSlider from '../../../components/card-slider/card-slider.component';
import { ReactComponent as EyeIcon } from '../../../assets/svg/eye.svg';


const ArticlesCard = ({ article }) => {
    const { url, name, img, alt, date } = article;
    const { d, m, y } = date;
    const dateText = d + ' / ' + m + ' / ' + y;
    const dateTime = '20' + y + '-' + m + '-' + d;

    return (
        <Link to={`/articles/${url}`}>
            <CardSlider
                name={name}
                img={img}
                alt={alt}
                date={dateText}
                dateTime={dateTime}
                width={1250}
                height={900}
                fixed
            >
                <EyeIcon />
                Смотреть
            </CardSlider>
        </Link>
    )
};

const mapStateToProps = (state, props) => ({
    article: articlesItem(state, props)
});

export default connect(mapStateToProps)(ArticlesCard);

