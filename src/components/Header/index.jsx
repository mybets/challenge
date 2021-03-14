
import classes from './styles.module.scss';
import clsx from 'clsx';
import logo from 'assets/logo.png';
import lock from 'assets/icon-lock.png';
import plus from 'assets/icon-plus.png';
import Button from 'components/Button'

const Header = ()=>{
    return (
    <header className={clsx("flex between menu", classes.header)}>
        <img className={classes.logo} src={logo}/>
        <nav className="flex end">
            <Button className={classes.button}><img src={lock}/>Log in</Button>
            <Button className={classes.button}><img src={plus}/>Cadastrar</Button>
        </nav>
    </header>
    )
}

export default Header;