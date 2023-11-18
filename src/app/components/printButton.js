import { PrinterIcon } from "@heroicons/react/24/solid"

const PrintButton = () => {
  return (
    <button
      onClick={() => window.print()}
      className="hidden md:flex fixed bottom-10 right-6 p-2 bg-green-500 text-white rounded-md"
    >
      <PrinterIcon className="h-6 w-6 text-white" />
      Print
    </button>
  )
}
export default PrintButton
