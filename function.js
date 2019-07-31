function nilai(nilai){

	if (nilai >=0 && nilai <=4){
		console.log('kurang')
	}

	else if (nilai >=5 && nilai <=7){
		console.log('cukup')
	}
	else if (nilai >=8 && nilai <=9){
		console.log('baik')
	}
	else if (nilai == 10){
		console.log('sangat baik')
	}

	else {
		alert('incorrect data')
	}

} 