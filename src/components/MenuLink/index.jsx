import { NavLink } from "react-router"
import styles from "./MenuLink.module.css"

export default function MenuLink({ to, children }) {
    return (
        <>
            <NavLink to={to} className={({ isActive }) => `
                ${styles.link} ${isActive ? styles.linkDestacado : ""}
            `}>
                {children}
            </NavLink>
        </>
    )
}