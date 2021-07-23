import React from 'react';
import PropTypes from 'prop-types';
import WishListItem from '../wish-list-item/WishListItem';

const WishList = ({ wishes, onWishesChange }) => {
    return (
        <ul className="wish-list">
            {
                wishes.map(({ title, done }, i) => (
                    <WishListItem
                        key={title}
                        id={`wish${i}`}
                        title={title}
                        done={done}
                        onDoneChange={(value) => {
                            const updatedWishes = [...wishes];
                            updatedWishes[i].done = value;
                            onWishesChange(updatedWishes);
                        }}
                    />
                ))
            }
        </ul>
    )
}

WishList.propTypes = {
    wishes: PropTypes.arrayOf(PropTypes.shape(WishListItem.proptypes)),
    onWishesChange: PropTypes.func
}

WishList.defaultProps = {
    wishes: [],
    onWishesChange: () => { }
}

export default WishList;