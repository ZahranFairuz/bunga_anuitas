function formatRupiah(angka) {
    return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function hitungBunga() {
    const modal = parseFloat(document.getElementById('modal').value);
    const sukuBunga = parseFloat(document.getElementById('sukuBunga').value) / 100;
    const tahun = parseFloat(document.getElementById('tahun').value);
    const jenisBunga = document.getElementById('jenisBunga').value;
    
    let hasil = '';

    if (jenisBunga === 'tunggal') {
        // Rumus Bunga Tunggal
        const bungaTunggal = modal * sukuBunga * tahun;
        const totalTunggal = modal + bungaTunggal;
        
        hasil += `
            <p>Bunga Tunggal: Rp ${formatRupiah(bungaTunggal.toFixed(2))}</p>
            <p>Total Bunga Tunggal: Rp ${formatRupiah(totalTunggal.toFixed(2))}</p>
        `;
    } else if (jenisBunga === 'majemuk') {
        // Rumus Bunga Majemuk
        const totalMajemuk = modal * Math.pow((1 + sukuBunga), tahun);
        const bungaMajemuk = totalMajemuk - modal;

        hasil += `
            <p>Bunga Majemuk: Rp ${formatRupiah(bungaMajemuk.toFixed(2))}</p>
            <p>Total Bunga Majemuk: Rp ${formatRupiah(totalMajemuk.toFixed(2))}</p>
        `;
    }

    // Menampilkan hasil
    document.getElementById('hasil').innerHTML = hasil;
}
