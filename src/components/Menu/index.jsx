import MenuLink from "../MenuLink"
import styles from "./Menu.module.css"

export default function Menu() {
    return (
        <>
            <img src="assets/logo.png" alt="Logo AluraFlix" />
            <nav className={styles.menu}>
                <ul className={styles.menu}>
                    <li>
                        <MenuLink to="/">
                            HOME
                        </MenuLink>
                    </li>
                    <li>
                        <MenuLink to="/novovideo">
                            NOVO VÍDEO
                        </MenuLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}