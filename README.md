# Logistic Decentralized Web Application

## ✏️ About

This is a decentralized web application built for [Logistic Dapp Contracts](https://github.com/ammarif/logistic-dapp-contracts)

## 🧱 Application structure
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


## 📚 Frameworks / libraries used

- [React.js](https://github.com/facebook/create-react-app)
- [Web3.js](https://github.com/ChainSafe/web3.js)

## 🖱 Live demo

The production version is deployed on Vercel. Try it [here](https://logistic-dapp-frontend-17rirfizp-ammrarf.vercel.app/).
