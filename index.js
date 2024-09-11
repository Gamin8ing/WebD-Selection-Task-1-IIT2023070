var categories = document.getElementsByClassName("category");

async function getData() {
	const url = "https://test-data-gules.vercel.app/data.json";
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const json = await response.json();
		// console.log(json);

		return json;
	} catch (error) {
		alert("I am web dev pro, reload may solve this error lol");
		console.error("I'm a web dev pro");
	}
}
// creating list from the data

const mainObj = document.getElementsByClassName("main")[0];
var data = getData();
data.then((i) => {
	var catdt = i.data;

	// api to html
	for (let j = 0; j < catdt.length; j++) {
		var title = catdt[j].title;
		title = String(title).replace("[", "<div class='subitem'>");
		title = String(title).replace("]", "</div>");

		var quesarray = catdt[j].ques;
		// console.log(quesarray);

		const quesdiv = document.createElement("div");
		quesdiv.className = "checklist";
		for (let q = 0; q < quesarray.length; q++) {
			quesdiv.innerHTML += `<div class="ques">
								<input id="${quesarray[q].id}" type="checkbox" name="r" value="1" ${
				localStorage.getItem(quesarray[q].id) === "true" ? "checked" : null
			} />
								<label for="${quesarray[q].id}">${quesarray[q].title}</label>
							</div>`;
		}

		// console.log(quesdiv);

		const catdiv = document.createElement("div");
		catdiv.className = "items-cont";
		catdiv.innerHTML = `
		<div class="category">
			<div class="items">${title}</div>
			<div class="show-more">
				<div class="standing"></div>
				<div class="sleeping"></div>
			</div>
		</div>
		<div class="questions"></div>
		`;

		catdiv.children[1].appendChild(quesdiv);

		mainObj.appendChild(catdiv);
	}

	// accordion click event
	for (var k = 0; k < categories.length; k++) {
		categories[k].addEventListener("click", function () {
			const standDiv = this.children[1].children[0];
			const cat = this.parentElement;
			const ques = this.nextElementSibling;
			if (standDiv.classList.contains("anim")) {
				// console.log("if");
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
				// console.log("else");
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

	// saving checks in localstorage
	const checkboxes = document.getElementsByTagName("input");
	for (let c = 0; c < checkboxes.length; c++) {
		// console.log(checkboxes[c].id);

		checkboxes[c].addEventListener("click", function () {
			console.log(checkboxes[c].checked);

			localStorage.setItem(checkboxes[c].id, checkboxes[c].checked);
		});
	}
});
