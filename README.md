# OOP Poker (ES6 klasser)

Uppgift från Chas Academy

En enkel poker applikation som körs i både konsollen och webbläsaren.

### Krav på funktionalitet:

**Skapa lämpliga klasser för Card, Player och Deck. Använd dig av ES6 Classes**

### Del 1

Skapa en datastruktur med en “normal/poker” kortlek med 52 kort, inga jokrar.
Skriv ut kortleken i konsollen, varje kort ska innehålla sin färg, sitt namn och sitt värde (så att det går att räkna med korten).
Blanda kortleken, skriv ut den blandade kortleken i konsollen.

### Del 2

Skapa två spelare “Slim” och “Luke”, de ska kunna hålla varsin hand med kort. Skriv ut spelarna i konsollen.
Dela ut 5 kort vardera till spelarna.
Skriv ut kortleken (nu med 42 kort kvar) och spelarna (nu med 5 kort var) i konsollen. Skriv också ut spelarnas händers sammanlagda numeriska värde.

### Del 3

Låt spelarna lägga slänga 2 kort var i en kasthög.
Låt spelarna dra 2 nya kort var ur kortleken.
Skriv ut kortleken (nu med 38 kort kvar) och spelarna (med 5 kort var) i konsollen. Skriv också ut spelarnas händers sammanlagda numeriska värde.

### Del 4

Låt spelarna slänga alla sina kort i kasthögen.
Flytta alla kort från kasthögen till kortleken. Nu ska spelarna och kasthögen ha 0 kort och kortleken ska ha 52 kort.
Blanda kortleken igen och skriv ut den i konsollen.

### VG - nivå

Steg 5 - 8. Skapa lämpliga klasser Dealer, Game etc

### Del 5

Skapa en ny klass som heter Dealer som hanterar allt som har med kortleken att göra. Dealern ska bland annat kunna:
…”äga” en instans av klassen Deck.
…blanda kortleken
…dela ut kort ifrån kortleken till spelarna.
Låt delarn blanda kortleken och dela ut en varsin hand till de två spelarna “Slim” och “Luke” via dealern.
Skriv ut spelarnas händer.

### Del 6

Skapa en ny klass som hanterar valideringen av spelarnas händer. Klassen ska ha “statiska” metoder, alltså de anropas genom klassnamnet, inte genom en instans. Skapa en metod som tar in en lista med spelare och utvärdera deras händer utifrån kortens numeriska värde, och returnerar resultaten på ett snyggt sätt.
Dela ut händer till de två spelarna och låt den nya klassen validera deras händer.

### Del 7

Skapa en Game-klass som sköter hela pokerspelet. Det enda main ska gör är att skapa en instans av klassen Game och anropa dess metod startGame.
Game-klassen ska ha en lista med spelare och en instans av Dealer. Kom ihåg att dealern äger instansen av Deck.
Skapa en metod som heter addPlayers som uppmanar användaren att skriva in antalet spelare (minst två) och sen respektive namn på de spelarna. Utifrån det så ska så många instanser av klassen Player skapas och läggas in listan med spelare.
Skapa metoden startGame och skriv in logik där ett par spelare skapas, de får varsin hand, korten valideras och skriv ut vinnaren på ett snygg sätt.

### Del 8

Skapa en game-loop i startGame-metoden som kan hantera att man kör flera rundor. Spelare skapas, de får varsin hand. Man har en slängningsrunda, man får nya kort och sen valideras det och en vinnare utses. Det är en runda. Man kan utöka till fler rundor genom att öka antalet iterationer som loopen går. I varje runda ska de olika spelare kunna välja vilka kort de ska slänga. Alltså bör de få se sin hand varje runda, och en metod för att slänga ett kort på en specifik indexplats bör skapas i spelarens klass eller något liknande.

### Frivilligt

-   Försök att skapa en mer verklig validering av korten. Par, tvåpar, triss och så vidare istället för kortens numeriska värden.
-   Lägg till betting inför varje runda
-   Skapa ett UI som följer ett MVC-mönster, d.v.s Model, View, Controller

