const getCardInfo = (arr) => {
    arr.toLowerCase();
    const newUl = docu
};

const renderCards = (arr) => {
    
    
return arr.forEach(emp => {
    console.log(emp)
return `<div class="col mb-4">
<div class="card">
    <div class="card-header bg-primary text-white">
        <h5>${emp.getName()}</h5>
        <h5>Role Here</h5>
    </div>
    <div class="card-body bg-light">
        <ul class="list-group">
            <li class="list-group-item">Section 1</li>
            <li class="list-group-item">Section 2</li>
            <li class="list-group-item">Section 3</li>
        </ul>
    </div>
</div>
</div>`
})}


const renderHTML = (arr) => {
    console.log(arr);
return `<!DOCTYPE html>
<html>
    <head>
        <title>Team Profile Generator</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
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