const { createApp } = Vue;


createApp({
  data(){
    return{
      giocatore: `Del Piero`,
      squadra: `Juventus`,
      coloraClasse: `verde`
    }
  }
}).mount(`#app`)