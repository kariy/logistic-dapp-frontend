import { Link } from "react-router-dom";
import styled from "styled-components";
import { MainButton } from "../../components/styled";

import { Country, Item, ItemStatus, Parcel, ShipmentType } from "../../types";

const ContainerStyled = styled.div`
    width: 100%;
    margin-bottom: 2rem;
`;

const EntryFormWrapper = styled.div`
    overflow-x: auto;
    margin-bottom: 4rem;
`;

const Label = styled.div`
    font-weight: 500;
`;

const Data = styled.div``;

const Entry = styled.div`
    margin: 0.9rem 0;
    display: grid;
    grid-template-columns: 8rem 1fr;
    column-gap: 25px;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    ${MainButton} {
        border-radius: ${(props) => props.theme.rounded.lg};
        margin: unset;
        flex: 1;
    }
`;

const LinkStyled = styled(Link)`
    display: flex;
    flex: 1;
    margin: 0 0.5rem;
`;

interface Props {
    item: Item;
    match?: any; // route props
}

function ItemDetails({ item, match }: Props) {
    return (
        <ContainerStyled>
            <EntryFormWrapper>
                <Entry>
                    <Label>Container ID</Label>
                    <Data>{item.id}</Data>
                </Entry>
                <Entry>
                    <Label>Shipment type</Label>
                    <Data>{ShipmentType[item.shipmentType]}</Data>
                </Entry>
                <Entry>
                    <Label>Destination</Label>
                    <Data>{`${item.destination.location}, ${
                        Country[item.countryDestination]
                    }`}</Data>
                </Entry>

                <Entry>
                    <Label>Status</Label>
                    <Data>{ItemStatus[item.status]}</Data>
                </Entry>
                <Entry>
                    <Label>Receiver</Label>
                    <Data>{item.destination.receiver}</Data>
                </Entry>
                <Entry>
                    <Label>Date created</Label>
                    <Data>
                        {new Date(item.dateCreated * 1000).toUTCString()}
                    </Data>
                </Entry>
                <Entry>
                    <Label>Date completed</Label>
                    <Data>
                        {item.dateCompleted
                            ? new Date(item.dateCompleted * 1000).toUTCString()
                            : "n/a"}
                    </Data>
                </Entry>

                {(item as Parcel).payee ? (
                    <>
                        <Entry>
                            <Label>Forwarded to</Label>
                            <Data>{(item as Parcel).forwardedTo}</Data>
                        </Entry>
                        <Entry>
                            <Label>Payee</Label>
                            <Data>{(item as Parcel).payee}</Data>
                        </Entry>
                        <Entry>
                            <Label>Parcel price</Label>
                            <Data>{(item as Parcel).price}</Data>
                        </Entry>
                    </>
                ) : null}
            </EntryFormWrapper>

            <ButtonsWrapper>
                <LinkStyled to={`${match?.url}/add-checkpoint`}>
                    <MainButton
                        disabled={
                            item.status == ItemStatus.Completed ? true : false
                        }
                    >
                        Add a checkpoint
                    </MainButton>
                </LinkStyled>
                <LinkStyled to={`${match?.url}/init-shipment`}>
                    <MainButton
                        disabled={
                            item.status == ItemStatus.Processing ? false : true
                        }
                    >
                        Initiate shipment
                    </MainButton>
                </LinkStyled>
                <LinkStyled to={`${match?.url}/complete-shipment`}>
                    <MainButton
                        disabled={
                            item.status == ItemStatus.Ongoing ? false : true
                        }
                    >
                        Complete shipment
                    </MainButton>
                </LinkStyled>
            </ButtonsWrapper>
        </ContainerStyled>
    );
}

export default ItemDetails;
