import { memo, useState } from "react"
import styles from './Header.module.scss'

function Header() : JSX.Element {
  const [open, setIsOpen] = useState(false)

  return <p className={styles['test']}>Sorry for the inconvenience, the site is under construction
  <button onClick={() => setIsOpen(true)}> click here </button>

  {open && <p>Я не думал, что вы сюда кликните</p>}
  </p>
}

export default memo(Header);