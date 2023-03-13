const cardArray = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

/*
	BONUS 2
	-creo un riferimento alla select #filter con getElementById()
	-genero un elemento dom <option>
	-con append lo metto sul riferimento e coi template literals  
		ci aggiungo la value che potrei prendere da cardArray.type forse
*/

const colorArray = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
const cardContainerDom = document.querySelector('.card-container');
const selectDom = document.getElementById('filter');
const containerDom = document.getElementById('container');

selectDom.addEventListener('change', function(){
    cardContainerDom.innerHTML='';
    
    if(selectDom.value == 'all'){
        domFiller(cardArray);
    }else if((selectDom.value != '')) {
        const selectedArray = genFilteredArray();
        domFiller(selectedArray);   
    }

});


//functions

function genFilteredArray(){
    array = cardArray.filter(element=>element.type == selectDom.value);
    return array;
}
function domFiller(array){
    const newArray = array.forEach((element)=>{
		let randomColor = '';
		for(i = 0; i < 6 ; i++){
			randomColor += colorArray[randomNumber(colorArray.length - 1)];
		}
        cardContainerDom.innerHTML+=`
							<div class="card">
								<i style="color:#${randomColor}" class="fa-solid ${element.prefix}${element.name}"></i>
								<div>${element.name}</div>
							</div>`;
    });
    return newArray;
}

function randomNumber(max){
	const randomNumber = Math.floor(Math.random() * max);
	return randomNumber;
}


/*  BONUS 1
	-creo arrai con tutti i valori possibili per l'esadecimale
	-scorro array e prelevo 6 volte un valore casuale dell array
		che vado a sommare ad una stringa assegnata ad una variabile
	-assegno quel valore a cardArray.color nel ciclo forEach cosi da generare sempre
		un colore random.
	-oppure al posto di assegnarlo all object semplicemente lo uso su style
		della <i>
*/

