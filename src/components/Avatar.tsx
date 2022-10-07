import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{  //importando todos os atributos de uma img
    hasBorder?: boolean;
}

export function Avatar({hasBorder = true, ...props}: AvatarProps){  //colocando o parametro como todos os atributos do img

    return (
        <img           
            className={hasBorder ? styles.avatarWithBorder: styles.avatar} 
           {...props}
        />
    );
}