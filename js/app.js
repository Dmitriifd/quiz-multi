'use strict';

const main = document.querySelector('.main');
const selection = document.querySelector('.selection');
const title = document.querySelector('.main__title');

const getData = () => {
	const dataBase = [
		{
			id: '622',
			theme: 'Frontend',
			result: [
				[30, 'есть зададтки, нужно развивать'],
				[60, 'очень хорошо, но есть пробелы'],
				[90, 'отличный результат'],
			],
			list: [
				{
					type: 'radio',
					question: 'Расшифруйте аббревиатуру HTML',
					answers: [
						'HyperText Markup Language',
						'HeadingText Markup Language',
						'HyperText Mode Language',
						'HeadingText Markup Language',
					],
				},
				{
					type: 'radio',
					question: 'Какой тег используется для создания ссылки',
					answers: ['<a>', '<link>', '<p>', '<button>'],
				},
				{
					type: 'radio',
					question: 'Где должен быть тег title?',
					answers: ['head', 'main', 'body', 'footer'],
					correct: 1,
				},
				{
					type: 'radio',
					question: 'Какая из предложенных ссылок является абсолютной?',
					answers: [
						'http://www.site.com/page.html',
						'/page.html',
						'./page.html',
						'page.html',
					],
				},
				{
					type: 'radio',
					question: 'Тег для вывода изображений',
					answers: ['img', 'image', 'picture', 'figure'],
				},
				{
					type: 'radio',
					question: 'Можно ли строчные элементы вкладывать в блочные?',
					answers: [
						'да, можно',
						'нет, это не семантичная верстка',
						'можно, только осторожно',
						'нет, это не валидно',
					],
				},
				{
					type: 'radio',
					question: 'Сколько атрибутов id может быть на странице',
					answers: [
						'Один',
						'Два',
						'Сколько угодно',
						'Не одного, нет такого атрибута',
					],
				},
				{
					type: 'checkbox',
					question: 'Какие теги используются для списков',
					answers: ['dl', 'ol', 'ul', 'rl'],
					correct: 3,
				},
				{
					type: 'radio',
					question: 'Как сделать элемент flex-контейнером?',
					answers: ['display: flex', '<flex>', 'class="flex"', 'flex: 1'],
				},
				{
					type: 'checkbox',
					question: 'Выберите значения свойства justify-content',
					answers: [
						'space-around',
						'space-between',
						'space-evenly',
						'space-revert',
					],
					correct: 3,
				},
				{
					type: 'radio',
					question: 'Какое значение по умолчанию у свойства align-items?',
					answers: ['stretch', 'initial', 'center', 'space-around'],
				},
				{
					type: 'radio',
					question:
						'Можно ли использовать технологию Flex и Grid в одном проекте?',
					answers: [
						'да',
						'нет',
						'да, но только на разных страницах',
						'нет это сломает вёрстку',
					],
				},
				{
					type: 'radio',
					question: 'Может ли грид-элемент быть грид-контейнером?',
					answers: [
						'да',
						'нет, вёрстка сломается',
						'да, только если inline-grid',
						'нет, так не работает',
					],
				},
				{
					type: 'checkbox',
					question: 'Как в JavaScript создать массив?',
					answers: ['[]', 'new Array()', 'Array()', 'array()'],
					correct: 3,
				},
				{
					type: 'radio',
					question:
						'Этот оператор завершает выполнение текущей функции и возвращает её значение.',
					answers: ['return', 'break', 'throw', 'catch'],
				},
				{
					type: 'radio',
					question: 'Расшифруйте аббревиатуру DOM',
					answers: [
						'Document Object Model',
						'Document Objects Mode',
						'Digital Optical Modulation',
						'Digital Optical Modul',
					],
				},
				{
					type: 'checkbox',
					question: 'Метод, который округляет аргумент',
					answers: [
						'Math.ceil()',
						'Math.floor()',
						'Math.round()',
						'Math.pow()',
					],
					correct: 3,
				},
				{
					type: 'radio',
					question:
						'Этот метод разбивает строку на подстроки в виде массив строк',
					answers: ['split()', 'slice()', 'charAt()', 'splice()'],
				},
				{
					type: 'radio',
					question: "Что вернет выражение parseInt('007')",
					answers: ['7', "'007'", 'ошибка', 'ничего'],
				},
				{
					type: 'checkbox',
					question: 'Как добавить элемент elem в массив array?',
					answers: [
						'array.push(elem)',
						'array.shift(elem)',
						'array[array.length] = elem',
						'array.pop(elem)',
					],
					correct: 3,
				},
			],
		},
		{
			id: '57135',
			theme: 'JavaScript',
			result: [
				[20, 'есть зададтки, нужно развивать'],
				[60, 'очень хорошо, но есть пробелы'],
				[90, 'отличный результат'],
			],
			list: [
				{
					type: 'checkbox',
					question: 'Как в JavaScript создать массив?',
					answers: ['[]', 'new Array()', 'Array()', 'array()'],
					correct: 3,
				},
				{
					type: 'radio',
					question:
						'Этот оператор завершает выполнение текущей функции и возвращает её значение.',
					answers: ['return', 'break', 'throw', 'catch'],
				},
				{
					type: 'radio',
					question: 'Расшифруйте аббревиатуру DOM',
					answers: [
						'Document Object Model',
						'Document Objects Mode',
						'Digital Optical Modulation',
						'Digital Optical Modul',
					],
				},
				{
					type: 'checkbox',
					question: 'Метод, который округляет аргумент',
					answers: [
						'Math.ceil()',
						'Math.floor()',
						'Math.round()',
						'Math.pow()',
					],
					correct: 3,
				},
				{
					type: 'radio',
					question:
						'Этот метод разбивает строку на подстроки в виде массив строк',
					answers: ['split()', 'slice()', 'charAt()', 'splice()'],
				},
				{
					type: 'radio',
					question: "Что вернет выражение parseInt('007')",
					answers: ['7', "'007'", 'ошибка', 'ничего'],
				},
				{
					type: 'checkbox',
					question: 'Как добавить элемент elem в массив array?',
					answers: [
						'array.push(elem)',
						'array.shift(elem)',
						'array[array.length] = elem',
						'array.pop(elem)',
					],
					correct: 3,
				},
			],
		},
		{
			id: '89345',
			theme: 'HTML',
			result: [
				[10, 'есть зададтки, нужно развивать'],
				[60, 'очень хорошо, но есть пробелы'],
				[90, 'отличный результат'],
			],
			list: [
				{
					type: 'radio',
					question: 'Расшифруйте аббревиатуру HTML',
					answers: [
						'HyperText Markup Language',
						'HeadingText Markup Language',
						'HyperText Mode Language',
						'HeadingText Markup Language',
					],
				},
				{
					type: 'radio',
					question: 'Какой тег используется для создания ссылки',
					answers: ['<a>', '<link>', '<p>', '<button>'],
				},
				{
					type: 'radio',
					question: 'Где должен быть тег title?',
					answers: ['head', 'main', 'body', 'footer'],
					correct: 1,
				},
				{
					type: 'radio',
					question: 'Какая из предложенных ссылок является абсолютной?',
					answers: [
						'http://www.site.com/page.html',
						'/page.html',
						'./page.html',
						'page.html',
					],
				},
				{
					type: 'radio',
					question: 'Тег для вывода изображений',
					answers: ['img', 'image', 'picture', 'figure'],
				},
				{
					type: 'radio',
					question: 'Можно ли строчные элементы вкладывать в блочные?',
					answers: [
						'да, можно',
						'нет, это не семантичная верстка',
						'можно, только осторожно',
						'нет, это не валидно',
					],
				},
				{
					type: 'radio',
					question: 'Сколько атрибутов id может быть на странице',
					answers: [
						'Один',
						'Два',
						'Сколько угодно',
						'Не одного, нет такого атрибута',
					],
				},
				{
					type: 'checkbox',
					question: 'Какие теги используются для списков',
					answers: ['dl', 'ol', 'ul', 'rl'],
					correct: 3,
				},
				{
					type: 'radio',
					question: 'Как сделать элемент flex-контейнером?',
					answers: ['display: flex', '<flex>', 'class="flex"', 'flex: 1'],
				},
				{
					type: 'checkbox',
					question: 'Выберите значения свойства justify-content',
					answers: [
						'space-around',
						'space-between',
						'space-evenly',
						'space-revert',
					],
					correct: 3,
				},
				{
					type: 'radio',
					question: 'Какое значение по умолчанию у свойства align-items?',
					answers: ['stretch', 'initial', 'center', 'space-around'],
				},
				{
					type: 'radio',
					question:
						'Можно ли использовать технологию Flex и Grid в одном проекте?',
					answers: [
						'да',
						'нет',
						'да, но только на разных страницах',
						'нет это сломает вёрстку',
					],
				},
				{
					type: 'radio',
					question: 'Может ли грид-элемент быть грид-контейнером?',
					answers: [
						'да',
						'нет, вёрстка сломается',
						'да, только если inline-grid',
						'нет, так не работает',
					],
				},
			],
		},
		{
			id: '23023',
			theme: 'Beauty',
			result: [
				[20, 'есть зададтки, нужно развивать'],
				[50, 'очень хорошо, вы разбирайтесь в теме бьюти'],
				[80, 'отличный результат'],
			],
			list: [
				{
					type: 'radio',
					question: 'цветовой круг содержит в себе',
					answers: [
						'3 основных цвета',
						'4 основных цвета',
						'2 основных цвета',
						'5 основных цветов',
					],
				},
				{
					type: 'radio',
					question: 'золотое сечение лица - ',
					answers: [
						'идеальные пропорции лица',
						'может быть только у мужчин',
						'встречается только у женщин',
						'может быть только у детей',
					],
				},
				{
					type: 'radio',
					question: 'формы лица, сколько их?',
					answers: ['7', '4', '6', '5'],
				},
				{
					type: 'radio',
					question: 'формы глаз сколько их',
					answers: ['9', '6', '8', '5'],
				},
				{
					type: 'radio',
					question: 'комки Биша — это',
					answers: [
						'жировые отложения в области щек',
						'жировые отложения под глазами',
						'жировые отложения в области подбородка',
						'жировые отложения в верхних веках',
					],
				},
				{
					type: 'radio',
					question: 'корректор для лица:',
					answers: [
						'наносится точечно на проблемные участки кожи',
						'наносится на всё лицо',
						'наносится только под глаза',
						'наносится на зоны высветления лица',
					],
				},
				{
					type: 'radio',
					question: 'скульптор для лица нужен:',
					answers: [
						'для прорисовывания всех естественныех теневых зон на лице',
						'чтобы скрыть проблемные участки кожи',
						'для высветления зоны под глазами',
						'для затемнения зоны подбородка',
					],
				},
			],
		},
		{
			id: '73789',
			theme: 'Математика 3 класс',
			result: [
				[20, 'Молодец, ты очень старался, но нужно еще потренироваться'],
				[60, 'Умница, очень хороший результат'],
				[100, 'Вот это да, это лучший результат'],
			],
			list: [
				{
					type: 'checkbox',
					question: 'Выбери все выражения, значения которых равны 6',
					answers: ['24 : 4', '42 : 7', '30 : 5', '48 : 6'],
					correct: 3,
				},
				{
					type: 'radio',
					question:
						'Цена одной наклейки 4 рубля. Сколько рублей нужно заплатить за 8 таких наклеек?',
					answers: [
						'4 · 8 = 32 (р.)',
						'4 + 8 = 12 (р.)',
						'8 : 4 = 2 (р.)',
						'8 – 4 = 4 (р.)',
					],
				},
				{
					type: 'checkbox',
					question: 'Выбери все выражения, значения которых равны 0',
					answers: ['0 · 43', '0 · 1', '52 : 1', '1 · 30'],
					correct: 2,
				},
				{
					type: 'radio',
					question:
						'Для украшения 3 одинаковых тортов нужно 24 розочки. Сколько розочек необходимо для украшения 6 таких тортов?',
					answers: ['48', '36', '72', '56'],
				},
				{
					type: 'radio',
					question:
						'Летом Юра отдыхал на море. Там он собрал 10 больших ракушек, а маленьких в 2 раза больше. Сколько всего ракушек собрал Юра?',
					answers: ['30', '28', '60', '40'],
				},
				{
					type: 'radio',
					question:
						'Найди площадь клумбы прямоугольной формы, если её длина 4 м, а ширина 2 м.',
					answers: ['8м²', '8м', '6м²', '6м'],
				},
			],
		},
	];

	return dataBase;
};

