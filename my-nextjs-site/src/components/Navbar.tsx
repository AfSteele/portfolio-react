import { Button } from "./ui/button";

export default function Navbar() {
    return (
        <nav className = "bg-white shadow-md">
           <div className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className = "flex items-center justify-between h-20">
                    <div className = "flex items-center">
                        <a href="/">
                            <img
                                src="/aspen-logo.png" 
                                alt="Aspen Steele Logo"
                                className="h-8 w-auto"
                            />
                        </a>
                    </div>
                    <div className = "md:flex md:space-x-8 flex items-center space-x-"> 
                        <a href="/about-me" className = "text-gray-600 hover:text-gray-900">About Me</a>
                        <a href="/projects" className = "text-gray-600 hover:text-gray-900">Projects</a>
                        <a href="/contact">
                            <Button className="gradient-blue-red p-t-4 p-b-4 px-6 text-white font-semibold">
                                Contact
                            </Button>
                        </a>
                    </div>
                </div>
           </div>
        </nav>
    );
}