import React, { useState } from 'react';
import './App.css';
import WishInput from './wish-input';
import WishList from './wish-list';

const initialWishes = [
    { title: 'Learn Mongo', done: true },
    { title: 'Learn Express', done: true },
    { title: 'Learn React', done: true },
    { title: 'Learn Node', done: true },
    { title: 'Learn React Native', done: false },
    { title: 'Work as a full stack MERN developer', done: false },
];

const App = () => {
    const [wishes, setWishes] = useState(initialWishes);

    return (
        <div className="app">
            <h1>My Wishlist from React</h1>
            <WishInput onNewWish={wish => setWishes([wish, ...wishes])} />
            <WishList wishes={wishes} onWishesChange={w => setWishes(w)} />
            <button
                type="button"
                className="wish-clear"
                onClick={() => setWishes(wishes.filter(wish => !wish.done))}
            >
                Archive done
            </button>
        </div>
    )
};

export default App;