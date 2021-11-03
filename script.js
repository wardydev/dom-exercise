const btnBeli = document.querySelectorAll('.btn-beli')

btnBeli.forEach(btn => {
    btn.addEventListener('click', function() {
        const produk = this.parentElement.previousElementSibling.previousElementSibling.innerHTML
        const harga = this.parentElement.previousElementSibling.innerHTML

        detailPembelian(produk, harga)
    })
})

const detailPembelian = (produk, harga) => {
    const namaProduk = document.querySelector('.produk')
    const hargaProduk = document.querySelector('.harga')

    namaProduk.innerHTML = produk
    hargaProduk.innerHTML = harga
}