import React from "react";

function About() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">About This Project</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        This website offers 100+ high-quality, fast, and privacy-focused text and AI tools — all available for free. Whether you're a writer, developer, student, or content creator, these tools are designed to save time and simplify your work.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Built with ❤️ and Purpose</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Every tool is crafted to be intuitive, blazing fast, and mobile-friendly. No annoying ads, no login walls — just useful functionality.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        This platform is developed and maintained as a passion project to help users globally. We prioritize simplicity, accessibility, and quality.
      </p>

      <h2 className="text-2xl font-semibold mb-3">What's Next?</h2>
      <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
        <li>Launching more advanced AI tools</li>
        <li>Browser extensions and mobile-friendly versions</li>
        <li>Dark mode & offline support</li>
      </ul>
    </div>
  );
}

export default About;