const hideElem = (elem) => {
    let opacity = getComputedStyle(elem).getPropertyValue('opacity');
    
    const animation = () => {
        opacity -=0.05;
        elem.style.opacity = opacity;

        if (opacity > 0) {
            requestAnimationFrame(animation);
        } else {
            elem.style.display = 'none';
        }
    };

    requestAnimationFrame(animation);
}

const renderTheme = (themes) => {
	const list = document.querySelector('.selection__list');
	list.textContent = '';

	const buttons = [];

	themes.forEach((item) => {
		const li = document.createElement('li');
		li.className = 'selection__item ';
		const button = document.createElement('button');
		button.className = 'selection__theme';
		button.dataset.id = item.id;
		button.textContent = item.theme;

		li.append(button);
		list.append(li);
		buttons.push(button);
	});

    return buttons;
};

const shuffle = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }

    return newArray;
}

const createKeyAnswers = (data) => {
    const keys = [];

    for (let i = 0; i < data.answers.length; i++) {
        if (data.type === 'radio') {
            keys.push([data.answers[i], !i])
        } else {
            keys.push([data.answers[i], i < data.correct])
        }
        
    }

    return shuffle(keys);
}

const createAnswer = (data) => {
    const type = data.type;
    const answers = createKeyAnswers(data); 
    console.log(answers);

    const labels = answers.map((item, i) => {
        const label = document.createElement('label');
        label.className = 'answer'

        const input = document.createElement('input');
        input.type = type;
        input.name = 'answer';
        input.className = `answer__${type}`;
        input.value = i;

        const text = document.createTextNode(item[0]);
        label.append(input, text)

        return label;
    });

    const keys = answers.map(answer => answer[1]);

    return {
        labels,
        keys
    }
}

