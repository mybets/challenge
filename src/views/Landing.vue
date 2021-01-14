<template>
  <div class="d-flex">
    <div class="pa-2 section-one">
      <v-img
        height="45.5"
        width="140"
        :src="require('../../assets/logo.png')"
        style="margin-top: 3%; margin-left: 20%"
      />
      <div class="container-text" style="padding-top: 15%">
        <h2 style="color: #525256;">
          Ser o próximo trader esportivo é muito <a style="color: #1CA78B">fácil</a>
        </h2>
        <p 
          style="padding-top: 15%; 
          color: #3E4B5B">
          Só na ETRADE Inc. você tem acesso ao melhor dashboard de análise de mercado esportivo. 
          Melhore seu perfil e obtenha lucros de até 2x mais.
        </p>
        <v-btn large style="background: #ED6E2D; margin-top: 15%" dark>
          Crie sua conta grátis!
        </v-btn>
      </div>
    </div>
    <div class="pa-2 section-two">
      <v-img
        :src="require('../../assets/bg-shapes.png')"
        style="position: fixed;"
      />
      <div class="d-flex justify-end mb-6 container-buttons">
        <v-btn outlined color="white" style="margin-left: 5%">
          <v-icon left>
            mdi-lock
          </v-icon>
          Log in
        </v-btn>
        <v-btn outlined color="white" style="margin-left: 3%">
          <v-icon left>
            mdi-plus
          </v-icon>
          Cadastrar
        </v-btn>
      </div>
      <Features
        :features="features"
      />
    </div>
  </div>
</template>

<script>
import actionTypes from '../commons/constants/action-types';
import Features from '@/views/components/Features';

export default {
  name: 'landing',
  components: { Features },
  data() {
    return {
      features: []
    };
  },
  mounted() {
    this.findFeatures()
  },
  methods: {
    async findFeatures() {
      try {
        this.features = await this.$store.dispatch(actionTypes.FIND_FEATURES);
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style lang="stylus" scoped>
  .section-one
    width 40%
    height 100vh
    
    .container-text
      padding-left 30% !important
      padding-right 15% !important

  .section-two
    background: rgb(217,81,41);
    background: linear-gradient(0deg, rgba(217,81,41,1) 0%, rgba(241,101,33,1) 100%);
    width 60%
    height 100vh
    
    .container-buttons
      margin-right 5%
      padding-top 2%

</style>
