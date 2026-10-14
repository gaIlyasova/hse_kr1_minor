change = document.getElementById("change")
change.addEventListener("click", change_all)
function change_all() {
    if (document.getElementsByTagName('p')[1].innerHTML === "Ильясова") {
        document.getElementsByTagName('p')[1].innerHTML = "Iliasova"
        document.getElementsByTagName('p')[2].innerHTML = "Gulfinaz"
        document.getElementsByTagName('p')[3].innerHTML = "Albertovna"
        document.getElementsByTagName('p')[4].innerHTML = "F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 12.10.2007"
        document.body.style.backgroundImage = "url('./images/foreignpassport_template.jpg')"
    }

    else
        if (document.getElementsByTagName('p')[1].innerHTML === "Iliasova") {
            document.getElementsByTagName('p')[1].innerHTML = "Ильясова"
            document.getElementsByTagName('p')[2].innerHTML = "Гульфиназ"
            document.getElementsByTagName('p')[3].innerHTML = "Альбертовна"
            document.getElementsByTagName('p')[4].innerHTML = "Ж &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 12.10.2007"
            document.body.style.backgroundImage = "url('./images/passport_template.jpg')"
        }
}