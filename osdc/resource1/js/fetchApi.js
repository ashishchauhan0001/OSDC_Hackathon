const fetchRequest = async (url) => {
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log("Error:", error);
        // handle the error or throw it further if needed
    }
};

// fetchRequest = async (url) => {
//     const response = await fetch(url)
//     return response.json()
// }
