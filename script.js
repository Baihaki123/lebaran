const Iya = document.querySelector(".button");
const Text = document.getElementById("text");
const Image = document.querySelector("#image-gif");

Iya.addEventListener("click", function () {
    Iya.value = parseInt(Iya.value) + 1;
    Text.classList.remove('text-animate');

    if (Iya.value == 1) {
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "Hallo ini saya Aski";
        Text.classList.add('text-animate');
    }else if (Iya.value == 2) {
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "Saya dan segenap keluarga";
        Text.classList.add('text-animate');
    }else if (Iya.value == 3) {
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "Mohon maaf jika ada salah";
        Image.setAttribute("src", "https://c.tenor.com/uygoMR-ATWgAAAAj/happy-ied-mubarak-ied-mubarak.gif");
        Text.classList.add('text-animate');
    }else if (Iya.value == 4) {
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "Berbuat khilaf adalah sifat";
        Text.classList.add('text-animate');
    }else if (Iya.value == 5) {
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "Meminta maaf adalah kewajiban";
        Text.classList.add('text-animate');
    }else if (Iya.value == 6) {
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "Dan kembalinya fitrah adalah tujuan";
        Text.classList.add('text-animate');
    }else if (Iya.value == 7) {
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "Dalam kerendahan hati, ada ketinggian budi";
        Text.classList.add('text-animate');
    }else if (Iya.value == 8) {
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "Dalam kemiskinan harta, ada kekayaan jiwa";
        Text.classList.add('text-animate');
    }else if (Iya.value == 9) {
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "Hidup ini terasa indah jika ada maaf";
        Text.classList.add('text-animate');
    }else if (Iya.value == 10) {
        Image.setAttribute("src", "https://c.tenor.com/T_16HTs34x4AAAAj/taqabbal-allahu-minna-wa-minkum-accept-god-with-us-and-you.gif");
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "?????????????????? ?????????????? ???????????? ???????????????????? ???? ?????????????????? ?????? ???????????????? <br> Taqabbalallahu Minna Wa Minkum";
        Text.classList.add('text-animate');
    }else if (Iya.value == 11) {
        Image.setAttribute("src", "https://c.tenor.com/57JSPYRo0k8AAAAj/lebaran-selamat-lebaran.gif");
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "Selamat hari raya Idul Fitri 1443 Hijriah";
        Text.classList.add('text-animate');
        Iya.remove();
    }
});