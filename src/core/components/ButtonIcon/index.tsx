import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const ButtonIcon = ({ text }: Props) => (
    <div className="btn-icon">
        <h5>{text}</h5>
    </div>
);

export default ButtonIcon;