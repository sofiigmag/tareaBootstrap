console.log("Hola desde un script externo")

function changeColorTo(color){
    const refName = getReferenceFullName();
    refName.style.color= color;
}

function getReferenceFullName(){
    return document.getElementById("fullname");
}

function changeColorParagraph(color, refObj){
    console.log(refObj);
    refObj.style.color= color;
}

function resetColors(color){
    const refObjs = document.getElementsByClassName("text-color");
    console.log(refObjs);
    for (let index = 0; index < refObjs.length; index++) {
        const element = refObjs[index];
        element.style.color ="blueviolet";   
    }
}