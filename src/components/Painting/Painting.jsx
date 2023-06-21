import PropTypes from 'prop-types'
const Painting = ({
    imageUrl,
    title,
    profileUrl,
    author,
    price,
    quantity
}) => {
    return (<div>
        <img src={imageUrl} alt={title} width={480} />
        <h2>{title}</h2>
        <p>
            Автор: <a href={profileUrl}>{author}</a>
        </p>
        <p>Ціна {price} кредитів</p>
        <p>Доступність: {quantity > 10 ? 'є в наявності' : 'закінчується'}</p>
        <button type="button">Додати в кошик</button>
    </div>);
}

Painting.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    // profileUrl: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
}
export default Painting;