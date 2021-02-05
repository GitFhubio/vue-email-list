// VUEJS ---------------------------------------------------------
// Eseguire in Vue.js una chiamata ajax, generare 10 email e stamparle a schermo.
// La chiamata ajax vi ritornerà ogni volta un'email random.
// Endpoint: https://flynn.boolean.careers/exercises/api/random/mail

new Vue({
  el: '#app',
  data: {
    email_list:[]
  },
  mounted() {
    const self = this;
    for (var i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(function(resp) {
        console.log(resp);
        email=resp.data.response;
        self.email_list.push(email);
      })
    }
    console.log(self.email_list);
  }

})
Vue.config.devtools = true
