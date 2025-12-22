export default function SimpleFooter() {
  return (
    <footer className="w-full border-t bg-white py-6 text-center text-sm text-gray-500 border-gray-200">
      &copy; {new Date().getFullYear()} Wizcoder. All rights reserved.
    </footer>
  );
}
