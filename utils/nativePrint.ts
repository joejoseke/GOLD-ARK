/**
 * This file provides a bridge for printing HTML content from the web view
 * to a native Android device's printing service.
 */

// Define the interface for the Android Print bridge object
// This ensures type safety when accessing the native function
interface AndroidPrintInterface {
  printHtml(htmlContent: string): void;
}

// Extend the global Window interface to include our custom AndroidPrint object
// This lets TypeScript know about the object we're expecting from the native side
interface CustomWindow extends Window {
  AndroidPrint?: AndroidPrintInterface;
}

/**
 * Prints HTML content using a native Android interface if available,
 * otherwise falls back to the standard web browser printing method.
 * 
 * @param htmlContent The HTML string to be printed.
 */
export function nativePrintHtml(htmlContent: string): void {
  const customWindow = window as CustomWindow;

  // Check if the native Android print function exists on the window object
  if (customWindow.AndroidPrint && typeof customWindow.AndroidPrint.printHtml === 'function') {
    // If it exists, call the native function to handle printing.
    // This is the preferred method for mobile devices for direct printer access.
    console.log("Using native Android print interface.");
    customWindow.AndroidPrint.printHtml(htmlContent);
  } else {
    // If the native interface is not found, use the fallback web printing method.
    // This ensures compatibility with standard web browsers.
    console.log("Fallback to web print interface.");
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      printWindow.focus();
      // Use onload to ensure images are loaded before triggering the print dialog
      printWindow.onload = function() {
          printWindow.print();
          printWindow.close();
      };
    } else {
      // Alert the user if popups are blocked, as it prevents printing.
      alert('Please allow popups for this website to print.');
    }
  }
}
