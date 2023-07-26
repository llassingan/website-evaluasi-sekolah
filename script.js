const pertanyaan = [
    {
        id:1,
        soal:"1.Pilihlah gambar dibawah ini sesuai dengan hatimu",
        jawaban: [
            {pilihan:"files/gbr1.jpg",nilai: "v"},
            {pilihan:"files/gbr2.png",nilai: "a"},
            {pilihan:"files/gbr3.jpg",nilai: "k"},
        ]
    },{
        id:2,
        soal:"2. Sebelum mengerjakan sesuatu, saya biasanya...",
        jawaban: [
            {pilihan:"A. Membaca instruksinya terlebih dahulu",nilai: "v"},
            {pilihan:"B. Mendengarkan instruksi dari orang lain, baru kemudian mengerjakan",nilai: "a"},
            {pilihan:"C. Langsung melakukan uji coba",nilai: "k"},
        ]
    },
    {
        id:2,
        soal:"3. Ketika saya berpergian ke suatu tempat yang baru yang saya lakukan adalah...",
        jawaban: [
            {pilihan:"A. Melihat denah atau peta tujuan",nilai: "v"},
            {pilihan:"B. Bertanya kepada orang lain",nilai: "a"},
            {pilihan:"C. Menggunakan kompas dan mengikutinya",nilai: "k"},
        ]
    },
    {
        id:2,
        soal:"4. Kemampuan yang bisa dan paling saya sukai adalah...",
        jawaban: [
            {pilihan:"A. Menggambar, melukis, atau mewarnai",nilai: "v"},
            {pilihan:"B. Bernyanyi atau bermain alat musik",nilai: "a"},
            {pilihan:"C. Menari dan beladiri",nilai: "k"},
        ]
    },
    {
        id:2,
        soal:"5. Ketika santai atau pada saat hari libur, saya biasanya...",
        jawaban: [
            {pilihan:"A. Membaca buku",nilai: "v"},
            {pilihan:"B. Mendengar musik",nilai: "a"},
            {pilihan:"C. Berolahraga atau bermain",nilai: "k"},
        ]
    },
    {
        id:2,
        soal:"6. Saya mudah mengingat sesuatu dengan cara...",
        jawaban: [
            {pilihan:"A. Melihat sesuatu",nilai: "v"},
            {pilihan:"B. Mendengar sesuatu",nilai: "a"},
            {pilihan:"C. Melakukan sesuatu",nilai: "k"},
        ]
    },
    {
        id:2,
        soal:"7. Saya dapat mengingat teman, karena...",
        jawaban: [
            {pilihan:"A. Penampilan teman tersebut",nilai: "v"},
            {pilihan:"B. Apa yang teman katakan kepada saya",nilai: "a"},
            {pilihan:"C. Melakukan praktik atau simulasi dari pelajaran",nilai: "k"},
        ]
    },
    {
        id:2,
        soal:"8. Saat belajar saya biasanya...",
        jawaban: [
            {pilihan:"A. Membuat catatan atau rangkuman materi",nilai: "v"},
            {pilihan:"B. Menghafal sambil menggunakan suara",nilai: "a"},
            {pilihan:"C. Bagaimana cara teman bergaul kepada saya",nilai: "k"},
        ]
    },
    {
        id:2,
        soal:"9. Ketika saya berbelanja, saya cenderung...",
        jawaban: [
            {pilihan:"A. Membayangkan seperti apa jika pakaian itu saya kenakan ",nilai: "v"},
            {pilihan:"B. Banyak bertanya dan berdiskusi dengan pegawai di toko itu",nilai: "a"},
            {pilihan:"C. Mencoba secara langsung, baru kemudian memutuskan untuk membeli",nilai: "k"},
        ]
    },
    {
        id:2,
        soal:"10. Ketika mempelajari keterampilan baru, saya paling senang...",
        jawaban: [
            {pilihan:"A. Melihat dan memperhatikan apa-apa yang seharusnya saya kerjakan",nilai: "v"},
            {pilihan:"B. Mendiskusikannya dengan guru agar persis sama dengan yang guru instruksikan",nilai: "a"},
            {pilihan:"C. Mencoba dan mengerjakannya sendiri",nilai: "k"},
        ]
    },
];

const elementsoal = document.getElementById("pertanyaan");
const elementjawab = document.getElementById("tombol-jawaban");
const elementnext = document.getElementById("tombolnext");
const elementkembali = document.getElementById("tombolhome");
const elementbutton = document.getElementsByClassName("btn");
const titleElement = document.getElementById("judulutama");
let idxsoalsekarang = 0;
let score = [];
let selectedValue = "";
let state=0;
let namaValue = "";
let kelasValue = "";



