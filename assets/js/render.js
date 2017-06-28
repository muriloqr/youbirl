// Iniciação de variáveis
var perguntaHtml = document.getElementsByClassName('pergunta')[0];
var escolhasHtml = document.getElementsByClassName('escolha');
var menuHtml = document.getElementsByClassName('menu')[0];
var perguntas = [
{
	titulo: 'Com que frequência você vai a academia?',
	peso: 4,
	escolhas: [
	{
		escolha: 'Uma a duas vezes por semana',
		resultado: 'um maluco doente (AJUDA O MALUCO QUE TA DOENTE)'
	},
	{
		escolha: 'Três a quatro vezes por semana',
		resultado: 'monstrão (QUE NUM VAI DÁ)'
	},
	{
		escolha: 'Mais de quatro vezes por semana',
		resultado: 'BODYBUILDER PORRA, É 13 CRL (BIRL)'
	},
	{
		escolha: 'Academia? Nem faço',
		resultado: 'água com músculo (FRANGO)'
	}
	]
},
{
	titulo: 'Dado Trapézio descendente, defina:',
	peso: 1,
	escolhas: [
	{
		escolha: 'Essa parte aqui da frente',
		resultado: 'um maluco doente (AJUDA O MALUCO QUE TA DOENTE)'
	},
	{
		escolha: 'Sai FDP',
		resultado: 'monstrão (QUE NUM VAI DÁ)'
	},
	{
		escolha: 'Ele ta olhando pra gente',
		resultado: 'BODYBUILDER PORRA, É 13 CRL (BIRL)'
	},
	{
		escolha: 'Que?',
		resultado: 'água com músculo (FRANGO)'
	}
	]
},
{
	titulo: 'O que um bodybuilder busca?',
	peso: 3,
	escolhas: [
	{
		escolha: 'Fibra',
		resultado: 'um maluco doente (AJUDA O MALUCO QUE TA DOENTE)'
	},
	{
		escolha: 'Trapezera',
		resultado: 'monstrão (QUE NUM VAI DÁ)'
	},
	{
		escolha: 'Derrubar as árvores do parque Ibirapuera',
		resultado: 'BODYBUILDER PORRA, É 13 CRL (BIRL)'
	},
	{
		escolha: 'Malhar no verão e engordar no inverno',
		resultado: 'água com músculo (FRANGO)'
	}
	]
},
{
	titulo: 'Dado que você está fazendo um exercício e está ficando cansado, neste caso, você:',
	peso: 3,
	escolhas: [
	{
		escolha: 'Ajuda o maluco que ta doente',
		resultado: 'um maluco doente (AJUDA O MALUCO QUE TA DOENTE)'
	},
	{
		escolha: 'Negativa, que num vai da o que',
		resultado: 'monstrão (QUE NUM VAI DÁ)'
	},
	{
		escolha: 'Grita BIRL e continua, BIRL!',
		resultado: 'BODYBUILDER PORRA, É 13 CRL (BIRL)'
	},
	{
		escolha: 'Para para uma pausa breve',
		resultado: 'água com músculo (FRANGO)'
	}
	]
},
{
	titulo: 'O que se faz antes de ir para a academia?',
	peso: 2,
	escolhas: [
	{
		escolha: 'Toma um whey',
		resultado: 'um maluco doente (AJUDA O MALUCO QUE TA DOENTE)'
	},
	{
		escolha: 'Come pra krl',
		resultado: 'monstrão (QUE NUM VAI DÁ)'
	},
	{
		escolha: 'Sobe as árvores do parque Ibirapuera',
		resultado: 'BODYBUILDER PORRA, É 13 CRL (BIRL)'
	},
	{
		escolha: 'Passa gel e perfume',
		resultado: 'água com músculo (FRANGO)'
	}
	]
},
];
var a = 0;
var results = {};

// FIM
perguntas = shuffle(perguntas);

// Funcão para embaralhar array
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	while (0 !== currentIndex) {

		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}
// FIM

perguntaHtml.innerHTML = perguntas[a].titulo;

var opcao = shuffle(perguntas[a].escolhas)


for (var i = 0; i < perguntas[a].escolhas.length ;i++) {
	var escolha = opcao[i];
	escolhasHtml[i].innerHTML = escolha.escolha; 
}

function proxima(that) {
	var obj;

	for (var i = 0; i < perguntas[a].escolhas.length; i++) {
		if (perguntas[a].escolhas[i].escolha == that.innerText) {
			obj = perguntas[a].escolhas[i];
		}
	}

	obj.peso = perguntas[a].peso;

	if (!results[obj.resultado]) {
		results[obj.resultado] = obj.peso;
	} else {
		results[obj.resultado] = results[obj.resultado] + obj.peso;
	}

	a++;


	if (a < perguntas.length) {
		var bora = document.getElementById('bora');
		bora.play();
		perguntaHtml.innerHTML = perguntas[a].titulo;

		var opcao = shuffle(perguntas[a].escolhas)


		for (var i = 0; i < perguntas[a].escolhas.length ;i++) {
			var escolha = opcao[i];
			escolhasHtml[i].innerHTML = escolha.escolha; 
		}
	} else {
		var resultadoFinal = 0;
		var nome;
		for (var i = 0; i < Object.keys(results).length; i++) {
			if (results[Object.keys(results)[i]] > resultadoFinal) {
				resultadoFinal = results[Object.keys(results)[i]];
				nome = Object.keys(results)[i];
			}
		}

		var final = document.getElementById('final');
		final.play();

		setTimeout(function () {
			var iu = document.getElementById('iu');
			iu.play()

			setTimeout(function () {
				var birl = document.getElementById('birl');
				birl.play()

				setTimeout(function () {
					birl.play()

					setTimeout(function () {
						birl.play()

						setTimeout(function () {
							birl.play()

							setTimeout(function () {
								birl.play()
							}, 1001)
						}, 1001)
					}, 1001)
				}, 1001)
			}, 1001)
		}, 5001)

		var urlImg;

		switch (nome) {
			case 'água com músculo (FRANGO)':
				urlImg = '/images/frango.jpg';
			break;
			case 'um maluco doente (AJUDA O MALUCO QUE TA DOENTE)':
				urlImg = '/images/maluco-doente.jpg'
			break;
			case 'BODYBUILDER PORRA, É 13 CRL (BIRL)':
				urlImg = '/images/bodybuilder.png'
			break;
			case 'monstrão (QUE NUM VAI DÁ)':
				urlImg = '/images/monstrao.jpg'
			break;
			default:
			break;
		}

		menuHtml.innerHTML = '<h1>Você é ' + nome + '</h1> <img style="width: 100%;" src="'+ urlImg +'"> <h2> Gostou? Ajude nosso amigo BIRL GATES e clique em compartilhar abaixo dele!</h2> <img style="width: 100%;" src="/images/birl-gates.jpg">';
	}
	console.log(results)
}