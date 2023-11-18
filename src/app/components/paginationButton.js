import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid"

const PaginationButton = ({ direction }) => {
  const iconStyle = "h-10 w-10 text-black"
  const icon =
    direction === "prev" ? (
      <ArrowLeftCircleIcon className={iconStyle} />
    ) : (
      <ArrowRightCircleIcon className={iconStyle} />
    )
  return (
    <button onClick={() => console.log("prev")} className="">
      {icon}
    </button>
  )
}

export default PaginationButton
