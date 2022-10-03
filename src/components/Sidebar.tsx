import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

export function Sidebar (){
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://w.wallhaven.cc/full/z8/wallhaven-z8dg9y.png" alt="Papel Parede Aside" />
            <div className={styles.profile}>
                <Avatar src="https://github.com/MatheusSamburskiGrendene.png"/>

                <strong>Matheus Samburski</strong>
                <span>Desenvolvedor Web</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Edite seu perfil
                </a>
            </footer>
        </aside>
    );
}