import { Address } from "viem";

// 解析出类型，用于调用 deposit 函数
export type TokenPermissions = {
    token: Address;
    amount: bigint;
};
export type PermitTransferFromType = {
    permitted: TokenPermissions;
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