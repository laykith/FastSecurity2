<template>
  <main>
    <div class="content-container">
      <div class="text-container">
        <h2 class="display-1"> {{ getLanguage.interiorTitle }} </h2>
        <span class="color-line" />
        <p class="lead"> {{ getLanguage.interiorP }} </p>
      </div>
    </div>
    <div class="side" />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

  name: 'Interior',
  data: function() {
    return {
			
    }
  },
  computed: {
    ...mapGetters([
      'getLanguage'
    ]),
  },
	
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
	display: flex;
	align-items: flex-start;
	justify-content: center;
	height: 100vh;
	width: 100vw;
	color: #fff;
	background: linear-gradient(black 40%, transparent), url('../img/new_ui.jpg');
	background-position: bottom;
	background-size: 170%;
	background-repeat: no-repeat;
}

.side {
	display: none;
}
.lead {
	width: 100%;
}

.content-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 10vh;
}
.text-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 70%;
}

img {
	width: 100%;
}

.highlight {
	font-family: AG-Bold;
}

@media screen and (min-width: 768px ){
	main { background: none; }
	.side {
		display: block;
		background: url('../img/new_ui.jpg');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		width: 50vw;
		height: 100vh;
	}
	.content-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-top: 0;
		width: 50vw;
	}
	.text-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		max-width: 50%;
		height: 100vh;
		text-align: left;
	}
	.lead {
		margin-left: 0;
		margin-right: 0;
		width: 100%;
	}
}
</style>
