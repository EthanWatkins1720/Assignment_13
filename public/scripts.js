const showComputers = async() => {
    let response;
    let computerJSON;

    try {
        response = await fetch("http://localhost:3000/api/data");
        computerJSON = await response.json();  
    } catch (error) {
        console.log("Error retrieving JSON")
    }

    let computerDiv = document.getElementById("computer-list");

    computerJSON.forEach((computer) => {
        let section = document.createElement("section");
        computerDiv.append(section);
        
        let h3 = document.createElement("h3");
        section.append(h3);
        h3.innerHTML = computer.name;

        let img = document.createElement("img");
        section.append(img);
        img.src= computer.picture;

        let color = document.createElement("p");
        section.append(color);
        color.innerHTML = "Color: " + computer.color;

        let type = document.createElement("p");
        section.append(type);
        type.innerHTML = "Type: " + computer.type;

        let ram = document.createElement("p");
        section.append(ram);
        ram.innerHTML = "RAM: " + computer.ram;

        let featTitle = document.createElement("p");
        section.append(featTitle);
        featTitle.innerHTML = "Features: ";

        let features = document.createElement("ul");
        section.append(features);
        for (feat in computer.features) {
            let feature = document.createElement("li");
            feature.innerText = computer.features[feat];
            features.append(feature);
        }
    });
};

window.onload = () => {
    showComputers();
}