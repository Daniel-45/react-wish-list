import React, { useState } from 'react';
import PropTypes from 'prop-types';

const WishInput = ({ onNewWish }) => {

    const [newWishText, setNewWishText] = useState('');

    return (
        <fieldset className="whish-input">
            <legend className="wish-input__label">New wish</legend>
            <input
                type="text"
                className="wish-input__field"
                placeholder="Enter your wish here"
                value={newWishText}
                onChange={e => setNewWishText(e.target.value)}
                onKeyUp={e => {
                    if (e.key === 'Enter' && newWishText.length) {
                        onNewWish({ title: newWishText, done: false });
                        setNewWishText('');
                    }
                }}
            />
        </fieldset>
    )
}

WishInput.propTypes = {
    onNewWish: PropTypes.func
}

WishInput.defaultProps = {
    onNewWish: () => { }
}

export default WishInput;
