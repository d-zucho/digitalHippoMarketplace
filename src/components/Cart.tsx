'use client'

import { ShoppingCart } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

const Cart = () => {
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
          0
        </span>
      </SheetTrigger>
      <SheetContent className='flex w-full flex-col pr00 sm:max-w-lg'>
        <SheetHeader className='space-y-2.5 pr-6'>
          <SheetTitle>Cart (0)</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default Cart
