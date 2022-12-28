'use strict';

const section = document.querySelector('.images');
const imgList = [
	"/img/gallery/port03.jpg",
	"/img/gallery/port02.jpg",
	"/img/gallery/port01.jpg",
	"/img/gallery/DSC_0703-min.jpg",
	"/img/gallery/DSC_0704-min.jpg",
	"/img/gallery/DSC_0705-min.jpg",
	"/img/gallery/DSC_0706-min.jpg",
	"/img/gallery/DSC_0707-min.jpg",
	"/img/gallery/DSC_0708-min.jpg",
	"/img/gallery/DSC_0709-min.jpg",
	"/img/gallery/DSC_0710-min.jpg",
	"/img/gallery/DSC_0711-min.jpg",
	"/img/gallery/DSC_0715-min.jpg",
	"/img/gallery/DSC_0716-min.jpg",
	"/img/gallery/DSC_0717-min.jpg",
	"/img/gallery/DSC_0718-min.jpg",
	"/img/gallery/DSC_0719-min.jpg",
	"/img/gallery/DSC_0720-min.jpg",
	"/img/gallery/DSC_0721-min.jpg",
	"/img/gallery/DSC_0722-min.jpg",
	"/img/gallery/DSC_0723-min.jpg",
	"/img/gallery/port04.jpg",
	"/img/gallery/port01.jpg",
	"/img/gallery/port02.jpg",
	"/img/gallery/port03.jpg"
]









let gallery;
for (let i = 0; i < imgList.length; i++) {

	gallery = `		
			<img class="img" src=${imgList[i]} alt="img">
			<div class="icon"><span class="material-symbols-outlined">
				open_in_full
			</span></div>
	`;
	let itemImg = document.createElement('div');
	itemImg.classList.add('gallery-item');
	itemImg.innerHTML = gallery;
	section.appendChild(itemImg);
}





function createGallery(arr) {
	imgList.forEach((item) => {

	})
}
createGallery(imgList)

// PASSWORD
document.addEventListener('DOMContentLoaded', () => {
	const password = '1111';
	const modalTrigger = document.querySelectorAll('[data-modal]'),
		modal = document.querySelector('.myModal'),
		btn = document.querySelector('.btn'),
		pass = document.querySelector('.modal__input'),
		calc = document.querySelector('.calculator');
	let title = modal.querySelector('.modal__title');

	document.body.style.overflow = 'hidden';
	calc.classList.add('hide');

	function closeModal() {
		modal.classList.add('hide');
		modal.classList.remove('show');
		document.body.style.overflow = '';
		calc.classList.remove('hide');
	}

	function passWord() {
		btn.addEventListener('click', () => {
			if (pass.value === password) {
				closeModal();
			} else {
				title.innerHTML = "Try Again";
				document.querySelectorAll('form').reset();
			}
		});
	}
	passWord();
});


// Downloads

const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);

function handleFiles(files) {
	for (let i = 0; i < files.length; i++) {
		let file = files[i].name
		console.log(file);
	}
}


// const dropbox = document.getElementById('dropbox');

// dropbox.addEventListener('dragenter', dragenter, false);
// dropbox.addEventListener('dragover', dragover, false);
// dropbox.addEventListener('drop', drop, false);

// function dragenter(e) {
// 	e.stopPropagation();
// 	e.preventDefault()
// };
// function dragover(e) {
// 	e.stopPropagation();
// 	e.preventDefault()
// };
// function drop(e) {
// 	e.stopPropagation();
// 	e.preventDefault()

// 	let dt = e.dataTransfer;
// 	let files = dt.files;

// 	handleFiles(files);
// };

// ADD FOTO MODAL

const modal = document.getElementById('modal'),
	addPhoto = document.getElementById('addPhoto'),
	span = document.querySelector(".close");

addPhoto.onclick = () => {
	modal.style.display = "flex";
}

span.onclick = () => {
	modal.style.display = "none";
}

