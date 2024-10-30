import { getChainId, getConnectorClient, getTransactionCount, signTypedData, verifyMessage ,getAccount} from "@wagmi/core";
import { config } from "./config";
import { keccak256 } from "viem";
import {permit2Addr,myPermitTokenAddr, tokenBankAddr} from "./abi";
import { stringToBytes } from "viem";

import {TokenPermissions, PermitTransferFromType, SigTransferDetailsType, DepositData} from "./type"

import {useSignTypedData} from "wagmi";
import { getAddress } from "viem";

// 用于签名
const permitTypes = {
  EIP712domain: [
    { name: 'name', type:'string' },
    { name:'version', type:'string' },
    { name: 'chainId', type:'uint256' },
    { name:'verifyingContract', type:'address' },
  ],
  TokenPermissions: [
    { name: 'token', type: 'address' },
    { name: 'amount', type: 'uint256' },
  ],
  PermitTransferFrom: [
    { name: 'permitted', type: 'TokenPermissions' },
    { name: 'nonce', type: 'uint256' },
    { name: 'deadline', type: 'uint256' },
  ],
} as const;

const sigTransferDtailsType = {
  SignatureTransferDetails: [
    { name: 'to', type: 'address' },
    { name: 'requestedAmount', type: 'uint256' },
  ]
} as const;



function getRandomBigInt(): bigint {
  // 生成一个 0 到 2^256 - 1 之间的随机 BigInt
  const max = BigInt("0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"); // 2^256 - 1
  const randomBytes = new Uint8Array(32); // 256 bits = 32 bytes

  // 用 crypto.getRandomValues 填充随机字节
  window.crypto.getRandomValues(randomBytes);

  // 将随机字节转换为 BigInt
  let randomBigInt = BigInt(0);
  for (let i = 0; i < randomBytes.length; i++) {
      randomBigInt = (randomBigInt << BigInt(8)) | BigInt(randomBytes[i]);
  }

  // 确保随机数在 0 到 max 之间
  return randomBigInt % (max + BigInt(1));
}

const randomBigInt = getRandomBigInt();



export default function DoSignTypedData({setDepositData}:{setDepositData: (depositData: DepositData) => void}) {
  const { signTypedData, data, isLoading, isError, error } = useSignTypedData();

  const permitted = {
      token: myPermitTokenAddr, // 假设 token 为 ERC20 合约的 address
      amount: 100n, // 假设 amount 为 100 单位
  } as TokenPermissions;

  const depositData:DepositData = {
    depositor: getAddress(config), // 假设 depositor 为当前账户的 address
    permitMsg: {
      permitted: permitted,
      nonce: randomBigInt, // 获取当前账户 nonce
      deadline: 167032235000n,
    },
    details: {
      to: tokenBankAddr,
      requestedAmount: 100n
    },
    signature: '', 
  }

  const handleSign = async () => {
    const chainId = await getChainId(config); // 获取当前链 ID

    try {
      await signTypedData(config, {
        domain: {
          name: keccak256(stringToBytes("Permit2")),  // permit2的 name 是 "Permit2"的哈希值
          chainId: chainId, 
          verifyingContract: permit2Addr,
        },
        types: permitTypes, // 类型若用 types 命名则不需要指明是 types:
        primaryType: 'PermitTransferFrom',
        message: {
          permitted: {
            token: myPermitTokenAddr, // 前端获取指定 erc20地址
            amount: 100n, // 前端获取指定存款数量
          },
          nonce: randomBigInt, // 获取当前账户 nonce
          deadline: 167032235000n,
        },
      })
      if(!isError) {
        depositData.signature = data;
        setDepositData(depositData);
      }
    } catch (error) {
      console.error("Sign failed", error);
    }
  }

  
  //disabled={}
  return (
    <button onClick={handleSign} >
      {data ? 'Signed' : `Click to Signed 100 tokens`}
    </button>
  )
}

