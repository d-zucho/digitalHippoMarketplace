'use client'

import { ShoppingCart } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import { Separator } from './ui/separator'
import { formatPrice } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

const Cart = () => {
  const itemCount = 2

  const fee = 1
  return (
    <Sheet>
      {/* adding group to the SheetTrigger element, will allow us to add a trigger effect that is
      declared in the shopping cart className */}
      <SheetTrigger className='group -m-2 flex items-center p-2'>
        <ShoppingCart
          className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
          aria-hidden='true'
        />
        <span className='ml2 - text-sm font-medium text-gray-700 group-hover:text-gray-800'>
          {itemCount}
        </span>
      </SheetTrigger>
      <SheetContent className='flex w-full flex-col pr00 sm:max-w-lg'>
        <SheetHeader className='space-y-2.5 pr-6'>
          <SheetTitle>Cart ({itemCount})</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className='flex w-full flex-col pr-6'>
              {/* TODO: cart logic */}
              cart items
            </div>
            <div className='space-y-4 pr-6'>
              <Separator />
              <div className='space-y-1.5 text-sm'>
                <div className='flex'>
                  <span className='flex-1'>Shipping</span>
                  <span>Free</span>
                </div>
              </div>
              <div className='flex'>
                <span className='flex-1'>Transaction Fee</span>
                <span>{formatPrice(fee)}</span>
              </div>
              <div className='flex'>
                <span className='flex-1'>Transaction Fee</span>
                <span>{formatPrice(fee)}</span>
              </div>
            </div>

            <SheetFooter>
              <SheetTrigger asChild>
                <Link
                  href='/cart'
                  className={buttonVariants({
                    className: 'w-full',
                  })}
                >
                  Continue to Checkout
                </Link>
              </SheetTrigger>
            </SheetFooter>
          </>
        ) : (
          <div></div>
        )}
      </SheetContent>
    </Sheet>
  )
}

export default Cart
