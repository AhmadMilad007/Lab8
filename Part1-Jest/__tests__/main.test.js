
const formatVolumeIconPath = require('../assets/scripts/main'); 

//https://jestjs.io/docs/en/api#describename-fn
//describe group test
describe ('Volume Icon Path Test',  () => {

    test ('Level 3 volume Icon test', () =>{
        expect (formatVolumeIconPath(99)).toMatch ('./assets/media/icons/volume-level-3.svg')
    });
    test ('Level 3 volume Icon test', () =>{
        expect (formatVolumeIconPath(67)).toMatch ('./assets/media/icons/volume-level-3.svg')
    });
    test ('Level 2 volume Icon test', () =>{
        expect (formatVolumeIconPath(66)).toMatch ('./assets/media/icons/volume-level-2.svg')
    });
    test ('Level 2 volume Icon test', () =>{
        expect (formatVolumeIconPath(35)).toMatch ('./assets/media/icons/volume-level-2.svg')
    });
    test ('Level 1 volume Icon test', () =>{
        expect (formatVolumeIconPath(33)).toMatch ('./assets/media/icons/volume-level-1.svg')
    });
    test ('Level 1 volume Icon test', () =>{
        expect (formatVolumeIconPath(1)).toMatch ('./assets/media/icons/volume-level-1.svg')
    });

    test ('Level 0 volume Icon test', () =>{
        expect (formatVolumeIconPath(0)).toMatch ('./assets/media/icons/volume-level-0.svg')
    });
});
