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

Bekijk heel grondig de HTML (hoeft niet gewijzigd te worden).

De trivia.js bevat een global function fetchRequest(url) om de data aan de api op te vragen. Deze functie retourneert een promise object. Je mag kiezen hoe je de data retrieved, ofwel met een Ajax request ofwel met een fetch request. In elk geval moet een promise object geretourneerd worden.

De trivia.js bevat naast de global function fetchRequest(url) ook een Class Trivia met de gepaste getters. Implementeer de method 'isCorrectAnswer(answer)', deze retourneert een boolean. 

De code heeft ook een klasse TriviaGame. Deze zal de 10 random trivia bijhouden en de nodige methodes voorzien om de TriviaApp te kunnen uitvoeren (zie verder), maw om de quiz te kunnen spelen.
De TriviaGame:
- de 10 trivia vragen worden bijgehouden in de trivias array.
- de huidige vraag wordt bijgehouden in de currentTrivia (Number).
- het aantal juiste antwoorden wordt bijgehouden in de correctAnswers (Number).
Voor deze drie members van de klasse zijn reeds de nodige getters voorzien.

De methodes van deze klasse zijn:
- addTrivias(dataObjecten) mapt de dataObjecten (van api) naar Trivia objects en voegt ze toen aan de array. Bekijk een mogelijk response van de api: exampleResponseApi.json: hier zie je dat het juiste antwoord (correct_answer) en de foute antwoorden (incorrect_answers) 2 verschillende properties zijn. In een Trivia object moeten de answers alle mogelijke antwoorden bevatten, dus het correcte antwoord en de foute antwoorden.
- getNextTrivia(): retourneert de volgende Trivia.
- checkAnswer(answer): retourneert true of false naargelang het antwoord al dan niet correct is.
- checkEndGame(): retourneert true or fals naargelang de quiz al dan niet ten einde is. De quiz is ten einde als het aantal Trivia gelijk is aan de huidige Trivia.

Vervolgens is er nog de klasse TriviaApp. 
- Deze bevat alle members en methods om Trivia te spelen. 
- De App heeft uiteraard een TriviaGame object nodig en moet de data ophalen: getData().
- de methode getData() zal door gebruik te maken van de fetchRequest functie om de 10 Trivia op te halen bij de api.
    - indien dit succesvol gebeurt worden de Objecten van de api toegevoegd als Trivia Objecten aan de array van de game, gebruik hiervoor de method 'addTrivias(dataObjecten)' van het triviaGame object. Vervolgens wordt de quiz opgestart en de eerste vraag weergegeven op de html pagina: showTrivia(nextTrivia).
    - indien dit niet succesvol gebeurt, dan wordt een gepast bericht naar de console (dit mag eventueel ook via een alert of op de webpagina zelf) gestuurd en is de quiz afgelopen.
- de methode showTrivia zal de webpagina weergeven:
    
HTML bij start:

![T5.png](/docs/T5.png 'Resultaat')
    
Resultaat:

![T6.png](/docs/T6.png 'Resultaat')
    
HTML - vraag beantwoord - bovenaan weergave vraag en juiste antwoorden:

![T7.png](/docs/T7.png 'Resultaat')
    
Resultaat:

![T8.png](/docs/T8.png 'Resultaat')
    
HTML: juiste antwoord weergeven en knop wordt Next

![T9.png](/docs/T9.png 'Resultaat')
    
Resultaat:

![T10.png](/docs/T10.png 'Resultaat')
        
        
## Oefening 2:  FilmBrowser.
Dit is een oefening op Ajax/fetch, promises, callback, eventhandeling, DOM.

Deze oefening laat de gebruiker een zoekterm ingeven. Na het klikken op de 'Search' button krijgen we de 10 meest relevante films voor de zoekterm te zien. Voor elke film kan op een detail knop geklikt worden en worden de details van de film getoond. Bij de detailview is er ook een knop voorzien om terug te keren naar de zoekresultaten.

