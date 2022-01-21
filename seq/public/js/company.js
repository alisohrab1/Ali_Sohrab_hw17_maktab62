$("#createBtn").click(function (e) {
  e.preventDefault();
  console.log("working");

  const data = {
    name: $("#name").val(),
    registerId: $("#registerId").val(),
    city: $("#city").val(),
    province: $("#province").val(),
    phone: $("#phone").val(),
  };

  console.log(data);

  //validate inputs
    if (data.name === "" || data.registerId === "" || data.city === "" || data.province === "" || data.phone === "") {
      alert("empty input")
      return;
    }

  $.ajax({
    type: "POST",
    url: "http://localhost:5000/company",
    data,
    success: function (response) {
      console.log(response);
      window.location.href = "http://localhost:5000/company";
    },
    error: function (xhr, status, error) {
      alert(xhr.responseText);
    },
  });
});

function profileBtn(id) {
  console.log("edit clicked");
  console.log(id);

  $.ajax({
    type: "GET",
    url: "http://localhost:5000/profile/" + id,
    success: function (response) {
      console.log(response);
      window.location.href = "http://localhost:5000/profile/" + id;
    },
    error: function (xhr, status, error) {
      alert(xhr.responseText);
    },
  });
}

function editBtn(id, n) {
  const data = {
    name: $("#modalname" + n).val(),
    registerId: id,
    city: $("#modalcity" + n).val(),
    province: $("#modalprovince" + n).val(),
    phone: $("#modalphone" + n).val(),
  };

  console.log(data);

  //validate
  if (data.name === "" || data.registerId === "" || data.city === "" || data.province === "" || data.phone === "") {
    alert("empty input")
    return;
  }




  $.ajax({
    type: "PUT",
    url: "http://localhost:5000/company",
    data,
    success: function (response) {
      console.log(response);
      window.location.href = "http://localhost:5000/company";
    },
    error: function (xhr, status, error) {
      alert(xhr.responseText);
    },
  });
}

function deleteBtn(id){
  console.log("button working");
  $.ajax({
    type: "DELETE",
    url: "http://localhost:5000/company/"+ id,
    success: function (response) {
      console.log(response);
      window.location.href = "http://localhost:5000/company";
    },
    error: function (xhr, status, error) {
      alert(xhr.responseText);
    },
  });
}