function firstpage(){
    resetquizpage();
    elementnext.innerHTML="Selanjutnya";
    elementnext.style.display="block";
    elementkembali.style.display="none";
}

function getInputValues() {
    let inputNama = document.getElementById("nama");
    let inputKelas = document.getElementById("kelas");
  // Get the input values and store them in variable
    namaValue = inputNama.value;
    kelasValue = inputKelas.value;
}


function petunjuk(){
    titleElement.textContent = "Petunjuk Pengerjaan";
    const pertanyaanElement = document.getElementById("pertanyaan");
    pertanyaanElement.textContent = "Baca Petunjuk Berikut Dengan Seksama";
    const tombolJawabanElement = document.getElementById("tombol-jawaban");
    while (tombolJawabanElement.firstChild) {
        tombolJawabanElement.removeChild(tombolJawabanElement.firstChild);
    }
    // Create and append the bullet points with the specified text

    const listpetunjuk = ["1. Tidak ada jawaban yang benar atau salah. Jawablah angket di bawah ini dengan jujur sesuai hati nurani dan keadaanmu.",
    "2.	Jawaban angket tidak mempengaruhi apapun.",
    "3.	Aku jujur, aku tenang, belajarku nyaman."]
    for (let i = 0; i < listpetunjuk.length; i++) {
        const bulletPoint = document.createElement("p");
        bulletPoint.textContent = `${listpetunjuk[i]}`;
        bulletPoint.style.fontSize = "15px";
        bulletPoint.style.marginTop="10px";
        bulletPoint.style.marginBottom="10px";
        tombolJawabanElement.appendChild(bulletPoint);
        
    }
}


function resetquizpage(){
    changeHeaderText();
    replaceButtonsWithForms();
}


function changeHeaderText() {
    const titleElement = document.getElementById("judulutama");
    titleElement.textContent = "Isi Biodata";
    const pertanyaanElement = document.getElementById("pertanyaan");
    pertanyaanElement.textContent = "Isi biodata berikut";
    pertanyaanElement.style.marginBottom = "30px";
}
  

  // Function to remove the buttons and replace them with two forms
function replaceButtonsWithForms() {
  // Remove the buttons with class "btn"
    const buttons = document.getElementsByClassName("btn");
    const tombolJawabanElement = document.getElementById("tombol-jawaban");
    while (tombolJawabanElement.firstChild) {
        tombolJawabanElement.removeChild(tombolJawabanElement.firstChild);
    }

    // Create the first form with label "Nama"
    const formNama = document.createElement("form");
    const labelNama = document.createElement("label");
    labelNama.textContent = "Nama";
    const inputNama = document.createElement("input");

    // Create a div to separate the label and form with margin and percentage width
    const divNama = document.createElement("div");
    divNama.style.display = "flex";
    divNama.style.marginBottom = "20px";

  // Set the width and font-size for label and form
    labelNama.style.width = "20%";
    labelNama.style.fontSize = "18px";
    labelNama.style.padding = "5px"; // Add padding to the label
    inputNama.style.width = "80%";
    inputNama.style.fontSize = "18px";
    inputNama.style.padding = "5px"; // Add padding to the input
    formNama.appendChild(divNama);
    divNama.appendChild(labelNama);
    divNama.appendChild(inputNama);
    tombolJawabanElement.appendChild(formNama);

  // Create the second form with label "Kelas"
    const formKelas = document.createElement("form");
    const labelKelas = document.createElement("label");
    labelKelas.textContent = "Kelas";
    const inputKelas = document.createElement("input");

  // Create a div to separate the label and form with margin and percentage width
    const divKelas = document.createElement("div");
    divKelas.style.display = "flex";
    divKelas.style.marginBottom = "20px";

  // Set the width and font-size for label and form
    labelKelas.style.width = "20%";
    labelKelas.style.fontSize = "18px";
    labelKelas.style.padding = "5px"; // Add padding to the label
    inputKelas.style.width = "80%";
    inputKelas.style.fontSize = "18px";
    inputKelas.style.padding = "5px"; // Add padding to the input

      // Set the border-radius and inner shadow for the input elements
    inputNama.style.borderRadius = "4px";
    inputNama.style.borderColor = "#138496"; // Set the border color
    inputNama.addEventListener("focus", function() {
        inputNama.style.boxShadow = "inset 0 0 3px #7deeff";
    });
    inputNama.addEventListener("blur", function() {
        inputNama.style.boxShadow = "none";
    });  
    inputNama.setAttribute("id", "nama")
    
    inputKelas.style.borderRadius = "4px";
    inputKelas.style.borderColor = "#138496"; // Set the border color
    inputKelas.addEventListener("focus", function() {
        inputKelas.style.boxShadow = "inset 0 0 3px #7deeff";
    });
    inputKelas.addEventListener("blur", function() {
        inputKelas.style.boxShadow = "none";
    });
    inputKelas.setAttribute("id", "kelas")

    formKelas.appendChild(divKelas);
    divKelas.appendChild(labelKelas);
    divKelas.appendChild(inputKelas);
    
    tombolJawabanElement.appendChild(formKelas);

}


