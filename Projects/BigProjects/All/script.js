const bar = document.getElementById('bar');
const nav = document.getElementById('navber');


if (bar){
	bar.addEventListener('click', () => {
		nav.classList.add('active');
	});
}