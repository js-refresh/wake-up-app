// const qotd_url = "https://favqs.com/api/qotd";
// async function getapi(url) {
//     //store response
//     const response = await fetch(url);
//     //store data in JSON form
//     var data = await response.JSON();
//     console.log(data);
//     if(response) {
//         hideloader();
//     }
//     show(data);
// }
// console.log(getapi(qotd_url));

// function hideloader() {
//     document.getElementById('loading').style.display = 'none';
// }

// function show() {
//     let qotd = `<p>    </p>`
// }

// for (let q of qotd) {
//     qotd = `<p>${q.text}</p>`
// }

// document.getElementById("quote").innerHTML = qotd;

fetch(
    "https://favqs.com/api/qotd"
  )
    .then(response => response.json())
    .then(data => {
        let quote = data.quote.body;
        let author = data.quote.author;
        document.getElementById("motivation").innerHTML = `Quote of the Day: <br> <br>"${quote}" 
        <br> -${author}`

    })
    .catch(error => alert("error"));

// fetch(
//     "https://favqs.com/api/qotd"
//     )
//     .then(response => response.json())
//     .then(data => {
//         let author = data.quote.author;
//         document.getElementById("author").innerHTML = author
//     })
//     .catch(error => alert("error"));







    // fetch("https://favqs.com/api/qotd").then((response) => {
    //     console.log(response.body);
    //   });





// $.getJSON("https://favqs.com/api/qotd", function(json) {
//     console.log(json);
// }


// $(document).ready(() => {
//     function getJoke() {
//         return $.ajax({
//             url: "https://icanhazdadjoke.com/",
//             headers: {
//                 Accept: "application/json"
//             }
//         })
//             .then((data) => {
//                 return data.joke;
//             })
//             .catch((error) => {
//                 return "There was an error, please try again";
//             });
//     }