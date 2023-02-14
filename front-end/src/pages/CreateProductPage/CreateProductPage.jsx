
export default function CreateProductPage() {
    return (
        <div>
            <h2> Create New Product</h2>
            <form>
                <div>
                    <label>Name</label>
                    <input type='text' />
                </div>
                <div>
                    <label>Price</label>
                    <input type='number' />
                </div>
                <div>
                    <label>Url</label>
                    <input type='text' />
                </div>
                <button type='submit'>Create new Product</button>
            </form>
    </div>
    )
}