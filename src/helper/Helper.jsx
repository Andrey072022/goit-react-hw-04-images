const MY_KEY = '35230294-8bc6724a2fdeb98c2678fb387';
const API = `https://pixabay.com/api/`;

    
const fetchImg = async (nameImg, page, ) => {
    const URL = `${API}?q=${nameImg}&page=${page}&key=${MY_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
        
    try {
        const res = await fetch(URL);
        return await res.json();
    } catch (error) {
        console.log(error.message);
    }
};

export default fetchImg;
