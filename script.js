function box(){
    var doc = document.createElement("div");
    doc.style.boxSizing="border-box";
    doc.style.margin="10px";
    doc.style.padding="10px";
    doc.style.display = "flex";
    doc.style.flexDirection = "row";
    doc.style.flexWrap = "wrap";
    document.body.appendChild(doc);

    var d = document.createElement("div");
    d.style.margin="10px";
    d.style.padding="10px";
    d.innerHTML = "box1";
    d.style.width = "100px";
    d.style.height = "100px";
    d.style.border = "1px solid black";
    doc.appendChild(d);

    var d = document.createElement("div");
    d.style.margin="10px";
    d.style.padding="10px";
    d.innerHTML = "box1";
    d.style.width = "100px";
    d.style.height = "100px";
    d.style.border = "1px solid black";
    doc.appendChild(d);

    var d = document.createElement("div");
    d.style.margin="10px";
    d.style.padding="10px";
    d.innerHTML = "box1";
    d.style.width = "100px";
    d.style.height = "100px";
    d.style.border = "1px solid black";
    doc.appendChild(d);
}