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
	-genero un elemento optionDom <option> con document.createElement
	- lo append sul selectDom
	-coi template literals ci aggiungo la value che potrei prendere
	 da cardArray.type forse
*/
const colorArray = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
const cardContainerDom = document.querySelector('.card-container');
const containerDom = document.getElementById('container');
const selectDom = document.getElementById('filter');
const optionDom = document.createElement('option');

// optionDom.setAttribute('value', 'ciaone');
// optionDom.append("ciao");
// selectDom.append(optionDom);
selectDynamicCreator(uniqueTypeFinder())

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

/* cicla tutti gli object e partendo dal primo type come riferimento 
controlla quelli successivi, fa una verifica se il type è lo stesso 
lo mette in un array quindi usi un filter, quando avrai l'array nuovo con
tutti i type diversi e unici a disposizione fai un ciclo di lunghezza
di quell array e per ogni ciclo fai l'append e come valore assegni
il valore dell indice dell array[i] */

console.log(cardArray[0]['type']);
console.log(uniqueTypeFinder());

function selectDynamicCreator(array){

	array.forEach((element)=>{
		optionDom.setAttribute('value', element);
		optionDom.append(element);
		selectDom.append(optionDom);
	});

}

function uniqueTypeFinder(){
	// let newType = cardArray[0].type;
	let newType = 'all';
	const uniqueType = [newType];
	cardArray.forEach((element,index)=>{
		if(element.type != newType){
			uniqueType.push(element.type)
			newType = element.type;
		}
		
	});
	return uniqueType;
}

function genFilteredArray(){
    const array = cardArray.filter(element=>element.type == selectDom.value);
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

