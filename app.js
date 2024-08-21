let url = "http://universities.hipolabs.com/search?country=";

let btn = document.querySelector("button");

btn.addEventListener("click", async() => {
    let country = document.querySelector("input").value;
    console.log(country);

    let uniArr = await getUniversities(country);
    show(uniArr);

});

function show(uniArr) {
    let list = document.querySelector("#list");
    list.innerHTML = "";  // clear the list before adding new ones
    for(uni of uniArr) {
        console.log(uni.name);
        // create li element and append to ul element  (list)  -- this is the DOM manipulation part.
        let li = document.createElement("li");
        li.innerText = uni.name;
        list.appendChild(li);
    }
}

async function getUniversities(country) {
    try{
        let res = await axios.get(url + country);
        return res.data;
    }
    catch(err){
        console.error("Error: ", err);
        return [];
    }
}