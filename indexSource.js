let data = ("cities.json")

fetch(data)
    // On obtient une réponse que l'on convertit au format .json 
    .then((response) =>
        response.json()
            // La méthode then() renvoie un objet Promise
            .then((data) => {

                let table = [];
                // Ce foreach sert à créer un nouveau tableau avec les pays sans doublon
                data.forEach(ville => {
                    // Si le tableau n'inclue pas("== false") déjà le pays
                    if (table.includes(ville.countrycode.name) == false) {
                        // alors ajouter le pays au tableau
                        table.push(ville.countrycode.name);
                    }
                });

                // Le .sort sert à trier le tableau des pays par ordre alphabétique
                table.sort();
                let select = document.querySelector("#pays");

                // Ce foreach reprend le tablau des pays triés par ordre alphabétique et créer les options du select
                table.forEach(country => {
                    // Avec le innerHTML j'inclue une option dans le select qui se répètera grâce au foreach
                    select.innerHTML += '<option>' + country + '</option>';
                });


                select.addEventListener('change', event => {
                    let tableVille = [];
                    let listeVille = document.querySelector(".ville")
                    listeVille.innerHTML = "";
                    data.forEach(ville => {

                        if (ville.countrycode.name == select.value) {
                            tableVille.push(ville.name);
                        }
                    });
                    tableVille.sort();

                    tableVille.forEach(ville => {

                        listeVille.innerHTML += '<p>' + ville + '</p>'
                    }
                    )
                })
            })
    )
