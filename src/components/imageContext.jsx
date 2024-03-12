import { createContext, useState } from 'react';
import pic1 from '../assets/fellowMugMain.webp';
import pic2 from '../assets/fellowMugExtra.webp';
import pic from '../assets/fellowMugExtra2.webp';

const imageContext = createContext();

const ImageProvider = ({children}) => {
    // const [imageArr, setImage] = useState(
    //     ['/src/assets/fellowMugMain.webp',
    //      '/src/assets/fellowMugExtra.webp',
    //      '/src/assets/fellowMugExtra2.webp'
    //     ]);

    const [imageArr, setImage] = useState(
            [
            '/assets/fellowMugMain-B42gLWKu.webp',
            '/assets/fellowMugExtra-CiwDVw-L.webp',
            '/assets/fellowMugExtra2-D79ScuSf.webp'
            ]
        );

        return (
            <imageContext.Provider value={imageArr}>
                {children}
            </imageContext.Provider>
        )
}

export { imageContext, ImageProvider }