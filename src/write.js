//function to generate employee cards
const renderCards = (arr) => {
    const testarr = [];
    for(let i=0; i < arr.length; i++){
        switch(arr[i].getRole()){
            case 'Manager':
                testarr.push(`<div class="col mb-4">
                <div class="card">
                    <div class="card-header bg-primary text-white">
                        <h5>${arr[i].getName()}</h5>
                        <h5><i class="fas fa-coffee"></i> ${arr[i].getRole()}</h5>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group mt-3 mb-3">
                            <li class="list-group-item">ID: ${arr[i].getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${arr[i].getEmail()}">${arr[i].getEmail()}</a></li>
                            <li class="list-group-item">Office Number: ${arr[i].getOffice()}</li>
                        </ul>
                    </div>
                </div>
                </div>`)
                break;
            case 'Engineer':
                testarr.push(`<div class="col mb-4">
                <div class="card">
                    <div class="card-header bg-primary text-white">
                        <h5>${arr[i].getName()}</h5>
                        <h5><i class="fas fa-glasses"></i> ${arr[i].getRole()}</h5>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group mt-3 mb-3">
                            <li class="list-group-item">ID: ${arr[i].getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${arr[i].getEmail()}">${arr[i].getEmail()}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${arr[i].getGithub()}" target="_blank">${arr[i].getGithub()}</a></li>
                        </ul>
                    </div>
                </div>
                </div>`)
                break;
            case 'Intern':
                testarr.push(`<div class="col mb-4">
                <div class="card">
                    <div class="card-header bg-primary text-white">
                        <h5>${arr[i].getName()}</h5>
                        <h5><i class="fas fa-user-graduate"></i> ${arr[i].getRole()}</h5>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group mt-3 mb-3">
                            <li class="list-group-item">ID: ${arr[i].getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${arr[i].getEmail()}">${arr[i].getEmail()}</a></li>
                            <li class="list-group-item">GitHub: ${arr[i].getSchool()}</li>
                        </ul>
                    </div>
                </div>
                </div>`)
                break;
            default:
                break;
        }
    }
    return testarr.join('')
}

//function to generate full document
const renderHTML = (arr) => {
    console.log(arr);
return `<!DOCTYPE html>
<html>
    <head>
        <title>Team Profile Generator</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"/>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header class="mb-5">
            <h1 class="text-center">My Team</h1>
        </header>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3 justify-content-center">
                
                ${renderCards(arr)}

            </div>    
        </div>
    </body>
</html>`}

module.exports = {
    renderHTML: renderHTML,
    renderCards: renderCards,
}