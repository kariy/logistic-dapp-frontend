import { UseFormReturn } from "react-hook-form";

export type FormSubmitHandlerParams<T> = Pick<
    UseFormReturn<T>,
    "reset" | "setValue" | "setError"
> & { data: T };

export type FormSubmitHandler<T> = (params: FormSubmitHandlerParams<T>) => any;
