function fetchRequest(url) {

}

class Trivia {
	constructor(category, difficulty, question, answers, correctAnswer) {
		this._category = category;
		this._difficulty = difficulty;
		this._question = question;
		this._answers = answers;
		this._correctAnswer = correctAnswer
	}
	get category() {
		return this._category;
	}
	get difficulty() {
		return this._difficulty;
	}
	get question() {
		return this._question;
	}
	get answers() {
		return this._answers;
	}
	get correctAnswer() {
		return this._correctAnswer;
	}
	isCorrectAnswer(answer) {

	}

}

class TriviaGame {
	constructor() {
		this._trivias = null;
		this._answers = null;
	}

	get numberOfTrivias() {
		return this._trivias.length;
	}
	get numberOfAnswers() {
		return this._answers.length;
	}
	get trivia() {

	}
	get correctAnswers() {

	}
	addTrivias(dataObjects) {

	}
	checkAnswer(answer) {

	}
	checkEndGame() {

	}
}

class TriviaApp {
	constructor() {
		this.getData();
	}
	getData() {
		// url: https://opentdb.com/api.php?amount=10

	}

	showTrivia(trivia) {
		const triviaHTML = document.getElementById("trivia");
		triviaHTML.innerHTML = '';
		//Geeft aantal gestelde vragen op het totaal aantal vragen weer.

		triviaHTML.insertAdjacentHTML('beforeend',
			`<div class="card-content">
				<span>${trivia.category} - Difficulty: ${trivia.difficulty}</span><br>
				<span>${trivia.question}</span>
			</div>`
		);
		const divCA = document.createElement('div');
		divCA.className = 'card-action';
		const divRow = document.createElement('div');
		divRow.className = 'row';
		trivia.answers.forEach((a) => {
			divRow.insertAdjacentHTML('beforeend',
				`<div class="col s12 m6">
					<p>
						<label>
							<input class="with-gap" name="group" value="${a}" type="radio" />
							<span>${a}</span>
						</label>
					</p>
				</div>
				`
			)
		});
		divCA.appendChild(divRow);
		triviaHTML.appendChild(divCA);
		triviaHTML.insertAdjacentHTML('beforeend',
			`<div class="card-action">
					<a id="next" class="btn-small blue darken-2">Submit answer<i class="material-icons right">send</i></a>
				</div>`
		)
		document.getElementById('next').onclick = () => {
			if (document.querySelector('input[name="group"]:checked')) {
				//geef het correcte antwoord weer

				// check of het antwoord al dan niet correct is, en toont het aantal correcte antwoorden op de gegeven antwoorden


				if (!this._triviaGame.checkEndGame()) {
					document.getElementById('next').innerText = 'Next question';
					document.getElementById('next').onclick = () => {
						document.getElementById("answer").innerHTML = '';
						this.showTrivia(this._triviaGame.trivia);
					};
				} else {
					document.getElementById('next').className = 'btn-small blue darken-2 disabled';
				};
			}
		}
	}
}

const init = function () {
	new TriviaApp();
}

window.onload = init;