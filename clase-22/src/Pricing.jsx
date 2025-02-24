import Card from "./components/Card"

const cards = [
    {
        title: "Free",
        price: "0",
        list: [
            "10 users included",
            "2 GB of storage",
            "Email support",
            "Help center access"
        ],
        action: "Sign up for free"
    },
    {
        title: "Pro",
        price: "15",
        list: [
            "20 users included",
            "10 GB of storage",
            "Priority email support",
            "Help center access"
        ],
        action: "Get started"
    },
    {
        title: "Enterprise",
        price: "29",
        list: [
            "30 users included",
            "15 GB of storage",
            "Phone and email support",
            "Help center access"
        ],
        action: "Contact us",
        styles: "border-primary"
    },
    {
        title: "Plus",
        price: "100",
        list: [
            "300 users included",
            "150 GB of storage",
            "Phone and email support",
            "Help center access"
        ],
        action: "Purchase",
        styles: "border-danger"
    }
];

function Pricing() {
    return (
        <section className="">
            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 className="display-4 fw-normal text-body-emphasis">Pricing</h1>
                <p className="fs-5 text-body-secondary">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
            </div>
            <main>
                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                    {cards.map((card, id) => {
                        return (
                            <div className="col" key={id}>
                                <Card
                                    title={card.title}
                                    price={card.price}
                                    list={card.list}
                                    action={card.action}
                                    styles={card?.styles}
                                />
                            </div>
                        )
                    })}                    
                </div>

                <h2 className="display-6 text-center mb-4">Compare plans</h2>

                <div className="table-responsive">
                    <table className="table text-center bg-secondary">
                        <thead>
                            <tr>
                                <th style={{ width: '34%' }}></th>
                                <th style={{ width: '22%' }}>Free</th>
                                <th style={{ width: '22%' }}>Pro</th>
                                <th style={{ width: '22%' }}>Enterprise</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className="text-start">Public</th>
                                <td>✅</td>
                                <td>✅</td>
                                <td>✅</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Private</th>
                                <td></td>
                                <td>✅</td>
                                <td>✅</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Permissions</th>
                                <td>✅</td>
                                <td>✅</td>
                                <td>✅</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Sharing</th>
                                <td></td>
                                <td>✅</td>
                                <td>✅</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Unlimited members</th>
                                <td></td>
                                <td>✅</td>
                                <td>✅</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Extra security</th>
                                <td></td>
                                <td></td>
                                <td>✅</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </section>
    )
}

export default Pricing