getApiOne();
getApiTwo();
getApiThree();

function getApiOne() {
    const apiEndpoint = "https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number";

    fetch(apiEndpoint)

    .then((response) => {
        if (!response.ok) {
            throw new Error("Couldn't find api endpoint");
        } else {
            return response.json();
        }
    })
    .then((data) => {
        //console.log(data);

        rawData = data;
        displayData(rawData);
    })
    .catch((error) => {
        console.error(error);
    })
}

function displayData(rawData) {
    const newData = rawData.data;
    console.log(newData);
    const dataHere = document.getElementById('resultsOne');
    newData.forEach((array) => {
        //console.log(`title: ${array.title}, Display: ${array.artist_display}, ${array.date_display}`);
       
        let textHTML = `<h3>${array.title}</h3>
        <img src="" alt="${array.artist_display}">
        <p>date: ${array.date_display}</p><hr>`;

        dataHere.innerHTML += textHTML;
    })
}

function getApiTwo() {
    const apiEndpoint = "https://api.spaceflightnewsapi.net/v3/blogs";
    
    fetch(apiEndpoint)

    .then((response) => {
        if (!response.ok) {
            throw new Error("Couldn't find api endpoint");
        } else {
            return response.json();
        }
    })
    .then((data) => {
        //console.log(data);

        rawData = data;
        displaySpaceFlightBlogData(rawData);
    })
    .catch((error) => {
        console.error(error);
    })
}

function displaySpaceFlightBlogData(rawData) {
    console.log(rawData);
    const dataHere = document.getElementById('resultsTwo');
    rawData.forEach((blog) => {
        let textHTML = `<h3>${blog.title}</h3>
        <p>${blog.summary}</p>
        <img src="${blog.imageUrl}" alt="blog-image">
        <p>Published: ${blog.publishedAt}</p>
        <a href="${blog.url}">Source</a><hr>`;

        dataHere.innerHTML += textHTML;
    });
    
}


function getApiThree() {
    const apiEndpoint = "https://date.nager.at/api/v3/PublicHolidays/2023/DK";
    
    fetch(apiEndpoint)

    .then((response) => {
        if (!response.ok) {
            throw new Error("Couldn't find api endpoint");
        } else {
            return response.json();
        }
    })
    .then((data) => {
        //console.log(data);
        
        displayHolidays(data);
    })
    .catch((error) => {
        console.error(error);
    })
}

function displayHolidays(data) {
    console.log(data);
    const dataHere = document.getElementById('resultsThree');
    const holidayIMG = "https://img.freepik.com/free-photo/dramatic-white-clouds-blue-sky-from-airplane-window-view-colorful-sunset-cloudscape-background_90220-1208.jpg";
    data.forEach((holiday) => {
        let textHTML = `<h3>${holiday.localName}</h3>
        <img src="${holidayIMG}" alt="holiday-image">
        <p>${holiday.countryCode} ${holiday.date}</p><hr>`;

        dataHere.innerHTML += textHTML;
    });
    
}