De films worden opgevraagd via de volgende api: [Open Movie Database ](http://www.omdbapi.com/). Om deze database te raadplegen heb je een key nodig (deze is gratis). Indien je geen key aanvraagt, kan je volgende key gebruiken: 'apikey=57927523'. Vraag toch je eigen key aan want per key is er een gelimiteerd aantal request per dag. Bekijk de api en tracht de juiste url's te bepalen die nodig zijn om films op te vragen en een film (detail) op te vragen via het id van de film: voor beide heb je een request naar de api nodig.

Start applicatie:

![F1.png](/docs/F1.png 'Resultaat')
    
Resultaat na zoekterm 'star' ingegeven en op search knop geklikt.

![F2.png](/docs/F2.png 'Resultaat')

Detail film:

![F3.png](/docs/F3.png 'Resultaat')

Indien geen poster beschikbaar is (poster: N/A) wordt de 'No Image Available' afbeelding (zie map images) weergegeven.

![F4.png](/docs/F4.png 'Resultaat')

Voor de opmaak en layout wordt opnieuw gebruik gemaakt van [Materializecss](https://materializecss.com/).

Bekijk heel grondig de HTML (hoeft niet gewijzigd te worden).

De filmBrowser.js bevat een global function fetchRequest(url) om de data aan de api op te vragen. Deze functie retourneert een promise object. Je mag kiezen hoe je de data retrieved, ofwel met een Ajax request ofwel met een fetch request. In elk geval moet een promise object geretourneerd worden.

De filmBrowser.js bevat naast de global function fetchRequest(url) ook een Class Film met de gepaste getters. Deze klasse heeft een propertie deatil, deze moet bij het bekijken van de details van een film, data ontvangen via een tweede request naar de api.

De code heeft ook een klasse FilmRepository. Deze zal de films bijhouden en de nodige methodes voorzien om de FilmBrowserApp te kunnen uitvoeren (zie verder), maw om de film database te bevragen en weer te geven.

De FilmRepository:
- de films worden bijgehouden in de films array.

De methodes van deze klasse zijn:
- addFilms(dataObjecten) mapt de dataObjecten (van api) naar Film objects en voegt ze toen aan de array. Bekijk een mogelijk response van de api op de website van de api.
- addDetail(id,objDetail): haalt het juiste film Object op uit de array en voegt de details toe (zie screenshot detail en detail propertie van film object).
- getFilmById(id): retourneert film overeenkostig het id (parameter).

Vervolgens is er nog de klasse FilmBrowserApp. 
- Deze bevat alle members en methods om de film database te bevragen en de films weer te geven en ook de details van de aangeklikte film weer te geven. 
- De App heeft uiteraard een FilmRepository object nodig en moet de data ophalen: searchFilms(searchText).
- de methode searchFilms(searchText) zal door gebruik te maken van de fetchRequest functie de films ophalen door de searchText mee te geven in het api request te halen:
    - indien dit succesvol gebeurt worden 
        - de Objecten, indien er een zoekresultaat is, van de api toegevoegd als Film Objecten aan de array van de repository, gebruik hiervoor de method 'addFilms(dataObjecten)' van het filmRepository object. Vervolgens worden deze weergegeven op de pagina ,showFilms() method.
        - een gepaste boodschap gegeven - showNoResult() method, indien geen zoekresultaat is.
    - indien dit niet succesvol gebeurt, dan wordt een gepast bericht naar de console (dit mag eventueel ook via een alert of op de webpagina zelf) gestuurd.
- de methode getFilm(id) zal, nadat op de knop details van een film is geklikt, de details data ophalen bij de api via een data request (maak gebruik van fetchRequest functie):
    - indien dit succesvol gebeurt worden 
        - de filmdata, indien er een zoekresultaat is, van de api toegevoegd als Film object details aan de overeenkomstige film uit de repository, gebruik hiervoor de method 'addDetail(id, objDetail)'  Vervolgens wordt de film weergegeven op de pagina ,showDeatilFilm(film) method.
        - een gepaste boodschap gegeven - showNoResult() method, indien geen zoekresultaat is.
    - indien dit niet succesvol gebeurt, dan wordt een gepast bericht naar de console (dit mag eventueel ook via een alert of op de webpagina zelf) gestuurd.
- de methode showFilms() zal de films op de webpagina weergeven. Elke film bevat een knop om de details te bekijken getFilm(id).
- de methode showFilmsDetail(film) zal de film op de webpagina weergeven. Onderaan is een knop om de terug te keren naar het overzicht van de films - showFilms().