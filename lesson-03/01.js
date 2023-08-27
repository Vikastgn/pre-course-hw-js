const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    return flagColor=colors.filter(color => color ==="черный" || color ==="желтый" || color ==="красный").join('-')
   
}

console.log(createColorString());
