import { memo } from "react"
import styles from './Header.module.scss'

function Header() : JSX.Element {
  return <p className={styles['test']}>Sorry for the inconvenience, the site is under construction</p>
}

export default memo(Header);