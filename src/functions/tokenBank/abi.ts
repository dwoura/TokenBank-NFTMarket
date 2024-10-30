import { Address } from "viem";

export const permit2Abi = [
        {
            "type": "function",
            "name": "DOMAIN_SEPARATOR",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "allowance",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "token",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "amount",
                    "type": "uint160",
                    "internalType": "uint160"
                },
                {
                    "name": "expiration",
                    "type": "uint48",
                    "internalType": "uint48"
                },
                {
                    "name": "nonce",
                    "type": "uint48",
                    "internalType": "uint48"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "approve",
            "inputs": [
                {
                    "name": "token",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint160",
                    "internalType": "uint160"
                },
                {
                    "name": "expiration",
                    "type": "uint48",
                    "internalType": "uint48"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "invalidateNonces",
            "inputs": [
                {
                    "name": "token",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "newNonce",
                    "type": "uint48",
                    "internalType": "uint48"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "invalidateUnorderedNonces",
            "inputs": [
                {
                    "name": "wordPos",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "mask",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "lockdown",
            "inputs": [
                {
                    "name": "approvals",
                    "type": "tuple[]",
                    "internalType": "struct IAllowanceTransfer.TokenSpenderPair[]",
                    "components": [
                        {
                            "name": "token",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "spender",
                            "type": "address",
                            "internalType": "address"
                        }
                    ]
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "nonceBitmap",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "permit",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "permitBatch",
                    "type": "tuple",
                    "internalType": "struct IAllowanceTransfer.PermitBatch",
                    "components": [
                        {
                            "name": "details",
                            "type": "tuple[]",
                            "internalType": "struct IAllowanceTransfer.PermitDetails[]",
                            "components": [
                                {
                                    "name": "token",
                                    "type": "address",
                                    "internalType": "address"
                                },
                                {
                                    "name": "amount",
                                    "type": "uint160",
                                    "internalType": "uint160"
                                },
                                {
                                    "name": "expiration",
                                    "type": "uint48",
                                    "internalType": "uint48"
                                },
                                {
                                    "name": "nonce",
                                    "type": "uint48",
                                    "internalType": "uint48"
                                }
                            ]
                        },
                        {
                            "name": "spender",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "sigDeadline",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "signature",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "permit",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "permitSingle",
                    "type": "tuple",
                    "internalType": "struct IAllowanceTransfer.PermitSingle",
                    "components": [
                        {
                            "name": "details",
                            "type": "tuple",
                            "internalType": "struct IAllowanceTransfer.PermitDetails",
                            "components": [
                                {
                                    "name": "token",
                                    "type": "address",
                                    "internalType": "address"
                                },
                                {
                                    "name": "amount",
                                    "type": "uint160",
                                    "internalType": "uint160"
                                },
                                {
                                    "name": "expiration",
                                    "type": "uint48",
                                    "internalType": "uint48"
                                },
                                {
                                    "name": "nonce",
                                    "type": "uint48",
                                    "internalType": "uint48"
                                }
                            ]
                        },
                        {
                            "name": "spender",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "sigDeadline",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "signature",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "permitTransferFrom",
            "inputs": [
                {
                    "name": "permit",
                    "type": "tuple",
                    "internalType": "struct ISignatureTransfer.PermitTransferFrom",
                    "components": [
                        {
                            "name": "permitted",
                            "type": "tuple",
                            "internalType": "struct ISignatureTransfer.TokenPermissions",
                            "components": [
                                {
                                    "name": "token",
                                    "type": "address",
                                    "internalType": "address"
                                },
                                {
                                    "name": "amount",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        },
                        {
                            "name": "nonce",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "deadline",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "transferDetails",
                    "type": "tuple",
                    "internalType": "struct ISignatureTransfer.SignatureTransferDetails",
                    "components": [
                        {
                            "name": "to",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "requestedAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "signature",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "permitTransferFrom",
            "inputs": [
                {
                    "name": "permit",
                    "type": "tuple",
                    "internalType": "struct ISignatureTransfer.PermitBatchTransferFrom",
                    "components": [
                        {
                            "name": "permitted",
                            "type": "tuple[]",
                            "internalType": "struct ISignatureTransfer.TokenPermissions[]",
                            "components": [
                                {
                                    "name": "token",
                                    "type": "address",
                                    "internalType": "address"
                                },
                                {
                                    "name": "amount",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        },
                        {
                            "name": "nonce",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "deadline",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "transferDetails",
                    "type": "tuple[]",
                    "internalType": "struct ISignatureTransfer.SignatureTransferDetails[]",
                    "components": [
                        {
                            "name": "to",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "requestedAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "signature",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "permitWitnessTransferFrom",
            "inputs": [
                {
                    "name": "permit",
                    "type": "tuple",
                    "internalType": "struct ISignatureTransfer.PermitTransferFrom",
                    "components": [
                        {
                            "name": "permitted",
                            "type": "tuple",
                            "internalType": "struct ISignatureTransfer.TokenPermissions",
                            "components": [
                                {
                                    "name": "token",
                                    "type": "address",
                                    "internalType": "address"
                                },
                                {
                                    "name": "amount",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        },
                        {
                            "name": "nonce",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "deadline",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "transferDetails",
                    "type": "tuple",
                    "internalType": "struct ISignatureTransfer.SignatureTransferDetails",
                    "components": [
                        {
                            "name": "to",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "requestedAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "witness",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "witnessTypeString",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "signature",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "permitWitnessTransferFrom",
            "inputs": [
                {
                    "name": "permit",
                    "type": "tuple",
                    "internalType": "struct ISignatureTransfer.PermitBatchTransferFrom",
                    "components": [
                        {
                            "name": "permitted",
                            "type": "tuple[]",
                            "internalType": "struct ISignatureTransfer.TokenPermissions[]",
                            "components": [
                                {
                                    "name": "token",
                                    "type": "address",
                                    "internalType": "address"
                                },
                                {
                                    "name": "amount",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        },
                        {
                            "name": "nonce",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "deadline",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "transferDetails",
                    "type": "tuple[]",
                    "internalType": "struct ISignatureTransfer.SignatureTransferDetails[]",
                    "components": [
                        {
                            "name": "to",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "requestedAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "witness",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "witnessTypeString",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "signature",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "transferFrom",
            "inputs": [
                {
                    "name": "transferDetails",
                    "type": "tuple[]",
                    "internalType": "struct IAllowanceTransfer.AllowanceTransferDetails[]",
                    "components": [
                        {
                            "name": "from",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "to",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "amount",
                            "type": "uint160",
                            "internalType": "uint160"
                        },
                        {
                            "name": "token",
                            "type": "address",
                            "internalType": "address"
                        }
                    ]
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "transferFrom",
            "inputs": [
                {
                    "name": "from",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint160",
                    "internalType": "uint160"
                },
                {
                    "name": "token",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "event",
            "name": "Approval",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "token",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint160",
                    "indexed": false,
                    "internalType": "uint160"
                },
                {
                    "name": "expiration",
                    "type": "uint48",
                    "indexed": false,
                    "internalType": "uint48"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Lockdown",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "token",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "NonceInvalidation",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "token",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "newNonce",
                    "type": "uint48",
                    "indexed": false,
                    "internalType": "uint48"
                },
                {
                    "name": "oldNonce",
                    "type": "uint48",
                    "indexed": false,
                    "internalType": "uint48"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Permit",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "token",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint160",
                    "indexed": false,
                    "internalType": "uint160"
                },
                {
                    "name": "expiration",
                    "type": "uint48",
                    "indexed": false,
                    "internalType": "uint48"
                },
                {
                    "name": "nonce",
                    "type": "uint48",
                    "indexed": false,
                    "internalType": "uint48"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "UnorderedNonceInvalidation",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "word",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "mask",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "error",
            "name": "AllowanceExpired",
            "inputs": [
                {
                    "name": "deadline",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "ExcessiveInvalidation",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InsufficientAllowance",
            "inputs": [
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "InvalidAmount",
            "inputs": [
                {
                    "name": "maxAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "LengthMismatch",
            "inputs": []
        }
] as const;

export const tokenBankAbi = [
        {
            "type": "constructor",
            "inputs": [
                {
                    "name": "owner_",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "supportedToken_",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "receive",
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "_supportedPemit2",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "_supportedToken",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "deposit",
            "inputs": [
                {
                    "name": "depositor",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "token",
                    "type": "address",
                    "internalType": "contract IERC20"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "depositWithPermit2",
            "inputs": [
                {
                    "name": "depositor",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "permitMsg",
                    "type": "tuple",
                    "internalType": "struct ISignatureTransfer.PermitTransferFrom",
                    "components": [
                        {
                            "name": "permitted",
                            "type": "tuple",
                            "internalType": "struct ISignatureTransfer.TokenPermissions",
                            "components": [
                                {
                                    "name": "token",
                                    "type": "address",
                                    "internalType": "address"
                                },
                                {
                                    "name": "amount",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        },
                        {
                            "name": "nonce",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "deadline",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "details",
                    "type": "tuple",
                    "internalType": "struct ISignatureTransfer.SignatureTransferDetails",
                    "components": [
                        {
                            "name": "to",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "requestedAmount",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                },
                {
                    "name": "signature",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "getBalancesOf",
            "inputs": [
                {
                    "name": "addr",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "token",
                    "type": "address",
                    "internalType": "contract IERC20"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getBalancesOfMsgSender",
            "inputs": [
                {
                    "name": "token",
                    "type": "address",
                    "internalType": "contract IERC20"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "init",
            "inputs": [
                {
                    "name": "supportedPemit2_",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "owner",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "permitDeposit",
            "inputs": [
                {
                    "name": "depositor",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "deadline",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "v",
                    "type": "uint8",
                    "internalType": "uint8"
                },
                {
                    "name": "r",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setSupportedToken",
            "inputs": [
                {
                    "name": "supportedToken_",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "tokensReceived",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "from",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "transferOwnership",
            "inputs": [
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "withdraw",
            "inputs": [
                {
                    "name": "token",
                    "type": "address",
                    "internalType": "contract IERC20"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "payable"
        },
        {
            "type": "event",
            "name": "Deposit",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Withdraw",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        }
] as const;

export const myPermitTokenAbi = [
        {
            "type": "constructor",
            "inputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "DOMAIN_SEPARATOR",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "allowance",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "approve",
            "inputs": [
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "balanceOf",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "decimals",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint8",
                    "internalType": "uint8"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "eip712Domain",
            "inputs": [],
            "outputs": [
                {
                    "name": "fields",
                    "type": "bytes1",
                    "internalType": "bytes1"
                },
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "version",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "chainId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "verifyingContract",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "salt",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "extensions",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getPermitTypehash",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "name",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "nonces",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "permit",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "deadline",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "v",
                    "type": "uint8",
                    "internalType": "uint8"
                },
                {
                    "name": "r",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "symbol",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "totalSupply",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "transfer",
            "inputs": [
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "transferFrom",
            "inputs": [
                {
                    "name": "from",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "transferWithCallback",
            "inputs": [
                {
                    "name": "_to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_amount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "event",
            "name": "Approval",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "EIP712DomainChanged",
            "inputs": [],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Transfer",
            "inputs": [
                {
                    "name": "from",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "to",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "error",
            "name": "ECDSAInvalidSignature",
            "inputs": []
        },
        {
            "type": "error",
            "name": "ECDSAInvalidSignatureLength",
            "inputs": [
                {
                    "name": "length",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "ECDSAInvalidSignatureS",
            "inputs": [
                {
                    "name": "s",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC20InsufficientAllowance",
            "inputs": [
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "allowance",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "needed",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC20InsufficientBalance",
            "inputs": [
                {
                    "name": "sender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "balance",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "needed",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC20InvalidApprover",
            "inputs": [
                {
                    "name": "approver",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC20InvalidReceiver",
            "inputs": [
                {
                    "name": "receiver",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC20InvalidSender",
            "inputs": [
                {
                    "name": "sender",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC20InvalidSpender",
            "inputs": [
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC2612ExpiredSignature",
            "inputs": [
                {
                    "name": "deadline",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC2612InvalidSigner",
            "inputs": [
                {
                    "name": "signer",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "InvalidAccountNonce",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "currentNonce",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "InvalidShortString",
            "inputs": []
        },
        {
            "type": "error",
            "name": "StringTooLong",
            "inputs": [
                {
                    "name": "str",
                    "type": "string",
                    "internalType": "string"
                }
            ]
        }
] as const;

export const permit2Addr = '0x000000000022d473030f116ddee9f6b43ac78ba3' as Address;
export const tokenBankAddr = '0xaaC22F108759CB7E9FA0D64d6242ABaf85BC0576' as Address;
export const myPermitTokenAddr = '0x35f9EcfC416d7Cd81928759866c24F2a49aDfF9e' as Address