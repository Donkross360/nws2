import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
        <h1 className={headerStyles.title}>
            <span>SoftinZ</span> Contacless Cards
        </h1>
        <p className={headerStyles.description}>Reading and Writing to your RFID cards becomes a breeze with our chrome extention </p>
    </div>
  )
}

export default Header