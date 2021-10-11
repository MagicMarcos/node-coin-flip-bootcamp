const heads = document.getElementById('heads');
heads.addEventListener('click', fetchCoinFlip);

const tails = document.getElementById('tails');
tails.addEventListener('click', fetchCoinFlip);

function fetchCoinFlip(e) {
	const flipChoice = e.target.value;
	fetch(`/api?coinflip=${flipChoice}`)
		.then(res => res.json())
		.then(result => {
			flip(result);
		})
		.catch(err => console.log(err));
}

function flip(result) {
	coin.classList.remove('heads');
	coin.classList.remove('tails');
	setTimeout(() => {
		if (result.flipped === 'HEADS') {
			coin.classList.add('heads');
		} else {
			coin.classList.add('tails');
		}
	}, 100);
}
