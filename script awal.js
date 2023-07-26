const pertanyaan = [
    {
        soal:"2. Sebelum mengerjakan sesuatu, saya biasanya...",
        jawaban: [
            {pilihan:"A. Membaca instruksinya terlebih dahulu",nilai: "v"},
            {pilihan:"B. Mendengarkan instruksi dari orang lain, baru kemudian mengerjakan",nilai: "a"},
            {pilihan:"C. Langsung melakukan uji coba",nilai: "k"},
        ]
    },
    {
        soal:"3. Ketika saya berpergian ke suatu tempat yang baru yang saya lakukan adalah...",
        jawaban: [
            {pilihan:"A. Melihat denah atau peta tujuan",nilai: "v"},
            {pilihan:"B. Bertanya kepada orang lain",nilai: "a"},
            {pilihan:"C. Menggunakan kompas dan mengikutinya",nilai: "k"},
        ]
    },
    {
        soal:"4. Kemampuan yang bisa dan paling saya sukai adalah...",
        jawaban: [
            {pilihan:"A. Menggambar, melukis, atau mewarnai",nilai: "v"},
            {pilihan:"B. Bernyanyi atau bermain alat musik",nilai: "a"},
            {pilihan:"C. Menari dan beladiri",nilai: "k"},
        ]
    },
    {
        soal:"5. Ketika santai atau pada saat hari libur, saya biasanya...",
        jawaban: [
            {pilihan:"A. Membaca buku",nilai: "v"},
            {pilihan:"B. Mendengar musik",nilai: "a"},
            {pilihan:"C. Berolahraga atau bermain",nilai: "k"},
        ]
    },
    {
        soal:"6. Saya mudah mengingat sesuatu dengan cara...",
        jawaban: [
            {pilihan:"A. Melihat sesuatu",nilai: "v"},
            {pilihan:"B. Mendengar sesuatu",nilai: "a"},
            {pilihan:"C. Melakukan sesuatu",nilai: "k"},
        ]
    },
    {
        soal:"7. Saya dapat mengingat teman, karena...",
        jawaban: [
            {pilihan:"A. Penampilan teman tersebut",nilai: "v"},
            {pilihan:"B. Apa yang teman katakan kepada saya",nilai: "a"},
            {pilihan:"C. Melakukan praktik atau simulasi dari pelajaran",nilai: "k"},
        ]
    },
    {
        soal:"8. Saat belajar saya biasanya...",
        jawaban: [
            {pilihan:"A. Membuat catatan atau rangkuman materi",nilai: "v"},
            {pilihan:"B. Menghafal sambil menggunakan suara",nilai: "a"},
            {pilihan:"C. Bagaimana cara teman bergaul kepada saya",nilai: "k"},
        ]
    },
    {
        soal:"9. Ketika saya berbelanja, saya cenderung...",
        jawaban: [
            {pilihan:"A. Membayangkan seperti apa jika pakaian itu saya kenakan ",nilai: "v"},
            {pilihan:"B. Banyak bertanya dan berdiskusi dengan pegawai di toko itu",nilai: "a"},
            {pilihan:"C. Mencoba secara langsung, baru kemudian memutuskan untuk membeli",nilai: "k"},
        ]
    },
    {
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
let idxsoalsekarang = 0;
let score = [];
let selectedValue = "";
let state=0;



function firstpage(){
    resetquizpage();
    elementnext.style.display="block";
    if (state ==1){
        petunjuk();
    }else if (state ==2){
        mulai();
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
    pertanyaanElement.textContent = "";
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
    formNama.appendChild(labelNama);
    formNama.appendChild(inputNama);
    tombolJawabanElement.appendChild(formNama);
  
    // Create the second form with label "Kelas"
    const formKelas = document.createElement("form");
    const labelKelas = document.createElement("label");
    labelKelas.textContent = "Kelas";
    const inputKelas = document.createElement("input");
    formKelas.appendChild(labelKelas);
    formKelas.appendChild(inputKelas);
    tombolJawabanElement.appendChild(formKelas);
  }


function mulai(){
    idxsoalsekarang = 0;
    score = [];
    selectedValue = "";
    elementnext.innerHTML="Next";
    tampilsoal();
}

function tampilsoal(){
    console.log(score)
    resetsoal();
    let soalsekarang = pertanyaan[idxsoalsekarang];
    // let nomorsoal = idxsoalsekarang + 1;
    elementsoal.innerHTML = soalsekarang.soal;
    soalsekarang.jawaban.forEach(jawaban => {
        const button  = document.createElement("button");
        button.innerHTML = jawaban.pilihan;
        button.classList.add("btn");
        elementjawab.appendChild(button);
        button.dataset.nilai = jawaban.nilai;
        button.addEventListener("click", pilihjawaban)
        
    });

}

function resetsoal(){
    elementnext.style.display = "none";
    while(elementjawab.firstChild){
        elementjawab.removeChild(elementjawab.firstChild); 
    }
}

function pilihjawaban(e) {
    const selectedBtn = e.target;
    selectedValue = "";
    // Remove the "terklik" class from all buttons to reset the colors
   
    for (let i = 0; i < elementbutton.length; i++) {
        elementbutton[i].classList.remove("terklik");
    }
  
    // Add the "terklik" class to the clicked button to change its color
    
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
    elementsoal.innerHTML = `Gaya belajar anda adalah ${gayabelajar} `;
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
            firstpage();
        }
    }else if (state==1){
        mulai();
        state++;
    }else if (state==0){
        petunjuk()
        state++;
    }
})



firstpage();