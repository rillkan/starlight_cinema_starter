function getSubtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0)
}

function applyMemberDiscount(member, subtotal) {
  if (member.role.toLowerCase() === 'gold member') {
    return subtotal - subtotal * 10 / 100
  }
  return subtotal
}

function BookingSummary({ items, member }) {
  const subtotal = getSubtotal(items)
  const total = applyMemberDiscount(member, subtotal)

  return (
    <section className="card">
      <h2>Your booking</h2>
      <ul className="order-list">
        {items.map(item => (
          <li key={item.id}>
            <span>
              {item.qty} × {item.name}
            </span>
            <span>RM {(item.price * item.qty).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <p className="subtotal">Subtotal: RM {subtotal.toFixed(2)}</p>
      <p className="total">
        Total after 10% Gold Member discount: <strong>RM {total.toFixed(2)}</strong>
      </p>
    </section>
  )
}

export default BookingSummary
