// VUEJS ---------------------------------------------------------
// Eseguire in Vue.js una chiamata ajax, generare 10 email e stamparle a schermo.
// La chiamata ajax vi ritornerà ogni volta un'email random.
// Endpoint: https://flynn.boolean.careers/exercises/api/random/mail

new Vue({
  el: '#app',
  data: {
    numRand: 0
  },
  mounted() {
    const self = this;
    console.log('ho montato l\'app');
    axios.get('https://flynn.boolean.careers/exercises/api/random/int')
      .then(function(resp) {
        console.log('risposta vue', resp.data);
        self.numRand = resp.data.response;
      });
  }

})
Vue.config.devtools = true
