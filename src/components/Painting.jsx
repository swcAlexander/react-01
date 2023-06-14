import PropTypes from 'prop-types'
const Painting = ({
    imageUrl,
    title,
    profileUrl,
    author,
    price
}) => {
    return (<div>
        <img src={imageUrl} alt={title} width={480} />
        <h2>{title}</h2>
        <p>
            Автор: <a href={profileUrl}>{author}</a>
        </p>
        <p>Ціна {price} кредитів</p>
        <p>Доступність: закінчується, або є в наявності </p>
        <button type="button">Додати в кошик</button>
    </div>);
}

Painting.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    profileUrl: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.number,
}
export default Painting;