const about = () => {
  return (
    <>
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Welcome to{" "}
              <span className="text-red-500 font-semibold">Pizza Delight</span>,
              your go-to destination for the freshest, most delicious pizzas!
              We’re passionate about crafting the perfect slice, using only the
              finest ingredients and a whole lot of love.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                src="../images/icons8-pizza.png"
                alt="Fresh Ingredients"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Fresh Ingredients
              </h3>
              <p className="text-gray-600">
                We source the freshest produce and premium toppings to ensure
                every bite is bursting with flavor.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                src="../images/icons8-pizza-delivery.png"
                alt="Fast Delivery"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Craving pizza? We deliver hot and fresh pizzas straight to your
                doorstep in no time.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                src="../images/icons8-love.png"
                alt="Customer Love"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Customer Love
              </h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We’re here to make your pizza
                experience unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