const like = document.querySelectorAll(".material-symbols-outlined"),
	// icon = document.querySelectorAll('.icon'),
	img = document.querySelectorAll(".img");



let srcList = [];
function choice() {
	img.forEach((like) => {
		like.addEventListener("click", () => {
			like.classList.toggle("choice");
			const countChoice = document.querySelectorAll('.choice');

			// countChoice.forEach(item => {
			// 	srcList.push(item.src);

			// })
			const countImg = document.querySelector('.calc__count');
			const remainder = 10 - countChoice.length;
			countImg.innerHTML = `Count: ${countChoice.length} ` + '(' + remainder + ')';

		})
	})
}
choice()
// const imgs = document.querySelectorAll('img');
// const imgArr = Object.entries(imgs)
// console.log(imgs[0].currentSrc);
// const nameImg01 = document.querySelectorAll('.active');
// console.log(nameImg01)
// const nameImg02 = imgs[1].currentSrc;
// console.log(nameImg01.slice(-10, -4));
// const nameImg = nameImg01.slice(-10, -4); //повертає саме ім'я 'port01'
// console.log(typeof nameImg)
// console.log(nameImg02.length);
// console.log(typeof nameImg01);

// console.log(typeof imgArr);
// imgs.forEach(item => {
// 	console.log(item.currentSrc)
// })

// MODAL IMAGE

let myModal = document.querySelectorAll(".modal"),
	images = document.querySelectorAll(".img"),
	modalImg = document.getElementById('img01'),
	iconNew = document.querySelectorAll('.icon'),
	caption = document.querySelector('.caption');

function openModal() {
	iconNew.forEach((item, i) => {
		let iconIndex = i;
		item.addEventListener('click', (e) => {
			myModal.forEach(item => {
				item.style.display = 'block';
			})

			modalImg.src = images[iconIndex].src;
			caption.innerHTML = modalImg.src.slice(modalImg.src.lastIndexOf('/') + 1, modalImg.src.lastIndexOf('.'))
			// item.src.slice(item.src.lastIndexOf('/') + 1, item.src.lastIndexOf('.'))


		})
	})
}
openModal()

let spanImg = document.getElementsByClassName("close")[0];

spanImg.onclick = function () {
	myModal.forEach(item => {
		item.style.display = "none";
	})
}

// srcList

let calcBtn = document.querySelector('.calc__btn');
let resBtn = document.querySelector('.res__btn');



calcBtn.addEventListener('click', () => {
	const countChoice = document.querySelectorAll('.choice');
	countChoice.forEach(item => {
		if (countChoice.length > 0) {
			let src = item.src
			src = src.slice(src.lastIndexOf('/') + 1, src.lastIndexOf('.'))
			srcList.push(src)
		}
	})
	// srcList.indexOf(item);
	// console.log(srcList);
	const list = document.querySelector('.count');
	list.innerHTML = `${srcList.join(' ')}`
	// let arr = srcList.filter((value, index, self) => self.indexOf(value) === self.lastIndexOf(value))
	// console.log(arr);
	document.querySelector('.list').style.display = 'flex';

})

resBtn.addEventListener('click', () => {
	srcList = srcList.slice(srcList.length);
	img.forEach(item => {
		item.classList.remove('choice')
	})
	console.log(srcList);
	const list = document.querySelector('.count');
	list.innerHTML = `${srcList}`
	// list.innerHTML = `${srcList.join('<br>')}`
	document.querySelector('.list').style.display = 'none';
})

// const list = document.querySelector('.count');
// list.innerHTML = `${srcList.join('-')}`


// COPY TEXT https://www.freecodecamp.org/news/copy-text-to-clipboard-javascript/

let countList = document.querySelector('#countList'),
	handleCopyClick = document.querySelector('#copy-quote');

handleCopyClick.addEventListener('click', () => {
	let text = countList.textContent;
	navigator.clipboard.writeText(`${text}`);
	alert('List Copied!');
})









