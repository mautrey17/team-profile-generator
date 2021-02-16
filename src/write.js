const getCardInfo = (arr) => {
    arr.toLowerCase();
    const newUl = docu
};

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
                        <ul class="list-group">
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
                        <ul class="list-group">
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
                        <ul class="list-group">
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






//         testarr.push(`<div class="col mb-4">
// <div class="card">
//     <div class="card-header bg-primary text-white">
//         <h5>${arr[i].getName()}</h5>
//         <h5>${arr[i].getRole()}</h5>
//     </div>
//     <div class="card-body bg-light">
//         <ul class="list-group">
//             <li class="list-group-item">${arr[i].getId()}</li>
//             <li class="list-group-item">${arr[i].getEmail()}</li>
            
//         </ul>
//     </div>
// </div>
// </div>`)
    }
    return testarr.join('')
{/* <li class="list-group-item">${arr[i].getOffice()}</li> */}

// arr.forEach(emp => {
//     console.log(emp)
// return `<div class="col mb-4">
// <div class="card">
//     <div class="card-header bg-primary text-white">
//         <h5>${emp.getName()}</h5>
//         <h5>Role Here</h5>
//     </div>
//     <div class="card-body bg-light">
//         <ul class="list-group">
//             <li class="list-group-item">Section 1</li>
//             <li class="list-group-item">Section 2</li>
//             <li class="list-group-item">Section 3</li>
//         </ul>
//     </div>
// </div>
// </div>`
// })}
}

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
    </head>
    <body>
        <header >
            <h1 class="m-5 text-center">My Team</h1>
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