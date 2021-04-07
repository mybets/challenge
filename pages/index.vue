<template>
  <div class="full-page">
    <Header />
    <div class="left-content">
      <div class="centered">
        <h1 class="mb-80">
          Ser o próximo trader esportivo é muito
          <vue-typer
            :text="['fácil', 'rápido', 'simples']"
            :erase-delay="50"
            erase-style="backspace"
            :repeat="Infinity"
            class="highlighted"
            :pre-erase-delay="2000"
          ></vue-typer>
        </h1>
        <p class="mid-text mb-80">
          Só na ETRADE Inc. você tem acesso ao melhor dashboard de análise de
          mercado esportivo. Melhore seu perfil e obtenha lucros de até 2x mais.
        </p>
        <Button classes="btn big black">Crie sua conta grátis!</Button>
      </div>
    </div>
    <div class="right-content">
      <Card
        image="icon-money.png"
        content="Saiba se seu perfil é indicado para Lay ou Back"
      />
      <Card
        image="icon-dashboard.png"
        content="Analise seu perfil e entenda seus tipos de mercado"
        :featured="true"
        link="#"
      />
      <Card
        image="icon-calculator.png"
        content="Ganhe até 2x mais nos seus mercados"
      />
    </div>
  </div>
</template>

<script>
import Button from '../components/Button'
import Header from '../components/Header'
import Card from '../components/Card'

export default {
  components: {
    Header,
    Button,
    Card,
  },
}
</script>

<style scoped>
.full-page {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex: 1;
}

.left-content,
.right-content {
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10rem 2rem;
}

h1,
.vue-typer {
  font-size: 2.4rem;
}

.left-content .centered {
  max-width: 500px;
}

.right-content {
  background: url('../assets/bg-shapes.png') center center / cover no-repeat,
    linear-gradient(var(--primary-color), var(--primary-dark-color));
}

@media screen and (max-width: 780px) {
  .full-page {
    flex-direction: column;
  }
  .left-content,
  .right-content {
    flex: unset;
  }
}
</style>
