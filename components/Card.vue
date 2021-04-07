<template>
  <div :class="`card ${featured ? 'featured' : ''}`">
    <div class="img-cont">
      <img :src="require(`@/assets/${image}`)" :alt="content" />
    </div>
    <div class="separator"></div>
    <div class="content">
      <p>
        {{ content }}
      </p>
      <a v-if="link" :href="link" class="link">
        Veja mais
        <ArrowRightIcon />
      </a>
    </div>
  </div>
</template>

<script>
import { ArrowRightIcon } from 'vue-feather-icons'
export default {
  name: 'Card',
  components: {
    ArrowRightIcon,
  },
  props: {
    image: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    featured: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.card {
  flex: 1 1 auto;
  max-width: 350px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 15px;
  display: flex;
  align-items: center;
}

.card .img-cont {
  flex: 1 0 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card img {
  max-width: 100%;
}

.card .separator {
  min-width: 1px;
  background-color: var(--white-color);
  height: 100%;
  margin: 0 20px;
}

.card .content p {
  font-family: 'Open Sans', sans-serif;
  color: var(--white-color);
  font-size: 1.1rem;
}

.card.featured {
  background-color: var(--white-color);
  transform: scale(1.05);
}

.card.featured .separator {
  background-color: var(--primary-color);
}

.card.featured .content p {
  color: var(--black-color);
}

.card .link {
  color: var(--success-color);
  display: inline-block;
  align-items: center;
  margin-top: 20px;
  text-decoration: none;
  border-bottom: 1px solid var(--success-color);
  padding-bottom: 4px;
  transition: var(--transition);
}

.card .link:hover {
  transform: translateX(5px);
}

.card .link svg {
  width: 1rem;
  height: 1rem;
  margin-left: 10px;
  vertical-align: middle;
}

@media screen and (max-width: 780px) {
  .card .separator {
    min-height: 100px;
    height: 100%;
  }
  .card .img-cont {
    flex: 1 0 60px;
  }
  .card .content p {
    font-size: 0.9rem;
  }
}
</style>
