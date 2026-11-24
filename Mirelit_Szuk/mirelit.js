const kepek = [
            
        ];

        let aktualisKep = 0;

        const kepElem = document.getElementById("kep");

        function kepCsere() {
            kepElem.src = kepek[aktualisKep];
        }

        function vissza() {
            aktualisKep--;

            if (aktualisKep < 0) {
                aktualisKep = kepek.length - 1;
            }

            kepCsere();
        }

        function tovabb() {
            aktualisKep++;

            if (aktualisKep >= kepek.length) {
                aktualisKep = 0;
            }

            kepCsere();
        }