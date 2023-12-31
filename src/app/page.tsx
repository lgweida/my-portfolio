
import { OrderDialog } from '@/components/ui/order-dialog'
import { OrderPopover } from '@/components/ui/order-popover'
import { PositionDataTable } from '@/components/ui/position'

import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p>main section</p>
        <p className="text-2xl">Large Text</p>
        <OrderDialog />
      </div>
      <div>
        <PositionDataTable />
      </div>
      <div>
        <OrderPopover />
      </div>

    </main>
  )
}