## Användningsinstruktioner

1. Öppna applikationen i din webbläsare.
2. Starta konsollen i webbläsaren
3. Se hur spelet utspelas i konsollen för scriptG.js och för scriptVG.js så fylls antal spelare och namn in i en prompt ruta i webbläsaren.

## Tekniska detaljer

Denna applikation är byggd med HTML, CSS och JavaScript.

## Användning

1. Klona projektet till din lokala maskin.
2. Öppna dokumentet med live-server i din webläsare
3. Öppna konsollen i webläsaren för att se spelet

# Resonemang om koden

### Introduktion

Detta projekt syftar till att implementera en förenklad version av ett pokerspel med hjälp av JavaScript, med fokus på objektorienterade programmeringsprinciper. Spelet innebär att skapa klasser för kort, spelare och lek, samt att implementera funktioner såsom att dela ut kort, blanda lekar och utvärdera händer.

## Projektstruktur

Projektet består av två huvudskript: `scriptG.js` och `scriptVG.js`. Varje skript representerar en annan nivå av färdigställande för projektet.

### `scriptG.js`

scriptG täcker de grundläggande kraven som anges i projektspecifikationerna. Det implementerar skapandet av klasser för `Card`, `Player` och `Deck`. Nyckelfunktioner inkluderar skapandet av en standardlek med 52 kort, blanda leken, dela ut kort till spelarna och hantera spelarhänder.

### `scriptVG.js`

ScriptVG utökar funktionaliteten från ScriptG versionen för att uppnå en högre nivå av komplexitet och interaktivitet. Det introducerar ytterligare klasser som `Dealer`, `HandValidator` och `Game`, som underlättar funktioner som att dela ut händer, validera spelarhänder och bestämma vinnaren av spelet. Den här versionen integrerar också användarinmatning för antalet spelare och deras namn, vilket gör spelet mer dynamiskt.

### Styrkor

-   Objektorienterat tillvägagångssätt: Båda skripten använder klasser effektivt för att organisera koden i logiska enheter, vilket främjar modularitet och återanvändbarhet.
-   Tydlig åtskillnad av ansvar: Varje klass ansvarar för en specifik aspekt av spelet, såsom hantering av kort, spelare eller spellogik, vilket förbättrar kodens läsbarhet och underhållbarhet.
-   Omfattande implementation: Skripten täcker alla angivna krav, från att skapa en kortlek till att genomföra ett komplett pokerspel med flera spelare.

### Svagheter

-   Brist på felhantering: Trots att skripten hanterar grundläggande scenarier, inkluderar de inte robusta mekanismer för felhantering för gränsfall eller ogiltiga inmatningar, vilket kan leda till oväntat beteende.
-   Begränsad användargränssnitt: Interaktionen med spelet sker främst via konsolen, vilket kanske inte ger den mest användarvänliga upplevelsen. Att integrera ett grafiskt användargränssnitt (GUI) kan förbättra användbarheten.
-   Skalbarhetsproblem: När spelets komplexitet ökar kan hanteringen av spelstatus och interaktioner endast genom konsolloggar och prompter bli besvärlig. Att implementera en mer strukturerad arkitektur, som en modell-vy-kontroller (MVC)-mönster, kan adressera skalbarhetsproblem.

## Framtida förbättringar

För att förbättra projektet ytterligare kan följande förbättringar övervägas:

-   Implementera mer sofistikerade algoritmer för handutvärdering för att stödja olika pokerhänder (t.ex. par, färg, stege).
-   Införa vadinsatser för att lägga till ytterligare en nivå av strategi och spänning till spelet.
-   Utveckla ett grafiskt användargränssnitt med hjälp av webbtekniker som HTML, CSS och JavaScript för att förbättra användarupplevelsen.
-   Refaktorera kodbasen för att följa designmönster som MVC för bättre organisation och underhållbarhet.
