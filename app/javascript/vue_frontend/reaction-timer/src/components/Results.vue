<template>
  <div class="results">
    <h2>Results</h2>
    <p v-if="score !== null">Your reaction time: {{ score }} ms</p>
    <p v-else>No results yet.</p>
    <p class="rank">Rank: {{ rank }}</p>
    </div>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
           rank: null // Additional data properties can be added here if needed
        };
    },
    mounted() {
       if(this.score < 250){
              this.rank = 'God Speed';
         } else if(this.score < 500){
              this.rank = 'Sonic Fast';
         } else {
              this.rank = 'Slowpoke';
       } // You can add any logic here that needs to run when the component is mounted
        // For example, you could fetch additional data or calculate rankings based on the score
    },
    
}
</script>

<style>
.results {
    width: 400px;
    background: cadetblue;
    color: white;
    border-radius: 20px;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
}   
.rank {
    font-size: 1.5em;
    margin-top: 20px;
    color: yellow;
}
</style>

