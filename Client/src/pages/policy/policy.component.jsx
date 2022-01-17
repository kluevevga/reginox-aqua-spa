import { Link } from 'react-router-dom';
import styles from './policy.module.css';


const Policy = () => (
    <div className={'container ' + styles.container}>
        <div className="breadcrumbs">
            <Link to='/home'>Главная</Link> / Политика конфиденциальности
        </div>
        <h1 className={'title ' + styles.title}>Политика конфиденциальности</h1>
        <div className="article">
            <p>
                Настоящая Политика конфиденциальности персональных данных (далее – Политика) действует в отношении всей информации, которую Сайт компании ЗАО «REGINOX», расположенный на доменном имени www.reginox.ru (далее Сайт), может получить о Пользователе во время использования Сайта. Используя Сайт, Пользователь выражает свое согласие с настоящей Политикой и указанными в ней условиями обработки его персональных данных; в случае несогласия с этими условиями Пользователь должен прекратить использование Сайта.
            </p>
            <h2 className={'title-1 ' + styles.sub_title}>ОПРЕДЕЛЕНИЕ ТЕРМИНОВ</h2>
            <p>В настоящей Политике используются следующие термины:</p>
            <ul>
                <li>
                    Персональные данные - любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).
                </li>
                <li>
                    Администрация сайта – сотрудники, уполномоченные управлять Сайтом, действующие от имени ЗАО «Карма Групп», которые организуют и (или) осуществляют обработку персональных данных, определяют цели обработки и состав персональных данных, а также определяют действия, совершаемые с персональными данными.
                </li>
                <li>
                    Обработка персональных данных - любое действие или совокупность действий, совершаемых с персональными данными (с использованием средств автоматизации и без), в том числе сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передача (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.
                </li>
                <li>
                    Конфиденциальность персональных данных - обязательное для соблюдения Администрацией сайта или иными лицами, получившими доступ к персональным данным, требование не допускать их распространения без согласия субъекта персональных данных или наличия иного законного основания.
                </li>
                <li>
                    Пользователь Сайта (далее Пользователь) – лицо, имеющее доступ к Сайту, посредством сети Интернет и использующее Сайт.
                </li>
                <li>
                    Cookies — данные, не содержащие конфиденциальной информации, отправленные веб-сервером и хранимые на компьютере пользователя. Cookies пересылаются веб-серверу автоматически браузером или веб-клиентом каждый раз при попытке открыть страницу Сайта.
                </li>
                <li>
                    IP-адрес — уникальный сетевой адрес узла в компьютерной сети, построенной по протоколу IP.
                </li>
            </ul>
            <h2 className={'title-1 ' + styles.sub_title}>ОБЩИЕ ПОЛОЖЕНИЯ</h2>
            <p>Использование Пользователем Сайта означает согласие с настоящей Политикой конфиденциальности и условиями обработки персональных данных Пользователя.</p>
            <p>В случае несогласия с условиями Политики конфиденциальности Пользователь должен прекратить использование Сайта.</p>
            <p>Настоящая Политика конфиденциальности применяется только к Сайту. Компания «REGINOX» не контролирует и не несет ответственность за сайты третьих лиц, на которые Пользователь может перейти по ссылкам, доступным на Сайте.</p>
            <p>Администрация сайта не проверяет достоверность персональных данных, предоставляемых Пользователем.</p>
            <h2 className={'title-1 ' + styles.sub_title}>ПРЕДМЕТ ПОЛИТИКИ КОНФИДЕНЦИАЛЬНОСТИ</h2>
            <p>Настоящая Политика конфиденциальности устанавливает обязательства Администрации сайта по неразглашению и обеспечению режима защиты конфиденциальности персональных данных, которые Пользователь предоставляет по запросу Администрации сайта при регистрации на Сайте или при оформлении заказа Товара.</p>
            <p>Персональные данные, разрешённые к обработке в рамках настоящей Политики конфиденциальности, предоставляются Пользователем путём заполнения регистрационной формы на Сайте и включают в себя следующую информацию:</p>
            <ul>
                <li>
                    Фамилию, имя, отчество Пользователя;
                </li>
                <li>
                    Контактный телефон Пользователя;
                </li>
                <li>
                    Адрес электронной почты (e-mail);
                </li>
            </ul>
            <p>Отключение cookies может повлечь невозможность доступа к частям Сайта, требующим авторизации.</p>
            <p>Сайт осуществляет сбор статистики об IP-адресах своих посетителей. Данная информация не используется для установления личности Пользователя.</p>
            <p>Любая иная персональная информация, неоговоренная выше (история покупок, используемые браузеры и операционные системы и т.д.), подлежит надежному хранению и нераспространению, за исключением случаев, предусмотренных в п.п. 5.2. и 5.3. настоящей Политики конфиденциальности.</p>
            <h2 className={'title-1 ' + styles.sub_title}>ЦЕЛИ СБОРА ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ ПОЛЬЗОВАТЕЛЯ</h2>
            <p>Персональные данные Пользователя Администрация сайта может использовать в целях:</p>
            <ul>
                <li>
                    Идентификации Пользователя, зарегистрированного на Сайте.
                </li>
                <li>
                    Предоставления Пользователю доступа к персонализированным ресурсам Сайта.
                </li>
                <li>
                    Установления с Пользователем обратной связи, включая направление уведомлений, запросов, касающихся использования Сайта, оказания услуг, обработка запросов и заявок от Пользователя.
                </li>
                <li>
                    Подтверждения достоверности и полноты персональных данных, предоставленных Пользователем.
                </li>
                <li>
                    Создания учетной записи для оформления заказа.
                </li>
                <li>
                    Предоставления Пользователю эффективной клиентской и технической поддержки при возникновении проблем, связанных с использованием Сайта.
                </li>
            </ul>
            <h2 className={'title-1 ' + styles.sub_title}>СПОСОБЫ И СРОКИ ОБРАБОТКИ ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ</h2>
            <p>Обработка персональных данных Пользователя осуществляется без ограничения срока, любым законным способом, в том числе в информационных системах персональных данных с использованием средств автоматизации или без использования таких средств.</p>
            <p>Пользователь соглашается с тем, что Администрация сайта вправе передавать персональные данные третьим лицам, в частности, курьерским службам, организациям почтовой связи, операторам электросвязи, исключительно в целях выполнения заказа Пользователя, оформленного на Сайте, включая доставку Товара.</p>
            <p>Персональные данные Пользователя могут быть переданы уполномоченным органам государственной власти Российской Федерации только в порядке, установленном законодательством Российской Федерации.</p>
            <p>При утрате или разглашении персональных данных Администрация сайта информирует Пользователя об утрате или разглашении персональных данных.</p>
            <p>Администрация сайта принимает необходимые организационные и технические меры для защиты персональной информации Пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.</p>
            <p>Администрация сайта совместно с Пользователем принимает все необходимые меры по предотвращению убытков или иных отрицательных последствий, вызванных утратой или разглашением персональных данных Пользователя.</p>
            <h2 className={'title-1 ' + styles.sub_title}>ОБЯЗАТЕЛЬСТВА СТОРОН</h2>
            <p>Пользователь обязуется:</p>
            <ul>
                <li>
                    Предоставить информацию о персональных данных, необходимую для полноценного пользования Сайтом.
                </li>
                <li>
                    При необходимости обновить, дополнить предоставленную информацию о персональных данных в случае изменения данной информации.
                </li>
            </ul>
            <p>Администрация сайта обязана:</p>
            <ul>
                <li>
                    Использовать полученную информацию исключительно для целей, указанных в п. 4 настоящей Политики конфиденциальности.
                </li>
                <li>
                    Обеспечить хранение конфиденциальной информации в тайне, не разглашать без предварительного письменного разрешения Пользователя, а также не осуществлять продажу, обмен, публикацию, либо разглашение иными способами переданных персональных данных Пользователя, за исключением п.п. 5.2. и 5.3. настоящей Политики Конфиденциальности.
                </li>
                <li>
                    Принимать меры предосторожности для защиты конфиденциальности персональных данных Пользователя в порядке, обычно используемом для защиты такого рода информации.
                </li>
            </ul>
            <h2 className={'title-1 ' + styles.sub_title}>ОТВЕТСТВЕННОСТЬ СТОРОН</h2>
            <p>
                Администрация сайта, не исполнившая свои обязательства, несёт ответственность за убытки, понесённые Пользователем в связи с неправомерным использованием персональных данных, в соответствии с законодательством Российской Федерации, за исключением случаев, предусмотренных п.п. 5.2., 5.3. и 7.2. настоящей Политики Конфиденциальности.
            </p>
            <p>
                В случае утраты или разглашения Конфиденциальной информации Администрация сайта не несёт ответственность, если данная конфиденциальная информация:
            </p>
            <ul>
                <li>
                    Стала публичным достоянием до её утраты или разглашения.
                </li>
                <li>
                    Была получена от третьей стороны до момента её получения Администрацией сайта.
                </li>
                <li>
                    Была разглашена с согласия Пользователя.
                </li>
            </ul>
            <h2 className={'title-1 ' + styles.sub_title}>РАЗРЕШЕНИЕ СПОРОВ</h2>
            <p>До обращения в суд с иском по спорам, возникающим из отношений между Пользователем Сайта и Администрацией сайта, обязательным является предъявление претензии (письменного предложения о добровольном урегулировании спора).</p>
            <p>Получатель претензии в течение 30 календарных дней со дня получения претензии, письменно уведомляет заявителя претензии о результатах рассмотрения претензии.</p>
            <p>В случае, если соглашение не будет достигнуто, спор будет передан на рассмотрение в судебный орган в соответствии с действующим законодательством Российской Федерации.</p>
            <p>К настоящей Политике конфиденциальности и отношениям между Пользователем и Администрацией сайта применяется действующее законодательство Российской Федерации.</p>
            <h2 className={'title-1 ' + styles.sub_title}>ДОПОЛНИТЕЛЬНЫЕ УСЛОВИЯ</h2>
            <p>Администрация сайта вправе вносить изменения в настоящую Политику конфиденциальности без согласия Пользователя.</p>
            <p>Новая Политика конфиденциальности вступает в силу с момента ее размещения на Сайте, если иное не предусмотрено новой редакцией Политики конфиденциальности.</p>
            <p>Действующая Политика конфиденциальности размещена на Сайте.</p>
            <time dateTime="2020-06-14 12:00" className={styles.date}>«14» июня 2020 г.</time>
        </div>
    </div>
);

export default Policy;