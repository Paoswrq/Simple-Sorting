function sort() {
    var text = document.getElementById("userinput").value;
    let select = document.getElementById("types").value;
    let displaytype = document.getElementById("change").value;
    let list = text.split(/[\s,]+/);

    list = list.map(item => item.trim()).filter(item => item.length > 0);

    if (select === "a-z") {
        list.sort();
    }
    else if (select === "z-a") {
        list.sort().reverse();
    }
    else if (select === "biggest-smallest") {
        list.sort((a, b) => parseFloat(b) - parseFloat(a));
    }
    else if (select === "smallest-biggest") {
        list.sort((a, b) => parseFloat(a) - parseFloat(b));
    }
    else {
        console.log("nothing")
    }

    if (displaytype === "linebreak") {
        document.getElementById("userinput").value = list.join('\n');
    }
    else if (displaytype === "commas") {
        document.getElementById("userinput").value = list.join(', ')
    }
    else {
        document.getElementById("userinput").value = list.join(' ');
    }
}