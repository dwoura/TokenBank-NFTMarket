import { getChainId, getConnectorClient, getTransactionCount, signTypedData, getAccount } from "@wagmi/core";
import { config } from "./config";
import { myPermitTokenAddr, tokenBankAddr } from "./abi";
import { permitTypes, domain, TokenPermissions, PermitTransferFromType, SigTransferDetailsType, DepositData } from "./type"
import { useSignTypedData } from "wagmi";


const sigTransferDtailsType = {
  SignatureTransferDetails: [
    { name: 'to', type: 'address' },
    { name: 'requestedAmount', type: 'uint256' },
  ]
} as const;

export default function DoSignTypedData({ setDepositData }: { setDepositData: (depositData: DepositData) => void }) {
  const { signTypedDataAsync,signTypedData, data } = useSignTypedData(); // 解构赋值钩子状态

  let sig: any;

  const handleSign = async () => {
    const account = getAccount(config);
    if (!account.address) {
      return alert('Please connect to network.');
    }
    const nonce = BigInt(123123123); // 获取当前账户 nonce
    console.log("当前连接地址", account.address);
    try {

      const permitted = {
        token: myPermitTokenAddr, // 假设 token 为 ERC20 合约的 address
        amount: 100n, // 假设 amount 为 100 单位
      } as TokenPermissions;

      await signTypedDataAsync({
        domain: domain,
        types: permitTypes, // 类型若用 types 命名则不需要指明是 types:
        primaryType: 'PermitTransferFrom',
        message: {
          permitted: permitted,
          spender: tokenBankAddr,
          nonce: nonce, // 获取当前账户 nonce
          deadline: 1731297238n,
        },
      })

      sig = data;

      const depositData: DepositData = {
        depositor: account.address, // 假设 depositor 为当前账户的 address
        permitMsg: {
          permitted: permitted,
          spender: tokenBankAddr,
          nonce: nonce, // 获取当前账户 nonce
          deadline: 1731297238n,
        },
        details: {
          to: tokenBankAddr,
          requestedAmount: 100n
        },
        signature: data,
      }
      console.log("depositdata: ", depositData)
      setDepositData(depositData);
    } catch (error) {
      console.error("Sign failed", error);
    }
  }


  //disabled={}
  return (
    <button onClick={handleSign} >
      {sig ? 'Signed' : `Click to Signed 100 tokens`}
    </button>
  )
}

