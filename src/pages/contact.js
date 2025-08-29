
import React from 'react';

const Contact = () => {
    return (
        <section class="bg-white text-black px-6 py-12 max-w-3xl mx-auto rounded-lg shadow-md border border-brown-border">
            <h2 class="text-3xl font-bold mb-6 text-brown">Contact Us</h2>

            <form class="space-y-6">
                <div>
                    <label for="name" class="block text-inputLabel mb-1">Name</label>
                    <input type="text" id="name" name="name" class="w-full px-4 py-2 border border-grayBorder rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow" />
                </div>

                <div>
                    <label for="email" class="block text-inputLabel mb-1">Email</label>
                    <input type="email" id="email" name="email" class="w-full px-4 py-2 border border-grayBorder rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow" />
                </div>

                <div>
                    <label for="message" class="block text-inputLabel mb-1">Your Message</label>
                    <textarea id="message" name="message" rows="5" class="w-full px-4 py-2 border border-grayBorder rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow"></textarea>
                </div>

                <button type="submit" class="bg-red text-white px-6 py-2 rounded-md hover:bg-yellow transition-colors">
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;
