import { writeContract, getAccount } from '@wagmi/core';
import { config } from './config';
import { TokenPermissions, PermitTransferFromType, SigTransferDetailsType, DepositData } from "@/functions/tokenBank/type";
import { tokenBankAbi, tokenBankAddr } from './abi';
import { useWriteContract } from 'wagmi';

const sigTransferDtailsType = {
  SignatureTransferDetails: [
    { name: 'to', type: 'address' },
    { name: 'requestedAmount', type: 'uint256' },
  ]
} as const;

export default function DepositWithPermit2({ depositData }: { depositData: DepositData | null }) {
  const [isDeposited, setIsDeposited] = useState(false);
  const { writeContractAsync,data} = useWriteContract()

  let txHash: any = '';

  const handleDeposit = async () => {
    const account = await getAccount(config);
    if (!account.address) {
      return alert('Please connect to network.');
    }

    try {
      if (depositData == null || depositData == undefined) {
        return alert('Please sign the permit first.');
      }
      await writeContractAsync({
        address: tokenBankAddr,
        abi: tokenBankAbi,
        functionName: 'depositWithPermit2',
        args: [
          depositData.depositor,
          {
            permitted: {
              token: depositData.permitMsg.permitted.token,
              amount: depositData.permitMsg.permitted.amount,
            },
            nonce: depositData.permitMsg.nonce,
            deadline: depositData.permitMsg.deadline,
          },
          {
            to: depositData.details.to,
            requestedAmount: depositData.details.requestedAmount,
          },
          depositData.signature
        ]
      });

      txHash = data;

      setIsDeposited(isDeposited);
    } catch (error) {
      alert("fail to deposit");
      console.error("deposit failed", error);
    }
  }
  return (
    <button onClick={handleDeposit} >
      {isDeposited ? `Deposited tx: ${txHash}` : `Click to Deposit 100 tokens`}
    </button>
  )
}