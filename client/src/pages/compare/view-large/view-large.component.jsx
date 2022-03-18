import { useDispatch } from 'react-redux';
import { removeItemfromCompare } from '../../../redux/actions';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';
import ViewLargeSlideContent from '../view-large-slide-content/view-large-slide-content.component';
import { ReactComponent as CrossIcon } from '../../../assets/svg/cross.svg';
import styles from './view-large.module.css';


const ViewLarge = ({ data, specs }) => {
    const isTabletLg = useMediaQuery({ query: '(min-width: 992px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });
    const isXL = useMediaQuery({ query: '(min-width: 1600px)' });
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <ul className={styles.specs}>
                {specs.map((item, i) => <li key={i}><p>{item}</p></li>)}
            </ul>

            <div className={styles.slider}>
                <Swiper
                    className={styles.swiper + ' slider-compare'}
                    speed={400}
                    slidesPerView={isXL ? 4 : isDesktop ? 3 : isTabletLg ? 3 : 2}
                    spaceBetween={isTabletLg ? 20 : 10}
                    initialSlide={1}
                    navigation>

                    {data.map(item => (
                        <SwiperSlide key={item.id} className={styles.slider_item}>

                            <ViewLargeSlideContent item={item} specs={specs}/>

                            <button
                                onClick={() => dispatch(removeItemfromCompare(item.id))}
                                className={styles.button}>
                                <CrossIcon />
                            </button>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    )
}

export default ViewLarge