var data = {
	
	addContainer: function(tag, className) {
		var tag = document.createElement(tag);
		tag.classList.add(className);
		document.body.insertBefore(tag, document.body.lastChild);
	},

	addMainCapture: function(tag,className,text) {
		var tag = document.createElement(tag);
		parent = document.querySelector('.container');
		tag.classList.add(className);
		parent.appendChild(tag);
		tag.innerHTML = text;
	},

	addQuestion: function(tag,text) {
		var tag = document.createElement(tag);
		parent = document.querySelector('form');
		parent.appendChild(tag);
		tag.innerHTML = text;
	},

	addFormBody: function(tag, className) {
		var tag = document.createElement(tag);
		tag.classList.add(className);
		parent = document.querySelector('.container');
		parent.appendChild(tag);
	},

	listGroup: function(questionNumber) {
		var ul = document.createElement('ul');
		parent = document.querySelector('form');
		ul.classList.add('list_group');
		for (i=1; i<=3; i++) {
			var li = document.createElement('li');
			li.classList.add('list_group-item');

			var input = document.createElement('input');
			input.setAttribute('type', 'checkbox');
			input.setAttribute('id', 'ans'+i+'-'+questionNumber);

			li.appendChild(input);
			var label = document.createElement('label');
			label.setAttribute('for', 'ans'+i+'-'+questionNumber);

			li.appendChild(label)
			ul.appendChild(li);
		}
		parent.appendChild(ul); 
	},

	addSubmit: function(tag, text) {
		var tag = document.createElement(tag);
		tag.setAttribute('type','submit');
		tag.classList.add('btn'); 
		tag.classList.add('btn-default'); 
		tag.classList.add('center-block');
		tag.innerHTML = text;
		var parent = document.querySelector('form');
		parent.appendChild(tag)
	},

	addQuestionText: function(questionNumber, answersArr) {
		for (i=1; i<=3; i++) {
			var elem = document.getElementById('ans'+i+'-'+questionNumber);
			elem.nextSibling.innerHTML = answersArr[i-1];
		}
	}
}

data.addContainer('div','container');

	data.addMainCapture('h3','text-center','Тест по программированию');
	
	data.addFormBody('form','col-lg-6');
	
		data.addQuestion('h4','1. Вопрос №1');
	
		data.listGroup(1);
	
		data.addQuestion('h4','2. Вопрос №2');
	
		data.listGroup(2);
	
		data.addQuestion('h4','3. Вопрос №3');
		
		data.listGroup(3);
		
		data.addSubmit('submit','Проверить мои результаты');
		
	data.addQuestionText(1, ['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3']);
	
	data.addQuestionText(2, ['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3']);
	
	data.addQuestionText(3, ['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3']);

console.log(document.querySelector('.container'));