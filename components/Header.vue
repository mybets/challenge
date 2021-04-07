<template>
  <header>
    <div class="container sm-pd">
      <Logo class="logo" max-height="71" alt="Etrader" />
      <div>
        <Button classes="btn outline mr-10 semi">
          <LockIcon class="mr-10 mobile-none" />
          LOG IN
        </Button>
        <Button classes="btn outline semi">
          <PlusIcon class="mr-10 mobile-none" />
          CADASTRAR
        </Button>
      </div>
    </div>
  </header>
</template>

<script>
import { PlusIcon, LockIcon } from 'vue-feather-icons'

import Logo from './Logo'
import Button from './Button'

export default {
  name: 'Header',
  components: {
    Logo,
    Button,
    PlusIcon,
    LockIcon,
  },
}
</script>

<style scoped>
header {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
}

header .container {
  max-width: 1640px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-width: 780px) {
  header .logo {
    max-width: 110px;
  }
  header .container {
    padding: 20px 10px;
  }
  header .btn {
    padding: 0 10px;
    height: 40px;
    line-height: 39px;
  }
}
</style>
