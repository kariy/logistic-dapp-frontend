import { QueryFunction, QueryKey, useQuery, UseQueryResult } from "react-query";

export interface QueryRenderPropProps<T> {
    queryKey: QueryKey;
    queryFn: QueryFunction<T>;
    render: (queryResult: UseQueryResult<T>) => JSX.Element;
}

function QueryRenderProp<TQueryFnData>({
    render,
    queryKey,
    queryFn,
}: QueryRenderPropProps<TQueryFnData>) {
    const queryResult = useQuery<TQueryFnData>(queryKey, queryFn, {
        refetchOnWindowFocus: false,
    });

    return render(queryResult);
}

export default QueryRenderProp;
