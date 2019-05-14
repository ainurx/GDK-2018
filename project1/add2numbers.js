function kalkulator() {
	let angka = document.querySelectorAll('input');
	let i1= parseInt(angka[0].value) ;
	let i2= parseInt(angka[1].value) ;
	angka[2].value = i1 + i2;
	let pesan= document.getElementByid('message');
	pesan.innerHTML="selesai";
} 

let tombol = document.querySelector('button');
tombol.addEventListener('click', kalkulator);