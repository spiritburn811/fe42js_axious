var nguoiDungService = new NguoiDungService();

function getEle(id) {
  return document.getElementById(id);
}

function getEleClass(classname) {
  return document.getElementsByClassName(classname);
}

function getListUser() {
  nguoiDungService
    .layDanhSachNguoiDung()
    .then(function (result) {
      renderTable(result.data);
    })
    .catch(function (err) {
      console.log(err);
    });
}
getListUser();
function renderTable(mang) {
  var tbody = getEle("tblDanhSachNguoiDung");
  var contentHTML = "";
  mang.forEach(function (item, index) {
    contentHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${item.taiKhoan}</td>
            <td>${item.hoTen}</td>
            <td>${item.matKhau}</td>
            <td>${item.email}</td>
            <td>${item.soDT}</td>
            <td>${item.maLoaiNguoiDung}</td>
            <td>
                <button class = "btn btn-info" data-toggle="modal"
                data-target="#myModal" onclick="editUser('${
                  item.id
                }')">Sua</button>
                <button class = "btn btn-danger" onclick = "deleteUser('${
                  item.id
                }')">Xoa</button>
            </td>
        </tr>
        `;
  });
  tbody.innerHTML = contentHTML;
}

getEle("btnThemNguoiDung").addEventListener("click", function () {
  var footer =
    "<button class = 'btn btn-success' onclick='addUser()'>Add User</button>";
  getEleClass("modal-footer")[0].innerHTML = footer;
  getEleClass("modal-header")[0].innerHTML = "Add User";
});

function addUser() {
  var taiKhoan = getEle("TaiKhoan").value;
  var hoTen = getEle("HoTen").value;
  var matKhau = getEle("MatKhau").value;
  var email = getEle("Email").value;
  var soDT = getEle("SoDienThoai").value;
  var loai = getEle("loaiNguoiDung").value;

  var nguoiDung = new NguoiDung(taiKhoan, hoTen, matKhau, email, soDT, loai);
  nguoiDungService
    .themNguoiDung(nguoiDung)
    .then(function (result) {
      getListUser();
    })
    .catch(function (err) {
      console.log(err);
    });
}

function deleteUser(id) {
  nguoiDungService
    .xoaNguoiDung(id)
    .then(function (result) {
      getListUser();
    })
    .catch(function (err) {
      console.log(err);
    });
}
function editUser(id) {
  var footer = `<button class = 'btn btn-success' onclick="updateUser('${id}')">Update</button>`;
  getEleClass("modal-footer")[0].innerHTML = footer;
  getEleClass("modal-header")[0].innerHTML = "Update User";
  console.log(id);
  nguoiDungService
    .layThongTinNguoiDung(id)
    .then(function (result) {
      getEle("TaiKhoan").value = result.data.taiKhoan;
      getEle("HoTen").value = result.data.hoTen;
      getEle("MatKhau").value = result.data.matKhau;
      getEle("Email").value = result.data.email;
      getEle("SoDienThoai").value = result.data.soDT;
      getEle("loaiNguoiDung").value = result.data.maLoaiNguoiDung;
    })
    .catch(function (err) {
      console.log(err);
    });
}
function updateUser(id) {
  var taiKhoan = getEle("TaiKhoan").value;
  var hoTen = getEle("HoTen").value;
  var matKhau = getEle("MatKhau").value;
  var email = getEle("Email").value;
  var soDT = getEle("SoDienThoai").value;
  var maLoaiNguoiDung = getEle("loaiNguoiDung").value;

  var user = new NguoiDung(
    taiKhoan,
    hoTen,
    matKhau,
    email,
    soDT,
    maLoaiNguoiDung
  );

  nguoiDungService
    .suaNguoiDung(id, user)
    .then(function (result) {
      getListUser();
    })
    .catch(function (err) {
      console.log(err);
    });
}

function themNguoiDung() {
  console.log("add");
}
