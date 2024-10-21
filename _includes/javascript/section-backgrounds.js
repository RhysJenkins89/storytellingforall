const sectionElements = document.getElementsByTagName("section");

console.log("sections", sectionElements);

if (sectionElements) {
    Array.from(sectionElements).forEach((element, index) => {
        if (index % 2 === 1) {
            element.style.backgroundColor = "#f2f2f2";
        }
    });
}

console.log("sections");
