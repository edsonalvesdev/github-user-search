import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from '../../../../core/components/ButtonIcon';
import { User } from '../../../../core/types/User';
import { makeRequest } from '../../../../core/utils/request';
import ImageLoader from '../Loaders/ImageLoader';
import InfoLoader from '../Loaders/InfoLoader';
import './styles.scss';

type Props = {
    user: string;
}

const ProfileCard = ( { user }: Props ) => {
    const [userData, setUserData] = useState<User>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        makeRequest( { url: `/${user}`} )
        .then(userData => setUserData(userData.data))
        .finally(() => {
            setIsLoading(false);
        });
    },[user])

    return(
        <div className="profile-card">
            { isLoading ? <ImageLoader/> : 
            <>
                <img src={userData?.avatar_url} alt="" className="profile-image" />

                <div className="view-profile">
                    <Link to={{ pathname: `https://github.com/${user}` }} target="_blank" >
                        <ButtonIcon text="Ver Perfil" />
                    </Link>
                </div>
            </>}
            { isLoading ? <InfoLoader/> : 
            <>
                <input type="text" value={"Repositórios públicos: " + userData?.public_repos} readOnly className="profile-public-repositories" />
                <input type="text" value={"Seguidores: " + userData?.followers} readOnly className="profile-followers" />
                <input type="text" value={"Seguindo: " + userData?.following} readOnly className="profile-following" />

                <div className="profile-details">
                    <div className="profile-title">
                        Informações
                    </div>
                    <input type="text" value={"Empresa: " + userData?.company} readOnly className="profile-company" />
                    <input type="text" value={"Website/Blog: " + userData?.blog} readOnly className="profile-website-blog" />
                    <input type="text" value={"Localidade: " + userData?.location} readOnly className="profile-locality" />
                    <input type="text" value={"Membro desde: " +  moment(userData?.created_at).format("DD/MM/YYYY")} readOnly className="profile-member-since" />
                </div>
            </>}
        </div>
	);
}

export default ProfileCard;