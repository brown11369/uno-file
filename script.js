let file = document.getElementById("inputfolder");
let tbody = document.getElementById("tbody")
let table = document.getElementById("table")
let alerttext = document.getElementById("alert")
let box = document.getElementById("box")
let data



file.addEventListener("change", () => {
    data = [...file.files]
    table.style.display = "flex"
    alerttext.style.display = "none"

    data = data.sort((a, b) => {
        if (a.name.split(".")[1] < b.name.split(".")[1])
            return -1;
        if (a.name.split(".")[1] > b.name.split(".")[1])
            return 1;
        return 0;
    });



    data.forEach(element => {
        console.log(element)

        let tr = document.createElement("tr")
        let fileName = document.createElement("td")
        let fileSize = document.createElement("td")
        let actionInfo = document.createElement("td")
        let btn = document.createElement("button")
        btn.title = `${element.name.split(".")[0]} ${element.name.split(".")[1]} ${element.size} ${element.lastModifiedDate}`
        btn.append("Info")
        btn.addEventListener("mouseover", dibox)
        function dibox() {
            box.innerHTML = `<p> <strong>File Name : </strong> ${element.name}</p>
        <p> <strong>File Type : </strong>${element.type}</p>
        <p> <strong>File Size : </strong>${formatSizeUnits(element.size)}</p>
        <p> <strong>File Modified : </strong>${element.lastModifiedDate}</p>
        <p> <strong>File Path : </strong>${element.webkitRelativePath}</p>`
        }


        fileName.append(element.name.split(".")[0])

        fileSize.append(formatSizeUnits(element.size))

        actionInfo.append(btn)
        tr.append(fileName, fileSize, actionInfo)
        tbody.append(tr)

    });



})




function formatSizeUnits(bytes) {
    if (bytes >= 1073741824) { bytes = (bytes / 1073741824).toFixed(2) + " GB"; }
    else if (bytes >= 1048576) { bytes = (bytes / 1048576).toFixed(2) + " MB"; }
    else if (bytes >= 1024) { bytes = (bytes / 1024).toFixed(2) + " KB"; }
    else if (bytes > 1) { bytes = bytes + " bytes"; }
    else if (bytes == 1) { bytes = bytes + " byte"; }
    else { bytes = "0 bytes"; }
    return bytes;
}
