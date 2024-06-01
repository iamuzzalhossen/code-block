let codeBox = document.getElementById("codeExample");
let formattedText = codeBox.value.trim().split('\n').map(line => line.trim()).join('\n');
codeBox.value = formattedText;

function copyCode(){
    codeBox.select();

    navigator.clipboard.writeText(codeBox.value)
        .then(() =>{
            document.querySelector("button").innerHTML = `<img src=images/check-icon.png class="icon"> Copied!`;
        })
        .catch(error =>{
            document.querySelector("button").innerHTML = "Error! Try again";
        });
}