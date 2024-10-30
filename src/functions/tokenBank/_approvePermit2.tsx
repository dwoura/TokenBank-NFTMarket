import react, { useState } from 'react';
import { writeContract, getAccount, getTransaction, readContract } from '@wagmi/core'
import { Address } from "viem";
import { myPermitTokenAbi, myPermitTokenAddr, permit2Addr } from "./abi";
import { config } from './config';
import { useWriteContract } from "wagmi";


export default function approvePermit2() {
    const { writeContractAsync, data, isError, error, isSuccess } = useWriteContract(); // 解构赋值钩子状态
    const [isApproved, setIsApproved] = useState(false);

    const to: Address = permit2Addr;
    const amount: bigint = BigInt(100000000);

    const handleApprove = async () => {
        const account = getAccount(config);
        if (!account.address) {
            return alert('Please connect to network.');
        }

        try {
            const txHash = await writeContract(config, {
                abi: myPermitTokenAbi,
                address: myPermitTokenAddr,
                functionName: "approve",
                args: [
                    to,
                    amount,
                ]
            });
            // if (isError) {
            //     console.log('Approval failed.', error);
            //     return;
            // }


            console.log("approve hash", txHash);
            setIsApproved(true);
        } catch (error) {
            console.error("Approval failed", error);
            setIsApproved(false);
            return;
        }

        // const tx = await getTransaction(config, {
        //  hash: "0x325ad0001c8dd5b22219594a771460fc61c09ec8ad6b3c59e34dda71b3f400fd" 
        // })
        // console.log(tx)

        // const allowance = await readContract(config,
        //     {
        //         abi: myPermitTokenAbi,
        //         address: myPermitTokenAddr,
        //         functionName: "allowance",
        //         args: [account.address, to]
        //     });

        //     console.log("allowance", allowance);

    };

    return (
        <button onClick={handleApprove}>
            {isApproved ? 'Approved' : `Click to Approve`}
        </button>
    )
}