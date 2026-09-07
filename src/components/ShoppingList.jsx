import { useState } from "react";
import { Plus, Trash2, ShoppingBasket } from "lucide-react";

export default function ShoppingList() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    const cleanItem = item.trim();
    if (!cleanItem) return;
    setItems([...items, cleanItem]);
    setItem("");
  }

  function removeItem(indexToRemove) {
    setItems(items.filter((_, index) => index !== indexToRemove));
  }

  function handleSubmit(event) {
    event.preventDefault();
    addItem();
  }

  return (
    <article className="feature-card shopping-card">
      <div className="feature-icon"><ShoppingBasket size={28} /></div>
      <div className="shopping-content">
        <form onSubmit={handleSubmit} className="shopping-form">
          <input
            type="text"
            value={item}
            onChange={(event) => setItem(event.target.value)}
            placeholder="Add an item..."
          />
          <button type="submit" aria-label="Add item"><Plus size={18} />Add</button>
        </form>

        {items.length === 0 ? (
          <p className="empty-state">Your shopping list is empty.</p>
        ) : (
          <ul className="shopping-list">
            {items.map((shoppingItem, index) => (
              <li key={`${shoppingItem}-${index}`}>
                <span>{shoppingItem}</span>
                <button
                  className="remove-button"
                  onClick={() => removeItem(index)}
                  aria-label={`Remove ${shoppingItem}`}
                >
                  <Trash2 size={17} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
