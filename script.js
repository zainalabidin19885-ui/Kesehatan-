function prosesLogin() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const errorMsg = document.getElementById("pesan-error");

    // Validasi Ketat: Username 9071 dan Sandi 1235
    if (user === "9071" && pass === "1235") {
        // Sembunyikan login, tampilkan konten
        document.getElementById("login-page").style.display = "none";
        document.getElementById("content-page").style.display = "block";
        
        // Ubah tampilan body agar konten mulai dari atas
        document.body.style.backgroundColor = "white"; 
        document.body.style.display = "block"; 
    } else {
        // Jika salah, tampilkan pesan error
        errorMsg.style.display = "block";
        errorMsg.innerText = "Akses Ditolak!";
        
        // Reset input sandi jika salah untuk keamanan
        document.getElementById("password").value = "";
    }
}
