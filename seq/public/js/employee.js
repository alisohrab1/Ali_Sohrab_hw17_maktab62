$("#createBtn").click(function (e) {
  e.preventDefault();
  console.log("working");

  const data = {
    firstName: $("#fname").val(),
    lastName: $("#lname").val(),
    nationalId: $("#nationalId").val(),
    phone: $("#phone").val(),
    gender: $("#gender").val(),
    id: $("#id").val(),
  };

  console.log(data);

  //validate inputs
  if(data.firstName === "" || data.lastName === "" || data.nationalId === "" || data.phone === "" || data.gender === ""){
    alert("empty input");
    return;
  }


  $.ajax({
    type: "POST",
    url: "http://localhost:5000/employee",
    data,
    success: function (response) {
      // alert("success");
      // console.log(response);
      window.location.href = "http://localhost:5000/profile/" + data.id ;
    },
    error: function (xhr, status, error) {
      alert(xhr.responseText);
    },
  });
});

function editBtn(id,n,pageid) {
  console.log("edit clicked");
  console.log(id);
  console.log(pageid);
  const data = {
    pageid:pageid,
    firstName: $("#modalfname" + n).val(),
    lastName: $("#modalLname" + n).val(),
    nationalId: id,
    gender: $("#modalGender" + n).val(),
    phone: $("#modalphone" + n).val()
  };
  console.log(data);
  if(data.firstName === "" || data.lastName === "" || data.nationalId === "" || data.phone === "" || data.gender === ""){
    alert("empty input");
    return;
  }

 


  $.ajax({
    type: "PUT",
    url: "http://localhost:5000/employee",
    data,
    success: function (response) {
      // alert("success");
      // console.log(response);
      location.reload();
  
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
    url: "http://localhost:5000/employee/"+ id,
    success: function (response) {
      console.log(response);
      location.reload();
    },
    error: function (xhr, status, error) {
      alert(xhr.responseText);
    },
  });
}