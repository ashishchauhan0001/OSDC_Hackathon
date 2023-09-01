// const fetchRequest = async (url) => {
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     } catch (error) {
//       console.error('Error occurred during fetch:', error);
//       throw error;
//     }
//   };
  

fetchRequest = async (url) => {
    const response = await fetch(url)
    return response.json()
}