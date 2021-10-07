const coin = document.getElementById('coin');
coin.addEventListener('click', fetchCoinFlip);

function fetchCoinFlip() {
	fetch(`/api`)
		.then(res => res.json())
		.then(data => {
			flip(data);
		})
		.catch(err => console.log(err));
}

function flip(result) {
	coin.classList.remove('heads');
	coin.classList.remove('tails');
	setTimeout(() => {
		if (result === 'heads') {
			coin.classList.add('heads');
			console.log('it is head');
		} else {
			coin.classList.add('tails');
			console.log('it is tails');
		}
	}, 100);
}
