import classes from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx';
const Article = ({icon, description, action, active=false})=>{
    return(<article className={clsx("flex vCenter",classes.article, active && classes.active)}>
        <div className={clsx("flex center",classes.contentIcon)}>
        <img src={icon}/>
        </div>
        <div className={clsx("grow", classes.contentDescription)}>
            <p>{description}</p>
            {action && <button className={classes.button} onClick={action}>Veja mais <FontAwesomeIcon icon={faLongArrowAltRight}/></button>}
        </div>
    </article>)
}

export default Article;