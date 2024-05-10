import React from 'react'

export default function page() {
  return (
    <>
    <div class="title-link">
            <h1>Upload an Item</h1>
        </div>
        
        <form class="form" id="form">
            <fieldset>
                <label for="name">Name of Item:</label>
                <input type="text" id="name" name="name" required class="input"/>

                <label for="description">Description:</label>
                <textarea name="description" id="description" class="input" required></textarea>

                <label for="price">Price in QR:</label>
                <input type="number" id="price" name="price" required class="input"/>

                <label for="quantity">Quantity:</label>
                <input type="number" id="quantity" name="quantity" required class="input"/>

                <label for="image">Image URL:</label>
                <input type="url" id="imageUrl" name="imageUrl" class="input" required/>
                
            </fieldset>
            <div class="form-btns">
                <button type="submit">Submit</button>
            </div>
        </form>

    </>
  )
}
