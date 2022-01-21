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
  //   if (!(validateInputs())) {
  //     return;
  //   }

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

function editBtn(id) {
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
