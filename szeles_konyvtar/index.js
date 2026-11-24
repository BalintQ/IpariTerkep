const byID = (id) => document.getElementById(id)

const requestData = async () => {
    try {
        let response = await fetch('./temp_database.json');
        if (response.ok) {
            let libraryHallwayData = response.json();
        }
    } catch (error) {
        console.log(error);
    }
}
requestData();
