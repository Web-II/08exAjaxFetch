# 08solAjaxFetch
## Oefening 1:  Trivia quiz.
Dit is een oefening op Ajax/fetch, promises, callback, eventhandeling, DOM.

Deze oefening stelt 10 Trivia (trivial pursuit) vragen met enkele mogelijke oplossingen na elkaar. Nadat de 10 vragen gesteld zijn en een antwoord op elke vraag gegeven is, eindigt de quiz.
De vragen worden één per één op het scherm getoond met de mogelijke oplossingen. Nadat één oplossing gekozen is, bevestig je je antwoord door op de knop 'submit' answer te klikken. Vervolgens wordt het juiste antwoord getoond en het aantal reeds gestelde vragen en juiste antwoorden boven de vraag weergegeven.
Vervolgens kan men op de knop 'next' klikken en verschijnt de volgende vraag.
Nadat de tien vragen gesteld en beantwoord zijn wordt de knop disabled en is de quiz gedaan.
De vragen voor deze quiz worden random opgevraagd via de volgende api:[Open Trivia Database ](https://opentdb.com/). Bekijk de api en tracht de juiste url te bepalen die nodig is om 10 random vragen uit de database op te vragen.  

Voorbeeld van het verloop van de quiz:
Vraag 5 wordt getoond met de mogelijke oplossingen.
![T1.png](/docs/T1.png 'Resultaat')

Vraag 5 is beantwoord en er is op de 'submit answer' knop geklikt.
![T2.png](/docs/T2.png 'Resultaat')

Na het klikken op de knop 'next' wordt vraag 6 met mogelijke antwoorden weergegeven.
![T3.png](/docs/T3.png 'Resultaat')

Nadat de tiende vraag is beantwoord, blijft de laatste vraag met antwoord zichtbaar, maar is de knop disabled.
![T4.png](/docs/T4.png 'Resultaat')
Voor de opmaak en layout wordt gebruik gemaakt van [Materializecss](https://materializecss.com/), het moet niet altijd bootstrap zijn!!

Bekijk heel grondig de html (hoeft niet gewijzigd te worden).

De trivia.js bevat een global function fetchRequest(url) om de data aan de api op te vragen. Deze functie retourneert een promise object. Je mag kiezen hoe je de data retrieved, ofwel met een Ajax request ofwel met een fetch request. In elk geval moet een promise object geretourneerd worden.

De trivia.js bevat naast de global function fetchRequest(url) ook een Class Trivia met de gepaste getters en setters. Deze code mag niet aangepast worden.

De code heeft ook een klasse TriviaRepository. Deze zal de 10 random trivia bijhouden en de nodige methodes voorzien om de TriviaApp te kunnen uitvoeren (zie verder), maw om de quiz te kunnen spelen.
De TriviaRepository:
- de 10 trivia vragen worden bijgehouden in de triviaObjects array.
- de huidige vraag wordt bijgehouden in de currentTrivia (Number).
- het aantal juiste antwoorden wordt bijgehouden in de correctAnswers (Number).
Voor deze drie members van de klasse zijn reeds de nodige getters en setters voorzien.

De methodes van deze klasse zijn:
- addTriviaObjects(dataObjects): mapt de dataObject (van api) naar Trivia objects en voegt ze toen aan de array. Bekijk een mogelijk response van de api: exampleResponseApi.json: hier zie je dat het juiste antwoord (correct_answer) en de foute antwoorden (incorrect_answers) 2 verschillende properties zijn. In een Trivia object moeten de answers alle mogelijke antwoorden bevatten, dus het correcte antwoord en de foute antwoorden.
- getNextTrivia(): retourneert de volgende Trivia.
- checkAnswer(answer): retourneert true of false naargelang het antwoord al dan niet correct is.
- checkEndGame(): retourneert true or fals naargelang de quiz al dan niet ten einde is. De quiz is ten einde als het aantal Trivia gelijk is aan de huidige Trivia.

Vervolgens is er nog de klasse TriviaApp. 
- Deze bevat alle members en methods om Trivia te spelen. 
- Alle nodige getters en setters zijn reeds aanwezig.
- De App heeft uiteraard een TriviaRepisory object nodig en moet de data ophalen: getData().
- de methode getData() zal door gebruik te maken van de fetchRequest functie om de 10 Trivia op te halen bij de api.
    - indien dit succesvol gebeurt worden de Objecten van de api toegevoegd als Trivia Objecten aan de array van de repository. Vervolgens wordt de quiz opgestart en de eerste vraag weergegeven op de html pagina: showTrivia(nextTrivia).
    - indien dit niet succesvol gebeurt, dan wordt een gepast bericht naar de console (dit mag eventueel ook via een alert of op de webpagina zelf) gestuurd en is de quiz afgelopen.
- de methode showTrivia zal de webpagina weergeven:
    HTML bij start:
    ![T5.png](/docs/T5.png 'Resultaat')
    Resultaat:
    ![T6.png](/docs/T6.png 'Resultaat')
    HTML - vraag beantwoord - bovenaan weergave vraag en juiste antwoorden
    ![T7.png](/docs/T7.png 'Resultaat')
    Resultaat:
    ![T8.png](/docs/T8.png 'Resultaat')
    HTML: juiste antwoord weergeven en knop wordt Next
    ![T9.png](/docs/T9.png 'Resultaat')
    Resultaat:
    ![T10.png](/docs/T10.png 'Resultaat')
        
        
## Oefening 2:  FilmBrowser.
