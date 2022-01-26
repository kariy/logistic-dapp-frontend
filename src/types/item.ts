export type ItemType = "Container" | "Parcel";

export enum ShipmentType {
    Domestic,
    International,
}

export enum ItemStatus {
    Processing,
    Ongoing,
    Completed,
    LostInTransit,
}

type Location = {
    name: string;
};

type Destination = {
    receiver: string;
    location: Location;
};

export type Checkpoint = {
    status: string;
    desc: string;
    operator: string;
    location: Location;
    timeStamp: number;
};

export type Item = {
    id: number;
    shipmentType: ShipmentType;
    countryDestination: number;
    destination: Destination;
    status: ItemStatus;
    dateCreated: number;
    dateCompleted: number;
};

export interface Parcel extends Item {
    forwardedTo: string;
    payee: string;
    price: number;
}

export interface Container extends Item {}

export type ContainerItem = {
    courierAddress: string;
    courierItemId: number;
    dateCreated: number;
};
