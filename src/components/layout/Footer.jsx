export default function Footer() {
    return (
        <div className="w-full bg-base-300">
            <footer className="footer sm:footer-horizontal border-t-2
                               text-base-content px-8 py-3">

                <aside className="flex flex-col items-center space-y-2">
                    <img src="/src/assets/logo.png"
                        alt="Fakely Logo"
                        className="w-16 h-16" />
                    <p className="text-sm text-base-content/70 text-center">
                        Providing reliable tech since 2025
                    </p>
                </aside>

                <nav className="space-y-2">
                    <h6 className="footer-title mb-1">Services</h6>
                    <a className="link link-hover text-sm">Custom Model Training</a>
                    <a className="link link-hover text-sm">System Integration</a>
                    <a className="link link-hover text-sm">Real-time Monitoring & Alerts</a>
                </nav>

                <nav className="space-y-2">
                    <h6 className="footer-title mb-1">Company</h6>
                    <a className="link link-hover text-sm">About us</a>
                    <a className="link link-hover text-sm">Contact</a>
                    <a className="link link-hover text-sm">Jobs</a>
                    <a className="link link-hover text-sm">Press kit</a>
                </nav>

                <nav className="space-y-2">
                    <h6 className="footer-title mb-1">Legal</h6>
                    <a className="link link-hover text-sm">Terms of use</a>
                    <a className="link link-hover text-sm">Privacy policy</a>
                    <a className="link link-hover text-sm">Cookie policy</a>
                </nav>
            </footer>

            <p className="flex justify-center items-center text-sm 
                          text-base-content">
                © {new Date().getFullYear()} Fakely — All rights reserved.
            </p>
        </div>
    );
}
