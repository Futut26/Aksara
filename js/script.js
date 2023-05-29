const theme = document.querySelector('[data-bs-theme="light"]');
const btnTema = document.getElementById('mode');
let isDark = false;
function toggleTheme() {
  isDark = !isDark;
  if (isDark) {
    theme.setAttribute('data-bs-theme', 'dark');
  } else {
    theme.setAttribute('data-bs-theme', 'light');
  }
}

function formLogin() {
  $('#myModalContainer').load('components/form_login.html', function () {
    $('#exampleModal').modal('show'); // Menampilkan modal setelah konten dimuat
  });
}

function formRegister() {
  $('#myModalContainer').load('components/register.html', function () {
    $('#exampleModal').modal('show'); // Menampilkan modal setelah konten dimuat
  });
}

function formPay() {
  $('#myModalContainer').load('components/formPay.html', function () {
    $('#exampleModal').modal('show'); // Menampilkan modal setelah konten dimuat
  });
}

function loadNav() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('navbar').innerHTML = this.responseText;
    }
  };
  xhttp.open('GET', 'components/navbar.html', true);
  xhttp.send();
}

function loadHeader() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('header-slide').innerHTML = this.responseText;
    }
  };
  xhttp.open('GET', 'components/header.html', true);
  xhttp.send();
}

function loadSearch() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('search').innerHTML = this.responseText;
    }
  };
  xhttp.open('GET', 'components/search.html', true);
  xhttp.send();
}

function loadSection1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('section-1').innerHTML = this.responseText;
    }
  };
  xhttp.open('GET', 'components/home/section-1.html', true);
  xhttp.send();
}

function loadProduct() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('product').innerHTML = this.responseText;
    }
  };
  xhttp.open('GET', 'components/product.html', true);
  xhttp.send();
}
function loadSection2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('section-2').innerHTML = this.responseText;
    }
  };
  xhttp.open('GET', 'components/home/section-2.html', true);
  xhttp.send();
}

function loadPage(file) {
  // membuat objek XMLHttpRequest
  let xhttp = new XMLHttpRequest();

  // menetapkan callback function saat permintaan AJAX selesai
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // mengambil isi file HTML lain
      document.getElementById('main').innerHTML = this.responseText;
    }
  };

  // membuat permintaan AJAX untuk file HTML lain
  xhttp.open('GET', file, true);
  xhttp.send();
}