function mulai(){
    idxsoalsekarang = 0;
    score = [];
    selectedValue = "";
    elementnext.innerHTML="Selanjutnya";
    titleElement.innerHTML="Pilih Yang Paling Sesuai Dengan Kamu"
    tampilsoal();
}

function tampilsoal(){
    console.log(score)
    resetsoal();
    let soalsekarang = pertanyaan[idxsoalsekarang];
    elementsoal.innerHTML = soalsekarang.soal;
    soalsekarang.jawaban.forEach(jawaban => {
        const button = document.createElement("button");
        const image = document.createElement("img"); // Create an image element
    
        // Check if the jawaban contains an image link
        if (soalsekarang.id == 1) {
          image.src = jawaban.pilihan; // Set the image source
          image.style.Height = "150px";
          image.style.maxWidth = "200px";
          image.style
        //   image.dataset.nilai = jawaban.nilai;
          button.appendChild(image); // Append the image to the button
          button.style.display = "flex";
          button.style.justifyContent = "center";
          button.style.alignItems = "center";
          button.dataset.nilai = jawaban.nilai;
          
        } else {
          button.innerHTML = jawaban.pilihan; // Set the text for non-image options
          button.dataset.nilai = jawaban.nilai;
        }
    
        button.classList.add("btn");
        elementjawab.appendChild(button);
        
        button.addEventListener("click", pilihjawaban);
        
    });

}


function resetsoal(){
    elementnext.style.display = "none";
    while(elementjawab.firstChild){
        elementjawab.removeChild(elementjawab.firstChild); 
    }
}


function pilihjawaban(e) {
    const selectedBtn = e.target.closest(".btn");
    selectedValue = "";
    // Remove the "terklik" class from all buttons to reset the colors
    for (let i = 0; i < elementbutton.length; i++) {
        elementbutton[i].classList.remove("terklik");
        // elementbutton[i].firstChild.classList.remove("terklik");
    }
    // Add the "terklik" class to the clicked button to change its color
    // if (selectedBtn.tagName == 'IMG'){

    // }
    selectedBtn.classList.add("terklik");
    // Get the selected value (nilai) from the clicked button
    selectedValue = selectedBtn.dataset.nilai;
    elementnext.style.display = "block";
    }


function tampilhasil(){
    resetsoal();
    console.log(score)
    const jumlahv = "v";
    const jumlaha = "a";
    const jumlahk = "k";

    let countv = 0;
    for(let i = 0; i < score.length; ++i){
        if(score[i] == jumlahv)
         countv++;
       }
    const nilaiakhirv = countv;

    let counta = 0;
    for(let i = 0; i < score.length; ++i){
        if(score[i] == jumlaha)
         counta++;
       }
    const nilaiakhira = counta;

    let countk = 0;
    for(let i = 0; i < score.length; ++i){
        if(score[i] == jumlahk)
         countk++;
       }
    const nilaiakhirk = countk;

    const totalnilaiakhir = Math.max(nilaiakhirv,nilaiakhira,nilaiakhirk);
    
    let gayabelajar = "";
    if (totalnilaiakhir==nilaiakhira){
        gayabelajar="audio";
    }else if (totalnilaiakhir==nilaiakhirv){
        gayabelajar="visual";
    }else if (totalnilaiakhir==nilaiakhirk){
        gayabelajar="kinestetik";
    }
    console.log(totalnilaiakhir);
    console.log(gayabelajar);
    elementsoal.innerHTML = `Hai ${namaValue} yang kelas ${kelasValue}, Gaya belajar anda adalah ${gayabelajar} `;
    elementnext.innerHTML = "Ulangi";
    elementnext.style.display = "block";
    elementkembali.style.display = "block";
}


function handlenextnya(){
    idxsoalsekarang++;
    if(idxsoalsekarang < pertanyaan.length){
        tampilsoal();
        score.push(selectedValue);
    }else{
        score.push(selectedValue);
        tampilhasil();
        
    }
}


elementnext.addEventListener("click",()=>{
    if(state==2){
        if (idxsoalsekarang < pertanyaan.length){
            handlenextnya();
        }else{
            state=0;
            firstpage();
        }
    }else if (state==1){
        mulai();
        state++;
    }else if (state==0){
        getInputValues();
        petunjuk();
        state++;
    }
})


firstpage();