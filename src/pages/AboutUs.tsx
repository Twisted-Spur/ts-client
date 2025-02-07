export default function AboutUs(){
    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>

                {/* Our Story Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Story</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        We are a small business in the heartland of the midwest US, from little ol' Creal Springs, IL.
                        Creal Springs, IL is as small town as you can get and we embrace where we came from.  We cannot thank
                        you enough for the supporting us!
                    </p>
                </section>

                {/* Our Mission Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Mission</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Our mission will always be to please our customers the best we can. We want
                        to forge strong bonds with every customer we work with.  If we do not have something
                        you are looking for, then reach out to us and we will work with you quickly to help find
                        what you are looking for.  If that requires multiple design iterations, let's work through it!
                    </p>
                </section>
            </div>
        </div>
    );
};
