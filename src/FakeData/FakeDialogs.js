import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
	sentencesPerParagraph: {
		max: 8,
		min: 4,
	},
	wordsPerSentence: {
		max: 16,
		min: 4,
	},
});

// lorem.generateWords(1);
// lorem.generateSentences(5);
// lorem.generateParagraphs(7);

class messageCreator {
	constructor(userId, userName, messageId, messageBody) {
		this.userId = userId;
		this.userName = userName;
		this.messageId = messageId;
		this.messageBody = messageBody;
	}
}

let createDialog = () => {
	let getRandomInt = (max) => {
		return Math.floor(Math.random() * max);
	};
	let a = getRandomInt(2);

	return new messageCreator(
		a,
		lorem.generateWords(1),
		getRandomInt(1000),
		lorem.generateWords(getRandomInt(50))
	);
};

export let getDialog = (size) => {
	let dialog = [];
	for (let i = 0; i < size; i++) {
		dialog.push(createDialog());
	}
	return dialog;
};
