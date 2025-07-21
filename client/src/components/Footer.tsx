import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Virprit Print & Pack Solutions</h3>
            <p className="text-gray-300 mb-4">
              Leading manufacturer and supplier of printing and packaging solutions.
              Specializing in pharmaceutical boxes, labels, stickers, and custom packaging.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p><i className="fas fa-phone mr-2"></i>+91 86685 00982</p>
              <p><i className="fas fa-phone mr-2"></i>+91 92097 65493</p>
              <p><i className="fas fa-phone mr-2"></i>+91 88069 56519</p>
              <p><i className="fas fa-envelope mr-2"></i> virpritprint1311@gmail.com</p>
              <p><i className="fas fa-map-marker-alt mr-2"></i> B-52, 1st Floor, Wadhan Industrial Estate, near SBI Bank, Gaurai Pada, Vasai (E), Maharashtra 401208, India</p>
              <p><i className="fas fa-clock mr-2"></i> Mon-Sat: 10:00 AM - 6:00 PM</p>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Virprit Print & Pack Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
