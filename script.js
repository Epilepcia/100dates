var quotes = [
     ["совместный домашний просмотр фильмов (заказать еду)"],
     ["романтичный ужин с любимыми блюдами и вином"],
     ["поход в кино на ночной сеанс"],
     ["мастер классы"],
     ["пикник на поляне"],
     ["велопрогулка"],
     ["поход в музеи/галлереи"],
     ["поход на ярмарку"],
     ["котокафе"],
     ["бассейн"],
     ["звездное небо"],
     ["совместное прочтение книги"],
     ["чтение книги в ванной своему партнеру"],
     ["возьмите по 1000 рублей на покупки и посмотрите кто рациональней их потратит"],
     ["медитация"],
     ["боулинг"],
     ["прыжок с парашютом"],
     ["парный вид спорта"],
     ["настольные игры"],
     ["автокинотеатр]"],
     ["бары с живой музыкой"],
     ["пазлы"],
     ["местный фестиваль"],
     ["дегустация любимых напитков"],
     ["рисование вдвоем (холст, краски)"],
     ["выставки животных"],
     ["фотосессия"],
     ["гончарная мастерская"],
     ["роспись фарфора"],
     ["видеоигры"],
     ["прогулка по икеи"],
     ["создание авторских коктейлей"],
     ["испечь десерт/ тортик/ печенье"],
     ["запуск воздушного змея"],
     ["запуск бумажных фонариков"],
     ["изготовление свечек"],
     ["изготовление фигурок из гипса"],
     ["массаж"],
     ["совместных поход в спа"],
     ["встретить на крыше закат"],
     ["встретить на крыше рассвет"],
     ["поход в театр"],
     ["поход в лес"],
     ["бильярд"],
     ["покататься на санках"],
     ["покататься на коньках"],
     ["выпить горячего шоколаду"],
     ["позавтракать в кофейне рано утром"],
     ["свидание в ресторане"],
     ["концерт"],
     ["сходить на поэтическое чтение"],
     ["филармония"],
     ["поиграть с водными пистолетами"],
     ["сесть на рандомный автобус и доехать до конечной"],
     ["приготовить пиццу с любимой начинкой"],
     ["вместе начать изучать язык"],
     ["вечер с просмотром детских фото друг друга"],
     ["сбор ягод летом"],
     ["посадить домашние цветочки и вырастить"],
     ["просмотр видео ролика на ютубе (шоу, научное, путешествия)"],
     ["секс в машине"],
     ["зоопарк"],
     ["аквапарк"],
     ["покататься на роликах"],
     ["разрисовать друг друга аквагримом"],
     ["запустить фейверк"],
     ["покататься на лодке вечером"],
     ["свидание вчетвером"],
     ["посетить новые заведения"],
     ["набить парные тату"],
     ["купить друг другу вещи/нижнее белье ( с примеркой)"],
     ["написать пейзаж на природе"],
     ["парк аттракционов"],
     ["пробное занятие по танцам"],
     ["правда или действие, фанты, крокодил"],
     ["сходить в ботанический сад"],
     ["выставка бабочек"],
     ["вместе сделать кормушку и повесить в лесу"],
     ["свидание в океанариуме"],
     ["квест"],
     ["игровые автоматы"],
     ["тир"],
     ["конная прогулка"],
     ["пейнтбол, лазертаг"],
     ["посетить приют, детский дом (купить что то)"],
     ["сходить на экскурсию по городу"],
    ];

document.getElementById("next-quote").addEventListener("click", function() {
   
    // выбираем случайную фразу из массива
    // данные в массив могут попадать и через api
    var quote = quotes[ Math.floor( Math.random() * quotes.length ) ];

    // цитата
    var phrase = document.querySelector("#phrase");
   
    // автор
   

    phrase.innerHTML = quote[0]; 
});