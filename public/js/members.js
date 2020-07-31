$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
  });

  $(".add-new-rock").click(function () {
    $("#add-rock-form").append(
      `<div class="row">
          <form id="sellerForm" class="col s12">
              <div class="row">
                  <div class="input-field col s6">
                      <input placeholder="Enter the name of the rock!" id="name" type="text" class="validate">
                      <label for="Rock Name">Name of the Rock</label>
                  </div>
              </div>
              <div class="row">
                  <div class="input-field col s6">
                      <input placeholder="Enter the url of the Rock image!" id="image" type="url" class="validate">
                      <label for="url">Image url</label>
                  </div>
              </div>
              <div class="row">
                  <div class="input-field col s6">
                      <i class="material-icons prefix">mode_edit</i>
                      <textarea id="icon_prefix2" class="materialize-textarea" id="desc"></textarea>
                      <label for="icon_prefix2">Rock Description</label>
                  </div>
              </div>
              <a class="sellerSubBtn btn waves-effect waves-light btn-large">Submit
                  <i class="material-icons right">send</i>
              </a>
          </form>
      </div>`
    ); 
  }); 
  addNewRock();

  function addNewRock() {
    $(".sellerSubBtn").click(function () {
      $("#empty-div").append(
        `<div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="https://i.pinimg.com/originals/7b/f2/0f/7bf20f01af1b9fb5c940724892da0e93.jpg">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">Rock example<i class="material-icons right">more_vert</i></span>
          <a class="trade-rock waves-effect waves-light btn-small">Trade rock</a>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">Rock example<i class="material-icons right">close</i></span>
          <p>Here is some more information about this rock that is only revealed once clicked on.</p>
        </div>
      </div>`);
    });
  }
  
  // function addNewRock () {
  //   $("#sellerSubBtn").click(function () {
  //     const name = $("#name").val()? $("#name").val().trim(): "";
  //     const image = $("#image").val()? $("#image").val().trim(): "";
  //     const desc = $("#desc").val()? $("#desc").val().trim(): "";

  //     // if (!name || !image) {
  //     //  return;
  //     //} 

  //     const data = {
  //       name,
  //       image,
  //       desc
  //     };
 
  //     console.log("seller data", data);

  //     $.post(
  //       "/api/rock/sellerData",
  //       data
  //     ).then();
  //     }).catch(sellerdataErr => {
  //       console.log("Error submitting form", sellerdataErr);
  //     });
  //   }

});

