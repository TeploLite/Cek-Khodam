// // Daftar nama-nama khodam
const qodamNames = [
  { img: "img/ngawi1.jpeg", kodam: "Si Bibir Tebal" },
  { img: "img/ngawi2.jpeg", kodam: "Si Imoet" },
  { img: "img/ngawi3.jpeg", kodam: "Mas Manuk" },
  { img: "img/munyuk.jpg", kodam: "MUnyuk" },
  { img: "img/sigit rendang.jpg", kodam: "Sigit Rendang" },
  { img: "img/farhan kebab.jpeg", kodam: "Farhan Kebab" },
  { img: "img/laba-laba sunda.jpg", kodam: "Laba laba Sunda" },
  { img: "img/icon.jpeg", kodam: "Windah Batubara" },
  { img: "img/ambatron.gif", kodam: "Ambatron" },
  { img: "img/bjir.jpg", kodam: "Anak dajjal" },
  { img: "img/celeng.jpg", kodam: "Celeng Balap" },
  { img: "img/cukurukuk.jpg", kodam: "Cukurukuk" },
  { img: "img/dontol.jpg", kodam: "Dontol" },
  { img: "img/epep.jpg", kodam: "Player Ep Ep" },
  { img: "img/gasing.jpg", kodam: "El Gasing" },
  { img: "img/icikiwir.jpeg", kodam: "Icikiwir" },
  { img: "img/isreal.jpg", kodam: "Zionist Is Real" },
  { img: "img/jawir.jpg", kodam: "Jawir" },
  { img: "img/johan.jpeg", kodam: "Johan Liebert" },
  { img: "img/justinus.jpg", kodam: "Kuch Justin" },
  { img: "img/kairi.jpeg", kodam: "Kairi Kumar" },
  { img: "img/kevin.jpg", kodam: "Kevin Lontong" },
  { img: "img/kucing sigma.jpg", kodam: "Kucing Sigma" },
  { img: "img/laba laba.jpg", kodam: "Laba laba gurun sahara" },
  { img: "img/manusia silver.jpg", kodam: "Manusia Silver" },
  { img: "img/marwoto.jpg", kodam: "Marwoto S.Pd" },
  { img: "img/mesi.jpg", kodam: "El Cekik" },
  { img: "img/mrbuas.jpg", kodam: "Mr Buast" },
  { img: "img/mujianto.jpg", kodam: "Mujianto S.Pd" },
  { img: "img/nguwawor.jpg", kodam: "Nguwawor" },
  { img: "img/pembalap.jpg", kodam: "Pembalap" },
  { img: "img/peshate.jpg", kodam: "PE ES HA TE" },
  { img: "img/Priasigma.jpg", kodam: "Pria Sigma" },
  { img: "img/psht.jpg", kodam: "PE ES HA TE" },
  { img: "img/punk.jpg", kodam: "Kim Jong-Punk " },
  { img: "img/rahmat.jpg", kodam: "Rahmat Tahalu" },
  { img: "img/roger.jpg", kodam: "Roger Sumatra" },
  { img: "img/scp.jpg", kodam: "SCP-69" },
  { img: "img/sempak.png", kodam: "Sempak Gusion" },
  { img: "img/sigma.jpg", kodam: "Pria Sigma" },
  { img: "img/skibidi.png", kodam: "Skibidi Toilet" },
  { img: "img/sosokhitam.jpg", kodam: "Makhluk Hitam" },
  { img: "img/towel.jpg", kodam: "Bung Towel" },
  { img: "img/triomacan.jpg", kodam: "Trio Macan" },
  { img: "img/vincent.jpg", kodam: "Pak Vinsen" },
  { img: "img/wongireng.jpg", kodam: "Wong Ireng" },
  { img: "img/bandar.jpeg", kodam: "Bandar Bokep" },
];

function getRandomQodam() {
  const randomIndex = Math.floor(Math.random() * qodamNames.length);
  return qodamNames[randomIndex];
}

// Mendapatkan elemen container hasil
const namaQodam = document.getElementById("namaQodam");

// Menggunakan fungsi untuk menampilkan satu elemen secara acak di halaman HTML
const randomQodam = getRandomQodam();

// Membuat elemen teks
const imgElement = document.createElement("img");
imgElement.src = randomQodam.img;
imgElement.alt = randomQodam.kodam;
namaQodam.appendChild(imgElement);
const kodamElement = document.createElement("kodam");
kodamElement.textContent = randomQodam.kodam;
namaQodam.appendChild(kodamElement);

function inputNama() {
  // Mendapatkan nilai dari input
  const name = document.getElementById("inputName").value;

  // Mendapatkan elemen output
  document.getElementById("output").innerText = name;
}

function kembali() {
  setTimeout(function () {
    window.location.reload();
  }, 300); // Waktu dalam milidetik (misalnya 2000 ms = 2 detik)
}
