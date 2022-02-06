# Logistic Chain System Front End

## 🖱 Live demo

The production version is deployed on Vercel. Try it [here](https://logistic-dapp-frontend.vercel.app/).

## ✏️ About

This is a decentralized web application built for [Logistic Dapp Contracts](https://github.com/ammarif/logistic-dapp-contracts)

## 🧱 App structure
    ┌─────┐
    │ APP │
    └─┬───┘
      │
      │  ┌─────────────────┐
      ├──┤CONTAINER COMPANY│
      │  └─┬───────────────┘
      │    │
      │    ├─TRACK
      │    │
      │    └─ADMIN
      │       │
      │       ├─CONTAINER LIST
      │       │
      │       ├─NEW CONTAINER
      │       │
      │       ├─ADD CONTAINER CHECKPOINT
      │       │
      │       ├─INIT CONTAINER SHIPMENT
      │       │
      │       └─COMPLETE CONTAINER SHIPMENT
      │
      │   ┌───────────────┐
      └───┤COURIER COMPANY│
          └─┬─────────────┘
            │
            ├─TRACK
            │
            └─ADMIN
               │
               ├─PARCEL LIST
               │
               ├─NEW PARCEL
               │
               ├─ADD PARCEL CHECKPOINT
               │
               ├─INIT PARCEL SHIPMENT
               │
               ├─FORWARD PARCEL TO CONTAINER
               │
               └─COMPLETE PARCEL SHIPMENT

## 🔧 App functionalities

| View              | Functionalities
| ----------------- | -------------
| Container company | - Track container progress<br>- List of created containers<br>- Create new container<br>- Add container checkpoint<br>- Initiate container shipment<br>- Complete container shipment
| Courier company   | - Track parcel progress<br>- List of created parcels<br>- Create new parcel<br>- Add parcel checkpoint<br>- Initiate parcel shipment<br>- Forward parcel to container company<br>- Complete parcel shipment



## 📚 Frameworks / libraries used

- [React.js](https://github.com/facebook/create-react-app)
- [Web3.js](https://github.com/ChainSafe/web3.js)

