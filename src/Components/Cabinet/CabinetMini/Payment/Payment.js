import './Payment.css'
import PaymentPageItems from "./PaymentPageItems";

function Payment() {

    const mobileOperators = [{
        id: 1,
        title: 'UzMobile',
        src: <img className={'form-control images'} src={'../images/logo_1.png'}
                  style={{background: 'transparent', alignItems: 'center', border: 'none'}}/>
    },
        {
            id: 2,
            title: 'MobiUZ',
            src: <img className={'form-control images'} src={'../images/logo_2.png'}
                      style={{background: 'transparent', alignItems: 'center', border: 'none'}}/>
        },
        {
            id: 3,
            title: 'Beeline',
            src: <img className={'form-control images'} src={'../images/logo_3.png'}
                      style={{background: 'transparent', alignItems: 'center', border: 'none'}}/>
        },

        {
            id: 4,
            title: 'Ucell',
            src: <img className={'form-control images'} src={'../images/logo_4.png'}
                      style={{background: 'transparent', alignItems: 'center', border: 'none'}}/>
        },

        {
            id: 5,
            title: 'Perfectum',
            src: <img className={'form-control images'} src={'../images/logo_5.png'}
                      style={{background: 'transparent', alignItems: 'center', border: 'none'}}/>
        }]

    const internetProviders = [{
        id: 1,
        title: 'UzTelecom',
        src: <img src={'../images/provider1.png'} className={'form-control images'}
                  style={{background: 'transparent', alignItems: 'center', border: 'none'}}/>
    },
        {
            id: 2,
            title: 'TPS',
            src: <img src={'../images/provider2.png'} className={'form-control images'}
                      style={{background: 'transparent', alignItems: 'center', border: 'none'}}/>
        },
        {
            id: 3,
            title: 'ISTV',
            src: <img src={'../images/provider3.png'} className={'form-control images'}
                      style={{background: 'transparent', alignItems: 'center', border: 'none'}}/>
        },
        {
            id: 4,
            title: 'Comnet',
            src: <img src={'../images/provider4.png'} className={'form-control images'}
                      style={{background: 'transparent', alignItems: 'center', border: 'none'}}/>
        },
        {
            id: 5,
            title: 'Sarkor Telekom',
            src: <img src={'../images/provider5.png'} className={'form-control images'}
                      style={{background: 'transparent', alignItems: 'center', border: 'none'}}/>
        },
    ]
    const other = [{
        id: 1,
        title: 'MohirDev',
        src: <img src={'../images/mohir.png'} className={'form-control images'}
                  style={{background: 'transparent', alignItems: 'center', border: 'none'}}/>
    }, {
        id: 2,
        title: 'PDP',
        src: <img src={'../images/PDP_IT_Academy-01-removebg-preview.png'} className={'form-control images'}
                  style={{background: 'transparent', alignItems: 'center', border: 'none'}}/>
    }, {
        id: 3,
        title: "Najot ta'lim",
        src: <img src={'../images/najot.png'} className={'form-control images'}
                  style={{background: 'transparent', alignItems: 'center', border: 'none'}}/>
    },{
        id: 4,
        title: "OLX",
        src: <img src={'../images/OLX_green_logo.svg-removebg-preview.png'} className={'form-control images'}
                  style={{background: 'transparent', alignItems: 'center', border: 'none'}}/>
    },{
        id: 5,
        title: "Chelsea",
        src: <img src={'../images/chelsea.png'} className={'form-control images'}
                  style={{background: 'transparent', alignItems: 'center', border: 'none'}}/>
    },

    ]

    return (
        <div className={'col-md-10 '}>
            <PaymentPageItems mobileOperators={mobileOperators} internetProviders={internetProviders} other={other}/>
        </div>
    )
}

export default Payment;