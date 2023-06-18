import { FC } from "react"
import { Service } from "../utils/interface"

const ServiceCard: FC<{ service: Service }> = ({
  service: { Icon, title, about },
}) => {
  function createMarkup() {
    return {
      __html: about,
    }
  }

  return (
    <div className="flex items-center space-x-4 p-2 ">
      <Icon className="text-green h-12 w-12" />
      <div className="">
        <h6 className="font-bold">{title}</h6>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  )
}

export default ServiceCard
