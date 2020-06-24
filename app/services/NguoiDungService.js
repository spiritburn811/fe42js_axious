function NguoiDungService() {
  this.layDanhSachNguoiDung = function () {
    return axios({
      url: "https://5eea03cdb13d0a00164e407b.mockapi.io/api/NguoiDung",
      method: "GET",
    });
  };
  this.themNguoiDung = function (user) {
    return axios({
      url: "https://5eea03cdb13d0a00164e407b.mockapi.io/api/NguoiDung",
      method: "POST",
      data: user,
    });
  };
  this.xoaNguoiDung = function (index) {
    return axios({
      url: `http://5eea03cdb13d0a00164e407b.mockapi.io/api/NguoiDung/${index}`,
      method: "DELETE",
    });
  };
  this.layThongTinNguoiDung = function (id) {
    return axios({
      url: `https://5eea03cdb13d0a00164e407b.mockapi.io/api/NguoiDung/${id}`,
      method: "GET",
    });
  };
  this.suaNguoiDung = function (id, user) {
    return axios({
      url: `https://5eea03cdb13d0a00164e407b.mockapi.io/api/NguoiDung/${id}`,
      method: "PUT",
      data: user,
    });
  };
}
