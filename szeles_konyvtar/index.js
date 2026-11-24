const current_img = document.getElementById("current_img");

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
