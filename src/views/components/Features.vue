<template>
  <div class="container-cards">
    <v-card
      class="mx-auto flex-lg-column card-secundary"
      width="324"
      height="200"
      color="#ED6E2D"
      elevation="0"
    >
      <div class="align-card">
        <v-img
          height="73"
          width="35"
          :src="require('../../../assets/icon-money.png')"
        />
        <v-divider
          class="mx-4"
          vertical
          style="background-color: #FFFFFF"
        ></v-divider>
        <v-card-title class="title-card">
          {{ features[0] }}
        </v-card-title>
      </div>
    </v-card>
    <v-card
      class="mx-auto flex-lg-column"
      width="344"
      height="200"
      elevation="24"
      style="z-index: 1; border-radius: 10px"
    >
      <div class="align-card">
        <v-img
          height="57"
          width="95"
          :src="require('../../../assets/icon-dashboard.png')"
        />
        <v-divider
          class="mx-4"
          vertical
          style="background-color: #F16521"
        ></v-divider>
        <div>
          <v-card-title class="title-card" style="margin-left: 12%">
            {{ features[1] }}
          </v-card-title>
          <v-btn color="#1CA78B" text>
            Veja mais
            <v-icon right dark>
              mdi-arrow-right
            </v-icon>
          </v-btn>
        </div>
      </div>
    </v-card>
    <v-card
      class="mx-auto flex-lg-column card-secundary"
      width="324"
      height="200"
      color="#ED6E2D"
      elevation="0"
    >
      <div class="align-card">
        <v-img
          height="57"
          width="47"
          :src="require('../../../assets/icon-calculator.png')"
        />
        <v-divider
          class="mx-4"
          vertical
          style="background-color: #FFFFFF"
        ></v-divider>
        <v-card-title class="title-card">
          {{ features[2] }}
        </v-card-title>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'features',
  props: {
    features: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container-cards
    position relative
    top 30%
    transform translateY(-30%)
    
    .align-card
      display flex
      flex-direction row
      justify-content center
      align-items center
      height 100%
      padding 15% 10%
      .title-card
        font-size 1rem
        padding 0
        word-break normal
        line-height 1.25
    
    .card-secundary
      opacity 0.9
      color #FFFFFF
      border-radius 10px
      padding 0 3%
      
</style>
