"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
/**
 * next/link allows you to do client-side route transitions between pages, by
 * wrapping your anchor tags in a Link component. It also allows you to pass
 * props through to the linked page, which can be used to pre-render the page
 * with the correct data.
 *
 * Link uses the browser's history API to navigate between pages, which
 * allows it to work with the browser's back and forward buttons.
 *
 * @see https://nextjs.org/docs/api-reference/next/link
 */

const  Header = () => {
const cartItems = 0;

  
  return (
    <header className="border-b w-full border-palette-lighter sticky top-0 z-20 bg-white/10 backdrop-blur-md  border-white/50 shadow-lg">
       <link rel="icon" href="/favicon.ico" />
       <meta name="ecommerce" content="Next.js ecommerce" />
      <div className="flex items-center justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6">
        <Link href="/" passHref>
          <div className=" cursor-pointer">
            <h1 className="flex no-underline">
              
              <span className="text-xl font-primary font-bold tracking-tight pt-1">
                My ecommerce store
              </span>
            </h1>
          </div>
        </Link>
        <div>
          <Link
            href="/cart"
            passHref
          >
            
            <div className=" relative" aria-label="cart">
              <FontAwesomeIcon className="text-palette-primary w-6 m-auto" icon={faShoppingCart} />
              {
                cartItems === 0 ?
                  null
                  :
                  <div
                    className="absolute top-0 right-0 text-xs bg-yellow-300 text-gray-900 font-semibold rounded-full py-1 px-2 transform translate-x-10 -translate-y-3"
                  >
                    {cartItems}
                  </div>
              }
            </div>
          </Link>
        </div>
        <div>
        <i class="fa fa-sign-in" aria-hidden="true">Sign in</i>
        </div>
      </div>
    </header >
  )
}




export default Header;