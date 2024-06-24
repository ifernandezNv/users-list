import { StatusEnum} from "../../../Pages/UsersPage/types"

type StatusBadgeProps = {
  status: StatusEnum
}

const StatusBadge = ({status}: StatusBadgeProps) => {
  return (
    <div className='flex items-center gap-2 font-bold'>
      <div className={`${status === "active" ? "bg-green-700" : "bg-red-600"} h-2  w-2 p-2 rounded-full`}></div>
      <p>{status}</p>
    </div>
  )
}

export default StatusBadge