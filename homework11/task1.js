function Some(text, time) {
	setTimeout(() => {
		console.log(text);
	}, time);
}

console.log(Some('Hello!', 5000));
