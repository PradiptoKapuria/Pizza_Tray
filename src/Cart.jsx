import React, { useState } from 'react'
import { FaTrash, FaPlus, FaMinus, FaCheckCircle } from 'react-icons/fa'

// ── Sample menu data ─────────────────────────────────────────────────────────
const MENU_ITEMS = [
  { id: 1, name: 'Mushroom Pizza',   price: 500 },
  { id: 2, name: 'Sausage Pizza',    price: 800 },
  { id: 3, name: 'BBQ Chicken',      price: 750 },
  { id: 4, name: 'Veggie Delight',   price: 600 },
  { id: 5, name: 'Pepperoni',        price: 700 },
  { id: 6, name: 'Four Cheese',      price: 850 },
  { id: 7, name: 'Spicy Mutton',       price: 780 },
  { id: 8, name: 'Margherita',       price: 550 },
]

// ── Helpers ──────────────────────────────────────────────────────────────────
const fmt = (n) => `Tk.${n.toLocaleString()}`

// ── Sub-components ────────────────────────────────────────────────────────────
const CartItem = ({ item, qty, onIncrease, onDecrease, onRemove }) => (
  <div className='flex items-center justify-between border-b-2 border-orange-200 py-4 gap-4'>
    {/* Name + price */}
    <div className='flex-1 min-w-0'>
      <p className='font-sfia text-orange-600 text-lg md:text-xl font-bold truncate'>{item.name}</p>
      <p className='font-sfia text-orange-400 text-base'>{fmt(item.price)} each</p>
    </div>

    {/* Qty controls */}
    <div className='flex items-center gap-2 shrink-0'>
      <button
        onClick={onDecrease}
        className='w-8 h-8 bg-orange-600 text-[#f9eedb] rounded flex items-center justify-center hover:bg-orange-700 transition-colors'
      >
        <FaMinus size={10} />
      </button>
      <span className='font-sfia text-orange-600 text-xl w-6 text-center'>{qty}</span>
      <button
        onClick={onIncrease}
        className='w-8 h-8 bg-orange-600 text-[#f9eedb] rounded flex items-center justify-center hover:bg-orange-700 transition-colors'
      >
        <FaPlus size={10} />
      </button>
    </div>

    {/* Line total */}
    <p className='font-sfia text-orange-600 text-lg font-bold w-[90px] text-right shrink-0'>
      {fmt(item.price * qty)}
    </p>

    {/* Remove */}
    <button
      onClick={onRemove}
      className='text-orange-300 hover:text-orange-600 transition-colors shrink-0'
    >
      <FaTrash size={14} />
    </button>
  </div>
)

// ── Main Cart Component ───────────────────────────────────────────────────────
const Cart = () => {
  // { itemId: qty }
  const [cart, setCart] = useState({})
  const [step, setStep] = useState('cart') // 'cart' | 'payment' | 'confirmed'
  const [form, setForm] = useState({
    name: '', phone: '', address: '',
    method: 'cash', // 'cash' | 'bkash' | 'nagad'
    txnId: '',
  })
  const [errors, setErrors] = useState({})

  // ── Cart helpers ────────────────────────────────────────────────────────────
  const addItem = (id) =>
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }))

  const removeItem = (id) =>
    setCart((c) => { const n = { ...c }; delete n[id]; return n })

  const changeQty = (id, delta) =>
    setCart((c) => {
      const next = (c[id] || 0) + delta
      if (next <= 0) { const n = { ...c }; delete n[id]; return n }
      return { ...c, [id]: next }
    })

  const cartEntries = Object.entries(cart).map(([id, qty]) => ({
    item: MENU_ITEMS.find((m) => m.id === Number(id)),
    qty,
  })).filter(e => e.item)

  const subtotal   = cartEntries.reduce((s, { item, qty }) => s + item.price * qty, 0)
  const delivery   = subtotal > 0 ? 60 : 0
  const total      = subtotal + delivery

  // ── Form validation ─────────────────────────────────────────────────────────
  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.phone.trim())   e.phone   = 'Phone is required'
    if (!form.address.trim()) e.address = 'Address is required'
    if ((form.method === 'bkash' || form.method === 'nagad') && !form.txnId.trim())
      e.txnId = 'Transaction ID is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleConfirm = () => {
    if (!validate()) return

    // ── Build WhatsApp message ──────────────────────────────────────────────
    const itemLines = cartEntries
      .map(({ item, qty }) => `  - ${item.name} × ${qty} — ${fmt(item.price * qty)}`)
      .join('\n')

    const txnLine = (form.method === 'bkash' || form.method === 'nagad')
      ? `\nTransaction ID: ${form.txnId}` : ''

    const message =
