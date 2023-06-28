import Painting from './Painting';
<<<<<<< HEAD
import PropTypes from 'prop-types';

function PaintingList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Painting
            imageUrl={item.url}
            title={item.title}
            author={item.author.tag}
            profileUrl={item.author.profileUrl}
            price={item.price}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

PaintingList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
};

export default PaintingList;
=======
import PropTypes from 'prop-types'

function PaintingList({ items }) {
    return <ul>
        {items.map(item => (
            <li key={item.id}>
                <Painting
                    imageUrl={item.url}
                    title={item.title}
                    author={item.author.tag}
                    profileUrl={item.author.profileUrl}
                    price={item.price}
                    quantity={item.quantity}
                />
            </li>
        ))}
    </ul>
    
}

PaintingList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),
    
}

export default PaintingList;
>>>>>>> a1701e1e491222d35c31cb4108fa6ee74bb108df
