function kirimData() {
    var name = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var peminatan = document.querySelector("input[name=peminatan]:checked").value;
    var alamat = document.getElementById("alamat").value;
    var selectBox = document.getElementById("mySelect");
    var angkatan = selectBox.options[selectBox.selectedIndex].text;
    var tanggalElem = document.getElementById("tanggal");
    var tanggal = tanggalElem.value;

    var popUpContent = "Nama: " + name +
    "\nNIM: " + nim +
    "\nPeminatan: " + peminatan +
    "\nAlamat: " + alamat +
    "\nAngkatan: " + angkatan +
    "\nTanggal: " + tanggal;
    alert(popUpContent);
}