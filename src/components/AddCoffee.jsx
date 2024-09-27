


const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(newCoffee);

    };

    return (
        <div className="bg-[#F4F3F0] p-24 mt-24">
            <h2 className="text-3xl font-extrabold text-yellow-700">Add a new kind of coffee in the shop.</h2>
            <form onSubmit={handleAddCoffee}>
                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Enter Coffee Name" name="name" className="input input-bordered w-full" />
                        </label>
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Enter Supplier " name="supplier" className="input input-bordered w-full" />
                        </label>
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Enter Category" name="category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Enter Available Quantity" name="quantity" className="input input-bordered w-full" />
                        </label>
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Enter Taste" name="taste" className="input input-bordered w-full" />
                        </label>
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Enter Details" name="details" className="input input-bordered w-full" />
                        </label>
                    </div>


                </div>
                <div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="photo URL" id="" className="input input-bordered w-full" />
                        </label>

                    </div>
                </div>
                <button className="btn btn-active btn-accent mt-4 w-full">Add Coffee</button>

            </form>
        </div>
    );
};

export default AddCoffee;