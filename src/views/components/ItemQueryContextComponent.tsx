import React, { useContext } from "react";
import { createContext } from "react";
import { Container } from "react-dom";
import { UseQueryResult } from "react-query";

import QueryRenderProp, {
    QueryRenderPropProps,
} from "../../components/QueryRenderProp";
import { Item, Parcel } from "../../types";

export const ItemContext = createContext<any>(undefined);

export function useItem() {
    return useContext(ItemContext);
}

// type ItemPageProps<T extends Item> = QueryRenderPropProps<T>;

function ItemQueryContextComponent<T extends Item>({
    queryFn,
    queryKey,
    render,
}: QueryRenderPropProps<T>) {
    return (
        <QueryRenderProp<T>
            queryFn={queryFn}
            queryKey={queryKey}
            render={(result) => (
                <ItemContext.Provider value={result.data}>
                    {render(result)}
                </ItemContext.Provider>
            )}
        />
    );
}

// function createItemContext<T>(defaultValue?: T) {
//     return createContext<T | undefined>(defaultValue);
// }

export default ItemQueryContextComponent;
