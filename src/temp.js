// const paymentSession = usePaymentSession();
// const pmc = paymentSession?.paymentMethodConfig
// const pmd = paymentSession?.paymentMethodDomain
// const applePayAvailability = paymentSession?.applePayAvailability
// const [applePayEnabled, setApplePayEnabled] = useState(getApplePayEnabled(pmc, pmd, applePayAvailability))
// const [googlePayEnabled, setGooglePayEnabled] = useState(getGPayEnabled(pmc))
// const savedCards = useFetchSavedCards(paymentSession)
// const [defaultHasBeenSet, setDefaultHasBeenSet] = useState(false)

// useEffect(() => {
//     const setDefaultPaymentOption = (paymentOption: ToastPaymentOption) => {
//         setDefaultHasBeenSet(true)
//         eventEmitter.dispatch()
//     }

//     if (pmc && !defaultHasBeenSet) {
//         setGooglePayEnabled(getGPayEnabled(pmc))
//         if (pmd) {
//             setApplePayEnabled(getApplePayEnabled(pmc, pmd, applePayAvailability))
//         }
//     }
//     if (!savedCards || !pmd || !pmc || defaultHasBeenSet) {
//         return
//     } else if (savedCards && savedCards.results > 0) {
//         setDefaultPaymentOption({
//                 paymentType: SAVED_CARD
//     })
//     } else {
//         setDefaultPaymentOption({
//             paymentType: NEW_CARD
//         })
//     }
//     }, [
//         applePayEnabled,
//         googlePayEnabled,
//         savedCards,
//         defaultHasBeenSet,
//         setSelectedPaymentOption,
//         eventEmitter,
//         pmc,
//         pmd,
//         applePayavailability
//     ]

// })

// retun (
//     <PaymentOptionContext.Provider value ={context}>
//         {PaymentResponse.children}
//     </PaymentOptionContext.Provider>
// )
