
import { GenderEnum } from '../../types'
type GenderBadgeProps = {
    gender: GenderEnum
}
const GenderBadge = ({gender}: GenderBadgeProps) => {
  return (
    <div className={`${gender === "male" ? "bg-cyan-600" : "bg-violet-600"} px-2 py-1 rounded-lg w-fit text-white text-center font-bold`}>
        <p>{gender}</p>
    </div>
  )
}

export default GenderBadge