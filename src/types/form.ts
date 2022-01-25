import { UseFormReset } from "react-hook-form";

export type FormSubmitHandler<T> = (data: T, reset: UseFormReset<T>) => any;
