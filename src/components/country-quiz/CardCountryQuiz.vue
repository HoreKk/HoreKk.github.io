<template>
  <div class="w-90 bg-light-700 dark:bg-dark-300 p-5 rounded-2xl">
    <template v-if="!loading && !showResults">
      <div class="flex flex-col">
        <img v-if="question == 'flag'" :src="answer.flag" class="w-10 h-5" >
        <h1 v-if="question == 'capital'" class="mt-4">{{ answer.capital }} est la capitale de</h1>
        <h1 v-if="question == 'flag'" class="mt-4">À quel pays appartient ce drapeau ?</h1>
        <div class="flex flex-col">
          <div v-for="choice in choices" 
               :class="[ { 'hover:(bg-yellow-300 border-yellow-300 text-white) cursor-pointer' : !userAnswer }
                        , userAnswer && answer.name == choice.name ? 'bg-green-500 !border-green-500 !text-white' : ''
                        , userAnswer && userAnswer.name == choice.name && answer.name != choice.name ? 'bg-red-500 !border-red-500 !text-white' : '']" 
               class="border border-blue-300 text-blue-300 mt-4 p-3 rounded-lg"
               @click="!userAnswer ? setUserAnswer(choice) : ''">
            {{ choice.translations.fr }}
          </div>
        </div>
        <div v-if="userAnswer" class="flex justify-end">
          <div class="bg-yellow-300 border-yellow-300 text-white mt-5 p-3 rounded-lg cursor-pointer" @click="nextStep()">
            Suivant
          </div>
        </div>
      </div>
    </template>
    <template v-if="!loading && showResults">
      <div class="flex flex-col items-center">
        <img src="/country-quiz/image-results.svg">
        <h1 class="mt-10 text-4xl font-bold">Résultats</h1>
        <h2 class="mt-3 text-xl">Tu as eu <span class="text-green-500 font-bold">{{ nbGoodAnswers }}</span> bonnes réponses</h2>
        <div class="border border-blue-300 text-blue-300 mt-6 p-3 rounded-lg cursor-pointer"
             @click="resetQuiz()">
          Réessayer
        </div>
      </div>
    </template>
    <template v-if="loading">
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </template>
  </div>
</template>

<script setup>

const axios = inject('axios') 

let allCountries = null
const showResults = ref(false)
const nbGoodAnswers = ref(0)
const userAnswer = ref(null)
const loading = ref(true)
const answer = ref({})
const choices = ref(null)
const question = ref(null)

onMounted( async () => {
  allCountries = await axios.get('https://restcountries.eu/rest/v2/all?fields=name;translations;capital;flag;alpha2Code')
  getQuestion()
  loading.value = false
})

const randomQuestion = () => Math.round(Math.random()) ? 'capital' : 'flag'

const getRandomCountry = () => { return allCountries.data[Math.floor((Math.random() * allCountries.data.length))] }

const getQuestion = () => {
  userAnswer.value = null
  question.value = randomQuestion()
  answer.value = getRandomCountry()
  choices.value = Array.from(Array(3), () => getRandomCountry() )
  choices.value.splice(Math.floor(Math.random() * choices.value.length), 0, answer.value)
}

const setUserAnswer = (choice) => userAnswer.value = choice

const nextStep = () => {
  if (userAnswer.value.name == answer.value.name) {
    nbGoodAnswers.value++
    getQuestion()
  } else {
    showResults.value = true
  } 
}

const resetQuiz = () => {
  nbGoodAnswers.value = 0
  showResults.value = false
  getQuestion()
}

</script>