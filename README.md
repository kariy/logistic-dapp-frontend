# Logistic Chain System Front End

## π± Live demo

The production version is deployed on Vercel. Try it [here](https://logistic-dapp-frontend.vercel.app/).

## βοΈ About

This is a decentralized web application built for [Logistic Dapp Contracts](https://github.com/ammarif/logistic-dapp-contracts)

## π§± App structure
    βββββββ
    β APP β
    βββ¬ββββ
      β
      β  βββββββββββββββββββ
      ββββ€CONTAINER COMPANYβ
      β  βββ¬ββββββββββββββββ
      β    β
      β    ββTRACK
      β    β
      β    ββADMIN
      β       β
      β       ββCONTAINER LIST
      β       β
      β       ββNEW CONTAINER
      β       β
      β       ββADD CONTAINER CHECKPOINT
      β       β
      β       ββINIT CONTAINER SHIPMENT
      β       β
      β       ββCOMPLETE CONTAINER SHIPMENT
      β
      β   βββββββββββββββββ
      βββββ€COURIER COMPANYβ
          βββ¬ββββββββββββββ
            β
            ββTRACK
            β
            ββADMIN
               β
               ββPARCEL LIST
               β
               ββNEW PARCEL
               β
               ββADD PARCEL CHECKPOINT
               β
               ββINIT PARCEL SHIPMENT
               β
               ββFORWARD PARCEL TO CONTAINER
               β
               ββCOMPLETE PARCEL SHIPMENT

## π§ App functionalities

| View              | Functionalities
| ----------------- | -------------
| Container company | - Track container progress<br>- List of created containers<br>- Create new container<br>- Add container checkpoint<br>- Initiate container shipment<br>- Complete container shipment
| Courier company   | - Track parcel progress<br>- List of created parcels<br>- Create new parcel<br>- Add parcel checkpoint<br>- Initiate parcel shipment<br>- Forward parcel to container company<br>- Complete parcel shipment



## π Frameworks / libraries used

- [React.js](https://github.com/facebook/create-react-app)
- [Web3.js](https://github.com/ChainSafe/web3.js)

