const Footer = () => {
    return (
        <footer class="bg-gray-800 text-white py-8 mt-6">
        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="p-3">
            <h3 class="font-bold text-xl mb-4">About Us</h3>
            <ul>
              <li><a href="#" class="hover:text-gray-400">Our Story</a></li>
              <li><a href="#" class="hover:text-gray-400">Careers</a></li>
              <li><a href="#" class="hover:text-gray-400">Blog</a></li>
              <li><a href="#" class="hover:text-gray-400">Press</a></li>
            </ul>
          </div>
      
          <div>
            <h3 class="font-bold text-xl mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" class="hover:text-gray-400">Home</a></li>
              <li><a href="#" class="hover:text-gray-400">Products</a></li>
              <li><a href="#" class="hover:text-gray-400">Contact Us</a></li>
              <li><a href="#" class="hover:text-gray-400">FAQ</a></li>
            </ul>
          </div>
      
          <div>
            <h3 class="font-bold text-xl mb-4">Resources</h3>
            <ul>
              <li><a href="#" class="hover:text-gray-400">Documentation</a></li>
              <li><a href="#" class="hover:text-gray-400">API Reference</a></li>
              <li><a href="#" class="hover:text-gray-400">User Guide</a></li>
              <li><a href="#" class="hover:text-gray-400">Support</a></li>
            </ul>
          </div>
      
          <div>
            <h3 class="font-bold text-xl mb-4">Follow Us</h3>
            <ul>
              <li><a href="#" class="hover:text-gray-400">Facebook</a></li>
              <li><a href="#" class="hover:text-gray-400">Twitter</a></li>
              <li><a href="#" class="hover:text-gray-400">Instagram</a></li>
              <li><a href="#" class="hover:text-gray-400">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      
        <div class="border-t border-gray-700 pt-6 text-center">
          <p class="text-gray-400 text-sm">© 2025 Company Name. All rights reserved.</p>
        </div>
      </footer>
      
    );
  }
  
  export default Footer;
  