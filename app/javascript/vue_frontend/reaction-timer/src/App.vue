<template>
  <h1> Roon's Reaction Timer</h1>
  <button @click="startGame" :disabled="isPlaying">play</button>
  <Block v-if="isPlaying" :delay="delay" @reaction-time="endGame"/>
  <Results v-if="showResults" :score="score"/>
</template>

<script>
import Block from './components/Block.vue';
import Results from './components/Results.vue';

export default {
  name: 'App',
  components: {Block, Results},
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false 
    };
  },
  methods: {
    startGame() {
      this.isPlaying = true;
      this.delay = Math.random() * 5000 + 2000; // Random delay between 2 and 7 seconds
      this.showResults = false;
    },
    endGame(reactionTime) {
      this.isPlaying = false
      this.score = reactionTime
      this.showResults = true;
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #122b58;
  color: white;
  text-decoration: none; /* Remove underline */
  border-radius: 10px;
  border: inset #183a76;
  font-size: 16px;
  cursor: pointer;
  text-align: center;

}
button:disabled {
  opacity: 0;
  cursor: not-allowed;
}

button:hover{
  background-color: #FFFFFF;
  color: #183a76;
  text-decoration: underline;
}
</style>
