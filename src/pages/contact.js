
import React from 'react';

const Contact = () => {
    return (
        <section class="bg-white text-black px-6 py-12 max-w-4xl mx-auto rounded-xl shadow-md border border-brown-border">
            <h2 class="text-4xl font-bold mb-4 text-brown">Contact Us</h2>
            <p class="text-inputLabel mb-8">We’d love to hear from you. Fill out the form and we’ll get back to you shortly.</p>

            <form class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="col-span-1">
                    <label for="name" class="block text-inputLabel mb-2">Name</label>
                    <input type="text" id="name" name="name" class="w-full px-4 py-3 border border-grayBorder rounded-md bg-white text-black focus:outline-none focus:border-0 focus:ring-2 focus:ring-red" />
                </div>

                <div class="col-span-1">
                    <label for="email" class="block text-inputLabel mb-2">Email</label>
                    <input type="email" id="email" name="email" class="w-full px-4 py-3 border border-grayBorder rounded-md bg-white text-black focus:outline-none focus:border-0 focus:ring-2 focus:ring-red" />
                </div>

                <div class="col-span-1 md:col-span-2">
                    <label for="subject" class="block text-inputLabel mb-2">Subject</label>
                    <input type="text" id="subject" name="subject" class="w-full px-4 py-3 border border-grayBorder rounded-md bg-white text-black focus:outline-none focus:border-0 focus:ring-2 focus:ring-red" />
                </div>

                <div class="col-span-1 md:col-span-2">
                    <label for="message" class="block text-inputLabel mb-2">Message</label>
                    <textarea id="message" name="message" rows="6" class="w-full px-4 py-3 border border-grayBorder rounded-md bg-white text-black focus:outline-none focus:border-0 focus:ring-2 focus:ring-red"></textarea>
                </div>

                <div class="col-span-1 md:col-span-2">
                    <button type="submit" class="bg-red text-white px-6 py-3 rounded-md hover:bg-red/70 transition-colors font-semibold">
                        Send Message
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Contact;
