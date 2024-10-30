import { Address,TypedDataDomain,keccak256,stringToBytes,ByteArray} from "viem";
import { getChainId} from "@wagmi/core";
import { config } from "./config";
import {permit2Addr} from "./abi";
import React, { useEffect, useState } from 'react';


let thisChainId;
export const domain:TypedDataDomain = {
    name: keccak256(stringToBytes("Permit2")), // permit2的 name 是 "Permit2"的哈希值
    chainId: 31337,
    verifyingContract: permit2Addr,
}

// 用于签名
export const permitTypes = {
    EIP712domain: [
      { name: 'name', type:'string' },
      { name: 'chainId', type:'uint256' },
      { name: 'verifyingContract', type:'address' },
    ],
    TokenPermissions: [
      { name: 'token', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    PermitTransferFrom: [
      { name: 'permitted', type: 'TokenPermissions' },
      { name: 'spender', type: 'address' },
      { name: 'nonce', type: 'uint256' },
      { name: 'deadline', type: 'uint256' },
    ],
  } as const;

// 解析出类型，用于调用 deposit 函数
export type TokenPermissions = {
    token: Address;
    amount: bigint;
};
export type PermitTransferFromType = {
    permitted: TokenPermissions;
    spender: Address;
    nonce: bigint;
    deadline: bigint;
};
export type SigTransferDetailsType = {
    to: Address;
    requestedAmount: bigint;
};

export type DepositData = {
    depositor: Address; // 存款人
    permitMsg: PermitTransferFromType; // hash
    details: SigTransferDetailsType; // 包含 to 和 requestedAmount
    signature: any; // 签名
}

export default function main(){
    const [chainId, setChainId] = useState<number | null>(null);

    useEffect(() => {
    const fetchChainId = async () => {
        const id = await getChainId(config);
        thisChainId = id;
    };

    fetchChainId();
    }, []);
}
