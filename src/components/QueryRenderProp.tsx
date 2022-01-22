import { QueryFunction, QueryKey, useQuery, UseQueryResult } from "react-query";

interface Props<T> {
    queryKey: QueryKey;
    queryFn: QueryFunction<T>;
    render: (queryResult: UseQueryResult<T>) => JSX.Element;
}

function QueryRenderProp<TQueryFnData>({
    render,
    queryKey,
    queryFn,
}: Props<TQueryFnData>) {
    const queryResult = useQuery<TQueryFnData>(queryKey, queryFn, {
        refetchOnWindowFocus: false,
    });

    return <div>{render(queryResult)}</div>;
}

export default QueryRenderProp;
