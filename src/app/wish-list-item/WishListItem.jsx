import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const WishListItem = ({ title, done, id, onDoneChange }) => {

    const [age, setAge] = useState(0);

    useEffect(() => {
        let ageInterval;
        if (done) {
            setAge(0);
        } else {
            ageInterval = setInterval(() => {
                if (done) {
                    clearInterval(ageInterval);
                } else {
                    setAge(a => a + 1);
                }
            }, 1000)
        }
        return () => clearInterval(ageInterval);
    }, [done])

    return (
        <li className={classNames(
            'wish-list__item',
            {
                'wish-list__item--done': done,
                'wish-list__item--warning': age > 5 && age < 10,
                'wish-list__item--danger': age >= 10
            }
        )}
        >
            <input
                type="checkbox"
                id={id}
                defaultChecked={done}
                onChange={e => onDoneChange(e.target.checked)}
            />
            <label htmlFor={id}>{title}</label>
        </li>
    )
}

WishListItem.propTypes = {
    wishes: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        done: PropTypes.bool,
        id: PropTypes.string,
        onDoneChange: PropTypes.func
    }))
}

WishListItem.defaultProps = {
    title: '',
    done: false,
    id: '',
    onDoneChange: () => { }
}

export default WishListItem;
