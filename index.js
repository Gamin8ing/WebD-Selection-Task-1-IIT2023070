var categories = document.getElementsByClassName("category");

for (var i = 0; i < categories.length; i++) {
	categories[i].addEventListener("click", function () {
		const standDiv = this.children[1].children[0];
		const cat = this.parentElement;
		const ques = this.nextElementSibling;
		if (standDiv.classList.contains("anim")) {
			console.log("if");
			standDiv.classList.remove("anim");
			standDiv.classList.add("anim-reverse");
			ques.style.gridTemplateRows = "0fr";
			ques.style.padding = "0";
			// for (let j = 0; j < categories.length; j++) {
			// 	if (j === i) continue;
			// 	const otherstandDiv = categories[j].children[1].children[0];
			// 	const otherQues = categories[j].nextElementSibling;
			// 	otherstandDiv.classList.add("anim");
			// 	otherstandDiv.classList.remove("anim-reverse");
			// 	otherQues.style.gridTemplateRows = "1fr";
			// 	otherQues.style.padding = "20px 40px";
			// }

			// cat.style.maxHeight = this.scrollHeight + "px";
		} else {
			console.log("else");
			standDiv.classList.add("anim");
			if (standDiv.classList.contains("anim-reverse")) {
				standDiv.classList.remove("anim-reverse");
			}
			for (let j = 0; j < categories.length; j++) {
				if (categories[j] === this) continue;
				const otherstandDiv = categories[j].children[1].children[0];
				const otherQues = categories[j].nextElementSibling;
				if (otherstandDiv.classList.contains("anim")) {
					otherstandDiv.classList.remove("anim");
					otherstandDiv.classList.add("anim-reverse");
					otherQues.style.gridTemplateRows = "0fr";
					otherQues.style.padding = "0";
					break;
				}
			}
			ques.style.gridTemplateRows = "1fr";
			ques.style.padding = "20px 40px";
			// cat.style.maxHeight = "fit-content";
		}
		// console.log(standDiv);
	});
}
