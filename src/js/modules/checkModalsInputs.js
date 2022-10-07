import modals from "./modals";
import changeModalState from "./changeModalState";
//import modalState from "../main";

//const checkModalsInputs = () => {
    // const windowForm = document.querySelectorAll('.balcon_icons_img'),
    //     windowWidth = document.querySelector('#width'),
    //     windowHeight = document.querySelector('#height'),
    //     windowType = document.querySelectorAll('#view_type'),
    //     windowProfile = document.querySelectorAll('.checkbox'),
    //     buttonStatus = document.querySelector('.popup_calc_button');

    // let windowFormStatus = document.createElement('div');
    // windowFormStatus.textContent = 'Вы забыли кое-что выбрать';
    // windowFormStatus.classList.add('status');status

    // buttonStatus.addEventListener('click', () => {
    //     if (!!modalState.form && !!modalState.width && !!modalState.height) {
    //     console.log(true);
    //     console.log(modalState.form);
    //     console.log(windowHeight);
    //     //windowFormStatus.remove();
    //     buttonStatus.removeChild(windowFormStatus);
    //     } else {
    //         buttonStatus.appendChild(windowFormStatus);
    //         console.log('error');
    //         event.stopImmediatePropagation();
    //     }
    // });


// const checkNextStep = (checkButton, prop1, prop2, prop3) => {
//     const check = document.querySelector(checkButton),
//         elem2 = document.querySelector(prop2),
//         elem3 = document.querySelector(prop3);
//
//     console.log(modalState);
//     console.log(elem2, elem3);

    // function validation(checkButton, elem1, elem2, elem3) {
    //     const check = document.querySelector(checkButton);
    //     let windowStatus = document.createElement('div');
    //     windowStatus.textContent = 'Вы забыли кое-что выбрать';
    //     windowStatus.classList.add('status');
    //
    //     if (elem1 && elem2 && elem3) {
    //         console.log(true);
    //         windowStatus.remove();
    //         console.log(elem1, elem2, elem3);
    //     } else {
    //         check.appendChild(windowStatus);
    //         console.log('error');
    //         event.stopImmediatePropagation();
    //         console.log('errorState',modalState);
    //     }
    // }

    // check.addEventListener('click', () => {
    //     let windowStatus = document.createElement('div');
    //     windowStatus.textContent = 'Вы забыли кое-что выбрать';
    //     windowStatus.classList.add('status');
    //
    //     if (!!modalState.form && !!modalState.width && !!modalState.height) {
    //         console.log(true);
    //         console.log(modalState.form);
    //
    //         if (windowStatus) {
    //             windowStatus.remove();
    //         }
    //
    //         } else {
    //             check.appendChild(windowStatus);
    //             console.log('error');
    //             event.stopImmediatePropagation();
    //         }


        // if (state !==undefined && elem2.value && elem3.value) {
        //     console.log(true);
        //     windowStatus.remove();
        //     console.log(elem2, elem3);
        //     console.log('trueScenary');
        // } else {
        //     check.appendChild(windowStatus);
        //     console.log('error');
        //     event.stopImmediatePropagation();
        //     console.log('errorState',modalState);
        // }

    //     console.log('newstep', modalState);
    // });
            // if (!!modalState.form && !!modalState.width && !!modalState.height) {
            // console.log(true);
            // console.log(modalState.form);
            // //windowFormStatus.remove();
            //     if (windowStatus.textContent) {
            //         windowStatus.remove();
            //     }
            // } else {
            //     check.appendChild(windowStatus);
            //     console.log('error');
            //     event.stopImmediatePropagation();
            // }
//         console.log('newstep2');
//
//     };
//
//     checkNextStep();
//     //console.log(modalState.form, modalState.width, modalState.height);
//
// };
//
// export default checkModalsInputs;