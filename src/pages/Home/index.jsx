import classes from './styles.module.scss';
import Button from 'components/Button';
import Header from 'components/Header';
import Article from './components/Article';
import money from 'assets/icon-money.png'
import dashboard from 'assets/icon-dashboard.png'
import calculator from 'assets/icon-calculator.png'
import clsx from 'clsx';
function Home({...props}){
    return <>
       <Header/>
        <main className={classes.main}>
            <section className={clsx("flex column", classes.columnOne)}>
                <h2 className="full">Ser o próximo trader <br/> esportivo é muito <strong>fácil</strong></h2>
                <p className="full">Só na ETRADE Inc. você tem acesso ao melhor dashboard de análise de mercado esportivo.</p>
                <p className="full">Melhore seu perfil e obtenha lucros de até 2X mais.</p>
             
                <Button className={classes.button}>Crie sua conta grátis!</Button>
            </section>
            <section className={clsx("flex center column", classes.columnTwo)}>
                <Article icon={money} description={<>Saiba se seu perfil<br/>é incdicado para Lay<br/>ou Back</>}/>
                <Article icon={dashboard} description={<>Analise seu perfil<br/>e entenda seus<br/>tipos de mercado</>} action={()=>{alert("Redirecionado")}} active/>
                <Article icon={calculator} description={<>Ganhe até 2x<br/> mais nos seus<br/> mercados</>}/>
            </section>
        </main>
    </>

}
export default Home;