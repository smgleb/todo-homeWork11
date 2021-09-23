
let btn = document.querySelector('#btn-add');
let inp = document.querySelector('#inputTask');
let list = document.querySelector('#list');
let spans = list.getElementsByClassName('gg');

btn.onclick = getLink;

function getLink() {

	let inpContent = inp.value;
	inp.value = '';
	let date = new Date();
	if (inpContent.trim() !== '') {
		list.insertAdjacentHTML(
			'beforeend',
			`<li><span class='good'>execute </span> Task: ${inpContent}. >>>> Date:${date} <span class='gg'>Delete</span></li>`

		)
	}

	taskDel();
	getEx();
	getNum();
}





function taskDel() {
	for (let spanItem of spans) {
		spanItem.onclick = function () {
			spanItem.parentElement.remove();
			getNum();
		};
	}


}
taskDel();



// Информация о разработчике

let button = document.querySelector('#bb');
let info = document.querySelector('.info');
button.onclick = function () {
	info.classList.toggle('active');
	if (info.classList.contains('active'))
		info.style.display = 'block';
	else {
		info.style.display = 'none';
	}

}


// Выполнение задачи

let execute = document.getElementsByClassName('good');
function getEx() {
	for (let i = 0; i < execute.length; i++) {
		execute[i].onclick = function () {
			if (this.parentElement.style.textDecoration !== 'line-through') {
				this.parentElement.style.textDecoration = 'line-through';
			} else {
				this.parentElement.style.textDecoration = 'none';
			}
			getNum();
		}
	}
}
getEx();

//счетчик
let num_good = document.querySelector('.count__good');
let num_fail = document.querySelector('.count__fail');
let num_all = document.querySelector('.count__all');
let tagLi = document.getElementsByTagName('li');
function getNum() {
	let all = tagLi.length;
	num_all.innerHTML = `${all}`;
	let numGood = 0;
	for (let i = 0; i < all; i++) {
		if (tagLi[i].style.textDecoration === 'line-through') {
			numGood++;
		}
	}
	num_good.innerHTML = `${numGood}`;

	num_fail.innerHTML = all - numGood;
}

getNum();
