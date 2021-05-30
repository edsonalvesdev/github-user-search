import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from '../../core/components/ButtonIcon';
import ProfileCard from './components/ProfileCard';
import './styles.scss';

type Login = {
    userLogin: string;
}

const Search = () => {
    const [activeCard, setActiveCard] = useState(false);
    const [login, setLogin] = useState<Login>({userLogin: ""});
    const [user, setUser] = useState<String>();

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setLogin({userLogin: value});
        console.log(event.target.value);
    }

    const handleClick = () => {
        setActiveCard(true);
        setUser(login.userLogin);
    }

    return(
        <div className="search-profile-container">
            <div className="search-card">
                <h1 className="search-card-title">
                    Encontre um perfil Github
                </h1>
                <input 
                    type="text" 
                    onChange={handleOnChange}
                    value={login.userLogin}
                    className="search-card-text" 
                />
                <Link to="/search" onClick={handleClick}>
                    <ButtonIcon text="Encontrar"/>
                </Link>
            </div>
            {activeCard ? <ProfileCard user={`${user}`}/> : ""}
        </div>
    );
};

export default Search;
