var categories = document.getElementsByClassName("category");

for (var i = 0; i < categories.length; i++) {
	categories[i].addEventListener("click", function () {
		const sleepDiv = this.children[1].children[0];
		const cat = this.parentElement;
		const ques = this.nextElementSibling;
		if (sleepDiv.classList.contains("anim")) {
			sleepDiv.classList.remove("anim");
			sleepDiv.classList.add("anim-reverse");
			ques.style.gridTemplateRows = "0fr";
			ques.style.padding = "0";
			// cat.style.maxHeight = this.scrollHeight + "px";
		} else {
			sleepDiv.classList.remove("anim-reverse");
			sleepDiv.classList.add("anim");
			ques.style.gridTemplateRows = "1fr";
			ques.style.padding = "20px 40px";
			// cat.style.maxHeight = "fit-content";
		}
		// console.log(sleepDiv);
	});
}
