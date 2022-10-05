// image upload
const fileSelect = document.getElementById("fileSelect"),
    fileElem = document.getElementById("fileElem"),
    fileList = document.getElementById("fileList");

fileSelect.addEventListener("click", (e) => {
    if (fileElem) {
        fileElem.click();
    }
    e.preventDefault(); // prevent navigation to "#"
}, false);

fileElem.addEventListener("change", handleFiles, false);

function handleFiles() {
    if (!this.files.length) {
        fileList.innerHTML = "<p>No files selected!</p>";
    } else {
        fileList.innerHTML = "";
        // const list = document.createElement("ul");
        // fileList.appendChild(list);
        for (let i = 0; i < this.files.length; i++) {
            // const li = document.createElement("li");
            // list.appendChild(li);

            const img = document.createElement("img");
            img.src = URL.createObjectURL(this.files[i]);
            // img.src = URL.createObjectURL(this.file[0]);
            img.height = 150;
            img.style.aspectRatio = 1 / 1;


            img.onload = () => {
                    URL.revokeObjectURL(this.src);
                }
                // li.appendChild(img);
            fileList.appendChild(img);

            const info = document.createElement("span");
            // info.innerHTML = `${this.files[i].name}: ${this.files[i].size} bytes`;
            // li.appendChild(info);
        }
    }
}





// Image and education
function educationtoggle() {
    document.getElementById('education-form').style.display = "block"
    document.getElementById('education-form').classList.toggle('active');
}

var educ_count = 0;

function AddEducation() {
    let institution = document.getElementById("insititution")
    let award = document.getElementById("award")
    let date = document.getElementById("date").value.split("-")
    let educ = document.getElementById("educ_bg")
    let educ_id = "education " + educ_count;

    let year = date[0]
    let month = date[1]

    alert("add record")
    let html = `<div class="event" id="` + educ_id + `">
                    <div class="left-event">
                        <h3>` + year + `</h3>
                        <span>Month - ` + month + `</span>
                    </div>
                    <div class="right-event">
                        <h4>` + award.value + `</h4>
                        <p>` + institution.value + `</p>
                        <input type="button" value="delete" onclick = "document.getElementById('` + educ_id + `').style.display = 'none'">
                    </div>


                </div>`
    educ.insertAdjacentHTML("afterbegin", html)
    date.value = ""
    institution.value = ""
    award.value = ""
        //hide the drop down
    document.getElementById('education-form').classList.toggle('active');
    document.getElementById('education-form').style.display = "none"

    educ_count++;

}
var hobbie_count = 0

function AddHobby() {
    var hobby = document.getElementById("hobbie name")
    if (hobby.value.trim() == "") {
        alert("please input in the hobby name")
    } else {
        let html = `<div id='hobbie` + hobbie_count + `' >
                    <a href="#"><span>` + hobby.value + `</span>  </a>
                    <input type="button" value="delete" onclick="document.getElementById('hobbie` + hobbie_count + `').style.display = 'none'">
                    </div>`

        document.getElementById("Hobbies").insertAdjacentHTML('afterbegin', html)
        hobbie_count++;
    }
}