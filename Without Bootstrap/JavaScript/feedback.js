/* solution by Nimesha Madhuwanthi @group 7 */

const btn = document.querySelector("#submit");

btn.onclick = function () {
    let name = document.getElementById("name").value.trim();
    let position = document.getElementById("position").value.trim();
    let company = document.getElementById("company").value.trim();
    let msg = document.getElementById("feedback-msg").value.trim();

    if (name !== "" && position !== "" && company !== "" && msg !== "") {
        let new_div = document.createElement('div');
        let new_name = document.createElement('p');
        let new_position = document.createElement('p');
        let new_company = document.createElement('p');
        let new_msg = document.createElement('p');

        new_div.className = "box-bkg";
        new_name.className = "name font-default color-gray";
        new_company.className = "company font-default color-gray";
        new_msg.className = "review font-default";
        new_position.className = "position font-default color-gray";

        new_name.innerText = "-" + name + "-";
        new_company.innerText = company;
        new_msg.innerText = msg;
        new_position.innerText = position;

        new_div.appendChild(new_msg);
        new_div.appendChild(new_name);
        new_div.appendChild(new_position);
        new_div.appendChild(new_company);

        let _parent = document.getElementById("view-feedback");
        let nxt = document.querySelector("#view-feedback div");

        _parent.insertBefore(new_div, nxt);

        document.getElementById("success-msg").style.display = "block"; /// pop up active
    }

}

document.getElementById("cross").onclick = function(){
    document.getElementById("success-msg").style.display = "none";
} ///close pop up 