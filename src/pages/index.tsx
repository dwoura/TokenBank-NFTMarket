import { shorten } from '@did-network/dapp-sdk'
import { useAccount } from 'wagmi'

import { Header } from '@/components/layout/Header'
import { NetworkSwitcher } from '@/components/SwitchNetworks'
import { WalletModal } from '@/components/WalletModal'
import { useCopyToClipboard } from '@/hooks/use-copy'
import WagmiIcon from '~icons/fisand-icons/wagmi-icon'

import approvePermit2 from '@/functions/tokenBank/_approvePermit2'
import DoSignTypedData from '@/functions/tokenBank/_sign';

import {TokenPermissions, PermitTransferFromType, SigTransferDetailsType, DepositData} from "@/functions/tokenBank/type";
import DepositWithPermit2 from "@/functions/tokenBank/_deposit";

function Home() {
  const { address } = useAccount()

  const [show, setShow] = useState(false)

  const toggleModal = (e: boolean) => {
    setShow(e)
  }

  const [, copy] = useCopyToClipboard()
  const { toast } = useToast()

  const copyHandler = useCallback(() => {
    copy('pnpm dlx fisand')

    toast({
      title: 'Copied success!',
    })
  }, [copy, toast])

  // eslint-disable-next-line @eslint-react/no-nested-components
  const Action = () => (
    <>
      <NetworkSwitcher />
      <WalletModal open={show} onOpenChange={toggleModal} close={() => setShow(false)}>
        {({ isLoading }) => (
          <Button className="mr-4 flex items-center">
            {isLoading && (
              <span className="i-line-md:loading-twotone-loop mr-1 h-4 w-4 inline-flex text-white" />
            )}
            {' '}
            {address ? shorten(address) : 'Connect Wallet'}
          </Button>
        )}
      </WalletModal>
    </>
  )

  // 签名状态存储
  const [depositData, setDepositData] = useState<DepositData | null>(null);

  return (
    <>
      <Header
        action={<Action />}
      />
      <div className="relative m-auto max-w-6xl min-h-[calc(100vh-8rem)] flex-col-center justify-start pt-16">
        <p
          className="bg-clip-text text-4xl font-bold lt-sm:text-2xl"
          style={{
            backgroundImage: 'linear-gradient(270deg, #B4EAA1 0%, #F8D07A 100%)',
            display: 'inline-block',
            lineHeight: 1,
            WebkitTextFillColor: 'transparent',
          }}
        >
          Welcome to Web3 TokenBank
        </p>
        <p className="mt-3 text-center text-5xl font-bold lt-sm:text-3xl">To deposit your token with permit2</p>
        <p className="group mt-3 text-center text-3xl lt-sm:text-xl">
          Safe for everyone.
          {' '}
          <br className="hidden lt-sm:block" />
          {' '}
          Built with
          {' '}
          <WagmiIcon className="h-5 inline-flex group-hover:animate-bounce-alt !animate-delay-300" />
          {' '}
          <span className="i-logos:vitejs h-5 w-5 inline-flex transition-all group-hover:animate-bounce-alt" />
          {' '}
          <span className="i-logos:unocss h-5 w-5 inline-flex transition-all group-hover:animate-bounce-alt !animate-delay-200" />
          .
        </p>
        {/* <div className="mt-8 flex-center">
          <div className="m-auto flex-center rounded-full bg-#666 px-8 py-2 text-white">
            pnpm dlx fisand
            <span className="i-carbon:copy ml-6 cursor-pointer active:scale-95" onClick={copyHandler} />
          </div>
        </div> */}
        <div className="m-auto mt-16 max-w-6xl flex flex-wrap items-stretch justify-center gap-8 px-4">
          <div className="rounded-lg p-.5 hover:animate-[conic_2.5s_infinite_linear] hover:bg-gradient-[from_var(--conic-deg),#B4EAA1,transparent,#B4EAA1] hover:bg-gradient-conic">
            <Card className="w-[318px] rounded-lg">
              <CardHeader>
                <CardTitle className="flex gap-1">
                  1. Approve
                </CardTitle>
                <CardDescription>Approve Tokens to permit2 contract</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex flex-col gap-4">
                  <span></span>
                  {approvePermit2()}
                  <span></span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="rounded-lg p-.5 hover:animate-[conic_2.5s_infinite_linear] hover:bg-gradient-[from_var(--conic-deg),#B4EAA1,transparent,#B4EAA1] hover:bg-gradient-conic">
            <Card className="w-[318px] rounded-lg">
              <CardHeader>
                <CardTitle className="flex gap-2">
                  2. Sign
                </CardTitle>
                <CardDescription>Sign with permit2 message</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex flex-col gap-4">
                  <span></span>
                    {/* {doSignTypedData()} */}
                    <DoSignTypedData setDepositData={setDepositData} />
                  <span></span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="rounded-lg p-.5 hover:animate-[conic_2.5s_infinite_linear] hover:bg-gradient-[from_var(--conic-deg),#B4EAA1,transparent,#B4EAA1] hover:bg-gradient-conic">
            <Card className="w-[318px] rounded-lg">
              <CardHeader>
                <CardTitle className="flex gap-2">
                  3. Deposit
                </CardTitle>
                <CardDescription>Deposit with permit2</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex flex-col gap-4">
                    <span></span>

                      {depositData && <DepositWithPermit2 depositData={depositData} />}

                    <span></span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <p className="py-5 text-center">
        <a className="App-link" href="https://wagmi.sh/" target="_blank" rel="noopener noreferrer">
          Wagmi Docs
        </a>
        {' | '}
        <a className="App-link" href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
          Vite Docs
        </a>
        {' | '}
        <a className="App-link" href="https://unocss.dev/" target="_blank" rel="noopener noreferrer">
          Unocss Docs
        </a>
      </p>
      <div className="border-t-1 border-border border-solid">
        <div className="mx-auto max-w-6xl py-6 text-center lt-sm:px-4 sm:px-8">© 2022-present Hang Zou</div>
      </div>
    </>
  )
}

export default Home
