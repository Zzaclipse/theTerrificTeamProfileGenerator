function addManagerString(obj) {
  return `
  <div class="card text-center" style="width: 15rem">
          <div class="card-body">
            <div class="card-header">
              <h5 class="card-title">${obj.getName()}</h5>
              <h6 class="card-subtitle"><i class="fa-solid fa-mug-hot"></i> ${obj.getRole()}</h6>
            </div>
            <br />
            <ul class="list-group list-group-flush text-left">
              <li class="list-group-item">ID: ${obj.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${obj.getEmail()}">${obj.getEmail()}</a></li>
              <li class="list-group-item">Office Number: ${obj.getOfficeNumber()}</li>
            </ul>
          </div>
        </div>
  
  `;
}

function addEngineerString(obj) {
  return `
  <div class="card text-center" style="width: 15rem">
          <div class="card-body">
            <div class="card-header">
              <h5 class="card-title">${obj.getName()}</h5>
              <h6 class="card-subtitle"><i class="fa-solid fa-glasses"></i> ${obj.getRole()}</h6>
            </div>
            <br />
            <ul class="list-group list-group-flush text-left">
              <li class="list-group-item">ID: ${obj.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${obj.getEmail()}">${obj.getEmail()}</a></li>
              <li class="list-group-item">Github: <a href="https://github.com//${obj.getGithub()}">${obj.getGithub()}</a></li>
            </ul>
          </div>
        </div>
  
  `;
}

function addInternString(obj) {
  return `
  <div class="card text-center" style="width: 15rem">
          <div class="card-body">
            <div class="card-header">
              <h5 class="card-title">${obj.getName()}</h5>
              <h6 class="card-subtitle"><i class="fa-solid fa-graduation-cap"></i> ${obj.getRole()}</h6>
            </div>
            <br />
            <ul class="list-group list-group-flush text-left">
              <li class="list-group-item">ID: ${obj.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${obj.getEmail()}">${obj.getEmail()}</a></li>
              <li class="list-group-item">School: ${obj.getSchool()}</li>
            </ul>
          </div>
        </div>
  
  `;
}

function addTeam(arr) {
  let teamString = ``;
  arr.forEach((teamMemberObj) => {
    if (teamMemberObj.getRole() === "Manager") {
      teamString += addManagerString(teamMemberObj);
    }
    if (teamMemberObj.getRole() === "Engineer") {
      teamString += addEngineerString(teamMemberObj);
    }
    if (teamMemberObj.getRole() === "Intern") {
      teamString += addInternString(teamMemberObj);
    }
  });
  return teamString;
}

function pageTemplate(arr) {
  return `
 
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="../assets/css/style.css" />

    <title>My Team</title>

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    />
  </head>

  <body>
    <div id="title" class="text-center">My Team</div>

    <div class="row">
      <div class="col-2"></div>
      <div id="addCardsHere" class="col-8 text-center">
      ${addTeam(arr)}
      </div>
      <div class="col-2"></div>
    </div>
  </body>
</html>

`;
}

module.exports = pageTemplate;