`🍕 New Order!

Name: ${form.name}
Phone: ${form.phone}
Address: ${form.address}

Items:
${itemLines}

Subtotal: ${fmt(subtotal)}
Delivery: ${fmt(delivery)}
Total: ${fmt(total)}

Payment: ${form.method === 'cash' ? 'Cash on Delivery' : form.method === 'bkash' ? 'bKash' : 'Nagad'}${txnLine}`

    window.open(`https://wa.me/8801344834043?text=${encodeURIComponent(message)}`, '_blank')
    setStep('confirmed')
  }

  // ── Input helper ────────────────────────────────────────────────────────────
  const field = (label, key, placeholder, type = 'text') => (
    <div className='flex flex-col gap-1'>
      <label className='font-sfia text-orange-600 text-lg font-bold'>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={form[key]}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        className={`border-2 rounded px-3 py-2 font-sfia text-orange-600 bg-[#f9eedb] placeholder-orange-300 outline-none focus:border-orange-600 transition-colors text-base ${errors[key] ? 'border-red-500' : 'border-orange-300'}`}
      />
      {errors[key] && <span className='text-red-500 text-sm font-sfia'>{errors[key]}</span>}
    </div>
  )

  // ── CONFIRMED ───────────────────────────────────────────────────────────────
  if (step === 'confirmed') {
    return (
      <section className='bg-[#f9eedb] min-h-screen flex flex-col items-center justify-center px-4 py-16'>
        <FaCheckCircle className='text-orange-600 text-[80px] mb-6' />
        <h1 className='font-sfia text-orange-600 text-[56px] md:text-[80px] font-extrabold text-center leading-tight'>
          Order Confirmed!
        </h1>
        <p className='font-sfia text-orange-500 text-xl md:text-2xl text-center mt-4 max-w-md'>
          Thank you, <span className='font-bold text-orange-600'>{form.name}</span>! Your pizza is being prepared and will reach you shortly.
        </p>
        <p className='font-sfia text-orange-600 text-2xl font-bold mt-6'>
          Total Paid: {fmt(total)}
        </p>
        <button
          onClick={() => { setCart({}); setForm({ name:'', phone:'', address:'', method:'cash', txnId:'' }); setStep('cart') }}
          className='mt-10 bg-orange-600 text-[#f9eedb] font-sfia px-10 py-4 text-2xl rounded hover:bg-orange-700 transition-colors'
        >
          Back to Menu
        </button>
      </section>
    )
  }

  // ── PAYMENT ─────────────────────────────────────────────────────────────────
  if (step === 'payment') {
    return (
      <section className='bg-[#f9eedb] min-h-screen px-4 py-10'>
        <div className='max-w-xl mx-auto'>
          <h1 className='font-sfia text-orange-600 text-[56px] md:text-[80px] font-extrabold leading-tight mb-2'>
            Checkout
          </h1>
          <p className='font-sfia text-orange-400 text-xl mb-8'>Fill in your details below</p>

          <div className='flex flex-col gap-5'>
            {field('Your Name', 'name', 'e.g. Rahim Uddin')}
            {field('Phone Number', 'phone', 'e.g. 01712345678', 'tel')}
            {field('Delivery Address', 'address', 'House, Road, Area, City')}

            {/* Payment method */}
            <div className='flex flex-col gap-2'>
              <label className='font-sfia text-orange-600 text-lg font-bold'>Payment Method</label>
              <div className='flex gap-3 flex-wrap'>
                {[
                  { value: 'cash',  label: '💵 Cash on Delivery' },
                  { value: 'bkash', label: '📱 bKash' },
                  { value: 'nagad', label: '📱 Nagad' },
                ].map(({ value, label }) => (
                  <button
                    key={value}
                    onClick={() => setForm({ ...form, method: value, txnId: '' })}
                    className={`font-sfia px-4 py-2 rounded border-2 text-base transition-colors ${
                      form.method === value
                        ? 'bg-orange-600 text-[#f9eedb] border-orange-600'
                        : 'bg-[#f9eedb] text-orange-600 border-orange-300 hover:border-orange-600'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile banking instructions */}
            {(form.method === 'bkash' || form.method === 'nagad') && (
              <div className='bg-orange-100 border-2 border-orange-300 rounded p-4'>
                <p className='font-sfia text-orange-600 font-bold text-base'>
                  Send {fmt(total)} to:
                </p>
                <p className='font-sfia text-orange-600 text-xl font-extrabold mt-1'>
                  {form.method === 'bkash' ? 'bKash' : 'Nagad'}: 01344-834043
                </p>
                <p className='font-sfia text-orange-500 text-sm mt-1'>
                  Use "Send Money" and enter the Transaction ID below.
                </p>
                {field('Transaction ID', 'txnId', 'e.g. TXN8K2J9X1')}
              </div>
            )}

            {/* Order summary */}
            <div className='bg-orange-600 rounded-2xl p-5 text-[#f9eedb] mt-2'>
              <h2 className='font-sfia text-2xl font-extrabold mb-3'>Order Summary</h2>
              {cartEntries.map(({ item, qty }) => (
                <div key={item.id} className='flex justify-between font-sfia text-base mb-1'>
                  <span>{item.name} × {qty}</span>
                  <span>{fmt(item.price * qty)}</span>
                </div>
              ))}
              <div className='border-t border-orange-400 mt-3 pt-3 flex flex-col gap-1'>
                <div className='flex justify-between font-sfia text-base'>
                  <span>Subtotal</span><span>{fmt(subtotal)}</span>
                </div>
                <div className='flex justify-between font-sfia text-base'>
                  <span>Delivery</span><span>{fmt(delivery)}</span>
                </div>
                <div className='flex justify-between font-sfia text-xl font-extrabold mt-1'>
                  <span>Total</span><span>{fmt(total)}</span>
                </div>
              </div>
            </div>

            <div className='flex gap-3 mt-2'>
              <button
                onClick={() => setStep('cart')}
                className='flex-1 border-2 border-orange-600 text-orange-600 font-sfia px-6 py-4 text-xl rounded hover:bg-orange-100 transition-colors'
              >
                ← Back
              </button>
              <button
                onClick={handleConfirm}
                className='flex-1 bg-orange-600 text-[#f9eedb] font-sfia px-6 py-4 text-xl rounded hover:bg-orange-700 transition-colors'
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // ── CART ────────────────────────────────────────────────────────────────────
  return (
    <section className='bg-[#f9eedb] min-h-screen px-4 py-10'>
      <div className='max-w-5xl mx-auto'>

        <h1 className='font-sfia text-orange-600 text-[56px] md:text-[100px] font-extrabold leading-tight'>
          Your Cart
        </h1>

        <div className='flex flex-col lg:flex-row gap-10 mt-4'>

          {/* ── LEFT: Add items from menu ── */}
          <div className='w-full lg:w-1/2'>
            <h2 className='font-sfia text-orange-600 text-3xl font-extrabold mb-4 border-b-2 border-orange-300 pb-2'>
              Add Items
            </h2>
            <div className='flex flex-col gap-3'>
              {MENU_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className='flex items-center justify-between bg-white rounded-xl px-4 py-3 border-2 border-orange-100 hover:border-orange-300 transition-colors'
                >
                  <div>
                    <p className='font-sfia text-orange-600 text-lg font-bold'>{item.name}</p>
                    <p className='font-sfia text-orange-400 text-base'>{fmt(item.price)}</p>
                  </div>
                  <button
                    onClick={() => addItem(item.id)}
                    className='bg-orange-600 text-[#f9eedb] font-sfia px-4 py-2 rounded text-base hover:bg-orange-700 transition-colors flex items-center gap-2'
                  >
                    <FaPlus size={10} /> Add
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Cart + totals ── */}
          <div className='w-full lg:w-1/2'>
            <h2 className='font-sfia text-orange-600 text-3xl font-extrabold mb-4 border-b-2 border-orange-300 pb-2'>
              Order
            </h2>

            {cartEntries.length === 0 ? (
              <div className='text-center py-16'>
                <p className='font-sfia text-orange-300 text-2xl'>Your cart is empty.</p>
                <p className='font-sfia text-orange-300 text-lg mt-2'>Add some pizzas from the left!</p>
              </div>
            ) : (
              <>
                {cartEntries.map(({ item, qty }) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    qty={qty}
                    onIncrease={() => changeQty(item.id, 1)}
                    onDecrease={() => changeQty(item.id, -1)}
                    onRemove={() => removeItem(item.id)}
                  />
                ))}

                {/* Totals */}
                <div className='mt-6 bg-orange-600 rounded-2xl p-5 text-[#f9eedb]'>
                  <div className='flex justify-between font-sfia text-lg mb-1'>
                    <span>Subtotal</span><span>{fmt(subtotal)}</span>
                  </div>
                  <div className='flex justify-between font-sfia text-lg mb-1'>
                    <span>Delivery</span><span>{fmt(delivery)}</span>
                  </div>
                  <div className='flex justify-between font-sfia text-2xl font-extrabold border-t border-orange-400 pt-3 mt-2'>
                    <span>Total</span><span>{fmt(total)}</span>
                  </div>
                </div>

                <button
                  onClick={() => setStep('payment')}
                  className='w-full mt-4 bg-orange-600 text-[#f9eedb] font-sfia py-4 text-2xl rounded hover:bg-orange-700 transition-colors'
                >
                  Proceed to Checkout →
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart