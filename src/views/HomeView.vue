<template>
  <div class="home">
    <SignUp/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SignUp from '../components/SignUp.vue'

export default {
  name: 'HomeView',
  components:{
    SignUp
  }

}
</script>
