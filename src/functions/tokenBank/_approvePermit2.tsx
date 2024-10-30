import react,{ useState } from 'react';
import { writeContract } from '@wagmi/core'
import { Address } from "viem";
import { myPermitTokenAbi, myPermitTokenAddr, permit2Addr } from "./abi";
import { config } from './config';

export default function approvePermit2() {
    const [isApproved, setIsApproved] = useState(false);

    const to: Address = permit2Addr;
    const amount: bigint = BigInt(2) ** BigInt(256) - BigInt(1);

    const handleApprove = async () => {
        try {
            await writeContract(config, {
                address: myPermitTokenAddr,
                abi: myPermitTokenAbi,
                functionName: 'approve',
                args: [
                    to,
                    amount,
                ]
            });
            setIsApproved(true);
        } catch (error) {
            console.error("Approval failed", error);
        }
    };

    return (
        <button onClick={handleApprove} disabled={isApproved}>
            {isApproved ? 'Approved' : `Click to Approve`}
        </button>
    )
}