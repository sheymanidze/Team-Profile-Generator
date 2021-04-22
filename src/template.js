


const generateHTML = (personInput) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Team Profile</title>
  <link rel="stylesheet" href="../dist/styles.css">
</head>
<body>
 <div class = "container">
   <header class= "header">
    <h1> My Team </h1>
   </header
    <div class ="main">${roleSection(personInput)}</div>
  </div>
  <script src="https://kit.fontawesome.com/0cb0e7b636.js" crossorigin="anonymous"></script>
</body>
 
</html>`;



module.exports = generateHTML;


const roleSection = (personInput) => {
  console.log('array', personInput)

  let prints = '';

  for (let i = 0; i < personInput.length; i++)

    if (personInput.role === 'Engineer') {

      prints +=

        `
      <figure class ="card">
        <div class = "card-header">
         <h3 class ="name"> ${personInput[i].name}</h3>
         <h5 class ="role"><i class = "fas fa-mug-hot"></i> ${personInput[i].role}</h5>
        </div>
        <figcaption class="card-body">
          <ul class = "data">
             <li class = "card-info card-id"> ID: ${personInput[i].id}</li>
             <li class = "card-info card-email"> Email: <a    href="mailto: ${personInput[i].email}">
            ${personInput[i].email} </a>
            </li>
            <li class="card-info card-github">GitHub: <a href = "https://github.com/${personInput[0].gitHub}" target="blank"> ${personInput[0].gitHub}</a></li>
          </ul>
       </figcaption>
       </figure>
      `;

    }


}


{/* <figure class ="card">
     <div class = "card-header">
       <h3 class ="name"> ${personInput[0].name}</h3>
       <h5 class ="role"><i class = "fas fa-mug-hot"></i> ${personInput[0].role}</h5>
     </div>

   <figcaption class="card-body">
     <ul class = "data">
       <li class = "card-info card-id"> ID: ${personInput[0].id}</li>
       <li class = "card-info card-email"> Email: <a   href="mailto: ${personInput[0].email}">
        ${personInput[0].email} </a>
        </li>
     
      </ul>
    </figcaption>
   </figure>   */}