const renderQuiz = (quiz) => {
    hideElem(title);
    hideElem(selection);

    const questionBox = document.createElement('div');
    questionBox.className = 'main__box main__box--question';

    main.append(questionBox);

    let result = 0;
    let questionCount = 0;

    const showQuestion = () => {
        const data = quiz.list[questionCount];
        questionCount += 1;

        questionBox.textContent = '';

        const form = document.createElement('form');
        form.className = 'main__form-question';
        form.dataset.count = `${questionCount}/${quiz.list.length}`;

        const fieldset = document.createElement('fieldset');
        const legend = document.createElement('legend');
        legend.className = 'main__subtitle';
        legend.textContent = data.question;

        const answersData = createAnswer(data);

        const button = document.createElement('button');
        button.className = 'main__btn question__next';
        button.type = 'submit';
        button.textContent = 'Подтвердить';

        fieldset.append(legend, ...answersData.labels);
        form.append(fieldset, button);
        questionBox.append(form);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let ok = false;
            const answer = [...form.answer].map((input) => {
                if (input.checked) ok = true;
                return input.checked ? input.value : false;
            });
            if (ok) {
                if (questionCount < quiz.list.length) {
                    showQuestion();
                } else {
                    showResult();
                }
            } else {
                form.classList.add('main__form-question--error');
                setTimeout(() => {
                    form.classList.remove('main__form-question--error');
                }, 1000);
            }
        });
    };

    showQuestion();
};

const addClick = (buttons, data) => {
	buttons.forEach((btn) => {
		btn.addEventListener('click', () => {
			const quiz = data.find((item) => item.id === btn.dataset.id);
			renderQuiz(quiz);
		});
	});
    
};

const initQuiz = () => {
	const data = getData();
	const buttons = renderTheme(data);

	addClick(buttons, data);
};

initQuiz();

// header
// header__container
// header__logo
// header__title
// main
// main__title
// main__box
// selection
// selection__list
// selection__item
// selection__theme
// selection__result
// selection__result-ratio
// selection__result-text
// main__box--question
// main__form-question
// main__subtitle
// answer
// answer__checkbox
// main__btn
// question__next
// answer__radio
// main__box--result
// result
// main__subtitle--result
// result__box
// result__ratio
// result__ratio--1
// result__text
// result__return
