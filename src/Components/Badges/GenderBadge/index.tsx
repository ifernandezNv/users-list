import {Icon} from "@iconify/react"

import { GenderEnum } from '../../../Pages/UsersPage/types'
type GenderBadgeProps = {
  gender: GenderEnum
}
const GenderBadge = ({gender}: GenderBadgeProps) => {
  return (
    <div className="flex items-center gap-1 px-2 w-fit text-slate-900 text-center">
      <Icon height={30} icon={gender === "male"  ? "map:male" : "map:female"} />
      <p>{gender}</p>
    </div>
  )
}

export default GenderBadge