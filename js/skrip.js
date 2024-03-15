function dataPerson() {
  let forms = document.getElementById('frm');
  let nama = forms.nama.value;

  //tugasnya adalah lengkapi kode berikut dan tampilkan hasilnya ada pada HTML
  // 1. isian nama
  // 2. isian pekerjaan
  // 3. isian hobby
  let pekerjaan = forms.pekerjaan.value;
  let hobby = forms.hobby.value;

  let hasil = document.getElementById('hasil');
  hasil.innerHTML = `
    <p>Nama: ${nama}</p>
    <p>Pekerjaan: ${pekerjaan}</p>
    <p>Hobby: ${hobby}</p>
    `;
}
