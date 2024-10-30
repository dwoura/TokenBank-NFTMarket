import {Address} from "viem";
import {useSignTypedData} from "wagmi";
import {TokenPermissions, PermitTransferFromType, SigTransferDetailsType, DepositData} from "@/functions/tokenBank/type";

const sigTransferDtailsType = {
  SignatureTransferDetails: [
    { name: 'to', type: 'address' },
    { name: 'requestedAmount', type: 'uint256' },
  ]
} as const;

export default function DepositWithPermit2({ depositData }: { depositData: DepositData | null}){

    const handleDeposit = () => {

    }
    return (
      <button onClick={handleDeposit} >
        {'Deposit' }
      </button>
    )
}