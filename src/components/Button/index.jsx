import classes from './styles.module.scss';
import clsx from 'clsx';

const Button = ({className,...props})=><button className={clsx(className,classes.button)} {...props} />

export default Button;
