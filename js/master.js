const length = document.getElementById('length')
        const Specials = document.getElementById('Specials')
        const number = document.getElementById('number')
        const capital = document.getElementById('capital')
        const inp = document.getElementById('inp')
        inp.addEventListener('input', () => {
            let temp = inp.value
            // check length my password//
            if (temp.length >= 2) {
                length.style.width = '10%'
            }
            if (temp.length > 4) {
                length.style.width = '40%'
            }
            if (temp.length > 6) {
                length.style.width = '70%'
            }
            if (temp.length > 9) {
                length.style.width = '100%'
                length.style.boxShadow = '0 0 10px 4px #fcdc66'
                length.classList.add('myanime')

            }
            if (temp.length < 2) {
                length.style.width = '0px'
                length.style.boxShadow = '0 0 0 0 #fcdc66'

            }
            // check capital my password//
            if (temp.search(/[A-Z]/) >= 0) {
                capital.style.width = '30%'
                let cap1 = temp.search(/[A-Z]/)
                let tempcap1 = temp.slice(cap1 + 1)
                if (tempcap1.search(/[A-Z]/) >= 0) {
                    capital.style.width = '60%'
                    let cap2 = temp.search(/[A-Z]/)
                    let tempcap2 = tempcap1.slice(cap2 + 1)
                    if (tempcap2.search(/[A-Z]/) >= 0) {
                        capital.style.width = '100%'
                        capital.style.boxShadow = '0 0 10px 4px #fcdc66'
                        capital.classList.add('myanime')

                    }

                }
            }

            if (temp.search(/[A-Z]/) < 0) {
                capital.style.width = '0px'
                capital.style.boxShadow = '0 0 0 0 #fcdc66'

            }



            // check Spicials my password//

            if (temp.search(/[~!@#$%^&*]/) >= 0) {
                Specials.style.width = '30%'
                let sp1 = temp.search(/[~!@#$%^&*]/)
                let tempsp1 = temp.slice(sp1 + 1)

                if (tempsp1.search(/[~!@#$%^&*]/) >= 0) {
                    Specials.style.width = '60%'
                    let sp2 = tempsp1.search(/[~!@#$%^&*]/)
                    let tempsp2 = tempsp1.slice(sp2 + 1)
                    if (tempsp2.search(/[~!@#$%^&*]/) >= 0) {
                        Specials.style.width = '100%'
                        Specials.style.boxShadow = '0 0 10px 4px #fcdc66'
                        Specials.classList.add('myanime')
                    }
                }
            }
            if (temp.search(/[~!@#$%^&*()]/) < 0) {
                Specials.style.width = '0px'
                Specials.style.boxShadow = '0 0 0 0 #fcdc66'

            }


            // // check number my password//
            if (temp.search(/[0-9]/) >= 0) {
                number.style.width = '30%'
                let num = temp.search(/[0-9]/)
                let tempnum1 = temp.slice(num + 1)
                if (tempnum1.search(/[0-9]/) >= 0) {
                    number.style.width = '60%'
                    let num2 = tempnum1.search(/[0-9]/)
                    let tempnum2 = tempnum1.slice(num2 + 1)
                    if (tempnum2.search(/[0-9]/) >= 0) {
                        number.style.width = '100%'
                        number.style.boxShadow = '0 0 10px 4px #fcdc66'
                        number.classList.add('myanime')
                    }
                }
            }

            if (temp.search(/[0-9]/) < 0) {
                number.style.width = '0px'
                number.style.boxShadow = '0 0 0 0 #fcdc66'

            }
        })