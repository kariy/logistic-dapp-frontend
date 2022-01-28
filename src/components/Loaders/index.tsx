import { ClipLoader as CL, BeatLoader as BL } from "react-spinners";

type TLoaderProps = { loading?: boolean };

export const ClipLoader = ({ loading }: TLoaderProps) => (
    <CL loading={loading} size={30} />
);

export const BeatLoader = ({ loading }: TLoaderProps) => (
    <BL loading={loading} size={10} />
);
