<template>
    <div class="block" v-if="showBlock" @click="stopTimer">
        click me
    </div>
</template>

<script>
export default{
    props:[
        'delay'
    ],
    data() {
        return {
            showBlock: false,
            reactionTime: 0,
            timer: null,
        }
    },
    mounted(){
        setTimeout(() => {
            this.showBlock = true
            this.startTimer();
            
        }, this.delay);
    },
    methods:{
        startTimer(){
            this.timer = setInterval(() => {
                this.reactionTime += 10 // Increment reaction time every 10ms
            }, 10);

    },
        stopTimer(){
            clearInterval(this.timer);
            //use $emit to send the reaction time back to the parent component
            this.$emit('reaction-time', this.reactionTime);
        }
    },
    
}

</script>

<style>
.block {
    width: 400px;
    padding: 100px 0;
    margin: 0px auto;
  display: block;
  background-color: #122b58;
  color: white;
  text-decoration: none; /* Remove underline */
  border-radius: 20px;
  border: inset #183a76;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}


</style>